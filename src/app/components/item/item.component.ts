import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

 Products: any = [];

 //private productsObservable : Observable<any[]> ;

  constructor(private productservice: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }
  fetchProducts() {
    return this.productservice.getProducts().subscribe((res: {}) => {
      this.Products = res;
    });
  }

  addToCart(selectedproductdata :any)
  {
  if(selectedproductdata)
  {
    this.productservice.addCart(selectedproductdata);
   /// this. .push(selectedproductdata);

  }
}

}
