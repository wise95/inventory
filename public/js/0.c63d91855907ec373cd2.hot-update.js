webpackHotUpdate(0,{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n   name: \"billpayment\",\n   data() {\n      return {\n         bills: \"\"\n      };\n   },\n   mounted() {\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/bills').then(response => {\n         this.bills = response.data.data;\n      }).catch(error => {\n         console.log(error);\n      });\n   },\n   methods: {}\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2JpbGxzL0JpbGxzLnZ1ZT9mN2M0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REE7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxJQU5BO0FBT0E7O0FBRUEsc0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxPQUhBLEVBSUEsS0FKQSxDQUlBO0FBQ0E7QUFDQSxPQU5BO0FBT0EsSUFoQkE7QUFpQkE7QUFqQkEiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7bWFyZ2luLWJvdHRvbTogMHB4O1wiPlxuPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICAgXG4gICAgPGRpdiBjbGFzcz1cInRvb2xfc3RyaXBcIj5cbiAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlIGlzLTZcIj5CaWxscyA8L2gyPlxuICAgICA8L2Rpdj5cbiAgICAgXG48L2Rpdj5cblxuPC9kaXY+XG4gICAgIFxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7bWFyZ2luLWJvdHRvbTogMHB4O1wiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGlzLWZ1bGx3aWR0aFwiPlxuICAgICAgIDx0aGVhZD5cbiAgICAgICA8dHI+XG4gICAgICAgIDx0aD4gRGF0ZSA8L3RoPlxuICAgICAgICA8dGg+IEJpbGwgTnVtYmVyICM8L3RoPlxuICAgICAgICA8dGg+IFB1cmNoYXNlIE9yZGVyICM8L3RoPlxuICAgICAgICA8dGg+IFZlbmRvciA8L3RoPlxuICAgICAgICA8dGg+IFN0YXVzPC90aD5cbiAgICAgICAgPHRoPiBUb3RhbDwvdGg+XG4gICAgICAgIDx0aD4gRHVlIEFtb3VudDwvdGg+XG5cbiAgICAgICA8L3RyPlxuXG4gICAgICAgPC90aGVhZD5cblxuXG4gICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoYmlsbCwgaW5kZXgpIGluIGJpbGxzXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7YmlsbC5jcmVhdGVkX2F0fX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvYmlsbHMvJytiaWxsLmlkKycvdmlldydcIiA+IHt7YmlsbC5iaWxsbnVtYmVyfX08L2E+IDwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvcHVyY2hhc2VvcmRlcnMvJytiaWxsLnB1cmNoYXNlb3JkZXIuaWQrJy92aWV3J1wiID4ge3tiaWxsLnBvbnVtYmVyfX08L2E+IDwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tiaWxsLnZlbmRvcl9uYW1lfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tiaWxsLnN0YXR1c319PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tiaWxsLnRvdGFsfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57e2JpbGwuYW1vdW50X2R1ZX19PC90ZD5cblxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgIFxuXG5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgIDwvdGFibGU+XG5cbjwvZGl2PlxuPC9kaXY+XG4gIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgbmFtZTpcImJpbGxwYXltZW50XCIsXG4gICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICBiaWxsczpcIlwiXG4gICAgICB9XG4gICB9LFxuICAgbW91bnRlZCAoKSB7XG5cbiAgICAgIGF4aW9zLmdldCgnL2FwaS9iaWxscycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLmJpbGxzID0gIHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczp7fVxufVxuXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2JpbGxzL0JpbGxzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n");

/***/ })

})