package com.jarviscare.you.controllers.web;

import com.jarviscare.you.model.User;
import com.jarviscare.you.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    // Inject the service
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET /users - Return all users as JSON
    @RequestMapping(method = RequestMethod.GET, path = {"/users", "/users/"})
    public List<User> getAllUsers() {
        return userService.list();
    }

    // POST /users - Add a new user via JSON
    @RequestMapping(method = RequestMethod.POST, path = {"/register", "/register/"})
    public ResponseEntity<String> addUser (@RequestBody User user) {
        userService.add(user);
        return ResponseEntity.ok("User added successfully");
    }

}
