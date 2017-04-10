import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { LoginFormComponent }  from './login/login-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductDetailComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CounterComponent } from './counter/counter.component'; 

import { SearchFilterPipe } from './filters/search.filter';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, NgbModule.forRoot(), RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, LoginFormComponent, LandingPageComponent, ProductDetailComponent, CartComponent, ProductComponent, CounterComponent, SearchFilterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
