package com.jarviscare.you.controllers.web;

import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.services.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicine-info")
public class MedicineController {

  private MedicineService medicineService;

  @Autowired
  public MedicineController(MedicineService medicineService) {
      this.medicineService = medicineService;
  }

    @RequestMapping(method = RequestMethod.GET, path = {"/", ""})
    public List<Medicine> getMedication(){
      return medicineService.getMedications();
  }

    @PostMapping(path = {"/add"})
    public Medicine addMedication(@RequestBody Medicine medicine) {
      medicineService.addMedication(medicine);
      return medicine;
    }

}
