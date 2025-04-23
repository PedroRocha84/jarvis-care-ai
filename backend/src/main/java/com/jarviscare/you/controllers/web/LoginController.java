package com.jarviscare.you.controllers.web;

import com.jarviscare.you.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/")
public class LoginController {

    @RequestMapping(method = RequestMethod.POST, path = "/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        String hardcodedEmail = "queijo22@gmail.com";
        String hardcodedPassword = "sadfghjFon$92";

        if (hardcodedEmail.equalsIgnoreCase(user.getEmail()) &&
                hardcodedPassword.equals(user.getPassword())) {

            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("user", hardcodedEmail);
            response.put("token", "abc123-fake-token");

            return ResponseEntity.ok(response);
        } else {
            Map<String, String> error = new HashMap<>();
            error.put("message", "Invalid email or password");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }
    }
    }