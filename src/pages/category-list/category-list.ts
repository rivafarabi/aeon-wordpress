import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientProvider } from '../../providers/client.provider'

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
  providers: [ClientProvider]
})
export class CategoryListPage {
  private categories: any;
  private page: number;

  constructor(
    public navCtrl: NavController,
    public clientProvider: ClientProvider) {
    this.page = 1;
    this.fetchCategories();
  }

  fetchCategories() {
    this.clientProvider.getListCategories(this.page)
      .subscribe(res => {
        this.categories = res;
      })
  }

  goToCategory(id, name) {
    this.navCtrl.push(
      "PostListPage", {
        'opt': [{
          'type': 'categories',
          'id': id,
          'name': name
        }]
      });
  }

  loadMoreCategories(infiniteScroll) {
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
