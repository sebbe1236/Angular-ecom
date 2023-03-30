import { Component } from '@angular/core';
import Product from '../products';
import Cart from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // Search for how to increment total of specific item if its already in storage.
  //https://stackoverflow.com/questions/67096973/increment-quantity-in-the-cart-and-save-in-localstorage-and-print-it
  qty: number = 1;
  products = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  removeCartProduct(productid: number) {
    this.products = this.cartService.removeCartItem(productid);
  }

  // solve for getting total amount in cart: https://stackoverflow.com/questions/72347335/how-can-i-update-the-quantity-property-of-a-cart-item-object-in-this-angular-13
  get getTotal() {
    return this.products.reduce((p, { price }) => p + price, 0);
  }

  increment(product: any) {
    console.log(product);
    this.cartService.incrementQtn(product);
  }

  ngOnInit() {}
}
