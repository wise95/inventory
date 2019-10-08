webpackHotUpdate(0,{

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"vendors\",\n  data() {\n    return {\n      msg: '',\n      vendors: []\n    };\n  },\n  mounted() {\n\n    // clear query_param\n    this.$store.commit('setQueryParam', null);\n\n    //this.$store.dispatch('getProducts')\n\n    this.$store.dispatch('getCustomers', { page: this.page }).then(response => {\n      this.customers = response.data.data;\n      this.links = response.data.links;\n      this.meta = response.data.meta;\n    });\n  },\n  methods: {\n\n    paginationClick: function ($event) {\n      if ($event.target.id <= this.meta.last_page) {\n        //alert($vent.target.id)\n\n        this.$store.dispatch('getVendors', { page: $event.target.id }).then(response => {\n          this.vendors = response.data.data;\n          this.links = response.data.links;\n          this.meta = response.data.meta;\n\n          this.$router.replace({ query: { page: $event.target.id } });\n          this.$store.commit('setQueryParam', this.$route.query);\n        });\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3ZlbmRvcnMvVmVuZG9ycy52dWU/MDhkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFDQTtBQUNBLGFBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVFBOztBQUdBO0FBQ0E7O0FBRUE7O0FBRUEsOERBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQVFBLEdBeEJBO0FBeUJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1RUFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBLFNBVEE7QUFVQTtBQUNBO0FBakJBO0FBekJBIiwiZmlsZSI6IjgyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2PlxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7bWFyZ2luLWJvdHRvbTogMHB4O1wiPlxuPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cblxuICAgICA8ZGl2IGNsYXNzPVwidG9vbF9zdHJpcFwiPlxuICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUgaXMtNlwiPlZlbmRvcnM8L2gyPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICAgIDxkaXY+XG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy92ZW5kb3JzL2NyZWF0ZSdcIiA+Q3JlYXRlIE5ldzwvcm91dGVyLWxpbms+XG4gICAgIDwvZGl2PlxuICAgICBcbjwvZGl2PlxuXG48L2Rpdj5cbiAgICAgXG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDtcIj5cblxuICAgXG5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBpcy1mdWxsd2lkdGhcIj5cbiAgICAgICA8dGhlYWQ+XG4gICAgICAgPHRyPlxuICAgICAgICBcbiAgICAgICAgPHRoPiBDb21wYW55IE5hbWU8L3RoPlxuICAgICAgICA8dGg+IENvbnRhY3QgUGVyc29uPC90aD5cbiAgICAgICAgPHRoPiBFbWFpbDwvdGg+XG4gICAgICAgIDx0aD4gUGhvbmU8L3RoPlxuICAgICAgICA8dGg+IDwvdGg+XG4gICAgICAgXG5cbiAgICAgICA8L3RyPlxuXG4gICAgICAgPC90aGVhZD5cblxuXG4gICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHZlbmRvciwgaW5kZXgpIGluIHZlbmRvcnNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvdmVuZG9ycy8nK3ZlbmRvci5pZCsnL3ZpZXcnXCIgPnt7dmVuZG9yLm5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3t2ZW5kb3IuY29udGFjdH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7dmVuZG9yLmVtYWlsfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3t2ZW5kb3IucGhvbmV9fSAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICA8L3Rib2R5PlxuICAgICA8L3RhYmxlPlxuXG48L2Rpdj5cblxuPC9kaXY+ICBcblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiBleHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOlwidmVuZG9yc1wiLFxuICAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICB2ZW5kb3JzOltdXG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcblxuICAgIFxuICAgICAvLyBjbGVhciBxdWVyeV9wYXJhbVxuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UXVlcnlQYXJhbScsbnVsbClcblxuICAgIC8vdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFByb2R1Y3RzJylcblxuICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0Q3VzdG9tZXJzJyx7cGFnZTp0aGlzLnBhZ2V9KVxuICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICB0aGlzLmN1c3RvbWVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICB0aGlzLmxpbmtzID0gcmVzcG9uc2UuZGF0YS5saW5rcztcbiAgICAgICAgICAgICB0aGlzLm1ldGEgPSByZXNwb25zZS5kYXRhLm1ldGE7XG4gICAgICAgICB9KVxuXG5cbiAgfSxcbiAgbWV0aG9kczp7XG5cbiAgICBwYWdpbmF0aW9uQ2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmlkIDw9IHRoaXMubWV0YS5sYXN0X3BhZ2UpIHtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCR2ZW50LnRhcmdldC5pZClcblxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFZlbmRvcnMnLHtwYWdlOiRldmVudC50YXJnZXQuaWR9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcnMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgIHRoaXMubGlua3MgPSByZXNwb25zZS5kYXRhLmxpbmtzXG4gICAgICAgICAgICAgICAgICB0aGlzLm1ldGEgPSByZXNwb25zZS5kYXRhLm1ldGFcblxuICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2Uoe3F1ZXJ5OiB7cGFnZTokZXZlbnQudGFyZ2V0LmlkfX0pXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFF1ZXJ5UGFyYW0nLHRoaXMuJHJvdXRlLnF1ZXJ5KVxuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgfVxuIH1cblxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy92ZW5kb3JzL1ZlbmRvcnMudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///82\n");

/***/ })

})