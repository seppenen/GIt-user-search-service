import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataObj} from '../../models/models';
import {SelectService} from '../../services/select.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() dataObj: DataObj
  @Output() onNext = new EventEmitter();
  input: string

  constructor(private selectService:  SelectService) {}

  setSearchTypes(value){
    this.selectService.updateSearch(value, this.dataObj)
  }

  openGitProfile(item:any): void {
    window.open('http://github.com/' + item.login)
  }

  next(){
      this.dataObj.input = this.input
      this.onNext.emit()

  }

}
