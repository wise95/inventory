webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data() {\n    return {\n      dataset: [],\n      labels: {\n        xLabels: [],\n        yLabels: 5,\n        yLabelsTextFormatter: val => \"$\" + Math.round(val * 100) / 100\n      },\n      grid: {\n        verticalLines: true,\n        verticalLinesNumber: 1,\n        horizontalLines: true,\n        horizontalLinesNumber: 1\n      }\n    };\n  },\n  mounted() {\n    this.$http.get(\"https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-01-31\").then(res => {\n      const data = res.data.bpi;\n      for (let key in data) {\n        this.dataset.push(data[key]);\n        this.labels.xLabels.push(__WEBPACK_IMPORTED_MODULE_0_moment___default()(key).format(\"MM/DD\"));\n      }\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/YTY3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQSxtQkFEQTtBQUVBLGtCQUZBO0FBR0E7QUFIQSxPQUZBO0FBT0E7QUFDQSwyQkFEQTtBQUVBLDhCQUZBO0FBR0EsNkJBSEE7QUFJQTtBQUpBO0FBUEE7QUFjQSxHQWhCQTtBQWlCQTtBQUNBLGVBQ0EsR0FEQSxDQUVBLHVGQUZBLEVBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkE7QUFXQTtBQTdCQSIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuPGRpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC00LjNyZW07XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDBweDtcIj5cbiAgICAgICAgeHh4XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImJpdGNvaW4tcHJpY2VcIj5cbiAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MDsgaGVpZ2h0OjA7IHBvc2l0aW9uOmFic29sdXRlO1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiYnRjRmlsbFwiIHgxPVwiMVwiIHgyPVwiMVwiIHkxPVwiMFwiIHkyPVwiMVwiPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcC1jb2xvcj1cIiNmNjkxMTlcIj48L3N0b3A+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3AtY29sb3I9XCIjZmZmZmZmXCI+PC9zdG9wPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICAgIDx0cmVuZC1jaGFydFxuICAgICAgdi1pZj1cImRhdGFzZXQubGVuZ3RoXCJcbiAgICAgIDpkYXRhc2V0cz1cIlt7ZGF0YTogZGF0YXNldCwgZmlsbDogdHJ1ZSwgY2xhc3NOYW1lOiAnY3VydmUtYnRjJ31dXCJcbiAgICAgIDpsYWJlbHM9XCJsYWJlbHNcIlxuICAgICAgOm1pbj1cIjBcIlxuICAgICAgOmdyaWQ9XCJncmlkXCJcbiAgICAvPlxuICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuICBcbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFzZXQ6IFtdLFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHhMYWJlbHM6IFtdLFxuICAgICAgICB5TGFiZWxzOiA1LFxuICAgICAgICB5TGFiZWxzVGV4dEZvcm1hdHRlcjogdmFsID0+IFwiJFwiICsgTWF0aC5yb3VuZCh2YWwgKiAxMDApIC8gMTAwXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICB2ZXJ0aWNhbExpbmVzOiB0cnVlLFxuICAgICAgICB2ZXJ0aWNhbExpbmVzTnVtYmVyOiAxLFxuICAgICAgICBob3Jpem9udGFsTGluZXM6IHRydWUsXG4gICAgICAgIGhvcml6b250YWxMaW5lc051bWJlcjogMVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kaHR0cFxuICAgICAgLmdldChcbiAgICAgICAgXCJodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2hpc3RvcmljYWwvY2xvc2UuanNvbj9zdGFydD0yMDE5LTAxLTAxJmVuZD0yMDE5LTAxLTMxXCJcbiAgICAgIClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5icGk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgdGhpcy5kYXRhc2V0LnB1c2goZGF0YVtrZXldKTtcbiAgICAgICAgICB0aGlzLmxhYmVscy54TGFiZWxzLnB1c2gobW9tZW50KGtleSkuZm9ybWF0KFwiTU0vRERcIikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5iaXRjb2luLXByaWNlIHtcbiAgLnZ0YyB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDY5OXB4KSB7XG4gICAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIH1cbiAgfVxuICAuZ3JpZCxcbiAgLmxhYmVscyB7XG4gICAgbGluZSB7XG4gICAgICBzdHJva2U6IHJnYmEoI2Y2OTExOSwgMC41KTtcbiAgICB9XG4gIH1cbiAgLngtbGFiZWxzIHtcbiAgICAubGFiZWwge1xuICAgICAgdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBsaW5lIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoNm4gKyAxKSxcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICB0ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBsaW5lIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jdXJ2ZS1idGMge1xuICAgIC5zdHJva2Uge1xuICAgICAgc3Ryb2tlOiAjZjY5MTE5O1xuICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIH1cbiAgICAuZmlsbCB7XG4gICAgICBmaWxsOiB1cmwoI2J0Y0ZpbGwpO1xuICAgICAgZmlsbC1vcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9EYXNoYm9hcmQudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})