import { Component } from '@angular/core';
import { IonicPage, ViewController, LoadingController, AlertController, ModalController } from 'ionic-angular';

import { Login } from '../../models/user.model';
import { AuthProvider } from '../../providers/auth.provider';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    login: Login = new Login("", "");

    constructor(
        private auth: AuthProvider,
        private viewCtrl: ViewController,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private modalCtrl: ModalController
    ) { }

    ionViewWillLoad() {
        this.auth.getToken().then(res => {
            if (res != null) {
                this.dismiss();
            }
        })
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    submit() {
        let loader = this.loadingCtrl.create({
            content: "Sign you in..."
        });
        loader.present();
        this.auth.login(this.login)
            .subscribe(
            () => {
                loader.dismiss();
                this.dismiss();
            }, err => {
                err = err.json();
                loader.dismiss();
                let alert = this.alertCtrl.create({
                    title: 'Login Error',
                    subTitle: err.message,
                    buttons: ['Dismiss']
                });
                alert.present();
            })
    }

    goToPage(page: string) {
        let modal = this.modalCtrl.create(page);
        modal.present();
    }
}
