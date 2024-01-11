import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ICart{
  bookId: number,
  quantity: number
}

interface IBook {
  bookId: number,
  bookTitle: string,
  bookAuthor: string,
  bookRating: number,
  noOfUsersRated: number,
  bookDiscountPrice: number,
  bookOriginalPrice: number,
  bookDetail: string,
  bookImage: string,
  stockQuantity: number
}

interface IBookWithCart {
  bookId: number,
  bookTitle: string,
  bookAuthor: string,
  bookRating: number,
  noOfUsersRated: number,
  bookDiscountPrice: number,
  bookOriginalPrice: number,
  bookDetail: string,
  bookImage: string,
  stockQuantity: number,
  cartQuantity: number,
  cartId: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  tokenLocal: string = '';

  addCart(id: number){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    let cart : ICart = {bookId:id,quantity:1}; 
    return this.http.post<ICart>('https://localhost:44392/api/Cart/AddToCart',cart,header);
  }

  getCart(){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.get<ICart[]>('https://localhost:44392/api/Cart/GetCarts',header);
  }

  getCartBooksByUser(){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.get<IBookWithCart[]>('https://localhost:44392/api/Cart/GetCartsByUser', header);
  }

  deleteCart(cartId: number){
    this.tokenLocal = localStorage.getItem('BookStoreToken') || '';
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenLocal}`
      })
    }
    return this.http.delete('https://localhost:44392/api/Cart/DeleteCart?cartId='+cartId, header);
  }
}
