import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amcharts5-test';
  showChart = false;
  showGroupingChart = false;

  onShowChart() {
    this.showGroupingChart = false;
    this.showChart = true;
  }

  onHideChart() {
    this.showChart = false;
  }

  onShowGroupingChart() {
    this.showChart = false;
    this.showGroupingChart = true;
  }

  onHideGroupingChart() {
    this.showGroupingChart = false;
  }
}
