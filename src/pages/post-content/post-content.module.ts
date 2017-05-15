import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostContentPage } from './post-content';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
   declarations: [
      PostContentPage
   ],
   imports: [
      IonicPageModule.forChild(PostContentPage),
      IonicImageLoader
   ],
   exports: [PostContentPage]
})
export class PostContentPageModule { }