import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/Rx'

import { PostListPage } from '../post-list/post-list';
import { ClientService } from '../../services/client.service'

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
  providers: [ClientService]
})
export class CategoryListPage {
  private categories: any;

  constructor(
    public navCtrl: NavController,
    public clientService: ClientService) {
    this.fetchCategories();
  }

  fetchCategories() {
    this.clientService.getListCategories()
      .subscribe(res => {
        this.categories = res;
      })
  }

  goToCategory(id, name) {
    this.navCtrl.push(
      PostListPage, {
        'type': 'categories',
        'id': id,
        'name': name
      });
  }

}
