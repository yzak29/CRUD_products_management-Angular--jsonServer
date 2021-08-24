import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductActionsTypes} from "../../state/product.state";
import {EventDriverService} from "../../services/event-driver.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  formGroup!:FormGroup;
  productId! : number;
  submitted : boolean=false;

  constructor(private activatedRoute:ActivatedRoute ,
              private productService:ProductsService ,
              private eventDriverService : EventDriverService ,
              private fb:FormBuilder ) {
    this.productId = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productId)
      .subscribe(
        data=>{
          this.formGroup = this.fb.group({
            id : [data.id , Validators.required] ,
            name : [data.name , Validators.required] ,
            price : [data.price , Validators.required] ,
            quantity : [data.quantity , Validators.required] ,
            selected : [data.selected , Validators.required] ,
            available : [data.available , Validators.required]
          })
        } ,
        err=>{
          console.log(err.message())
        })
  }

  onEditProduct() {
    this.submitted=true;
    if(this.formGroup.invalid)
      return;
    this.productService.editProduct(this.formGroup.value)
      .subscribe(
        data=>{
          this.eventDriverService.publishEvent({type : ProductActionsTypes.PRODUCT_UPDATED})
          alert("product updated")
        } , error => {
          console.log(error.message)
        })
  }
}
