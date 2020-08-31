import { NgserviceService } from './../ngservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product=new Product();

  constructor(private _route:Router, private _service: NgserviceService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let id =parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchProductByIdFromRemort(id).subscribe(
      data=>{
        console.log("data recieved");
        this.product=data;
      },
      error=>console.log("exception occured")
    )
  }
  updateProductformsubmit(){

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
