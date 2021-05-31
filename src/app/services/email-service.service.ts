import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {EmailNews} from "../interfaces/email-news";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Slogan} from "../interfaces/slogan";


@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private emailSubject: Subject<EmailNews[]>;


  constructor(private  http: HttpClient, private router: Router) {
    this.emailSubject = new Subject<EmailNews[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }
  newPartner(e:EmailNews): Observable<boolean>{
    return this.http.post<boolean>(this.SERVER_URL+'/emailNews/signUp',e,{withCredentials: true});
  }
  allPartners(): Observable<EmailNews[]>{
    return this.http.get<any>(this.SERVER_URL+'/emailNews/allActives',{withCredentials: true})
      .pipe(map(resp => resp));
  }
  newEmail(s: string):Observable<any> {
    return this.http.post<boolean>(this.SERVER_URL+'/emailNews/sendANew',s,{ withCredentials: true});
  }
 // refreshEmailPartners(partners: EmailNews[]): void{
  //  this.emailSubject.next(partners)
 // }
 // get refreshObservable(): Observable<EmailNews[]>{
  //  return this.emailSubject.asObservable();
 // }
}
