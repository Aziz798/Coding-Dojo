package com.test.daikichipathvariables.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/daikichi/")
public class HomeController {
     @GetMapping(value = "travel/{destination}")
    public String destination(@PathVariable("destination")String destination){
         return "Congratulations! You will soon travel to "+destination;
     }
     @GetMapping(value = "lotto/{num}")
    public String lotto(@PathVariable("num") int num){
         return num%2==0?
                 "You will take a grand journey in the near future, but be weary of tempting offers":
                 "You have enjoyed the fruits of your labor but now is a great time to spend time with family and friends";
     }
     @PostMapping("/")
    public String red(){
         return ProcessBuilder.Redirect("/");
     }
}
