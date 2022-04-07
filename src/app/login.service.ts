import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Login } from "./model/model.login";
import { User } from "./model/model.user";

@Injectable({
    providedIn:'root'
})
export class LoginService implements OnInit{

    private loginUrl = "http://localhost:8080/login";
    private getuserUrl = "http://localhost:8080/getUser";

    isLoggedin :boolean = false;
    adminLoggedin: boolean = false;
    adminlog = new Subject<boolean>();
    userlog = new Subject<boolean>();
 
    user :User[] =[];

    constructor(private httpClient:HttpClient,
        private route:Router){}


    ngOnInit(): void {
        // this.httpClient.get<User[]>(this.getuserUrl).subscribe({
        //     next:(Response)=>{
        //         this.user = Response;
        //         console.log(this.user);
        //     },
        //     error:(error)=>console.log(error)
        // });
    }

    


   

    onLogin(login:Login){

        if(login.username === 'admin' && login.password === 'admin'){
            this.adminLoggedin = true;
            this.adminlog.next(true);
            this.route.navigate(['/home']);
            return;
        }
        this.httpClient.get<User[]>(this.getuserUrl).subscribe({
            next:(Response)=>{
                // this.user.push(Response);
                this.user = Response;
                for(let usr of this.user){
                    if(login.username === usr.username && login.password === usr.password){
                        alert("logged in ");
                        this.isLoggedin = true;
                        this.userlog.next(true);
                        this.saveLoginUser(login);
                        this.route.navigate(['/home']);
                        return;
                    }
                }
            },
            error:(error)=>console.log(error)
        });
        console.log(this.isLoggedin);
        alert("you are not registered");
    }

    saveLoginUser(login:Login){
        this.httpClient.post<Login>(this.loginUrl,login).subscribe({
            next:(response)=>console.log(response),
            error:(error)=>console.log(error)
        })
    }
}