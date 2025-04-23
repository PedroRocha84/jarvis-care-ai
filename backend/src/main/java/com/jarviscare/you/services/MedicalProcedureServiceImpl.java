package com.jarviscare.you.services;

import com.jarviscare.you.factories.MedProcedureFactory;
import com.jarviscare.you.model.procedure.Exam;
import com.jarviscare.you.model.procedure.MedicalAppointment;
import com.jarviscare.you.model.procedure.ProcedureType;
import com.jarviscare.you.model.procedure.Treatment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MedicalProcedureServiceImpl implements MedicalProcedureService {

    private MedProcedureFactory medFactory;
    private static Integer ultimoId = 0;

    public Treatment createTreatment(LocalDateTime dateTime, String treatmentName, int sessionsNumber) {

        Treatment treatment = (Treatment) medFactory.createMedProcedure(ProcedureType.TREATMENT, dateTime);

        treatment.setId(++ultimoId);
        treatment.setTreatmentName(treatmentName);
        treatment.setSessionsNumber(sessionsNumber);

        ultimoId++;
        return treatment;
    }

    public Exam createExam(LocalDateTime dateTime, String examType, String examLocation) {

        Exam exam = (Exam) medFactory.createMedProcedure(ProcedureType.EXAM, dateTime);
        exam.setId(++ultimoId);
        exam.setExamType(examType);
        exam.setExamLocation(examLocation);

        ultimoId++;
        return exam;
    }

    public MedicalAppointment createMedicalAppointment(LocalDateTime dateTime, String speciality, String doctorName) {

        MedicalAppointment medicalAppointment = (MedicalAppointment) medFactory.createMedProcedure(ProcedureType.MEDICAL_APPOINTMENT, dateTime);
        medicalAppointment.setId(++ultimoId);
        medicalAppointment.setSpeciality(speciality);
        medicalAppointment.setDoctorName(doctorName);

        ultimoId++;
        return medicalAppointment;
    }

    @Autowired
    public void setMedFactory(MedProcedureFactory medFactory) {
        this.medFactory = medFactory;
    }
}
