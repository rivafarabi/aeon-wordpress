import { Component, Input, Output, EventEmitter, ElementRef, Renderer, OnInit } from '@angular/core';

@Component({
   selector: 'header-author',
   templateUrl: 'header-author.html'
})
export class HeaderAuthorComponent implements OnInit {
   @Input('authorImg') img: any;
   @Input('authorName') name: number;

   constructor(private el: ElementRef, private renderer: Renderer) { }

   ngOnInit() {
   }

}