import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { AeonModule } from '../../components/aeon.module';

@NgModule({
   declarations: [RegisterPage],
   imports: [
      IonicPageModule.forChild(RegisterPage),
      AeonModule
   ]
})
export class RegisterPageModule { }