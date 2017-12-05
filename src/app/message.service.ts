import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product/product';


@Injectable()
export class MessageService {
  // Observable sources
  private productAddedSource = new Subject<Product>();

  // Observable streams
  productAddedSource$ = this.productAddedSource.asObservable();

  // Service message commands
  addProduct(product: Product): void {
    this.productAddedSource.next(product);
  }
}
