import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CardListComponent } from './card-list'
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    IonicModule,
    IonicImageLoader,
    MomentModule
  ],
  exports: [CardListComponent]
})
export class CardList {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CardList,
      providers: []
    };
  }
}
