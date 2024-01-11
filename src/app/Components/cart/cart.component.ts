import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { ShippingAddressService } from 'src/app/Services/shipping-address.service';
import { UserService } from 'src/app/Services/user.service';
import { UseraddressService } from 'src/app/Services/useraddress.service';

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

interface IShipAddress {
  shippingAddress: string,
  shippingCity: string,
  shippingState: string,
  addressType: number
}
interface IUserAddress {
  userAddress: string,
  userCity: string,
  userState: string,
  userAddressType: number
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

interface IOrder {
  cartId: number,
  totalPrice: number,
  quantity: number
}

interface IRegisterUser {
  fullName: string,
  email: string,
  password: string,
  mobileNumber: string
}

interface IUserAddrAndData{
  userAddr: IUserAddress,
  userData: IRegisterUser
}

interface ICartAddOrDelete {
  bookWithCart: IBookWithCart,
  type: number
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private order: OrderService,private userAddr: UseraddressService,private cart : CartService, private shipAddr: ShippingAddressService, private user: UserService) { }

  cartBooks: IBookWithCart[] = [];
  carts: ICart[] = [];
  userData: IRegisterUser={
    fullName:'',
    email:'',
    mobileNumber:'',
    password:''
  };
  userAddress: IUserAddress={
    userAddress:'',
    userCity:'',
    userState:'',
    userAddressType:0
  }

  sendData!: IUserAddrAndData;

  receiveAddressType($event:number) {
    let index = this.userAddresses.findIndex(data => data.userAddressType == $event);
    this.userAddress = this.userAddresses[index];
  }

  userAddresses: IUserAddress[] = [];
  ngOnInit(): void {
    this.cart.getCartBooksByUser().subscribe((result:IBookWithCart[]) => {
      console.log(result);
      this.cartBooks = result;
    });
    this.userAddr.GetUserAddress().subscribe((result:IUserAddress[]) => {
      this.userAddresses = result;
      console.log(this.userAddresses);
      this.userAddress = this.userAddresses[0];
      console.log(this.userAddress);
    });
    this.user.getUser().subscribe((result: IRegisterUser) => {
      this.userData = result;
    });
  }

  message: IBookWithCart = {
    bookId: 0,
    bookTitle: '',
    bookAuthor: '',
    bookRating: 0,
    noOfUsersRated: 0,
    bookDiscountPrice: 0,
    bookOriginalPrice: 0,
    bookDetail: '',
    bookImage: '',
    stockQuantity: 0,
    cartQuantity: 0,
    cartId: 0
  };

  visible:boolean=false;

  receiveMessage($event: ICartAddOrDelete) {
    if($event.type == 1){
      this.visible = true;
      this.message = $event.bookWithCart
    }
    else if($event.type == 2){
      let index: number = this.cartBooks.findIndex(cart => cart.cartId == $event.bookWithCart.cartId)
      console.log(index);
      this.cartBooks.splice(index, 1);
    }
  }

  orderBook(orderData: IBookWithCart){
    console.log(orderData);
    let order: IOrder = { cartId: orderData.cartId, quantity: orderData.cartQuantity, totalPrice: orderData.cartQuantity * orderData.bookDiscountPrice};
    console.log(order);
    this.order.addOrder(order).subscribe((result:any)=>{
      console.log(result);
      let index: number = this.cartBooks.findIndex(cart => cart.cartId == orderData.cartId)
      console.log(index);
      this.cartBooks.splice(index,1);
    });

  }
}
