webpackHotUpdate(0,{

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__ = __webpack_require__(407);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_apexcharts__);\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    data() {\n        return {\n            xLabelsData: [],\n            yLabelData: [],\n            yTemp: [],\n\n            options: {\n                chart: {\n                    id: 'vuechart-example'\n                },\n                xaxis: {\n                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]\n                }\n            },\n            series: [{\n                name: 'series-1',\n                data: [30, 40, 45, 50, 49, 60, 70, 91]\n            }]\n        };\n    },\n\n    components: {\n\n        apexchart: __WEBPACK_IMPORTED_MODULE_1_vue_apexcharts___default.a\n    },\n\n    mounted() {\n\n        const stat_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('D');\n        const end_day = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('D');\n\n        const stat_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('YYYY-MM-DD');\n        const end_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('YYYY-MM-DD');\n\n        var i;\n        for (i = stat_day; i <= end_day - 1; i++) {\n            this.xLabelsData.push(i);\n            console.log(i);\n        }\n\n        console.log(\"=========\");\n        console.log(this.options.xaxis.categories);\n\n        this.options = {\n            xaxis: {\n                categories: this.xLabelsData\n            }\n        };\n\n        this.fetch_data(\"2019-09-01\", '2019-09-30', stat_day, end_day);\n    },\n\n    methods: {\n\n        fetch_data: function (vfrom, vto, vstart_day, vend_day) {\n            let payload = {\n                from: vfrom,\n                to: vto\n            };\n            axios.post('api/dashboard/purchaseoorderdata', payload).then(response => {\n\n                this.yTemp = response.data;\n                var new_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vfrom, \"YYYY-MM-DD\").format('YYYY-MM-DD');\n                var end_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vto, \"YYYY-MM-DD\").format('YYYY-MM-DD');\n                var loop_last_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(vto, \"YYYY-MM-DD\").add(1, 'days').format('YYYY-MM-DD');\n                console.log(new_date);\n                console.log(end_date);\n                console.log(\"Loop Last Date \" + loop_last_date);\n\n                let count = 1;\n\n                while (new_date != loop_last_date) {\n                    console.log(\"New Date \" + new_date);\n                    count = count + 1;\n                    let isFound = false;\n                    this.yTemp.forEach((obj, index) => {\n                        console.log(obj.created);\n                        if (obj['created'] == new_date) {\n                            console.log(\"Date Found \" + new_date);\n                            isFound = true;\n                            this.yLabelData.push(obj.total_sum);\n                        }\n                    });\n\n                    if (isFound == true) {\n                        isFound = false;\n                    } else {\n                        this.yLabelData.push(0);\n                    }\n\n                    console.log(this.yLabelData);\n                    //this.datasets[0].data = this.yLabelData\n                    this.series = [{\n                        data: newData\n                    }];\n                    new_date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(new_date, \"YYYY-MM-DD\").add(1, 'days').format('YYYY-MM-DD');\n                }\n\n                console.log(\"count = \" + count);\n            }).catch(error => {\n                console.log(error);\n            });\n        }\n    }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9DaGFydC52dWU/Y2JjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSwwQkFGQTtBQUdBLHFCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQURBLGlCQURBO0FBSUE7QUFDQTtBQURBO0FBSkEsYUFMQTtBQWFBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBYkE7QUFtQkEsS0FyQkE7O0FBdUJBOztBQUVBO0FBRkEsS0F2QkE7O0FBNEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFEQTs7QUFNQTtBQUVBLEtBckRBOztBQXVEQTs7QUFFQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUZBO0FBSUEsb0VBQ0EsSUFEQSxDQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFQQTs7QUFTQTtBQUNBO0FBRUEscUJBSEEsTUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7O0FBRUE7QUFDQSxhQTNDQSxFQTRDQSxLQTVDQSxDQTRDQTtBQUNBO0FBQ0EsYUE5Q0E7QUFnREE7QUF2REE7O0FBdkRBIiwiZmlsZSI6IjIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+XG4gICAgPGFwZXhjaGFydCB0eXBlPVwiYmFyXCIgOm9wdGlvbnM9XCJvcHRpb25zXCIgOnNlcmllcz1cInNlcmllc1wiPjwvYXBleGNoYXJ0PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcbmltcG9ydCBWdWVBcGV4Q2hhcnRzIGZyb20gJ3Z1ZS1hcGV4Y2hhcnRzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHhMYWJlbHNEYXRhOiBbXSxcbiAgICAgICAgICAgIHlMYWJlbERhdGE6IFtdLFxuICAgICAgICAgICAgeVRlbXA6IFtdLFxuXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICd2dWVjaGFydC1leGFtcGxlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OThdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2VyaWVzLTEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszMCwgNDAsIDQ1LCA1MCwgNDksIDYwLCA3MCwgOTFdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcG9uZW50czoge1xuXG4gICAgICAgIGFwZXhjaGFydDogVnVlQXBleENoYXJ0c1xuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuXG4gICAgICAgIGNvbnN0IHN0YXRfZGF5ID0gbW9tZW50KCkuc3RhcnRPZignbW9udGgnKS5mb3JtYXQoJ0QnKVxuICAgICAgICBjb25zdCBlbmRfZGF5ID0gbW9tZW50KCkuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCdEJylcblxuICAgICAgICBjb25zdCBzdGF0X2RhdGUgPSBtb21lbnQoKS5zdGFydE9mKCdtb250aCcpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICAgIGNvbnN0IGVuZF9kYXRlID0gbW9tZW50KCkuZW5kT2YoJ21vbnRoJykuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuICAgICAgICB2YXIgaVxuICAgICAgICBmb3IgKGkgPSBzdGF0X2RheTsgaSA8PSBlbmRfZGF5IC0gMTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnhMYWJlbHNEYXRhLnB1c2goaSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PVwiKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMueGF4aXMuY2F0ZWdvcmllcylcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRoaXMueExhYmVsc0RhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmV0Y2hfZGF0YShcIjIwMTktMDktMDFcIiwgJzIwMTktMDktMzAnLCBzdGF0X2RheSwgZW5kX2RheSlcblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgZmV0Y2hfZGF0YTogZnVuY3Rpb24gKHZmcm9tLCB2dG8sIHZzdGFydF9kYXksIHZlbmRfZGF5KSB7XG4gICAgICAgICAgICBsZXQgcGF5bG9hZCA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiB2ZnJvbSxcbiAgICAgICAgICAgICAgICB0bzogdnRvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBheGlvcy5wb3N0KCdhcGkvZGFzaGJvYXJkL3B1cmNoYXNlb29yZGVyZGF0YScsIHBheWxvYWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueVRlbXAgPSByZXNwb25zZS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdfZGF0ZSA9IG1vbWVudCh2ZnJvbSwgXCJZWVlZLU1NLUREXCIpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRfZGF0ZSA9IG1vbWVudCh2dG8sIFwiWVlZWS1NTS1ERFwiKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9vcF9sYXN0X2RhdGUgPSBtb21lbnQodnRvLCBcIllZWVktTU0tRERcIikuYWRkKDEsICdkYXlzJykuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3X2RhdGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVuZF9kYXRlKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvb3AgTGFzdCBEYXRlIFwiICsgbG9vcF9sYXN0X2RhdGUpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMVxuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChuZXdfZGF0ZSAhPSBsb29wX2xhc3RfZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgRGF0ZSBcIiArIG5ld19kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSBjb3VudCArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueVRlbXAuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iai5jcmVhdGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmpbJ2NyZWF0ZWQnXSA9PSBuZXdfZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGUgRm91bmQgXCIgKyBuZXdfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55TGFiZWxEYXRhLnB1c2gob2JqLnRvdGFsX3N1bSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGb3VuZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb3VuZCA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55TGFiZWxEYXRhLnB1c2goMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy55TGFiZWxEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmRhdGFzZXRzWzBdLmRhdGEgPSB0aGlzLnlMYWJlbERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJpZXMgPSBbe1xuICAgIGRhdGE6IG5ld0RhdGFcbiAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdfZGF0ZSA9IG1vbWVudChuZXdfZGF0ZSwgXCJZWVlZLU1NLUREXCIpLmFkZCgxLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bnQgPSBcIiArIGNvdW50KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9DaGFydC52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///227\n");

/***/ })

})