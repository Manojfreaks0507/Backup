import { Product } from './../product';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  _productlist:Product[];

  constructor(private _service:NgserviceService,private _route:Router) { }

  ngOnInit(): void {
    this._service.fetchProductListFromRemort().subscribe(
      data=>{
        console.log("response recieved");
        this._productlist=data 
      },
      error=>console.log("exception occured")
    )
  }

  goToAddProduct(){
    this._route.navigate(['/addproduct']);
  }

  goToEditProduct(id: number){
     console.log('id'+ id);
     this._route.navigate(['/editproduct',id]);
  }
  goToViewProduct(id: number){
    console.log("id"+id);
    this._route.navigate(['/viewproduct',id]);
 }
 deleteProduct(id: number){

  this._service.deleteProductByIdFromRemort(id).subscribe(
    data=>{
      console.log("deleted successfully");
      this._route.navigate(['/productlist']);
    },
    error=>console.log("exception occured")  
  )

 }

}
