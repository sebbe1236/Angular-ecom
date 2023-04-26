import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // Search for how to increment total of specific item if its already in storage.
  //https://stackoverflow.com/questions/67096973/increment-quantity-in-the-cart-and-save-in-localstorage-and-print-it
  products = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  removeCartProduct(productid: number) {
    this.products = this.cartService.removeCartItem(productid);
  }

  // solve for getting total amount in cart: https://stackoverflow.com/questions/72347335/how-can-i-update-the-quantity-property-of-a-cart-item-object-in-this-angular-13
  get getTotal() {
    return this.products.reduce((p, { price }) => p + price, 0);
  }

  //https://stackoverflow.com/questions/74821327/angular-render-something-depending-if-this-array-id-exist-in-another-array
  // potential solve for render: Check if its already there and limit it too 1.
  increment() {
    const existingItem = localStorage.getItem('cart_items');
    console.log(existingItem);

    if (existingItem !== null) {
      const item = JSON.parse(existingItem);
      item.qty += 1;
      console.log(item);
      localStorage.setItem('cart_items', JSON.stringify(item));
    } else {
      return;
    }
  }

  ngOnInit() {}
}
