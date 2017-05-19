import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImgLoader } from 'ionic-image-loader';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'page-bookmark',
  templateUrl: 'bookmark.html',
  providers: [ClientProvider]
})
export class BookmarkPage {
  private pageTitle: string;
  private options: any;
  private posts: any;
  private page: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
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
    
  }

  

  goToPost(id, media) {
    this.navCtrl.push(
      "PostContentPage", {
        'postId': id,
        'postMedia': media
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

  // onImageLoad(imgLoader: ImgLoader){
  //   imgLoader.element.parentElement.parentElement.parentElement.className = "fade-in";
  // }
}
