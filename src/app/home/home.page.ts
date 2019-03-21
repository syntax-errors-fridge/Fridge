import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FridgeListPage } from 'src/app/fridge-list/fridge-list.page';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    barcodeData;
    link;
    data;
    product_name = {
      name: "gey"
    }
    constructor(private barcodeScanner: BarcodeScanner,
      public navCtrl: NavController,
      private router: Router) { }

    scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.barcodeData = barcodeData;

      }).catch(err => {
        console.log('Error', err);
    });
 }

    getAPIdata() {
      
      
      
        const url = "https://cors-anywhere.herokuapp.com/https://api.barcodelookup.com/v2/products?barcode=0084253240413&formatted=y&key=t4jldv66yki8efd0apfq76dc2coscq"

        fetch(url)
                    .then(response => response.json())
                    .then((data) => {
                      console.log(JSON.stringify(data))
                      document.getElementById("ProductName").innerHTML = (data.products[0].product_name);
                      document.getElementById("Ingredients").innerHTML = (data.products[0].ingredients);
                      document.getElementById("NutritionFacts").innerHTML = (data.products[0].nutrition_facts);
                    })
                    .catch(err => { 
                        throw err 
                    });
                    
         //window.open("https://api.barcodelookup.com/v2/products?barcode=" + barcodeData.text + "@formatted=y&key=4r6ju8v7pvhximmzpezk041sky5rp7");
                  }
                  
    sendData() {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.product_name)
        }
      }
      this.router.navigate(['fridge-list'], navigationExtras);
    }
}