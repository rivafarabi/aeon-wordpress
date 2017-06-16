import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoTabPage } from './photo-tab';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

import { HeaderTransparent } from '../../../components/header-transparent.module';
import { CardList, BigCardList, HeaderSlides } from '../../../components/post-list/post-list.module';

@NgModule({
   declarations: [
      PhotoTabPage
   ],
   imports: [
      IonicPageModule.forChild(PhotoTabPage),
      IonicImageLoader,
      MomentModule,
      HeaderTransparent,
      HeaderSlides,
      CardList,
      BigCardList
   ],
   exports: [
      PhotoTabPage
   ]
})
export class HomePageModule { }