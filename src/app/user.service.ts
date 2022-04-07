import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./model/model.user";

@Injectable({
    providedIn:'root'
})
export class UserService{

    constructor(private httpClient:HttpClient){}

    private signupUrl:string="http://localhost:8080/signup"

    onSignup(signup:User){
        this.httpClient.post<User>(this.signupUrl,signup).subscribe({
            next:(Response)=>console.log(Response),
            error:(error)=>console.log(error)
        });
    }


}