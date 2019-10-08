webpackHotUpdate(0,{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__ = __webpack_require__(407);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__);\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    data() {\n        return {\n            xLabelsData: [],\n            yLabelData: [],\n            yTemp: [],\n\n            options: {\n                chart: {\n                    id: 'vuechart-example'\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]\n                }\n            },\n            series: [{\n                name: 'series-1',\n                data: [30, 40, 45, 50, 49, 60, 70, 91]\n            }]\n        };\n    },\n\n    components: {\n\n        apexchart: __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default.a\n    },\n\n    mounted() {\n\n        const stat_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('D');\n        const end_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('D');\n\n        const stat_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('YYYY-MM-DD');\n        const end_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('YYYY-MM-DD');\n\n        var i;\n        for (i = stat_day; i <= end_day - 1; i++) {\n            this.xLabelsData.push(i);\n            console.log(i);\n        }\n\n        console.log(\"=========\");\n        console.log(this.options.xaxis.categories);\n        this.options.xaxis.categories = this.xLabelsData;\n\n        this.fetch_data(\"2019-09-01\", '2019-09-30', stat_day, end_day);\n    },\n\n    methods: {\n\n        fetch_data: function (vfrom, vto, vstart_day, vend_day) {\n            let payload = {\n                from: vfrom,\n                to: vto\n            };\n            axios.post('api/dashboard/purchaseoorderdata', payload).then(response => {\n\n                this.yTemp = response.data;\n                var new_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vfrom, \"YYYY-MM-DD\").format('YYYY-MM-DD');\n                var end_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vto, \"YYYY-MM-DD\").format('YYYY-MM-DD');\n                var loop_last_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vto, \"YYYY-MM-DD\").add(1, 'days').format('YYYY-MM-DD');\n                console.log(new_date);\n                console.log(end_date);\n                console.log(\"Loop Last Date \" + loop_last_date);\n\n                let count = 1;\n\n                while (new_date != loop_last_date) {\n                    console.log(\"New Date \" + new_date);\n                    count = count + 1;\n                    let isFound = false;\n                    this.yTemp.forEach((obj, index) => {\n                        console.log(obj.created);\n                        if (obj['created'] == new_date) {\n                            console.log(\"Date Found \" + new_date);\n                            isFound = true;\n                            this.yLabelData.push(obj.total_sum);\n                        }\n                    });\n\n                    if (isFound == true) {\n                        isFound = false;\n                    } else {\n                        this.yLabelData.push(0);\n                    }\n\n                    console.log(this.yLabelData);\n                    //this.datasets[0].data = this.yLabelData\n\n                    new_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(new_date, \"YYYY-MM-DD\").add(1, 'days').format('YYYY-MM-DD');\n                }\n\n                console.log(\"count = \" + count);\n            }).catch(error => {\n                console.log(error);\n            });\n        }\n    }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9DaGFydC52dWU/Y2JjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSwwQkFGQTtBQUdBLHFCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQURBLGlCQURBO0FBSUE7QUFDQTtBQURBO0FBSkEsYUFMQTtBQWFBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBYkE7QUFtQkEsS0FyQkE7O0FBdUJBOztBQUVBO0FBRkEsS0F2QkE7O0FBNEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFHQTtBQUVBLEtBakRBOztBQW1EQTs7QUFFQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUZBO0FBSUEsb0VBQ0EsSUFEQSxDQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFQQTs7QUFTQTtBQUNBO0FBRUEscUJBSEEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUVBOztBQUVBO0FBQ0EsYUF6Q0EsRUEwQ0EsS0ExQ0EsQ0EwQ0E7QUFDQTtBQUNBLGFBNUNBO0FBOENBO0FBckRBOztBQW5EQSIsImZpbGUiOiIyMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICAgIDxhcGV4Y2hhcnQgdHlwZT1cImJhclwiIDpvcHRpb25zPVwib3B0aW9uc1wiIDpzZXJpZXM9XCJzZXJpZXNcIj48L2FwZXhjaGFydD5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5pbXBvcnQgVnVlQXBleENoYXJ0cyBmcm9tICd2dWUtYXBleGNoYXJ0cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4TGFiZWxzRGF0YTogW10sXG4gICAgICAgICAgICB5TGFiZWxEYXRhOiBbXSxcbiAgICAgICAgICAgIHlUZW1wOiBbXSxcblxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAndnVlY2hhcnQtZXhhbXBsZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IFsxOTkxLCAxOTkyLCAxOTkzLCAxOTk0LCAxOTk1LCAxOTk2LCAxOTk3LCAxOTk4XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3Nlcmllcy0xJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbMzAsIDQwLCA0NSwgNTAsIDQ5LCA2MCwgNzAsIDkxXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXBvbmVudHM6IHtcblxuICAgICAgICBhcGV4Y2hhcnQ6IFZ1ZUFwZXhDaGFydHNcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcblxuICAgICAgICBjb25zdCBzdGF0X2RheSA9IG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJykuZm9ybWF0KCdEJylcbiAgICAgICAgY29uc3QgZW5kX2RheSA9IG1vbWVudCgpLmVuZE9mKCdtb250aCcpLmZvcm1hdCgnRCcpXG5cbiAgICAgICAgY29uc3Qgc3RhdF9kYXRlID0gbW9tZW50KCkuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICBjb25zdCBlbmRfZGF0ZSA9IG1vbWVudCgpLmVuZE9mKCdtb250aCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgICAgICAgdmFyIGlcbiAgICAgICAgZm9yIChpID0gc3RhdF9kYXk7IGkgPD0gZW5kX2RheSAtIDE7IGkrKykge1xuICAgICAgICAgICAgdGhpcy54TGFiZWxzRGF0YS5wdXNoKGkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKVxuICAgICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09XCIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcylcbiAgICAgIHRoaXMub3B0aW9ucy54YXhpcy5jYXRlZ29yaWVzPXRoaXMueExhYmVsc0RhdGFcblxuICAgICAgXG4gICAgICB0aGlzLmZldGNoX2RhdGEoXCIyMDE5LTA5LTAxXCIsICcyMDE5LTA5LTMwJywgc3RhdF9kYXksIGVuZF9kYXkpXG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGZldGNoX2RhdGE6IGZ1bmN0aW9uICh2ZnJvbSwgdnRvLCB2c3RhcnRfZGF5LCB2ZW5kX2RheSkge1xuICAgICAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICAgICAgZnJvbTogdmZyb20sXG4gICAgICAgICAgICAgICAgdG86IHZ0b1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL2Rhc2hib2FyZC9wdXJjaGFzZW9vcmRlcmRhdGEnLCBwYXlsb2FkKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnlUZW1wID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3X2RhdGUgPSBtb21lbnQodmZyb20sIFwiWVlZWS1NTS1ERFwiKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kX2RhdGUgPSBtb21lbnQodnRvLCBcIllZWVktTU0tRERcIikuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvb3BfbGFzdF9kYXRlID0gbW9tZW50KHZ0bywgXCJZWVlZLU1NLUREXCIpLmFkZCgxLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld19kYXRlKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbmRfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb29wIExhc3QgRGF0ZSBcIiArIGxvb3BfbGFzdF9kYXRlKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDFcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAobmV3X2RhdGUgIT0gbG9vcF9sYXN0X2RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IERhdGUgXCIgKyBuZXdfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNGb3VuZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlUZW1wLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvYmouY3JlYXRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqWydjcmVhdGVkJ10gPT0gbmV3X2RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRlIEZvdW5kIFwiICsgbmV3X2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueUxhYmVsRGF0YS5wdXNoKG9iai50b3RhbF9zdW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRm91bmQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueUxhYmVsRGF0YS5wdXNoKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMueUxhYmVsRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5kYXRhc2V0c1swXS5kYXRhID0gdGhpcy55TGFiZWxEYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld19kYXRlID0gbW9tZW50KG5ld19kYXRlLCBcIllZWVktTU0tRERcIikuYWRkKDEsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VudCA9IFwiICsgY291bnQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcbiAgICB9XG5cbn07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL0NoYXJ0LnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///227\n");

/***/ })

})