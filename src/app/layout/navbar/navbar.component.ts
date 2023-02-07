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

  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
