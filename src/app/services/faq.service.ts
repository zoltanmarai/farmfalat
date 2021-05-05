import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Faq} from "../interfaces/faq";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Product} from "../interfaces/product";
import {ProductResponse} from "../interfaces/product-response";
import {map} from "rxjs/operators";
import {FaqResponse} from "../interfaces/faq-response";

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private faqSubject: Subject<Faq[]>;

  constructor(private  http: HttpClient, private router: Router) {
    this.faqSubject = new Subject<Faq[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }
  getFaqs(): Observable<Faq[]> {
    return this.http.get<FaqResponse>(this.SERVER_URL + '/faq/get', {withCredentials: true})
      .pipe(map(resp => resp.list));
  }

}
