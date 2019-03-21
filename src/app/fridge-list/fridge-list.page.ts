import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, BarcodeDataService } from 'src/app/services/barcode-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fridge-list',
  templateUrl: './fridge-list.page.html',
  styleUrls: ['./fridge-list.page.scss'],
})
export class FridgeListPage{
  data;
  results: Observable<any>;
  searchTerm= '';
  type: SearchType = SearchType.all;

  constructor(private barcodeDataService: BarcodeDataService,
    private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
  }

  yourArray = ['second'];
  
  searchChanged() {
    this.results = this.barcodeDataService.searchData(this.searchTerm, this.type);

    
  }

}
