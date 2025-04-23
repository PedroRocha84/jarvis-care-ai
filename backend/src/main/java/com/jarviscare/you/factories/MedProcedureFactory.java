package com.jarviscare.you.factories;

import com.jarviscare.you.model.procedure.*;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class MedProcedureFactory {

    public MedicalProcedure createMedProcedure(ProcedureType procedureType, LocalDateTime dateTime) {

        MedicalProcedure procedure;
        switch (procedureType) {
            case MEDICAL_APPOINTMENT:
                procedure = new MedicalAppointment(dateTime);
                break;
            case EXAM:
                procedure = new Exam(dateTime);
                break;
            case TREATMENT:
                procedure = new Treatment(dateTime);
                break;
            default:
                procedure = null;
        }
        return procedure;
    }
}
