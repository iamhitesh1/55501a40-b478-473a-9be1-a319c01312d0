export class User{
    username!:string;
    email!:string;
    password!:string;
    mobilenumber!:string;
    // active!:boolean;
    // role!:string;
    constructor(username:string,email:string,password:string,mobilenumber:string){
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobilenumber = mobilenumber;
        // this.active = active; 
        // this.role = role;
    }
}