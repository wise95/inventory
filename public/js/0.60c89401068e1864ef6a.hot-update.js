webpackHotUpdate(0,{

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"customers\",\n  data() {\n    return {\n      msg: '',\n      customers: []\n    };\n  },\n  mounted() {\n\n    // clear query_param\n    this.$store.commit('setQueryParam', null);\n\n    //this.$store.dispatch('getProducts')\n\n    this.$store.dispatch('get', { page: this.page }).then(response => {\n      this.payments = response.data.data;\n      this.links = response.data.links;\n      this.meta = response.data.meta;\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2N1c3RvbWVycy9DdXN0b21lcnMudnVlP2U1MDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUNBO0FBQ0EsYUFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBO0FBUUE7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQSxxREFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBO0FBUUE7QUF4QkEiLCJmaWxlIjoiNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxkaXY+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG48ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+Q3VzdG9tZXJzIDwvaDI+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAgPGRpdj5cbiAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtc21hbGxcIiA6dG89XCInL2N1c3RvbWVycy9jcmVhdGUnXCIgPkNyZWF0ZSBOZXc8L3JvdXRlci1saW5rPlxuICAgICA8L2Rpdj5cbiAgICAgXG48L2Rpdj5cblxuPC9kaXY+XG4gICAgIFxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7XCI+XG5cbiAgIFxuXG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgXG4gICAgICAgIDx0aD4gTmFtZTwvdGg+XG4gICAgICAgIDx0aD4gRW1haWw8L3RoPlxuICAgICAgICA8dGg+IFBob25lPC90aD5cbiAgICAgICAgPHRoPiBSZWNlaXZhYmxlPC90aD5cbiAgICAgICBcblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihjdXN0b21lciwgaW5kZXgpIGluIGN1c3RvbWVyc1wiPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL2N1c3RvbWVycy8nK2N1c3RvbWVyLmlkKycvdmlldydcIiA+e3tjdXN0b21lci5maXJzdG5hbWV9fSB7e2N1c3RvbWVyLmxhc3RuYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXIuZW1haWx9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyLnBob25lfX0gIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiA8L3RkPlxuXG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgXG5cblxuICAgICAgICAgPC90Ym9keT5cbiAgICAgPC90YWJsZT5cblxuPC9kaXY+XG5cbjwvZGl2PiAgXG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4gZXhwb3J0IGRlZmF1bHQge1xuICAgbmFtZTpcImN1c3RvbWVyc1wiLFxuICAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICBjdXN0b21lcnM6W11cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuXG4gICBcbiAgICAgLy8gY2xlYXIgcXVlcnlfcGFyYW1cbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFF1ZXJ5UGFyYW0nLG51bGwpXG5cbiAgICAvL3RoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRQcm9kdWN0cycpXG5cbiAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldCcse3BhZ2U6dGhpcy5wYWdlfSlcbiAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgdGhpcy5wYXltZW50cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICB0aGlzLmxpbmtzID0gcmVzcG9uc2UuZGF0YS5saW5rcztcbiAgICAgICAgICAgICB0aGlzLm1ldGEgPSByZXNwb25zZS5kYXRhLm1ldGE7XG4gICAgICAgICB9KVxuXG5cbiAgfVxuIH1cblxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jdXN0b21lcnMvQ3VzdG9tZXJzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///73\n");

/***/ })

})