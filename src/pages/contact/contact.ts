import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {
//  GoogleMaps,
//  GoogleMap,
//  GoogleMapsEvent,
//  LatLng,
//  CameraPosition,
//  MarkerOptions,
//  Marker
// } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    //  private googleMaps: GoogleMaps
  ) { }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CommentListPage');
  // }

  // ngAfterViewInit(){
  //    this.initMap();
  // }

  // initMap(){
  //    let element: HTMLElement = document.getElementById('map');
  //    let map: GoogleMap = this.googleMaps.create(element);
  //    map.one(GoogleMapsEvent.MAP_READY).then(
  //       ()=>{
  //          console.log('map is ready');
  //       }
  //    )
  //    let targetLatLng: LatLng = new LatLng(43.0741904,-89.3809802);
  //    let position: CameraPosition = {
  //       target: targetLatLng,
  //       zoom: 18,
  //       tilt: 30
  //    };
  //    map.moveCamera(position);

  //    let markerOptions: MarkerOptions = {
  //       position: targetLatLng,
  //       title: 'Our Location'
  //    };

  //    const marker = map.addMarker(markerOptions)
  //    .then((marker: Marker) => {
  //       marker.showInfoWindow();
  //    })

  // }

}
