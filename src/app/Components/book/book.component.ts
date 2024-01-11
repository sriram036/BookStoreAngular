import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
import { CartService } from 'src/app/Services/cart.service';
import { FeedbackService } from 'src/app/Services/feedback.service';

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

interface IFeedback {
  userId: number,
  bookId: number,
  rating: number,
  comment: string
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private book : BookService, private feedback:FeedbackService,private cart: CartService, private router : Router) { }

  bookData!: IBook;
  Feedbacks:IFeedback[]=[];
  ngOnInit(): void {
    let id:number;
    this.book.currentMessage.subscribe((message) => this.bookData = message)
    console.log(this.bookData);
    this.feedback.getFeedbacks().subscribe((result: IFeedback[]) => {
      this.Feedbacks = result;
      console.log(result);
    });
  }

  

  array:number[]=[1,2,3];

  addCart(id : number){
    console.log(id);
    this.cart.addCart(id).subscribe(result => {
      console.log(result);
    });
    this.router.navigate(['/cart']);
  }

  addWishlist(){
    this.router.navigate(['/wishlist']);
  }
}
