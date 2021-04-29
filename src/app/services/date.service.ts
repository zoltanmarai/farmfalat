import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {DeliveryDate} from "../interfaces/deliveryDate";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {DateResponse} from "../interfaces/date-response";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private dateSubject: Subject<DeliveryDate[]>;

  constructor(private  http: HttpClient, private router: Router) {
    this.dateSubject = new Subject<DeliveryDate[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }
  getDeliveryDates(): Observable<DeliveryDate[]> {
    return  this.http.get<DateResponse>(this.SERVER_URL+'/delivery/nextTwo',{withCredentials: true} )
      .pipe(map(resp => resp.list));
  }
}
