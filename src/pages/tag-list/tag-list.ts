import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider'

@IonicPage()
@Component({
  selector: 'page-tag-list',
  templateUrl: 'tag-list.html',
  providers: [ClientProvider]
})
export class TagListPage {
  private tags: any;
  private page: number;

  constructor(
    public navCtrl: NavController,
    public clientProvider: ClientProvider) {
    this.page = 1;
    this.fetch();
  }

  fetch() {
    this.clientProvider.getListTags(this.page)
      .subscribe(res => {
        this.tags = res;
      })
  }

  goToTag(id, name) {
    this.navCtrl.push(
      "PostListPage", {
        'type': 'tags',
        'id': id,
        'name': name
      });
  }

  loadMore(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.clientProvider.getListTags(this.page)
        .subscribe(res => {
          res.forEach(element => {
            this.tags.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }

}
