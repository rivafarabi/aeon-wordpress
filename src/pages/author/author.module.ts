import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorPage } from './author';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { AeonModule } from '../../components/aeon.module';

@NgModule({
   declarations: [
      AuthorPage
   ],
   imports: [
      IonicPageModule.forChild(AuthorPage),
      AeonModule,
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      AuthorPage
   ]
})
export class AuthorPageModule { }