package com.example.reddit.controller;

import com.example.reddit.model.LoginModel;
import com.example.reddit.services.LoginServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    LoginServiceImp service;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public String saveUser(@RequestBody LoginModel loginmodel){
        return service.saveAll(loginmodel);
    }


//    @CrossOrigin(origins = "http://localhost:4200")
//    @GetMapping("/getUser")
//    public List<LoginModel> getUser(){
//        return service.findAll();
//    }
}
