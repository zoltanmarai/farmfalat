import { Component, OnInit } from '@angular/core';
import {Order} from "../../interfaces/order";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-maintenance',
  templateUrl: './order-maintenance.component.html',
  styleUrls: ['./order-maintenance.component.css']
})
export class OrderMaintenanceComponent implements OnInit {
  orders: Order[];
  order: Order;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private orderService: OrderService) {
    this.orders = [];
    this.order = {
      id: 0,
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
  getAllOrders(): void {
    this.orderService.getAllOrders().subscribe( resp =>{
      this.orders = resp;
    });
  }
  getUndelivered(): void {
    this.orderService.getUndelivered().subscribe( resp =>{
      this.orders = resp;
    });
  }

}
