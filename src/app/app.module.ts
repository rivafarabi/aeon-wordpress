import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ng2parallax } from 'ang2-parallax/ng2-parallax-directive/parallax.directive';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryListPage } from '../pages/category-list/category-list';
import { PostContentPage } from '../pages/post-content/post-content';
import { TagListPage } from '../pages/tag-list/tag-list';
import { PostListPage } from '../pages/post-list/post-list';
import { CommentListPage } from '../pages/comment-list/comment-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryListPage,
    PostContentPage,
    TagListPage,
    PostListPage,
    CommentListPage,
    ng2parallax
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryListPage,
    PostContentPage,
    TagListPage,
    PostListPage,
    CommentListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
