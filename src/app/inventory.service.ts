import { EventEmitter,Injectable} from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Inventory } from "./model/model.inventory";
import { Product } from "./model/model.product";


@Injectable({
    providedIn: 'root'
  })


export class InventoryService{

    product:Product[]=[];

    Invent: Inventory[]=[
        // new Inventory(new Fish("fighter","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",12,"a good"),20),
        // new Inventory(new Fish("Rose","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",42,"avery"),20),
        // new Inventory(new Fish("goldfish","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",44,"greay"),30),
        // new Inventory(new Fish("happy","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",123,"fant"),30),
        // new Inventory(new Fish("flower","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",42,"fas"),30)
    ];
    singleProduct = new EventEmitter<Product>();
    editmode = new Subject<boolean>();
    inventory = new Subject<Inventory[]>();
    products = new Subject<Product[]>();

    private getUrl:string = "http://localhost:8080/admin";
    private postUrl:string="http://localhost:8080/admin/addProduct";
    private deleteUrl:string = "http://localhost:8080/admin/delete/";
    private updateUrl:string="http://localhost:8080/admin/productEdit/"


    constructor(private httpClient:HttpClient){};

    getOriginalInventory(){
        return this.Invent;
    }

    getOriginalProducts(){
        return this.product;
    }
    getInventory(){
        // return this.Invent.slice();
        return this.httpClient.get<Product[]>(this.getUrl).pipe(
            map((Response=>Response))
        );

    }

    // getFish(index:number){
    //     return this.Invent.slice()[index].fish;
    // }

    getSingleProduct(index:number){
        this.getInventory().subscribe({
            next:(Response)=>{
                this.product = Response;
                
            },
            error:(error)=>console.log(error)
        });
        return this.product.slice()[index];
        
    }

    addInventory(product:Product):Observable<Product>{

        // this.Invent.push(inventory);
        // this.inventory.next(this.Invent.slice());
        // let product = new Product(inventory.fish.name,inventory.fish.image,inventory.fish.price,inventory.fish.description,inventory.quantity)
        this.product.push(product);
        this.products.next(this.product);
        return this.httpClient.post<Product>(this.postUrl,product);
        
    }

    deleteInventory(index:number){
        let name = this.product[index].name;
        this.product.splice(index,1);
        this.products.next(this.product.slice());
        this.httpClient.delete<Product>(this.deleteUrl+name).subscribe({
            next:(Response)=>console.log(Response),
            error:(error)=>console.log(error)
        })
        // console.log(this.deleteUrl+name);
    }

    updateInventory(prod:Product){
        for(let inv of this.product){
            if(inv.name === prod.name){
                inv.image = prod.image;
                inv.description = prod.description;
                inv.price = prod.price;
                inv.quantity = prod.quantity;
            }
        }
        
        
        this.httpClient.put<Product>(this.updateUrl+prod.name,prod).subscribe({
            next:(response)=>console.log(response),
            error:(error)=>console.log(error)
        
        });

        this.products.next(this.product.slice());
    }
}



