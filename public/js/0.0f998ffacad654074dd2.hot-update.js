webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data() {\n    return {\n      dataset: [],\n      labels: {\n        xLabels: [],\n        yLabels: 5,\n        yLabelsTextFormatter: val => \"$\" + Math.round(val * 100) / 100\n      },\n      grid: {\n        verticalLines: true,\n        verticalLinesNumber: 1,\n        horizontalLines: true,\n        horizontalLinesNumber: 1\n      }\n    };\n  },\n  mounted() {\n    this.$http.get(\"https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-01-31\").then(res => {\n      const data = res.data.bpi;\n      for (let key in data) {\n        this.dataset.push(data[key]);\n        this.labels.xLabels.push(__WEBPACK_IMPORTED_MODULE_0_moment___default()(key).format(\"MM/DD\"));\n      }\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/YTY3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQSxPQUZBO0FBT0E7QUFDQSwyQkFEQTtBQUVBLDhCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBO0FBUEE7QUFjQSxHQWhCQTtBQWlCQTtBQUNBLGVBQ0EsR0FEQSxDQUVBLHVGQUZBLEVBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkE7QUFXQTtBQTdCQSIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuPHNlY3Rpb24+XG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNC4zcmVtO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAwcHg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiYml0Y29pbi1wcmljZVwiPlxuICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDowOyBoZWlnaHQ6MDsgcG9zaXRpb246YWJzb2x1dGU7XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJidGNGaWxsXCIgeDE9XCIxXCIgeDI9XCIxXCIgeTE9XCIwXCIgeTI9XCIxXCI+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPVwiI2Y2OTExOVwiPjwvc3RvcD5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcC1jb2xvcj1cIiNmZmZmZmZcIj48L3N0b3A+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPHRyZW5kLWNoYXJ0XG4gICAgICB2LWlmPVwiZGF0YXNldC5sZW5ndGhcIlxuICAgICAgOmRhdGFzZXRzPVwiW3tkYXRhOiBkYXRhc2V0LCBmaWxsOiB0cnVlLCBjbGFzc05hbWU6ICdjdXJ2ZS1idGMnfV1cIlxuICAgICAgOmxhYmVscz1cImxhYmVsc1wiXG4gICAgICA6bWluPVwiMFwiXG4gICAgICA6Z3JpZD1cImdyaWRcIlxuICAgIC8+XG4gIDwvZGl2PlxuXG4gIDwvc2VjdGlvbj5cblxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhc2V0OiBbXSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICB4TGFiZWxzOiBbXSxcbiAgICAgICAgeUxhYmVsczogNSxcbiAgICAgICAgeUxhYmVsc1RleHRGb3JtYXR0ZXI6IHZhbCA9PiBcIiRcIiArIE1hdGgucm91bmQodmFsICogMTAwKSAvIDEwMFxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgdmVydGljYWxMaW5lczogdHJ1ZSxcbiAgICAgICAgdmVydGljYWxMaW5lc051bWJlcjogMSxcbiAgICAgICAgaG9yaXpvbnRhbExpbmVzOiB0cnVlLFxuICAgICAgICBob3Jpem9udGFsTGluZXNOdW1iZXI6IDFcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJGh0dHBcbiAgICAgIC5nZXQoXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb24/c3RhcnQ9MjAxOS0wMS0wMSZlbmQ9MjAxOS0wMS0zMVwiXG4gICAgICApXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuYnBpO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIHRoaXMuZGF0YXNldC5wdXNoKGRhdGFba2V5XSk7XG4gICAgICAgICAgdGhpcy5sYWJlbHMueExhYmVscy5wdXNoKG1vbWVudChrZXkpLmZvcm1hdChcIk1NL0REXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYml0Y29pbi1wcmljZSB7XG4gIC52dGMge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2OTlweCkge1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG4gIH1cbiAgLmdyaWQsXG4gIC5sYWJlbHMge1xuICAgIGxpbmUge1xuICAgICAgc3Ryb2tlOiByZ2JhKCNmNjkxMTksIDAuNSk7XG4gICAgfVxuICB9XG4gIC54LWxhYmVscyB7XG4gICAgLmxhYmVsIHtcbiAgICAgIHRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgbGluZSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDZuICsgMSksXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgbGluZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY3VydmUtYnRjIHtcbiAgICAuc3Ryb2tlIHtcbiAgICAgIHN0cm9rZTogI2Y2OTExOTtcbiAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICB9XG4gICAgLmZpbGwge1xuICAgICAgZmlsbDogdXJsKCNidGNGaWxsKTtcbiAgICAgIGZpbGwtb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRGFzaGJvYXJkLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})