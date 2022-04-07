import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ngbook1';
  isadminLoggedin: boolean = false;
  isuserLoggedin: boolean = false;

  constructor(private loginService: LoginService,
    private route: Router){}


  ngOnInit(): void {
      // this.isadminLoggedin = this.loginService.adminLoggedin;
      this.loginService.adminlog.subscribe({
        next:(Response:boolean)=>{
          this.isadminLoggedin = Response;
        },
        error:(error)=>console.log(error)
      })
      this.loginService.userlog.subscribe({
        next:(Response:boolean)=>{
          this.isuserLoggedin = Response;
        },
        error:(error)=>console.log(error)
      })
      console.log(this.isadminLoggedin);
  }

  onLoggout(){
    if(this.loginService.adminLoggedin){
      this.loginService.adminLoggedin = false;
    }
    if(this.loginService.isLoggedin){
      this.loginService.isLoggedin = false;
    }
  }

  
}
