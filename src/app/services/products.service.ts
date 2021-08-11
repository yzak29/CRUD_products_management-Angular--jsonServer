import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts() : Observable<ProductModel[]>{
    let url = (Math.random()>0.2)?environment.HOST:environment.unreachableHost;
    return this.http.get<ProductModel[]>(url + "/products");
  }

  getSelectedProducts() : Observable<ProductModel[]>{
    let url = environment.HOST;
    return this.http.get<ProductModel[]>(url + "/products?selected=true")
  }

  getAvailableProducts() : Observable<ProductModel[]>{
    let url = environment.HOST;
    return this.http.get<ProductModel[]>(url + "/products?available=true")
  }

  getSearch(str : string) : Observable<ProductModel[]>{
    let url = environment.HOST;
    return this.http.get<ProductModel[]>(url + "/products?name_like="+str)
  }

  Select(p: ProductModel) {
    let url = environment.HOST;
    p.selected = !p.selected;
    return this.http.put<ProductModel>(url+"/products/"+p.id , p)
  }

  delete(p: ProductModel) {
    let url = environment.HOST;
    return this.http.delete<void>(url+"/products/"+p.id);
  }

  saveProduct(product:ProductModel){
    let url = environment.HOST;
    return this.http.post<ProductModel>(url+"/products" , product);
  }

  getProductById(productId: number) {
    let url = environment.HOST;
    return this.http.get<ProductModel>(url+"/products/"+productId);
  }

  editProduct(value: any) {
    let url = environment.HOST;
    return this.http.put<ProductModel>(url+"/products/"+value.id , value);
  }
}
