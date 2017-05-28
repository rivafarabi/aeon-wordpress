import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderTransparentComponent } from './header-transparent'

@NgModule({
  declarations: [HeaderTransparentComponent],
  imports: [IonicModule],
  exports: [HeaderTransparentComponent]
})
export class HeaderTransparent {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HeaderTransparent,
      providers: [
      ]
    };
  }
}
