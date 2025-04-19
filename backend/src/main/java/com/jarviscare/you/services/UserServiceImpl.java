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

    private int getNextId() {
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
            user.setId(getNextId());
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

    public void addMedicine(Integer id, Medicine medicine){
        User user = null;

      try {
          user = get(id);
      } catch (UserNotFoundException e) {
          System.out.println("ALERT: Medicine already exists, please choose another medicine");
          System.out.println(e.getMessage());
      }

      medicineService.addMedicine(medicine);
      user.addMedicine(medicine);
  }

    @Autowired
    public void setMedicineService(MedicineServiceImpl medicineService) {
        this.medicineService = medicineService;
    }

    public void setUsers(Map<Integer, User> users) { this.users = users;}


}
