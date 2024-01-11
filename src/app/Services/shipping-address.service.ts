import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IShipAddress{
  shippingAddress: string,
  shippingCity: string,
  shippingState: string,
  addressType: number
}
@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {

  constructor(private http: HttpClient) { }

  tokenLocal : string = '';
  getShipAddress(){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    console.log(this.tokenLocal);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.get<IShipAddress[]>('https://localhost:44392/api/ShippingAddress/GetShippingAddresses', header);
  }

  AddShipAddress(data:IShipAddress){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    console.log(this.tokenLocal);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.post('https://localhost:44392/api/ShippingAddress/AddShippingAddress',data,header);
  }
}
