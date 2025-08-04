package com.ems.controller;


import com.ems.model.Code;
import com.ems.model.Event;
import com.ems.model.QRData;
import com.ems.service.EventService;
import com.ems.service.QRCodeService;
import com.ems.service.QRDataService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/Data")
public class QRDetailsController {

    @Autowired
    private QRDataService qrDataService;

    @Autowired
    private EventService eventService;

    @GetMapping("/response/{Id}")
    public String generateQR(@PathVariable Long Id, Model model, HttpServletResponse response, HttpSession session) {

        try {
            QRData data = qrDataService.getData(Id);
            Event eventData = null;
            if(data!=null){
                eventData = eventService.findById(data.getEventId());
            }
            if(eventData!=null && data!=null){
                int freq = data.getFreq();
                if(freq==3 || freq==2 || freq==1){
                    Date date = eventData.getDate();
                    String replace = date.toString().replace("05:30:00.0", "");
                    model.addAttribute("noDate",replace);
                    model.addAttribute("user", data);
                    model.addAttribute("event", eventData);
                    model.addAttribute("codeObj", new Code());
                    session.setAttribute("noDate",replace);
                    session.setAttribute("user", data);
                    session.setAttribute("event", eventData);
                    session.setAttribute("codeObj", new Code());
                    response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
                    response.setHeader("Pragma", "no-cache");
                    response.setHeader("Expires", "0");
                    return "Details";
                }else{
                    qrDataService.deleteData(data.getUsername());
                    return "Entered";
                }
            }
            else return "Entered";
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping("/get/{Id}")
    public ResponseEntity<List<QRData>> getRegistrations(@PathVariable Long Id){
        return qrDataService.getRegisterations(Id);
    }

    @DeleteMapping("delete/{username}")
    public ResponseEntity<String> deleteEnteredUser(@PathVariable String username){
        return qrDataService.deleteData(username);
    }
}
