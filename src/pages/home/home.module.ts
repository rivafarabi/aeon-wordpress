import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { HeaderSlides } from '../../components/header-slides.module';
import { CardList } from '../../components/card-list.module';

@NgModule({
   declarations: [
      HomePage
   ],
   imports: [
      IonicPageModule.forChild(HomePage),
      IonicImageLoader,
      MomentModule,
      HeaderSlides,
      CardList
   ],
   exports: [
      HomePage
   ]
})
export class HomePageModule { }