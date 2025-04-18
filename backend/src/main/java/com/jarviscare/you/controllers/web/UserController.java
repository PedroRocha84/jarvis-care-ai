package com.jarviscare.you.controllers.web;

import com.jarviscare.you.model.User;
import com.jarviscare.you.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/register")
public class UserController {

    private UserService userService;

    // Inject the service
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET /users - Return all users as JSON
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getUsers();
    }

    // GET /users/{username} - Get a specific user
    @GetMapping("/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.getUserByEmail(username);
    }


}
