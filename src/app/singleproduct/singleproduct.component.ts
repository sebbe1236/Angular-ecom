import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from '../products';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css'],
})
export class SingleproductComponent {
  product?: any;
  Loader: boolean = true;
  errorMessage: string = '';
  quantity: number = 0;

  increase() {
    this.quantity++;
    console.log(this.quantity);
  }

  decrease() {
    this.quantity--;
    console.log(this.quantity);
  }

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  getSingleProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.productService.getProduct(id).subscribe({
      next: (response) => {
        this.product = response;
        console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.message, 'Something broke');

        this.errorMessage =
          'An error happened, please go back to the homepage. ';
      },
      complete: () => {
        this.Loader = false;
      },
    });
  }
  ngOnInit(): void {
    this.getSingleProduct();
  }

  //https://medium.com/@moshevilner/creating-shopping-cart-using-angular8-c6a5d4a0f0b3
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cartService.saveCart();
    window.alert('Product added to cart');
  }
}
