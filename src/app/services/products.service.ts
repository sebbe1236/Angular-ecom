import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Product from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<any> {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  popularProdFetch(): Observable<any> {
    const url = `https://fakestoreapi.com/products?limit=5`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  getProduct(id: number): Observable<any> {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Some error happened.'));
  }
}
