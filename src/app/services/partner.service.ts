import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Partner} from "../interfaces/partner";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {PartnerResponse} from "../interfaces/partner-response";
import {NewproductResponse} from "../interfaces/newproduct-response";

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private partnerSubject: Subject<Partner[]>;

  constructor(private  http: HttpClient, private router: Router) {
    this.partnerSubject = new Subject<Partner[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }

  getPartners(): Observable<Partner[]> {
    return this.http.get<PartnerResponse>(this.SERVER_URL + '/partners/get', {withCredentials: true})
      .pipe(map(resp => resp.list));
  }
  newPartner(p:Partner): Observable<boolean>{
    return this.http.put<boolean>(this.SERVER_URL+'/partners/save',p,{withCredentials: true});
  }
  deletePartner(p: Partner): Observable<boolean>{
    return this.http.delete<boolean>(this.SERVER_URL+'/partners/remove/' + p.id,{withCredentials: true});
  }
}
