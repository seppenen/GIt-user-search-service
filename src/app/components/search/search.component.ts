import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataObj} from '../../models/models';
import {SelectService} from '../../services/select.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()  dataObj: DataObj;
  @Output() onNext = new EventEmitter();
  @Output() onChange= new EventEmitter();
            input: string;

  constructor(private selectService:  SelectService) {}

  setSearchTypes(value){
    this.selectService.updateSearch(value, this.dataObj)
    this.input = null
    this.onChange.emit()
  }

  openGitProfile(item:any): void {
    window.open('http://github.com/' + item.login)
  }

  submit(){

      this.dataObj.query = this.input
      this.onNext.emit()

  }

}
