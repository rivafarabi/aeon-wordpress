import { Component, Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  providers: []
})
@Injectable()
export class StorageProvider {
  public bookmark: any = [];

  constructor(
    private platform: Platform,
    private storage: Storage
  ) {
    this.platform.ready().then(() => {

    });
  }

  fetchBookmark() {
    return this.storage.get('bookmark').then((val) => {
      return val;
    })
  }

  saveBookmark(postItem: any) {
    let bookmark: any;
    let tempBookmark = this.fetchBookmark();
    let fetch = Observable.fromPromise(this.fetchBookmark());
    fetch.subscribe(res => {
      tempBookmark = res; 
      console.log(tempBookmark);
    })
    if (tempBookmark == null) {
      bookmark = [];
    } else {
      bookmark = tempBookmark;
    }
    console.log(bookmark);
    return this.storage.set('bookmark', bookmark);
  }

  isDuplicate(postItem: any) {
    let result = false;
    console.log(this.bookmark);
    this.bookmark.some(item => {
      console.log(item);
      if (item == postItem) {
        result = true;
        console.log(result);
        return true
      }
    });
    return result;
  }

  removeBookmark(postItem: any) {
    let response = false;
    this.bookmark.push(postItem);

    return response;
  }


}
