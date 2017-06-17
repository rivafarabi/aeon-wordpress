import { Component, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'header-transparent',
    templateUrl: 'header-transparent.html'
})
export class HeaderTransparent implements OnInit {
    @Input('headerTitle') headerTitle: string;
    @Input('threshold') threshold: number;
    @Input('showMenuButton') showMenuButton: boolean;
    
    start: number = 0;
    slideHeaderPrevious: number = 0;
    headerBar: any;
    ionScroll: any;
    showHeader: boolean;
    hideHeader: boolean;
    headercontent: any;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.threshold = (this.threshold != null ? this.threshold : 150);
        this.ionScroll = this.el.nativeElement.parentNode.getElementsByClassName('scroll-content')[0];
        this.ionScroll.addEventListener("scroll", () => {
            if (this.ionScroll.scrollTop - this.start > this.threshold) {
                this.showHeader = true;
                this.hideHeader = false;
            } else {
                this.showHeader = false;
                this.hideHeader = true;
            }
            this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
        });
    }

}