package com.jarviscare.you.controllers.web;

import com.jarviscare.you.model.User;
import com.jarviscare.you.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
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
        return userService.getUsers();
    }

    // GET /users/{username} - Get a specific user
    @RequestMapping(method = RequestMethod.GET, path = "/users/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.getUserByEmail(username);
    }

    // POST /users - Add a new user via JSON
    @PostMapping(path = {"/users", "/users/"})
    public String addUser(@RequestBody User user) {
        userService.add(user);
        return "User added successfully!";
    }
}
