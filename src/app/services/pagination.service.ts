import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  page:number
  buttonArray:any
  lastPage:number

  constructor() { }

  getPages(total_count, page?){
    this.buttonArray=[]
    this.page = page ? page : 1
    this.lastPage=Math.ceil(total_count / 15)

    if (typeof total_count !=="undefined"){
        const temp=1000/15

      if(this.lastPage>=temp){
        this.lastPage=temp
      }
  }
    if((total_count-15)<=0){
      this.buttonArray=[1]
    }
    else if (this.page == 1 || this.page == 2 || this.page == 3) {

      for(let i = 1; i <= 7; i++){
        if((total_count-15)>=0){
          this.buttonArray.push(i)
        }else{
          this.buttonArray=[1]
        }
     }
    }
    else if (this.page == this.lastPage || this.page == this.lastPage - 1) {
      this.buttonArray = [this.lastPage - 3, this.lastPage - 2, this.lastPage - 1, this.lastPage ];
    }
    else {
      this.buttonArray = [this.page - 3,this.page  -2, this.page - 1, this.page, this.page + 1,this.page + 2,this.page + 3];
    }

    return this.buttonArray
  }

}




