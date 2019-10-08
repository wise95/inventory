webpackHotUpdate(0,{

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.box{\\n    padding: 0px 0px;\\n    border-radius:0px;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/ProductChart.vue\"],\"names\":[],\"mappings\":\";AA0GA;IACA,iBAAA;IACA,kBAAA;CACA\",\"file\":\"ProductChart.vue\",\"sourcesContent\":[\"<template>\\n<div class=\\\"box\\\">\\n    <h3 style=\\\"\\\" class=\\\"title is-6\\\"> Best Selling Products </h3>\\n<div>\\n    <apexchart width=\\\"380\\\" type=\\\"donut\\\" :options=\\\"options\\\" :series=\\\"series\\\"></apexchart>\\n</div>\\n</div>\\n</template>\\n\\n<script>\\nimport moment from \\\"moment\\\"\\nimport VueApexCharts from 'vue-apexcharts'\\n\\nexport default {\\n    components: {\\n        apexchart: VueApexCharts,\\n    },\\n    data() {\\n\\n        return {\\n\\n            options: {},\\n            series: [44, 55, 41, 17, 15]\\n\\n        }\\n    },\\n    mounted() {\\n\\n    },\\n\\n    methods: {\\n        updateData: function (timeline) {\\n            this.selection = timeline;\\n\\n            switch (timeline) {\\n                case 'one_month':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('28 Jan 2013').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'six_months':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('27 Sep 2012').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'one_year':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('27 Feb 2012').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'ytd':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('01 Jan 2013').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'all':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: undefined,\\n                            max: undefined,\\n                        }\\n                    }\\n                    break;\\n                default:\\n\\n            }\\n        },\\n\\n        fetch_data: function () {\\n\\n            axios.post('api/dashboard/salesorders')\\n                .then(response => {\\n\\n                    this.yTemp = response.data\\n\\n                    console.log(this.yTemp)\\n\\n                    this.series = [{\\n                        data: this.yTemp\\n                    }]\\n\\n                })\\n                .catch(error => {\\n                    console.log(error);\\n                });\\n\\n        },\\n    }\\n\\n}\\n</script>\\n\\n\\n<style>\\n.box{\\n    padding: 0px 0px;\\n    border-radius:0px;\\n}\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2R1Y3RDaGFydC52dWU/ZDgzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLGdDQUFpQyx1QkFBdUIsd0JBQXdCLEdBQUcsWUFBWSxtTkFBbU4sTUFBTSxXQUFXLFdBQVcseVlBQXlZLG1CQUFtQiwwQ0FBMEMsZUFBZSxvQkFBb0IsMkJBQTJCLHdEQUF3RCxPQUFPLGtCQUFrQixTQUFTLG1CQUFtQiwyQ0FBMkMsd0NBQXdDLG1DQUFtQyw4RUFBOEUsa0NBQWtDLHFLQUFxSyx1QkFBdUIsNEJBQTRCLCtFQUErRSxrQ0FBa0MscUtBQXFLLHVCQUF1Qiw0QkFBNEIsNkVBQTZFLGtDQUFrQyxxS0FBcUssdUJBQXVCLDRCQUE0Qix3RUFBd0Usa0NBQWtDLHFLQUFxSyx1QkFBdUIsNEJBQTRCLHdFQUF3RSxrQ0FBa0MscUhBQXFILHVCQUF1Qiw0QkFBNEIsMkNBQTJDLFdBQVcsc0NBQXNDLDRGQUE0Rix5SUFBeUksaUVBQWlFLHNCQUFzQixvQ0FBb0MseUNBQXlDLG1CQUFtQixFQUFFLGFBQWEsUUFBUSxLQUFLLCtCQUErQix1QkFBdUIsd0JBQXdCLEdBQUcsaUNBQWlDOztBQUV2dUciLCJmaWxlIjoiNDI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ib3h7XFxuICAgIHBhZGRpbmc6IDBweCAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL0FwcGxpY2F0aW9ucy9YQU1QUC94YW1wcGZpbGVzL2h0ZG9jcy9kZXYvY2MvbGFyYXZlbC9pbnZldG9yeS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvZHVjdENoYXJ0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMEdBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJQcm9kdWN0Q2hhcnQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG48ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgICA8aDMgc3R5bGU9XFxcIlxcXCIgY2xhc3M9XFxcInRpdGxlIGlzLTZcXFwiPiBCZXN0IFNlbGxpbmcgUHJvZHVjdHMgPC9oMz5cXG48ZGl2PlxcbiAgICA8YXBleGNoYXJ0IHdpZHRoPVxcXCIzODBcXFwiIHR5cGU9XFxcImRvbnV0XFxcIiA6b3B0aW9ucz1cXFwib3B0aW9uc1xcXCIgOnNlcmllcz1cXFwic2VyaWVzXFxcIj48L2FwZXhjaGFydD5cXG48L2Rpdj5cXG48L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IG1vbWVudCBmcm9tIFxcXCJtb21lbnRcXFwiXFxuaW1wb3J0IFZ1ZUFwZXhDaGFydHMgZnJvbSAndnVlLWFwZXhjaGFydHMnXFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBhcGV4Y2hhcnQ6IFZ1ZUFwZXhDaGFydHMsXFxuICAgIH0sXFxuICAgIGRhdGEoKSB7XFxuXFxuICAgICAgICByZXR1cm4ge1xcblxcbiAgICAgICAgICAgIG9wdGlvbnM6IHt9LFxcbiAgICAgICAgICAgIHNlcmllczogWzQ0LCA1NSwgNDEsIDE3LCAxNV1cXG5cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgbW91bnRlZCgpIHtcXG5cXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgdXBkYXRlRGF0YTogZnVuY3Rpb24gKHRpbWVsaW5lKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aW1lbGluZTtcXG5cXG4gICAgICAgICAgICBzd2l0Y2ggKHRpbWVsaW5lKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ29uZV9tb250aCc6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcyOCBKYW4gMjAxMycpLmdldFRpbWUoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBuZXcgRGF0ZSgnMjcgRmViIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3NpeF9tb250aHMnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBuZXcgRGF0ZSgnMjcgU2VwIDIwMTInKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbmV3IERhdGUoJzI3IEZlYiAyMDEzJykuZ2V0VGltZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdvbmVfeWVhcic6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcyNyBGZWIgMjAxMicpLmdldFRpbWUoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBuZXcgRGF0ZSgnMjcgRmViIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3l0ZCc6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcwMSBKYW4gMjAxMycpLmdldFRpbWUoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBuZXcgRGF0ZSgnMjcgRmViIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ2FsbCc6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGZldGNoX2RhdGE6IGZ1bmN0aW9uICgpIHtcXG5cXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkL3NhbGVzb3JkZXJzJylcXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcblxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VGVtcCA9IHJlc3BvbnNlLmRhdGFcXG5cXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMueVRlbXApXFxuXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmllcyA9IFt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy55VGVtcFxcbiAgICAgICAgICAgICAgICAgICAgfV1cXG5cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICB9LFxcbiAgICB9XFxuXFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZT5cXG4uYm94e1xcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjBweDtcXG59XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMGE4Zjk5YzFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2R1Y3RDaGFydC52dWVcbi8vIG1vZHVsZSBpZCA9IDQyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///425\n");

/***/ })

})