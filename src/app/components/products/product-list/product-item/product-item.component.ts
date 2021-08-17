import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {ProductModel} from "../../../../models/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  @Input() product? : ProductModel;
  @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: ProductModel) {
    this.productEventEmitter.emit({type : ProductActionsTypes.SELECT_PRODUCT , payload : product})
  }

  onDelete(product: ProductModel) {
    this.productEventEmitter.emit({type : ProductActionsTypes.DELETE_PRODUCT , payload : product})
  }

  onUpdate(product: ProductModel) {
    this.productEventEmitter.emit({type : ProductActionsTypes.UPDATE_PRODUCT , payload : product})
  }
}
