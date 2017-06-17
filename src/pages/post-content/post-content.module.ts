import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostContentPage } from './post-content';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { AeonModule } from '../../components/aeon.module';

@NgModule({
   declarations: [PostContentPage],
   imports: [
      IonicPageModule.forChild(PostContentPage),
      IonicImageLoader,
      MomentModule,
      AeonModule
   ],
   exports: [PostContentPage]
})
export class PostContentPageModule { }