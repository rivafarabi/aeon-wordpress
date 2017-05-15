import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicImageLoader } from 'ionic-image-loader';
import { SquareDirective } from '../../directive/square.directive';

@NgModule({
   declarations: [
      HomePage,
      SquareDirective
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