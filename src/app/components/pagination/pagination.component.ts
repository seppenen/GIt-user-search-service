import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PaginationService} from '../../services/pagination.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements  OnInit{

  @Output()onChange = new EventEmitter()
           pageArray: any

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {

    this.paginationService.pagesObs.subscribe(data =>{
      if( data != null && typeof data !== undefined){
      this.pageArray = this.paginationService.getPages(data.total_count, data.page)
      }
    })
  }
  
  onPageChange(page:number): void {
    this.onChange.emit(page)

  }

}
