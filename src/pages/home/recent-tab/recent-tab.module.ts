import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentTabPage } from './recent-tab';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

import { HeaderTransparent } from '../../../components/header-transparent.module';
import { CardList, BigCardList, HeaderSlides } from '../../../components/post-list/post-list.module';

@NgModule({
   declarations: [
      RecentTabPage
   ],
   imports: [
      IonicPageModule.forChild(RecentTabPage),
      IonicImageLoader,
      MomentModule,
      HeaderTransparent,
      HeaderSlides,
      CardList,
      BigCardList
   ],
   exports: [
      RecentTabPage
   ]
})
export class HomePageModule { }