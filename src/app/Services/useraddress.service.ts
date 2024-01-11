import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IUserAddress{
  userAddress: string,
  userCity: string,
  userState: string,
  userAddressType: number
}

@Injectable({
  providedIn: 'root'
})
export class UseraddressService {

  constructor(private http: HttpClient) { }

  tokenLocal: string = '';

  GetUserAddress(){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    console.log(this.tokenLocal);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.get<IUserAddress[]>('https://localhost:44392/api/UserAddress/GetUserAddresses',header);
  }
}
