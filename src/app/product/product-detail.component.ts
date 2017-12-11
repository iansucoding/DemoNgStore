import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  template: `
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
    <div class="card h-100">
      <a href="#">
        <img class="card-img-top" src="{{ product.img }}" alt="">
      </a>
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <h5>$ {{ product.price }}</h5>
        <p class="card-text">{{ product.desc }}</p>
      </div>
      <div class="card-footer">
        <button role="link" class="btn btn-default" (click)="addToShoppingCart(product)">加入購物車</button>
        <a routerLink="../list">Product List</a>
      </div>
    </div>
  </div>
  <div>
  `
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { product: Product }) => {
      this.product = data.product;
    });
  }
  addToShoppingCart(product: Product): void {
    this.shoppingCartService.addProduct(product);
  }
}
