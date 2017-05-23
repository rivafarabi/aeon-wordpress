import { Component } from '@angular/core';
import { PostListComponent } from '../post-list.component';

@Component({
    selector: 'card-list',
    template:
    `<ion-grid>
        <ion-row align-items-start col-md-10 offset-md-1>
            <ion-col col-6 col-md-4 *ngFor="let item of posts | slice:start">
                <ion-card *ngIf="item.media_url" (click)="postNav(item.id)">
                    <img-loader *ngIf="item.media_url" (load)="onImageLoad($event)" [src]="item.media_url.sizes.thumbnail.source_url" useImg></img-loader>
                    <span *ngIf="item.category_name" class="post-category" [innerHTML]="item.category_name" ion-text color="light" text-right></span>
                    <ion-card-content>
                        <ion-card-title *ngIf="item.title" [innerHTML]="item.title.rendered">
                        </ion-card-title>
                        <p>{{item.date | amCalendar: { sameDay: '[Today]', lastDay: '[Yesterday]', sameElse: 'MMMM DD, YYYY'} }}</p>
                    </ion-card-content>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>`
})
export class CardListComponent extends PostListComponent {
}