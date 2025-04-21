package com.jarviscare.you.services;

import com.jarviscare.you.exceptions.UserNotFoundException;
import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService {
    private Map<Integer, User> users;
    private MedicineServiceImpl medicineService;
    private Map<Integer, Medicine> medicineMap = new HashMap<>();
    public UserServiceImpl() { users = new HashMap<>(); }

    /***
     * Get the user with the id
     * @param id the users' id
     * @return user
     * @throws UserNotFoundException
     */
    @Override
    public User get(int id) throws UserNotFoundException {
        if(!users.containsKey(id)){
            throw new UserNotFoundException();
        }
        return users.get(id);
    }

    /**
     * Check if the user exists
     * @param id the users' id
     * @return true if the user exists
     */
    public boolean userExists(Integer id) { return users.containsKey(id); }

    @Override
    public Integer getUserNextId() {
        return users.isEmpty() ? 1: Collections.max(users.keySet()) + 1;
    }

    /***
     * @see UserService#list
     * @return a list of users
     */
    @Override
    public List<User> list() {
        return new ArrayList<>(users.values());
    }

    /***
     * @see UserService#list()
     * @param user the user to add
     */
    @Override
    public void add(User user) {

        if(!userExists(user.getId())){
            user.setId(getUserNextId());
        }

        String passHashed = PasswordManager.hashPassword(user.getPassword());
        user.setPassword(passHashed);

        users.put(user.getId(), user);

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
        users.put(user.getId(), user);
    }

    @Override
    public void deleteMedicine(Integer medicineId) {
        try{
            Medicine medicine = medicineMap.get(medicineId);
            if (medicine != null) {
                medicineMap.remove(medicineId);
            }

        }catch(Exception e){
            e.printStackTrace();
        }
    }

    /***
     * Add new medicine
     * @param medicine the medicine
     */
    @Override
    public void addMedicine(Medicine medicine) {

        if (medicine.getMedicineId() == 0) {
            Integer nextId = getMedicineNextId();
            medicine.setMedicineId(nextId);
            medicineMap.put(nextId, medicine);
        } else {
            medicineMap.put(medicine.getMedicineId(), medicine);
        }
    }

    @Override
    public Integer getMedicineNextId() {
        return medicineMap.isEmpty() ? 1: Collections.max(medicineMap.keySet()) + 1;
    }


    @Autowired
    public void setMedicineService(MedicineServiceImpl medicineService) {
        this.medicineService = medicineService;
    }


    public void setUsers(Map<Integer, User> users) { this.users = users;}


}
