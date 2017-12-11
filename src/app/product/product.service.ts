import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';
import { Product } from './product';

const PRODUCTS: Product[] = [
  new Product(
    10,
    '白布鞋',
    'Canvas shoes for Men Slip on Sneakers',
    '../../assets/51zvKe7HwOL._UY535_.jpg',
    'shoes',
    100
  ),
  new Product(
    11,
    '黑皮鞋',
    'Premium Leather Lining, Latex Cushioned Footbed',
    '../../assets/61AnpdHT2qL._UX535_.jpg',
    'shoes',
    120
  ),
  new Product(
    20,
    '運動褲',
    '65% Polyester, 35% Cotton',
    '../../assets/61Cdw9ZeexL._UY575_.jpg',
    'pant',
    50
  ),
  new Product(
    21,
    '休閒褲',
    'Flat Front Stretch Woven Pants',
    '../../assets/510gX4PAotL._SY450_.jpg',
    'pant',
    40
  ),
  new Product(
    40,
    '裁判衣服',
    'V-Neck Striped Referee Shirt Jersey',
    '../../assets/61buWHOl-oL._SL1000_.jpg',
    'clothing',
    20
  ),
  new Product(
    41,
    '運動便衣',
    'Casual 3/4 Sleeve Baseball Tshirt Raglan Jersey Shirt',
    '../../assets/71P3TbAp8kL._UX466_.jpg',
    'clothing',
    20
  )
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
    return of(PRODUCTS.find(product => product.id === id)).pipe(
      delay(FETCH_LATENCY)
    );
  }
}
