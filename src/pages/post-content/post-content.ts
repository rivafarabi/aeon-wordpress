import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, ToastController, FabContainer } from 'ionic-angular';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'page-post-content',
  templateUrl: 'post-content.html',
  providers: [ClientService]
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
  private showFabOverlay: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public clientService: ClientService,
    public elementRef: ElementRef,
    private toastCtrl: ToastController
    ) {
    this.postId = this.navParams.get("postId");
    this.postMedia = this.navParams.get("postMedia");
    console.log(this.postMedia);
    this.getPostContent(this.postId);
    this.showFabOverlay = false;
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
        console.log(this.postContent);
      })
  }

  toggleFabOverlay(){
    this.showFabOverlay = !this.showFabOverlay;
    if(this.showFabOverlay){

    }
  }

  toggleBookmark(fab: FabContainer){
    let toast = this.toastCtrl.create({
      message: 'Bookmark added!',
      duration: 3000,
      position: 'bottom'
    })
    toast.present();

    console.log("hahaha")
    fab.close();
  }

}
