webpackHotUpdate(0,{

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head {\\n    text-align: center\\n}\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/Inventory.vue\"],\"names\":[],\"mappings\":\";AAoFA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,eAAA;IACA,iBAAA;CACA\",\"file\":\"Inventory.vue\",\"sourcesContent\":[\"<template>\\n<div class=\\\"box\\\">\\n   <h3 style=\\\"padding: 10px 10px;margin-bottom: 0px;\\\" class=\\\"title is-6\\\">Inventory </h3>\\n\\n\\n\\n    <table class=\\\"table is-fullwidth\\\">\\n\\n\\n       \\n\\n       <tr>\\n           <td> </td>\\n           \\n\\n       \\n\\n   \\n\\n    </table>\\n\\n</div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\nimport VueApexCharts from 'vue-apexcharts'\\nexport default {\\n    name: \\\"userprofilemenu\\\",\\n      components: {\\n        apexchart: VueApexCharts,\\n      },\\n    data() {\\n        return {\\n            isProfileDropdownActive: false,\\n            mytime: moment().format('M'),\\n            current: 'Today',\\n            order_total: 0.00,\\n    \\n        }\\n    },\\n\\n    computed: {\\n        isLogedIn() {\\n            return this.$store.getters.isLogedIn\\n        }\\n    },\\n\\n    mounted() {\\n        document.addEventListener('click', this.close)\\n    },\\n    methods: {\\n\\n        logout: function () {\\n            this.$store.dispatch('action_logout')\\n        },\\n\\n      \\n\\n\\n        fetch_data: function (vfrom, vto) {\\n            let payload = {\\n                from: vfrom,\\n                to: vto\\n            }\\n            axios.post('api/dashboard/purchaseoordercount', payload)\\n                .then(response => {\\n                    this.mytime = response.data\\n                    console.log(response.data)\\n                })\\n                .catch(error => {\\n                    console.log(error);\\n                });\\n\\n        },\\n\\n\\n    }\\n\\n}\\n</script>\\n\\n<style>\\n.table_head {\\n    text-align: center\\n}\\n\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL0ludmVudG9yeS52dWU/N2E3ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLHdDQUF5QywyQkFBMkIsZUFBZSx5QkFBeUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLGdOQUFnTixNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsbUhBQW1ILG1CQUFtQixvVkFBb1YscURBQXFELDRDQUE0QyxlQUFlLGtCQUFrQix3S0FBd0ssT0FBTyxvQkFBb0IsdUJBQXVCLDZEQUE2RCxPQUFPLG9CQUFvQiwrREFBK0QsaUJBQWlCLGlDQUFpQyw4REFBOEQsNERBQTRELDZCQUE2QixzRUFBc0UsMkdBQTJHLG9IQUFvSCxvQ0FBb0MseUNBQXlDLG1CQUFtQixFQUFFLGFBQWEsWUFBWSxLQUFLLHFDQUFxQywyQkFBMkIsaUJBQWlCLHlCQUF5Qix3QkFBd0IscUJBQXFCLHVCQUF1QixHQUFHLCtCQUErQjs7QUFFOXRFIiwiZmlsZSI6IjQzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFibGVfaGVhZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxcbn1cXG4udGFibGVfZGF0YSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmYwMDNhO1xcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9kZXYvY2MvbGFyYXZlbC9pbnZldG9yeS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvSW52ZW50b3J5LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0ZBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJJbnZlbnRvcnkudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG48ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgIDxoMyBzdHlsZT1cXFwicGFkZGluZzogMTBweCAxMHB4O21hcmdpbi1ib3R0b206IDBweDtcXFwiIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5JbnZlbnRvcnkgPC9oMz5cXG5cXG5cXG5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGhcXFwiPlxcblxcblxcbiAgICAgICBcXG5cXG4gICAgICAgPHRyPlxcbiAgICAgICAgICAgPHRkPiA8L3RkPlxcbiAgICAgICAgICAgXFxuXFxuICAgICAgIFxcblxcbiAgIFxcblxcbiAgICA8L3RhYmxlPlxcblxcbjwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IG1vbWVudCBmcm9tIFxcXCJtb21lbnRcXFwiXFxuaW1wb3J0IFZ1ZUFwZXhDaGFydHMgZnJvbSAndnVlLWFwZXhjaGFydHMnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiBcXFwidXNlcnByb2ZpbGVtZW51XFxcIixcXG4gICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBhcGV4Y2hhcnQ6IFZ1ZUFwZXhDaGFydHMsXFxuICAgICAgfSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgaXNQcm9maWxlRHJvcGRvd25BY3RpdmU6IGZhbHNlLFxcbiAgICAgICAgICAgIG15dGltZTogbW9tZW50KCkuZm9ybWF0KCdNJyksXFxuICAgICAgICAgICAgY3VycmVudDogJ1RvZGF5JyxcXG4gICAgICAgICAgICBvcmRlcl90b3RhbDogMC4wMCxcXG4gICAgXFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBpc0xvZ2VkSW4oKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuaXNMb2dlZEluXFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICAgIGxvZ291dDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhY3Rpb25fbG9nb3V0JylcXG4gICAgICAgIH0sXFxuXFxuICAgICAgXFxuXFxuXFxuICAgICAgICBmZXRjaF9kYXRhOiBmdW5jdGlvbiAodmZyb20sIHZ0bykge1xcbiAgICAgICAgICAgIGxldCBwYXlsb2FkID0ge1xcbiAgICAgICAgICAgICAgICBmcm9tOiB2ZnJvbSxcXG4gICAgICAgICAgICAgICAgdG86IHZ0b1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkL3B1cmNoYXNlb29yZGVyY291bnQnLCBwYXlsb2FkKVxcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15dGltZSA9IHJlc3BvbnNlLmRhdGFcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxuICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgfSxcXG5cXG5cXG4gICAgfVxcblxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLnRhYmxlX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuXFxuLnRhYmxlX2RhdGEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmMDAzYTtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDExODIxYmFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL0ludmVudG9yeS52dWVcbi8vIG1vZHVsZSBpZCA9IDQzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///432\n");

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_apexcharts__ = __webpack_require__(407);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_apexcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_apexcharts__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: \"userprofilemenu\",\n    components: {\n        apexchart: __WEBPACK_IMPORTED_MODULE_2_vue_apexcharts___default.a\n    },\n    data() {\n        return {\n            isProfileDropdownActive: false,\n            mytime: __WEBPACK_IMPORTED_MODULE_1_moment___default()().format('M'),\n            current: 'Today',\n            order_total: 0.00\n\n        };\n    },\n\n    computed: {\n        isLogedIn() {\n            return this.$store.getters.isLogedIn;\n        }\n    },\n\n    mounted() {\n        document.addEventListener('click', this.close);\n    },\n    methods: {\n\n        logout: function () {\n            this.$store.dispatch('action_logout');\n        },\n\n        fetch_data: function (vfrom, vto) {\n            let payload = {\n                from: vfrom,\n                to: vto\n            };\n            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('api/dashboard/purchaseoordercount', payload).then(response => {\n                this.mytime = response.data;\n                console.log(response.data);\n            }).catch(error => {\n                console.log(error);\n            });\n        }\n\n    }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9JbnZlbnRvcnkudnVlP2ViNmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFDQTtBQURBLEtBRkE7QUFLQTtBQUNBO0FBQ0EsMENBREE7QUFFQSxnRkFGQTtBQUdBLDRCQUhBO0FBSUE7O0FBSkE7QUFPQSxLQWJBOztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBSEEsS0FmQTs7QUFxQkE7QUFDQTtBQUNBLEtBdkJBO0FBd0JBOztBQUVBO0FBQ0E7QUFDQSxTQUpBOztBQVNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBO0FBRkE7QUFJQSw2R0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFKQSxFQUtBLEtBTEEsQ0FLQTtBQUNBO0FBQ0EsYUFQQTtBQVNBOztBQXZCQTs7QUF4QkEiLCJmaWxlIjoiNDMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cImJveFwiPlxuICAgPGgzIHN0eWxlPVwicGFkZGluZzogMTBweCAxMHB4O21hcmdpbi1ib3R0b206IDBweDtcIiBjbGFzcz1cInRpdGxlIGlzLTZcIj5JbnZlbnRvcnkgPC9oMz5cblxuXG5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBpcy1mdWxsd2lkdGhcIj5cblxuXG4gICAgICAgXG5cbiAgICAgICA8dHI+XG4gICAgICAgICAgIDx0ZD4gPC90ZD5cbiAgICAgICAgICAgXG5cbiAgICAgICBcblxuICAgXG5cbiAgICA8L3RhYmxlPlxuXG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxuaW1wb3J0IFZ1ZUFwZXhDaGFydHMgZnJvbSAndnVlLWFwZXhjaGFydHMnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJ1c2VycHJvZmlsZW1lbnVcIixcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYXBleGNoYXJ0OiBWdWVBcGV4Q2hhcnRzLFxuICAgICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNQcm9maWxlRHJvcGRvd25BY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbXl0aW1lOiBtb21lbnQoKS5mb3JtYXQoJ00nKSxcbiAgICAgICAgICAgIGN1cnJlbnQ6ICdUb2RheScsXG4gICAgICAgICAgICBvcmRlcl90b3RhbDogMC4wMCxcbiAgICBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpc0xvZ2VkSW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5pc0xvZ2VkSW5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgbG9nb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWN0aW9uX2xvZ291dCcpXG4gICAgICAgIH0sXG5cbiAgICAgIFxuXG5cbiAgICAgICAgZmV0Y2hfZGF0YTogZnVuY3Rpb24gKHZmcm9tLCB2dG8pIHtcbiAgICAgICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgIGZyb206IHZmcm9tLFxuICAgICAgICAgICAgICAgIHRvOiB2dG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS9kYXNoYm9hcmQvcHVyY2hhc2Vvb3JkZXJjb3VudCcsIHBheWxvYWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm15dGltZSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9LFxuXG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4udGFibGVfaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi50YWJsZV9kYXRhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZjAwM2E7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9JbnZlbnRvcnkudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///433\n");

/***/ })

})