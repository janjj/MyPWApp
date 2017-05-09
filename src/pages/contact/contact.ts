import {Component, NgZone} from "@angular/core";
import {NavController} from 'ionic-angular';

declare var CameraPreview: any;
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    public getWidth: number;
    public getHeight: number;
    public calcWidth: number;

    private canv: any;
    private ctx: any;

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

//...
    UseFilter() {
        (<HTMLInputElement>document.getElementById('previewPicture')).src;
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


    getPixels(img) {
        var c = this.getCanvas(img.width, img.height);
        this.ctx = c.getContext('2d');
        this.ctx.drawImage(img);
        return this.ctx.getImageData(0, 0, c.width, c.height);
    }

    getCanvas(w, h) {
        // setup the canvas
        this.canv = < HTMLCanvasElement > document.createElement("cnvs");
        this.canv.width = w;
        this.canv.height = h;
        this.canv.style.border = "1px solid gray";

        return this.canv;
    };

    FilterImage(filter, image, var_args) {
        var args = [this.getPixels(image)];
        for (var i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return filter.apply(null, args);
    }

    brightness(pixels, adjustment) {
        var d = pixels.data;
        for (var i = 0; i < d.length; i += 4) {
            d[i] += adjustment;
            d[i + 1] += adjustment;
            d[i + 2] += adjustment;
        }
        return pixels;
    };


}
