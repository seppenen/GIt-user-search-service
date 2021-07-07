import { EventEmitter, Output } from '@angular/core';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { DataObj } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements AfterContentChecked {


  @Input() totalPages:any
  @Output() onChange = new EventEmitter<DataObj>();

 
  constructor() { }
  
  ngAfterContentChecked(): void {
 
    if (typeof this.totalPages !=="undefined"){
      console.log(this.totalPages)
  }
}




}
