import { Directive, ElementRef, Input } from '@angular/core';
import { __read } from 'tslib';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  @Input() set appIf(value: boolean){
   if(value){
    this.element.nativeElement.style.display= 'none';
   }
  }

  constructor(private element: ElementRef) { }

}
