package com.ems.controller;

import com.ems.model.Event;
import com.ems.model.QRData;
import com.ems.service.EventService;
import com.ems.service.QRCodeService;
import com.ems.service.QRDataService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("QR")
public class QRController {

    @Autowired
    private QRCodeService qrCodeService;

    @Autowired
    private QRDataService qrDataService;

    @Autowired
    private EventService eventService;

    private long id;

    @PostMapping("/generate")
    public ResponseEntity<?> generateQR(@RequestBody String url) {
        try {
            ObjectMapper om = new ObjectMapper();
            JsonNode jsonNode = om.readTree(url);
            String url1 = jsonNode.path("url").asText();
            url1 = url1 + "/" + id;
            return qrCodeService.generateQRCode(url1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/QRData")
    public ResponseEntity<String> generateQR(@RequestBody QRData dataz) {
        try {
            QRData data1 = qrDataService.createData(dataz);
            while (data1 == null) {
                id = data1.getId();
            }
            id = data1.getId();
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}