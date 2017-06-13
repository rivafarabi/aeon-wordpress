import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostListPage } from './post-list';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

import { HeaderTransparent } from '../../components/header-transparent.module';
import { GridList, HeaderSlides } from '../../components/post-list/post-list.module';

@NgModule({
   declarations: [PostListPage],
   imports: [
      IonicPageModule.forChild(PostListPage),
      HeaderTransparent,
      HeaderSlides,
      GridList,
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      PostListPage
   ]
})
export class PostListPageModule { }