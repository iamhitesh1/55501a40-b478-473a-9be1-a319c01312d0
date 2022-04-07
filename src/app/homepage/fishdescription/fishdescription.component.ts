import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';
import { Product } from 'src/app/model/model.product';
import { CartService } from '../../cart.service';
import { Fish } from '../../model/Fish';
import { Cart } from '../../model/model.cart';

@Component({
  selector: 'app-fishdescription',
  templateUrl: './fishdescription.component.html',
  styleUrls: ['./fishdescription.component.css']
})
export class FishdescriptionComponent implements OnInit {

  fishs!:Fish[];
  fish!:Fish;
  id!:number;
  cart:Cart[] =[];
  prod:Product[]=[];
  constructor(private router :Router,
     private inventoryService: InventoryService,
    private route :ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) =>{
        this.id = +params['id'];

        this.fish = this.inventoryService.getSingleProduct(this.id);
        //  console.log(this.fish);
      }
    )
  }

  onCartAdded(quantity:HTMLInputElement){
    let val = +((<HTMLInputElement>quantity).value);
    this.cart = this.cartService.getCart();
    for(let carts of this.cart){
      if(this.fish.name === carts.fish.name){
        carts.quantity = carts.quantity + (+val); 
        this.router.navigate(['/cart']);
        return;
      }
      
    }
    if(val < this.inventoryService.getSingleProduct(this.id).quantity){

      // this.inventoryService.getSingleProduct(this.id).quantity = this.inventoryService.getSingleProduct(this.id).quantity-val;
      this.prod = this.inventoryService.getOriginalProducts();
      this.prod[this.id].quantity = this.prod[this.id].quantity-val;
      this.inventoryService.updateInventory(this.prod[this.id]);
      this.inventoryService.products.next(this.prod);
      this.cartService.cart.push(new Cart(this.fish,+val));
      this.router.navigate(['/cart']);
      return;
    }

    alert("not enough item in the inventory");
    
   
  }

}
