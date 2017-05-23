import { Component } from '@angular/core';
import { IonicPage, Platform, NavController } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
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
    this.fetchPost();
    this.showSearchBar = false;
    this.searchString = "";
  }

  ionViewWillLeave() {

  }

  fetchPost(isRefresh?: boolean) {
    if (isRefresh) {
      this.page = 1;
    }
    this.onProgress = true;
    this.clientProvider.getListPosts(this.page)
      .subscribe(res => {
        console.log(res);
        this.posts = res;
      })
  }

  doRefreshPost(refresher) {
    this.fetchPost(true);
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  loadMorePosts(infiniteScroll) {
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

  searchPost(event: any) {
    this.navCtrl.push(
      "PostListPage", {
        'type': 'search',
        'id': event.target.value,
        'name': event.target.value
      }
    )
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

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
}
