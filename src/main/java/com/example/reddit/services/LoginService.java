package com.example.reddit.services;

import com.example.reddit.model.LoginModel;

import java.util.List;

public interface LoginService {


    List<LoginModel> findAll();
    String saveAll(LoginModel loginmodel);
}
