import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/model.user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,
    private route: Router){}

  @ViewChild('f') signupform!:NgForm;
  @ViewChild('passworda') passa!:ElementRef;
  @ViewChild('passwordb') passb!:ElementRef;

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.passa.nativeElement.value !== this.passb.nativeElement.value){
      alert("Passwords dont match");
      return;
    }
    console.log(this.signupform.value.password);
    this.userService.onSignup(new User(this.signupform.value.username,
      this.signupform.value.email,this.signupform.value.passworda,
      this.signupform.value.phonenumber));
      this.signupform.reset();
      this.route.navigate(['/login']);
  }

}
