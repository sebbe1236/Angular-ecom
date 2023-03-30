import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  //Find a way to loop through storage and display number of items in there.

  basketIcon = faShoppingBasket;
  public count: number | undefined;

  constructor(private cartService: CartService) {
    Object.keys(localStorage).forEach((data) => {
      let item = localStorage.getItem(data);

      const storageCount = item;
    });
  }

  // getStorage(json: any) {
  //   let localStorageCount = localStorage.length;

  //   window.addEventListener('cart_items', () => {
  //     localStorageCount = localStorage.length;
  //   });
  //   console.log(localStorageCount);
  // }

  ngOnInit(): void {}
}
