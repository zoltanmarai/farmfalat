import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../../interfaces/order";

@Component({
  selector: 'tr[app-orders-tablerow]',
  templateUrl: './orders-tablerow.component.html',
  styleUrls: ['./orders-tablerow.component.css']
})
export class OrdersTablerowComponent implements OnInit {
  @Input()
  order: Order;
  constructor() {
    this.order = {
      ID: 0,
      orderTime: '',
      firstName: '',
      lastName: '',
      username: '',
      phoneNumber: '',
      userID: 0,
      postCode_delivery: 0,
      city_delivery: '',
      simpleAddress_delivery: '',
      comment_delivery: '',
      deliveryDayID: 0,
      deliveryGapsID: 0,
      ordersItemList: [],
      paymentType: '',
      status: false,
      deliveryFee: 0
    };
  }

  ngOnInit(): void {
  }

}
