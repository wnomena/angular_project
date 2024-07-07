import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverForMenuPc]',
  standalone: true
})
export class HoverForMenuPcDirective {
  

  constructor(private el:ElementRef) { this.setKeyUp("99") }
  @Input("appHoverForMenuPc") limite:string = "0";
  @HostListener ('input') onKeyUp () { this.setKeyUp(this.limite) }

  setKeyUp(p0: string) {
    if(this.el.nativeElement.value > parseInt(p0)) {
      this.el.nativeElement.value = parseInt(p0)
      console.log("mande")
    }
  }
  
}
