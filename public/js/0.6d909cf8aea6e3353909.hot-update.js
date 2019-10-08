webpackHotUpdate(0,{

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: \"customers\",\n    data() {\n        return {\n            customers: [],\n            links: '',\n            meta: '',\n            page: this.$route.query.page || 1\n        };\n    },\n    mounted() {\n\n        // clear query_param\n        this.$store.commit('setQueryParam', null);\n\n        //this.$store.dispatch('getProducts')\n\n        this.$store.dispatch('getCustomers', { page: this.page }).then(response => {\n            this.customers = response.data.data;\n            this.links = response.data.links;\n            this.meta = response.data.meta;\n        });\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2N1c3RvbWVycy9DdXN0b21lcnMudnVlP2U1MDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0ZBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBO0FBTUEsS0FUQTtBQVVBOztBQUdBO0FBQ0E7O0FBRUE7O0FBRUEsa0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FMQTtBQU1BO0FBeEJBIiwiZmlsZSI6IjczLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2PlxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7bWFyZ2luLWJvdHRvbTogMHB4O1wiPlxuPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cblxuICAgICA8ZGl2IGNsYXNzPVwidG9vbF9zdHJpcFwiPlxuICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUgaXMtNlwiPkN1c3RvbWVycyA8L2gyPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICA8dWwgY2xhc3M9XCJ0b29sYmFyX21lbnVcIj5cbiAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJwYWdpbmF0aW9uIGlzLXJvdW5kZWRcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJwYWdpbmF0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPVwibWFyZ2luLWxlZnQ6MTBweFwiIGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57e21ldGEuZnJvbX19IC0ge3ttZXRhLnRvfX0gb2Yge3ttZXRhLnRvdGFsfX0gPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgOmNsYXNzPVwibWV0YS5jdXJyZW50X3BhZ2UgPT0gIDEgJiYgJ2Rpc2FibGVkJ1wiPjxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCIgQGNsaWNrPVwicGFnaW5hdGlvbkNsaWNrXCIgOmlkPVwiKG1ldGEuY3VycmVudF9wYWdlIC0xKVwiPjw8L2E+IDwvbGk+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICA6Y2xhc3M9XCJtZXRhLmN1cnJlbnRfcGFnZSA9PT0gbWV0YS5sYXN0X3BhZ2UgJiYgJ2Rpc2FibGVkJ1wiPjxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCIgQGNsaWNrPVwicGFnaW5hdGlvbkNsaWNrXCIgOmlkPVwiKG1ldGEuY3VycmVudF9wYWdlICsxKVwiPj48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSA+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICA8L2xpPlxuICAgICAgICAgPGxpPlxuICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1zbWFsbFwiIDp0bz1cIicvY3VzdG9tZXJzL2NyZWF0ZSdcIiA+Q3JlYXRlIE5ldzwvcm91dGVyLWxpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2xpPlxuICAgICAgXG4gICAgICAgIDwvdWw+XG4gICAgIDwvZGl2PlxuXG4gICAgIFxuICAgICBcbjwvZGl2PlxuXG48L2Rpdj5cbiAgICAgXG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTMuNHJlbTtwYWRkaW5nLXRvcDogMTNweDtcIj5cblxuICAgXG5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBpcy1mdWxsd2lkdGhcIj5cbiAgICAgICA8dGhlYWQ+XG4gICAgICAgPHRyPlxuICAgICAgICBcbiAgICAgICAgPHRoPiBOYW1lPC90aD5cbiAgICAgICAgPHRoPiBFbWFpbDwvdGg+XG4gICAgICAgIDx0aD4gUGhvbmU8L3RoPlxuICAgICAgICA8dGg+IFJlY2VpdmFibGU8L3RoPlxuICAgICAgIFxuXG4gICAgICAgPC90cj5cblxuICAgICAgIDwvdGhlYWQ+XG5cblxuICAgICAgICAgPHRib2R5PlxuXG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGN1c3RvbWVyLCBpbmRleCkgaW4gY3VzdG9tZXJzXCI+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvY3VzdG9tZXJzLycrY3VzdG9tZXIuaWQrJy92aWV3J1wiID57e2N1c3RvbWVyLmZpcnN0bmFtZX19IHt7Y3VzdG9tZXIubGFzdG5hbWV9fTwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tjdXN0b21lci5lbWFpbH19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7Y3VzdG9tZXIucGhvbmV9fSAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+IDwvdGQ+XG5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICBcblxuXG4gICAgICAgICA8L3Rib2R5PlxuICAgICA8L3RhYmxlPlxuXG48L2Rpdj5cblxuPC9kaXY+ICBcblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbiBleHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOlwiY3VzdG9tZXJzXCIsXG4gICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VzdG9tZXJzOltdLFxuICAgICAgICAgIGxpbmtzOicnLFxuICAgICAgbWV0YTonJyxcbiAgICAgIHBhZ2U6IHRoaXMuJHJvdXRlLnF1ZXJ5LnBhZ2UgfHwgMSxcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuXG4gICBcbiAgICAgLy8gY2xlYXIgcXVlcnlfcGFyYW1cbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFF1ZXJ5UGFyYW0nLG51bGwpXG5cbiAgICAvL3RoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRQcm9kdWN0cycpXG5cbiAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldEN1c3RvbWVycycse3BhZ2U6dGhpcy5wYWdlfSlcbiAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgdGhpcy5jdXN0b21lcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgICAgdGhpcy5saW5rcyA9IHJlc3BvbnNlLmRhdGEubGlua3M7XG4gICAgICAgICAgICAgdGhpcy5tZXRhID0gcmVzcG9uc2UuZGF0YS5tZXRhO1xuICAgICAgICAgfSlcbiAgICAgfVxuIH1cblxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jdXN0b21lcnMvQ3VzdG9tZXJzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///73\n");

/***/ })

})