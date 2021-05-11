import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Order} from "../interfaces/order";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Ordermaintenance} from "../interfaces/ordermaintenance";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private orderSubject: Subject<Order>;

  constructor(private  http: HttpClient, private router: Router) {
    this.orderSubject = new Subject<Order>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }
  newOrder(o: Order): Observable<any> {
    return this.http.post<any>(this.SERVER_URL + '/orders/save',o,{withCredentials: true});
  }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Ordermaintenance>(this.SERVER_URL+'/orders/get/all',{withCredentials: true})
      .pipe(map (resp =>resp.list));
  }
  getUndelivered(): Observable<Order[]> {
    return this.http.get<Ordermaintenance>(this.SERVER_URL+'/orders/get/undelivered',{withCredentials: true})
      .pipe(map (resp =>resp.list));
  }
}
