package com.jarviscare.you.services;

import com.jarviscare.you.model.Medicine;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {

    private final List<Medicine> medicineList = new ArrayList<>();

    private int id = 1;

    @Override
    public void addMedicine(Medicine medicine) {
        medicine.setMedicineId(id++);
        medicineList.add(medicine);

    }

    @Override
    public List<Medicine> getMedicine() {
        return new ArrayList<>(medicineList);
    }
}
