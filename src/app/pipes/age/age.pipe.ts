import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {
    const actualDate =  new Date();
    const actualYear = actualDate.getFullYear()
    return actualYear-value;
  }

}
