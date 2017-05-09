import {Component, NgZone} from "@angular/core";
import { NavController } from 'ionic-angular';

declare var CameraPreview: any;
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public getWidth: number;
  public getHeight: number;
  public calcWidth: number;

  constructor(private nav: NavController, private zone: NgZone) {

    this.zone.run(() => {
      this.getWidth = window.innerWidth;

      this.getHeight = window.innerHeight;
    });
    console.log('width', this.getWidth);

    this.calcWidth = this.getWidth - 80;  // Calculate the width of device and substract 80 from device width;

    console.log('calc width', this.calcWidth);

  }


  startCamera() {
    // let react = {x: 40, y: 100, width: this.calcWidth ,height: 220}   //Decrepted due to previous code
    CameraPreview.startCamera({
      x: 40,
      y: 100,
      width: this.calcWidth,
      height: 220,
      toBack: false,
      previewDrag: true,
      tapPhoto: true
    });
    //.startCamera(react, defaultCamera:'back',tapEnabled: true, dragEnabled: true, toBack:true, alpha:1);  //Decrepeted
  }

  stopCamera() {
    CameraPreview.stopCamera();
  }

  takePicture() {

    // let size = {maxWidth: 1024, maxHeight: 640};
    // CameraPreview.takePicture(size);         //Decrepted
    CameraPreview.takePicture(function (imgData) {
      (<HTMLInputElement>document.getElementById('previewPicture')).src = 'data:image/jpeg;base64,' + imgData;
    });
  }


  SwitchCamera() {
    CameraPreview.switchCamera();
  }

  showCamera() {
    CameraPreview.show();
  }

  hideCamera() {
    CameraPreview.hide();
  }


}
