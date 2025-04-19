package com.jarviscare.you.services;

import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;

import java.util.List;

public interface UserService {

    /**
     * Add a given user to customer list
     * @param user the user to add
     * @return the user
     */
    void add(User user);

    List<User> getUsers();

    User getUserById(int id);

    User getUserByEmail(String email);

    Medicine addUserMedicine(Medicine medicine, User user);

    List<Medicine> getListUserMedicines();

}
