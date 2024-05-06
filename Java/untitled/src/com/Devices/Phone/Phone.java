package com.Devices.Phone;

import com.Devices.Device;

public class Phone extends Device {
    public Phone(){
        super();
    }

    public Phone makeCall(){
        this.setBattery(-5);
        if(this.getBattery()<=10){
            System.out.println("battery critical");
        }
        return this;
    }
    public Phone playGame(){
        if(this.getBattery()>25){
            this.setBattery(-20);
            if(this.getBattery()<=10){
                System.out.println("battery critical");
            }
        }else System.out.println("Can't play when battery under 25%");
        return this;
    }
    public Phone charge(){
        this.setBattery(50);
        if(this.getBattery()>=100){
            System.out.println("Phone is charged");
            this.setBattery(100-this.getBattery());
        }
        return this;
    }
}
