import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(
    private http:HttpClient
  ) { }

  getdata()
  {
    return this.http.get<any>(" https://dummyjson.com/products?limit=10&skip=0")
  }

}

