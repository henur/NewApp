import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coinprice',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let currency of currencies">
        {{  currency.name  }}
        <button (click)="onRemove(currency)">Remove</button>
      </li>
    </ul>
    <button (click)="onAdd()">Add</button>
  `
})
export class CoinpriceComponent {
  title = "List of Cryptocurrencies";
  currencies = [
    { id: 1, name: 'Bitcoin' },
    { id: 2, name: 'Ethereum' },
    { id: 3, name: 'DAI' },
  ];

  onAdd() {
    this.currencies.push({ id: 4, name: 'MKR' });
  }
  onRemove(currency) {
    let index = this.currencies.indexOf(currency);
    this.currencies.splice(index, 1);
  }
}
