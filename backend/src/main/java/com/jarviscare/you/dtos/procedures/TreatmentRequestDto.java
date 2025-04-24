package com.jarviscare.you.dtos.procedures;

import java.time.LocalDateTime;

public class TreatmentRequestDto {

    private LocalDateTime dateTime;
    private String treatmentName;
    private Integer sessionsNumber;

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public String getTreatmentName() {
        return treatmentName;
    }

    public void setTreatmentName(String treatmentName) {
        this.treatmentName = treatmentName;
    }

    public Integer getSessionsNumber() {
        return sessionsNumber;
    }

    public void setSessionsNumber(Integer sessionsNumber) {
        this.sessionsNumber = sessionsNumber;
    }
}
