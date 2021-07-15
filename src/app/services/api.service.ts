import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { DataObj } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  baseUrl:string = environment.baseUrl
 
  constructor(private http: HttpClient) { }

  fetch(searchParam,input,currentPage) {
    return this.http.get<DataObj>
        (this.baseUrl+"search/users?q="+searchParam+input+"&page="+currentPage+"&per_page=20")
  }
  
}


