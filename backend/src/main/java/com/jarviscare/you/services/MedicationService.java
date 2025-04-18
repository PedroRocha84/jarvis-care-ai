package com.jarviscare.you.services;

import com.jarviscare.you.model.Medication;

import java.util.List;

public interface MedicationService {

    Medication addMedication(Medication medication);

    List<Medication> getMedications();
}
