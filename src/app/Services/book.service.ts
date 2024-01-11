import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  book!:IBook;
  private messageSource = new BehaviorSubject(this.book);
  currentMessage = this.messageSource.asObservable();

  changeMessage(data: IBook) {
    this.messageSource.next(data)
  }

  getBooks(){
    return this.http.get<IBook[]>('https://localhost:44392/api/Book/GetBooks');
  }
}
