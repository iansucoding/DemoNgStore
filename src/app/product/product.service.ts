import { Injectable , OnDestroy} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Product } from './product';

const PRODUCTS: Product[]  = [
  new Product(1, '白鞋', 100),
  new Product(2, '黑褲', 50),
  new Product(3, '綠帽', 30),
  new Product(4, '紅衣', 35)
];

const FETCH_LATENCY = 500;

/* 模擬從伺服器取得資料 */
@Injectable()
export class ProductService implements OnDestroy {
  constructor() {
    console.log('ProductService instance created');
  }
  ngOnDestroy(): void {
    console.log('ProductService instance destroyed');
  }
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS).pipe(delay(FETCH_LATENCY));
  }
  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id)).pipe(delay(FETCH_LATENCY));
  }

}
