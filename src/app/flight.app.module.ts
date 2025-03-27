import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FlightAppComponent } from './flight.app.component';
import { FlightAppRoutingModule } from './flight.app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlightAppComponent],
  imports: [IonicModule.forRoot(), FlightAppRoutingModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [FlightAppComponent],
  exports: [FlightAppComponent],
})
export class FlightAppModule {}
