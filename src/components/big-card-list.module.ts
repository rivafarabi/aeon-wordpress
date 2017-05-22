import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BigCardListComponent } from './big-card-list'
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [BigCardListComponent],
  imports: [
    IonicModule,
    IonicImageLoader,
    MomentModule
  ],
  exports: [BigCardListComponent]
})
export class BigCardList {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BigCardList,
      providers: []
    };
  }
}
