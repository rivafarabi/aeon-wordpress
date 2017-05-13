import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookmarkPage } from './bookmark';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
   declarations: [BookmarkPage],
   imports: [
      IonicPageModule.forChild(BookmarkPage),
      IonicImageLoader
   ],
   exports: [
      BookmarkPage
   ]
})
export class BookmarkPageModule { }