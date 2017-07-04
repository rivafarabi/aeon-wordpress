import { Directive, Renderer2, OnInit} from '@angular/core';

@Directive({
   selector: '[list-animation]'
})
export class AeonListAnimation {
   constructor(
      private renderer: Renderer2
   ){

   }

   ngOnInit(){
   }

   listFade(){

   }

   listFlip(){

   }

   listSlide(direction: string){

   }

   listSwing(event, direction?: string){
      direction = (direction == null ? 'right' : direction);

      if (event.value) {
            this.renderer.addClass(event.target, 'flip active');
            this.renderer.removeClass(event.target, 'inactive');
        } else {
            this.renderer.addClass(event.target, 'inactive');
            this.renderer.removeClass(event.target, 'active');
        }
   }

   toggleClass(element, addClass: string, removeClass: string){
      
   }
}

