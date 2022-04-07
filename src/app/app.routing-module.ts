import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { CartComponent } from "./cart/cart.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FishdescriptionComponent } from "./homepage/fishdescription/fishdescription.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { OrderComponent } from "./order/order.component";
import { SignupComponent } from "./signup/signup.component";


const appRoutes :Routes = [
    {path:'' , redirectTo:'/login' , pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent },
    {path: 'home',canActivate:[AuthGuard] , component: HomepageComponent, children:[
        {path: ':id', component: FishdescriptionComponent}
    ]},
    {path:'addproduct',canActivate:[AuthGuard] , component: DashboardComponent},
    {path: 'cart' ,canActivate:[AuthGuard] ,component: CartComponent},
    {path : 'orders' ,canActivate:[AuthGuard] ,component: OrderComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}