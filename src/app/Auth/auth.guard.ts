import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authUser: UserService, private route: Router) { }
  
  canActivate() {
    if (this.authUser.isLoggedIn()) {
      return true;
    }
    else {
      console.log("You have not Logged In!!!");
      this.route.navigate(['/register']);
      return false
    }
  }
}
