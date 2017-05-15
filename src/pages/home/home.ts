import { Component } from '@angular/core';
import { IonicPage, Platform, NavController } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import 'rxjs/Rx'

import { ClientService } from '../../services/client.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ClientService]
})
export class HomePage {
  private posts: any;
  private page: number;
  private showSearchBar: boolean;
  private searchString: string;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public clientService: ClientService,
    private imageLoaderConfig: ImageLoaderConfig) {
      imageLoaderConfig.enableSpinner(false);
    this.page = 1;
    this.fetchPost();
    this.showSearchBar = false;
    this.searchString = "";
  }

  fetchPost(isRefresh?: boolean) {
    if (isRefresh) {
      this.page = 1;
    }
    this.clientService.getListPosts(this.page)
      .subscribe(res => {
        console.log(res);
        this.posts = res;
      })
  }

  doRefreshPost(refresher) {
    console.log('Begin async operation', refresher);
    this.fetchPost(true);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);

  }

  loadMorePosts(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.clientService.getListPosts(this.page)
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

  goToPost(id) {
    this.navCtrl.push(
      "PostContentPage", {
        'postId': id
      });
  }

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

  onImageLoad(imgLoader: ImgLoader) {
    imgLoader.element.parentElement.parentElement.className = "fade-in";
  }
}
