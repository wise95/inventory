webpackHotUpdate(0,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head{\\n     text-align: center\\n}\\n.table_data{\\n     text-align: center;\\n     font-weight: bold;\\n     color: #ff003a;\\n     padding: 0px 0px;\\n}\\n\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/RecentSales.vue\"],\"names\":[],\"mappings\":\";AAuEA;KACA,kBAAA;CACA;AAEA;KACA,mBAAA;KACA,kBAAA;KACA,eAAA;KACA,iBAAA;CACA\",\"file\":\"RecentSales.vue\",\"sourcesContent\":[\"<template>\\n\\n<div class=\\\"box\\\">\\n<h3 style=\\\"padding: 10px 10px;margin-bottom: 0px;\\\" class=\\\"title is-6\\\">Recent Sales </h3>\\n\\n\\n<table class=\\\"table is-fullwidth\\\">\\n       <thead>\\n       <tr>\\n        <th> Date </th>\\n        <th> Sales Order #</th>\\n        <th> Customer Name</th>\\n        <th> Staus</th>\\n        <th style=\\\"text-align:right;padding-right:40px\\\"> Amount</th>\\n\\n       </tr>\\n\\n       </thead>\\n\\n\\n         <tbody>\\n\\n              <tr v-for=\\\"(so, index) in salesorders\\\">\\n                <td>{{so.order_date}} </td>\\n                <td><router-link :to=\\\"'/salesorders/'+so.id+'/view'\\\" > {{so.sonumber}}</a> </router-link></td>\\n                <td>{{so.customer.firstname}} {{so.customer.lastname}}</td>\\n                <td>{{so.status}}</td>\\n                <td style=\\\"text-align:right;padding-right:40px\\\">{{total(so).toFixed(2)}}</td>\\n              </tr>\\n       \\n\\n\\n         </tbody>\\n     </table>\\n\\n\\n  </div>      \\n\\n</template>\\n\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\n export default {\\n   name:\\\"userprofilemenu\\\",\\n   data () {\\n    return {\\n   \\n    }\\n  },\\n\\n  computed:{\\n    isLogedIn(){\\n      return this.$store.getters.isLogedIn\\n    }\\n  },\\n\\n  mounted () {\\n    \\n  },\\n  methods: {\\n\\n   }\\n\\n}\\n\\n</script>\\n\\n<style>\\n\\n.table_head{\\n     text-align: center\\n}\\n\\n.table_data{\\n     text-align: center;\\n     font-weight: bold;\\n     color: #ff003a;\\n     padding: 0px 0px;\\n}\\n\\n\\n\\n</style>\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZT8wNGU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXdDLDRCQUE0QixjQUFjLDBCQUEwQix5QkFBeUIsc0JBQXNCLHdCQUF3QixHQUFHLGdCQUFnQixrTkFBa04sTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLG9IQUFvSCxtQkFBbUIsNFFBQTRRLDZLQUE2SyxlQUFlLG1GQUFtRixhQUFhLGdEQUFnRCx1QkFBdUIsR0FBRyxzQkFBc0IsNkJBQTZCLFdBQVcsb0RBQW9ELHVCQUF1QixzQkFBc0IsdU1BQXVNLDRDQUE0QyxjQUFjLFlBQVksS0FBSyxpQkFBaUIsa0JBQWtCLG1EQUFtRCxLQUFLLG1CQUFtQixXQUFXLGVBQWUsUUFBUSxLQUFLLHdDQUF3Qyw0QkFBNEIsZ0JBQWdCLDBCQUEwQix5QkFBeUIsc0JBQXNCLHdCQUF3QixHQUFHLHlDQUF5Qzs7QUFFOS9EIiwiZmlsZSI6IjQ0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFibGVfaGVhZHtcXG4gICAgIHRleHQtYWxpZ246IGNlbnRlclxcbn1cXG4udGFibGVfZGF0YXtcXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgY29sb3I6ICNmZjAwM2E7XFxuICAgICBwYWRkaW5nOiAwcHggMHB4O1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9kZXYvY2MvbGFyYXZlbC9pbnZldG9yeS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2FsZXMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF1RUE7S0FDQSxrQkFBQTtDQUNBO0FBRUE7S0FDQSxtQkFBQTtLQUNBLGtCQUFBO0tBQ0EsZUFBQTtLQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlJlY2VudFNhbGVzLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG48aDMgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHggMTBweDttYXJnaW4tYm90dG9tOiAwcHg7XFxcIiBjbGFzcz1cXFwidGl0bGUgaXMtNlxcXCI+UmVjZW50IFNhbGVzIDwvaDM+XFxuXFxuXFxuPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGhcXFwiPlxcbiAgICAgICA8dGhlYWQ+XFxuICAgICAgIDx0cj5cXG4gICAgICAgIDx0aD4gRGF0ZSA8L3RoPlxcbiAgICAgICAgPHRoPiBTYWxlcyBPcmRlciAjPC90aD5cXG4gICAgICAgIDx0aD4gQ3VzdG9tZXIgTmFtZTwvdGg+XFxuICAgICAgICA8dGg+IFN0YXVzPC90aD5cXG4gICAgICAgIDx0aCBzdHlsZT1cXFwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcXFwiPiBBbW91bnQ8L3RoPlxcblxcbiAgICAgICA8L3RyPlxcblxcbiAgICAgICA8L3RoZWFkPlxcblxcblxcbiAgICAgICAgIDx0Ym9keT5cXG5cXG4gICAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwiKHNvLCBpbmRleCkgaW4gc2FsZXNvcmRlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5vcmRlcl9kYXRlfX0gPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XFxcIicvc2FsZXNvcmRlcnMvJytzby5pZCsnL3ZpZXcnXFxcIiA+IHt7c28uc29udW1iZXJ9fTwvYT4gPC9yb3V0ZXItbGluaz48L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5jdXN0b21lci5maXJzdG5hbWV9fSB7e3NvLmN1c3RvbWVyLmxhc3RuYW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5zdGF0dXN9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcXFwiPnt7dG90YWwoc28pLnRvRml4ZWQoMil9fTwvdGQ+XFxuICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICBcXG5cXG5cXG4gICAgICAgICA8L3Rib2R5PlxcbiAgICAgPC90YWJsZT5cXG5cXG5cXG4gIDwvZGl2PiAgICAgIFxcblxcbjwvdGVtcGxhdGU+XFxuXFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IG1vbWVudCBmcm9tIFxcXCJtb21lbnRcXFwiXFxuIGV4cG9ydCBkZWZhdWx0IHtcXG4gICBuYW1lOlxcXCJ1c2VycHJvZmlsZW1lbnVcXFwiLFxcbiAgIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgIFxcbiAgICB9XFxuICB9LFxcblxcbiAgY29tcHV0ZWQ6e1xcbiAgICBpc0xvZ2VkSW4oKXtcXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5pc0xvZ2VkSW5cXG4gICAgfVxcbiAgfSxcXG5cXG4gIG1vdW50ZWQgKCkge1xcbiAgICBcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuXFxuICAgfVxcblxcbn1cXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuLnRhYmxlX2hlYWR7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuXFxuLnRhYmxlX2RhdGF7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgIGNvbG9yOiAjZmYwMDNhO1xcbiAgICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuXFxuXFxuXFxuPC9zdHlsZT5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzAzNmVmY2ZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///443\n");

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"userprofilemenu\",\n  data() {\n    return {};\n  },\n\n  computed: {\n    isLogedIn() {\n      return this.$store.getters.isLogedIn;\n    }\n  },\n\n  mounted() {},\n  methods: {}\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTYWxlcy52dWU/ZGQ2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUE7QUFDQTtBQUdBLEdBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQSxHQVJBOztBQWNBLGFBRUEsQ0FoQkE7QUFpQkE7O0FBakJBIiwiZmlsZSI6IjQ0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuPGRpdiBjbGFzcz1cImJveFwiPlxuPGgzIHN0eWxlPVwicGFkZGluZzogMTBweCAxMHB4O21hcmdpbi1ib3R0b206IDBweDtcIiBjbGFzcz1cInRpdGxlIGlzLTZcIj5SZWNlbnQgU2FsZXMgPC9oMz5cblxuXG48dGFibGUgY2xhc3M9XCJ0YWJsZSBpcy1mdWxsd2lkdGhcIj5cbiAgICAgICA8dGhlYWQ+XG4gICAgICAgPHRyPlxuICAgICAgICA8dGg+IERhdGUgPC90aD5cbiAgICAgICAgPHRoPiBTYWxlcyBPcmRlciAjPC90aD5cbiAgICAgICAgPHRoPiBDdXN0b21lciBOYW1lPC90aD5cbiAgICAgICAgPHRoPiBTdGF1czwvdGg+XG4gICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XCI+IEFtb3VudDwvdGg+XG5cbiAgICAgICA8L3RyPlxuXG4gICAgICAgPC90aGVhZD5cblxuXG4gICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHNvLCBpbmRleCkgaW4gc2FsZXNvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5vcmRlcl9kYXRlfX0gPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cIicvc2FsZXNvcmRlcnMvJytzby5pZCsnL3ZpZXcnXCIgPiB7e3NvLnNvbnVtYmVyfX08L2E+IDwvcm91dGVyLWxpbms+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5jdXN0b21lci5maXJzdG5hbWV9fSB7e3NvLmN1c3RvbWVyLmxhc3RuYW1lfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57e3NvLnN0YXR1c319PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ0ZXh0LWFsaWduOnJpZ2h0O3BhZGRpbmctcmlnaHQ6NDBweFwiPnt7dG90YWwoc28pLnRvRml4ZWQoMil9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgXG5cblxuICAgICAgICAgPC90Ym9keT5cbiAgICAgPC90YWJsZT5cblxuXG4gIDwvZGl2PiAgICAgIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxuIGV4cG9ydCBkZWZhdWx0IHtcbiAgIG5hbWU6XCJ1c2VycHJvZmlsZW1lbnVcIixcbiAgIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICBcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6e1xuICAgIGlzTG9nZWRJbigpe1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuaXNMb2dlZEluXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIFxuICB9LFxuICBtZXRob2RzOiB7XG5cbiAgIH1cblxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4udGFibGVfaGVhZHtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi50YWJsZV9kYXRhe1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICBjb2xvcjogI2ZmMDAzYTtcbiAgICAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuXG5cbjwvc3R5bGU+XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvUmVjZW50U2FsZXMudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///444\n");

/***/ })

})