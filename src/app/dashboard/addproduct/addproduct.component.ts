import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from 'src/app/inventory.service';
import { Product } from 'src/app/model/model.product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  prod:Product[]=[];
  pro!:Product;
  mode:boolean = false;
  productForm!:FormGroup;


  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {

    
    this.inventoryService.singleProduct.subscribe(
      (cart:Product) =>{
        this.pro = cart;
        // console.log(this.product);  
      }
    );

    this.inventoryService.editmode.subscribe(
      (bool:boolean) =>{
        this.mode = bool;
        // console.log(bool);
        this.initForm();
      }
    );

    this.initForm();

  }

 private initForm(){
    let fishname = '';
    let fishprice ;
    let fishdescription = '';
    let fishquantity;
    let fishimage ='';
    if(this.mode){

      fishname = this.pro.name;
      fishprice = this.pro.price;
      fishdescription = this.pro.description;
      fishimage = this.pro.image;
      fishquantity = this.pro.quantity;
    }
    this.productForm = new FormGroup({
      'name': new FormControl(fishname),
      'price': new FormControl(fishprice),
      'description': new FormControl(fishdescription),
      'quantity': new FormControl(fishquantity),
      'image': new FormControl(fishimage)
    });
  }

  onSubmit(){
    // console.log(this.productForm.value.name);
    if(this.mode === false){
      this.onAdd();
      this.productForm.reset();
      return;
    }
    this.OnUpdate();
    this.productForm.reset();
  }

  onAdd(){
    let name = this.productForm.value.name;
    let description = this.productForm.value.description;
    let price = this.productForm.value.price;
    let image = this.productForm.value.image;
    let quantity = this.productForm.value.quantity;
    this.inventoryService.addInventory(new Product(name,image,price,description,quantity)).subscribe(
      {
        next:(response)=>{
          console.log(response);
          
        },
        error:(error)=>console.log(error)
      }
    );
    

    
    // this.inventoryService.addInventory(new Inventory(new Fish(name,image,price,description),quantity)).subscribe(
    //   {
    //     next:(response)=>console.log(response),
    //     error:(error)=>console.log(error)
    //   }
    // );
    // this.inventoryService.addInventory(new Inventory(new Fish(name,image,price,description),quantity))
  }

  OnUpdate(){
    let name = this.productForm.value.name;
    let description = this.productForm.value.description;
    let price = this.productForm.value.price;
    let image = this.productForm.value.image;
    let quantity = this.productForm.value.quantity;
    // this.inventoryService.updateInventory(new Inventory(new Fish(name,image,price,description),quantity));
    this.inventoryService.updateInventory(new Product(name,image,price,description,quantity));
    this.mode = false;
  }

}
