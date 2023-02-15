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
  loading: boolean = true;

  getProducts() {
    this.httpService.popularProdFetch().subscribe({
      next: (response) => {
        this.products = response;
        console.log(response);
        this.loading = false;
      },
      error: (error) => {
        console.log(error.message);
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
