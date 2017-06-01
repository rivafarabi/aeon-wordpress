import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
    constructor(private modalCtrl: ModalController) {
    }

    openModal(modalName: string) {
        let modal = this.modalCtrl.create(modalName);
        modal.present();
    }
}
