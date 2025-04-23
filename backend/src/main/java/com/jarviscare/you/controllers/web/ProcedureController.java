package com.jarviscare.you.controllers.web;

import com.jarviscare.you.dtos.procedures.*;
import com.jarviscare.you.exceptions.ProcedureNotFundException;
import com.jarviscare.you.exceptions.UserNotFoundException;
import com.jarviscare.you.model.User;
import com.jarviscare.you.model.procedure.Exam;
import com.jarviscare.you.model.procedure.MedicalAppointment;
import com.jarviscare.you.model.procedure.MedicalProcedure;
import com.jarviscare.you.model.procedure.Treatment;
import com.jarviscare.you.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RestController
@RequestMapping("/api/user/")
public class ProcedureController {

    private UserService userService;

    @RequestMapping(method = RequestMethod.GET, path = "/{id}/procedures")
    public ResponseEntity<List<MedicalProcedure>> listProcedures(@PathVariable Integer id) {
        try {
            User user = userService.get(id);
            List<MedicalProcedure> procedures = Optional.ofNullable(user.getMedicalProcedures())
                    .orElse(Collections.emptyList());

            return new ResponseEntity<>(procedures, HttpStatus.OK);

        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.POST, path = "/{id}/procedures/exam")
    public ResponseEntity<ProcedureResponseDto> createExam(@RequestBody ExamRequestDto examRequest, @PathVariable Integer id) {
        try {
            User user = userService.get(id);

            Exam exam = userService.createExam(user.getId(), examRequest.getDateTime(), examRequest.getExamType(), examRequest.getExamLocation());

            return new ResponseEntity<>(new ProcedureResponseDto(exam.getId(),exam.getDescription()), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.POST, path = "/{id}/procedures/treatment")
    public ResponseEntity<ProcedureResponseDto> createTreatment(@RequestBody TreatmentRequestDto treatmentRequest, @PathVariable Integer id) {
        try {
            User user = userService.get(id);

            Treatment treatment = userService.createTreatment(user.getId(), treatmentRequest.getDateTime(), treatmentRequest.getTreatmentName(), treatmentRequest.getSessionsNumber());

            return new ResponseEntity<>(new ProcedureResponseDto(treatment.getId(),treatment.getDescription()), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.POST, path = "/{id}/procedures/appointment")
    public ResponseEntity<ProcedureResponseDto> createAppointment(@RequestBody AppointmentRequestDto appointmentRequest, @PathVariable Integer id) {
        try {
            User user = userService.get(id);

            MedicalAppointment appointment = userService.createMedicalAppointment(user.getId(), appointmentRequest.getDateTime(), appointmentRequest.getSpeciality(), appointmentRequest.getDoctorName());

            return new ResponseEntity<>(new ProcedureResponseDto(appointment.getId(),appointment.getDescription()), HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}/procedures/{pid}")
    public ResponseEntity<ProcedureResponseDto> deleteProcedure(@PathVariable Integer id, @PathVariable Integer pid) {
        try {
        User user = userService.get(id);
        MedicalProcedure procedure = user.getMedicalProcedures().stream().filter(p-> Objects.equals(p.getId(), pid)).findFirst().orElseThrow(() -> new ProcedureNotFundException());

        userService.deleteMedicalProcedure(user.getId(), pid);

        return new ResponseEntity<>(new ProcedureResponseDto(procedure.getId(), "Procedure: "+ procedure.getType()+ "successfully deleted."), HttpStatus.OK);
        } catch (UserNotFoundException | ProcedureNotFundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
