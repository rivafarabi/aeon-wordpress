import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

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
        private navCtrl: NavController,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController
    ) { }

    ionViewWillLoad() {
        this.auth.getToken().then(res => {
            if (res != null) {
                this.navCtrl.setRoot("HomePage");
            }
        })
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
                    this.navCtrl.setRoot("HomePage");
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
        this.navCtrl.push(page);
    }
}
