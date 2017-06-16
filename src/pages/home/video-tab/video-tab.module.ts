import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoTabPage } from './video-tab';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

import { HeaderTransparent } from '../../../components/header-transparent.module';
import { CardList, BigCardList, HeaderSlides } from '../../../components/post-list/post-list.module';

@NgModule({
   declarations: [
      VideoTabPage
   ],
   imports: [
      IonicPageModule.forChild(VideoTabPage),
      IonicImageLoader,
      MomentModule,
      HeaderTransparent,
      HeaderSlides,
      CardList,
      BigCardList
   ],
   exports: [
      VideoTabPage
   ]
})
export class HomePageModule { }