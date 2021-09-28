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


  searchData: any;
  searchTypes: DataObj;
  pages: any;
  input: string;
  currentPage;

  constructor(private paginationService: PaginationService, private apiService: ApiService, private selectService: SelectService) { }

  ngOnInit(): void {
    this.searchTypes = this.selectService.createData();


  }

  setSearchType(selected: any): void {

    this.selectService.updateStatus(selected, this.searchTypes);
  }

  openGitProfile(item): void {

    window.open('http://github.com/' + item.login);
  }

  changePage(page): void {

   this.currentPage = page;
   this.getUserData();

  }

  getUserData(): void {

if (typeof this.input !== 'undefined' && this.input.length !== 0){

    const searchParam = this.searchTypes.find(item => (item.checked === true));

    this.apiService.fetch(searchParam.value, this.input, this.currentPage ? this.currentPage : 1)
        .subscribe((res:DataObj) => {
            this.searchData=res.items

            this.pages = this.paginationService.getPages(this.currentPage ? this.currentPage : 1, res.total_count);
    },
      (error) => {
         console.log('getData not implemented', error.status);
      });

  }

  }
}
