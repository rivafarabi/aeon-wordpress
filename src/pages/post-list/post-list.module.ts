import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostListPage } from './post-list';
import { HeaderSlides } from '../../components/header-slides.module'
import { GridList } from '../../components/grid-list.module'

import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
@NgModule({
   declarations: [
      PostListPage],
   imports: [
      IonicPageModule.forChild(PostListPage),
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