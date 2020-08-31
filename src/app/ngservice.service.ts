import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

    fetchProductListFromRemort():Observable<any>{
      return this._http.get<any>("http://localhost:8080/getproductlist");
    }
    addproductToRemote(product: Product):Observable<any>{
      return this._http.post<any>("http://localhost:8080/addproduct",product);
    }
    fetchProductByIdFromRemort(id: number):Observable<any>{
      return this._http.get<any>("http://localhost:8080/getproductbyid/"+id);
    }
    deleteProductByIdFromRemort(id: number):Observable<any>{
      return this._http.delete<any>("http://localhost:8080/deleteproductbyid/"+id);
    }
}
