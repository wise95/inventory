webpackHotUpdate(0,{

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"bills\",\n  data() {\n    return {\n      msg: '',\n      salesorders: [],\n      meta: '',\n      links: '',\n      page: this.$route.query.page || 1\n    };\n  },\n  mounted() {\n\n    // clear query_param\n    this.$store.commit('setQueryParam', null);\n\n    //this.$store.dispatch('getProducts')\n\n    this.$store.dispatch('getPurchaseOrders', { page: this.page }).then(response => {\n      this.salesorders = response.data.data;\n      this.links = response.data.links;\n      this.meta = response.data.meta;\n    });\n  },\n\n  methods: {\n\n    sub_total: function (products) {\n      let sum = 0;\n      products.forEach((row, i) => {\n        sum = sum + row.unit_price * row.qty;\n      });\n\n      return sum;\n    },\n\n    calculate_discount: function (so) {\n      if (so.discount_type == 'd') {\n        return Number(so.discount);\n      }\n\n      if (so.discount_type == 'p') {\n        return so.discount / 100 * (Number(this.sub_total(so.products)) + Number(this.sub_total(so.products)) * Number(so.tax_percentage / 100));\n      }\n    },\n\n    total: function (so) {\n      return Number(this.sub_total(so.products)) - Number(this.calculate_discount(so)) + Number(this.sub_total(so.products)) * so.tax_percentage / 100;\n    }\n\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NhbGVzb3JkZXJzL1NhbGVzT3JkZXJzLnZ1ZT85NDVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTs7QUFJQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0EsYUFEQTtBQUVBLHFCQUZBO0FBR0EsY0FIQTtBQUlBLGVBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTtBQVdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUVBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU9BLEdBekJBOztBQTJCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFFQSxLQVZBOztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUdBLEtBdEJBOztBQXdCQTtBQUNBO0FBQ0E7O0FBMUJBO0FBM0JBIiwiZmlsZSI6IjU5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNlY3Rpb24+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG48ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+U2FsZXMgT3JkZXJzIDwvaDI+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAgPGRpdj5cbiAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtc21hbGxcIiA6dG89XCInL3NhbGVzb3JkZXJzL2NyZWF0ZSdcIiA+Q3JlYXRlIE5ldzwvcm91dGVyLWxpbms+XG4gICAgIDwvZGl2PlxuICAgICBcbjwvZGl2PlxuXG48L2Rpdj5cbiAgICAgXG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBEYXRlIDwvdGg+XG4gICAgICAgIDx0aD4gU2FsZXMgT3JkZXIgIzwvdGg+XG4gICAgICAgIDx0aD4gQ3VzdG9tZXIgTmFtZTwvdGg+XG4gICAgICAgIDx0aD4gU3RhdXM8L3RoPlxuICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6NDBweFwiPiBBbW91bnQ8L3RoPlxuXG4gICAgICAgPC90cj5cblxuICAgICAgIDwvdGhlYWQ+XG5cblxuICAgICAgICAgPHRib2R5PlxuXG4gICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihzbywgaW5kZXgpIGluIHNhbGVzb3JkZXJzXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28ub3JkZXJfZGF0ZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL3NhbGVzb3JkZXJzLycrc28uaWQrJy92aWV3J1wiID4ge3tzby5zb251bWJlcn19PC9hPiA8L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28uY3VzdG9tZXIuZmlyc3RuYW1lfX0ge3tzby5jdXN0b21lci5sYXN0bmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5zdGF0dXN9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcIj57e3RvdGFsKHNvKS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgIFxuXG5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgIDwvdGFibGU+XG5cbjwvZGl2PlxuXG4gIFxuPC9zZWN0aW9uPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cbiBleHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOlwiYmlsbHNcIixcbiAgIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtc2c6ICcnLFxuICAgICAgc2FsZXNvcmRlcnM6W10sXG4gICAgICBtZXRhOicnLFxuICAgICAgbGlua3M6JycsXG4gICAgICBwYWdlOiB0aGlzLiRyb3V0ZS5xdWVyeS5wYWdlIHx8IDEsXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcblxuICAvLyBjbGVhciBxdWVyeV9wYXJhbVxuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UXVlcnlQYXJhbScsbnVsbClcblxuICAgIC8vdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFByb2R1Y3RzJylcblxuICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0UHVyY2hhc2VPcmRlcnMnLHtwYWdlOnRoaXMucGFnZX0pXG4gICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgIHRoaXMuc2FsZXNvcmRlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgdGhpcy5saW5rcyA9IHJlc3BvbnNlLmRhdGEubGlua3M7XG4gICAgICAgICAgICAgdGhpcy5tZXRhID0gcmVzcG9uc2UuZGF0YS5tZXRhO1xuICAgICAgfSlcblxuICB9LFxuXG4gIG1ldGhvZHM6IHtcblxuICAgIHN1Yl90b3RhbDpmdW5jdGlvbihwcm9kdWN0cyl7XG4gICAgICBsZXQgc3VtPTBcbiAgICAgIHByb2R1Y3RzLmZvckVhY2goKHJvdywgaSk9PiB7XG4gICAgICAgIHN1bT1zdW0rIHJvdy51bml0X3ByaWNlKnJvdy5xdHlcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBzdW07XG5cbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlX2Rpc2NvdW50OmZ1bmN0aW9uKHNvKXtcbiAgICAgIGlmKHNvLmRpc2NvdW50X3R5cGU9PSdkJyl7XG4gICAgICAgIHJldHVybiBOdW1iZXIoc28uZGlzY291bnQpO1xuICAgICAgfVxuXG4gICAgICBpZihzby5kaXNjb3VudF90eXBlPT0ncCcpe1xuICAgICAgICByZXR1cm4gc28uZGlzY291bnQvMTAwKiggTnVtYmVyKHRoaXMuc3ViX3RvdGFsKHNvLnByb2R1Y3RzKSkgK051bWJlcih0aGlzLnN1Yl90b3RhbChzby5wcm9kdWN0cykpKiBOdW1iZXIoc28udGF4X3BlcmNlbnRhZ2UvMTAwKSlcbiAgICAgIH1cblxuXG4gICAgfSxcblxuICAgIHRvdGFsOmZ1bmN0aW9uKHNvKXtcbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy5zdWJfdG90YWwoc28ucHJvZHVjdHMpKSAtIE51bWJlcih0aGlzLmNhbGN1bGF0ZV9kaXNjb3VudChzbykpICsgKE51bWJlcih0aGlzLnN1Yl90b3RhbChzby5wcm9kdWN0cykpICogc28udGF4X3BlcmNlbnRhZ2UvMTAwKTtcbiAgICB9XG5cblxuXG5cblxuICB9XG4gfVxuXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NhbGVzb3JkZXJzL1NhbGVzT3JkZXJzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///59\n");

/***/ })

})