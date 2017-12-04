import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductService, Product } from './product.service';

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products: Observable<Product[]>;
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
  addToShoppingCart(product: Product): void {

  }
}
