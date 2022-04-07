package com.example.reddit.repository;

import com.example.reddit.model.OrderModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderRepository extends MongoRepository<OrderModel,String> {
}
