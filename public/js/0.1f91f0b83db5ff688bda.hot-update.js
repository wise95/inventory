webpackHotUpdate(0,{

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"bills\",\n  data() {\n    return {\n      msg: '',\n      salesorders: [],\n      meta: '',\n      links: '',\n      page: this.$route.query.page || 1\n    };\n  },\n  mounted() {\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('api/salesorders').then(response => {\n      this.salesorders = response.data.data;\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n\n  methods: {\n\n    sub_total: function (products) {\n      let sum = 0;\n      products.forEach((row, i) => {\n        sum = sum + row.unit_price * row.qty;\n      });\n\n      return sum;\n    },\n\n    calculate_discount: function (so) {\n      if (so.discount_type == 'd') {\n        return Number(so.discount);\n      }\n\n      if (so.discount_type == 'p') {\n        return so.discount / 100 * (Number(this.sub_total(so.products)) + Number(this.sub_total(so.products)) * Number(so.tax_percentage / 100));\n      }\n    },\n\n    total: function (so) {\n      return Number(this.sub_total(so.products)) - Number(this.calculate_discount(so)) + Number(this.sub_total(so.products)) * so.tax_percentage / 100;\n    }\n\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NhbGVzb3JkZXJzL1NhbGVzT3JkZXJzLnZ1ZT85NDVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTs7QUFJQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLHFCQUZBO0FBR0EsY0FIQTtBQUlBLGVBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTtBQVdBOztBQUVBLHlFQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsS0FIQSxFQUlBLEtBSkEsQ0FJQTtBQUNBO0FBQ0EsS0FOQTtBQVNBLEdBdEJBOztBQXdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFFQSxLQVZBOztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBLEtBdEJBOztBQXdCQTtBQUNBO0FBQ0E7O0FBMUJBO0FBeEJBIiwiZmlsZSI6IjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNlY3Rpb24+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG48ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+U2FsZXMgT3JkZXJzIDwvaDI+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAgPGRpdj5cbiAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtc21hbGxcIiA6dG89XCInL3NhbGVzb3JkZXJzL2NyZWF0ZSdcIiA+Q3JlYXRlIE5ldzwvcm91dGVyLWxpbms+XG4gICAgIDwvZGl2PlxuICAgICBcbjwvZGl2PlxuXG48L2Rpdj5cbiAgICAgXG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBEYXRlIDwvdGg+XG4gICAgICAgIDx0aD4gU2FsZXMgT3JkZXIgIzwvdGg+XG4gICAgICAgIDx0aD4gQ3VzdG9tZXIgTmFtZTwvdGg+XG4gICAgICAgIDx0aD4gU3RhdXM8L3RoPlxuICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6NDBweFwiPiBBbW91bnQ8L3RoPlxuXG4gICAgICAgPC90cj5cblxuICAgICAgIDwvdGhlYWQ+XG5cblxuICAgICAgICAgPHRib2R5PlxuXG4gICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihzbywgaW5kZXgpIGluIHNhbGVzb3JkZXJzXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28ub3JkZXJfZGF0ZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL3NhbGVzb3JkZXJzLycrc28uaWQrJy92aWV3J1wiID4ge3tzby5zb251bWJlcn19PC9hPiA8L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28uY3VzdG9tZXIuZmlyc3RuYW1lfX0ge3tzby5jdXN0b21lci5sYXN0bmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5zdGF0dXN9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcIj57e3RvdGFsKHNvKS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgIFxuXG5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgIDwvdGFibGU+XG5cbjwvZGl2PlxuXG4gIFxuPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cbiBleHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOlwiYmlsbHNcIixcbiAgIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtc2c6ICcnLFxuICAgICAgc2FsZXNvcmRlcnM6W10sXG4gICAgICBtZXRhOicnLFxuICAgICAgbGlua3M6JycsXG4gICAgICBwYWdlOiB0aGlzLiRyb3V0ZS5xdWVyeS5wYWdlIHx8IDEsXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcblxuICAgIGF4aW9zLmdldCgnYXBpL3NhbGVzb3JkZXJzJylcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgIHRoaXMuc2FsZXNvcmRlcnMgPSAgcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuXG5cbiAgfSxcblxuICBtZXRob2RzOiB7XG5cbiAgICBzdWJfdG90YWw6ZnVuY3Rpb24ocHJvZHVjdHMpe1xuICAgICAgbGV0IHN1bT0wXG4gICAgICBwcm9kdWN0cy5mb3JFYWNoKChyb3csIGkpPT4ge1xuICAgICAgICBzdW09c3VtKyByb3cudW5pdF9wcmljZSpyb3cucXR5XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gc3VtO1xuXG4gICAgfSxcblxuICAgIGNhbGN1bGF0ZV9kaXNjb3VudDpmdW5jdGlvbihzbyl7XG4gICAgICBpZihzby5kaXNjb3VudF90eXBlPT0nZCcpe1xuICAgICAgICByZXR1cm4gTnVtYmVyKHNvLmRpc2NvdW50KTtcbiAgICAgIH1cblxuICAgICAgaWYoc28uZGlzY291bnRfdHlwZT09J3AnKXtcbiAgICAgICAgcmV0dXJuIHNvLmRpc2NvdW50LzEwMCooIE51bWJlcih0aGlzLnN1Yl90b3RhbChzby5wcm9kdWN0cykpICtOdW1iZXIodGhpcy5zdWJfdG90YWwoc28ucHJvZHVjdHMpKSogTnVtYmVyKHNvLnRheF9wZXJjZW50YWdlLzEwMCkpXG4gICAgICB9XG5cblxuICAgIH0sXG5cbiAgICB0b3RhbDpmdW5jdGlvbihzbyl7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3ViX3RvdGFsKHNvLnByb2R1Y3RzKSkgLSBOdW1iZXIodGhpcy5jYWxjdWxhdGVfZGlzY291bnQoc28pKSArIChOdW1iZXIodGhpcy5zdWJfdG90YWwoc28ucHJvZHVjdHMpKSAqIHNvLnRheF9wZXJjZW50YWdlLzEwMCk7XG4gICAgfVxuXG5cblxuXG5cbiAgfVxuIH1cblxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9zYWxlc29yZGVycy9TYWxlc09yZGVycy52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///59\n");

/***/ })

})