import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

import Product from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  qty: number = 0;
  constructor() {}

  //legger til item`e i cartProducts array`et, functionen er assignet til en button click.
  addToCart(product: Product) {
    this.cartProducts.push({ ...product, qty: 1 });

    console.log(product);
    console.log(this.cartProducts);
  }

  incrementQtn(product: any) {
    //const existingItem = this.cartProducts.find((item) => item.id !== id);
    this.cartProducts.push(product);

    localStorage.setItem('cart_items', JSON.stringify(this.cartProducts));
  }
  //lagrer cartProducts array til localstorage
  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.cartProducts));
  }

  //henter verdien som er lagra i localstorage
  getItems() {
    return this.cartProducts;
  }

  //fjerner det som er i localstorage, fjerner via button...assign click event til knapp

  removeCartItem(id: any) {
    const confirm = window.confirm('test?');

    if (confirm) {
      this.cartProducts = this.cartProducts.filter((item) => item.id !== id);
      localStorage.setItem('cart_items', JSON.stringify(this.cartProducts));
    }

    return this.cartProducts;
  }
}
