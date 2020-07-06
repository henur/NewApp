import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinpriceComponent } from './coinprice/coinprice.component';
import { CoinpriceService } from './coinprice/coinprice.service';

@NgModule({
  declarations: [
    AppComponent,
    CoinpriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    CoinpriceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
