import { Component, Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/Rx';

@Component({
  providers: []
})
@Injectable()
export class StorageService {
  public bookmarkList: any = [];

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      
    });
    this.fetchBookmark();
  }


  fetchBookmark() {
    let response;
    return this.bookmarkList;
  }

  saveBookmark(postItem: any) {
    console.log(postItem)
    let response;
  }

  removeBookmark(postItem: any) {
    let response = false;
    this.bookmarkList.push(postItem);

    return response;
  }


}
