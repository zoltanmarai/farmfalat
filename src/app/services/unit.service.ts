import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UnitResponse} from "../interfaces/unit-response";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private unitSubject: Subject<string>;

  constructor(private  http: HttpClient, private router: Router) {
    this.unitSubject = new Subject<string>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }
  getUnits(): Observable<string[]> {
    return this.http.get<UnitResponse>( this.SERVER_URL+'/product/unitsList', {withCredentials: true})
      .pipe(map(resp => resp.list));
  }
}
