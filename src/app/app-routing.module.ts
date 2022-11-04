import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CartComponent } from './cart/cart.component';
import { CustomersComponent } from './customers/customers.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { MenulistComponent } from './menulist/menulist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { SignupComponent } from './signup/signup.component';
import { VieworderComponent } from './vieworder/vieworder.component';

const routes: Routes = [
  {
    path:'' , redirectTo:'home' , pathMatch:'full'
  },
  {
    path:'login' , component:LoginComponent
  },
  {
    path:'signup' , component:SignupComponent
  },
  {
    path:'menu' , component:DisplayComponent
  },
  {
    path:'home' , component:NavbarComponent
  },
  {
    path:'admin' , component:AdminComponent
  },
  {
    path:'adminlogin' , component:AdminloginComponent
  },
  {
    path:'adminsignup' , component:AdminsignupComponent
  },
  {
    path:'menulist' , component:MenulistComponent
  },
  {
    path:'cart' , component:CartComponent
  },
  {
    path:'orders' , component:OrdersComponent
  },
  {
    path:'about' , component:AboutComponent
  },
  {
    path:'customers' , component:CustomersComponent
  },
  {
    path:'vieworders' , component:VieworderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
