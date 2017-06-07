import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { OneSignalConst, AdMobConst } from '../constants/variables.constant';
import { AuthProvider } from '../providers/auth.provider';

@Component({
  templateUrl: 'app.html',
  providers: [OneSignal]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{ title: string, component: any }>;
  isAuth;

  constructor(
    private auth: AuthProvider,
    public platform: Platform,
    private modalCtrl: ModalController,
    private storage: Storage,
    private oneSignal: OneSignal,
    private admobFree: AdMobFree
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: "HomePage" },
      { title: 'Categories', component: "CategoryListPage" },
      { title: 'Tags', component: "TagListPage" },
      { title: 'Bookmark', component: "BookmarkPage" },
      { title: 'Settings', component: "SettingPage" },
      { title: 'About', component: "AboutPage" },
      { title: 'Contact', component: "ContactPage" }
    ];
  }

  checkAuth() {
    this.auth.getToken().then(res => {
        this.isAuth = ((res == null) ? false : true);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.storage.get('isInit').then((val) => {
        if (val != null) {
          this.rootPage = "HomePage";
        }
        else this.rootPage = "WelcomePage";
      });

      //OneSignal Config
      if (this.platform.is('android')) {
        let kOSSettingsKeyAutoPrompt: boolean = true;
        let kOSSettingsKeyInAppLaunchURL: boolean = false

        this.oneSignal.startInit(
          OneSignalConst.APP_ID,
          OneSignalConst.GOOGLE_PROJECT_ID
        );
        this.oneSignal.handleNotificationOpened().subscribe(jsonData => {
          this.nav.push("PostContentPage", {
            postId: jsonData.notification.payload.additionalData.id
          })
        });
        this.oneSignal.endInit();
      }

      //AdMob Config
      const bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);

      // this.admobFree.banner.prepare()
      //   .then(() => { })
      //   .catch(e => console.log(e));
    });
    this.checkAuth();
  }

  openPage(page) {
    if (this.nav.getActive().name != page.component) {
      this.nav.setRoot(page.component);
    }
  }

  openModal(modalName) {
    let modal = this.modalCtrl.create(modalName);
    modal.present();
  }

  logout() {
    this.auth.logout()
      .then(success => {
        console.log(success);
        this.checkAuth();
      })
  }
}
