import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private producservice:ProductsService) { }

  ngOnInit(): void {
  }

  OnclearData()
  {
  this.producservice.clearCart();
  }
  onmyEvent(data:any){
    console.log(data);
     }
}
