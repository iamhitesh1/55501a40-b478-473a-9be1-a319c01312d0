package com.example.reddit.services;

import com.example.reddit.model.ProductModel;
import com.example.reddit.model.UserModel;
import com.example.reddit.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ProductServiceImp implements ProductService{

    @Autowired
    ProductRepository repository;

    @Override
    public List<ProductModel> findAll() {
        return repository.findAll();
    }

    @Override
    public String saveAll(ProductModel productmodel) {
        repository.save(productmodel);
        return "Expense saved";
    }

    @Override
    public String deleteProduct(String name){
        System.out.println(name);
        repository.deleteById(name);
        return "deleted";
    }

    @Override
    public String UpdateProduct(ProductModel productModel, String index){
        ProductModel pd = repository.findById(index).get();
        if(Objects.nonNull(pd.getName()) && !"".equalsIgnoreCase(pd.getName())){
            pd.setName(productModel.getName());
        }
        if(Objects.nonNull(pd.getDescription()) && !"".equalsIgnoreCase(pd.getDescription())){
            pd.setDescription(productModel.getDescription());
        }
        if(Objects.nonNull(pd.getPrice()) && !"".equalsIgnoreCase(pd.getPrice())){
            pd.setPrice(productModel.getPrice());
        }
        if(Objects.nonNull(pd.getImage()) && !"".equalsIgnoreCase(pd.getImage())){
            pd.setImage(productModel.getImage());
        }
        if(Objects.nonNull(pd.getQuantity()) && !"".equalsIgnoreCase(pd.getQuantity())){
            pd.setQuantity(productModel.getQuantity());
        }

        repository.save(pd);
        return "updated";
    }
}
