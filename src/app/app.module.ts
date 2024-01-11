import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BooksComponent } from './Components/books/books.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BookComponent } from './Components/book/book.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { WishbookComponent } from './Components/wishbook/wishbook.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartdataComponent } from './Components/cartdata/cartdata.component';
import { ShippingAddressComponent } from './Components/shipping-address/shipping-address.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { OrderComponent } from './Components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    WishlistComponent,
    WishbookComponent,
    CartComponent,
    CartdataComponent,
    ShippingAddressComponent,
    FeedbackComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
