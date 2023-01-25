import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private httpService: ProductsService) {}

  products: any[] = [];

  fetchProducts() {
    this.httpService.fetchProducts().subscribe({
      next: (response) => {
        this.products = response;
        console.log(response);
      },
      error: (error) => {
        console.log('error, req failed', error.message);
      },
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  addToCart() {
    console.log('clicked');
  }
}
