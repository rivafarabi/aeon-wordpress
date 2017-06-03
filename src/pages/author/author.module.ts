import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorPage } from './author';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

import { HeaderTransparent } from '../../components/header-transparent.module';
import { HeaderAuthor } from '../../components/header-author/header-author.module';
import { GridList } from '../../components/post-list/grid-list/grid-list.module';
import { ShrinkHeaderTitle } from '../../directive/shrink-header-title.directive';

@NgModule({
   declarations: [
      AuthorPage,
      ShrinkHeaderTitle
   ],
   imports: [
      IonicPageModule.forChild(AuthorPage),
      HeaderTransparent,
      HeaderAuthor,
      GridList,
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      AuthorPage
   ]
})
export class AuthorPageModule { }