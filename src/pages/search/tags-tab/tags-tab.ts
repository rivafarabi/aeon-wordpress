import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientProvider } from '../../../providers/client.provider'

@IonicPage()
@Component({
  selector: 'page-tags-tab',
  templateUrl: 'tags-tab.html',
  providers: [ClientProvider]
})
export class TagsTabPage {
  @ViewChild(Navbar) navBar: Navbar;
  tags: any;
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
