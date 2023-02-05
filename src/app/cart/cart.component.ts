import { Component } from '@angular/core';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products = this.cartService.getItems();
  subTotal? = this.products;

  constructor(private cartService: CartService) {}

  removeCartProduct(productid: number) {
    this.products = this.cartService.clearCartItem(productid);
  }

  ngOnInit() {}
}
