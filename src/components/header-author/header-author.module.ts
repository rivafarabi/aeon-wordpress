import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderAuthorComponent } from './header-author'

@NgModule({
  declarations: [
    HeaderAuthorComponent
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    HeaderAuthorComponent
  ]
})
export class HeaderAuthor {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HeaderAuthor,
      providers: [
      ]
    };
  }
}
