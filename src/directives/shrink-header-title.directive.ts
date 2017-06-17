import { Directive, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[shrink-header-title]' })
export class ShrinkHeaderTitle implements OnInit {
    threshold: number;
   start: number = 0;
   slideHeaderPrevious: number = 0;
   headerBar: any;
   ionScroll: any;
   showHeader: boolean;
   hideHeader: boolean;
   headercontent: any;
   headerTitle: any;
   constructor(private el: ElementRef) { }

   ngOnInit() {
      this.threshold = (this.threshold != null ? this.threshold : 150);
      this.headerTitle = this.el.nativeElement;
      this.ionScroll = this.el.nativeElement.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('scroll-content')[0];
      this.ionScroll.addEventListener("scroll", () => {
         if (this.ionScroll.scrollTop - this.start > this.threshold) {
            this.updateHeader(this.headerTitle, true);
         } else {
            this.updateHeader(this.headerTitle, false);
         }
         this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
      });
   }

   updateHeader(headerTitle: any, shrink: boolean) {
   }

}