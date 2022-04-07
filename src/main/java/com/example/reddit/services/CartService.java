package com.example.reddit.services;

import com.example.reddit.model.CartModel;
import com.example.reddit.model.OrderModel;

import java.util.List;

public interface CartService {

    List<CartModel> findAll();
    String saveAll(CartModel cartmodel);
}
