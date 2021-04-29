import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {Slogan} from "../interfaces/slogan";

@Injectable({
  providedIn: 'root'
})
export class SloganService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private sloganSubject: Subject<Slogan[]>;

  constructor(private  http: HttpClient, private router: Router) {
    this.sloganSubject = new Subject<Slogan[]>();
    router.events.subscribe( e => {
      console.log(e);
    });
  }

  addSlogan(b: string): Observable<boolean> {
    return this.http.post<boolean>(this.SERVER_URL+'/slogan/add',b,{ withCredentials: true});
  }
  getSlogan(): Observable<any> {
    return this.http.get<any> (this.SERVER_URL + '/slogan/random',{withCredentials: true} )
      .pipe(map(resp =>resp.list));
  }
  getAllSlogan(): Observable<any> {
    return this.http.get<any> (this.SERVER_URL + '/slogan/list',{withCredentials: true} )
      .pipe(map(resp =>resp.list));
  }
  removeSlogan(id: number): Observable<boolean> {
    return this.http.post<boolean>(this.SERVER_URL+'/slogan/remove/'+id, '',{withCredentials: true})
  }
  refreshSlogans(slogans: Slogan[]): void{
   this.sloganSubject.next(slogans)
  }
  get refreshObservable(): Observable<Slogan[]>{
    return this.sloganSubject.asObservable();
  }
}
