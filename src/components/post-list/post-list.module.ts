import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BigCardListComponent } from './big-card-list/big-card-list';
import { CardListComponent } from './card-list/card-list';
import { GridListComponent } from './grid-list/grid-list'
import { HeaderSlidesComponent } from './header-slides/header-slides'
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { SquareDirective } from '../../directive/square.directive'

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

@NgModule({
  declarations: [
    GridListComponent,
    SquareDirective
  ],
  imports: [
    IonicModule,
    IonicImageLoader,
    MomentModule
  ],
  exports: [GridListComponent]
})
export class GridList {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GridList,
      providers: [
      ]
    };
  }
}

@NgModule({
  declarations: [
    HeaderSlidesComponent
  ],
  imports: [
    IonicModule,
    IonicImageLoader,
    MomentModule
  ],
  exports: [
    HeaderSlidesComponent
  ]
})
export class HeaderSlides {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HeaderSlides,
      providers: [
      ]
    };
  }
}


