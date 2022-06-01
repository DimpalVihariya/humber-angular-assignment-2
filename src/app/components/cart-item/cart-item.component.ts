import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { cardItem } from 'src/app/models/product';
@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})



export class CartItemComponent implements OnInit {
  cartItems: cardItem[] = [];
 // cartItems : any = [];
  @Output() myEvent : EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private productService:ProductsService
  ) { }

                                            
  ngOnInit(): void {
    this.getCartItem()
  }

  getCartItem()
  {
  //   var result =  this.productService.getCartData();
  //  this.cartItems = result;
  const OrderObservable = this.productService.getCartData();
  OrderObservable.subscribe((cartdata: cardItem[]) => {
      this.cartItems = cartdata;
  });
  }

  OnclearData()
  {
  this.productService.clearCart();
  }

    //  myfunction(){
    //   const randonedata = {"extrsfs":"stringify"}; 
    // this.myEvent.emit(randonedata);
    
    //   }

}
