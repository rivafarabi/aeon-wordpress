import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { ClientProvider } from '../../providers/client.provider';
import { StorageProvider } from '../../providers/storage.provider';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';

import 'rxjs/Rx';
@IonicPage()
@Component({
  selector: 'page-post-content',
  templateUrl: 'post-content.html',
  providers: [ClientProvider, StorageProvider, SocialSharing]
})
export class PostContentPage {
  private postId: number;
  private postMedia: string;
  private postContent: any = [];
  private start = 0;
  private threshold = 200;
  private slideHeaderPrevious = 0;
  private ionScroll: any;
  private showheader: boolean;
  private hideheader: boolean;
  private headercontent: any;
  private onProgress: boolean;
  private onImgProgress: boolean;
  isSaved: boolean;
  
  constructor(
    navCtrl: NavController,
    private viewCtrl: ViewController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public clientProvider: ClientProvider,
    public storageProvider: StorageProvider,
    public elementRef: ElementRef,
    private toastCtrl: ToastController,
    private socialSharing: SocialSharing,
    private imageLoaderConfig: ImageLoaderConfig,
    private sanitizer: DomSanitizer
  ) {
    imageLoaderConfig.enableSpinner(false);
    this.postId = this.navParams.get("postId");
    this.onProgress = true;
    this.onImgProgress = true;
    this.getPostContent(this.postId);
  }

  ionViewWillEnter() {
    this.viewCtrl.setBackButtonText("");
  }

  ngOnInit() {
    this.ionScroll = this.elementRef.nativeElement.getElementsByClassName('scroll-content')[0];
    this.ionScroll.addEventListener("scroll", () => {
      if (this.ionScroll.scrollTop - this.start > this.threshold) {
        this.showheader = true;
        this.hideheader = false;
      } else {
        this.showheader = false;
        this.hideheader = true;
      }
      this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
    });
  }

  getPostContent(id) {
    this.clientProvider.getPostContent(id)
      .subscribe(res => {
        this.postContent = res;
        this.postContent.content.bypassRendered = this.sanitizer.bypassSecurityTrustHtml(this.postContent.content.rendered);
        this.onProgress = false;
      })
      this.isSaved = this.storageProvider.isDuplicate(this.postContent);
      console.log(`isSaved : ${this.isSaved}`);
  }

  toggleBookmark(post) {
    this.storageProvider.saveBookmark(post)
      .then(() => {
        let toast = this.toastCtrl.create({
          message: 'Bookmark added!',
          duration: 3000,
          position: 'bottom'
        })
        toast.present();
      })
  }
  sharePost(link) {
    this.socialSharing.share("", "", null, link);
  }
  openCommentModal() {
    let commentModal = this.modalCtrl.create("CommentModal", { 
      id: this.postContent.id,
      url: this.postContent.link
    });
    commentModal.present();
  }
}
