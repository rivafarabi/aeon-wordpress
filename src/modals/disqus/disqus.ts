import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { DisqusModule } from 'ng2-awesome-disqus';
import { ClientProvider } from '../../providers/client.provider';
import { DisqusConstant } from '../../constants/variables.constant';

@IonicPage()
@Component({
  selector: 'modal-disqus',
  templateUrl: 'disqus.html',
  providers: [ClientProvider]
})
export class DisqusModal {
  shortname: string;
  postUrl: string;

  constructor(
    private viewCtrl: ViewController,
    private clientProvider: ClientProvider,
    private navParams: NavParams
  ) {
    this.shortname = DisqusConstant.SHORTNAME;
    this.postUrl = this.navParams.get("url");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
