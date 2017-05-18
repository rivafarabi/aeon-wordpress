import { Component, Input, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'header-transparent',
    template:
    `<ion-header no-border [ngClass]="{'hide-header':showheader,'show-header':hideheader}">
        <ion-navbar color="primary" *ngIf="!showSearchBar">
            <button ion-button menuToggle *ngIf="showMenuButton"><ion-icon name="menu"></ion-icon></button>
            <ion-title><span [innerHTML]="headerTitle"></span></ion-title>
            <ion-buttons end>
                <button ion-button icon-only (click)="toggleSearchBar()">
                    <ion-icon item-right name="search"></ion-icon>
                </button>
            </ion-buttons>
        </ion-navbar>
        <ion-navbar color="primary" *ngIf="showSearchBar">
            <ion-searchbar [showCancelButton]="true" color="primary" (search)="searchPost($event)"></ion-searchbar>
        </ion-navbar>
    </ion-header>`
})
export class HeaderTransparentComponent implements OnInit {
    @Input('headerTitle') headerTitle: string;
    @Input('threshold') threshold: number;
    @Input('showMenuButton') showMenuButton: boolean;
    private start: number = 0;
    private slideHeaderPrevious: number = 0;
    private ionScroll: any;
    private showheader: boolean;
    private hideheader: boolean;
    private headercontent: any;

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