import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private httpService: ProductsService) {}
  Loader: boolean = true;
  ErrorMessage: string = '';
  products: Products[] = [];
  searchText: any;

  fetchProducts() {
    this.httpService.fetchProducts().subscribe({
      next: (response) => {
        this.products = response;
        console.log(response);
      },
      error: (error) => {
        console.log('error, req failed', error.message);

        this.ErrorMessage =
          'Some error happened, please go back to the homepage.';
      },
      complete: () => {
        this.Loader = false;
      },
    });
  }

  ngOnInit(): void {
    this.fetchProducts();
  }
}
