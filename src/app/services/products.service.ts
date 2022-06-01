import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { productdata } from '../app.component';
import { orderdata } from '../app.component';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 // private listOfProducts = [];
 
  cartItems: any[] = [];
  private products  = [];

  constructor(private httpClient: HttpClient) {

  }
  // getProducts () {
  //   return this.http.get("assets/product-data.json");
  // }

  getProducts(): Observable<Product> {
    return this.httpClient
      .get<Product>("assets/product-data.json")
      .pipe(retry(1), catchError(this.processError));
  }

  getOrderData() {
    return this.httpClient
    .get<Product>("assets/order-data.json")
    .pipe(retry(1), catchError(this.processError));
    // http call to retrieve list of orders
  }

  // getCartData() {
  //   return this.cartItems;
  //   console.log(this.cartItems);
  //   // http call to retrieve list of orders
  // }

  addCart(product: any) {
    this.cartItems.push(product);
    console.log("cart")
    console.log(this.cartItems);
  }

  public getCartData(): any {
    const cartObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.cartItems);
           }, 1000);
    });

    return cartObservable;
}


  clearCart() {
    this.cartItems.length = 0;

  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }

}


