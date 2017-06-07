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
            .then(res => {
                loader.dismiss();
                console.log(res.status);
                if (res.status == 200) {
                    this.dismiss();
                }
                else {
                    let alert = this.alertCtrl.create({
                        title: 'Login Error',
                        subTitle: 'Please check your username or password and try again.',
                        buttons: ['Dismiss']
                    });
                    alert.present();
                }
            })
    }

    goToPage(page: string) {
        let modal = this.modalCtrl.create(page);
        modal.present();
    }
}
