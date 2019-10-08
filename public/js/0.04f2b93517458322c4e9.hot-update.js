webpackHotUpdate(0,{

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"customers\",\n  data() {\n    return {\n      customers: [],\n      links: '',\n      meta: '',\n      page: this.$route.query.page || 1\n    };\n  },\n  computed: {\n    query_param() {\n      return this.$store.state.query_param;\n    }\n  },\n  mounted() {\n\n    // clear query_param\n    this.$store.commit('setQueryParam', null);\n\n    //this.$store.dispatch('getProducts')\n\n    this.$store.dispatch('getCustomers', { page: this.page }).then(response => {\n      this.customers = response.data.data;\n      this.links = response.data.links;\n      this.meta = response.data.meta;\n    });\n  },\n\n  methods: {\n\n    paginationClick: function ($event) {\n      if ($event.target.id <= this.meta.last_page) {\n        //alert($vent.target.id)\n\n        this.$store.dispatch('getPayments', { page: $event.target.id }).then(response => {\n          this.pacustomersyments = response.data.data;\n          this.links = response.data.links;\n          this.meta = response.data.meta;\n\n          this.$router.replace({ query: { page: $event.target.id } });\n          this.$store.commit('setQueryParam', this.$route.query);\n        });\n      }\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2N1c3RvbWVycy9DdXN0b21lcnMudnVlP2U1MDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0ZBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGVBRkE7QUFHQSxjQUhBO0FBSUE7QUFKQTtBQU1BLEdBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEdBVkE7QUFlQTs7QUFHQTtBQUNBOztBQUVBOztBQUVBLDhEQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQSxHQTdCQTs7QUErQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdFQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUEsU0FUQTtBQVVBO0FBQ0E7QUFqQkE7QUEvQkEiLCJmaWxlIjoiNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxkaXY+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG48ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+Q3VzdG9tZXJzIDwvaDI+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAgICAgPGRpdj5cblxuICAgICAgIDx1bCBjbGFzcz1cInRvb2xiYXJfbWVudVwiPlxuICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cInBhZ2luYXRpb24gaXMtcm91bmRlZFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgYXJpYS1sYWJlbD1cInBhZ2luYXRpb25cIj5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9XCJtYXJnaW4tbGVmdDoxMHB4XCIgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt7bWV0YS5mcm9tfX0gLSB7e21ldGEudG99fSBvZiB7e21ldGEudG90YWx9fSA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICA6Y2xhc3M9XCJtZXRhLmN1cnJlbnRfcGFnZSA9PSAgMSAmJiAnZGlzYWJsZWQnXCI+PGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIiBAY2xpY2s9XCJwYWdpbmF0aW9uQ2xpY2tcIiA6aWQ9XCIobWV0YS5jdXJyZW50X3BhZ2UgLTEpXCI+PDwvYT4gPC9saT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgIDpjbGFzcz1cIm1ldGEuY3VycmVudF9wYWdlID09PSBtZXRhLmxhc3RfcGFnZSAmJiAnZGlzYWJsZWQnXCI+PGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIiBAY2xpY2s9XCJwYWdpbmF0aW9uQ2xpY2tcIiA6aWQ9XCIobWV0YS5jdXJyZW50X3BhZ2UgKzEpXCI+PjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpID48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgIDwvbGk+XG4gICAgICAgICA8bGk+XG4gICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy9jdXN0b21lcnMvY3JlYXRlJ1wiID5DcmVhdGUgTmV3PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbGk+XG4gICAgICBcbiAgICAgICAgPC91bD5cbiAgICAgPC9kaXY+XG5cbiAgICAgXG4gICAgIFxuPC9kaXY+XG5cbjwvZGl2PlxuICAgICBcbjxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDotMy40cmVtO3BhZGRpbmctdG9wOiAxM3B4O1wiPlxuXG4gICBcblxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGlzLWZ1bGx3aWR0aFwiPlxuICAgICAgIDx0aGVhZD5cbiAgICAgICA8dHI+XG4gICAgICAgIFxuICAgICAgICA8dGg+IE5hbWU8L3RoPlxuICAgICAgICA8dGg+IEVtYWlsPC90aD5cbiAgICAgICAgPHRoPiBQaG9uZTwvdGg+XG4gICAgICAgIDx0aD4gUmVjZWl2YWJsZTwvdGg+XG4gICAgICAgXG5cbiAgICAgICA8L3RyPlxuXG4gICAgICAgPC90aGVhZD5cblxuXG4gICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoY3VzdG9tZXIsIGluZGV4KSBpbiBjdXN0b21lcnNcIj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy9jdXN0b21lcnMvJytjdXN0b21lci5pZCsnL3ZpZXcnXCIgPnt7Y3VzdG9tZXIuZmlyc3RuYW1lfX0ge3tjdXN0b21lci5sYXN0bmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57e2N1c3RvbWVyLmVtYWlsfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lci5waG9uZX19ICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4gPC90ZD5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgIFxuXG5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgIDwvdGFibGU+XG5cbjwvZGl2PlxuXG48L2Rpdj4gIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuIGV4cG9ydCBkZWZhdWx0IHtcbiAgIG5hbWU6XCJjdXN0b21lcnNcIixcbiAgIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXN0b21lcnM6W10sXG4gICAgICBsaW5rczonJyxcbiAgICAgIG1ldGE6JycsXG4gICAgICBwYWdlOiB0aGlzLiRyb3V0ZS5xdWVyeS5wYWdlIHx8IDEsXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgICAgcXVlcnlfcGFyYW0gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlcnlfcGFyYW1cbiAgICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG5cbiAgIFxuICAgICAvLyBjbGVhciBxdWVyeV9wYXJhbVxuICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UXVlcnlQYXJhbScsbnVsbClcblxuICAgIC8vdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFByb2R1Y3RzJylcblxuICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0Q3VzdG9tZXJzJyx7cGFnZTp0aGlzLnBhZ2V9KVxuICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICB0aGlzLmN1c3RvbWVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICB0aGlzLmxpbmtzID0gcmVzcG9uc2UuZGF0YS5saW5rcztcbiAgICAgICAgICAgICB0aGlzLm1ldGEgPSByZXNwb25zZS5kYXRhLm1ldGE7XG4gICAgICAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6e1xuXG4gICAgcGFnaW5hdGlvbkNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5pZCA8PSB0aGlzLm1ldGEubGFzdF9wYWdlKSB7XG4gICAgICAgICAgICAgICAgLy9hbGVydCgkdmVudC50YXJnZXQuaWQpXG5cbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRQYXltZW50cycse3BhZ2U6JGV2ZW50LnRhcmdldC5pZH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICAgICAgIHRoaXMucGFjdXN0b21lcnN5bWVudHMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgIHRoaXMubGlua3MgPSByZXNwb25zZS5kYXRhLmxpbmtzXG4gICAgICAgICAgICAgICAgICB0aGlzLm1ldGEgPSByZXNwb25zZS5kYXRhLm1ldGFcblxuICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2Uoe3F1ZXJ5OiB7cGFnZTokZXZlbnQudGFyZ2V0LmlkfX0pXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFF1ZXJ5UGFyYW0nLHRoaXMuJHJvdXRlLnF1ZXJ5KVxuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgfVxuIH1cblxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jdXN0b21lcnMvQ3VzdG9tZXJzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///73\n");

/***/ })

})