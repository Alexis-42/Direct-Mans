import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { InteretsComponent } from './components/interets/interets.component';
import { SetramComponent } from './components/setram/setram.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    InteretsComponent,
    SetramComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
