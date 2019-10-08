webpackHotUpdate(0,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head {\\n    text-align: center\\n}\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/RecentSales.vue\"],\"names\":[],\"mappings\":\";AAqGA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,eAAA;IACA,iBAAA;CACA\",\"file\":\"RecentSales.vue\",\"sourcesContent\":[\"<template>\\n<div class=\\\"box\\\">\\n    <h3 style=\\\"padding: 10px 10px;margin-bottom: 0px;\\\" class=\\\"title is-6\\\">Recent Sales </h3>\\n\\n    <table class=\\\"table is-fullwidth\\\">\\n        <thead>\\n            <tr>\\n                <th> Date </th>\\n                <th> Sales Order #</th>\\n                <th> Customer Name</th>\\n                <th> Staus</th>\\n                <th style=\\\"text-align:right;padding-right:40px\\\"> Amount</th>\\n\\n            </tr>\\n\\n        </thead>\\n\\n        <tbody>\\n\\n            <tr v-for=\\\"(so, index) in salesorders\\\">\\n                <td>{{so.order_date}} </td>\\n                <td>\\n                    <router-link :to=\\\"'/salesorders/'+so.id+'/view'\\\"> {{so.sonumber}}</a> </router-link>\\n                </td>\\n                <td>{{so.customer.firstname}} {{so.customer.lastname}}</td>\\n                <td>{{so.status}}</td>\\n                <td style=\\\"text-align:right;padding-right:40px\\\">{{total(so).toFixed(2)}}</td>\\n            </tr>\\n\\n        </tbody>\\n    </table>\\n\\n</div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\nexport default {\\n    name: \\\"recentsales\\\",\\n    data() {\\n        return {\\n            salesorders: [],\\n            page: this.$route.query.page || 1,\\n        }\\n    },\\n\\n    computed: {\\n\\n    },\\n\\n    mounted() {\\n\\n        // clear query_param\\n        this.$store.commit('setQueryParam', null)\\n\\n        //this.$store.dispatch('getProducts')\\n\\n        this.$store.dispatch('getSalesOrders', {\\n                page: this.page\\n            })\\n            .then(response => {\\n                this.salesorders = response.data.data;\\n                this.links = response.data.links;\\n                this.meta = response.data.meta;\\n            })\\n\\n    },\\n    methods: {\\n        sub_total: function (products) {\\n            let sum = 0\\n            products.forEach((row, i) => {\\n                sum = sum + row.unit_price * row.qty\\n            })\\n\\n            return sum;\\n\\n        },\\n\\n        calculate_discount: function (so) {\\n            if (so.discount_type == 'd') {\\n                return Number(so.discount);\\n            }\\n\\n            if (so.discount_type == 'p') {\\n                return so.discount / 100 * (Number(this.sub_total(so.products)) + Number(this.sub_total(so.products)) * Number(so.tax_percentage / 100))\\n            }\\n\\n        },\\n\\n        total: function (so) {\\n            return Number(this.sub_total(so.products)) - Number(this.calculate_discount(so)) + (Number(this.sub_total(so.products)) * so.tax_percentage / 100);\\n        },\\n\\n     \\n    }\\n\\n}\\n</script>\\n\\n<style>\\n.table_head {\\n    text-align: center\\n}\\n\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZT8wNGU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXlDLDJCQUEyQixlQUFlLHlCQUF5Qix3QkFBd0IscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsa05BQWtOLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxzSEFBc0gsbUJBQW1CLDRUQUE0VCw4S0FBOEssZUFBZSx3R0FBd0csYUFBYSxrRUFBa0UsdUJBQXVCLEdBQUcsc0JBQXNCLDZCQUE2QixXQUFXLG9EQUFvRCx1QkFBdUIsc0JBQXNCLHlLQUF5SywwQ0FBMEMsa0JBQWtCLHlGQUF5RixPQUFPLG9CQUFvQixTQUFTLG9CQUFvQix3TEFBd0wsZ0RBQWdELGtDQUFrQyx3REFBd0QsbURBQW1ELGlEQUFpRCxlQUFlLFVBQVUsaUJBQWlCLDBDQUEwQyxxRUFBcUUscUVBQXFFLDRCQUE0QixhQUFhLGdEQUFnRCw0Q0FBNEMsNkNBQTZDLGVBQWUsOENBQThDLHlLQUF5SyxhQUFhLG1DQUFtQyxpS0FBaUssV0FBVyxpQkFBaUIsS0FBSyxxQ0FBcUMsMkJBQTJCLGlCQUFpQix5QkFBeUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsR0FBRywrQkFBK0I7O0FBRTN4RyIsImZpbGUiOiI0NDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuLnRhYmxlX2RhdGEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmMDAzYTtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvZGV2L2NjL2xhcmF2ZWwvaW52ZXRvcnkvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUdBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJSZWNlbnRTYWxlcy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbjxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuICAgIDxoMyBzdHlsZT1cXFwicGFkZGluZzogMTBweCAxMHB4O21hcmdpbi1ib3R0b206IDBweDtcXFwiIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5SZWNlbnQgU2FsZXMgPC9oMz5cXG5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGhcXFwiPlxcbiAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgPHRoPiBEYXRlIDwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD4gU2FsZXMgT3JkZXIgIzwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD4gQ3VzdG9tZXIgTmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD4gU3RhdXM8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9XFxcInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XFxcIj4gQW1vdW50PC90aD5cXG5cXG4gICAgICAgICAgICA8L3RyPlxcblxcbiAgICAgICAgPC90aGVhZD5cXG5cXG4gICAgICAgIDx0Ym9keT5cXG5cXG4gICAgICAgICAgICA8dHIgdi1mb3I9XFxcIihzbywgaW5kZXgpIGluIHNhbGVzb3JkZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRkPnt7c28ub3JkZXJfZGF0ZX19IDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XFxcIicvc2FsZXNvcmRlcnMvJytzby5pZCsnL3ZpZXcnXFxcIj4ge3tzby5zb251bWJlcn19PC9hPiA8L3JvdXRlci1saW5rPlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5jdXN0b21lci5maXJzdG5hbWV9fSB7e3NvLmN1c3RvbWVyLmxhc3RuYW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5zdGF0dXN9fTwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcXFwiPnt7dG90YWwoc28pLnRvRml4ZWQoMil9fTwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuXFxuPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgbW9tZW50IGZyb20gXFxcIm1vbWVudFxcXCJcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6IFxcXCJyZWNlbnRzYWxlc1xcXCIsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIHNhbGVzb3JkZXJzOiBbXSxcXG4gICAgICAgICAgICBwYWdlOiB0aGlzLiRyb3V0ZS5xdWVyeS5wYWdlIHx8IDEsXFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuXFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuXFxuICAgICAgICAvLyBjbGVhciBxdWVyeV9wYXJhbVxcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRRdWVyeVBhcmFtJywgbnVsbClcXG5cXG4gICAgICAgIC8vdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldFByb2R1Y3RzJylcXG5cXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRTYWxlc09yZGVycycsIHtcXG4gICAgICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2FsZXNvcmRlcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICAgICAgICAgIHRoaXMubGlua3MgPSByZXNwb25zZS5kYXRhLmxpbmtzO1xcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGEgPSByZXNwb25zZS5kYXRhLm1ldGE7XFxuICAgICAgICAgICAgfSlcXG5cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgc3ViX3RvdGFsOiBmdW5jdGlvbiAocHJvZHVjdHMpIHtcXG4gICAgICAgICAgICBsZXQgc3VtID0gMFxcbiAgICAgICAgICAgIHByb2R1Y3RzLmZvckVhY2goKHJvdywgaSkgPT4ge1xcbiAgICAgICAgICAgICAgICBzdW0gPSBzdW0gKyByb3cudW5pdF9wcmljZSAqIHJvdy5xdHlcXG4gICAgICAgICAgICB9KVxcblxcbiAgICAgICAgICAgIHJldHVybiBzdW07XFxuXFxuICAgICAgICB9LFxcblxcbiAgICAgICAgY2FsY3VsYXRlX2Rpc2NvdW50OiBmdW5jdGlvbiAoc28pIHtcXG4gICAgICAgICAgICBpZiAoc28uZGlzY291bnRfdHlwZSA9PSAnZCcpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzby5kaXNjb3VudCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlmIChzby5kaXNjb3VudF90eXBlID09ICdwJykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gc28uZGlzY291bnQgLyAxMDAgKiAoTnVtYmVyKHRoaXMuc3ViX3RvdGFsKHNvLnByb2R1Y3RzKSkgKyBOdW1iZXIodGhpcy5zdWJfdG90YWwoc28ucHJvZHVjdHMpKSAqIE51bWJlcihzby50YXhfcGVyY2VudGFnZSAvIDEwMCkpXFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIHRvdGFsOiBmdW5jdGlvbiAoc28pIHtcXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3ViX3RvdGFsKHNvLnByb2R1Y3RzKSkgLSBOdW1iZXIodGhpcy5jYWxjdWxhdGVfZGlzY291bnQoc28pKSArIChOdW1iZXIodGhpcy5zdWJfdG90YWwoc28ucHJvZHVjdHMpKSAqIHNvLnRheF9wZXJjZW50YWdlIC8gMTAwKTtcXG4gICAgICAgIH0sXFxuXFxuICAgICBcXG4gICAgfVxcblxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLnRhYmxlX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuXFxuLnRhYmxlX2RhdGEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmMDAzYTtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzAzNmVmY2ZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1JlY2VudFNhbGVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///443\n");

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: \"recentsales\",\n    data() {\n        return {\n            salesorders: [],\n            page: this.$route.query.page || 1\n        };\n    },\n\n    computed: {},\n\n    mounted() {\n\n        // clear query_param\n        this.$store.commit('setQueryParam', null);\n\n        //this.$store.dispatch('getProducts')\n\n        this.$store.dispatch('getSalesOrders', {\n            page: this.page\n        }).then(response => {\n            this.salesorders = response.data.data;\n            this.links = response.data.links;\n            this.meta = response.data.meta;\n        });\n    },\n    methods: {\n        sub_total: function (products) {\n            let sum = 0;\n            products.forEach((row, i) => {\n                sum = sum + row.unit_price * row.qty;\n            });\n\n            return sum;\n        },\n\n        calculate_discount: function (so) {\n            if (so.discount_type == 'd') {\n                return Number(so.discount);\n            }\n\n            if (so.discount_type == 'p') {\n                return so.discount / 100 * (Number(this.sub_total(so.products)) + Number(this.sub_total(so.products)) * Number(so.tax_percentage / 100));\n            }\n        },\n\n        total: function (so) {\n            return Number(this.sub_total(so.products)) - Number(this.calculate_discount(so)) + Number(this.sub_total(so.products)) * so.tax_percentage / 100;\n        }\n\n    }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTYWxlcy52dWU/ZGQ2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUE7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFGQTtBQUlBLEtBUEE7O0FBU0EsZ0JBVEE7O0FBYUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBREEsV0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVBBO0FBU0EsS0E3QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkE7O0FBSUE7QUFFQSxTQVRBOztBQVdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBLFNBcEJBOztBQXNCQTtBQUNBO0FBQ0E7O0FBeEJBOztBQTlCQSIsImZpbGUiOiI0NDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgPGgzIHN0eWxlPVwicGFkZGluZzogMTBweCAxMHB4O21hcmdpbi1ib3R0b206IDBweDtcIiBjbGFzcz1cInRpdGxlIGlzLTZcIj5SZWNlbnQgU2FsZXMgPC9oMz5cblxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGlzLWZ1bGx3aWR0aFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPiBEYXRlIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPiBTYWxlcyBPcmRlciAjPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+IEN1c3RvbWVyIE5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD4gU3RhdXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHQ7cGFkZGluZy1yaWdodDo0MHB4XCI+IEFtb3VudDwvdGg+XG5cbiAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgICAgIDx0ciB2LWZvcj1cIihzbywgaW5kZXgpIGluIHNhbGVzb3JkZXJzXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28ub3JkZXJfZGF0ZX19IDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiJy9zYWxlc29yZGVycy8nK3NvLmlkKycvdmlldydcIj4ge3tzby5zb251bWJlcn19PC9hPiA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7c28uY3VzdG9tZXIuZmlyc3RuYW1lfX0ge3tzby5jdXN0b21lci5sYXN0bmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tzby5zdGF0dXN9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtwYWRkaW5nLXJpZ2h0OjQwcHhcIj57e3RvdGFsKHNvKS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgPC90cj5cblxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJyZWNlbnRzYWxlc1wiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzYWxlc29yZGVyczogW10sXG4gICAgICAgICAgICBwYWdlOiB0aGlzLiRyb3V0ZS5xdWVyeS5wYWdlIHx8IDEsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuXG4gICAgICAgIC8vIGNsZWFyIHF1ZXJ5X3BhcmFtXG4gICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0UXVlcnlQYXJhbScsIG51bGwpXG5cbiAgICAgICAgLy90aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0UHJvZHVjdHMnKVxuXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRTYWxlc09yZGVycycsIHtcbiAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYWxlc29yZGVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtzID0gcmVzcG9uc2UuZGF0YS5saW5rcztcbiAgICAgICAgICAgICAgICB0aGlzLm1ldGEgPSByZXNwb25zZS5kYXRhLm1ldGE7XG4gICAgICAgICAgICB9KVxuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHN1Yl90b3RhbDogZnVuY3Rpb24gKHByb2R1Y3RzKSB7XG4gICAgICAgICAgICBsZXQgc3VtID0gMFxuICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgc3VtID0gc3VtICsgcm93LnVuaXRfcHJpY2UgKiByb3cucXR5XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICByZXR1cm4gc3VtO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsY3VsYXRlX2Rpc2NvdW50OiBmdW5jdGlvbiAoc28pIHtcbiAgICAgICAgICAgIGlmIChzby5kaXNjb3VudF90eXBlID09ICdkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc28uZGlzY291bnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc28uZGlzY291bnRfdHlwZSA9PSAncCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc28uZGlzY291bnQgLyAxMDAgKiAoTnVtYmVyKHRoaXMuc3ViX3RvdGFsKHNvLnByb2R1Y3RzKSkgKyBOdW1iZXIodGhpcy5zdWJfdG90YWwoc28ucHJvZHVjdHMpKSAqIE51bWJlcihzby50YXhfcGVyY2VudGFnZSAvIDEwMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICB0b3RhbDogZnVuY3Rpb24gKHNvKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuc3ViX3RvdGFsKHNvLnByb2R1Y3RzKSkgLSBOdW1iZXIodGhpcy5jYWxjdWxhdGVfZGlzY291bnQoc28pKSArIChOdW1iZXIodGhpcy5zdWJfdG90YWwoc28ucHJvZHVjdHMpKSAqIHNvLnRheF9wZXJjZW50YWdlIC8gMTAwKTtcbiAgICAgICAgfSxcblxuICAgICBcbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4udGFibGVfaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbi50YWJsZV9kYXRhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZjAwM2E7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9SZWNlbnRTYWxlcy52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///444\n");

/***/ })

})