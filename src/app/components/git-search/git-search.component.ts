import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {DataObj} from '../../models/models'

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent   {

  userProfile:DataObj
  searchType:DataObj
  input:string
  page:number=1
  itemsPerPage:number=10
  totalItems:number
 
  constructor(private apiservice:ApiService) { }
 
  setSearchTypes(data:DataObj){
    this.searchType=data
  }

  openGitProfile(item){
    window.open("http://github.com/"+item.login);
  }

  getData(){
    this.apiservice.fetch(this.searchType,this.input).subscribe((response)=>{
    this.userProfile=response["items"]
    this.totalItems=response["items"].length
    this.resetSearchParams()
    },
    (error) => {
       console.log("getData not implemented", error.status)
    })
  }

  resetSearchParams(){
  this.input=''
  this.page=1
    
  }
}
