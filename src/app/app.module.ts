import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartGroupingComponent } from './chart-grouping/chart-grouping.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartGroupingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
