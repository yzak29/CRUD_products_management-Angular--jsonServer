import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/product.state";
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {



  @Input() productsInput$ : Observable<AppDataState<ProductModel[]>> | null=null ;
  readonly dataStateEnum = DataStateEnum;


  constructor() { }

  ngOnInit(): void {
  }

  /*onSelect(p: ProductModel) {
    this.ProductEventEmitter.emit({type : ProductActionsTypes.SELECT_PRODUCT , payload : p})
  }

  onDelete(p: ProductModel) {
    this.ProductEventEmitter.emit({type : ProductActionsTypes.DELETE_PRODUCT , payload : p})
  }

  onUpdate(p: ProductModel) {
    this.ProductEventEmitter.emit({type : ProductActionsTypes.UPDATE_PRODUCT , payload : p})
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionsTypes.SELECT_PRODUCT : this.onSelect($event.payload) ; break ;
      case ProductActionsTypes.DELETE_PRODUCT : this.onDelete($event.payload) ; break ;
      case ProductActionsTypes.UPDATE_PRODUCT : this.onUpdate($event.payload) ; break ;
    }
  }*/
}
