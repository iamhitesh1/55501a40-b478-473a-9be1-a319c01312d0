package com.example.reddit.repository;

import com.example.reddit.model.CartModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CartRepository extends MongoRepository<CartModel,Long> {
}
