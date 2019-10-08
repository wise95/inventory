webpackHotUpdate(0,{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__ = __webpack_require__(407);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__);\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    data() {\n        return {\n            xLabelsData: [],\n            yLabelData: [],\n            yTemp: [],\n\n            options: {\n                chart: {\n                    id: 'vuechart-example'\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]\n                }\n            },\n            series: [{\n                name: 'series-1',\n                data: [30, 40, 45, 50, 49, 60, 70, 91]\n            }]\n        };\n    },\n\n    components: {\n\n        apexchart: __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default.a\n    },\n\n    mounted() {\n\n        const stat_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('D');\n        const end_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('D');\n\n        const stat_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('YYYY-MM-DD');\n        const end_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('YYYY-MM-DD');\n\n        var i;\n        for (i = stat_day; i <= end_day - 1; i++) {\n            this.xLabelsData.push(i);\n            console.log(i);\n        }\n\n        this.labels.xLabels = this.xLabelsData;\n        this.fetch_data(\"2019-09-01\", '2019-09-30', stat_day, end_day);\n    },\n\n    methods: {\n\n        fetch_data: function (vfrom, vto, vstart_day, vend_day) {\n            let payload = {\n                from: vfrom,\n                to: vto\n            };\n            axios.post('api/dashboard/purchaseoorderdata', payload).then(response => {\n\n                this.yTemp = response.data;\n                var new_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vfrom, \"YYYY-MM-DD\").format('YYYY-MM-DD');\n                var end_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vto, \"YYYY-MM-DD\").format('YYYY-MM-DD');\n                var loop_last_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vto, \"YYYY-MM-DD\").add(1, 'days').format('YYYY-MM-DD');\n                console.log(new_date);\n                console.log(end_date);\n                console.log(\"Loop Last Date \" + loop_last_date);\n\n                let count = 1;\n\n                while (new_date != loop_last_date) {\n                    console.log(\"New Date \" + new_date);\n                    count = count + 1;\n                    let isFound = false;\n                    this.yTemp.forEach((obj, index) => {\n                        console.log(obj.created);\n                        if (obj['created'] == new_date) {\n                            console.log(\"Date Found \" + new_date);\n                            isFound = true;\n                            this.yLabelData.push(obj.total_sum);\n                        }\n                    });\n\n                    if (isFound == true) {\n                        isFound = false;\n                    } else {\n                        this.yLabelData.push(0);\n                    }\n\n                    console.log(this.yLabelData);\n                    this.datasets[0].data = this.yLabelData;\n\n                    new_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(new_date, \"YYYY-MM-DD\").add(1, 'days').format('YYYY-MM-DD');\n                }\n\n                console.log(\"count = \" + count);\n            }).catch(error => {\n                console.log(error);\n            });\n        }\n    }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9DaGFydC52dWU/Y2JjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSwwQkFGQTtBQUdBLHFCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQURBLGlCQURBO0FBSUE7QUFDQTtBQURBO0FBSkEsYUFMQTtBQWFBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBYkE7QUFvQkEsS0F0QkE7O0FBd0JBOztBQUVBO0FBRkEsS0F4QkE7O0FBNkJBOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQSxLQWhEQTs7QUFrREE7O0FBR0E7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFGQTtBQUlBLG9FQUNBLElBREEsQ0FDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBUEE7O0FBU0E7QUFDQTtBQUVBLHFCQUhBLE1BR0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7O0FBRUE7QUFHQTs7QUFFQTtBQUNBLGFBNUNBLEVBNkNBLEtBN0NBLENBNkNBO0FBQ0E7QUFDQSxhQS9DQTtBQWlEQTtBQXpEQTs7QUFsREEiLCJmaWxlIjoiMjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdj5cbiAgICA8YXBleGNoYXJ0IHR5cGU9XCJiYXJcIiA6b3B0aW9ucz1cIm9wdGlvbnNcIiA6c2VyaWVzPVwic2VyaWVzXCI+PC9hcGV4Y2hhcnQ+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxuaW1wb3J0IFZ1ZUFwZXhDaGFydHMgZnJvbSAndnVlLWFwZXhjaGFydHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeExhYmVsc0RhdGE6IFtdLFxuICAgICAgICAgICAgeUxhYmVsRGF0YTogW10sXG4gICAgICAgICAgICB5VGVtcDogW10sXG5cbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3Z1ZWNoYXJ0LWV4YW1wbGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzZXJpZXMtMScsXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwLCA0MCwgNDUsIDUwLCA0OSwgNjAsIDcwLCA5MV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cblxuICAgIFxufSxcblxuY29tcG9uZW50czoge1xuXG4gICAgYXBleGNoYXJ0OiBWdWVBcGV4Q2hhcnRzXG59LFxuXG4gICAgbW91bnRlZCgpIHtcblxuICAgIFxuXG4gICAgICAgIGNvbnN0IHN0YXRfZGF5ID0gbW9tZW50KCkuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoJ0QnKVxuICAgICAgICBjb25zdCBlbmRfZGF5ID0gbW9tZW50KCkuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCdEJylcblxuICAgICAgICBjb25zdCBzdGF0X2RhdGUgPSBtb21lbnQoKS5zdGFydE9mKCdtb250aCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICAgIGNvbnN0IGVuZF9kYXRlID0gbW9tZW50KCkuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gc3RhdF9kYXk7IGkgPD0gZW5kX2RheS0xOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMueExhYmVsc0RhdGEucHVzaChpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFiZWxzLnhMYWJlbHMgPSB0aGlzLnhMYWJlbHNEYXRhXG4gICAgICAgIHRoaXMuZmV0Y2hfZGF0YShcIjIwMTktMDktMDFcIiwgJzIwMTktMDktMzAnLCBzdGF0X2RheSwgZW5kX2RheSlcblxuICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgXG5cbiAgICAgICAgZmV0Y2hfZGF0YTogZnVuY3Rpb24gKHZmcm9tLCB2dG8sIHZzdGFydF9kYXksIHZlbmRfZGF5KSB7XG4gICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiB2ZnJvbSxcbiAgICAgICAgICAgICAgICB0bzogdnRvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkL3B1cmNoYXNlb29yZGVyZGF0YScsIHBheWxvYWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueVRlbXAgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfZGF0ZSA9ICBtb21lbnQodmZyb20sIFwiWVlZWS1NTS1ERFwiKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kX2RhdGUgPSAgbW9tZW50KHZ0bywgXCJZWVlZLU1NLUREXCIpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb29wX2xhc3RfZGF0ZSA9IG1vbWVudCh2dG8sIFwiWVlZWS1NTS1ERFwiKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZW5kX2RhdGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9vcCBMYXN0IERhdGUgXCIrbG9vcF9sYXN0X2RhdGUpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudD0xXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChuZXdfZGF0ZSE9bG9vcF9sYXN0X2RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgRGF0ZSBcIituZXdfZGF0ZSApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudD0gY291bnQrMVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRm91bmQ9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlUZW1wLmZvckVhY2goKG9iaixpbmRleCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouY3JlYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvYmpbJ2NyZWF0ZWQnXT09bmV3X2RhdGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIEZvdW5kIFwiICsgbmV3X2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlMYWJlbERhdGEucHVzaChvYmoudG90YWxfc3VtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc0ZvdW5kPT10cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvdW5kPWZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueUxhYmVsRGF0YS5wdXNoKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy55TGFiZWxEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc2V0c1swXS5kYXRhPXRoaXMueUxhYmVsRGF0YVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmV3X2RhdGUgPSBtb21lbnQobmV3X2RhdGUsIFwiWVlZWS1NTS1ERFwiKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bnQgPSBcIitjb3VudClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9LFxuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvQ2hhcnQudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///227\n");

/***/ })

})