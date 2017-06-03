import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';
import 'rxjs/Rx';

import { ClientProvider } from '../../providers/client.provider';
import { StorageProvider } from '../../providers/storage.provider';

@IonicPage()
@Component({
  selector: 'page-post-content',
  templateUrl: 'post-content.html',
  providers: [ClientProvider, StorageProvider, SocialSharing]
})
export class PostContentPage {
  postId: number;
  postMedia: string;
  post: any = [];
  headercontent: any;
  onProgress: boolean;
  onImgProgress: boolean;
  isBookmarked: boolean;

  constructor(
    private navCtrl: NavController,
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    public clientProvider: ClientProvider,
    public storageProvider: StorageProvider,
    private toastCtrl: ToastController,
    private socialSharing: SocialSharing,
    private nativePageTransitions: NativePageTransitions,
    private imageLoaderConfig: ImageLoaderConfig,
    private sanitizer: DomSanitizer
  ) {
    imageLoaderConfig.enableSpinner(false);
    this.postId = this.navParams.get("postId");
    this.onProgress = true;
    this.onImgProgress = true;
    this.fetch(this.postId);
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  ionViewWillLeave() {
    let opt: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 0,
      androiddelay: 0
    };
    this.nativePageTransitions.fade(opt);
  }

  fetch(id) {
    this.clientProvider.getPostContent(id)
      .subscribe(res => {
        this.post = res;
        this.post.content.bypassRendered = this.sanitizer.bypassSecurityTrustHtml(this.post.content.rendered);
        this.onProgress = false;
        this.storageProvider.isDuplicate(res)
          .then(res => {
            this.isBookmarked = (res == null ? false : true);
          })
      })

  }

  bookmark(post) {
    if (!this.isBookmarked) {
      this.storageProvider.saveBookmark(post)
        .then(() => {
          let toast = this.toastCtrl.create({
            message: 'Bookmark added!',
            duration: 3000,
            position: 'bottom'
          })
          toast.present();
          this.isBookmarked = true;
        })
    } else {
      this.storageProvider.removeBookmark(post)
        .then(() => {
          let toast = this.toastCtrl.create({
            message: 'Post removed from bookmark.',
            duration: 3000,
            position: 'bottom'
          })
          toast.present();
          this.isBookmarked = false;
        })
    }
  }

  share(link) {
    this.socialSharing.share("", "", null, link);
  }

  openComment() {
    let commentModal = this.modalCtrl.create("CommentModal", {
      id: this.post.id,
      url: this.post.link
    });
    commentModal.present();
  }

  goToAuthor(id: number, name: string) {
    this.navCtrl.push("AuthorPage", {
      'opt': [{
        'type': 'author',
        'id': id
      }],
      'id': id,
      'name': name
    })
  }
}
