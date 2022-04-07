package com.example.reddit.controller;


import com.example.reddit.model.UserModel;
import com.example.reddit.services.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SignupController {

    @Autowired
    UserServiceImp service;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/signup")
    public String saveUser(@RequestBody UserModel usermodel){
        return service.saveAll(usermodel);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getUser")
    public List<UserModel> getUser(){
        return service.findAll();
    }
}
