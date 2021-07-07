import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
 
  currentPage:number
  buttonArray:any
  lastPage:number
  constructor() { }

  getPages(page, total_count){
    this.buttonArray=[]
    this.currentPage=page;	
    this.lastPage=Math.ceil(total_count / 20)

    if (typeof total_count !=="undefined"){
        const temp=1000/20
       
      if(this.lastPage>=temp){
        this.lastPage=temp
      }
  }  

    if (this.currentPage == 1 || this.currentPage == 2 || this.currentPage == 3) {
    
      for(var i = 1; i <= 7; i++){
        if((total_count-20)>=0){
          this.buttonArray.push(i)
        }else{
          this.buttonArray=[1]
        }
     }
    }
    else if (this.currentPage == this.lastPage || this.currentPage == this.lastPage - 1) {
      this.buttonArray = [this.lastPage - 3, this.lastPage - 2, this.lastPage - 1, this.lastPage ];
    }
    else {
      this.buttonArray = [this.currentPage - 3,this.currentPage  -2, this.currentPage - 1, this.currentPage, this.currentPage + 1,this.currentPage + 2,this.currentPage + 3];
    }

    return this.buttonArray
  }

}



 
