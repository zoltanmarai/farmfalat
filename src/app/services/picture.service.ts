import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Picture} from "../interfaces/picture";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {PictureResponse} from "../interfaces/picture-response";

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private pictureSubject: Subject<Picture[]>;

  constructor(private http: HttpClient, private router: Router) {
    this.pictureSubject = new Subject<Picture[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }
  getPictureByProductID(id: number):  Observable<Picture[]> {
    return this.http.get<PictureResponse>(this.SERVER_URL + '/image/getByProductID/' + id, {withCredentials: true})
      .pipe(map(resp => resp.list));
  }
}
