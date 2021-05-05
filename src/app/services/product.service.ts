import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Product} from "../interfaces/product";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductResponse} from "../interfaces/product-response";
import {map} from "rxjs/operators";
import {NewproductResponse} from "../interfaces/newproduct-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly SERVER_URL = environment.SERVER_URL;
  private productSubject: Subject<Product[]>;

  constructor(private  http: HttpClient, private router: Router) {
    this.productSubject = new Subject<Product[]>();
    router.events.subscribe(e => {
      console.log(e);
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.SERVER_URL + '/product/getAllProducts', {withCredentials: true})
      .pipe(map(resp => resp.list));
  }

  modifyProduct(id: number | undefined, pr: Product): Observable<boolean> {
    return this.http.post<boolean>( this.SERVER_URL + '/product/modifyProduct/'+id, pr,{withCredentials: true});
  }

  addProduct(pr: Product): Observable<NewproductResponse>{
    return this.http.post<NewproductResponse>(this.SERVER_URL+'/product/new',pr,{withCredentials: true});
  }
  refreshProducts(prodList: Product[]): void{
    this.productSubject.next(prodList);
  }
  get refreshObservable(): Observable<Product[]>{
    return this.productSubject.asObservable();
  }

  productSearchByName(s: string | null): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.SERVER_URL + '/product/getProductByName/'+ s, {withCredentials: true})
      .pipe(map(resp => resp.list));
  }
  getProductByCategory(id: number):  Observable<Product[]> {
    return this.http.get<ProductResponse>(this.SERVER_URL + '/product/getProductsByCategoryID/' + id, {withCredentials: true})
      .pipe(map(resp => resp.list));
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<ProductResponse>(this.SERVER_URL + '/product/getProductByID/' + id, {withCredentials: true})
      .pipe(map(resp => resp.list[0]));
  }
}
