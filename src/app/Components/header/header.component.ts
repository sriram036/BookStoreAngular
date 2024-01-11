import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeAccount() {
    localStorage.removeItem('BookStoreToken');
    console.log("Thank you for using BookStore !! Bye !!");
    this.router.navigate(['/register']);
  }

  openCart(){
    this.router.navigate(['/cart']);
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

}
