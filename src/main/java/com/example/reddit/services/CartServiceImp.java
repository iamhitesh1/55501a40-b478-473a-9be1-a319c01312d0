package com.example.reddit.services;

import com.example.reddit.model.CartModel;
import com.example.reddit.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImp implements CartService {

    @Autowired
    CartRepository repository;

    @Override
    public List<CartModel> findAll() {
        return repository.findAll();
    }

    @Override
    public String saveAll(CartModel cartmodel) {
        repository.save(cartmodel);
        return "Expense saved";
    }
}
