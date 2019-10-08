webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data() {\n    return {\n\n      dataset: [],\n      labels: {\n        xLabels: [],\n        yLabels: 5,\n        yLabelsTextFormatter: val => \"$\" + Math.round(val * 100) / 100\n      },\n      grid: {\n        verticalLines: true,\n        verticalLinesNumber: 1,\n        horizontalLines: true,\n        horizontalLinesNumber: 1\n      }\n    };\n  },\n  mounted() {\n    this.$http.get(\"https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-01-31\").then(res => {\n      const data = res.data.bpi;\n      for (let key in data) {\n        this.dataset.push(data[key]);\n        this.labels.xLabels.push(__WEBPACK_IMPORTED_MODULE_0_moment___default()(key).format(\"MM/DD\"));\n      }\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/YTY3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUZBO0FBR0E7QUFDQSxtQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQSxPQUhBO0FBUUE7QUFDQSwyQkFEQTtBQUVBLDhCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBO0FBUkE7QUFlQSxHQWpCQTtBQWtCQTtBQUNBLGVBQ0EsR0FEQSxDQUVBLHVGQUZBLEVBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkE7QUFXQTtBQTlCQSIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuPHNlY3Rpb24+XG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNC4zcmVtO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAwcHg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICBQdXJjaGFzZSBPcmRlcnMgIFxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIFwiPlxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBzdHlsZT1cImJvcmRlcjpub25lXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgPHNwYW4+VG9kYXk8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgRHJvcGRvd24gaXRlbVxuICAgICAgPC9hPlxuICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgIE90aGVyIGRyb3Bkb3duIGl0ZW1cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGlzLWFjdGl2ZVwiPlxuICAgICAgICBBY3RpdmUgZHJvcGRvd24gaXRlbVxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgT3RoZXIgZHJvcGRvd24gaXRlbVxuICAgICAgPC9hPlxuICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgV2l0aCBhIGRpdmlkZXJcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiYml0Y29pbi1wcmljZVwiPlxuICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDowOyBoZWlnaHQ6MDsgcG9zaXRpb246YWJzb2x1dGU7XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJidGNGaWxsXCIgeDE9XCIxXCIgeDI9XCIxXCIgeTE9XCIwXCIgeTI9XCIxXCI+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPVwiI2Y2OTExOVwiPjwvc3RvcD5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcC1jb2xvcj1cIiNmZmZmZmZcIj48L3N0b3A+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPHRyZW5kLWNoYXJ0XG4gICAgICB2LWlmPVwiZGF0YXNldC5sZW5ndGhcIlxuICAgICAgOmRhdGFzZXRzPVwiW3tkYXRhOiBkYXRhc2V0LCBmaWxsOiB0cnVlLCBjbGFzc05hbWU6ICdjdXJ2ZS1idGMnfV1cIlxuICAgICAgOmxhYmVscz1cImxhYmVsc1wiXG4gICAgICA6bWluPVwiMFwiXG4gICAgICA6Z3JpZD1cImdyaWRcIlxuICAgIC8+XG4gIDwvZGl2PlxuXG4gIDwvc2VjdGlvbj5cblxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcbiAgICAgIGRhdGFzZXQ6IFtdLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHhMYWJlbHM6IFtdLFxuICAgICAgICB5TGFiZWxzOiA1LFxuICAgICAgICB5TGFiZWxzVGV4dEZvcm1hdHRlcjogdmFsID0+IFwiJFwiICsgTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICB2ZXJ0aWNhbExpbmVzOiB0cnVlLFxuICAgICAgICB2ZXJ0aWNhbExpbmVzTnVtYmVyOiAxLFxuICAgICAgICBob3Jpem9udGFsTGluZXM6IHRydWUsXG4gICAgICAgIGhvcml6b250YWxMaW5lc051bWJlcjogMVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kaHR0cFxuICAgICAgLmdldChcbiAgICAgICAgXCJodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvbj9zdGFydD0yMDE5LTAxLTAxJmVuZD0yMDE5LTAxLTMxXCJcbiAgICAgIClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5icGk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgdGhpcy5kYXRhc2V0LnB1c2goZGF0YVtrZXldKTtcbiAgICAgICAgICB0aGlzLmxhYmVscy54TGFiZWxzLnB1c2gobW9tZW50KGtleSkuZm9ybWF0KFwiTU0vRERcIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5iaXRjb2luLXByaWNlIHtcbiAgLnZ0YyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDY5OXB4KSB7XG4gICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIH1cbiAgfVxuICAuZ3JpZCxcbiAgLmxhYmVscyB7XG4gICAgbGluZSB7XG4gICAgICBzdHJva2U6IHJnYmEoI2Y2OTExOSwgMC41KTtcbiAgICB9XG4gIH1cbiAgLngtbGFiZWxzIHtcbiAgICAubGFiZWwge1xuICAgICAgdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBsaW5lIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoNm4gKyAxKSxcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB0ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBsaW5lIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jdXJ2ZS1idGMge1xuICAgIC5zdHJva2Uge1xuICAgICAgc3Ryb2tlOiAjZjY5MTE5O1xuICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIH1cbiAgICAuZmlsbCB7XG4gICAgICBmaWxsOiB1cmwoI2J0Y0ZpbGwpO1xuICAgICAgZmlsbC1vcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})