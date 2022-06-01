import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

export interface productdata {
   name: string;
   price: number;
   image: string;
}

export interface orderdata {

  ordernumber:number;
  total:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-angular-assignment-2';


 constructor(private productsService : ProductsService) {
  //  this.productsService.getProducts()
  //  .subscribe((resp) => {
  //    console.log(resp);
  //  })
}


}
