package org.example.hellospring.controllers;

import org.springframework.web.bind.annotation.*;

import java.io.StringReader;

@RestController
@RequestMapping("/api/")
public class ApiController {
    @GetMapping("home")
    public String home(){
        return "Hello world";
    }

    @GetMapping("search")
    public String searchEngine(@RequestParam(value="q",required = false)String searchQuery){
        return searchQuery != null ? searchQuery:"nothing";
    }
    @GetMapping("hello/{name}/{id}")
    public String greeting(@PathVariable("name") String name,@PathVariable(value="id",required=false) int userId){
        return "Hello " + name+userId;
    }
}
