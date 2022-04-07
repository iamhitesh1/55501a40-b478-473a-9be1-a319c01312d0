package com.example.reddit.services;

import com.example.reddit.model.Expense;
import com.example.reddit.model.UserModel;
import com.example.reddit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    UserRepository repository;

    @Override
    public List<UserModel> findAll() {
        return repository.findAll();
    }

    @Override
    public String saveAll(UserModel usermodel) {
        repository.save(usermodel);
        return "User Saved";
    }
}
