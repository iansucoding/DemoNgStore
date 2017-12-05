import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './shopping-cart';
import { Product } from '../product/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCart;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCart = this.shoppingCartService.shoppingCart;
  }

  removeItem(item: {product: Product, amount: number}): void {
    this.shoppingCartService.shoppingCart.products = this.shoppingCartService.shoppingCart.products.filter(p => p !== item);
    this.shoppingCart = this.shoppingCartService.shoppingCart;
  }

  get totalPrice(): number {
    return this.shoppingCartService.totalPrice;
  }

}
