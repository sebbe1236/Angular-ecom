import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  basketIcon = faShoppingBasket;

  public itemsQuantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartProducts.length;
  }
}
