import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx'

import { PostContentPage } from '../post-content/post-content';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
  providers: [ClientService]
})
export class PostListPage {
  private pageTitle: string;
  private options: any;
  private posts: any;
  private page: number;

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public clientService: ClientService) {
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
    
    this.clientService.getListPosts(this.page, this.options)
      .subscribe(res => {
        this.posts = res;
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

  goToPost(id, media) {
    this.navCtrl.push(
      PostContentPage, {
        'postId': id,
        'postMedia': media
      });
  }

}
