webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  data() {\n    return {\n      purchase_order_menu: false,\n      dataset: [],\n      labels: {\n        xLabels: [],\n        yLabels: 5,\n        yLabelsTextFormatter: val => \"$\" + Math.round(val * 100) / 100\n      },\n      grid: {\n        verticalLines: true,\n        verticalLinesNumber: 1,\n        horizontalLines: true,\n        horizontalLinesNumber: 1\n      }\n    };\n  },\n  mounted() {\n    this.$http.get(\"https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-01-31\").then(res => {\n      const data = res.data.bpi;\n      for (let key in data) {\n        this.dataset.push(data[key]);\n        this.labels.xLabels.push(__WEBPACK_IMPORTED_MODULE_0_moment___default()(key).format(\"MM/DD\"));\n      }\n    });\n  },\n  methods: {\n    show_purchaseorder_dd: function () {}\n\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/YTY3NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxpQkFGQTtBQUdBO0FBQ0EsbUJBREE7QUFFQSxrQkFGQTtBQUdBO0FBSEEsT0FIQTtBQVFBO0FBQ0EsMkJBREE7QUFFQSw4QkFGQTtBQUdBLDZCQUhBO0FBSUE7QUFKQTtBQVJBO0FBZUEsR0FqQkE7QUFrQkE7QUFDQSxlQUNBLEdBREEsQ0FFQSx1RkFGQSxFQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBO0FBV0EsR0E5QkE7QUErQkE7QUFDQSx3Q0FFQTs7QUFIQTtBQS9CQSIsImZpbGUiOiI5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuPHNlY3Rpb24+XG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNC4zcmVtO1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAwcHg7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICBQdXJjaGFzZSBPcmRlcnMgIFxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIFwiPlxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tdHJpZ2dlclwiPlxuICAgIDxidXR0b24gQGNsaWNrPVwic2hvd19wdXJjaGFzZW9yZGVyX2RkXCIgY2xhc3M9XCJidXR0b25cIiBzdHlsZT1cImJvcmRlcjpub25lXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgPHNwYW4+VG9kYXk8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgRHJvcGRvd24gaXRlbVxuICAgICAgPC9hPlxuICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgIE90aGVyIGRyb3Bkb3duIGl0ZW1cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGlzLWFjdGl2ZVwiPlxuICAgICAgICBBY3RpdmUgZHJvcGRvd24gaXRlbVxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgT3RoZXIgZHJvcGRvd24gaXRlbVxuICAgICAgPC9hPlxuICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPlxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgV2l0aCBhIGRpdmlkZXJcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiYml0Y29pbi1wcmljZVwiPlxuICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDowOyBoZWlnaHQ6MDsgcG9zaXRpb246YWJzb2x1dGU7XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9XCJidGNGaWxsXCIgeDE9XCIxXCIgeDI9XCIxXCIgeTE9XCIwXCIgeTI9XCIxXCI+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPVwiI2Y2OTExOVwiPjwvc3RvcD5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxMDAlXCIgc3RvcC1jb2xvcj1cIiNmZmZmZmZcIj48L3N0b3A+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPHRyZW5kLWNoYXJ0XG4gICAgICB2LWlmPVwiZGF0YXNldC5sZW5ndGhcIlxuICAgICAgOmRhdGFzZXRzPVwiW3tkYXRhOiBkYXRhc2V0LCBmaWxsOiB0cnVlLCBjbGFzc05hbWU6ICdjdXJ2ZS1idGMnfV1cIlxuICAgICAgOmxhYmVscz1cImxhYmVsc1wiXG4gICAgICA6bWluPVwiMFwiXG4gICAgICA6Z3JpZD1cImdyaWRcIlxuICAgIC8+XG4gIDwvZGl2PlxuXG4gIDwvc2VjdGlvbj5cblxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwdXJjaGFzZV9vcmRlcl9tZW51OmZhbHNlLFxuICAgICAgZGF0YXNldDogW10sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgeExhYmVsczogW10sXG4gICAgICAgIHlMYWJlbHM6IDUsXG4gICAgICAgIHlMYWJlbHNUZXh0Rm9ybWF0dGVyOiB2YWwgPT4gXCIkXCIgKyBNYXRoLnJvdW5kKHZhbCAqIDEwMCkgLyAxMDBcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIHZlcnRpY2FsTGluZXM6IHRydWUsXG4gICAgICAgIHZlcnRpY2FsTGluZXNOdW1iZXI6IDEsXG4gICAgICAgIGhvcml6b250YWxMaW5lczogdHJ1ZSxcbiAgICAgICAgaG9yaXpvbnRhbExpbmVzTnVtYmVyOiAxXG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRodHRwXG4gICAgICAuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uP3N0YXJ0PTIwMTktMDEtMDEmZW5kPTIwMTktMDEtMzFcIlxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmJwaTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICB0aGlzLmRhdGFzZXQucHVzaChkYXRhW2tleV0pO1xuICAgICAgICAgIHRoaXMubGFiZWxzLnhMYWJlbHMucHVzaChtb21lbnQoa2V5KS5mb3JtYXQoXCJNTS9ERFwiKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG5zaG93X3B1cmNoYXNlb3JkZXJfZGQ6ZnVuY3Rpb24oKXtcblxuICAgIH1cblxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmJpdGNvaW4tcHJpY2Uge1xuICAudnRjIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjk5cHgpIHtcbiAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgfVxuICB9XG4gIC5ncmlkLFxuICAubGFiZWxzIHtcbiAgICBsaW5lIHtcbiAgICAgIHN0cm9rZTogcmdiYSgjZjY5MTE5LCAwLjUpO1xuICAgIH1cbiAgfVxuICAueC1sYWJlbHMge1xuICAgIC5sYWJlbCB7XG4gICAgICB0ZXh0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIGxpbmUge1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCg2biArIDEpLFxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGxpbmUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmN1cnZlLWJ0YyB7XG4gICAgLnN0cm9rZSB7XG4gICAgICBzdHJva2U6ICNmNjkxMTk7XG4gICAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgfVxuICAgIC5maWxsIHtcbiAgICAgIGZpbGw6IHVybCgjYnRjRmlsbCk7XG4gICAgICBmaWxsLW9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})