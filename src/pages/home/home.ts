import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
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
  private searchString: string;

  constructor(
    public navCtrl: NavController,
    public clientService: ClientService) {
    this.page = 1;
    this.fetchPost();
    this.searchString = "";
  }

  fetchPost() {
    this.clientService.getListPosts(this.page)
      .subscribe(res => {
        this.posts = res;
        console.log(this.posts);
      })
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

  searchPost(event: any){
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

  onImageLoad(imgLoader: ImgLoader){
    imgLoader.element.parentElement.parentElement.className = "fade-in";
  }
}
