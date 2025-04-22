package com.jarviscare.you.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

public class User {

    private int id;
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    private String phone;
    private String address;
    private String city;
    private String zipCode;
    private String country;

    private List<Medicine> medicines;

    /**
     * Initializes a new {@code User} instance
     */
    public User(){
        medicines = new ArrayList<>();
    }

    public void addMedicine(Medicine medicine){medicines.add(medicine); }

    /**
     * Get the user id
     * @return the user id
     */
    public Integer getId() { return id; }

    /**
     * Set the user id
     * @param id the user id
     */
    public void setId(int id) {this.id = id;}

    /**
     * Get the user first name
     * @return the user first name
     */
    public String getFirstname() {return firstname;}

    /**
     * Set the user first name
     * @param firstname
     */
    public void setFirstname(String firstname) {this.firstname = firstname;}
    /**
     * Get the user last name
     * @return the user last name
     */
    public String getLastname() {return lastname;}

    /***
     * Set the user last name
     * @param lastname
     */
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    /***
     * Get the user email
     * @return
     */
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String state) {
        this.zipCode = state;
    }

    public String getCountry() {return country;}

    public void setCountry(String country) {
        this.country = country;
    }

    public List<Medicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(List<Medicine> medicines) {
        this.medicines = medicines;
    }
}
