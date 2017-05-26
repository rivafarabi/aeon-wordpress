import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})
export class LoginPage {
   constructor(
        private navCtrl: NavController
   ) { }
   
   goToRegister(modalName: string){
        this.navCtrl.push("RegisterPage");
    }
}
