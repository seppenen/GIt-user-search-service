import { Component, OnInit } from '@angular/core';
import {DataObj} from '../../models/models';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PaginationService} from '../../services/pagination.service';
import {ApiService} from '../../services/api.service';
import {SelectService} from '../../services/select.service';

@Component({
  selector: 'app-ext',
  templateUrl: './ext.component.html',
  styleUrls: ['./ext.component.css']
})
export class ExtComponent implements OnInit {

  dataObj: DataObj
  page: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paginationService: PaginationService,
    private apiService: ApiService,
    private selectService: SelectService) { }

  ngOnInit(): void {
    this.dataObj = this.selectService.initSearchParams()
    this.route.queryParams.subscribe( (params: Params) => {
      if(params.page){
        this.page = params.page
          if(this.dataObj.input){
            this.getData()
          }
      }
    })
  }

  updateQueryParams(){
  this.router.navigate([''], {
    queryParams: {
      page: this.page
    }
  })
}

  setPage(value): void {
   this.page = value
    this.updateQueryParams()
  }

  getParams(){
    return this.dataObj.find(item => (item.checked === true)).value.toLowerCase();
  }

  getData(): void {

    const searchParam = this.getParams();
    this.apiService.fetch(searchParam, this.dataObj.input, this.page)
    .subscribe((res: DataObj) => {
        this.dataObj.userProfile = res
      },
      (error) => {
        console.log('getData not implemented', error.status)
      }
      )
  }
}

