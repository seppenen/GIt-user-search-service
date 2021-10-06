
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() {}

  initSearchParams (){

   const searchTypeItems: any = []
   searchTypeItems.push({value: 'User', checked: false})
   searchTypeItems.push({value: 'Location', checked: true})
   searchTypeItems.push({value: 'Language', checked: false})

   return searchTypeItems;
  }


  updateSearch(selected, searchTypes): any{
    searchTypes.filter(item => (item!=selected)).forEach(item => (item.checked = false))
    searchTypes.find(item => (item.value == selected)).checked = true
  }
}
