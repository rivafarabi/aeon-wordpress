import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookmarkPage } from './bookmark';
import { IonicImageLoader } from 'ionic-image-loader';
import { AeonModule } from '../../components/aeon.module';

@NgModule({
   declarations: [BookmarkPage],
   imports: [
      IonicPageModule.forChild(BookmarkPage),
      IonicImageLoader,
      AeonModule
   ],
   exports: [
      BookmarkPage
   ]
})
export class BookmarkPageModule { }