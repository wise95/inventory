webpackHotUpdate(0,{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data() {\n    return {\n\n      xLabelsData: [],\n      datasets: [{\n        data: [70, 100, 400, 180, 100, 300, 500],\n        smooth: true,\n        showPoints: true,\n        fill: true,\n        className: \"curve1\"\n      }, {\n        data: [150, 300, 350, 100, 350, 100, 15],\n        smooth: true,\n        showPoints: true,\n        className: \"curve2\"\n      }, {\n        data: [50, 150, 200, 50, 120, 250, 200],\n        smooth: true,\n        showPoints: true,\n        className: \"curve3\"\n      }],\n      grid: {\n        verticalLines: true,\n        horizontalLines: true\n      },\n      labels: {\n        xLabels: this.xLabelsData,\n        yLabels: 5,\n        yLabelsTextFormatter: val => Math.round(val * 100) / 100\n      },\n      tooltipData: null,\n      popper: null,\n      popperIsActive: false\n    };\n  },\n  mounted() {\n\n    this.initPopper();\n\n    const stat_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('D-MM-DD');\n    const end_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('YYYY-MM-DD');\n\n    var i;\n    for (i = stat_day; i <= end_day; i++) {\n      this.xLabelsData.push(i);\n      console.log(i);\n    }\n\n    this.labels.xLabels = this.xLabelsData;\n  },\n  methods: {\n    initPopper() {\n      const chart = document.querySelector(\".random-chart\");\n      const ref = chart.querySelector(\".active-line\");\n      const tooltip = this.$refs.tooltip;\n      this.popper = new Popper(ref, tooltip, {\n        placement: \"right\",\n        modifiers: {\n          offset: { offset: \"0,10\" },\n          preventOverflow: {\n            boundariesElement: chart\n          }\n        }\n      });\n    },\n    onMouseMove(params) {\n      this.popperIsActive = !!params;\n      this.popper.scheduleUpdate();\n      this.tooltipData = params || null;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9TYWxlc0NoYXJ0LnZ1ZT8zMDBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUZBO0FBR0EsaUJBQ0E7QUFDQSxnREFEQTtBQUVBLG9CQUZBO0FBR0Esd0JBSEE7QUFJQSxrQkFKQTtBQUtBO0FBTEEsT0FEQSxFQVFBO0FBQ0EsZ0RBREE7QUFFQSxvQkFGQTtBQUdBLHdCQUhBO0FBSUE7QUFKQSxPQVJBLEVBY0E7QUFDQSwrQ0FEQTtBQUVBLG9CQUZBO0FBR0Esd0JBSEE7QUFJQTtBQUpBLE9BZEEsQ0FIQTtBQXdCQTtBQUNBLDJCQURBO0FBRUE7QUFGQSxPQXhCQTtBQTRCQTtBQUNBLGlDQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBLE9BNUJBO0FBaUNBLHVCQWpDQTtBQWtDQSxrQkFsQ0E7QUFtQ0E7QUFuQ0E7QUFxQ0EsR0F2Q0E7QUF3Q0E7O0FBRUE7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBR0EsR0F6REE7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBLG9DQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFGQTtBQVNBLEtBZEE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBMURBIiwiZmlsZSI6IjQxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuPHNlY3Rpb24+XG5cbiBcblxuICA8ZGl2IGNsYXNzPVwiYml0Y29pbi1wcmljZVwiPlxuXG4gXG5cbiAgICA8dHJlbmQtY2hhcnQgOmRhdGFzZXRzPVwiZGF0YXNldHNcIiA6Z3JpZD1cImdyaWRcIiA6bGFiZWxzPVwibGFiZWxzXCIgOm1pbj1cIjBcIiA6aW50ZXJhY3RpdmU9XCJ0cnVlXCIgQG1vdXNlTW92ZT1cIm9uTW91c2VNb3ZlXCIgY2xhc3M9XCJyYW5kb20tY2hhcnRcIj48L3RyZW5kLWNoYXJ0PlxuXG5cbiAgICA8ZGl2IGlkPVwicG9wXCIgcm9sZT1cInRvb2x0aXBcIiByZWY9XCJ0b29sdGlwXCIgY2xhc3M9XCJ0b29sdGlwXCIgOmNsYXNzPVwieydpcy1hY3RpdmUnOiB0b29sdGlwRGF0YX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWNvbnRhaW5lclwiIHYtaWY9XCJ0b29sdGlwRGF0YVwiPlxuICAgICAgICA8c3Ryb25nPnt7bGFiZWxzLnhMYWJlbHNbdG9vbHRpcERhdGEuaW5kZXhdfX08L3N0cm9uZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtZGF0YVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWRhdGEtaXRlbSB0b29sdGlwLWRhdGEtaXRlbS0tMVwiPnt7dG9vbHRpcERhdGEuZGF0YVswXX19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtZGF0YS1pdGVtIHRvb2x0aXAtZGF0YS1pdGVtLS0yXCI+e3t0b29sdGlwRGF0YS5kYXRhWzFdfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1kYXRhLWl0ZW0gdG9vbHRpcC1kYXRhLWl0ZW0tLTNcIj57e3Rvb2x0aXBEYXRhLmRhdGFbMl19fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cblxuICA8L2Rpdj5cblxuICA8L3NlY3Rpb24+XG5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIHhMYWJlbHNEYXRhOltdLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IFs3MCwgMTAwLCA0MDAsIDE4MCwgMTAwLCAzMDAsIDUwMF0sXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgIHNob3dQb2ludHM6IHRydWUsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3VydmUxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IFsxNTAsIDMwMCwgMzUwLCAxMDAsIDM1MCwgMTAwLCAxNV0sXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgIHNob3dQb2ludHM6IHRydWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImN1cnZlMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBbNTAsIDE1MCwgMjAwLCA1MCwgMTIwLCAyNTAsIDIwMF0sXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgIHNob3dQb2ludHM6IHRydWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImN1cnZlM1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIHZlcnRpY2FsTGluZXM6IHRydWUsXG4gICAgICAgIGhvcml6b250YWxMaW5lczogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICB4TGFiZWxzOiB0aGlzLnhMYWJlbHNEYXRhLFxuICAgICAgICB5TGFiZWxzOiA1LFxuICAgICAgICB5TGFiZWxzVGV4dEZvcm1hdHRlcjogdmFsID0+IE1hdGgucm91bmQodmFsICogMTAwKSAvIDEwMFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBEYXRhOiBudWxsLFxuICAgICAgcG9wcGVyOiBudWxsLFxuICAgICAgcG9wcGVySXNBY3RpdmU6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcblxuICAgIHRoaXMuaW5pdFBvcHBlcigpO1xuXG5cbiAgIGNvbnN0IHN0YXRfZGF5ID0gbW9tZW50KCkuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoJ0QtTU0tREQnKVxuICAgY29uc3QgZW5kX2RheSA9IG1vbWVudCgpLmVuZE9mKCdtb250aCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgIHZhciBpO1xuICAgZm9yIChpID0gc3RhdF9kYXk7IGkgPD1lbmRfZGF5OyBpKyspIHtcbiAgICB0aGlzLnhMYWJlbHNEYXRhLnB1c2goaSlcbiAgICBjb25zb2xlLmxvZyhpKVxuICAgfVxuXG4gICB0aGlzLmxhYmVscy54TGFiZWxzID0gdGhpcy54TGFiZWxzRGF0YVxuICAgIFxuICBcbiAgfSxcbiAgIG1ldGhvZHM6IHtcbiAgICBpbml0UG9wcGVyKCkge1xuICAgICAgY29uc3QgY2hhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1jaGFydFwiKTtcbiAgICAgIGNvbnN0IHJlZiA9IGNoYXJ0LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLWxpbmVcIik7XG4gICAgICBjb25zdCB0b29sdGlwID0gdGhpcy4kcmVmcy50b29sdGlwO1xuICAgICAgdGhpcy5wb3BwZXIgPSBuZXcgUG9wcGVyKHJlZiwgdG9vbHRpcCwge1xuICAgICAgICBwbGFjZW1lbnQ6IFwicmlnaHRcIixcbiAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgb2Zmc2V0OiB7IG9mZnNldDogXCIwLDEwXCIgfSxcbiAgICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiBjaGFydFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbk1vdXNlTW92ZShwYXJhbXMpIHtcbiAgICAgIHRoaXMucG9wcGVySXNBY3RpdmUgPSAhIXBhcmFtcztcbiAgICAgIHRoaXMucG9wcGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICB0aGlzLnRvb2x0aXBEYXRhID0gcGFyYW1zIHx8IG51bGw7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmJpdGNvaW4tcHJpY2Uge1xuICAudnRjIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjk5cHgpIHtcbiAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgfVxuICB9XG4gIC5ncmlkLFxuICAubGFiZWxzIHtcbiAgICBsaW5lIHtcbiAgICAgIHN0cm9rZTogcmdiYSgjZjY5MTE5LCAwLjUpO1xuICAgIH1cbiAgfVxuICAueC1sYWJlbHMge1xuICAgIC5sYWJlbCB7XG4gICAgICB0ZXh0IHtcbiAgICAgICAgZGlzcGxheTogdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGxpbmUge1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCg2biArIDEpLFxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGxpbmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmN1cnZlLWJ0YyB7XG4gICAgLnN0cm9rZSB7XG4gICAgICBzdHJva2U6ICNmNjkxMTk7XG4gICAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgfVxuICAgIC5maWxsIHtcbiAgICAgIGZpbGw6IHVybCgjYnRjRmlsbCk7XG4gICAgICBmaWxsLW9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAgIC50b29sdGlwIHtcbiAgICAmOm5vdCguaXMtYWN0aXZlKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJi1kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAmLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi0tMTpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmFjOTE7XG4gICAgICAgIH1cbiAgICAgICAgJi0tMjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmUxYjY7XG4gICAgICAgIH1cbiAgICAgICAgJi0tMzpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM3ZmRmZDQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvU2FsZXNDaGFydC52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///415\n");

/***/ })

})