import { Product } from '../product/product';
export class ShoppingCart {
  constructor() {
    this.products = [];
  }
  products: { product: Product; amount: number }[];
}
