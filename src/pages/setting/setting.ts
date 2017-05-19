import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { Setting } from '../../model/setting.model';

@IonicPage()
@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
})
export class SettingPage {
    setting: Setting = new Setting(true);
    constructor(
        public navCtrl: NavController,
        private oneSignal: OneSignal
    ) { }

    ngOnInit(){
        //Check if push notification is enabled.
    }

    togglePushNotification(){
        if(this.setting.pushNotification){
            this.oneSignal.setSubscription(false);
            this.setting.pushNotification = false;
        } else{
            this.oneSignal.setSubscription(true);
            this.setting.pushNotification = true;
        }
    }

}
