import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
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

  rootPage: any = "WelcomePage";
  pages: Array<{ title: string, component: any }>;
  isAuth;
  
  constructor(
    private auth: AuthProvider,
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
      { title: 'Contact', component: "ContactPage" }
    ];
  }

  checkAuth() {
    this.isAuth =  this.auth.getToken().then(res => { return res; })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

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
  }

  openPage(page) {
    if (this.nav.getActive().name != page.component) {
      this.nav.setRoot(page.component);
    }
  }

  logout() {
    this.auth.logout();
  }
}
