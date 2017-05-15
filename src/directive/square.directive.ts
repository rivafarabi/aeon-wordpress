import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[square]' })
export class SquareDirective {
   constructor(private el: ElementRef) {
   }
   
   ngAfterViewInit() {
      this.el.nativeElement.style.height = this.el.nativeElement.offsetWidth + "px";
   }
}