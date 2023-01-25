import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private httpService: ProductsService) {}
  Loader: boolean = true;
  ErrorMessage: string = '';
  products: any[] = [];

  fetchProducts() {
    this.httpService.fetchProducts().subscribe({
      next: (response) => {
        this.products = response;
        console.log(response);
        this.Loader = false;
      },
      error: (error) => {
        console.log('error, req failed', error.message);
        this.Loader = false;
        this.ErrorMessage =
          'Some error happened, please go back to the homepage.';
      },
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  addToCart() {
    console.log('clicked, onClick working.');
  }
}
