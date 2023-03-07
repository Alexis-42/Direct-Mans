import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GtfsComponent } from './gtfs/gtfs.component';
import { MapsComponent } from './components/maps/maps.component';
import { MeteoComponent } from './components/meteo/meteo.component';
import { InteretsComponent } from './components/interets/interets.component';
import { SetramComponent } from './components/setram/setram.component';

@NgModule({
  declarations: [
    AppComponent,
    GtfsComponent,
    MapsComponent,
    MeteoComponent,
    InteretsComponent,
    SetramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
