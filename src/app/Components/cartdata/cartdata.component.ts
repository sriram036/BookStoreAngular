import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

interface Food {
  value: string;
  viewValue: string;
}

interface ICart {
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

interface ICartAddOrDelete{
  bookWithCart: IBookWithCart,
  type: number
}

@Component({
  selector: 'app-cartdata',
  templateUrl: './cartdata.component.html',
  styleUrls: ['./cartdata.component.scss']
})
export class CartdataComponent implements OnInit {

  constructor(private router: Router, private cart: CartService) { }


  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ngOnInit(): void {

  }

  @Input() BooksData: IBookWithCart[] = [];
  
  @Output() messageEvent = new EventEmitter<ICartAddOrDelete>();

  sendMessage(book: IBookWithCart) {
    console.log(book);
    let cartAdd: ICartAddOrDelete = {bookWithCart:book,type : 1}
    this.messageEvent.emit(cartAdd);
  }

  goToDashBoard(){
    this.router.navigate(['/dashboard']);
  }

  quantity : number = 1;

  addQuantity(book: IBookWithCart){
    book.cartQuantity++;
  }

  reduceQuantity(book: IBookWithCart){
    if (book.cartQuantity != 1){
      book.cartQuantity--;
    }
  }

  removeCartBook(book: IBookWithCart){
    console.log(book);
    this.cart.deleteCart(book.cartId).subscribe((result:any) => {
      console.log(result);
      let cartDelete: ICartAddOrDelete = {bookWithCart: book, type : 2};
      this.messageEvent.emit(cartDelete);
    });
  }

}
