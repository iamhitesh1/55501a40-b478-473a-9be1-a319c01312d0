package com.example.reddit.services;

import com.example.reddit.model.OrderModel;
import com.example.reddit.model.ProductModel;

import java.util.List;

public interface OrderService {

    List<OrderModel> findAll();
    String saveAll(OrderModel ordermodel);
}
