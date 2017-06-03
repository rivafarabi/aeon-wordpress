import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostContentPage } from './post-content';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { HeaderTransparent } from '../../components/header-transparent.module';

@NgModule({
   declarations: [PostContentPage],
   imports: [
      IonicPageModule.forChild(PostContentPage),
      IonicImageLoader,
      MomentModule,
      HeaderTransparent
   ],
   exports: [PostContentPage]
})
export class PostContentPageModule { }