import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostListPage } from './post-list';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { AeonModule } from '../../components/aeon.module';


@NgModule({
   declarations: [PostListPage],
   imports: [
      IonicPageModule.forChild(PostListPage),
      AeonModule,
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      PostListPage
   ]
})
export class PostListPageModule { }