import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
    providedIn:"root"
})
export class AuthGuard implements CanActivate{

    constructor(private loginService: LoginService,
        private route: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.loginService.adminLoggedin){
          return true;
      }
      if(this.loginService.isLoggedin){
          return true;
      }
      else{
          this.route.navigate(['/login']);
          return false;
      }
      
    }
}

