import { Component, OnChanges, OnInit } from '@angular/core';

import { InventoryService } from '../inventory.service';
import { Inventory } from '../model/model.inventory';
import { Product } from '../model/model.product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  prod:Product[]=[];
  Invent:Inventory[]=[];
  order!:boolean;

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    // this.Invent = this.inventoryService.getInventory();
    this.inventoryService.getInventory().subscribe({
      next:(response)=>{
        this.prod = response;
        console.log(this.prod[0].name);
        this.inventoryService.product = response;
        this.inventoryService.products.next(this.inventoryService.product);

      },
      error:(error)=>console.log(error)
    });
    // this.inventoryService.inventory.subscribe(
    //   (arr:Inventory[]) =>{
    //     this.Invent = arr;
    //   }
    // );
    // this.inventoryService.products.subscribe(
    //   (arr:Product[])=>{
    //     this.product = arr;
    //   }
    // );
  }


  onedit(prod:Product){
    this.inventoryService.singleProduct.emit(prod);
    this.inventoryService.editmode.next(true);

  }

  onDelete(index:number){
    this.inventoryService.deleteInventory(index);
  }

}
