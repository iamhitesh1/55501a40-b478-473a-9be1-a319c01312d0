package com.example.reddit.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@ToString
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Document(collection = "ordermodel")
public class OrderModel {

    @Id
    private String orderId;
    private String userId;
    private String productName;
    private String quantity;
    private String totalPrice;
    private String status;
    private String price;
}
