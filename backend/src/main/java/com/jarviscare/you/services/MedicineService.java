package com.jarviscare.you.services;

import com.jarviscare.you.model.Medicine;

public interface MedicineService {

    Medicine get(int id);

    void add(Medicine medicine);

    void delete(Integer id);



}
