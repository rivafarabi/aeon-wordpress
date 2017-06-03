import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GridListComponent } from './grid-list'
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { SquareDirective } from '../../../directive/square.directive'

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
