webpackHotUpdate(0,{

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      msg: '',\n      purchaseorders: [],\n      page: this.$route.query.page || 1,\n      links: \"\",\n      meta: \"\"\n    };\n  },\n\n  computed: {\n    products() {\n      return this.products;\n    },\n    query_param() {\n      return this.$store.state.query_param;\n    }\n  },\n\n  mounted() {\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('api/purchaseorders').then(response => {\n      this.purchaseorders = response.data.data;\n      // this.products2 =  response.data.data\n      // this.links= response.data.links\n      // this.meta= response.data.meta\n      //            console.log(this.products)\n    }).catch(error => {\n      console.log(error);\n    });\n\n    // clear query_param\n    this.$store.commit('setQueryParam', null);\n\n    //this.$store.dispatch('getProducts')\n\n    this.$store.dispatch('getProductTable', { page: this.page }).then(response => {\n      this.purchaseorders = response.data.data;\n      this.links = response.data.links;\n      this.meta = response.data.meta;\n    });\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL1B1cmNoYXNlT3JkZXJzLnZ1ZT9kNjYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxhQURBO0FBRUEsd0JBRkE7QUFHQSx1Q0FIQTtBQUlBLGVBSkE7QUFLQTtBQUxBO0FBT0EsR0FWQTs7QUFhQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBO0FBTkEsR0FiQTs7QUFzQkE7O0FBRUEsNEVBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEEsRUFRQSxLQVJBLENBUUE7QUFDQTtBQUNBLEtBVkE7O0FBY0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBO0FBUUE7QUFuREEiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxkaXY+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAwcHg7XCI+XG48ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbF9zdHJpcFwiPlxuICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUgaXMtNlwiPlB1cmNoYXNlIE9yZGVycyA8L2gyPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICAgIDxkaXY+XG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy9jcmVhdGUnXCIgPkNyZWF0ZSBOZXc8L3JvdXRlci1saW5rPlxuICAgICA8L2Rpdj5cbiAgICAgXG48L2Rpdj5cblxuPC9kaXY+XG4gICAgIFxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7XCI+XG5cbiAgIFxuXG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBEYXRlIDwvdGg+XG4gICAgICAgIDx0aD4gUHJjaGFzYWUgT3JkZXIgIzwvdGg+XG4gICAgICAgIDx0aD4gVmVuZG9yIE5hbWU8L3RoPlxuICAgICAgICA8dGg+IFN0YXVzPC90aD5cbiAgICAgICAgPHRoIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjIwcHhcIj4gQW1vdW50PC90aD5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihwdXJjaGFzZW9yZGVyLCBpbmRleCkgaW4gcHVyY2hhc2VvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3twdXJjaGFzZW9yZGVyLmNyZWF0ZWRfYXR9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy8nK3B1cmNoYXNlb3JkZXIuaWQrJy92aWV3J1wiID4ge3twdXJjaGFzZW9yZGVyLnBvbnVtYmVyfX08L2E+IDwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3twdXJjaGFzZW9yZGVyLnZlbmRvcn19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7cHVyY2hhc2VvcmRlci5zdGF0dXN9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDoyMHB4XCI+e3twdXJjaGFzZW9yZGVyLnRvdGFsLnRvRml4ZWQoMil9fSAgPC90ZD5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgIFxuXG5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgIDwvdGFibGU+XG5cbjwvZGl2PlxuXG48L2Rpdj4gIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuIGV4cG9ydCBkZWZhdWx0IHtcbiAgIG5hbWU6XCJwdXJjaGFzZW9yZGVyc1wiLFxuICAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1zZzogJycsXG4gICAgICBwdXJjaGFzZW9yZGVyczpbXSxcbiAgICAgIHBhZ2U6IHRoaXMuJHJvdXRlLnF1ZXJ5LnBhZ2UgfHwgMSxcbiAgICAgIGxpbmtzOiBcIlwiLFxuICAgICAgIG1ldGE6IFwiXCIsXG4gICAgfVxuICB9LFxuXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBwcm9kdWN0cyAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1xuICAgIH0sXG4gICAgcXVlcnlfcGFyYW0gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnF1ZXJ5X3BhcmFtXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuXG4gICAgYXhpb3MuZ2V0KCdhcGkvcHVyY2hhc2VvcmRlcnMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgdGhpcy5wdXJjaGFzZW9yZGVycyA9ICByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAvLyB0aGlzLnByb2R1Y3RzMiA9ICByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAvLyB0aGlzLmxpbmtzPSByZXNwb25zZS5kYXRhLmxpbmtzXG4gICAgLy8gdGhpcy5tZXRhPSByZXNwb25zZS5kYXRhLm1ldGFcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuXG5cblxuICAgIC8vIGNsZWFyIHF1ZXJ5X3BhcmFtXG4gICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRRdWVyeVBhcmFtJyxudWxsKVxuXG4gICAgLy90aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0UHJvZHVjdHMnKVxuXG4gICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRQcm9kdWN0VGFibGUnLHtwYWdlOnRoaXMucGFnZX0pXG4gICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgIHRoaXMucHVyY2hhc2VvcmRlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgdGhpcy5saW5rcyA9IHJlc3BvbnNlLmRhdGEubGlua3M7XG4gICAgICAgICAgICAgdGhpcy5tZXRhID0gcmVzcG9uc2UuZGF0YS5tZXRhO1xuICAgICAgICAgfSlcblxuXG4gIH1cbiB9XG5cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHVyY2hhc2VvcmRlcnMvUHVyY2hhc2VPcmRlcnMudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///36\n");

/***/ })

})