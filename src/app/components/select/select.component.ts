import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataObj} from 'src/app/models/models';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  dataObj:DataObj
  @Output() onChange = new EventEmitter<DataObj>();
  searchTypeItems:any=[]


  constructor() { }


  ngOnInit(): void {
  this.searchTypeItems.push({value: "user:",label:"User",checked:true})
  this.searchTypeItems.push({value: "location:",label:"Location",checked:false})
  this.searchTypeItems.push({value: "language:",label:"Language",checked:false})
  
  this.dataObj=this.searchTypeItems
  this.onChange.emit(this.dataObj)
   
  }

  updateStatus(selected:any){
    this.dataObj.map(item=>{
      item.checked=false;
        if(item==selected){
          selected.checked=true
        }
    }
    )
    
  }

}
