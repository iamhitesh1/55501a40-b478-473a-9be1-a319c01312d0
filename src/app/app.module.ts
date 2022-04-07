import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";

import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderComponent } from './order/order.component';
import { FishdescriptionComponent } from './homepage/fishdescription/fishdescription.component';
import { AppRoutingModule } from './app.routing-module';
// import { FishService } from './fish.service';
import { CartService } from './cart.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminhomepageComponent } from './dashboard/adminhomepage/adminhomepage.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { InventoryService } from './inventory.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    OrderComponent,
    HomepageComponent,
    FishdescriptionComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminhomepageComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CartService,InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
