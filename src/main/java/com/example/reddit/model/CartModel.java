package com.example.reddit.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter
@Document(collection = "cartmodel")
public class CartModel {

    @Id
    private Long id;
    private String cartItemId;
    private UserModel userId;
    private String productName;
    private int quantity;
    private String price;
}
