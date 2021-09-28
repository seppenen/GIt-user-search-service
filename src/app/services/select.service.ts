
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() {}

  createData = () => {
   const searchTypeItems: any = [];
   searchTypeItems.push({value: 'user:', label: 'User', checked: true});
   searchTypeItems.push({value: 'location:', label: 'Location', checked: false});
   searchTypeItems.push({value: 'language:', label: 'Language', checked: false});

   return searchTypeItems;
  }

   updateStatus = (selected, searchTypes) => {

    searchTypes.map(item => {
      item.checked = false;
      if (item === selected){
          selected.checked = true;
        }
    });
  }
}
