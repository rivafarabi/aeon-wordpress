import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { PostListComponent } from '../post-list.component';

@Component({
    selector: 'header-slides',
    templateUrl: 'header-slides.html'
})
export class HeaderSlidesComponent extends PostListComponent {
}