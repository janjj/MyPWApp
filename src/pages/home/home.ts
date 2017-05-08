import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Geolocation} from '@ionic-native/geolocation';
import L from "leaflet";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    map: L.Map;
    center: L.PointTuple;

    constructor(public navCtrl: NavController, private geolocation: Geolocation, public navParams: NavParams) {

        /*
         this.geolocation.getCurrentPosition().then((resp) => {
         // resp.coords.latitude
         // resp.coords.longitude
         }).catch((error) => {
         console.log('Error getting location', error);
         });

         let watch = this.geolocation.watchPosition();
         watch.subscribe((data) => {
         // data can be a set of coordinates, or an error (if an error occurred).
         // data.coords.latitude
         // data.coords.longitude
         });
         */
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');

        //set map center
        //this.center = [48.137154, 11.576124]; //Munich
        this.center = [48.775556, 9.182778]; //Stuttgart

        //setup leaflet map
        this.initMap();
    }

    initMap() {
        this.map = L.map('map', {
            center: this.center,
            zoom: 13
        });

        //Add OSM Layer
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
            .addTo(this.map);
    }


}
