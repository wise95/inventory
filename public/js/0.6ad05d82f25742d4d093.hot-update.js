webpackHotUpdate(0,{

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      msg: '',\n      purchaseorders: [],\n      page: this.$route.query.page || 1,\n      links: \"\",\n      meta: \"\"\n    };\n  },\n\n  computed: {\n    products() {\n      return this.products;\n    },\n    query_param() {\n      return this.$store.state.query_param;\n    }\n  },\n\n  mounted() {\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('api/purchaseorders').then(response => {\n      this.purchaseorders = response.data.data;\n      // this.products2 =  response.data.data\n      // this.links= response.data.links\n      // this.meta= response.data.meta\n      //            console.log(this.products)\n    }).catch(error => {\n      console.log(error);\n    });\n\n    // clear query_param\n    this.$store.commit('setQueryParam', null);\n\n    //this.$store.dispatch('getProducts')\n\n    this.$store.dispatch('getPurchase', { page: this.page }).then(response => {\n      this.purchaseorders = response.data.data;\n      this.links = response.data.links;\n      this.meta = response.data.meta;\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL1B1cmNoYXNlT3JkZXJzLnZ1ZT9kNjYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxhQURBO0FBRUEsd0JBRkE7QUFHQSx1Q0FIQTtBQUlBLGVBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBO0FBTkEsR0FiQTs7QUFzQkE7O0FBRUEsNEVBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEEsRUFRQSxLQVJBLENBUUE7QUFDQTtBQUNBLEtBVkE7O0FBY0E7QUFDQTs7QUFFQTs7QUFFQSw2REFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBO0FBUUE7QUFuREEiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxkaXY+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG48ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbF9zdHJpcFwiPlxuICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUgaXMtNlwiPlB1cmNoYXNlIE9yZGVycyA8L2gyPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICAgIDxkaXY+XG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy9jcmVhdGUnXCIgPkNyZWF0ZSBOZXc8L3JvdXRlci1saW5rPlxuICAgICA8L2Rpdj5cbiAgICAgXG48L2Rpdj5cblxuPC9kaXY+XG4gICAgIFxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7XCI+XG5cbiAgIFxuXG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBEYXRlIDwvdGg+XG4gICAgICAgIDx0aD4gUHJjaGFzYWUgT3JkZXIgIzwvdGg+XG4gICAgICAgIDx0aD4gVmVuZG9yIE5hbWU8L3RoPlxuICAgICAgICA8dGg+IFN0YXVzPC90aD5cbiAgICAgICAgPHRoIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjIwcHhcIj4gQW1vdW50PC90aD5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihwdXJjaGFzZW9yZGVyLCBpbmRleCkgaW4gcHVyY2hhc2VvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3twdXJjaGFzZW9yZGVyLmNyZWF0ZWRfYXR9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy8nK3B1cmNoYXNlb3JkZXIuaWQrJy92aWV3J1wiID4ge3twdXJjaGFzZW9yZGVyLnBvbnVtYmVyfX08L2E+IDwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3twdXJjaGFzZW9yZGVyLnZlbmRvcn19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7cHVyY2hhc2VvcmRlci5zdGF0dXN9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDoyMHB4XCI+e3twdXJjaGFzZW9yZGVyLnRvdGFsLnRvRml4ZWQoMil9fSAgPC90ZD5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgIFxuXG5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgIDwvdGFibGU+XG5cbjwvZGl2PlxuXG48L2Rpdj4gIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuIGV4cG9ydCBkZWZhdWx0IHtcbiAgIG5hbWU6XCJwdXJjaGFzZW9yZGVyc1wiLFxuICAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICBwdXJjaGFzZW9yZGVyczpbXSxcbiAgICAgIHBhZ2U6IHRoaXMuJHJvdXRlLnF1ZXJ5LnBhZ2UgfHwgMSxcbiAgICAgIGxpbmtzOiBcIlwiLFxuICAgICAgbWV0YTogXCJcIixcbiAgICB9XG4gIH0sXG5cblxuICBjb21wdXRlZDoge1xuICAgIHByb2R1Y3RzICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzXG4gICAgfSxcbiAgICBxdWVyeV9wYXJhbSAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucXVlcnlfcGFyYW1cbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG5cbiAgICBheGlvcy5nZXQoJ2FwaS9wdXJjaGFzZW9yZGVycycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICB0aGlzLnB1cmNoYXNlb3JkZXJzID0gIHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgIC8vIHRoaXMucHJvZHVjdHMyID0gIHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgIC8vIHRoaXMubGlua3M9IHJlc3BvbnNlLmRhdGEubGlua3NcbiAgICAvLyB0aGlzLm1ldGE9IHJlc3BvbnNlLmRhdGEubWV0YVxuICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cylcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG5cblxuXG4gICAgLy8gY2xlYXIgcXVlcnlfcGFyYW1cbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFF1ZXJ5UGFyYW0nLG51bGwpXG5cbiAgICAvL3RoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRQcm9kdWN0cycpXG5cbiAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFB1cmNoYXNlJyx7cGFnZTp0aGlzLnBhZ2V9KVxuICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICB0aGlzLnB1cmNoYXNlb3JkZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgIHRoaXMubGlua3MgPSByZXNwb25zZS5kYXRhLmxpbmtzO1xuICAgICAgICAgICAgIHRoaXMubWV0YSA9IHJlc3BvbnNlLmRhdGEubWV0YTtcbiAgICAgICAgIH0pXG5cblxuICB9XG4gfVxuXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL1B1cmNoYXNlT3JkZXJzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ })

})