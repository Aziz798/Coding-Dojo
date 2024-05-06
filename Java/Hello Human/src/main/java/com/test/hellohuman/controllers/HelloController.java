package com.test.hellohuman.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("")
    public String index(@RequestParam(value = "name", required = false) String name,
                        @RequestParam(value = "last_name", required = false) String lastName,
                        @RequestParam(value = "times", required = false) Integer num) {
        String greeting = "Hello " + (name != null ? name : "Human") +
                (lastName != null ? " " + lastName : "");

        if (num != null && num > 0) {
            StringBuilder message = new StringBuilder();
            for (int i = 0; i < num; i++) {
                message.append(greeting).append("\n");
            }
            return message.toString();
        }

        return greeting;
    }
}
