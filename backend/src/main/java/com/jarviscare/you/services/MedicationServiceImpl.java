package com.jarviscare.you.services;

import com.jarviscare.you.model.Medication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicationServiceImpl implements MedicationService {


    @Override
    public Medication addMedication(Medication medication) {
        Medication medication1 = new Medication();
        medication1.setMedicationId(medication.getMedicationId());
        medication1.setMedicationName(medication.getMedicationName());
        medication1.setMedicationHours(medication.getMedicationHours());
        medication1.setMedicationWeekDays(medication.getMedicationWeekDays();
        medication1.setLastDayOfMedication(medication.getLastDayOfMedication());
        medication1.add
        return medication1;
    }

    @Override
    public List<Medication> getMedications() {
        return List.of();
    }
}
