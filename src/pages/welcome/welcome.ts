import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
    @ViewChild(Slides) slides: Slides;
    constructor(
        public navCtrl: NavController,
        private storage: Storage
    ) {
        this.storage.get('isInit').then((val) => {
            if (val != null) {
                this.skip();
            }
        });
    }

    next() {
        this.slides.slideNext();
    }

    skip() {
        this.storage.set('isInit', true);
        this.navCtrl.setRoot("HomePage");
    }
}
