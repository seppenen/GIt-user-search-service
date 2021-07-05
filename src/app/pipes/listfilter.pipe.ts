import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listfilter'
})
export class ListfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
