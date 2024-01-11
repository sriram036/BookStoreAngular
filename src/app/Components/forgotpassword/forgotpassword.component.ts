import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private user : UserService) { }

  forgotUser! : FormGroup;
  ngOnInit(): void {
    this.forgotUser = this.fb.group({
      email: ['',[Validators.required, Validators.email]]
    });
  }

  ForgotUser(){
    this.user.ForgotPassword(this.forgotUser.value).subscribe((result:any)=>{
      console.log(result.data);
      localStorage.setItem('BookStoreToken', result.data.token);
    });
  }
}
