import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Transfer } from '@ionic-native/transfer';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { IonicImageLoader, ImageLoader, ImageLoaderConfig } from 'ionic-image-loader';
import { MomentModule } from 'angular2-moment';
import { MyApp } from './app.component';

import { AuthProvider } from '../providers/auth.provider';
import { ClientProvider } from '../providers/client.provider';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageLoader,
    MomentModule
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
    Transfer,
    NativePageTransitions,
    AdMobFree,
    AuthProvider,
    ClientProvider
  ]
})
export class AppModule { }
