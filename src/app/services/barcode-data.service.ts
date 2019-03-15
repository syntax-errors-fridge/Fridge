import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FridgeListPage } from '../fridge-list/fridge-list.page';

export enum SearchType {
  all = '',
  food = 'food'

}

@Injectable({
  providedIn: 'root'
})
export class BarcodeDataService {
  url = 'https://api.barcodelookup.com/v2/products?barcode=&formatted=y&key=';
  apiKey = '4r6ju8v7pvhximmzpezk041sky5rp7';
  constructor(private http: HttpClient) { }

  searchData (title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
    .pipe(
      map(results => {
        console.log('RAW: ', results);
        return results['Search'];
      })
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }

}
