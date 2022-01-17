import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  fetch(searchParam, input, page?): Promise<any>{
    let params = new HttpParams()
      .set('q', `${searchParam}:${input}`)
      .set('page', `${page}` ? `${page}`:`1`)
      .set('per_page', '15');
        return this.http.get(this.baseUrl, {params}).toPromise();
  }
}


