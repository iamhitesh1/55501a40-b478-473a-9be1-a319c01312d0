import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from '../model/model.login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginform!:NgForm;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginform.value.uname);
    this.loginService.onLogin(new Login(this.loginform.value.uname,this.loginform.value.psw));

  }

}
