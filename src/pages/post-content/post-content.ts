import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { ClientProvider } from '../../providers/client.provider';
import { ImgLoader } from 'ionic-image-loader';
import { ImageLoaderConfig } from 'ionic-image-loader';

import 'rxjs/Rx';
@IonicPage()
@Component({
  selector: 'page-post-content',
  templateUrl: 'post-content.html',
  providers: [ClientProvider, SocialSharing]
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

  constructor(
    navCtrl: NavController,
    private viewCtrl: ViewController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public clientProvider: ClientProvider,
    public elementRef: ElementRef,
    private toastCtrl: ToastController,
    private socialSharing: SocialSharing,
    private imageLoaderConfig: ImageLoaderConfig,
    private sanitizer: DomSanitizer
  ) {
    imageLoaderConfig.enableSpinner(false);
    this.postId = this.navParams.get("postId");
    this.postMedia = this.navParams.get("postMedia");
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
        console.log(this.postContent.content.rendered);
        this.postContent.content.bypassRendered = this.sanitizer.bypassSecurityTrustHtml(this.postContent.content.rendered);
        this.onProgress = false;
      })
  }

  toggleBookmark(post) {
    // this.storageService.saveBookmark(post)
    //   .then(res => {
    //     let toast = this.toastCtrl.create({
    //       message: 'Bookmark added!',
    //       duration: 3000,
    //       position: 'bottom'
    //     })
    //     toast.present();
    //   })
  }
  sharePost(link) {
    this.socialSharing.share("", "", null, link);
  }
  presentProfileModal() {
    let commentModal = this.modalCtrl.create(CommentModal, { id: this.postId });
    commentModal.present();
  }
}

@Component({
  selector: 'modal-comment',
  templateUrl: 'comment-modal.html',
  providers: [ClientProvider, SocialSharing]
})
class CommentModal {
  postID: number;
  comments: any;
  constructor(private clientProvider: ClientProvider, private navParams: NavParams) {
    this.postID = this.navParams.get('id');
  }
  getCommnent(){
    this.clientProvider.getComments(this.postID)
    .subscribe(res => {
      console.log(res);
      this.comments = res;
    })
  }
  postComment(){

  }
}
