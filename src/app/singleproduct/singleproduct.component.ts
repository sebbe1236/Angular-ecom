import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],
})
export class SingleproductComponent {
  product?: any;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  getSingleProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.productService.getProduct(id).subscribe({
      next: (response) => {
        this.product = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err.message, 'Something broke');
      },
    });
  }
  ngOnInit(): void {
    this.getSingleProduct();
  }
}
