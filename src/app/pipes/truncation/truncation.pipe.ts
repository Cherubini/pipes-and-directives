import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncation'
})
export class TruncationPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const nChar=args[0] ? args[0] : 30;
    let result = value.length>nChar ? value.slice(0,args[0])+'...': value;
    return result;
  }

}
