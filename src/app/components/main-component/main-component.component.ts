import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataObj} from '../../models/models';
import {PaginationService} from '../../services/pagination.service';
import {ApiService} from '../../services/api.service';
import {SelectService} from '../../services/select.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  input: string
  searchData: DataObj
  searchTypes: DataObj
  pages: []
  page: number

  constructor(private paginationService: PaginationService, private apiService: ApiService, private selectService: SelectService, private cd: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.searchTypes = this.selectService.initSearchTypes();
  }

  setSearchData(value:DataObj){
    this.searchData = value
  }

  setSearchType(selected: any): void {
    this.selectService.updateParam(selected, this.searchTypes)
  }

  setPage(page){
    this.page = page
    this.getData()
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
          },
          (error) => {
            console.log('getData not implemented', error.status)

          });
    }
  }

}
