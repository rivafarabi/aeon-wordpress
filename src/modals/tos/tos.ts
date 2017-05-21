import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
   selector: 'modal-tos',
   templateUrl: 'tos.html'
})
export class TosModal {

   constructor(
      private viewCtrl: ViewController
   ) { }

   dismiss() {
      this.viewCtrl.dismiss();
   }
}
