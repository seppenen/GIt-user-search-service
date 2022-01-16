import {Component, OnInit} from '@angular/core';
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
    this.route.queryParams.subscribe((params: Params) => {
      if (params.page) {
        this.page = params.page
           this.getData()
        }
    })
  }

  updateQueryParams(page){
  this.router.navigate(
    [''],
    {
      queryParams: {
        page: page
      }
    })
}

  updatePagination(): void {
    this.paginationService.setObsData({ total_count: this.dataObj.userProfile.total_count, page: this.page })
  }

   getData(): void {

     if (typeof this.dataObj.query !== 'undefined' && this.dataObj.query != null) {
       const searchParam = this.dataObj.find(item => (item.checked === true)).value.toLowerCase()
         this.apiService.fetch(searchParam, this.dataObj.query, this.page)
          .then((res: DataObj) => {
              this.dataObj.userProfile = res
              this.updatePagination()
            },
            (error) => {
              console.log('getData() not implemented', error.status)
            })
     }
  }

  resetForm() {
    this.dataObj.userProfile = new DataObj()
    this.page = null
    this.updatePagination()
    this.updateQueryParams(null)
  }

}

