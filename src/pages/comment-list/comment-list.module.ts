import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentListPage } from './comment-list';

@NgModule({
   declarations: [CommentListPage],
   imports: [IonicPageModule.forChild(CommentListPage)]
})
export class CommentListPageModule { }