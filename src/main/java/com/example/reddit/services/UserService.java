package com.example.reddit.services;

import com.example.reddit.model.UserModel;

import java.util.List;

public interface UserService {

    List<UserModel> findAll();
    String saveAll(UserModel usermodel);

}
