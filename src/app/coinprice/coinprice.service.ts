import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinpriceService {
  getCurrencies() {
    return ["Bitcoin", "Ethereum", "DAI"];
  }
}
