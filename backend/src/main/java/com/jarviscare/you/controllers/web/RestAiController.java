package com.jarviscare.you.controllers.web;
import com.jarviscare.you.services.AiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ai")
public class RestAiController {

    private AiService aiService;
    //http://localhost:8080/jarvis/api/ai
    @RequestMapping(method = RequestMethod.POST, path = {"", "/"})
    public ResponseEntity<String> quote() {
        try {
            return new ResponseEntity<>(aiService.motivationalQuote(), HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @Autowired
    public void setAiService(AiService aiService) {
        this.aiService = aiService;
    }
}
