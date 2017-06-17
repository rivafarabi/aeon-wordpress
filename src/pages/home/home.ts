import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ClientProvider]
})
export class HomePage {
  tab1Root = "RecentTabPage";
  tab2Root = "CategoryTabPage";
  tab3Root = "PhotoTabPage";
  searchParams : any;
  constructor(public navParams: NavParams) {
    this.searchParams = {
      name: this.navParams.get('name')
    }
  }
}
