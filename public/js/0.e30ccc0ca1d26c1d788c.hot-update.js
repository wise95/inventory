webpackHotUpdate(0,{

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head {\\n    text-align: center\\n}\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/InvoiceSummary.vue\"],\"names\":[],\"mappings\":\";AA6IA;IACA,kBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,eAAA;IACA,iBAAA;CACA\",\"file\":\"InvoiceSummary.vue\",\"sourcesContent\":[\"<template>\\n<div class=\\\"box\\\">\\n   <h3 style=\\\"padding: 10px 10px;margin-bottom: 0px;\\\" class=\\\"title is-6\\\">Invoices </h3>\\n\\n\\n\\n    <table class=\\\"table is-fullwidth\\\">\\n\\n\\n        <tr>\\n\\n            <td style=\\\"border:none;\\\"> <b> $12323.45 </b> from last 365 days</td>\\n        </tr>\\n\\n        <tr>\\n\\n            <td style=\\\"border:none;\\\">  \\n\\n                <div style=\\\"display:flex;justify-content:space-between\\\">\\n\\n                    <div> \\n\\n                      <h3 class=\\\"title\\\" style=\\\"margin-bottom:0px;font-size:20px\\\">   $2345 </h3>\\n                      <label class=\\\"label is-field-title\\\" style=\\\"font-weight: 100\\\"> Paid </label>\\n                    </div>\\n\\n                    <div> \\n                       <h3 class=\\\"title is-6\\\" style=\\\"margin-bottom:0px;font-size:20px\\\"> $3456 </h3>\\n                      <label class=\\\"label is-field-title\\\" style=\\\"font-weight: 100\\\">Not Paid </label>\\n                        \\n                    </div>\\n\\n\\n\\n                </div>\\n               <progress style=\\\"border-radius:0px\\\" class=\\\"progress is-primary\\\" value=\\\"90\\\" max=\\\"100\\\">90%</progress>\\n\\n            </td>\\n        </tr>\\n\\n\\n        <tr>\\n\\n            <td style=\\\"border:none;\\\"> <sp <b> $1232.45 </b> from last 30 days</td>\\n        </tr>\\n\\n        <tr>\\n\\n            <td style=\\\"border:none;padding-bottom:15px\\\">  \\n\\n                <div style=\\\"display:flex;justify-content:space-between\\\">\\n\\n                    <div> \\n\\n                      <h3 class=\\\"title is-6\\\" style=\\\"margin-bottom:0px;font-size:20px\\\">   $234.98 </h3>\\n                      <label class=\\\"label is-field-title\\\" style=\\\"font-weight: 100\\\">Not Paid </label>\\n                    </div>\\n\\n                    <div> \\n                       <h3 class=\\\"title is-6\\\" style=\\\"margin-bottom:0px;font-size:20px\\\"> $345.34 </h3>\\n                      <label class=\\\"label is-field-title\\\" style=\\\"font-weight: 100\\\" >Paid </label>\\n                        \\n                    </div>\\n\\n\\n\\n                </div>\\n               <progress style=\\\"border-radius:0px\\\" class=\\\"progress is-danger\\\" value=\\\"40\\\" max=\\\"100\\\">40%</progress>\\n\\n            </td>\\n        </tr>\\n\\n       \\n\\n   \\n\\n    </table>\\n\\n</div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\nimport VueApexCharts from 'vue-apexcharts'\\nexport default {\\n    name: \\\"userprofilemenu\\\",\\n      components: {\\n        apexchart: VueApexCharts,\\n      },\\n    data() {\\n        return {\\n            isProfileDropdownActive: false,\\n            mytime: moment().format('M'),\\n            current: 'Today',\\n            order_total: 0.00,\\n    \\n        }\\n    },\\n\\n    computed: {\\n        isLogedIn() {\\n            return this.$store.getters.isLogedIn\\n        }\\n    },\\n\\n    mounted() {\\n        document.addEventListener('click', this.close)\\n    },\\n    methods: {\\n\\n        logout: function () {\\n            this.$store.dispatch('action_logout')\\n        },\\n\\n      \\n\\n\\n        fetch_data: function (vfrom, vto) {\\n            let payload = {\\n                from: vfrom,\\n                to: vto\\n            }\\n            axios.post('api/dashboard/purchaseoordercount', payload)\\n                .then(response => {\\n                    this.mytime = response.data\\n                    console.log(response.data)\\n                })\\n                .catch(error => {\\n                    console.log(error);\\n                });\\n\\n        },\\n\\n\\n    }\\n\\n}\\n</script>\\n\\n<style>\\n.table_head {\\n    text-align: center\\n}\\n\\n.table_data {\\n    text-align: center;\\n    font-weight: bold;\\n    color: #ff003a;\\n    padding: 0px 0px;\\n}\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL0ludm9pY2VTdW1tYXJ5LnZ1ZT9kMDIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esd0NBQXlDLDJCQUEyQixlQUFlLHlCQUF5Qix3QkFBd0IscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUscU5BQXFOLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyx3SEFBd0gsbUJBQW1CLGdKQUFnSixxSEFBcUgsbURBQW1ELHNJQUFzSSw0UUFBNFEscWJBQXFiLHVIQUF1SCxzRUFBc0UsMklBQTJJLGlSQUFpUixzakJBQXNqQixxREFBcUQsNENBQTRDLGVBQWUsa0JBQWtCLHdLQUF3SyxPQUFPLG9CQUFvQix1QkFBdUIsNkRBQTZELE9BQU8sb0JBQW9CLCtEQUErRCxpQkFBaUIsaUNBQWlDLDhEQUE4RCw0REFBNEQsNkJBQTZCLHNFQUFzRSwyR0FBMkcsb0hBQW9ILG9DQUFvQyx5Q0FBeUMsbUJBQW1CLEVBQUUsYUFBYSxZQUFZLEtBQUsscUNBQXFDLDJCQUEyQixpQkFBaUIseUJBQXlCLHdCQUF3QixxQkFBcUIsdUJBQXVCLEdBQUcsK0JBQStCOztBQUVscUkiLCJmaWxlIjoiNDI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZV9oZWFkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxufVxcbi50YWJsZV9kYXRhIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZjAwM2E7XFxuICAgIHBhZGRpbmc6IDBweCAwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvaHRkb2NzL2Rldi9jYy9sYXJhdmVsL2ludmV0b3J5L3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9JbnZvaWNlU3VtbWFyeS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZJQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW52b2ljZVN1bW1hcnkudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG48ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgIDxoMyBzdHlsZT1cXFwicGFkZGluZzogMTBweCAxMHB4O21hcmdpbi1ib3R0b206IDBweDtcXFwiIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5JbnZvaWNlcyA8L2gzPlxcblxcblxcblxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIGlzLWZ1bGx3aWR0aFxcXCI+XFxuXFxuXFxuICAgICAgICA8dHI+XFxuXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtcXFwiPiA8Yj4gJDEyMzIzLjQ1IDwvYj4gZnJvbSBsYXN0IDM2NSBkYXlzPC90ZD5cXG4gICAgICAgIDwvdHI+XFxuXFxuICAgICAgICA8dHI+XFxuXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtcXFwiPiAgXFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlblxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJ0aXRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MHB4O2ZvbnQtc2l6ZToyMHB4XFxcIj4gICAkMjM0NSA8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsIGlzLWZpZWxkLXRpdGxlXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IDEwMFxcXCI+IFBhaWQgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gXFxuICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInRpdGxlIGlzLTZcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOjBweDtmb250LXNpemU6MjBweFxcXCI+ICQzNDU2IDwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWwgaXMtZmllbGQtdGl0bGVcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogMTAwXFxcIj5Ob3QgUGFpZCA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgIDxwcm9ncmVzcyBzdHlsZT1cXFwiYm9yZGVyLXJhZGl1czowcHhcXFwiIGNsYXNzPVxcXCJwcm9ncmVzcyBpcy1wcmltYXJ5XFxcIiB2YWx1ZT1cXFwiOTBcXFwiIG1heD1cXFwiMTAwXFxcIj45MCU8L3Byb2dyZXNzPlxcblxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcblxcblxcbiAgICAgICAgPHRyPlxcblxcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7XFxcIj4gPHNwIDxiPiAkMTIzMi40NSA8L2I+IGZyb20gbGFzdCAzMCBkYXlzPC90ZD5cXG4gICAgICAgIDwvdHI+XFxuXFxuICAgICAgICA8dHI+XFxuXFxuICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtwYWRkaW5nLWJvdHRvbToxNXB4XFxcIj4gIFxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW5cXFwiPlxcblxcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gXFxuXFxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwidGl0bGUgaXMtNlxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MHB4O2ZvbnQtc2l6ZToyMHB4XFxcIj4gICAkMjM0Ljk4IDwvaDM+XFxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWwgaXMtZmllbGQtdGl0bGVcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogMTAwXFxcIj5Ob3QgUGFpZCA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiBcXG4gICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwidGl0bGUgaXMtNlxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MHB4O2ZvbnQtc2l6ZToyMHB4XFxcIj4gJDM0NS4zNCA8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImxhYmVsIGlzLWZpZWxkLXRpdGxlXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IDEwMFxcXCIgPlBhaWQgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcblxcblxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICA8cHJvZ3Jlc3Mgc3R5bGU9XFxcImJvcmRlci1yYWRpdXM6MHB4XFxcIiBjbGFzcz1cXFwicHJvZ3Jlc3MgaXMtZGFuZ2VyXFxcIiB2YWx1ZT1cXFwiNDBcXFwiIG1heD1cXFwiMTAwXFxcIj40MCU8L3Byb2dyZXNzPlxcblxcbiAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8L3RyPlxcblxcbiAgICAgICBcXG5cXG4gICBcXG5cXG4gICAgPC90YWJsZT5cXG5cXG48L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmltcG9ydCBtb21lbnQgZnJvbSBcXFwibW9tZW50XFxcIlxcbmltcG9ydCBWdWVBcGV4Q2hhcnRzIGZyb20gJ3Z1ZS1hcGV4Y2hhcnRzJ1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogXFxcInVzZXJwcm9maWxlbWVudVxcXCIsXFxuICAgICAgY29tcG9uZW50czoge1xcbiAgICAgICAgYXBleGNoYXJ0OiBWdWVBcGV4Q2hhcnRzLFxcbiAgICAgIH0sXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGlzUHJvZmlsZURyb3Bkb3duQWN0aXZlOiBmYWxzZSxcXG4gICAgICAgICAgICBteXRpbWU6IG1vbWVudCgpLmZvcm1hdCgnTScpLFxcbiAgICAgICAgICAgIGN1cnJlbnQ6ICdUb2RheScsXFxuICAgICAgICAgICAgb3JkZXJfdG90YWw6IDAuMDAsXFxuICAgIFxcbiAgICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgaXNMb2dlZEluKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmlzTG9nZWRJblxcbiAgICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBtb3VudGVkKCkge1xcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlKVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuXFxuICAgICAgICBsb2dvdXQ6IGZ1bmN0aW9uICgpIHtcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWN0aW9uX2xvZ291dCcpXFxuICAgICAgICB9LFxcblxcbiAgICAgIFxcblxcblxcbiAgICAgICAgZmV0Y2hfZGF0YTogZnVuY3Rpb24gKHZmcm9tLCB2dG8pIHtcXG4gICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHtcXG4gICAgICAgICAgICAgICAgZnJvbTogdmZyb20sXFxuICAgICAgICAgICAgICAgIHRvOiB2dG9cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL2Rhc2hib2FyZC9wdXJjaGFzZW9vcmRlcmNvdW50JywgcGF5bG9hZClcXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teXRpbWUgPSByZXNwb25zZS5kYXRhXFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgIH0sXFxuXFxuXFxuICAgIH1cXG5cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi50YWJsZV9oZWFkIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxufVxcblxcbi50YWJsZV9kYXRhIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZjAwM2E7XFxuICAgIHBhZGRpbmc6IDBweCAwcHg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTI4ZGFiNWNiXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9JbnZvaWNlU3VtbWFyeS52dWVcbi8vIG1vZHVsZSBpZCA9IDQyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///427\n");

/***/ })

})