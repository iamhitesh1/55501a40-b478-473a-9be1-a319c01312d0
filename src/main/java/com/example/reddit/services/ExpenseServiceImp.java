package com.example.reddit.services;

import com.example.reddit.model.Expense;
import com.example.reddit.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseServiceImp implements ExpenseService{

    @Autowired
    ExpenseRepository repository;

    @Override
    public List<Expense> findAll() {
        return repository.findAll();
    }

    @Override
    public String saveAll(Expense expense) {
        repository.save(expense);
        return "Expense saved";
    }
}
