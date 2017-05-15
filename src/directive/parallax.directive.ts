
import { Directive, ElementRef } from '@angular/core';

@Directive({
   selector: '[parallax]'
})
export class ParallaxDirective {
   constructor(private el: ElementRef) { }
   private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
   }
}