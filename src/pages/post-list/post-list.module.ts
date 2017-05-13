import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostListPage } from './post-list';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
   declarations: [PostListPage],
   imports: [
      IonicPageModule.forChild(PostListPage),
      IonicImageLoader
   ],
   exports: [
      PostListPage
   ]
})
export class PostListPageModule { }