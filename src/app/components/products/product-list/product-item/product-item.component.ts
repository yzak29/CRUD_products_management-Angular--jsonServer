import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faCheck, faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {ProductModel} from "../../../../models/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../../state/product.state";
import {EventDriverService} from "../../../../services/event-driver.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faCheck = faCheck;

  @Input() product? : ProductModel;


  constructor(private eventDriverService : EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(product: ProductModel) {
    //this.productEventEmitter.emit({type : ProductActionsTypes.SELECT_PRODUCT , payload : product})
    this.eventDriverService.publishEvent({type : ProductActionsTypes.SELECT_PRODUCT , payload : product})
  }

  onDelete(product: ProductModel) {
    //this.productEventEmitter.emit({type : ProductActionsTypes.DELETE_PRODUCT , payload : product})
    this.eventDriverService.publishEvent({type : ProductActionsTypes.DELETE_PRODUCT , payload : product})
  }

  onUpdate(product: ProductModel) {
    //this.productEventEmitter.emit({type : ProductActionsTypes.UPDATE_PRODUCT , payload : product})
    this.eventDriverService.publishEvent({type : ProductActionsTypes.UPDATE_PRODUCT , payload : product})
  }
}
