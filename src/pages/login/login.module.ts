import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

import { HeaderTransparent } from '../../components/header-transparent.module';

@NgModule({
   declarations: [LoginPage],
   imports: [
      IonicPageModule.forChild(LoginPage),
      HeaderTransparent
   ]
})
export class LoginPageModule { }