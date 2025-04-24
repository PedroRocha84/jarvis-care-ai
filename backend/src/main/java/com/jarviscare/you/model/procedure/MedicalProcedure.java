package com.jarviscare.you.model.procedure;

import java.time.LocalDateTime;

public abstract class MedicalProcedure {


    private Integer id;
    private LocalDateTime dateTime;
    private ProcedureType type;

    public MedicalProcedure(LocalDateTime dateTime, ProcedureType type) {
        this.dateTime = dateTime;
        this.type = type;
    }

    public abstract String getDescription();

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public ProcedureType getType() {
        return type;
    }

    public void setType(ProcedureType type) {
        this.type = type;
    }

    public Integer getId(){return id;}

    public void setId(int id) {this.id = id;}
}
