webpackHotUpdate(0,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head{\\n     text-align: center\\n}\\n.table_data{\\n     text-align: center;\\n     font-weight: bold;\\n     color: #ff003a;\\n     padding: 0px 0px;\\n}\\n\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/RecentSales.vue\"],\"names\":[],\"mappings\":\";AAsFA;KACA,kBAAA;CACA;AAEA;KACA,mBAAA;KACA,kBAAA;KACA,eAAA;KACA,iBAAA;CACA\",\"file\":\"RecentSales.vue\",\"sourcesContent\":[\"<template>\\n\\n<div class=\\\"box\\\">\\n<h3 style=\\\"padding: 10px 10px;margin-bottom: 0px;\\\" class=\\\"title is-6\\\">Recent Sales </h3>\\n\\n\\n<table class=\\\"table is-fullwidth\\\">\\n       <thead>\\n       <tr>\\n        <th> Date </th>\\n        <th> Sales Order #</th>\\n        <th> Customer Name</th>\\n        <th> Staus</th>\\n        <th style=\\\"text-align:right;padding-right:40px\\\"> Amount</th>\\n\\n       </tr>\\n\\n       </thead>\\n\\n\\n         <tbody>\\n\\n              <tr v-for=\\\"(so, index) in salesorders\\\">\\n                <td>{{so.order_date}} </td>\\n                <td><router-link :to=\\\"'/salesorders/'+so.id+'/view'\\\" > {{so.sonumber}}</a> </router-link></td>\\n                <td>{{so.customer.firstname}} {{so.customer.lastname}}</td>\\n                <td>{{so.status}}</td>\\n                <td style=\\\"text-align:right;padding-right:40px\\\">{{total(so).toFixed(2)}}</td>\\n              </tr>\\n       \\n\\n\\n         </tbody>\\n     </table>\\n\\n\\n  </div>      \\n\\n</template>\\n\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\n export default {\\n   name:\\\"userprofilemenu\\\",\\n   data () {\\n    return {\\n      isProfileDropdownActive:false,\\n      mytime:moment().format('M'),\\n      current:'Today',\\n      order_total:0.00\\n    }\\n  },\\n\\n  computed:{\\n    isLogedIn(){\\n      return this.$store.getters.isLogedIn\\n    }\\n  },\\n\\n  mounted () {\\n    \\n  },\\n  methods: {\\n\\n      \\n\\n   \\n      \\n\\n       \\n       \\n\\n       \\n\\n        \\n\\n   }\\n\\n}\\n\\n</script>\\n\\n<style>\\n\\n.table_head{\\n     text-align: center\\n}\\n\\n.table_data{\\n     text-align: center;\\n     font-weight: bold;\\n     color: #ff003a;\\n     padding: 0px 0px;\\n}\\n\\n\\n\\n</style>\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZT8wNGU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXdDLDRCQUE0QixjQUFjLDBCQUEwQix5QkFBeUIsc0JBQXNCLHdCQUF3QixHQUFHLGdCQUFnQixrTkFBa04sTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLG9IQUFvSCxtQkFBbUIsNFFBQTRRLDZLQUE2SyxlQUFlLG1GQUFtRixhQUFhLGdEQUFnRCx1QkFBdUIsR0FBRyxzQkFBc0IsNkJBQTZCLFdBQVcsb0RBQW9ELHVCQUF1QixzQkFBc0IsdU1BQXVNLDRDQUE0QyxjQUFjLGlJQUFpSSxLQUFLLGlCQUFpQixrQkFBa0IsbURBQW1ELEtBQUssbUJBQW1CLFdBQVcsZUFBZSw0RUFBNEUsS0FBSyx3Q0FBd0MsNEJBQTRCLGdCQUFnQiwwQkFBMEIseUJBQXlCLHNCQUFzQix3QkFBd0IsR0FBRyx5Q0FBeUM7O0FBRXZyRSIsImZpbGUiOiI0NDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlX2hlYWR7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuLnRhYmxlX2RhdGF7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgIGNvbG9yOiAjZmYwMDNhO1xcbiAgICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvZGV2L2NjL2xhcmF2ZWwvaW52ZXRvcnkvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0ZBO0tBQ0Esa0JBQUE7Q0FDQTtBQUVBO0tBQ0EsbUJBQUE7S0FDQSxrQkFBQTtLQUNBLGVBQUE7S0FDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJSZWNlbnRTYWxlcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbjxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuPGgzIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4IDEwcHg7bWFyZ2luLWJvdHRvbTogMHB4O1xcXCIgY2xhc3M9XFxcInRpdGxlIGlzLTZcXFwiPlJlY2VudCBTYWxlcyA8L2gzPlxcblxcblxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgaXMtZnVsbHdpZHRoXFxcIj5cXG4gICAgICAgPHRoZWFkPlxcbiAgICAgICA8dHI+XFxuICAgICAgICA8dGg+IERhdGUgPC90aD5cXG4gICAgICAgIDx0aD4gU2FsZXMgT3JkZXIgIzwvdGg+XFxuICAgICAgICA8dGg+IEN1c3RvbWVyIE5hbWU8L3RoPlxcbiAgICAgICAgPHRoPiBTdGF1czwvdGg+XFxuICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XFxcIj4gQW1vdW50PC90aD5cXG5cXG4gICAgICAgPC90cj5cXG5cXG4gICAgICAgPC90aGVhZD5cXG5cXG5cXG4gICAgICAgICA8dGJvZHk+XFxuXFxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcIihzbywgaW5kZXgpIGluIHNhbGVzb3JkZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkPnt7c28ub3JkZXJfZGF0ZX19IDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVxcXCInL3NhbGVzb3JkZXJzLycrc28uaWQrJy92aWV3J1xcXCIgPiB7e3NvLnNvbnVtYmVyfX08L2E+IDwvcm91dGVyLWxpbms+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7c28uY3VzdG9tZXIuZmlyc3RuYW1lfX0ge3tzby5jdXN0b21lci5sYXN0bmFtZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7c28uc3RhdHVzfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XFxcIj57e3RvdGFsKHNvKS50b0ZpeGVkKDIpfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgXFxuXFxuXFxuICAgICAgICAgPC90Ym9keT5cXG4gICAgIDwvdGFibGU+XFxuXFxuXFxuICA8L2Rpdj4gICAgICBcXG5cXG48L3RlbXBsYXRlPlxcblxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmltcG9ydCBtb21lbnQgZnJvbSBcXFwibW9tZW50XFxcIlxcbiBleHBvcnQgZGVmYXVsdCB7XFxuICAgbmFtZTpcXFwidXNlcnByb2ZpbGVtZW51XFxcIixcXG4gICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc1Byb2ZpbGVEcm9wZG93bkFjdGl2ZTpmYWxzZSxcXG4gICAgICBteXRpbWU6bW9tZW50KCkuZm9ybWF0KCdNJyksXFxuICAgICAgY3VycmVudDonVG9kYXknLFxcbiAgICAgIG9yZGVyX3RvdGFsOjAuMDBcXG4gICAgfVxcbiAgfSxcXG5cXG4gIGNvbXB1dGVkOntcXG4gICAgaXNMb2dlZEluKCl7XFxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuaXNMb2dlZEluXFxuICAgIH1cXG4gIH0sXFxuXFxuICBtb3VudGVkICgpIHtcXG4gICAgXFxuICB9LFxcbiAgbWV0aG9kczoge1xcblxcbiAgICAgIFxcblxcbiAgIFxcbiAgICAgIFxcblxcbiAgICAgICBcXG4gICAgICAgXFxuXFxuICAgICAgIFxcblxcbiAgICAgICAgXFxuXFxuICAgfVxcblxcbn1cXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuLnRhYmxlX2hlYWR7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuXFxuLnRhYmxlX2RhdGF7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgIGNvbG9yOiAjZmYwMDNhO1xcbiAgICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuXFxuXFxuXFxuPC9zdHlsZT5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzAzNmVmY2ZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///443\n");

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"userprofilemenu\",\n  data() {\n    return {\n      isProfileDropdownActive: false,\n      mytime: __WEBPACK_IMPORTED_MODULE_1_moment___default()().format('M'),\n      current: 'Today',\n      order_total: 0.00\n    };\n  },\n\n  computed: {\n    isLogedIn() {\n      return this.$store.getters.isLogedIn;\n    }\n  },\n\n  mounted() {},\n  methods: {}\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTYWxlcy52dWU/ZGQ2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFDQTtBQUNBLG9DQURBO0FBRUEsMEVBRkE7QUFHQSxzQkFIQTtBQUlBO0FBSkE7QUFNQSxHQVRBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEEsR0FYQTs7QUFpQkEsYUFFQSxDQW5CQTtBQW9CQTs7QUFwQkEiLCJmaWxlIjoiNDQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiYm94XCI+XG48aDMgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDEwcHg7bWFyZ2luLWJvdHRvbTogMHB4O1wiIGNsYXNzPVwidGl0bGUgaXMtNlwiPlJlY2VudCBTYWxlcyA8L2gzPlxuXG5cbjx0YWJsZSBjbGFzcz1cInRhYmxlIGlzLWZ1bGx3aWR0aFwiPlxuICAgICAgIDx0aGVhZD5cbiAgICAgICA8dHI+XG4gICAgICAgIDx0aD4gRGF0ZSA8L3RoPlxuICAgICAgICA8dGg+IFNhbGVzIE9yZGVyICM8L3RoPlxuICAgICAgICA8dGg+IEN1c3RvbWVyIE5hbWU8L3RoPlxuICAgICAgICA8dGg+IFN0YXVzPC90aD5cbiAgICAgICAgPHRoIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcIj4gQW1vdW50PC90aD5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XCIoc28sIGluZGV4KSBpbiBzYWxlc29yZGVyc1wiPlxuICAgICAgICAgICAgICAgIDx0ZD57e3NvLm9yZGVyX2RhdGV9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy9zYWxlc29yZGVycy8nK3NvLmlkKycvdmlldydcIiA+IHt7c28uc29udW1iZXJ9fTwvYT4gPC9yb3V0ZXItbGluaz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57e3NvLmN1c3RvbWVyLmZpcnN0bmFtZX19IHt7c28uY3VzdG9tZXIubGFzdG5hbWV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28uc3RhdHVzfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XCI+e3t0b3RhbChzbykudG9GaXhlZCgyKX19PC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICBcblxuXG4gICAgICAgICA8L3Rib2R5PlxuICAgICA8L3RhYmxlPlxuXG5cbiAgPC9kaXY+ICAgICAgXG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG4gZXhwb3J0IGRlZmF1bHQge1xuICAgbmFtZTpcInVzZXJwcm9maWxlbWVudVwiLFxuICAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzUHJvZmlsZURyb3Bkb3duQWN0aXZlOmZhbHNlLFxuICAgICAgbXl0aW1lOm1vbWVudCgpLmZvcm1hdCgnTScpLFxuICAgICAgY3VycmVudDonVG9kYXknLFxuICAgICAgb3JkZXJfdG90YWw6MC4wMFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDp7XG4gICAgaXNMb2dlZEluKCl7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5pc0xvZ2VkSW5cbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgXG4gIH0sXG4gIG1ldGhvZHM6IHtcblxuICAgICAgXG5cbiAgIFxuICAgICAgXG5cbiAgICAgICBcbiAgICAgICBcblxuICAgICAgIFxuXG4gICAgICAgIFxuXG4gICB9XG5cbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLnRhYmxlX2hlYWR7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4udGFibGVfZGF0YXtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgY29sb3I6ICNmZjAwM2E7XG4gICAgIHBhZGRpbmc6IDBweCAwcHg7XG59XG5cblxuXG48L3N0eWxlPlxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///444\n");

/***/ })

})