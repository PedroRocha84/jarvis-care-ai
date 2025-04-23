package com.jarviscare.you.services;

import com.jarviscare.you.model.procedure.Exam;
import com.jarviscare.you.model.procedure.MedicalAppointment;
import com.jarviscare.you.model.procedure.Treatment;

import java.time.LocalDateTime;

public interface MedicalProcedureService {


    Treatment createTreatment(LocalDateTime dateTime, String treatmentName, int sessionsNumber);

    Exam createExam(LocalDateTime dateTime, String examType, String examLocation);

    MedicalAppointment createMedicalAppointment(LocalDateTime dateTime, String speciality, String doctorName);
}
