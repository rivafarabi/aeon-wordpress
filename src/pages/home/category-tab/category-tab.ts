import { Component, ViewChild } from '@angular/core';
import { IonicPage, Platform, NavController, Searchbar } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { CategoryConst } from '../../../constants/variables.constant';
import { ClientProvider } from '../../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'tab-category',
  templateUrl: 'category-tab.html',
  providers: [ClientProvider]
})
export class CategoryTabPage {
  @ViewChild('searchbar') searchbar: Searchbar;
  categories: any;
  page: number;
  onProgress: boolean;
  showSearchBar: boolean;
  searchString: string;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public clientProvider: ClientProvider,
    private nativePageTransitions: NativePageTransitions
  ) {
    this.page = 1;
    this.fetch();
    this.showSearchBar = false;
  }

  ionViewWillLeave() {
    this.showSearchBar = false;
    let opt: NativeTransitionOptions = {
      duration: 300,
      iosdelay: 50,
      androiddelay: 100
    };
    this.nativePageTransitions.fade(opt);
  }
  
  fetch() {
    this.onProgress = true;
    this.categories = CategoryConst;
    // this.clientProvider.getListCategories(this.page)
    //   .subscribe(res => {
    //     this.categories = res;
    //   })
  }

  refresh(refresher) {
    this.page = 1;
    this.fetch();
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  loadMore(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.clientProvider.getListCategories(this.page)
        .subscribe(res => {
          res.forEach(element => {
            this.categories.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }

  toCategory(id, name) {
    this.navCtrl.push(
      "PostListPage", {
        'opt': [{
          'type': 'categories',
          'id': id,
          'name': name
        }]
      });
  }

  search(event: any) {
    this.navCtrl.push(
      "SearchPage", {
        'type': 'search',
        'name': event.target.value
      }
    )
  }
  
  searchBlurred(event:any){
    this.showSearchBar = false;
  }

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
    if (this.showSearchBar) {
      setTimeout(() => {
        this.searchbar.setFocus();
      }, 150);
    }
  }
}
