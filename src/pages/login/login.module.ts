import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { AeonModule } from '../../components/aeon.module';

@NgModule({
   declarations: [LoginPage],
   imports: [
      IonicPageModule.forChild(LoginPage),
      AeonModule
   ]
})
export class LoginPageModule { }