import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, Searchbar } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
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
  @ViewChild('searchbar') searchbar: Searchbar;
  @ViewChild(Navbar) navBar: Navbar;
  options: any;
  posts: any;
  page: number;
  pageTitle: string;
  onProgress: boolean;
  onInitProgress: boolean;
  showSearchBar: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private keyboard: Keyboard,
    private nativePageTransitions: NativePageTransitions,
    public clientProvider: ClientProvider
  ) {
    this.init();
  }

  ionViewWillEnter() {
    if (this.options[0].id != this.navParams.data.name) {
      this.init()
    }
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.parent.viewCtrl.dismiss();
    };
    this.keyboard.disableScroll(true);
  }

  ionViewWillLeave() {
    this.showSearchBar = false;
  }

  init(){
    this.pageTitle = this.navParams.data.name;
    this.options = [{
      type: 'search',
      id: this.navParams.data.name
    }]
    this.page = 1;
    this.fetch(this.options);
  }

  fetch(opt: any) {
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
    this.navParams.data.name = event.target.value;
    this.init();
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