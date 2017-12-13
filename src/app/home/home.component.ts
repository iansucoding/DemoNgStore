import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  img {
    max-width: 100%;
    max-height: 100%;
  }
  `]
})
export class HomeComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(p => {
      this.product = p[0];
    });
  }
}
