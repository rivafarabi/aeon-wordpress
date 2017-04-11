import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, ToastController, FabContainer } from 'ionic-angular';
import { ClientService } from '../../services/client.service';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-post-content',
  templateUrl: 'post-content.html',
  providers: [ClientService, SocialSharing]
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

  toggleBookmark(){
    let toast = this.toastCtrl.create({
      message: 'Bookmark added!',
      duration: 3000,
      position: 'bottom'
    })
    toast.present();
  }

  sharePost(link){
    console.log(link);
    this.socialSharing.share("","", null, link);
  }

}
