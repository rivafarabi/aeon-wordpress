import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: "HomePage" },
      { title: 'Categories', component: "CategoryListPage" },
      { title: 'Tags', component: "TagListPage" },
      { title: 'Bookmark', component: "BookmarkPage" },
      { title: 'About', component: "AboutPage" },
      { title: 'Contact', component: "ContactPage" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      var notificationOpenedCallback = function (jsonData) {
        alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };
      
      //OneSignal Configuration
      window["plugins"].OneSignal
        .startInit("7c56563e-57fb-49bb-ad7b-752087c3c8bc", "613293614430")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
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
