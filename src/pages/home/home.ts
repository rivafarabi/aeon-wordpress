import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx'

import { PostContentPage } from '../post-content/post-content';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ClientService]
})
export class HomePage {
  public posts: any;
  public page: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public clientService: ClientService) {
    this.page = 1;
    this.fetchPost();
  }

  ionViewDidLoad() {
  }

  fetchPost(){
    this.clientService.getListPosts(this.page)
    .subscribe(res => {
      this.posts = res;
    })
  }

  loadMorePosts(infiniteScroll){
    this.page++;
    setTimeout(()=>{
      this.clientService.getListPosts(this.page)
      .subscribe(res => {
        res.forEach(element => {
          this.posts.push(element)
        });
        infiniteScroll.complete();
      })
    }, 500)
  }

  goToPost(id, media){
    console.log(media);
    this.navCtrl.push(PostContentPage, {'postId': id, 'postMedia': media});
  }
}
