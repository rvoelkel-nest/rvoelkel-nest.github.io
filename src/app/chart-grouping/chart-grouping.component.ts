import { AfterViewInit, Component, NgZone, OnDestroy } from '@angular/core';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';

@Component({
  selector: 'app-chart-grouping',
  templateUrl: './chart-grouping.component.html',
  styleUrls: ['./chart-grouping.component.css']
})
export class ChartGroupingComponent implements OnDestroy, AfterViewInit {
  root: am5.Root;

  constructor(private zone: NgZone) { }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      /* Chart code */
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      const root = am5.Root.new('chartdiv');


      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Dark.new(root)
      ]);


      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      const chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        layout: root.verticalLayout
      }));


      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {
        behavior: 'zoomX'
      }));
      cursor.lineY.set('visible', false);


      // Generate random data
      let value = 100;

      function generateData(date) {
        value = Math.round((Math.random() * 10 - 5) + value);
        am5.time.add(date, 'day', 1);
        return {
          date: date.getTime(),
          value: value
        };
      }

      function generateDatas(count) {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        const data = [];
        for (let i = 0; i < count; ++i) {
          data.push(generateData(date));
        }
        return data;
      }


      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        groupData: true,
        maxDeviation: 0,
        baseInterval: {
          timeUnit: 'day',
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      }));

      const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      }));


      for (let i = 0; i < 5; i++) {
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        const series = chart.series.push(am5xy.LineSeries.new(root, {
          name: 'Series ' + i,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value',
          valueXField: 'date',
          tooltip: am5.Tooltip.new(root, {
            labelText: '{valueY}'
          })
        }));

        const datas = generateDatas(180000);
        series.data.setAll(datas);
      }

      // Add scrollbar
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      chart.set('scrollbarX', am5.Scrollbar.new(root, {
        orientation: 'horizontal'
      }));

      // Add legend
      const legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      this.root = root;
    });
  }

}
