import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderSlidesComponent } from './header-slides'
import { IonicImageLoader } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';

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
