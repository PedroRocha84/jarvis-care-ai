package com.jarviscare.you.controllers.web;

import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;
import com.jarviscare.you.services.MedicineServiceImpl;
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
    private MedicineServiceImpl medicineService;

    // Inject the service
    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @Autowired
    public void setMedicineService(MedicineServiceImpl medicineService) {
        this.medicineService = medicineService;
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

    @RequestMapping(method = RequestMethod.POST, path = "/user/{id}/medicines/add")
    public ResponseEntity<String> addMedicine(@PathVariable Integer id, @RequestBody Medicine medicine) {
        try {
            User user = userService.get(id);
            user.addMedicine(medicine);
            return ResponseEntity.status(HttpStatus.CREATED).body("medicine added successfully");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/user/{uid}/medicines/{mid}/remove")
    public ResponseEntity<String> removeMedicine(@PathVariable Integer uid, @PathVariable Integer mid) {
        try{
            if(!userService.userExists(uid)){
                ResponseEntity.status(HttpStatus.NOT_FOUND);
                return null;
            }
            if(medicineService.get(mid) != null){
                userService.deleteMedicine(mid);
                return ResponseEntity.ok("medicine removed successfully");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("medicine not found");

        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
