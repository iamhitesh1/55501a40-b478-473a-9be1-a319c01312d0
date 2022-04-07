package com.example.reddit.model;


import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@AllArgsConstructor
@NoArgsConstructor
@ToString
@Setter
@Getter
@Document(collection = "productmodel")
public class ProductModel {

    @Id
    private String name;
//    private String productId;
    private String image;

    private String price;
    private String description;
    private String quantity;

}
