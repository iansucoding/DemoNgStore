import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  templateUrl: './shopping-cart-chechout.component.html'
})
export class ShoppingCartCheckoutComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    // 處理結帳流程...

    // 完成結帳流程
    this.shoppingCartService.shoppingCart.products = [];
  }
}
