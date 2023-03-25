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
  //next up: display number of items in cart next to cart/cart sign.
  //source for potential quant increase: https://stackoverflow.com/questions/62278458/angular-subscribe-custom-object-and-save-to-localstorage-on-every-input-change
  total = 0;
  products = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  removeCartProduct(productid: number) {
    this.products = this.cartService.removeCartItem(productid);
  }

  // solve for getting total amount in cart: https://stackoverflow.com/questions/72347335/how-can-i-update-the-quantity-property-of-a-cart-item-object-in-this-angular-13
  get getTotal() {
    return this.products.reduce((p, { price }) => p + price, 0);
  }

  //legger til flere/viser flere jackets og ikke input+.

  ngOnInit() {}
}
