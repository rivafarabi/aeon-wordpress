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
  
  constructor(
    public navCtrl: NavController,
    public clientService: ClientService) {
    this.fetchTags();
  }

  fetchTags() {
    this.clientService.getListTags()
      .subscribe(res => {
        this.tags = res;
      })
  }

  goToTag(id, name) {
    this.navCtrl.push(
      PostListPage, {
        'type': 'tag',
        'id': id,
        'name': name
      });
  }

}
