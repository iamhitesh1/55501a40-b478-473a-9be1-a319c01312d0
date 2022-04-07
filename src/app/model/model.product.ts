export class Product{
    name!:string;
    image!:string;
    price!:number;
    description!:string;
    quantity!:number
    constructor(name:string,image:string,price:number,description:string,quantity:number){
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
        this.quantity = quantity;

    }

}