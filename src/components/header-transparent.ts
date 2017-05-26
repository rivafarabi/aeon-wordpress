import { Component, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'header-transparent',
    template:
    `<ion-header no-border [ngClass]="{'hide-header':hideheader,'show-header':showheader}">
       <ng-content></ng-content>
    </ion-header>`,
})
export class HeaderTransparentComponent implements OnInit {
    @Input('headerTitle') headerTitle: string;
    @Input('threshold') threshold: number;
    @Input('showMenuButton') showMenuButton: boolean;
    
    start: number = 0;
    slideHeaderPrevious: number = 0;
    headerBar: any;
    ionScroll: any;
    showheader: boolean;
    hideheader: boolean;
    headercontent: any;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.threshold = (this.threshold != null ? this.threshold : 200);
        this.ionScroll = this.el.nativeElement.parentNode.getElementsByClassName('scroll-content')[0];
        this.ionScroll.addEventListener("scroll", () => {
            if (this.ionScroll.scrollTop - this.start > this.threshold) {
                this.showheader = true;
                this.hideheader = false;
            } else {
                this.showheader = false;
                this.hideheader = true;
            }
            this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
        });
    }

}