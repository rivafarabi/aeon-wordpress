import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

@Component({
    selector: 'header-slides',
    template:
    `<div class="gradient-overlay"></div>
    <ion-slides class="featured-media" *ngIf="!onProgress" loop="true" pager="true" paginationType="progress" parallax="true">
        <ion-slide *ngFor="let item of posts | slice:start:end" (click)="postNav(item.id, posts.media_url)">
            <img-loader *ngIf="item.media_url" [src]="item.media_url.featured"></img-loader>
            <div class="post-header">
                <h1 *ngIf="item.title" ion-text [innerHTML]="item.title.rendered" color="light"></h1>
                <ion-row>
                    <ion-col col-6>
                        <span *ngIf="item.date" ion-text color="light">{{item.date | amCalendar: { sameDay: '[Today]', lastDay: '[Yesterday]', lastWeek: '[last] dddd', sameElse: 'MMMM DD, YYYY'} }}</span>
                    </ion-col>
                    <ion-col col-6>
                        <span *ngIf="item.author_name" ion-text color="light">By <b>{{item.author_name}}</b></span>
                    </ion-col>
                </ion-row>
            </div>
        </ion-slide>
    </ion-slides>`
})
export class HeaderSlidesComponent implements OnInit {
    @Input('postList') posts: any;
    @Input('start') start: number;
    @Input('end') end: number;
    @Output() postTarget: EventEmitter<any> = new EventEmitter<any>();

    constructor(private imageLoaderConfig: ImageLoaderConfig) {
        imageLoaderConfig.enableSpinner(false);
    }

    ngOnInit() {
        this.start = (this.start != null ? this.start : 0);
        this.end = (this.end != null ? this.end : 4);
    }

    postNav(postId, postMediaUrl) {
        console.log(postId);
        this.postTarget.emit({
            id: postId,
            media: postMediaUrl
        });
    }

    onImageLoad(imgLoader: ImgLoader) {
        imgLoader.element.parentElement.parentElement.className = "fade-in";
    }
}