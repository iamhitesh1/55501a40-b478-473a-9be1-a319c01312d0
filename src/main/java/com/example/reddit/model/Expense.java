package com.example.reddit.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;

@Getter
@Setter
@ToString
@Document(collection = "expense")
public class Expense {

    @Id
    private long id;
    private String expense;
    private String description;
    private BigDecimal amount;
}
