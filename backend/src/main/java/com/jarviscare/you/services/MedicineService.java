package com.jarviscare.you.services;

import com.jarviscare.you.model.Medicine;

import java.util.List;

public interface MedicineService {

    void addMedication(Medicine medicine);

    List<Medicine> getMedications();

}
