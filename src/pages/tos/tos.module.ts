import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TosModal } from './tos';

@NgModule({
   declarations: [TosModal],
   imports: [IonicPageModule.forChild(TosModal)],
   exports: [TosModal]
})
export class TosModalModule { }