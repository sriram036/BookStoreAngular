import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IOrder{
  cartId: number,
  totalPrice: number,
  quantity: number
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  tokenLocal:string = '';

  addOrder(order: IOrder){
    console.log(order);
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    console.log(this.tokenLocal);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.post<IOrder>('https://localhost:44392/api/Order/AddOrder',order,header);
  }
}
