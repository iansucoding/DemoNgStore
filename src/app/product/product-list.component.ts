import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductService} from './product.service';
import { Product } from './product';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  products: Observable<Product[]>;
  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService) {
    this.products = this.productService.getProducts();
  }
  addToShoppingCart(product: Product): void {
    this.shoppingCartService.addProduct(product);
  }
}
