import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Geolocation} from '@ionic-native/geolocation';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

}
