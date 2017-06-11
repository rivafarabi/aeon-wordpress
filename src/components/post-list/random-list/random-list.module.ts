import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RandomListComponent } from './random-list';
import { BigCardList } from '../big-card-list/big-card-list.module';
import { CardList } from '../card-list/card-list.module';
import { GridList } from '../grid-list/grid-list.module';

@NgModule({
  declarations: [
    RandomListComponent
  ],
  imports: [
    IonicModule,
    BigCardList,
    CardList,
    GridList
  ],
  exports: [RandomListComponent]
})

export class RandomList {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RandomList,
      providers: [
      ]
    };
  }
}
