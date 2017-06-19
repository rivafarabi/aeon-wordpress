import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
  providers: [ClientProvider]
})
export class PostListPage {
  @ViewChild('searchbar') searchbar: Searchbar;
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
    this.options = this.navParams.get('opt');
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

  fetch(searchOpt?: any) {
    this.onProgress = true;
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
