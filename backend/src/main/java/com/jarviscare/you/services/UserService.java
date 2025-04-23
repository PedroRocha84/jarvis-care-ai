package com.jarviscare.you.services;

import com.jarviscare.you.exceptions.UserNotFoundException;
import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;
import com.jarviscare.you.model.procedure.Exam;
import com.jarviscare.you.model.procedure.MedicalAppointment;
import com.jarviscare.you.model.procedure.Treatment;

import java.time.LocalDateTime;
import java.util.List;

public interface UserService {

    /**
     * Add a given user to user list
     * @param user the user to add
     * @return the user
     */
    void add(User user);

    /**
     * Get the user from its userId
     * @param userId the user identification number
     * @return the user
     * @throws UserNotFoundException user not found exception
     */
    User get(int userId) throws UserNotFoundException;

    /***
     * Update a given user
     * @param user the user that will be changed
     */
    void update(User user);

    /***
     * List all users
     * @return a list of users
     */

    List<User> list();

    void addMedicine(Integer userId, Medicine medicine);

    void deleteMedicine(Integer userId, Medicine medicine);

    Treatment createTreatment(Integer userId, LocalDateTime dateTime , String treatmentName, int sessionNumber);

    Exam createExam(Integer userId, LocalDateTime dateTime, String examType, String examLocation);

    MedicalAppointment createMedicalAppointment(Integer userId, LocalDateTime dateTime, String speciality, String doctorName);

    void deleteMedicalProcedure(Integer userId, Integer MedicalProcedureId);

}
