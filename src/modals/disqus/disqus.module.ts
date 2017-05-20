import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisqusModal } from './disqus';
import { DisqusModule } from 'ng2-awesome-disqus';
@NgModule({
   declarations: [
      DisqusModal
   ],
   imports: [
      IonicPageModule.forChild(DisqusModal),
      DisqusModule
   ],
   exports: [DisqusModal]
})
export class DisqusModalModule { }