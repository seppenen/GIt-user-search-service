import { Component } from '@angular/core';
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

  constructor(private apiservice:ApiService) { }
 
  setSearchTypes(data:DataObj){
    this.searchType=data
  }


  getData(){
    console.log("Input",this.input)
    this.apiservice.fetch(this.searchType,this.input).subscribe((response)=>{
    this.userProfile=response["items"];
    this.input=''
    },
    (_error) => {
       console.log("Error", _error.status);
    })
  }
}
