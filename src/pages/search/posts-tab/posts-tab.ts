import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { ClientProvider } from '../../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-posts-tab',
  templateUrl: 'posts-tab.html',
  providers: [ClientProvider]
})
export class PostsTabPage {
  @ViewChild(Navbar) navBar: Navbar;
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
    this.pageTitle = this.navParams.data.name;
    this.options = [{
      type: 'search',
      id: this.navParams.data.name
    }]
    this.page = 1;
    this.fetch(this.options);
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.parent.viewCtrl.dismiss();
    };
  }

  ionViewWillLeave() {
    let opt: NativeTransitionOptions = {
      duration: 300,
      iosdelay: 50,
      androiddelay: 100
    };
    this.nativePageTransitions.fade(opt);

  }

  fetch(opt: any, searchOpt?: any) {
    this.onProgress = true;
    console.log(this.options);
    this.clientProvider.getListPosts(this.page, this.options)
      .subscribe(res => {
        this.onInitProgress = (this.page == 1 ? false : true);
        this.posts = res;
        this.onProgress = false;
      })
  }

  refresh(refresher) {
    this.page = 1;
    this.fetch(this.options);
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
    // this.fetch(this.options);
    // this.pageTitle = event.target.value;
    this.navCtrl.push("PostListPage", { opt: this.options });
  }

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
}