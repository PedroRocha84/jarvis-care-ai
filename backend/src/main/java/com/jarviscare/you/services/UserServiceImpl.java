package com.jarviscare.you.services;

import com.jarviscare.you.model.Medicine;
import com.jarviscare.you.model.User;

import jakarta.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    private int id = 1;

    private List<User> users = new ArrayList<User>();

    private Map<User, Medicine> userMedicines = new HashMap<User, Medicine>();

    private MedicineServiceImpl medicineServiceImpl = new MedicineServiceImpl();


    @Override
    public void add(User user) {
        boolean emailExists = users.stream()
                .anyMatch(u -> u.getEmail().equalsIgnoreCase(user.getEmail()));

        if (emailExists) {
            throw new RuntimeException("User already exists, please choose another email");
        }

        user.setId(id++);

        String passHashed = PasswordManager.hashPassword(user.getPassword());
        user.setPassword(passHashed);

        users.add(user);
    }

    @Override
    public List<User> getUsers() {
        return new ArrayList<>(users);
    }

    @Override
    public User getUserById(int id) {
        return users.stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElse(null);
    }

    @GetMapping("/{email}")
    public User getUserByEmail(String email) {
        return users.stream()
                .filter(user -> user.getEmail().equals(email))
                .findFirst()
                .orElse(null);
    }


    @Override
    public Medicine addUserMedicine(Medicine medicine, User user) {
        if (medicineServiceImpl.getMedicine().contains(medicine)) {
            System.out.println("ALERT: Medicine already exists, please choose another medicine");
        }
        user.getMedicines().add(medicine);
        return medicine;
    }

    @Override
    public List<Medicine> getListUserMedicines() {

        userMedicines.get(user);
        return new ArrayList<>(userMedicines.values());
    }

    @Autowired
    public MedicineServiceImpl getMedicineServiceImpl() {
        return medicineServiceImpl;
    }
}
