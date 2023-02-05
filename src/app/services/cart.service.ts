import { Injectable } from '@angular/core';

import Product from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];

  constructor() {}

  //legger til item`e i localstorage array, assigna til button
  addToCart(product: Product) {
    this.cartProducts.push(product);
    console.log(product);
    console.log(this.cartProducts);
  }
  //lagrer til localstorage
  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.cartProducts));
  }

  //henter verdien som er lagra i localstorage
  getItems() {
    return this.cartProducts;
  }

  //fjerner det som er i localstorage, fjerner via button...assign click event til knapp
  //kan også kjøre localStorage.setItem("carts_items", json.stringify(this.cartProducts)) for å få removed
  clearCartItem(id: any) {
    const confirm = window.confirm('test?');

    if (confirm) {
      this.cartProducts = this.cartProducts.filter((item) => item.id !== id);
      localStorage.setItem('cart_items', JSON.stringify(this.cartProducts));
    }

    return this.cartProducts;
  }
}
