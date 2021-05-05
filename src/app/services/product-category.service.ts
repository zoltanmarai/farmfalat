import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {ProductCategory} from "../interfaces/product-category";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductCategoryResponse} from "../interfaces/product-category-response";
import {map} from "rxjs/operators";
import {NewproductResponse} from "../interfaces/newproduct-response";


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private categorySubject: Subject<ProductCategory[]>;

  constructor(private  http: HttpClient, private router: Router) {
    this.categorySubject = new Subject<ProductCategory[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }

  getCategories(): Observable<ProductCategory[]>{
    return  this.http.get<ProductCategoryResponse>(this.SERVER_URL+'/category/list',{withCredentials: true})
      .pipe(map(resp => resp.list));
  }

  addNewCat( c: ProductCategory): Observable<any>{
    return this.http.post<any>(this.SERVER_URL+'/category/new',c,{withCredentials: true});
  }
}
