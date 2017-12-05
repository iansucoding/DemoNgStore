import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private shoppingCartService: ShoppingCartService) {}

  get shoppingCartItemAmount(): number {
    return this.shoppingCartService.totalAmount;
  }
 }
