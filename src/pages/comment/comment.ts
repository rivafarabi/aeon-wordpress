import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

import { ClientProvider } from '../../providers/client.provider';

@IonicPage()
@Component({
  selector: 'modal-comment',
  templateUrl: 'comment.html',
  providers: [ClientProvider]
})
export class CommentModal {
  postID: number;
  comments: any;
  commentInput: any;
  page: number;

  constructor(
    private viewCtrl: ViewController,
    private clientProvider: ClientProvider,
    private navParams: NavParams,
    private toastCtrl: ToastController
  ) {
    this.postID = this.navParams.get('id');
    this.page = 1;
    this.fetch();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  fetch() {
    this.clientProvider.getComments(this.postID, this.page)
      .subscribe(res => {
        console.log(res.length);
        this.comments = res;
      })
  }

  postComment() {
    let opts = [{
      'type': 'content',
      'id': this.commentInput
    }, {
      'type': 'post',
      'id': this.postID
    }];
    this.clientProvider.postCommnent(opts)
      .subscribe(
      success => {
        let toast = this.toastCtrl.create({
          message: 'Comment Submitted.',
          duration: 3000,
          position: 'bottom'
        })
        toast.present();
        this.fetch();
        this.commentInput = "";
      },
      err => {
        console.log(err);
        let toast = this.toastCtrl.create({
          message: 'Comment Failed.',
          duration: 3000,
          position: 'bottom'
        })
        toast.present();
      })

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
