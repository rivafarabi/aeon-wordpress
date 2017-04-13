import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { ClientService } from '../../services/client.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'page-post-content',
  templateUrl: 'post-content.html',
  providers: [ClientService, StorageService, NativeStorage, SocialSharing]
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clientService: ClientService,
    public storageService: StorageService,
    public elementRef: ElementRef,
    private toastCtrl: ToastController,
    private socialSharing: SocialSharing
  ) {
    this.postId = this.navParams.get("postId");
    this.postMedia = this.navParams.get("postMedia");
    this.getPostContent(this.postId);
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    // Ionic scroll element
    this.ionScroll = this.elementRef.nativeElement.getElementsByClassName('scroll-content')[0];
    // On scroll function
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
    this.clientService.getPostContent(id)
      .subscribe(res => {
        this.postContent = res;
      })
  }

  toggleBookmark(post) {
    this.storageService.saveBookmark(post)
      .subscribe(res => {
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

}
