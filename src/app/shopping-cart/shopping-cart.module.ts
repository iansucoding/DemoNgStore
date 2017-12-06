import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartCheckoutComponent } from './shopping-cart-checkout.component';

@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  declarations: [ShoppingCartComponent, ShoppingCartCheckoutComponent]
})
export class ShoppingCartModule { }
