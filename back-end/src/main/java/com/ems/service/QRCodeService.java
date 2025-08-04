package com.ems.service;


import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

@Service
public class QRCodeService {
    private static final String QR_API_URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

//    private String API_KEY="ntzqtyavncptqutgnsgtowkrrunohjkoujpzptdx";

    public ResponseEntity<byte[]> generateQRCode(String apiPath) {
        RestTemplate restTemplate = new RestTemplate();

        // Construct the URL with query parameters
        String qrApiUrl = null;

        qrApiUrl = QR_API_URL + apiPath;

        // Set up headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "image/png");

        HttpEntity<String> entity = new HttpEntity<>(headers);

        // Make GET request
        ResponseEntity<byte[]> response = restTemplate.exchange(qrApiUrl, HttpMethod.GET, entity, byte[].class);

        // Return the QR Code as ResponseEntity
        if (response.getStatusCode().is2xxSuccessful()) {
            HttpHeaders responseHeaders = new HttpHeaders();
            responseHeaders.setContentType(MediaType.IMAGE_PNG);
            return new ResponseEntity<>(response.getBody(), responseHeaders, HttpStatus.OK);
        } else {
            // Handle error response
            return ResponseEntity.status(response.getStatusCode())
                    .body(("Failed to generate QR Code. Error: " + response.getStatusCode()).getBytes());
        }
    }
}