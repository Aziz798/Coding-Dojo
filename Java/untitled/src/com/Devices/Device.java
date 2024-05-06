package com.Devices;

public class Device {
    private Integer battery ;

    public Device(){
        this.battery=100;
    }

    public Integer getBattery() {
        return this.battery;
    }
    public void setBattery(Integer battery){
        this.battery+=battery;
    }
}
