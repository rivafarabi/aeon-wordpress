import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientService } from '../../services/client.service'

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
  providers: [ClientService]
})
export class CategoryListPage {
  private categories: any;
  private page: number;

  constructor(
    public navCtrl: NavController,
    public clientService: ClientService) {
    this.page = 1;
    this.fetchCategories();
  }

  fetchCategories() {
    this.clientService.getListCategories(this.page)
      .subscribe(res => {
        this.categories = res;
      })
  }

  goToCategory(id, name) {
    this.navCtrl.push(
      "PostListPage", {
        'type': 'categories',
        'id': id,
        'name': name
      });
  }

  loadMoreCategories(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.clientService.getListCategories(this.page)
        .subscribe(res => {
          res.forEach(element => {
            this.categories.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }

}
