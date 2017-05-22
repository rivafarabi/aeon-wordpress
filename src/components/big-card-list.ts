import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

@Component({
   selector: 'big-card-list',
   template:
   `<ion-grid>
        <ion-row align-items-start col-md-10 offset-md-1>
            <ion-col col-12 col-md-6 *ngFor="let item of posts | slice:start">
                <ion-card *ngIf="item.media_url" (click)="postNav(item.id)">
                    <img-loader *ngIf="item.media_url" (load)="onImageLoad($event)" [src]="item.media_url.sizes.thumbnail.source_url" useImg></img-loader>
                    <span *ngIf="item.category_name" class="post-category" [innerHTML]="item.category_name" ion-text color="light" text-right></span>
                    <div>
                    <p>{{item.date | amCalendar: { sameDay: '[Today]', lastDay: '[Yesterday]', sameElse: 'MMMM DD, YYYY'} }}</p>
                    <ion-card-title *ngIf="item.title" [innerHTML]="item.title.rendered">
                    </ion-card-title>
                    </div>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>`
})

export class BigCardListComponent implements OnInit {
   @Input('postList') posts: any;
   @Input('start') start: number;
   @Output() postTarget: EventEmitter<any> = new EventEmitter<any>();

   constructor(private imageLoaderConfig: ImageLoaderConfig) {
      imageLoaderConfig.enableSpinner(false);
   }

   ngOnInit() {
      this.start = (this.start != null ? this.start : 0);
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