import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, BarcodeDataService } from 'src/app/services/barcode-data.service';

@Component({
  selector: 'app-fridge-list',
  templateUrl: './fridge-list.page.html',
  styleUrls: ['./fridge-list.page.scss'],
})
export class FridgeListPage implements OnInit {

  results: Observable<any>;
  searchTerm= '';
  type: SearchType = SearchType.all;

  constructor(private barcodeDataService: BarcodeDataService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.barcodeDataService.searchData(this.searchTerm, this.type);

    
  }

}
