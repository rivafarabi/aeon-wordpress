import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
   declarations: [
      HomePage
   ],
   imports: [
      IonicPageModule.forChild(HomePage),
      IonicImageLoader
   ],
   exports: [
      HomePage
   ]
})
export class HomePageModule { }