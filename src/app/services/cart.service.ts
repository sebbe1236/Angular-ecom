import { Injectable } from '@angular/core';

import Product from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //Next up fix that it`s possible to add more then 1 of each in storage and single item cleared from storage and not all.
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

  clearCart(id: any) {
    this.cartProducts = this.cartProducts.filter((item) => item.id !== id);
    localStorage.setItem('cart_items', JSON.stringify(this.cartProducts));
    return this.cartProducts;
  }
}
