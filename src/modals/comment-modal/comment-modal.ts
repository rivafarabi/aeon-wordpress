import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ToastController, ModalController } from 'ionic-angular';

import { MomentModule } from 'angular2-moment';
import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'modal-comment',
  templateUrl: 'comment-modal.html',
  providers: [ClientProvider]
})
export class CommentModal {
  postID: number;
  comments: any;
  page: number;

  constructor(
    private viewCtrl: ViewController,
    private clientProvider: ClientProvider,
    private navParams: NavParams) {
    this.postID = this.navParams.get('id');
    this.page = 1;
    this.getCommnent();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getCommnent() {
    this.clientProvider.getComments(this.postID, this.page)
      .subscribe(res => {
        console.log(res.length);
        this.comments = res;
      })
  }

  postComment() {

  }

  loadMoreComments(infiniteScroll) {
    this.page++;
    setTimeout(() => {
      this.clientProvider.getComments(this.postID, this.page)
        .subscribe(res => {
          res.forEach(element => {
            this.comments.push(element)
          });
          infiniteScroll.complete();
        })
    }, 500)
  }
}
