package com.jarviscare.you.services;

import com.jarviscare.you.model.Medicine;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MedicineServiceImpl implements MedicineService {

    private Map<Integer, Medicine> medicineMap;

    /***
     * Initializes the MedicineServiceImpl with a new {@code hashmap}
     */
    public MedicineServiceImpl() { medicineMap = new HashMap<>(); }

    /***
     * Add new medicine
     * @param medicine the medicine
     */
    @Override
    public void addMedicine(Medicine medicine) {
        if(medicine.getMedicineId() == null){
            medicine.setMedicineId(getNextId());
        }

        medicineMap.put(medicine.getMedicineId(), medicine);
   }

    private Integer getNextId() { return medicineMap.isEmpty() ? 1 : Collections.max(medicineMap.keySet()) + 1;}

    @Override
    public Medicine get(int medicineId) {
        return medicineMap.get(medicineId);
    }
}
