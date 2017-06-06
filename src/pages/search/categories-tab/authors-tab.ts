import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, Searchbar } from 'ionic-angular';
import 'rxjs/Rx'

import { ClientProvider } from '../../../providers/client.provider'

@IonicPage()
@Component({
  selector: 'page-authors-tab',
  templateUrl: 'authors-tab.html',
  providers: [ClientProvider]
})
export class AuthorsTabPage {
  @ViewChild('searchbar') searchbar: Searchbar;
  @ViewChild(Navbar) navBar: Navbar;
  pageTitle: string;
  authors: any;
  options: any;
  page: number;
  showSearchBar: boolean;

  constructor(
    public navCtrl: NavController,
    public clientProvider: ClientProvider,
    private navParams: NavParams,
    
  ) {
    this.init();
  }

  ionViewWillEnter() {
    if (this.options[0].id != this.navParams.data.name) {
      this.init();
    }
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.parent.viewCtrl.dismiss();
    };
  }

  ionViewWillLeave() {
    this.showSearchBar = false;
  }

  init() {
    this.pageTitle = this.navParams.data.name;
    this.options = [{
      type: 'search',
      id: this.navParams.data.name
    }]
    this.page = 1;
    this.fetch(this.options);
  }

  fetch(opt: any) {
    this.clientProvider.getListAuthors(this.page, this.options)
      .subscribe(res => {
        this.authors = res;
      })
  }

  goToAuthor(id, name) {
    this.navCtrl.push("AuthorPage", {
      'opt': [{
        'type': 'author',
        'id': id
      }],
      'id': id,
      'name': name
    })
  }

  loadMore(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.clientProvider.getListAuthors(this.page, this.options)
        .subscribe(res => {
          res.forEach(element => {
            this.authors.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }

  search(event: any) {
    this.navParams.data.name = event.target.value;
    this.init();
  }

  searchBlurred(event:any){
    this.showSearchBar = false;
  }

  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
    if (this.showSearchBar) {
      setTimeout(() => {
        this.searchbar.setFocus();
      }, 150);
    }
  }
}
