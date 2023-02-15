import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private httpService: ProductsService) {}
  products: any[] = [];
  getProducts() {
    this.httpService.popularProdFetch().subscribe({
      next: (response) => {
        this.products = response;
        console.log(response);
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
