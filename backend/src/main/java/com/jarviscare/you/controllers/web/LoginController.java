package com.jarviscare.you.controllers.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class LoginController {

    @GetMapping("/login")
    public String showLoginForm() {
        return "login"; // returns login.html or login.jsp depending on view resolver
    }

}
