import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsTabPage } from './posts-tab';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

import { GridList } from '../../../components/post-list/grid-list/grid-list.module';

@NgModule({
   declarations: [PostsTabPage],
   imports: [
      IonicPageModule.forChild(PostsTabPage),
      GridList,
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      PostsTabPage
   ]
})
export class PostsTabPageModule { }