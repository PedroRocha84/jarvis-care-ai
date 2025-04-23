package com.jarviscare.you.services;

import com.jarviscare.you.exceptions.UserNotFoundException;
import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;
import com.jarviscare.you.model.procedure.Exam;
import com.jarviscare.you.model.procedure.MedicalAppointment;
import com.jarviscare.you.model.procedure.Treatment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class UserServiceImpl implements UserService {

    private Map<Integer, User> usersMap;
    private MedicineServiceImpl medicineService;
    private MedicalProcedureService medicalProcedureService;

    public UserServiceImpl() {
        usersMap = new HashMap<>();
    }

    @Override
    public User get(int id) throws UserNotFoundException {
        if (!usersMap.containsKey(id)) {
            throw new UserNotFoundException();
        }
        return usersMap.get(id);
    }

    public boolean userExists(Integer id) {
        return usersMap.containsKey(id);
    }

    private int getNextId() {
        return usersMap.isEmpty() ? 1 : Collections.max(usersMap.keySet()) + 1;
    }

    @Override
    public List<User> list() {
        return new ArrayList<>(usersMap.values());
    }

    @Override
    public void add(User user) {
        if (!userExists(user.getId())) {
            user.setId(getNextId());
        }

        String passHashed = PasswordManager.hashPassword(user.getPassword());
        user.setPassword(passHashed);

        usersMap.put(user.getId(), user);
    }

    @Override
    public void update(User user) {
        user.setId(user.getId());
        user.setFirstname(user.getFirstname());
        user.setLastname(user.getLastname());
        user.setEmail(user.getEmail());
        user.setPassword(PasswordManager.hashPassword(user.getPassword()));
        user.setPhone(user.getPhone());
        user.setAddress(user.getAddress());
        user.setCity(user.getCity());
        user.setZipCode(user.getZipCode());
        user.setCountry(user.getCountry());
        usersMap.put(user.getId(), user);
    }

    @Override
    public void addMedicine(Integer userId, Medicine medicine) {
        int nextId = medicineService.getNextId(); // Delegated
        medicine.setMedicineId(nextId);

        User user = usersMap.get(userId);
        if (user != null) {
            user.addMedicine(medicine);
        }

        medicineService.add(medicine); // Store in global map
    }

    @Override
    public void deleteMedicine(Integer userId, Medicine medicine) {
        if (medicine == null) return;

        medicineService.delete(medicine.getMedicineId()); // Global delete

        User user = usersMap.get(userId);
        if (user != null) {
            List<Medicine> medicines = user.getMedicines();
            for (int i = 0; i < medicines.size(); i++) {
                if (medicines.get(i).getMedicineId().equals(medicine.getMedicineId())) {
                    medicines.remove(i);
                    break;
                }
            }
        }
    }


    public Treatment createTreatment(Integer userId, LocalDateTime dateTime, String treatmentName, int sessionNumber) {

        User user = usersMap.get(userId);
        Treatment treatment = null;
        if (user != null) {
            treatment = medicalProcedureService.createTreatment(dateTime, treatmentName, sessionNumber);
            user.addMedicalProcedure(treatment);
        }
        return treatment;
    }

    public Exam createExam(Integer userId, LocalDateTime dateTime, String examType, String examLocation) {
        User user = usersMap.get(userId);
        Exam exam = null;
        if (user != null) {
            exam = medicalProcedureService.createExam(dateTime, examType, examLocation);
            user.addMedicalProcedure(exam);
        }
        return exam;
    }

    public MedicalAppointment createMedicalAppointment(Integer userId, LocalDateTime dateTime, String speciality, String doctorName) {
        User user = usersMap.get(userId);
        MedicalAppointment appointment = null;
        if (user != null) {
            appointment = medicalProcedureService.createMedicalAppointment(dateTime, speciality, doctorName);
            user.addMedicalProcedure(appointment);
        }
        return appointment;
    }

    public void deleteMedicalProcedure(Integer userId, Integer MedicalProcedureId) {

        User user = usersMap.get(userId);
        if (user != null) {
            user.getMedicalProcedures().removeIf(mp -> Objects.equals(mp.getId(), MedicalProcedureId));
        }
    }


    public User getUserByEmail(String email) {

        return usersMap.values().stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst().orElse(null);

    }

    @Autowired
    public void setMedicalProcedureService(MedicalProcedureService medicalProcedureService) {
        this.medicalProcedureService = medicalProcedureService;
    }


    @Autowired
    public void setMedicineService(MedicineServiceImpl medicineService) {
        this.medicineService = medicineService;
    }
}