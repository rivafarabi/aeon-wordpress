import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx'

import { PostListPage } from '../post-list/post-list';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'page-tag-list',
  templateUrl: 'tag-list.html',
  providers: [ClientService]
})
export class TagListPage {
  private tags: any;
  private page: number;
  
  constructor(
    public navCtrl: NavController,
    public clientService: ClientService) {
    this.page = 1;
    this.fetchTags();
  }

  fetchTags() {
    this.clientService.getListTags(this.page)
      .subscribe(res => {
        this.tags = res;
      })
  }

  goToTag(id, name) {
    this.navCtrl.push(
      PostListPage, {
        'type': 'tags',
        'id': id,
        'name': name
      });
  }

  loadMoreTags(infiniteScroll){
    this.page++;
    setTimeout(() => {
      this.clientService.getListTags(this.page)
        .subscribe(res => {
          res.forEach(element => {
            this.tags.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }

}
