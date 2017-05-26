import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientProvider } from '../../../providers/client.provider'

@IonicPage()
@Component({
  selector: 'page-categories-tab',
  templateUrl: 'categories-tab.html',
  providers: [ClientProvider]
})
export class CategoriesTabPage {
  private categories: any;
  private page: number;

  constructor(
    public navCtrl: NavController,
    public clientProvider: ClientProvider) {
    this.page = 1;
    this.fetch();
  }

  fetch() {
    this.clientProvider.getListCategories(this.page)
      .subscribe(res => {
        this.categories = res;
      })
  }

  goTocCategory(id, name) {
    this.navCtrl.push(
      "PostListPage", {
        'type': 'categories',
        'id': id,
        'name': name
      });
  }

  loadMore(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.clientProvider.getListCategories(this.page)
        .subscribe(res => {
          res.forEach(element => {
            this.categories.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }

}
