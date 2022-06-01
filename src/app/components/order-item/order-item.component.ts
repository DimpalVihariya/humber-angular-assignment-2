import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
 Orders :any =[];

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
