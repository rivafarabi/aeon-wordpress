import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryTabPage } from './category-tab';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { AeonModule } from '../../../components/aeon.module';

@NgModule({
   declarations: [
      CategoryTabPage
   ],
   imports: [
      IonicPageModule.forChild(CategoryTabPage),
      IonicImageLoader,
      MomentModule,
      AeonModule
   ],
   exports: [
      CategoryTabPage
   ]
})
export class HomePageModule { }