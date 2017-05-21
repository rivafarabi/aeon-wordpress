import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html',
  providers: [OneSignal]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    private oneSignal: OneSignal
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

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      //OneSignal Configuration
      if (this.platform.is('android')) {
        let kOSSettingsKeyAutoPrompt: boolean = true;
        let kOSSettingsKeyInAppLaunchURL: boolean = false 

        this.oneSignal.startInit("7c56563e-57fb-49bb-ad7b-752087c3c8bc", "613293614430");
        this.oneSignal.handleNotificationOpened().subscribe(jsonData => {
          this.nav.push("PostContentPage",{
            postId: jsonData.notification.payload.additionalData.id
          })
        });
        
      this.oneSignal.endInit();
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (this.nav.getActive().name != page.component) {
      this.nav.setRoot(page.component);
    }
  }
}
