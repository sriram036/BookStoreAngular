import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';


interface IBook{
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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private book : BookService) { }

  books: IBook[] = [];

  fewBooks: IBook[] = [];
  ngOnInit(): void {
    this.book.getBooks().subscribe(result=>{
      this.books = result;
      this.fewBooks = result.slice(0, 5);
    });
  }

}
