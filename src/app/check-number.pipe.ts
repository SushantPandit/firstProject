import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkNumber'
})
export class CheckNumberPipe implements PipeTransform {
num: number = 0;
  transform(value: number, args?: any): any {
    if (value > 1000) {
      return value + 'it is Higher than 1000';
    } else if (value < 1000) {
      return value + 'is Lower than 1000';
    } else {
      return value + 'is equal to 1000';
    }
  }

  

}
