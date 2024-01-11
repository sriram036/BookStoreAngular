import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private user : UserService, private router: Router) { }

  addUser!: FormGroup;
  loginUser!: FormGroup;

  signUp : boolean = true;
  login : boolean = true;

  ngOnInit(): void {
    this.signUp = true;
    this.login = false;
    this.addUser = this.fb.group({
      fullName: ['',[Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      mobileNumber: ['',[Validators.required, Validators.minLength(10)]]
    });
    this.loginUser = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(5)]]
    });
  }

  openLogin(){
    this.signUp = false;
    this.login = true;
  }

  openSignup(){
    this.signUp = true;
    this.login = false;
  }

  RegisterUser(){
    if(this.addUser.invalid){
      return
    }
    else{
      this.user.RegisterUser(this.addUser.value).subscribe((result:any)=>{
        console.log(result.data);
      });
    }
  }

  LoginUser(){
    if(this.loginUser.invalid){
      return
    }
    else{
      this.user.LoginUser(this.loginUser.value).subscribe((result:any)=>{
        console.log(result.data);
        localStorage.setItem('BookStoreToken', result.data);
        console.log(localStorage.getItem('BookStoreToken'));
        this.router.navigate(['/dashboard']);
      })
    }
  }
}
