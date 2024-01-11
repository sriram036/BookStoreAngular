import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

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

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private book : BookService, private router : Router) { }

  pageSize = 5;
  currentPage = 0;

  @Input() AddedBooks: IBook[] = [];
  @Input() array: IBook[] = [];
  ngOnInit(): void {
    console.log(this.AddedBooks);
  }

  handlePage(event: PageEvent){
    console.log(event);
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.iterator();
  }

  iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.AddedBooks.slice(start, end);
    this.array = part;
  }

  onClick(book: IBook){
    console.log(book);
    this.book.changeMessage(book)
    this.router.navigate(['/book']);
  }
}
