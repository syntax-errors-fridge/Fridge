import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
<<<<<<< HEAD
  options: BarcodeScannerOptions;
  encodText:string='';
  encodedData: any={};
  scannedData: any={};
  constructor(public navCtrl: NavController, public scanner:BarcodeScanner) {

  }
  scan(){
    this.options= {
      prompt: "Scan your barcode"
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error :', err);
    })
  }
  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodedData = data;
    }, (err) => {
      console.log('Error :', err);
    })
  }
}
=======
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
>>>>>>> 04d7b439948404a29c3c7d451d5acd9251f6d97e
