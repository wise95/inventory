webpackHotUpdate(0,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head{\\n     text-align: center\\n}\\n.table_data{\\n     text-align: center;\\n     font-weight: bold;\\n     color: #ff003a;\\n     padding: 0px 0px;\\n}\\n\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/RecentSales.vue\"],\"names\":[],\"mappings\":\";AAqEA;KACA,kBAAA;CACA;AAEA;KACA,mBAAA;KACA,kBAAA;KACA,eAAA;KACA,iBAAA;CACA\",\"file\":\"RecentSales.vue\",\"sourcesContent\":[\"<template>\\n\\n<div class=\\\"box\\\">\\n<h3 style=\\\"padding: 10px 10px;margin-bottom: 0px;\\\" class=\\\"title is-6\\\">Recent Sales </h3>\\n\\n\\n<table class=\\\"table is-fullwidth\\\">\\n       <thead>\\n       <tr>\\n        <th> Date </th>\\n        <th> Sales Order #</th>\\n        <th> Customer Name</th>\\n        <th> Staus</th>\\n        <th style=\\\"text-align:right;padding-right:40px\\\"> Amount</th>\\n\\n       </tr>\\n\\n       </thead>\\n\\n\\n         <tbody>\\n\\n              <tr v-for=\\\"(so, index) in salesorders\\\">\\n                <td>{{so.order_date}} </td>\\n                <td><router-link :to=\\\"'/salesorders/'+so.id+'/view'\\\" > {{so.sonumber}}</a> </router-link></td>\\n                <td>{{so.customer.firstname}} {{so.customer.lastname}}</td>\\n                <td>{{so.status}}</td>\\n                <td style=\\\"text-align:right;padding-right:40px\\\">{{total(so).toFixed(2)}}</td>\\n              </tr>\\n       \\n\\n\\n         </tbody>\\n     </table>\\n\\n\\n  </div>      \\n\\n</template>\\n\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\n export default {\\n   name:\\\"recent\\\",\\n   data () {\\n    return {\\n     \\n    }\\n  },\\n\\n  computed:{\\n    \\n  },\\n\\n  mounted () {\\n    \\n  },\\n  methods: {\\n\\n   }\\n\\n}\\n\\n</script>\\n\\n<style>\\n\\n.table_head{\\n     text-align: center\\n}\\n\\n.table_data{\\n     text-align: center;\\n     font-weight: bold;\\n     color: #ff003a;\\n     padding: 0px 0px;\\n}\\n\\n\\n\\n</style>\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZT8wNGU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXdDLDRCQUE0QixjQUFjLDBCQUEwQix5QkFBeUIsc0JBQXNCLHdCQUF3QixHQUFHLGdCQUFnQixrTkFBa04sTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLG9IQUFvSCxtQkFBbUIsNFFBQTRRLDZLQUE2SyxlQUFlLG1GQUFtRixhQUFhLGdEQUFnRCx1QkFBdUIsR0FBRyxzQkFBc0IsNkJBQTZCLFdBQVcsb0RBQW9ELHVCQUF1QixzQkFBc0IsdU1BQXVNLG1DQUFtQyxjQUFjLGNBQWMsS0FBSyxpQkFBaUIsV0FBVyxtQkFBbUIsV0FBVyxlQUFlLFFBQVEsS0FBSyx3Q0FBd0MsNEJBQTRCLGdCQUFnQiwwQkFBMEIseUJBQXlCLHNCQUFzQix3QkFBd0IsR0FBRyx5Q0FBeUM7O0FBRXg3RCIsImZpbGUiOiI0NDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlX2hlYWR7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuLnRhYmxlX2RhdGF7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgIGNvbG9yOiAjZmYwMDNhO1xcbiAgICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvZGV2L2NjL2xhcmF2ZWwvaW52ZXRvcnkvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUVBO0tBQ0Esa0JBQUE7Q0FDQTtBQUVBO0tBQ0EsbUJBQUE7S0FDQSxrQkFBQTtLQUNBLGVBQUE7S0FDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJSZWNlbnRTYWxlcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbjxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuPGgzIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4IDEwcHg7bWFyZ2luLWJvdHRvbTogMHB4O1xcXCIgY2xhc3M9XFxcInRpdGxlIGlzLTZcXFwiPlJlY2VudCBTYWxlcyA8L2gzPlxcblxcblxcbjx0YWJsZSBjbGFzcz1cXFwidGFibGUgaXMtZnVsbHdpZHRoXFxcIj5cXG4gICAgICAgPHRoZWFkPlxcbiAgICAgICA8dHI+XFxuICAgICAgICA8dGg+IERhdGUgPC90aD5cXG4gICAgICAgIDx0aD4gU2FsZXMgT3JkZXIgIzwvdGg+XFxuICAgICAgICA8dGg+IEN1c3RvbWVyIE5hbWU8L3RoPlxcbiAgICAgICAgPHRoPiBTdGF1czwvdGg+XFxuICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XFxcIj4gQW1vdW50PC90aD5cXG5cXG4gICAgICAgPC90cj5cXG5cXG4gICAgICAgPC90aGVhZD5cXG5cXG5cXG4gICAgICAgICA8dGJvZHk+XFxuXFxuICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcIihzbywgaW5kZXgpIGluIHNhbGVzb3JkZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkPnt7c28ub3JkZXJfZGF0ZX19IDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVxcXCInL3NhbGVzb3JkZXJzLycrc28uaWQrJy92aWV3J1xcXCIgPiB7e3NvLnNvbnVtYmVyfX08L2E+IDwvcm91dGVyLWxpbms+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7c28uY3VzdG9tZXIuZmlyc3RuYW1lfX0ge3tzby5jdXN0b21lci5sYXN0bmFtZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPnt7c28uc3RhdHVzfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XFxcIj57e3RvdGFsKHNvKS50b0ZpeGVkKDIpfX08L3RkPlxcbiAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgXFxuXFxuXFxuICAgICAgICAgPC90Ym9keT5cXG4gICAgIDwvdGFibGU+XFxuXFxuXFxuICA8L2Rpdj4gICAgICBcXG5cXG48L3RlbXBsYXRlPlxcblxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmltcG9ydCBtb21lbnQgZnJvbSBcXFwibW9tZW50XFxcIlxcbiBleHBvcnQgZGVmYXVsdCB7XFxuICAgbmFtZTpcXFwicmVjZW50XFxcIixcXG4gICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgIFxcbiAgICB9XFxuICB9LFxcblxcbiAgY29tcHV0ZWQ6e1xcbiAgICBcXG4gIH0sXFxuXFxuICBtb3VudGVkICgpIHtcXG4gICAgXFxuICB9LFxcbiAgbWV0aG9kczoge1xcblxcbiAgIH1cXG5cXG59XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbi50YWJsZV9oZWFke1xcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyXFxufVxcblxcbi50YWJsZV9kYXRhe1xcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICBjb2xvcjogI2ZmMDAzYTtcXG4gICAgIHBhZGRpbmc6IDBweCAwcHg7XFxufVxcblxcblxcblxcbjwvc3R5bGU+XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTcwMzZlZmNmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTYWxlcy52dWVcbi8vIG1vZHVsZSBpZCA9IDQ0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///443\n");

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"recent\",\n  data() {\n    return {};\n  },\n\n  computed: {},\n\n  mounted() {},\n  methods: {}\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTYWxlcy52dWU/ZGQ2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFDQTtBQUdBLEdBTkE7O0FBUUEsY0FSQTs7QUFZQSxhQUVBLENBZEE7QUFlQTs7QUFmQSIsImZpbGUiOiI0NDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxkaXYgY2xhc3M9XCJib3hcIj5cbjxoMyBzdHlsZT1cInBhZGRpbmc6IDEwcHggMTBweDttYXJnaW4tYm90dG9tOiAwcHg7XCIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+UmVjZW50IFNhbGVzIDwvaDM+XG5cblxuPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBEYXRlIDwvdGg+XG4gICAgICAgIDx0aD4gU2FsZXMgT3JkZXIgIzwvdGg+XG4gICAgICAgIDx0aD4gQ3VzdG9tZXIgTmFtZTwvdGg+XG4gICAgICAgIDx0aD4gU3RhdXM8L3RoPlxuICAgICAgICA8dGggc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6NDBweFwiPiBBbW91bnQ8L3RoPlxuXG4gICAgICAgPC90cj5cblxuICAgICAgIDwvdGhlYWQ+XG5cblxuICAgICAgICAgPHRib2R5PlxuXG4gICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihzbywgaW5kZXgpIGluIHNhbGVzb3JkZXJzXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28ub3JkZXJfZGF0ZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCInL3NhbGVzb3JkZXJzLycrc28uaWQrJy92aWV3J1wiID4ge3tzby5zb251bWJlcn19PC9hPiA8L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28uY3VzdG9tZXIuZmlyc3RuYW1lfX0ge3tzby5jdXN0b21lci5sYXN0bmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5zdGF0dXN9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcIj57e3RvdGFsKHNvKS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgIFxuXG5cbiAgICAgICAgIDwvdGJvZHk+XG4gICAgIDwvdGFibGU+XG5cblxuICA8L2Rpdj4gICAgICBcblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcbiBleHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOlwicmVjZW50XCIsXG4gICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICBcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6e1xuICAgIFxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIFxuICB9LFxuICBtZXRob2RzOiB7XG5cbiAgIH1cblxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4udGFibGVfaGVhZHtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi50YWJsZV9kYXRhe1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICBjb2xvcjogI2ZmMDAzYTtcbiAgICAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuXG5cbjwvc3R5bGU+XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2FsZXMudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///444\n");

/***/ })

})