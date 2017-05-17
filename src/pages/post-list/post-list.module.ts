import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostListPage } from './post-list';
import { IonicImageLoader } from 'ionic-image-loader';
import { SquareDirective } from '../../directive/square.directive';
import { MomentModule } from 'angular2-moment';

@NgModule({
   declarations: [
      PostListPage,
      SquareDirective],
   imports: [
      IonicPageModule.forChild(PostListPage),
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      PostListPage
   ]
})
export class PostListPageModule { }