package com.example.reddit.repository;

import com.example.reddit.model.LoginModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LoginRepository extends MongoRepository<LoginModel,String> {
}
