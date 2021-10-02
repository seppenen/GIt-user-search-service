import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  fetch(searchParam, input, page) {
    return this.http.get(this.baseUrl
          .replace('[searchParam]', searchParam)
          .replace('[input]', input)
          .replace('[currentPage]', page)
        );
  }
}


