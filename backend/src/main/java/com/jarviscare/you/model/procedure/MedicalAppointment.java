package com.jarviscare.you.model.procedure;

import java.time.LocalDateTime;

public class MedicalAppointment extends MedicalProcedure {

    private String speciality;
    private String doctorName;

    public MedicalAppointment(LocalDateTime dateTime) {
        super(dateTime, ProcedureType.MEDICAL_APPOINTMENT);
        this.speciality = "<UNK>";
        this.doctorName = "<UNK>";
    }
    @Override
    public String getDescription() {
        return " Medical appointment with Dr.º " + doctorName + " From Speciality: "+speciality;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }


}
