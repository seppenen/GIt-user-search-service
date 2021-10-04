import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {PaginationService} from '../../services/pagination.service';
import {DataObj} from '../../models/models';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges{

  @Input() dataObj: DataObj
  @Input() pageArray: any
  @Output()onChange = new EventEmitter()
  page: number


  constructor(private paginationService: PaginationService) { }


  onPageChange(page:number): void {
    this.page = page
    this.onChange.emit(page)

  }

  ngOnChanges(changes: SimpleChanges): void {

     if(typeof this.dataObj !== 'undefined'){
       this.pageArray = this.paginationService.getPages(this.dataObj['total_count'], this.page)
       if(Object.keys(this.pageArray).length == 1){
         this.onChange.emit(1)
       }
     }

  }
}
