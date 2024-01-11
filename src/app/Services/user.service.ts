import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IRegisterUser{
  fullName: string,
  email: string,
  password: string,
  mobileNumber: string
}

interface ILoginUser{
  email: string,
  password: string
}

interface IForgotUser{
  email:string
}

interface IResetPassword{
  password:string,
  confirmPassword:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    let tokenLocal: string | null = localStorage.getItem('BookStoreToken');
    if (tokenLocal != null) {
      return true;
    }
    else {
      return false;
    }
  }

  tokenLocal:string = '';
  RegisterUser(data:IRegisterUser){
    console.log(data);
    return this.http.post<IRegisterUser>('https://localhost:44392/api/User/AddUser',data);
  }

  LoginUser(data: ILoginUser){
    console.log(data);
    return this.http.post<ILoginUser>('https://localhost:44392/api/User/Login', data);
  }

  ForgotPassword(data:IForgotUser){
    console.log(data)
    return this.http.get<IForgotUser>('https://localhost:44392/api/User/ForgotPassword?email='+data.email);
  }

  ResetPassword(data:IResetPassword){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    console.log(this.tokenLocal);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.post<IResetPassword>('https://localhost:44392/api/User/ResetPassword', data, header);
  }

  getUser(){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    console.log(this.tokenLocal);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.get<IRegisterUser>('https://localhost:44392/api/User/GetUser', header);
  }
}
