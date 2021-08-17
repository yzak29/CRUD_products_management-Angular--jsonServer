import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import {ActionEvent, ProductActionsTypes} from "../../../state/product.state";

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {

  faSearch = faSearchPlus;

  @Input() currentLink : any;
  @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productEventEmitter.emit({type : ProductActionsTypes.GET_ALL_PRODUCTS})
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({type : ProductActionsTypes.GET_SELECTED_PRODUCTS})
  }

  onGetAvailableProducts() {
    this.productEventEmitter.emit({type : ProductActionsTypes.GET_AVAILABLE_PRODUCTS})
  }

  onGetSearch(value: any) {
    this.productEventEmitter.emit({type : ProductActionsTypes.SEARCH_PRODUCTS , payload : value})
  }
}
