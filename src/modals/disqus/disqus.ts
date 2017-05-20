import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { DisqusModule } from 'ng2-awesome-disqus';
import { ClientProvider } from '../../providers/client.provider';
import { Disqus } from '../../constants/endpoint.constant';

@IonicPage()
@Component({
  selector: 'modal-disqus',
  templateUrl: 'disqus.html',
  providers: [ClientProvider]
})
export class DisqusModal {
  disqus: Disqus = new Disqus();
  shortname: string;
  postUrl: string;

  constructor(
    private viewCtrl: ViewController,
    private clientProvider: ClientProvider,
    private navParams: NavParams
  ) {
    this.shortname = this.disqus.SHORTNAME;
    this.postUrl = this.navParams.get("url");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
