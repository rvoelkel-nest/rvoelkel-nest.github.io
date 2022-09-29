(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");



class AppComponent {
    constructor() {
        this.title = 'amcharts5-test';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chart");
    } }, directives: [_chart_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts5 */ "./node_modules/@amcharts/amcharts5/index.js");
/* harmony import */ var _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts5/xy */ "./node_modules/@amcharts/amcharts5/xy.js");
/* harmony import */ var _amcharts_amcharts5_themes_Dark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts5/themes/Dark */ "./node_modules/@amcharts/amcharts5/themes/Dark.js");

// amCharts imports




class ChartComponent {
    constructor(zone) {
        this.zone = zone;
        this.yAxisList = [];
    }
    ngAfterViewInit() {
        // Chart code goes in here
        this.zone.runOutsideAngular(() => {
            const root = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__["Root"].new('chartdiv');
            root.setThemes([_amcharts_amcharts5_themes_Dark__WEBPACK_IMPORTED_MODULE_3__["default"].new(root)]);
            const chart = root.container.children.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["XYChart"].new(root, {
                panY: false,
                layout: root.verticalLayout
            }));
            // add legend
            this.legend = chart.children.push(_amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__["Legend"].new(root, {}));
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
        const inputElement = ev.target;
        if (inputElement) {
            if (inputElement.files && inputElement.files.length > 0) {
                this.readSMAFile(inputElement.files[0]);
            }
        }
    }
    readSMAFile(file) {
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
            const textResult = fileReader.result;
            const jsonData = JSON.parse(textResult);
            console.log(jsonData);
            // Create X-Axis
            const xAxis = this.chart.xAxes.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["DateAxis"].new(this.root, {
                renderer: _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["AxisRendererX"].new(this.root, {}),
                baseInterval: { timeUnit: 'second', count: 1 }
            }));
            for (const mst of jsonData.Messstellen) {
                // Create Y-axis
                const yAxis = this.getYAxis(mst.Config.Unit);
                // Create series
                const series = this.chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["LineSeries"].new(this.root, {
                    name: mst.Config.Name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: 'Value',
                    valueXField: 'Date'
                }));
                series.strokes.template.setAll({
                    strokeWidth: 2
                });
                series.data.processor = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__["DataProcessor"].new(this.root, {
                    dateFields: ['Date'],
                    dateFormat: 'yyyy-MM-ddTHH:mm:ss'
                });
                series.data.setAll(mst.Values);
                console.log('finished mst: ' + mst.Config.Name);
            }
            // Add legend
            this.legend.data.setAll(this.chart.series.values);
            // Add cursor
            this.chart.set('cursor', _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["XYCursor"].new(this.root, { behavior: 'zoomXY', xAxis: xAxis }));
        };
    }
    getYAxis(unit) {
        const definedYAxis = this.yAxisList.find(axis => axis.unit === unit);
        if (definedYAxis) {
            return definedYAxis.yAxis;
        }
        const oppositeYAxis = unit !== '°C';
        const yAxis = this.chart.yAxes.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"].new(this.root, {
            renderer: _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["AxisRendererY"].new(this.root, { opposite: oppositeYAxis }),
        }));
        yAxis.set('tooltip', _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__["Tooltip"].new(this.root, {}));
        const label = _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__["Label"].new(this.root, {
            rotation: oppositeYAxis ? 90 : -90,
            text: unit,
            y: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__["p50"],
            centerX: _amcharts_amcharts5__WEBPACK_IMPORTED_MODULE_1__["p50"]
            //x: am5.p0,
            //centerY: am5.p0
        });
        yAxis.children.unshift(label);
        this.yAxisList.push({ yAxis, unit });
        return yAxis;
    }
    handleNCxFile(ev) {
        const inputElement = ev.target;
        if (inputElement) {
            if (inputElement.files && inputElement.files.length > 0) {
                this.readNCxFile(inputElement.files[0]);
            }
        }
    }
    readNCxFile(file) {
        this.fileName = file.name;
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
            const textResult = fileReader.result;
            const jsonData = JSON.parse(textResult);
            console.log(jsonData);
            // Create X-Axis
            const xAxis = this.chart.xAxes.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"].new(this.root, {
                renderer: _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["AxisRendererX"].new(this.root, {})
            }));
            for (const channel of jsonData.Channels.slice(0, 5)) {
                // Create Y-axis
                const yAxis = this.getYAxis(channel.Unit);
                // Create series
                const series = this.chart.series.push(_amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["LineSeries"].new(this.root, {
                    name: channel.Name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: 'y',
                    valueXField: 'x',
                    minDistance: 10
                }));
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
            this.chart.set('cursor', _amcharts_amcharts5_xy__WEBPACK_IMPORTED_MODULE_2__["XYCursor"].new(this.root, { behavior: 'zoomXY', xAxis: xAxis }));
        };
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 15, vars: 1, consts: [["id", "chartdiv", 2, "width", "100%", "height", "500px"], [3, "click"], ["id", "inputValue", "type", "file", "accept", ".json", "onclick", "this.value=null", 2, "display", "none", 3, "change"], ["getSMAFile", ""], ["getNCxFile", ""], [2, "color", "white"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return _r0.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Load SMA file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChartComponent_Template_input_change_4_listener($event) { return ctx.handleSMAFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Load NCx file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChartComponent_Template_input_change_9_listener($event) { return ctx.handleNCxFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fileName, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projekte\Temp\amcharts5-test\amcharts5-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map