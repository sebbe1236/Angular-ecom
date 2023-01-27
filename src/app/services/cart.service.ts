import { Injectable } from '@angular/core';

import Product from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Next up fix page to view products added to cart.
  //source: https://angular.io/start/start-data
  cartProducts: Product[] = [];

  constructor() {}
  addToCart(product: Product) {
    this.cartProducts.push(product);
    console.log(product);
    console.log(this.cartProducts);
  }

  getItems() {
    return this.cartProducts;
  }

  clearCart() {
    this.cartProducts = [];
    return this.cartProducts;
  }
}
