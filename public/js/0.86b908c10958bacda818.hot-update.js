webpackHotUpdate(0,{

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(7)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.box{\\n    padding: 0px 0px;\\n    border-radius:0px\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/ProductChart.vue\"],\"names\":[],\"mappings\":\";AAyGA;IACA,iBAAA;IACA,iBAAA;CACA\",\"file\":\"ProductChart.vue\",\"sourcesContent\":[\"<template>\\n<div class=\\\"box\\\">\\n<div>\\n    <apexchart width=\\\"380\\\" type=\\\"donut\\\" :options=\\\"options\\\" :series=\\\"series\\\"></apexchart>\\n</div>\\n</div>\\n</template>\\n\\n<script>\\nimport moment from \\\"moment\\\"\\nimport VueApexCharts from 'vue-apexcharts'\\n\\nexport default {\\n    components: {\\n        apexchart: VueApexCharts,\\n    },\\n    data() {\\n\\n        return {\\n\\n            options: {},\\n            series: [44, 55, 41, 17, 15]\\n\\n        }\\n    },\\n    mounted() {\\n\\n    },\\n\\n    methods: {\\n        updateData: function (timeline) {\\n            this.selection = timeline;\\n\\n            switch (timeline) {\\n                case 'one_month':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('28 Jan 2013').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'six_months':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('27 Sep 2012').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'one_year':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('27 Feb 2012').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'ytd':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: new Date('01 Jan 2013').getTime(),\\n                            max: new Date('27 Feb 2013').getTime(),\\n                        }\\n                    }\\n                    break;\\n                case 'all':\\n                    this.chartOptions = {\\n                        xaxis: {\\n                            min: undefined,\\n                            max: undefined,\\n                        }\\n                    }\\n                    break;\\n                default:\\n\\n            }\\n        },\\n\\n        fetch_data: function () {\\n\\n            axios.post('api/dashboard/salesorders')\\n                .then(response => {\\n\\n                    this.yTemp = response.data\\n\\n                    console.log(this.yTemp)\\n\\n                    this.series = [{\\n                        data: this.yTemp\\n                    }]\\n\\n                })\\n                .catch(error => {\\n                    console.log(error);\\n                });\\n\\n        },\\n    }\\n\\n}\\n</script>\\n\\n\\n<style>\\n.box{\\n    padding: 0px 0px;\\n    border-radius:0px\\n}\\n\\n</style>\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2R1Y3RDaGFydC52dWU/ZDgzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLGdDQUFpQyx1QkFBdUIsMEJBQTBCLFlBQVksbU5BQW1OLE1BQU0sV0FBVyxXQUFXLG1VQUFtVSxtQkFBbUIsMENBQTBDLGVBQWUsb0JBQW9CLDJCQUEyQix3REFBd0QsT0FBTyxrQkFBa0IsU0FBUyxtQkFBbUIsMkNBQTJDLHdDQUF3QyxtQ0FBbUMsOEVBQThFLGtDQUFrQyxxS0FBcUssdUJBQXVCLDRCQUE0QiwrRUFBK0Usa0NBQWtDLHFLQUFxSyx1QkFBdUIsNEJBQTRCLDZFQUE2RSxrQ0FBa0MscUtBQXFLLHVCQUF1Qiw0QkFBNEIsd0VBQXdFLGtDQUFrQyxxS0FBcUssdUJBQXVCLDRCQUE0Qix3RUFBd0Usa0NBQWtDLHFIQUFxSCx1QkFBdUIsNEJBQTRCLDJDQUEyQyxXQUFXLHNDQUFzQyw0RkFBNEYseUlBQXlJLGlFQUFpRSxzQkFBc0Isb0NBQW9DLHlDQUF5QyxtQkFBbUIsRUFBRSxhQUFhLFFBQVEsS0FBSywrQkFBK0IsdUJBQXVCLDBCQUEwQixpQ0FBaUM7O0FBRS9wRyIsImZpbGUiOiI0MjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJveHtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czowcHhcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvZGV2L2NjL2xhcmF2ZWwvaW52ZXRvcnkvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1Byb2R1Y3RDaGFydC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlHQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUHJvZHVjdENoYXJ0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG48ZGl2PlxcbiAgICA8YXBleGNoYXJ0IHdpZHRoPVxcXCIzODBcXFwiIHR5cGU9XFxcImRvbnV0XFxcIiA6b3B0aW9ucz1cXFwib3B0aW9uc1xcXCIgOnNlcmllcz1cXFwic2VyaWVzXFxcIj48L2FwZXhjaGFydD5cXG48L2Rpdj5cXG48L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IG1vbWVudCBmcm9tIFxcXCJtb21lbnRcXFwiXFxuaW1wb3J0IFZ1ZUFwZXhDaGFydHMgZnJvbSAndnVlLWFwZXhjaGFydHMnXFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBhcGV4Y2hhcnQ6IFZ1ZUFwZXhDaGFydHMsXFxuICAgIH0sXFxuICAgIGRhdGEoKSB7XFxuXFxuICAgICAgICByZXR1cm4ge1xcblxcbiAgICAgICAgICAgIG9wdGlvbnM6IHt9LFxcbiAgICAgICAgICAgIHNlcmllczogWzQ0LCA1NSwgNDEsIDE3LCAxNV1cXG5cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgbW91bnRlZCgpIHtcXG5cXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgdXBkYXRlRGF0YTogZnVuY3Rpb24gKHRpbWVsaW5lKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aW1lbGluZTtcXG5cXG4gICAgICAgICAgICBzd2l0Y2ggKHRpbWVsaW5lKSB7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ29uZV9tb250aCc6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcyOCBKYW4gMjAxMycpLmdldFRpbWUoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBuZXcgRGF0ZSgnMjcgRmViIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3NpeF9tb250aHMnOlxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBuZXcgRGF0ZSgnMjcgU2VwIDIwMTInKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbmV3IERhdGUoJzI3IEZlYiAyMDEzJykuZ2V0VGltZSgpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICAgICAgICBjYXNlICdvbmVfeWVhcic6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcyNyBGZWIgMjAxMicpLmdldFRpbWUoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBuZXcgRGF0ZSgnMjcgRmViIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ3l0ZCc6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcwMSBKYW4gMjAxMycpLmdldFRpbWUoKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBuZXcgRGF0ZSgnMjcgRmViIDIwMTMnKS5nZXRUaW1lKCksXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGNhc2UgJ2FsbCc6XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIGZldGNoX2RhdGE6IGZ1bmN0aW9uICgpIHtcXG5cXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkL3NhbGVzb3JkZXJzJylcXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xcblxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VGVtcCA9IHJlc3BvbnNlLmRhdGFcXG5cXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMueVRlbXApXFxuXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcmllcyA9IFt7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy55VGVtcFxcbiAgICAgICAgICAgICAgICAgICAgfV1cXG5cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICB9LFxcbiAgICB9XFxuXFxufVxcbjwvc2NyaXB0PlxcblxcblxcbjxzdHlsZT5cXG4uYm94e1xcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOjBweFxcbn1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0wYThmOTljMVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvUHJvZHVjdENoYXJ0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///425\n");

/***/ })

})