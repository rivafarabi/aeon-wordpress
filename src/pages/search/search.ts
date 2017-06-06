import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [ClientProvider]
})
export class SearchPage {
  tab1Root = "PostsTabPage";
  tab2Root = "AuthorsTabPage";
  tab3Root = "TagsTabPage";
  searchParams : any;
  constructor(public navParams: NavParams) {
    this.searchParams = {
      name: this.navParams.get('name')
    }
  }
}
