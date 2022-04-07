package com.example.reddit.controller;


import com.example.reddit.model.Expense;
import com.example.reddit.services.ExpenseServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    ExpenseServiceImp service;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/addFinance")
    public String saveFinance(@RequestBody Expense expense){
       return service.saveAll(expense);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/fetchFinances")
    public List<Expense> getFinances(){
        return service.findAll();
    }

}
