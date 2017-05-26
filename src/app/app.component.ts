import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { OneSignal } from '@ionic-native/onesignal';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { OneSignalConstant, AdMobConstant } from '../constants/variables.constant';

@Component({
  templateUrl: 'app.html',
  providers: [OneSignal]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "WelcomePage";
  oneSignalConstant: OneSignalConstant = new OneSignalConstant();
  adMobConstant: AdMobConstant = new AdMobConstant();
  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
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
      { title: 'Contact', component: "ContactPage" },
      
      { title: 'Login', component: "LoginPage" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      //OneSignal Configuration
      if (this.platform.is('android')) {
        let kOSSettingsKeyAutoPrompt: boolean = true;
        let kOSSettingsKeyInAppLaunchURL: boolean = false

        this.oneSignal.startInit(
          this.oneSignalConstant.APP_ID,
          this.oneSignalConstant.GOOGLE_PROJECT_ID
        );
        this.oneSignal.handleNotificationOpened().subscribe(jsonData => {
          this.nav.push("PostContentPage", {
            postId: jsonData.notification.payload.additionalData.id
          })
        });
        this.oneSignal.endInit();
      }

      //AdMob Configuration
      const bannerConfig: AdMobFreeBannerConfig = {
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          // banner Ad is ready
          // if we set autoShow to false, then we will need to call the show method here
        })
        .catch(e => console.log(e));
    });
  }

  openPage(page) {
    if (this.nav.getActive().name != page.component) {
      this.nav.setRoot(page.component);
    }
  }
}
