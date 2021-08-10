import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {DataObj} from '../../models/models'
import {SelectService} from '../../services/select.service'
import {PaginationService} from '../../services/pagination.service'
@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit  {

  userProfile:DataObj
  searchTypes:DataObj
  pages:any
  input:string
  currentPage=1
  
  constructor(private paginationService: PaginationService, private apiservice:ApiService,private selectService: SelectService) { }

  
  ngOnInit(): void {
    this.searchTypes=this.selectService.createData()

  }
  
  setSearchType(selected:any){
    this.selectService.updateStatus(selected,this.searchTypes)
  }
  
  openGitProfile(item){
    window.open("http://github.com/"+item.login)
  }

  changePage(page){
   this.currentPage=page
   this.getUserData()
  }

  getUserData(){
    let total_count:number
    const searchParam=this.searchTypes.find(item=>(item.checked==true))
    this.apiservice.fetch(searchParam.value,this.input,this.currentPage)
        .subscribe((response)=>{
            this.userProfile=response["items"]
            total_count=response["total_count"]
            this.pages=this.paginationService.getPages(this.currentPage,total_count)
    },
      (error) => {
         console.log("getData not implemented", error.status)
      })
      
  }

}
