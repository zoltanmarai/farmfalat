import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Login} from "../interfaces/login";
import {UserResponse} from "../interfaces/user-response";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private userSubject: Subject<User[]>;

  constructor(private  http: HttpClient, private router: Router) {
    this.userSubject = new Subject<User[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }
  addUser(s:User): Observable<boolean> {
    return this.http.post<boolean>(this.SERVER_URL + '/user/new',s,{withCredentials: true});
  }
  login(l:Login): Observable<UserResponse>{
    return this.http.post<UserResponse>(this.SERVER_URL+'/authenticate',l,{withCredentials: true});
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<UserResponse>(this.SERVER_URL + '/user/list/all', {withCredentials: true})
      .pipe(map(resp => resp.list));
  }
  getActiveUsers(): Observable<User[]> {
    return this.http.get<UserResponse>(this.SERVER_URL + '/user/list/actives', {withCredentials: true})
      .pipe(map(resp => resp.list));
  }
  getOneUser(id:number): Observable<User> {
    return this.http.get<UserResponse>(this.SERVER_URL + '/user/get/'+id, {withCredentials: true})
      .pipe(map(resp => resp.list[0]));
  }

  userModify(id: number | undefined, u: User): Observable<any> {
    return this.http.post<any>(this.SERVER_URL+'/user/modifyUser/'+id, u, {withCredentials: true});
  }
  removeUser(id:number): Observable<any> {
    return this.http.post<any>(this.SERVER_URL+'/user/remove/'+id, '', {withCredentials: true});
  }
}
