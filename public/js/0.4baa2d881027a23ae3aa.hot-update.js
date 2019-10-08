webpackHotUpdate(0,{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__ = __webpack_require__(407);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    components: {\n        apexchart: __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default.a\n    },\n    data() {\n\n        return {\n            xLabelsData: [],\n            yLabelData: [],\n            yTemp: [],\n            selection: 'one_year',\n            series: [{\n                name: 'Sales',\n                data: []\n            }],\n            chartOptions: {\n                annotations: {\n                    yaxis: [{\n                        y: 30,\n                        borderColor: '#999',\n                        label: {\n                            show: true,\n                            text: 'Support',\n                            style: {\n                                color: \"#fff\",\n                                background: '#00E396'\n                            }\n                        }\n                    }],\n                    xaxis: [{\n                        x: new Date('14 Nov 2012').getTime(),\n                        borderColor: '#999',\n                        yAxisIndex: 0,\n                        label: {\n                            show: true,\n                            text: 'Rally',\n                            style: {\n                                color: \"#fff\",\n                                background: '#775DD0'\n                            }\n                        }\n                    }]\n                },\n                dataLabels: {\n                    enabled: false\n                },\n\n                markers: {\n                    size: 0,\n                    style: 'hollow'\n                },\n                xaxis: {\n                    type: 'datetime',\n                    min: new Date('01 Aug 2019').getTime(),\n                    tickAmount: 6\n                },\n                tooltip: {\n                    x: {\n                        format: 'dd MMM yyyy'\n                    }\n                },\n                fill: {\n                    type: 'gradient',\n                    gradient: {\n                        shadeIntensity: 1,\n                        opacityFrom: 0.7,\n                        opacityTo: 0.9,\n                        stops: [0, 100]\n                    }\n                }\n            }\n        };\n    },\n    mounted() {\n        var dateString = __WEBPACK_IMPORTED_MODULE_0_moment___default.a.unix(1332095400000).format('DD-MM-YYYY HH:mm');\n\n        var timestamp = __WEBPACK_IMPORTED_MODULE_0_moment___default()('03/19/2012', 'MM/DD/YYYY').toDate().getTime();\n        console.log(\"1332095400000 \" + timestamp);\n\n        this.fetch_data();\n    },\n\n    methods: {\n        updateData: function (timeline) {\n            this.selection = timeline;\n\n            switch (timeline) {\n                case 'one_month':\n                    this.chartOptions = {\n                        xaxis: {\n                            min: new Date('28 Jan 2013').getTime(),\n                            max: new Date('27 Feb 2013').getTime()\n                        }\n                    };\n                    break;\n                case 'six_months':\n                    this.chartOptions = {\n                        xaxis: {\n                            min: new Date('27 Sep 2012').getTime(),\n                            max: new Date('27 Feb 2013').getTime()\n                        }\n                    };\n                    break;\n                case 'one_year':\n                    this.chartOptions = {\n                        xaxis: {\n                            min: new Date('27 Feb 2012').getTime(),\n                            max: new Date('27 Feb 2013').getTime()\n                        }\n                    };\n                    break;\n                case 'ytd':\n                    this.chartOptions = {\n                        xaxis: {\n                            min: new Date('01 Jan 2013').getTime(),\n                            max: new Date('27 Feb 2013').getTime()\n                        }\n                    };\n                    break;\n                case 'all':\n                    this.chartOptions = {\n                        xaxis: {\n                            min: undefined,\n                            max: undefined\n                        }\n                    };\n                    break;\n                default:\n\n            }\n        },\n\n        fetch_data: function () {\n\n            axios.post('api/dashboard/salesorders').then(response => {\n\n                this.yTemp = response.data;\n\n                console.log(this.yTemp);\n\n                this.series = [{\n                    data: this.yTemp\n                }];\n            }).catch(error => {\n                console.log(error);\n            });\n        }\n    }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXRlVGltZUNoYXJ0LnZ1ZT9lYzIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQURBLEtBREE7QUFJQTs7QUFFQTtBQUNBLDJCQURBO0FBRUEsMEJBRkE7QUFHQSxxQkFIQTtBQUlBLGlDQUpBO0FBS0E7QUFDQSw2QkFEQTtBQUVBO0FBRkEsY0FMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsMkNBRkE7QUFHQTtBQUNBLHNDQURBO0FBRUEsMkNBRkE7QUFHQTtBQUNBLDZDQURBO0FBRUE7QUFGQTtBQUhBO0FBSEEsc0JBREE7QUFhQTtBQUNBLDREQURBO0FBRUEsMkNBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBQ0Esc0NBREE7QUFFQSx5Q0FGQTtBQUdBO0FBQ0EsNkNBREE7QUFFQTtBQUZBO0FBSEE7QUFKQTtBQWJBLGlCQURBO0FBNEJBO0FBQ0E7QUFEQSxpQkE1QkE7O0FBZ0NBO0FBQ0EsMkJBREE7QUFFQTtBQUZBLGlCQWhDQTtBQW9DQTtBQUNBLG9DQURBO0FBRUEsMERBRkE7QUFHQTtBQUhBLGlCQXBDQTtBQXlDQTtBQUNBO0FBQ0E7QUFEQTtBQURBLGlCQXpDQTtBQThDQTtBQUNBLG9DQURBO0FBRUE7QUFDQSx5Q0FEQTtBQUVBLHdDQUZBO0FBR0Esc0NBSEE7QUFJQTtBQUpBO0FBRkE7QUE5Q0E7QUFYQTtBQW9FQSxLQTFFQTtBQTJFQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxLQW5GQTs7QUFzRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBREE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQURBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFEQTtBQUVBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBREE7QUFFQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQURBO0FBRUE7QUFGQTtBQURBO0FBTUE7QUFDQTs7QUF6Q0E7QUE0Q0EsU0FoREE7O0FBa0RBOztBQUVBLG9EQUNBLElBREEsQ0FDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBREE7QUFRQSxhQWZBLEVBZ0JBLEtBaEJBLENBZ0JBO0FBQ0E7QUFDQSxhQWxCQTtBQW9CQTtBQXhFQTs7QUF0RkEiLCJmaWxlIjoiNDE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz0nYm94Jz5cbiAgICAgPGgzIHN0eWxlPVwicGFkZGluZzogMTBweCAxMHB4O1wiIGNsYXNzPVwidGl0bGUgaXMtNlwiPiBCZXN0IFNlbGxpbmcgUHJvZHVjdHMgPC9oMz5cbjxkaXYgaWQ9XCJjaGFydFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyXCI+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidXBkYXRlRGF0YSgnb25lX21vbnRoJylcIiBpZD1cIm9uZV9tb250aFwiIDpjbGFzcz1cInthY3RpdmU6IHNlbGVjdGlvbj09PSdvbmVfbW9udGgnfVwiPjFNPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidXBkYXRlRGF0YSgnc2l4X21vbnRocycpXCIgaWQ9XCJzaXhfbW9udGhzXCIgOmNsYXNzPVwie2FjdGl2ZTogc2VsZWN0aW9uPT09J3NpeF9tb250aHMnfVwiPjZNPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidXBkYXRlRGF0YSgnb25lX3llYXInKVwiIGlkPVwib25lX3llYXJcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBzZWxlY3Rpb249PT0nb25lX3llYXInfVwiPjFZPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidXBkYXRlRGF0YSgneXRkJylcIiBpZD1cInl0ZFwiIDpjbGFzcz1cInthY3RpdmU6IHNlbGVjdGlvbj09PSd5dGQnfVwiPllURDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInVwZGF0ZURhdGEoJ2FsbCcpXCIgaWQ9XCJhbGxcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBzZWxlY3Rpb249PT0nYWxsJ31cIj5BTEw8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8YXBleGNoYXJ0IHR5cGU9YXJlYSBoZWlnaHQ9MzUwIDpvcHRpb25zPVwiY2hhcnRPcHRpb25zXCIgOnNlcmllcz1cInNlcmllc1wiIC8+XG48L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5pbXBvcnQgVnVlQXBleENoYXJ0cyBmcm9tICd2dWUtYXBleGNoYXJ0cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYXBleGNoYXJ0OiBWdWVBcGV4Q2hhcnRzLFxuICAgIH0sXG4gICAgZGF0YSgpIHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeExhYmVsc0RhdGE6IFtdLFxuICAgICAgICAgICAgeUxhYmVsRGF0YTogW10sXG4gICAgICAgICAgICB5VGVtcDogW10sXG4gICAgICAgICAgICBzZWxlY3Rpb246ICdvbmVfeWVhcicsXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1NhbGVzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHlheGlzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyM5OTknLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdTdXBwb3J0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMDBFMzk2J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHhheGlzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogbmV3IERhdGUoJzE0IE5vdiAyMDEyJykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjOTk5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGlzSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1JhbGx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjNzc1REQwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbWFya2Vyczoge1xuICAgICAgICAgICAgICAgICAgICBzaXplOiAwLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ2hvbGxvdycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcwMSBBdWcgMjAxOScpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgdGlja0Ftb3VudDogNixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnZGQgTU1NIHl5eXknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dyYWRpZW50JyxcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRlSW50ZW5zaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eUZyb206IDAuNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHlUbzogMC45LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcHM6IFswLCAxMDBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkICgpIHtcbiAgICAgICAgIHZhciBkYXRlU3RyaW5nID0gbW9tZW50LnVuaXgoMTMzMjA5NTQwMDAwMCkuZm9ybWF0KCdERC1NTS1ZWVlZIEhIOm1tJylcbiAgICAgICAgXG5cbiAgICAgICAgIHZhciB0aW1lc3RhbXAgPSBtb21lbnQoJzAzLzE5LzIwMTInLCdNTS9ERC9ZWVlZJykudG9EYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICBjb25zb2xlLmxvZyhcIjEzMzIwOTU0MDAwMDAgXCIrdGltZXN0YW1wKVxuXG4gICAgICAgICB0aGlzLmZldGNoX2RhdGEoKTtcbiAgICB9LFxuXG4gICBcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZURhdGE6IGZ1bmN0aW9uICh0aW1lbGluZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSB0aW1lbGluZTtcblxuICAgICAgICAgICAgc3dpdGNoICh0aW1lbGluZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ29uZV9tb250aCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcyOCBKYW4gMjAxMycpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG5ldyBEYXRlKCcyNyBGZWIgMjAxMycpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzaXhfbW9udGhzJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbmV3IERhdGUoJzI3IFNlcCAyMDEyJykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbmV3IERhdGUoJzI3IEZlYiAyMDEzJykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29uZV95ZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbmV3IERhdGUoJzI3IEZlYiAyMDEyJykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogbmV3IERhdGUoJzI3IEZlYiAyMDEzJykuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3l0ZCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IG5ldyBEYXRlKCcwMSBKYW4gMjAxMycpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IG5ldyBEYXRlKCcyNyBGZWIgMjAxMycpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZldGNoX2RhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkL3NhbGVzb3JkZXJzJylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy55VGVtcCA9IHJlc3BvbnNlLmRhdGFcblxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMueVRlbXApXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWVzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnlUZW1wXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9LFxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXRlVGltZUNoYXJ0LnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///419\n");

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"box\" }, [\n    _c(\n      \"h3\",\n      { staticClass: \"title is-6\", staticStyle: { padding: \"10px 10px\" } },\n      [_vm._v(\" Best Selling Products \")]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { attrs: { id: \"chart\" } },\n      [\n        _c(\"div\", { staticClass: \"toolbar\" }, [\n          _c(\n            \"button\",\n            {\n              class: { active: _vm.selection === \"one_month\" },\n              attrs: { id: \"one_month\" },\n              on: {\n                click: function($event) {\n                  return _vm.updateData(\"one_month\")\n                }\n              }\n            },\n            [_vm._v(\"1M\")]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              class: { active: _vm.selection === \"six_months\" },\n              attrs: { id: \"six_months\" },\n              on: {\n                click: function($event) {\n                  return _vm.updateData(\"six_months\")\n                }\n              }\n            },\n            [_vm._v(\"6M\")]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              class: { active: _vm.selection === \"one_year\" },\n              attrs: { id: \"one_year\" },\n              on: {\n                click: function($event) {\n                  return _vm.updateData(\"one_year\")\n                }\n              }\n            },\n            [_vm._v(\"1Y\")]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              class: { active: _vm.selection === \"ytd\" },\n              attrs: { id: \"ytd\" },\n              on: {\n                click: function($event) {\n                  return _vm.updateData(\"ytd\")\n                }\n              }\n            },\n            [_vm._v(\"YTD\")]\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"button\",\n            {\n              class: { active: _vm.selection === \"all\" },\n              attrs: { id: \"all\" },\n              on: {\n                click: function($event) {\n                  return _vm.updateData(\"all\")\n                }\n              }\n            },\n            [_vm._v(\"ALL\")]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"apexchart\", {\n          attrs: {\n            type: \"area\",\n            height: \"350\",\n            options: _vm.chartOptions,\n            series: _vm.series\n          }\n        })\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(0)      .rerender(\"data-v-46166a3e\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL0RhdGVUaW1lQ2hhcnQudnVlPzM0YjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQyx1QkFBdUIsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxTQUFTLGNBQWMsRUFBRTtBQUNoQztBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdDQUF3QztBQUM5RCxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRCxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RCxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQsc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjQyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImgzXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTZcIiwgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIxMHB4IDEwcHhcIiB9IH0sXG4gICAgICBbX3ZtLl92KFwiIEJlc3QgU2VsbGluZyBQcm9kdWN0cyBcIildXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgYXR0cnM6IHsgaWQ6IFwiY2hhcnRcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNlbGVjdGlvbiA9PT0gXCJvbmVfbW9udGhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJvbmVfbW9udGhcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlRGF0YShcIm9uZV9tb250aFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCIxTVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS5zZWxlY3Rpb24gPT09IFwic2l4X21vbnRoc1wiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInNpeF9tb250aHNcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlRGF0YShcInNpeF9tb250aHNcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiNk1cIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uc2VsZWN0aW9uID09PSBcIm9uZV95ZWFyXCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwib25lX3llYXJcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlRGF0YShcIm9uZV95ZWFyXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIjFZXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogX3ZtLnNlbGVjdGlvbiA9PT0gXCJ5dGRcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ5dGRcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlRGF0YShcInl0ZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJZVERcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uc2VsZWN0aW9uID09PSBcImFsbFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFsbFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVEYXRhKFwiYWxsXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkFMTFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImFwZXhjaGFydFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYXJlYVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjM1MFwiLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNoYXJ0T3B0aW9ucyxcbiAgICAgICAgICAgIHNlcmllczogX3ZtLnNlcmllc1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDYxNjZhM2VcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NjE2NmEzZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvRGF0ZVRpbWVDaGFydC52dWVcbi8vIG1vZHVsZSBpZCA9IDQyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///421\n");

/***/ })

})