import { NgserviceService } from './../ngservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

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
  
    gotolist(){
      console.log('go back');
      this._route.navigate(['productlist']);
    }
  

}
