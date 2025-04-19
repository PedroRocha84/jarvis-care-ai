package com.jarviscare.you.services;

import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;

import java.util.List;

public interface UserService {

    User get(int userId) throws Exception;

    /**
     * Add a given user to user list
     * @param user the user to add
     * @return the user
     */
    void add(User user);

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


}
