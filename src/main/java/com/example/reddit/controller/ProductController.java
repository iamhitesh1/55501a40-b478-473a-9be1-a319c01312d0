package com.example.reddit.controller;

import com.example.reddit.model.ProductModel;
import com.example.reddit.services.ProductServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductServiceImp service;

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/admin/delete/{id}")
    public String delete(@PathVariable("id") String id ){
        System.out.println(id);
        return service.deleteProduct(id);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/admin/productEdit/{id}")
    public String update(@RequestBody ProductModel productmodel,@PathVariable("id") String id){
        return service.UpdateProduct(productmodel,id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/admin/addProduct")
    @ResponseBody
    public String saveProduct(@RequestBody ProductModel productmodel){
        return service.saveAll(productmodel);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/admin")
    public List<ProductModel> GetProducts(){
        return service.findAll();
    }


}
