package com.jarviscare.you.model;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class Medicine {

    private int medicineId;

    private String medicineName;

    private String medicineDosage;

    private List<String> medicineHours;

    private List<String> medicineWeekDays;

    private LocalDate lastDayOfMedicine;

    public Integer getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(int medicineId) {
        this.medicineId = medicineId;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }

    public String getMedicineDosage() {
        return medicineDosage;
    }

    public void setMedicineDosage(String medicineDosage) {
        this.medicineDosage = medicineDosage;
    }

    public List<String> getMedicineHours() {
        return medicineHours;
    }

    public void setMedicineHours(List<String> medicineHours) {
        this.medicineHours = medicineHours;
    }

    public List<String> getMedicineWeekDays() {
        return medicineWeekDays;
    }

    public void setMedicineWeekDays(List<String> medicineWeekDays) {
        this.medicineWeekDays = medicineWeekDays;
    }

    public LocalDate getLastDayOfMedicine() {
        return lastDayOfMedicine;
    }

    public void setLastDayOfMedicine(LocalDate lastDayOfMedicine) {
        this.lastDayOfMedicine = lastDayOfMedicine;
    }
}

