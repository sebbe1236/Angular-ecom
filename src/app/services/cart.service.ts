import { Injectable } from '@angular/core';

import Product from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Next up fix button to remove each item from cart.
  //source: https://angular.io/start/start-data
  cartProducts: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.cartProducts.push(product);
    console.log(product);
    console.log(this.cartProducts);
  }

  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.cartProducts));
  }

  getItems() {
    return this.cartProducts;
  }

  // clearCart() {
  //   this.cartProducts = [];
  //   localStorage.removeItem('cart_items');
  //   return this.cartProducts;
  // }
  clearCart(id: any) {
    this.cartProducts = this.cartProducts.filter((item) => item.id !== id);
    localStorage.removeItem('cart_items');
    return this.cartProducts;
  }
}
