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


    public Integer getNextId() { return medicineMap.isEmpty() ? 1 : Collections.max(medicineMap.keySet()) + 1;}

    @Override
    public Medicine get(int medicineId) {
        return medicineMap.get(medicineId);
    }

    @Override
    public void add(Medicine medicine){
        medicineMap.put(getNextId(), medicine);
    }

    @Override
    public void delete(Integer id) {
        medicineMap.remove(id);
    }

}
