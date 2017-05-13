import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { MyApp } from './app.component';

import { IonicImageLoader, ImageLoader, ImageLoaderConfig } from 'ionic-image-loader';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageLoader
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
    IonicImageLoader,
    ImageLoader,
    ImageLoaderConfig,
    File,
    Transfer
  ]
})
export class AppModule { }
