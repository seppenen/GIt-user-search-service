import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PaginationService} from '../../services/pagination.service';
import {DataObj} from '../../models/models';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges{
  @Input() page: number
  @Input() searchData: DataObj
  @Output()onChange = new EventEmitter();
           pageArray: []

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
  }

  onPageChange(page:number): void {
    this.onChange.emit(page)
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (typeof this.searchData !== 'undefined'){
      this.pageArray = this.paginationService
        .getPages(this.searchData.total_count, this.page)
    }
  }

}
