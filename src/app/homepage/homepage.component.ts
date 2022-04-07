import { Component, OnInit } from '@angular/core';
// import { FishService } from '../fish.service';
import { InventoryService } from '../inventory.service';
import { Fish } from '../model/Fish';
import { Inventory } from '../model/model.inventory';
import { Product } from '../model/model.product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  product :Product[]=[];


  constructor(
    private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe({
      next:(Response)=>{this.product = Response},
      error:(error)=>console.log(error)
    });

    console.log(this.product);


  }

  

}
