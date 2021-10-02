import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {DataObj} from '../../models/models';
import {SelectService} from '../../services/select.service';
import {PaginationService} from '../../services/pagination.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit  {

  searchData: DataObj
  searchTypes: DataObj
  pages: []
  input: string
  page: number

  constructor(private paginationService: PaginationService, private apiService: ApiService, private selectService: SelectService) { }

  ngOnInit(): void {
    this.page = 1
    this.searchTypes = this.selectService.createData();
  }

  setSearchType(selected: any): void {
    this.selectService.updateStatus(selected, this.searchTypes)
  }

  setSearchData(value:DataObj){
    this.searchData=value
  }

  setPages(){
    this.pages=this.paginationService
      .getPages(this.page, this.searchData.total_count)
  }

  getParams(){
    return this.searchTypes.find(item => (item.checked === true)).value;
  }

  getData(): void {
    if (typeof this.input !== 'undefined' && this.input.length !== 0){

      const searchParam = this.getParams();
      this.apiService.fetch(searchParam, this.input, this.page)
        .subscribe((res:DataObj) => {
            this.setSearchData(res)
            this.setPages()
          },
          (error) => {
            console.log('getData not implemented', error.status)
          });
    }
  }

  changePage(page:number): void {
   this.page = page
   this.getData()
  }

  openGitProfile(item:any): void {
    window.open('http://github.com/' + item.login)
  }
}
