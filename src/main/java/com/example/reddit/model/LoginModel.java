package com.example.reddit.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@ToString
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Document(collection = "loginmodel")
public class LoginModel {

    @Id
    private String username;
    private String password;
}
