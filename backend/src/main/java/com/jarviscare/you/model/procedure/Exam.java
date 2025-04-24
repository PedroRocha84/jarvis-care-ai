package com.jarviscare.you.model.procedure;

import java.time.LocalDateTime;

public class Exam extends MedicalProcedure {

    private String examType;
    private String examLocation;

    public Exam(LocalDateTime dateTime) {
        super(dateTime, ProcedureType.EXAM);
        this.examType = "<UNK>";
        this.examLocation = "<UNK>";
    }
    @Override
    public String getDescription() {
        return "Exam " + examType + " at " + examLocation;
    }

    public String getExamType() {
        return examType;
    }

    public void setExamType(String examType) {
        this.examType = examType;
    }

    public String getExamLocation() {
        return examLocation;
    }

    public void setExamLocation(String examLocation) {
        this.examLocation = examLocation;
    }


}
