import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ready = false;

  constructor(public navCtrl: NavController,public plt: Platform) {
    plt.ready().then(() => {
      this.ready = true;
    });

  }

  refresh(){
    this.ready = !this.ready;
  }

}
