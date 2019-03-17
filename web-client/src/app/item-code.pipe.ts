import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'itemCode'
})
export class ItemCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const ups = _.startCase(value);
    const words = ups.split(' ');
    const num = words.length > 0 ? Math.floor(Math.random() * 10001) : '';
    let retVal = '';

    words.forEach((currVal) => {
      retVal = retVal + currVal.substring(0, 1);
    });

    return retVal.substring(0, 2) + num;
  }
}
