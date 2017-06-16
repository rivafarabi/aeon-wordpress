import { Component, ViewChild } from '@angular/core';
import { IonicPage, Platform, NavController, Searchbar } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { ClientProvider } from '../../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'tab-video',
  templateUrl: 'video-tab.html',
  providers: [ClientProvider]
})
export class VideoTabPage {
  @ViewChild('searchbar') searchbar: Searchbar;
  posts: any;
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
    this.clientProvider.getListPosts(this.page)
      .subscribe(res => {
        this.posts = res;
        this.onProgress = false;
      })
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
      this.clientProvider.getListPosts(this.page)
        .subscribe(res => {
          res.forEach(element => {
            this.posts.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }

  toPostContent(postDetail: any) {
    let opt: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 50,
      androiddelay: 100
    };
    this.nativePageTransitions.fade(opt);
    this.navCtrl.push(
      "PostContentPage", {
        'postId': postDetail.id,
        'postMedia': postDetail.media
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
