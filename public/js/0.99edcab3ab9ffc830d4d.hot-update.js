webpackHotUpdate(0,{

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n,box{\\n    padding: 0px 0px;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/ProductChart.vue\"],\"names\":[],\"mappings\":\";AAyGA;IACA,iBAAA;CACA\",\"file\":\"ProductChart.vue\",\"sourcesContent\":[\"<template>\\n<div class=\\\"box\\\">\\n<div>\\n    <apexchart width=\\\"380\\\" type=\\\"donut\\\" :options=\\\"options\\\" :series=\\\"series\\\"></apexchart>\\n</div>\\n</div>\\n</template>\\n\\n<script>\\nimport moment from \\\"moment\\\"\\nimport VueApexCharts from 'vue-apexcharts'\\n\\nexport default {\\n    components: {\\n        apexchart: VueApexCharts,\\n    },\\n    data() {\\n\\n        return {\\n\\n            options: {},\\n            series: [44, 55, 41, 17, 15]\\n\\n        }\\n    },\\n    mounted() {\\n\\n    },\\n\\n    methods: {\\n        updateData: function (timeline) {\\n            this.selection = timeline;\\n\\n            switch (timeline) {\\n                case 'one_month':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('28 Jan 2013').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'six_months':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('27 Sep 2012').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'one_year':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('27 Feb 2012').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'ytd':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('01 Jan 2013').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'all':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: undefined,\\n                            max: undefined,\\n                        }\\n                    }\\n                    break;\\n                default:\\n\\n            }\\n        },\\n\\n        fetch_data: function () {\\n\\n            axios.post('api/dashboard/salesorders')\\n                .then(response => {\\n\\n                    this.yTemp = response.data\\n\\n                    console.log(this.yTemp)\\n\\n                    this.series = [{\\n                        data: this.yTemp\\n                    }]\\n\\n                })\\n                .catch(error => {\\n                    console.log(error);\\n                });\\n\\n        },\\n    }\\n\\n}\\n</script>\\n\\n\\n<style>\\n,box{\\n    padding: 0px 0px;\\n}\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2R1Y3RDaGFydC52dWU/ZDgzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLGdDQUFpQyx1QkFBdUIsR0FBRyxZQUFZLG1OQUFtTixNQUFNLFdBQVcsbVVBQW1VLG1CQUFtQiwwQ0FBMEMsZUFBZSxvQkFBb0IsMkJBQTJCLHdEQUF3RCxPQUFPLGtCQUFrQixTQUFTLG1CQUFtQiwyQ0FBMkMsd0NBQXdDLG1DQUFtQyw4RUFBOEUsa0NBQWtDLHFLQUFxSyx1QkFBdUIsNEJBQTRCLCtFQUErRSxrQ0FBa0MscUtBQXFLLHVCQUF1Qiw0QkFBNEIsNkVBQTZFLGtDQUFrQyxxS0FBcUssdUJBQXVCLDRCQUE0Qix3RUFBd0Usa0NBQWtDLHFLQUFxSyx1QkFBdUIsNEJBQTRCLHdFQUF3RSxrQ0FBa0MscUhBQXFILHVCQUF1Qiw0QkFBNEIsMkNBQTJDLFdBQVcsc0NBQXNDLDRGQUE0Rix5SUFBeUksaUVBQWlFLHNCQUFzQixvQ0FBb0MseUNBQXlDLG1CQUFtQixFQUFFLGFBQWEsUUFBUSxLQUFLLCtCQUErQix1QkFBdUIsR0FBRyxpQ0FBaUM7O0FBRXRtRyIsImZpbGUiOiI0MjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLGJveHtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvZGV2L2NjL2xhcmF2ZWwvaW52ZXRvcnkvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2R1Y3RDaGFydC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlHQTtJQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlByb2R1Y3RDaGFydC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbjxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuPGRpdj5cXG4gICAgPGFwZXhjaGFydCB3aWR0aD1cXFwiMzgwXFxcIiB0eXBlPVxcXCJkb251dFxcXCIgOm9wdGlvbnM9XFxcIm9wdGlvbnNcXFwiIDpzZXJpZXM9XFxcInNlcmllc1xcXCI+PC9hcGV4Y2hhcnQ+XFxuPC9kaXY+XFxuPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBtb21lbnQgZnJvbSBcXFwibW9tZW50XFxcIlxcbmltcG9ydCBWdWVBcGV4Q2hhcnRzIGZyb20gJ3Z1ZS1hcGV4Y2hhcnRzJ1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgYXBleGNoYXJ0OiBWdWVBcGV4Q2hhcnRzLFxcbiAgICB9LFxcbiAgICBkYXRhKCkge1xcblxcbiAgICAgICAgcmV0dXJuIHtcXG5cXG4gICAgICAgICAgICBvcHRpb25zOiB7fSxcXG4gICAgICAgICAgICBzZXJpZXM6IFs0NCwgNTUsIDQxLCAxNywgMTVdXFxuXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1vdW50ZWQoKSB7XFxuXFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIHVwZGF0ZURhdGE6IGZ1bmN0aW9uICh0aW1lbGluZSkge1xcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gdGltZWxpbmU7XFxuXFxuICAgICAgICAgICAgc3dpdGNoICh0aW1lbGluZSkge1xcbiAgICAgICAgICAgICAgICBjYXNlICdvbmVfbW9udGgnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBuZXcgRGF0ZSgnMjggSmFuIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbmV3IERhdGUoJzI3IEZlYiAyMDEzJykuZ2V0VGltZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdzaXhfbW9udGhzJzpcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHhheGlzOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbmV3IERhdGUoJzI3IFNlcCAyMDEyJykuZ2V0VGltZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG5ldyBEYXRlKCcyNyBGZWIgMjAxMycpLmdldFRpbWUoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgICAgICAgY2FzZSAnb25lX3llYXInOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBuZXcgRGF0ZSgnMjcgRmViIDIwMTInKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbmV3IERhdGUoJzI3IEZlYiAyMDEzJykuZ2V0VGltZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICd5dGQnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBuZXcgRGF0ZSgnMDEgSmFuIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbmV3IERhdGUoJzI3IEZlYiAyMDEzJykuZ2V0VGltZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdhbGwnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuXFxuICAgICAgICBmZXRjaF9kYXRhOiBmdW5jdGlvbiAoKSB7XFxuXFxuICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL2Rhc2hib2FyZC9zYWxlc29yZGVycycpXFxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueVRlbXAgPSByZXNwb25zZS5kYXRhXFxuXFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnlUZW1wKVxcblxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpZXMgPSBbe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMueVRlbXBcXG4gICAgICAgICAgICAgICAgICAgIH1dXFxuXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XFxuICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgfSxcXG4gICAgfVxcblxcbn1cXG48L3NjcmlwdD5cXG5cXG5cXG48c3R5bGU+XFxuLGJveHtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG59XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMGE4Zjk5YzFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2R1Y3RDaGFydC52dWVcbi8vIG1vZHVsZSBpZCA9IDQyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///425\n");

/***/ })

})