import { AfterViewInit, Component, NgZone, OnDestroy } from '@angular/core';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnDestroy, AfterViewInit {
  private root: am5.Root;
  chart: am5xy.XYChart;
  xAxis: am5xy.DateAxis<am5xy.AxisRenderer>;
  yAxisList: any[] = [];
  legend: any;
  loading: boolean;

  constructor(private zone: NgZone) { }

  ngAfterViewInit() {
    // Chart code goes in here
    this.zone.runOutsideAngular(() => {
      const root = am5.Root.new('chartdiv');

      root.setThemes([am5themes_Dark.new(root)]);

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      );

      // Create X-Axis
      const xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          baseInterval: { timeUnit: 'second', count: 1 }
        })
      );

      // add legend
      this.legend = chart.children.push(am5.Legend.new(root, {}));

      this.root = root;
      this.chart = chart;
      this.xAxis = xAxis;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

  handleFile(ev) {
    const inputElement = ev.target as HTMLInputElement;
    if (inputElement) {
      if (inputElement.files && inputElement.files.length > 0) {
        this.readFile(inputElement.files[0]);
      }
    }
  }

  readFile(file: File) {
    // reset chart
    this.yAxisList = [];
    if (this.chart.series) {
      this.chart.series.clear();
    }
    if (this.chart.yAxes) {
      this.chart.yAxes.clear();
    }

    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = () => {
      const textResult = fileReader.result as string;
      const jsonData = JSON.parse(textResult);
      console.log(jsonData);

      for (const mst of jsonData.Messstellen) {
        // Create Y-axis
        const yAxis = this.getYAxis(mst.Config.Unit);

        // Create series
        const series = this.chart.series.push(
          am5xy.LineSeries.new(this.root, {
            name: mst.Config.Name,
            xAxis: this.xAxis,
            yAxis: yAxis,
            valueYField: 'Value',
            valueXField: 'Date'
          })
        );
        series.strokes.template.setAll({
          strokeWidth: 2
        });

        series.data.processor = am5.DataProcessor.new(this.root, {
          dateFields: ['Date'],
          dateFormat: 'yyyy-MM-ddTHH:mm:ss'
        });

        series.data.setAll(mst.Values);
      }

      // Add legend
      this.legend.data.setAll(this.chart.series.values);

      // Add cursor
      this.chart.set('cursor', am5xy.XYCursor.new(this.root, { behavior: 'zoomXY', xAxis: this.xAxis }));
    };
  }


  private getYAxis(unit: string) {

    const definedYAxis = this.yAxisList.find(axis => axis.unit === unit);
    if (definedYAxis) {
      return definedYAxis.yAxis;
    }

    const oppositeYAxis = unit !== '°C';
    const yAxis = this.chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        renderer: am5xy.AxisRendererY.new(this.root, { opposite: oppositeYAxis }),
      })
    );

    yAxis.set('tooltip', am5.Tooltip.new(this.root, {}));

    const label = am5.Label.new(this.root, {
      rotation: oppositeYAxis ? 90 : -90,
      text: unit,
      y: am5.p50,
      centerX: am5.p50
      //x: am5.p0,
      //centerY: am5.p0
    });

    yAxis.children.unshift(
      label
    );

    this.yAxisList.push({ yAxis, unit });

    return yAxis;
  }
}
