webpackHotUpdate(0,{

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head {\\n    text-align: center\\n}\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/InvoiceSummary.vue\"],\"names\":[],\"mappings\":\";AAyGA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,eAAA;IACA,iBAAA;CACA\",\"file\":\"InvoiceSummary.vue\",\"sourcesContent\":[\"<template>\\n<div class=\\\"box\\\">\\n   <h3 style=\\\"padding: 10px 10px;margin-bottom: 0px;\\\" class=\\\"title is-6\\\">Invoices </h3>\\n\\n\\n\\n    <table class=\\\"table is-fullwidth\\\">\\n\\n\\n        <tr>\\n\\n            <td style=\\\"border:none;\\\"> <b> $12323.45 </b> from Last 365 days</td>\\n        </tr>\\n\\n        <tr>\\n\\n        <td>  \\n    </td>\\n        </tr>\\n\\n        <tr>\\n\\n            <td style=\\\"border:none\\\" class=\\\"table_head\\\"> Number Of Orders </td>\\n        </tr>\\n\\n        <tr>\\n\\n            <td style=\\\"padding:0px 0px;font-size:20px;border:none\\\" class=\\\"table_data\\\"> {{mytime}}</td>\\n        </tr>\\n\\n        <tr>\\n\\n            <td class=\\\"table_head\\\" style=\\\"padding-top:20px;border:none\\\"> Total Cost</td>\\n        </tr>\\n\\n        <tr>\\n\\n            <td style=\\\"padding:0px 0px;font-size:20px;border:none\\\" class=\\\"table_data\\\"> {{order_total.toFixed(2)}}</td>\\n        </tr>\\n\\n    </table>\\n\\n</div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\nimport VueApexCharts from 'vue-apexcharts'\\nexport default {\\n    name: \\\"userprofilemenu\\\",\\n      components: {\\n        apexchart: VueApexCharts,\\n      },\\n    data() {\\n        return {\\n            isProfileDropdownActive: false,\\n            mytime: moment().format('M'),\\n            current: 'Today',\\n            order_total: 0.00,\\n    \\n        }\\n    },\\n\\n    computed: {\\n        isLogedIn() {\\n            return this.$store.getters.isLogedIn\\n        }\\n    },\\n\\n    mounted() {\\n        document.addEventListener('click', this.close)\\n    },\\n    methods: {\\n\\n        logout: function () {\\n            this.$store.dispatch('action_logout')\\n        },\\n\\n      \\n\\n\\n        fetch_data: function (vfrom, vto) {\\n            let payload = {\\n                from: vfrom,\\n                to: vto\\n            }\\n            axios.post('api/dashboard/purchaseoordercount', payload)\\n                .then(response => {\\n                    this.mytime = response.data\\n                    console.log(response.data)\\n                })\\n                .catch(error => {\\n                    console.log(error);\\n                });\\n\\n        },\\n\\n\\n    }\\n\\n}\\n</script>\\n\\n<style>\\n.table_head {\\n    text-align: center\\n}\\n\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL0ludm9pY2VTdW1tYXJ5LnZ1ZT9kMDIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXlDLDJCQUEyQixlQUFlLHlCQUF5Qix3QkFBd0IscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUscU5BQXFOLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyx3SEFBd0gsbUJBQW1CLGdKQUFnSiwwU0FBMFMsZUFBZSxzQ0FBc0MsUUFBUSxzR0FBc0cseUdBQXlHLGVBQWUsc0NBQXNDLHdCQUF3QiwrTEFBK0wscURBQXFELDRDQUE0QyxlQUFlLGtCQUFrQix3S0FBd0ssT0FBTyxvQkFBb0IsdUJBQXVCLDZEQUE2RCxPQUFPLG9CQUFvQiwrREFBK0QsaUJBQWlCLGlDQUFpQyw4REFBOEQsNERBQTRELDZCQUE2QixzRUFBc0UsMkdBQTJHLG9IQUFvSCxvQ0FBb0MseUNBQXlDLG1CQUFtQixFQUFFLGFBQWEsWUFBWSxLQUFLLHFDQUFxQywyQkFBMkIsaUJBQWlCLHlCQUF5Qix3QkFBd0IscUJBQXFCLHVCQUF1QixHQUFHLCtCQUErQjs7QUFFdDJGIiwiZmlsZSI6IjQyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFibGVfaGVhZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlclxcbn1cXG4udGFibGVfZGF0YSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmYwMDNhO1xcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9kZXYvY2MvbGFyYXZlbC9pbnZldG9yeS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvSW52b2ljZVN1bW1hcnkudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5R0E7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkludm9pY2VTdW1tYXJ5LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG4gICA8aDMgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHggMTBweDttYXJnaW4tYm90dG9tOiAwcHg7XFxcIiBjbGFzcz1cXFwidGl0bGUgaXMtNlxcXCI+SW52b2ljZXMgPC9oMz5cXG5cXG5cXG5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGhcXFwiPlxcblxcblxcbiAgICAgICAgPHRyPlxcblxcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7XFxcIj4gPGI+ICQxMjMyMy40NSA8L2I+IGZyb20gTGFzdCAzNjUgZGF5czwvdGQ+XFxuICAgICAgICA8L3RyPlxcblxcbiAgICAgICAgPHRyPlxcblxcbiAgICAgICAgPHRkPiAgXFxuICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcblxcbiAgICAgICAgPHRyPlxcblxcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYm9yZGVyOm5vbmVcXFwiIGNsYXNzPVxcXCJ0YWJsZV9oZWFkXFxcIj4gTnVtYmVyIE9mIE9yZGVycyA8L3RkPlxcbiAgICAgICAgPC90cj5cXG5cXG4gICAgICAgIDx0cj5cXG5cXG4gICAgICAgICAgICA8dGQgc3R5bGU9XFxcInBhZGRpbmc6MHB4IDBweDtmb250LXNpemU6MjBweDtib3JkZXI6bm9uZVxcXCIgY2xhc3M9XFxcInRhYmxlX2RhdGFcXFwiPiB7e215dGltZX19PC90ZD5cXG4gICAgICAgIDwvdHI+XFxuXFxuICAgICAgICA8dHI+XFxuXFxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0YWJsZV9oZWFkXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6MjBweDtib3JkZXI6bm9uZVxcXCI+IFRvdGFsIENvc3Q8L3RkPlxcbiAgICAgICAgPC90cj5cXG5cXG4gICAgICAgIDx0cj5cXG5cXG4gICAgICAgICAgICA8dGQgc3R5bGU9XFxcInBhZGRpbmc6MHB4IDBweDtmb250LXNpemU6MjBweDtib3JkZXI6bm9uZVxcXCIgY2xhc3M9XFxcInRhYmxlX2RhdGFcXFwiPiB7e29yZGVyX3RvdGFsLnRvRml4ZWQoMil9fTwvdGQ+XFxuICAgICAgICA8L3RyPlxcblxcbiAgICA8L3RhYmxlPlxcblxcbjwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IG1vbWVudCBmcm9tIFxcXCJtb21lbnRcXFwiXFxuaW1wb3J0IFZ1ZUFwZXhDaGFydHMgZnJvbSAndnVlLWFwZXhjaGFydHMnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiBcXFwidXNlcnByb2ZpbGVtZW51XFxcIixcXG4gICAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBhcGV4Y2hhcnQ6IFZ1ZUFwZXhDaGFydHMsXFxuICAgICAgfSxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgaXNQcm9maWxlRHJvcGRvd25BY3RpdmU6IGZhbHNlLFxcbiAgICAgICAgICAgIG15dGltZTogbW9tZW50KCkuZm9ybWF0KCdNJyksXFxuICAgICAgICAgICAgY3VycmVudDogJ1RvZGF5JyxcXG4gICAgICAgICAgICBvcmRlcl90b3RhbDogMC4wMCxcXG4gICAgXFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBpc0xvZ2VkSW4oKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuaXNMb2dlZEluXFxuICAgICAgICB9XFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG5cXG4gICAgICAgIGxvZ291dDogZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhY3Rpb25fbG9nb3V0JylcXG4gICAgICAgIH0sXFxuXFxuICAgICAgXFxuXFxuXFxuICAgICAgICBmZXRjaF9kYXRhOiBmdW5jdGlvbiAodmZyb20sIHZ0bykge1xcbiAgICAgICAgICAgIGxldCBwYXlsb2FkID0ge1xcbiAgICAgICAgICAgICAgICBmcm9tOiB2ZnJvbSxcXG4gICAgICAgICAgICAgICAgdG86IHZ0b1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkL3B1cmNoYXNlb29yZGVyY291bnQnLCBwYXlsb2FkKVxcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15dGltZSA9IHJlc3BvbnNlLmRhdGFcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxuICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgfSxcXG5cXG5cXG4gICAgfVxcblxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLnRhYmxlX2hlYWQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuXFxuLnRhYmxlX2RhdGEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogI2ZmMDAzYTtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMjhkYWI1Y2JcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL0ludm9pY2VTdW1tYXJ5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///427\n");

/***/ })

})