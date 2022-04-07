package com.example.reddit.services;

import com.example.reddit.model.LoginModel;
import com.example.reddit.model.OrderModel;
import com.example.reddit.repository.LoginRepository;
import com.example.reddit.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImp implements LoginService{

    @Autowired
    LoginRepository repository;

    @Override
    public List<LoginModel> findAll() {
        return repository.findAll();
    }

    @Override
    public String saveAll(LoginModel loginmodel) {
        repository.save(loginmodel);
        return "Expense saved";
    }
}
