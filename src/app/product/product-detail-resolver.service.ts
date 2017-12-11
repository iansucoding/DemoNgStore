import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductDetailResolver implements Resolve<Product> {
  constructor(private ps: ProductService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    const id = +route.paramMap.get('id');

    return this.ps.getProduct(id);
  }
}
