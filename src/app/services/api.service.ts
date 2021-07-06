import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { DataObj } from '../models/models';


@Injectable({
  providedIn: 'root'
})
export class ApiService  {
  
  @Input() dataObj:DataObj
  baseUrl:string = environment.baseUrl
 
  constructor(private http: HttpClient) { }

  fetch(dataObj,input) {
  const param= dataObj.find(item=>(item.checked==true))
  return this.http.get<DataObj>(this.baseUrl+"search/users?q="+param.value+input+"&per_page=100")
  }
  
}


