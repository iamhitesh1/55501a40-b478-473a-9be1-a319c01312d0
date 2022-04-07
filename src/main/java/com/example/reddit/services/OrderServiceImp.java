package com.example.reddit.services;

import com.example.reddit.model.OrderModel;
import com.example.reddit.repository.OrderRepository;
import com.example.reddit.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImp implements OrderService{


    @Autowired
    OrderRepository repository;

    @Override
    public List<OrderModel> findAll() {
        return repository.findAll();
    }

    @Override
    public String saveAll(OrderModel ordermodel) {
        repository.save(ordermodel);
        return "Expense saved";
    }
}
