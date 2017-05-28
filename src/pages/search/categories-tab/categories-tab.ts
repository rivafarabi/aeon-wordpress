import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientProvider } from '../../../providers/client.provider'

@IonicPage()
@Component({
  selector: 'page-categories-tab',
  templateUrl: 'categories-tab.html',
  providers: [ClientProvider]
})
export class CategoriesTabPage {
  @ViewChild(Navbar) navBar: Navbar;
  categories: any;
  page: number;
  pageTitle: string;

  constructor(
    public navCtrl: NavController,
    public clientProvider: ClientProvider,
    private navParams: NavParams
  ) {
    this.pageTitle = this.navParams.data.name;
    this.page = 1;
    this.fetch();
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.parent.viewCtrl.dismiss();
    };
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
