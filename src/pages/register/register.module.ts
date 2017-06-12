import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

import { HeaderTransparent } from '../../components/header-transparent.module';

@NgModule({
   declarations: [RegisterPage],
   imports: [
      IonicPageModule.forChild(RegisterPage),
      HeaderTransparent
   ]
})
export class RegisterPageModule { }