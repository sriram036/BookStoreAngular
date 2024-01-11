import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookComponent } from './Components/book/book.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CartComponent } from './Components/cart/cart.component';
import { AuthGuard } from './Auth/auth.guard';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  { path: 'resetpassword', component: ResetpasswordComponent, canActivate: [AuthGuard] },
  {path:'dashboard', component:DashboardComponent},
  {path:'book', component:BookComponent},
  { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
