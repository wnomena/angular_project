import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHoverForMenuPc]',
  standalone: true
})
export class HoverForMenuPcDirective {
  
  constructor(el:ElementRef) { }
  
}
