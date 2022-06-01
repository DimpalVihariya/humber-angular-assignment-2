import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

// export interface orderdata {

//   ordernumber:number;
//   total:number;
// }

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  Orders: any = [];

  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    return this.productservice.getOrderData().subscribe((res: {}) => {
      this.Orders = res;
    });
  }

}
