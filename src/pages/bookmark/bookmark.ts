import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import { Observable } from 'rxjs/Observable';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { StorageProvider } from '../../providers/storage.provider';

@IonicPage()
@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
  providers: [StorageProvider]
})
export class BookmarkPage {
  pageTitle: string;
  options: any;
  posts: any;
  page: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public storageProvider: StorageProvider
  ) {
    this.fetchPost();
  }

  ionViewWillLeave(){
    let opt: NativeTransitionOptions = {
      duration: 300,
      iosdelay: 50,
      androiddelay: 100
    };
    this.nativePageTransitions.fade(opt);
  }

  fetchPost() {
    let fetch = Observable.fromPromise(this.storageProvider.fetchBookmark());
    fetch.subscribe(res => {
      this.posts = res;
    })
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

  searchPost(event: any) {
    let searchOptions = {
      type: 'search',
      id: event.target.value
    }
    this.fetchPost();
    this.pageTitle = event.target.value;
  }
}
