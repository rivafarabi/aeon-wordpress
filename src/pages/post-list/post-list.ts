import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
  providers: [ClientProvider]
})
export class PostListPage {
  private pageTitle: string;
  private options: any;
  private posts: any;
  private imgThumbnail: any;
  private page: number;
  private onProgress: boolean;
  private onInitProgress: boolean;
  private showSearchBar: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public elementRef: ElementRef,
    public clientProvider: ClientProvider) {
    this.pageTitle = navParams.get('name');
    this.options = {
      type: this.navParams.get('type'),
      id: this.navParams.get('id')
    }
    this.page = 1;
    this.fetchPost(this.options);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostListPage');
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
    this.fetchPost(searchOptions);
    this.pageTitle = event.target.value;
  }
  
  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

  onImageLoad(imgLoader: ImgLoader){
    imgLoader.element.parentElement.parentElement.parentElement.parentElement.className = "fade-in";
  }
}
