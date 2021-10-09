import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

   pagesSubject = new BehaviorSubject(null);
   pagesObs = this.pagesSubject.asObservable();

  page: number
  pagesArray
  lastPage:number

  constructor() { }

  setObsData(data: {total_count: number, page: number}) {
    this.pagesSubject.next(data);
  }

  getPages(total_count, page?){
    this.page = page ? +page : 1
    this.pagesArray = []
    this.lastPage=Math.ceil(total_count / 15)

    if (typeof total_count !=="undefined"){
        const temp = 1000 / 1

      if(this.lastPage>=temp){
        this.lastPage=temp
      }
    }
      if(total_count <= 15){
        this.pagesArray=[]
      }
      if (this.page == 1 || this.page == 2 || this.page == 3) {
      for(let i = 1; i <= 7; i++){
        if((total_count-15)>0){
          this.pagesArray.push(i)
        }
     }
    }

    else if (this.page == this.lastPage || this.page == this.lastPage - 1) {
      this.pagesArray = [this.lastPage - 3, this.lastPage - 2, this.lastPage - 1, this.lastPage ];
    }
    else {
      this.pagesArray = [this.page - 3,this.page  -2, this.page - 1, this.page, this.page + 1,this.page + 2,this.page + 3];
    }
    return this.pagesArray
  }

}




