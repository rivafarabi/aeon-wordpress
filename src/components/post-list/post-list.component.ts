
import { Component, Input, Output, EventEmitter, Renderer2, OnInit } from '@angular/core';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

@Component({})
export class PostListComponent implements OnInit {
    @Input('postList') posts: any;
    @Input('start') start: number;
    @Input('end') end: number;
    @Input('scrollReveal') scroll_anim: string;
    @Output() postTarget: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private imageLoaderConfig: ImageLoaderConfig,
        private renderer: Renderer2
    ) {
        imageLoaderConfig.enableSpinner(false);
    }

    ngOnInit() {
        this.start = (this.start != null ? this.start : 0);
        this.end = (this.end != null ? this.end : 4);
    }

    postNav(postId, postMediaUrl) {
        this.postTarget.emit({
            id: postId,
            media: postMediaUrl
        });
    }

    onImageLoad(imgLoader: ImgLoader) {
    }

    onReveal(event) {
        if (event.value) {
            this.renderer.addClass(event.target, this.scroll_anim + '-active');
            this.renderer.removeClass(event.target, this.scroll_anim + '-inactive');
        } else {
            this.renderer.addClass(event.target, this.scroll_anim + '-inactive');
            this.renderer.removeClass(event.target, this.scroll_anim + '-active');
        }
    }
}