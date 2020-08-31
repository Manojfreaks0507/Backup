import { Product } from './../product';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product=new Product();

  constructor(private _route:Router, private _service: NgserviceService) { }

  ngOnInit(): void {
  }
  
  addProductformsubmit(){

  this._service.addproductToRemote(this.product).subscribe
  (
    data=>{
      console.log("data added successfully");
      this._route.navigate(['productlist']);
    },
    error=>console.log("error")
  ) 
  }

  gotolist(){
    console.log('go back');
    this._route.navigate(['productlist']);
  }


}
