import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
   selector: 'modal-faq',
   templateUrl: 'faq.html'
})
export class FaqModal {

   constructor(
      private viewCtrl: ViewController
   ) { }

   dismiss() {
      this.viewCtrl.dismiss();
   }
}
