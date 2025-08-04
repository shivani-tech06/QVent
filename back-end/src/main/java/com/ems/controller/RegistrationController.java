package com.ems.controller;

import com.ems.model.Event;
import com.ems.model.Registration;
import com.ems.model.User;
import com.ems.service.EventService;
import com.ems.service.RegistrationService;
import com.ems.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/registrations")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;

    // (Further endpoints would be defined here in your full code)
}