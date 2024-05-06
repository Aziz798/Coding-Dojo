package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;
import java.util.Objects;

public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private Integer employeeID;
    private String role;
    private ArrayList<String> securityIncidents;

    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser(Integer id ,String role){
        this.id=id;
        this.role=role;
        this.securityIncidents=new ArrayList<>();
    }
    // TO DO: Implement HIPAACompliantUser!
    @Override
    public boolean assignPin(int pin) {
        if (String.valueOf(pin).length()>=6){
            this.pin=pin;
            return true;
        }else return false;
    }

    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        boolean authorization = Objects.equals(confirmedAuthID, this.id);
        if (authorization){
            return true;
        }else {
            authIncident();
            return false;
        }
    }
    // TO DO: Implement HIPAACompliantAdmin!
    @Override
    public ArrayList<String> reportSecurityIncidents() {
        return this.securityIncidents;
    }

    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n",
            new Date(), this.id, notes
        );
        this.securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n",
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }

    // TO DO: Setters & Getters
    public Integer getEmployeeID(){
        return this.employeeID;
    }
    public void setEmployeeID(Integer id){
        this.employeeID = id;
    }

    public String getRole(){
        return this.role;
    }

    public void setRole(String role){
        this.role = role;
    }

    public ArrayList<String> getSecurityIncidents(){
        return this.securityIncidents;
    }

    public void setSecurityIncidents(ArrayList<String> securityIncidents){
        this.securityIncidents = securityIncidents;
    }
}
