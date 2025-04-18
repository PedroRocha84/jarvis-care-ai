package com.jarviscare.you.model;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Medication {

    private String medicationId;

    private String medicationName;

    private List<Integer> medicationHours;

    private List<String> medicationWeekDays;

    public void setMedicationHours(List<Integer> medicationHours) {
        this.medicationHours = medicationHours;
    }

    public void setMedicationWeekDays(List<String> medicationWeekDays) {
        this.medicationWeekDays = medicationWeekDays;
    }

    private int lastDayOfMedication;

    private String medicationDosage;

    public String getMedicationId() {
        return medicationId;
    }

    public void setMedicationId(String medicationId) {
        this.medicationId = medicationId;
    }

    public String getMedicationName() {
        return medicationName;
    }

    public void setMedicationName(String medicationName) {
        this.medicationName = medicationName;
    }

    public List<Integer> getMedicationHours() {
        return medicationHours;
    }

    public List<String> getMedicationWeekDays() {
        return medicationWeekDays;
    }

    public int getLastDayOfMedication() {
        return lastDayOfMedication;
    }

    public void setLastDayOfMedication(int lastDayOfMedication) {
        this.lastDayOfMedication = lastDayOfMedication;
    }

    public String getMedicationDosage() {
        return medicationDosage;
    }

    public void setMedicationDosage(String medicationDosage) {
        this.medicationDosage = medicationDosage;
    }
}
