import { Component, Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import 'rxjs/Rx';

@Component({
  providers: [NativeStorage]
})
@Injectable()
export class StorageService {
   public bookmarkList: any = [];
   
   constructor(
    private nativeStorage: NativeStorage
  ) {
    this.fetchBookmark();
  }

  fetchBookmark(){
    let response;
    this.nativeStorage.getItem('bookmark')
    .then(
      data => this.bookmarkList = data,
      error => {
        console.log(error);
        response = false;
      }
    )
    return this.bookmarkList;
  }

  saveBookmark(postItem: any){
    let response;
    this.bookmarkList.push(postItem);
    this.nativeStorage.setItem('bookmark', postItem)
    .then(
      () => response = true,
      error => {
        console.log(error);
        response = false;
      }
    )
    return response;
  }

  removeBookmark(postItem: any){
    let response = false;
    this.bookmarkList.push(postItem);
    this.nativeStorage.remove('bookmark')
    .then(
      () => response = true,
      error => {
        console.log(error);
        response = false;
      }
    )
    return response;
  }


}
