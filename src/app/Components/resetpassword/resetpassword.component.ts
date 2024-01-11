import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private user: UserService) { }

  resetUser!: FormGroup;
  ngOnInit(): void {
    this.resetUser = this.fb.group({
      password: ['',[Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  ResetUser(){
    this.user.ResetPassword(this.resetUser.value).subscribe((result:any)=>{
      console.log(result.data);
    });
  }
}
