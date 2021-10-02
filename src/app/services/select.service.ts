
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  constructor() {}

  initSearchTypes (){

   const searchTypeItems: any = []
   searchTypeItems.push({value: 'user:', label: 'User', checked: true})
   searchTypeItems.push({value: 'location:', label: 'Location', checked: false})
   searchTypeItems.push({value: 'language:', label: 'Language', checked: false})

   return searchTypeItems;
  }

   updateStatus(selected, searchTypes) {

     searchTypes.filter(item => (item!=selected)).forEach(item => (item.checked = false))
     searchTypes.find(item => (item == selected)).checked = true

  }
}
