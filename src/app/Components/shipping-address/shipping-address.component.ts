import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShippingAddressService } from 'src/app/Services/shipping-address.service';

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

interface IRegisterUser {
  fullName: string,
  email: string,
  password: string,
  mobileNumber: string
}

interface IUserAddrAndData {
  userAddr: IUserAddress,
  userData: IRegisterUser
}

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  constructor(private shipAddr: ShippingAddressService) { }

  @Input() ShipAddress!:IUserAddress;
  @Input() UserData!: IRegisterUser;
  @Output() messageEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  changeAddr(data:number){
    console.log(data);
    this.messageEvent.emit(data);
  }

  sendData(data: IUserAddress){
    let sendData:IShipAddress = {addressType:0,shippingAddress:'',shippingCity:'',shippingState:''};
    sendData.addressType = data.userAddressType;
    sendData.shippingAddress = data.userAddress;
    sendData.shippingCity = data.userCity;
    sendData.shippingState = data.userState;
    this.shipAddr.AddShipAddress(sendData).subscribe((result:any) =>{
      console.log(result.data);
    });
  }
}
