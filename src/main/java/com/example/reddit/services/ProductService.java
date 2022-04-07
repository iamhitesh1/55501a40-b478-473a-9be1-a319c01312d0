package com.example.reddit.services;

import com.example.reddit.model.ProductModel;
import com.example.reddit.model.UserModel;

import java.util.List;

public interface ProductService {

    List<ProductModel> findAll();
    String saveAll(ProductModel productmodel);
    String deleteProduct(String index);
    String UpdateProduct(ProductModel productmodel,String index);
}
