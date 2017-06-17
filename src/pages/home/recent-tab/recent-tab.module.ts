import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentTabPage } from './recent-tab';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { AeonModule } from '../../../components/aeon.module';

@NgModule({
   declarations: [
      RecentTabPage
   ],
   imports: [
      IonicPageModule.forChild(RecentTabPage),
      IonicImageLoader,
      MomentModule,
      AeonModule
   ],
   exports: [
      RecentTabPage
   ]
})
export class HomePageModule { }