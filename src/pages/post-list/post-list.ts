import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
  providers: [ClientProvider]
})
export class PostListPage {
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
    public clientProvider: ClientProvider
  ) {
    this.pageTitle = this.navParams.get('name');
    this.options = [{
      type: this.navParams.get('type'),
      id: this.navParams.get('id')
    }]
    this.page = 1;
    this.fetchPost(this.options);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
  }

  ionViewDidEnter(){
  }

  fetchPost(options: any) {
    this.onProgress = true;
    this.clientProvider.getListPosts(this.page, this.options)
      .subscribe(res => {
        this.onInitProgress = (this.page == 1 ? false : true);
        this.posts = res;
        this.onProgress = false;
      })
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

  toPostContent(postDetail: any){
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
    this.options.push(searchOptions);
    this.fetchPost(this.options);
    this.pageTitle = event.target.value;
  }
  
  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
}
