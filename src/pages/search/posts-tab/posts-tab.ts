import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { ClientProvider } from '../../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
  providers: [ClientProvider]
})
export class PostsTabPage {
  pageTitle: string;
  options: any;
  posts: any;
  page: number;
  onProgress: boolean;
  onInitProgress: boolean;
  showSearchBar: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions,
    public clientProvider: ClientProvider
  ) {
    this.pageTitle = this.navParams.get('name');
    // this.options = [{
    //   type: this.navParams.get('type'),
    //   id: this.navParams.get('id')
    // }]
    this.options = this.navParams.get('opt');
    this.page = 1;
    this.fetchPost(this.options);
  }

  ionViewWillLeave() {
    let opt: NativeTransitionOptions = {
      duration: 300,
      iosdelay: 50,
      androiddelay: 100
    };
    this.nativePageTransitions.fade(opt);
  }

  fetchPost(opt: any, searchOpt?: any, isRefresh?: boolean) {
    if (isRefresh) {
      this.page = 1;
    }
    this.onProgress = true;
    this.clientProvider.getListPosts(this.page, this.options)
      .subscribe(res => {
        this.onInitProgress = (this.page == 1 ? false : true);
        this.posts = res;
        this.onProgress = false;
      })
  }

  refresh(refresher) {
    this.fetchPost(this.options, true);
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
      duration: 300,
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
    this.options.push({
      'type': 'search',
      'id': event.target.value
    });
    // this.fetchPost(this.options);
    // this.pageTitle = event.target.value;
    this.navCtrl.push("PostListPage", { opt: this.options });
  }

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
}