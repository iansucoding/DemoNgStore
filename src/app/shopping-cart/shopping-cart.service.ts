import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { ShoppingCart } from './shopping-cart';

@Injectable()
export class ShoppingCartService {
  shoppingCart = new ShoppingCart();
  constructor() {
    console.log('ShoppingCartService 建立');
  }
  addProduct(product: Product): void {
    const existedProd = this.shoppingCart.products.find(p => p.product === product);
    if (existedProd) {
      existedProd.amount ++;
    } else {
      this.shoppingCart.products.push({product: product, amount: 1});
    }
    console.log('shoppingCart', this.shoppingCart);
  }
  get totalAmount(): number {
    // console.log('ShoppingCartService.totalAmount() called');
    const result = this.shoppingCart.products.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    return result;
  }
  get totalPrice(): number {
    const result = this.shoppingCart.products.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.amount * currentItem.product.price);
    }, 0);
    return result;
  }
}
