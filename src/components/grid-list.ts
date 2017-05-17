import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { SquareDirective } from '../directive/square.directive';
@Component({
   selector: 'grid-list',
   template:
   `<ion-grid *ngIf="posts">
        <ion-row col-md-10 offset-md-1>
            <ion-col col-12 col-md-6 *ngFor="let item of posts | slice:start" (click)="postNav(item.id, item.media_url)">
                <ion-row>
                    <ion-col square class="post-thumbnail" col-4>
                        <img-loader *ngIf="item.media_url" (load)="onImageLoad($event)" [src]="item.media_url.sizes.thumbnail.source_url" useImg></img-loader>
                    </ion-col>
                    <ion-col *ngIf="item.title" col-8>
                        <p class="post-category" [innerHTML]="item.category_name"></p>
                        <p class="post-title" [innerHTML]="item.title.rendered"></p>
                        <p class="post-date">{{item.date | amCalendar: { sameDay: '[Today]', lastDay: '[Yesterday]', sameElse: 'MMMM DD, YYYY'} }}</p>
                    </ion-col>
                </ion-row>
            </ion-col>
        </ion-row>
    </ion-grid>`,
    styles:[``]
})
export class GridListComponent{
   @Input('postList') posts: any;
   @Input('start') start: number;
   @Output() postTarget : EventEmitter<any> = new EventEmitter<any>();

   postNav(postId, postMediaUrl){
       console.log(postId);
       this.postTarget.emit({
           id: postId,
           media: postMediaUrl
        });
   }
}