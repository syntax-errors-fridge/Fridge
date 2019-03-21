import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.navigateRoot('/home')
  }
  

}
