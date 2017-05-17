import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

@NgModule({
   declarations: [
      HomePage
   ],
   imports: [
      IonicPageModule.forChild(HomePage),
      IonicImageLoader,
      MomentModule
   ],
   exports: [
      HomePage
   ]
})
export class HomePageModule { }