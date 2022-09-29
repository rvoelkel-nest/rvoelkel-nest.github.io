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
  yAxisList: any[] = [];
  legend: any;

  fileName: string;

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

      // add legend
      this.legend = chart.children.push(am5.Legend.new(root, {}));

      // Add scrollbar
      chart.set('scrollbarX', am5.Scrollbar.new(root, {
        orientation: 'horizontal'
      }));

      this.root = root;
      this.chart = chart;
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

  handleSMAFile(ev) {
    const inputElement = ev.target as HTMLInputElement;
    if (inputElement) {
      if (inputElement.files && inputElement.files.length > 0) {
        this.readSMAFile(inputElement.files[0]);
      }
    }
  }

  readSMAFile(file: File) {
    this.fileName = file.name;
    // reset chart
    this.yAxisList = [];
    if (this.chart.series) {
      this.chart.series.clear();
    }
    if (this.chart.xAxes) {
      this.chart.xAxes.clear();
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

      // Create X-Axis
      const xAxis = this.chart.xAxes.push(
        am5xy.DateAxis.new(this.root, {
          renderer: am5xy.AxisRendererX.new(this.root, {}),
          baseInterval: { timeUnit: 'second', count: 1 }
        })
      );

      const xAxis2 = this.chart.xAxes.push(
        am5xy.DurationAxis.new(this.root, {
          marginTop: 10,
          renderer: am5xy.AxisRendererX.new(this.root, {}),
          baseUnit: 'second'
        })
      );

      // for (const mst of jsonData.Messstellen) {
      const mst = jsonData.Messstellen[0];
      // Create Y-axis
      const yAxis = this.getYAxis(mst.Config.Unit);

      // Create series
      const series = this.chart.series.push(
        am5xy.LineSeries.new(this.root, {
          name: mst.Config.Name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'Value',
          valueXField: 'Date',
          tooltip: am5.Tooltip.new(this.root, {
            labelText: '{valueY}'
          })
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

      console.log('finished mst: ' + mst.Config.Name);
      // }

      // Create series
      const series2 = this.chart.series.push(
        am5xy.LineSeries.new(this.root, {
          name: mst.Config.Name,
          xAxis: xAxis2,
          yAxis: yAxis,
          valueYField: 'Value',
          valueXField: 'Date',
          tooltip: am5.Tooltip.new(this.root, {
            labelText: '{valueY}'
          })
        })
      );
      series2.strokes.template.setAll({
        strokeWidth: 2
      });

      const data = mst.Values.map((val, i) => ({ Date: (val.Date - mst.Values[0].Date) / 1000, Value: val.Value }));
      series2.data.setAll(data);

      // Add legend
      this.legend.data.setAll(this.chart.series.values);

      // Add cursor
      this.chart.set('cursor', am5xy.XYCursor.new(this.root, { behavior: 'zoomXY' }));
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

  handleNCxFile(ev) {
    const inputElement = ev.target as HTMLInputElement;
    if (inputElement) {
      if (inputElement.files && inputElement.files.length > 0) {
        this.readNCxFile(inputElement.files[0]);
      }
    }
  }

  readNCxFile(file: File) {
    this.fileName = file.name;
    // reset chart
    this.yAxisList = [];
    if (this.chart.series) {
      this.chart.series.clear();
    }
    if (this.chart.xAxes) {
      this.chart.xAxes.clear();
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

      // Create X-Axis
      const xAxis = this.chart.xAxes.push(
        am5xy.ValueAxis.new(this.root, {
          renderer: am5xy.AxisRendererX.new(this.root, {})
        })
      );

      for (const channel of jsonData.Channels.slice(0, 5)) {
        // Create Y-axis
        const yAxis = this.getYAxis(channel.Unit);

        // Create series
        const series = this.chart.series.push(
          am5xy.LineSeries.new(this.root, {
            name: channel.Name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: 'y',
            valueXField: 'x',
            tooltip: am5.Tooltip.new(this.root, {
              labelText: '{valueY}'
            })
          })
        );
        series.strokes.template.setAll({
          strokeWidth: 2
        });

        const values = channel.Values.map((val, i) => ({ x: i, y: val }));

        series.data.setAll(values);

        console.log('finished channel: ' + channel.Name);
      }

      // Add legend
      this.legend.data.setAll(this.chart.series.values);

      // Add cursor
      this.chart.set('cursor', am5xy.XYCursor.new(this.root, { behavior: 'zoomXY', xAxis: xAxis }));
    };
  }
}
