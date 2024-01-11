import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookService } from './book.service';

interface IFeedback{
  userId:number,
  bookId:number,
  rating:number,
  comment:string
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

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private book: BookService) { }

  bookData!: IBook;
  getFeedbacks(){
    this.book.currentMessage.subscribe((message) => this.bookData = message)
    return this.http.get<IFeedback[]>('https://localhost:44392/api/Feedback/GetFeedbacks?bookId=' + this.bookData.bookId);
  }
}
