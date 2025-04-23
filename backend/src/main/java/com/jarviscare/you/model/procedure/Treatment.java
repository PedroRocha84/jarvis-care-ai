package com.jarviscare.you.model.procedure;

import java.time.LocalDateTime;

public class Treatment extends MedicalProcedure {

    private String treatmentName;
    private int sessionsNumber;

    public Treatment(LocalDateTime dateTime) {
        super(dateTime, ProcedureType.TREATMENT);
        this.treatmentName = "";
        this.sessionsNumber = 0;
    }

    @Override
    public String getDescription() {
        return "Treatment: " + treatmentName + ", with " + sessionsNumber+ " sessions.";
    }

    public String getTreatmentName() {
        return treatmentName;
    }

    public void setTreatmentName(String treatmentName) {
        this.treatmentName = treatmentName;
    }

    public int getSessionsNumber() {
        return sessionsNumber;
    }

    public void setSessionsNumber(int sessionsNumber) {
        this.sessionsNumber = sessionsNumber;
    }
}
