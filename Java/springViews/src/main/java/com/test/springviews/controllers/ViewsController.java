package com.test.springviews.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewsController {
     @GetMapping("/index")
    public String index(){
         return "index.jsp";

     }  @GetMapping("/dashboard")
    public String dashboard(Model model){
         String name = "Joe Doe";
         model.addAttribute("name",name);
         return "dashboard.jsp";
     }

}
