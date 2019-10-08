webpackHotUpdate(0,{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data() {\n    return {\n      datasets: [{\n        data: [70, 100, 400, 180, 100, 300, 500],\n        smooth: true,\n        showPoints: true,\n        fill: true,\n        className: \"curve1\"\n      }, {\n        data: [150, 300, 350, 100, 350, 100, 15],\n        smooth: true,\n        showPoints: true,\n        className: \"curve2\"\n      }, {\n        data: [50, 150, 200, 50, 120, 250, 200],\n        smooth: true,\n        showPoints: true,\n        className: \"curve3\"\n      }],\n      grid: {\n        verticalLines: true,\n        horizontalLines: true\n      },\n      labels: {\n        xLabels: [\"Mon Oct\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"],\n        yLabels: 5,\n        yLabelsTextFormatter: val => Math.round(val * 100) / 100\n      },\n      tooltipData: null,\n      popper: null,\n      popperIsActive: false\n    };\n  },\n  mounted() {\n\n    this.initPopper();\n\n    const from_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('YYYY-MM-DD');\n    const to_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('YYYY-MM-DD');\n  },\n  methods: {\n    initPopper() {\n      const chart = document.querySelector(\".random-chart\");\n      const ref = chart.querySelector(\".active-line\");\n      const tooltip = this.$refs.tooltip;\n      this.popper = new Popper(ref, tooltip, {\n        placement: \"right\",\n        modifiers: {\n          offset: { offset: \"0,10\" },\n          preventOverflow: {\n            boundariesElement: chart\n          }\n        }\n      });\n    },\n    onMouseMove(params) {\n      this.popperIsActive = !!params;\n      this.popper.scheduleUpdate();\n      this.tooltipData = params || null;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9TYWxlc0NoYXJ0LnZ1ZT8zMDBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQ0E7QUFDQSxnREFEQTtBQUVBLG9CQUZBO0FBR0Esd0JBSEE7QUFJQSxrQkFKQTtBQUtBO0FBTEEsT0FEQSxFQVFBO0FBQ0EsZ0RBREE7QUFFQSxvQkFGQTtBQUdBLHdCQUhBO0FBSUE7QUFKQSxPQVJBLEVBY0E7QUFDQSwrQ0FEQTtBQUVBLG9CQUZBO0FBR0Esd0JBSEE7QUFJQTtBQUpBLE9BZEEsQ0FEQTtBQXNCQTtBQUNBLDJCQURBO0FBRUE7QUFGQSxPQXRCQTtBQTBCQTtBQUNBLHNFQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBLE9BMUJBO0FBK0JBLHVCQS9CQTtBQWdDQSxrQkFoQ0E7QUFpQ0E7QUFqQ0E7QUFtQ0EsR0FyQ0E7QUFzQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUtBLEdBakRBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQSxvQ0FEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBRkE7QUFTQSxLQWRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQWxEQSIsImZpbGUiOiI0MTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxzZWN0aW9uPlxuXG4gXG5cbiAgPGRpdiBjbGFzcz1cImJpdGNvaW4tcHJpY2VcIj5cblxuIFxuXG4gICAgPHRyZW5kLWNoYXJ0IDpkYXRhc2V0cz1cImRhdGFzZXRzXCIgOmdyaWQ9XCJncmlkXCIgOmxhYmVscz1cImxhYmVsc1wiIDptaW49XCIwXCIgOmludGVyYWN0aXZlPVwidHJ1ZVwiIEBtb3VzZU1vdmU9XCJvbk1vdXNlTW92ZVwiIGNsYXNzPVwicmFuZG9tLWNoYXJ0XCI+PC90cmVuZC1jaGFydD5cblxuXG4gICAgPGRpdiBpZD1cInBvcFwiIHJvbGU9XCJ0b29sdGlwXCIgcmVmPVwidG9vbHRpcFwiIGNsYXNzPVwidG9vbHRpcFwiIDpjbGFzcz1cInsnaXMtYWN0aXZlJzogdG9vbHRpcERhdGF9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1jb250YWluZXJcIiB2LWlmPVwidG9vbHRpcERhdGFcIj5cbiAgICAgICAgPHN0cm9uZz57e2xhYmVscy54TGFiZWxzW3Rvb2x0aXBEYXRhLmluZGV4XX19PC9zdHJvbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWRhdGFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1kYXRhLWl0ZW0gdG9vbHRpcC1kYXRhLWl0ZW0tLTFcIj57e3Rvb2x0aXBEYXRhLmRhdGFbMF19fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWRhdGEtaXRlbSB0b29sdGlwLWRhdGEtaXRlbS0tMlwiPnt7dG9vbHRpcERhdGEuZGF0YVsxXX19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtZGF0YS1pdGVtIHRvb2x0aXAtZGF0YS1pdGVtLS0zXCI+e3t0b29sdGlwRGF0YS5kYXRhWzJdfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG5cbiAgPC9kaXY+XG5cbiAgPC9zZWN0aW9uPlxuXG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IFs3MCwgMTAwLCA0MDAsIDE4MCwgMTAwLCAzMDAsIDUwMF0sXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgIHNob3dQb2ludHM6IHRydWUsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3VydmUxXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IFsxNTAsIDMwMCwgMzUwLCAxMDAsIDM1MCwgMTAwLCAxNV0sXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgIHNob3dQb2ludHM6IHRydWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImN1cnZlMlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBbNTAsIDE1MCwgMjAwLCA1MCwgMTIwLCAyNTAsIDIwMF0sXG4gICAgICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgICAgIHNob3dQb2ludHM6IHRydWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcImN1cnZlM1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIHZlcnRpY2FsTGluZXM6IHRydWUsXG4gICAgICAgIGhvcml6b250YWxMaW5lczogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICB4TGFiZWxzOiBbXCJNb24gT2N0XCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdLFxuICAgICAgICB5TGFiZWxzOiA1LFxuICAgICAgICB5TGFiZWxzVGV4dEZvcm1hdHRlcjogdmFsID0+IE1hdGgucm91bmQodmFsICogMTAwKSAvIDEwMFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXBEYXRhOiBudWxsLFxuICAgICAgcG9wcGVyOiBudWxsLFxuICAgICAgcG9wcGVySXNBY3RpdmU6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcblxuICAgIHRoaXMuaW5pdFBvcHBlcigpO1xuXG5cbiAgIGNvbnN0IGZyb21fZGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgICAgICAgICBjb25zdCB0b19kYXRlID0gbW9tZW50KCkuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuXG4gICAgXG4gIFxuICB9LFxuICAgbWV0aG9kczoge1xuICAgIGluaXRQb3BwZXIoKSB7XG4gICAgICBjb25zdCBjaGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tLWNoYXJ0XCIpO1xuICAgICAgY29uc3QgcmVmID0gY2hhcnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtbGluZVwiKTtcbiAgICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLiRyZWZzLnRvb2x0aXA7XG4gICAgICB0aGlzLnBvcHBlciA9IG5ldyBQb3BwZXIocmVmLCB0b29sdGlwLCB7XG4gICAgICAgIHBsYWNlbWVudDogXCJyaWdodFwiLFxuICAgICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHsgb2Zmc2V0OiBcIjAsMTBcIiB9LFxuICAgICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IGNoYXJ0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uTW91c2VNb3ZlKHBhcmFtcykge1xuICAgICAgdGhpcy5wb3BwZXJJc0FjdGl2ZSA9ICEhcGFyYW1zO1xuICAgICAgdGhpcy5wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgIHRoaXMudG9vbHRpcERhdGEgPSBwYXJhbXMgfHwgbnVsbDtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uYml0Y29pbi1wcmljZSB7XG4gIC52dGMge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2OTlweCkge1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG4gIH1cbiAgLmdyaWQsXG4gIC5sYWJlbHMge1xuICAgIGxpbmUge1xuICAgICAgc3Ryb2tlOiByZ2JhKCNmNjkxMTksIDAuNSk7XG4gICAgfVxuICB9XG4gIC54LWxhYmVscyB7XG4gICAgLmxhYmVsIHtcbiAgICAgIHRleHQge1xuICAgICAgICBkaXNwbGF5OiB0cnVlO1xuICAgICAgfVxuICAgICAgbGluZSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDZuICsgMSksXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgbGluZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY3VydmUtYnRjIHtcbiAgICAuc3Ryb2tlIHtcbiAgICAgIHN0cm9rZTogI2Y2OTExOTtcbiAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICB9XG4gICAgLmZpbGwge1xuICAgICAgZmlsbDogdXJsKCNidGNGaWxsKTtcbiAgICAgIGZpbGwtb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gICAgLnRvb2x0aXAge1xuICAgICY6bm90KC5pcy1hY3RpdmUpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAmLWRhdGEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICYtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAmLS0xOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZiYWM5MTtcbiAgICAgICAgfVxuICAgICAgICAmLS0yOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZiZTFiNjtcbiAgICAgICAgfVxuICAgICAgICAmLS0zOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzdmZGZkNDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9TYWxlc0NoYXJ0LnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///415\n");

/***/ })

})