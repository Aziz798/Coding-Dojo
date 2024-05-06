package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;
import java.util.Objects;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	
	// TO DO: Constructor that takes an IdCopy
    public Physician(int id){
        super();
        this.setId(id);
    }
    // TO DO: Implement HIPAACompliantUser!
    @Override
    public boolean assignPin(int pin) {
        if (String.valueOf(pin).length() == 4){
            this.pin=pin;
            return true;
        }else return false;
    }

    @Override
    public boolean accessAuthorized(Integer confirmedAuthID) {
        return Objects.equals(confirmedAuthID, this.getId());
    }
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }



    // TO DO: Setters & Getters
}
