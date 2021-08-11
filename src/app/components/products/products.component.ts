import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Observable, of} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {catchError, map, startWith} from "rxjs/operators";
import {AppDataState, DataStateEnum} from "../../state/product.state";
import {faEdit, faSearchPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  faSearch = faSearchPlus;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  products$ : Observable<AppDataState<ProductModel[]>> | null=null ;
  readonly dataStateEnum = DataStateEnum;
  currentLink : any;

  constructor(private productsService:ProductsService , private route:Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.currentLink = "all";
    this.products$ = this.productsService.getAllProducts()
      .pipe(
        map(data=>({dataState: DataStateEnum.LOADED , data : data})) ,
        startWith({dataState: DataStateEnum.LOADING}) ,
        catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
      )
  }

  onGetSelectedProducts() {
    this.currentLink = "selected";
    this.products$ = this.productsService.getSelectedProducts()
      .pipe(
        map(data=>({dataState: DataStateEnum.LOADED , data : data})) ,
        startWith({dataState: DataStateEnum.LOADING}) ,
        catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
      )
  }

  onGetAvailableProducts() {
    this.currentLink = "available";
    this.products$ = this.productsService.getAvailableProducts()
      .pipe(
        map(data=>({dataState: DataStateEnum.LOADED , data : data})) ,
        startWith({dataState: DataStateEnum.LOADING}) ,
        catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
      )
  }

  onGetSearch(val:any) {
    this.currentLink = "search";
    this.products$ = this.productsService.getSearch(val.keyword)
      .pipe(
        map(data => ({dataState : DataStateEnum.LOADED , data : data})) ,
        startWith({dataState : DataStateEnum.LOADING}) ,
        catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
      )
  }

  onSelect(p:ProductModel) {
    this.productsService.Select(p)
      .subscribe(
        data=>{ p.selected = data.selected } ,
        err =>{ console.log(err.message) }
      )
  }

  onDelete(p:ProductModel) {
    let v=confirm("vous voulez vraiment suprimer l'element")
    if (v==true)
    this.productsService.delete(p)
      .subscribe(
        data=>{ this.onGetAllProducts() } ,
        err=>{ console.log(err.message)}
      )
  }

  onUpdate(p: ProductModel) {
    this.route.navigateByUrl("/editProduct/"+p.id);
  }
}
