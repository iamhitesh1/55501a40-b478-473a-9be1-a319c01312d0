package com.example.reddit.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Setter
@Getter
@Document(collection = "usermodel")
public class UserModel {

    @Id
    private String username;
    private String email;
    private String password;
    private String mobilenumber;
//    private boolean active;
//    private String role;
}
