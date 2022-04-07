package com.example.reddit.services;

import com.example.reddit.model.Expense;

import java.util.List;

public interface ExpenseService {

    List<Expense> findAll();
    String saveAll(Expense expense);
}
