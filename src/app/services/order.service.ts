import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {Order} from "../interfaces/order";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

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
}
