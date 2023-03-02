import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserboxComponent } from './components/userbox/userbox.component';
import { GtfsComponent } from './gtfs/gtfs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserboxComponent,
    GtfsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
