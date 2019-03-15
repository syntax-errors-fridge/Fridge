import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    barcodeData;
    constructor(private barcodeScanner: BarcodeScanner) {

    }
    scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
        
        
        this.barcodeData = barcodeData;
       }).catch(err => {
           console.log('Error', err);
       });
    }

}
