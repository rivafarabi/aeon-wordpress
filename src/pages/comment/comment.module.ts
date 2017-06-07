import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentModal } from './comment';
import { MomentModule } from 'angular2-moment';

@NgModule({
   declarations: [
      CommentModal
   ],
   imports: [
      IonicPageModule.forChild(CommentModal),
      MomentModule
   ],
   exports: [CommentModal]
})
export class CommentModalModule { }