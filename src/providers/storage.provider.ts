import { Component, Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/Rx';

@Injectable()
export class StorageProvider {
  tempBookmark: any;
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
    return this.fetchBookmark()
      .then(res => {
        this.tempBookmark = res;
        bookmark = (this.tempBookmark == null ? [] : this.tempBookmark);
        bookmark.push(postItem);
        return this.storage.set('bookmark', bookmark)
          .then(() => {
            return true;
          })
          .catch(() => {
            return false;
          })
      })
  }

  isDuplicate(postItem: any) {
    let result: any;
    let bookmark: any;
    return this.fetchBookmark()
      .then(res => {
        bookmark = res.filter(item => item.id == postItem.id)[0];
        return bookmark;
      })
  }

  removeBookmark(postItem: any) {
    let result: any;
    let bookmark: any;
    return this.fetchBookmark()
      .then(res => {
        bookmark = res.filter(item => item.id != postItem.id);
        this.storage.set('bookmark', bookmark);
        return bookmark;
      })
  }


}
