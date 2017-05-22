import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqModal } from './faq';

@NgModule({
   declarations: [FaqModal],
   imports: [IonicPageModule.forChild(FaqModal)],
   exports: [FaqModal]
})
export class FaqModalModule { }