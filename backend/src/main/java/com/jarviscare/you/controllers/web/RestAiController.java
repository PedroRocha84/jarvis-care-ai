package com.jarviscare.you.controllers.web;
import com.jarviscare.you.services.AiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/ai")
public class RestAiController {

    private AiService aiService;
    //http://localhost:8080/jarvis/api/ai/quote
    @RequestMapping(method = RequestMethod.POST, path = {"/quote", "/quote/"})
    public ResponseEntity<?> quote() {
        try {

            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("quote", aiService.motivationalQuote());
            return new ResponseEntity<>(responseBody, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @Autowired
    public void setAiService(AiService aiService) {
        this.aiService = aiService;
    }
}