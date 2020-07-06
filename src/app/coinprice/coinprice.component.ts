import { CoinpriceService } from './coinprice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coinprice',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let currency of currencies" [style.color]="isEmpty ? 'red' : 'black'">
        {{  currency  }}
      </li>
    </ul>
  `
})
export class CoinpriceComponent {
  title = "List of Cryptocurrencies";
  currencies;
  isEmpty = true; //apply just each <li> add html string to say it is empty
  //sortByAmmount class

  constructor(service: CoinpriceService) {
    this.currencies = service.getCurrencies();
  }
}
