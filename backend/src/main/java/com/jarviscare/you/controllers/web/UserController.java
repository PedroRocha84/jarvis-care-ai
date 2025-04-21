package com.jarviscare.you.controllers.web;

import com.jarviscare.you.model.User;
import com.jarviscare.you.services.UserService;
import com.jarviscare.you.services.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserServiceImpl userService;

    // Inject the service
    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    // GET /users - Return all users as JSON
    @RequestMapping(method = RequestMethod.GET, path = {"/user", "/user/"})
    public List<User> getAllUsers() {
        return userService.list();
    }

    // POST /user - Add a new user via JSON
    @RequestMapping(method = RequestMethod.POST, path = {"/user/register", "user/register/"})
    public ResponseEntity<String> addUser (@RequestBody User user) {
        userService.add(user);
        return ResponseEntity.ok("User added successfully");
    }

    // PUT /user - Update an existing user via JSON
    @RequestMapping(method = RequestMethod.PUT, path = {"/user/{id}", "/user/{id}/"})
    public ResponseEntity<String> updateUser (@PathVariable Integer id, @RequestBody User user) {
        if(!userService.userExists(id)){ ResponseEntity.status(HttpStatus.NOT_FOUND); return null; }
        user.setId(id);
        userService.update(user);
        return ResponseEntity.ok("User updated successfully");
    }

    @Autowired
    public void setUserService(UserServiceImpl userService) {this.userService = userService;}
}
