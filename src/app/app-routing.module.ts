import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { CartComponent } from './client/cart/cart.component';
import { ShopGridComponent } from './client/shop-grid/shop-grid.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { ContactComponent } from './client/contact/contact.component';
import { BlogSingleSidebarComponent } from './client/blog-single-sidebar/blog-single-sidebar.component';
import { ShopServiceAreaComponent } from './client/shop-service-area/shop-service-area.component';
import { FooterFourComponent } from './fournisseur/footer-four/footer-four.component';
import { FournisseurComponent } from './fournisseur/fournisseur/fournisseur.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'footer', component: FooterFourComponent},
  { path: 'shop', component: ShopGridComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'loginuser', component: LoginComponent  },
  {path:'checkout',component:CheckoutComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog-single-sidebar',component:BlogSingleSidebarComponent},
  {path:'client',component:ClientComponent},
  { path: 'service-area', component: ShopServiceAreaComponent },
  {path:'',redirectTo:'/client',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
