package com.jarviscare.you.controllers.web;

import com.jarviscare.you.exceptions.UserNotFoundException;
import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;
import com.jarviscare.you.services.MedicineService;
import com.jarviscare.you.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user/")
public class MedicineController {

  private MedicineService medicineService;

  private UserService userService;

  @RequestMapping(method = RequestMethod.GET, path = "/{id}/medicines")
  public ResponseEntity<List<Medicine>> listMedicines(@PathVariable Integer id) {
    try {
      User user = userService.get(id);
      List<Medicine> medicines = user.getMedicines();

      return new ResponseEntity<>(medicines, HttpStatus.OK);

    } catch (UserNotFoundException e) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @RequestMapping(method = RequestMethod.POST, path = "/{id}/medicines/add")
  public ResponseEntity<String> addMedicine(@PathVariable Integer id, @RequestBody Medicine medicine) {
      try {
          userService.addMedicine(id, medicine);
          return ResponseEntity.status(HttpStatus.CREATED).body("medicine added successfully");
      } catch (Exception e) {
          throw new RuntimeException(e);
      }

  }

  @RequestMapping(method = RequestMethod.DELETE, path = "/{uid}/medicines/{mid}/delete")
  public ResponseEntity<String> deleteMedicine(@PathVariable Integer uid, @PathVariable Integer mid) {
      Medicine medicine = medicineService.get(mid);
      if (medicine == null) {
          return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Medicine not found");
      }
      userService.deleteMedicine(uid, medicine);

      return ResponseEntity.status(HttpStatus.OK).body("medicine deleted successfully");
  }

    @Autowired
    public void setUserService(UserService userService) {this.userService = userService;}

    @Autowired
    public void setMedicineService(MedicineService medicineService) {
        this.medicineService = medicineService;
    }
}
