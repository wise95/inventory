webpackHotUpdate(0,{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(127);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_js__ = __webpack_require__(31);\n\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_1_vue__[\"default\"].use(__WEBPACK_IMPORTED_MODULE_0_vuex__[\"a\" /* default */]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (new __WEBPACK_IMPORTED_MODULE_0_vuex__[\"a\" /* default */].Store({\n\n    state: {\n        totalTvCount: 10, // The TV inventory\n        token: localStorage.getItem('access_token') || null,\n        products: [],\n        query_param: { page: 1 }\n    },\n\n    getters: {\n\n        isLogedIn(state) {\n            return state.token != null;\n        }\n\n    },\n\n    mutations: {\n        setToken(state, token) {\n            state.token = token;\n        },\n        setProducts(state, products) {\n            state.products = products;\n        },\n\n        setQueryParam(state, query) {\n            state.query_param = query;\n        }\n\n    },\n\n    actions: {\n        getProducts({ dispatch, commit, state }) {\n\n            __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;\n            return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('api/products').then(response => {\n                commit('setProducts', response.data.data);\n            }).catch(error => {\n                console.log(error);\n            });\n        },\n\n        getProductTable(context, data) {\n            return new Promise((resolve, reject) => {\n                // Do something here... lets say, a http call using vue-resource\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(\"api/products?page=\" + data.page).then(response => {\n                    // http success, call the mutator and change something in state\n\n\n                    resolve(response); // Let the calling function know that http is done. You may send some data back\n                }, error => {\n                    // http failed, let the calling function know that action did not work out\n                    reject(error);\n                });\n            });\n        },\n\n        getPurchaseOrders(context, data) {\n            return new Promise((resolve, reject) => {\n                // Do something here... lets say, a http call using vue-resource\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(\"api/purchaseorders?page=\" + data.page).then(response => {\n                    // http success, call the mutator and change something in state\n\n\n                    resolve(response); // Let the calling function know that http is done. You may send some data back\n                }, error => {\n                    // http failed, let the calling function know that action did not work out\n                    reject(error);\n                });\n            });\n        },\n\n        getBills(context, data) {\n            return new Promise((resolve, reject) => {\n                // Do something here... lets say, a http call using vue-resource\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(\"api/bills?page=\" + data.page).then(response => {\n                    // http success, call the mutator and change something in state\n\n\n                    resolve(response); // Let the calling function know that http is done. You may send some data back\n                }, error => {\n                    // http failed, let the calling function know that action did not work out\n                    reject(error);\n                });\n            });\n        },\n\n        getSalesOrders(context, data) {\n            return new Promise((resolve, reject) => {\n                // Do something here... lets say, a http call using vue-resource\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(\"api/salesorders?page=\" + data.page).then(response => {\n                    // http success, call the mutator and change something in state\n\n\n                    resolve(response); // Let the calling function know that http is done. You may send some data back\n                }, error => {\n                    // http failed, let the calling function know that action did not work out\n                    reject(error);\n                });\n            });\n        },\n\n        getSalesOrders(context, data) {\n            return new Promise((resolve, reject) => {\n                // Do something here... lets say, a http call using vue-resource\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token;\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(\"api/salesorders?page=\" + data.page).then(response => {\n                    // http success, call the mutator and change something in state\n\n\n                    resolve(response); // Let the calling function know that http is done. You may send some data back\n                }, error => {\n                    // http failed, let the calling function know that action did not work out\n                    reject(error);\n                });\n            });\n        },\n\n        action_logout({ dispatch, commit, state, getters }) {\n\n            if (getters.isLogedIn) {\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;\n                __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('api/user/logout').then(response => {\n                    console.log(response);\n                    localStorage.removeItem(\"access_token\");\n                    //this.$store.commit('setToken',token)\n                    commit('setToken', null);\n                    __WEBPACK_IMPORTED_MODULE_3__router_js__[\"a\" /* router */].push(\"/login\");\n                }).catch(errors => {\n                    console.log(errors);\n                });\n            }\n        },\n\n        refreshToken(context) {\n\n            __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('api/user/refresh', { token: context.state.token }).then(response => {\n                console.log(\"New Token\" + response.data.token);\n                context.state.token = response.data.token;\n            }).catch(error => {\n                console.log(\"error \" + error);\n            });\n        }\n    }\n\n}));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc3RvcmUuanM/NDk5ZiJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJWdWV4IiwiU3RvcmUiLCJzdGF0ZSIsInRvdGFsVHZDb3VudCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByb2R1Y3RzIiwicXVlcnlfcGFyYW0iLCJwYWdlIiwiZ2V0dGVycyIsImlzTG9nZWRJbiIsIm11dGF0aW9ucyIsInNldFRva2VuIiwic2V0UHJvZHVjdHMiLCJzZXRRdWVyeVBhcmFtIiwicXVlcnkiLCJhY3Rpb25zIiwiZ2V0UHJvZHVjdHMiLCJkaXNwYXRjaCIsImNvbW1pdCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJvZHVjdFRhYmxlIiwiY29udGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0UHVyY2hhc2VPcmRlcnMiLCJnZXRCaWxscyIsImdldFNhbGVzT3JkZXJzIiwiYWN0aW9uX2xvZ291dCIsInBvc3QiLCJyZW1vdmVJdGVtIiwicm91dGVyIiwicHVzaCIsImVycm9ycyIsInJlZnJlc2hUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBQUEsQ0FBSUMsR0FBSixDQUFRLHFEQUFSOztBQUVBLHlEQUFlLElBQUkscURBQUFDLENBQUtDLEtBQVQsQ0FBZTs7QUFFMUJDLFdBQU87QUFDSEMsc0JBQWMsRUFEWCxFQUNlO0FBQ2xCQyxlQUFNQyxhQUFhQyxPQUFiLENBQXFCLGNBQXJCLEtBQXdDLElBRjNDO0FBR0hDLGtCQUFTLEVBSE47QUFJSEMscUJBQVksRUFBQ0MsTUFBSyxDQUFOO0FBSlQsS0FGbUI7O0FBUzFCQyxhQUFTOztBQUVMQyxrQkFBVVQsS0FBVixFQUFnQjtBQUNaLG1CQUFPQSxNQUFNRSxLQUFOLElBQWMsSUFBckI7QUFDSDs7QUFKSSxLQVRpQjs7QUFpQjFCUSxlQUFXO0FBQ1BDLGlCQUFTWCxLQUFULEVBQWVFLEtBQWYsRUFBcUI7QUFDakJGLGtCQUFNRSxLQUFOLEdBQWFBLEtBQWI7QUFDSCxTQUhNO0FBSVBVLG9CQUFZWixLQUFaLEVBQWtCSyxRQUFsQixFQUEyQjtBQUN2Qkwsa0JBQU1LLFFBQU4sR0FBZUEsUUFBZjtBQUNILFNBTk07O0FBUVBRLHNCQUFjYixLQUFkLEVBQW9CYyxLQUFwQixFQUEwQjtBQUN0QmQsa0JBQU1NLFdBQU4sR0FBa0JRLEtBQWxCO0FBQ0g7O0FBVk0sS0FqQmU7O0FBK0IxQkMsYUFBUztBQUNMQyxvQkFBWSxFQUFDQyxRQUFELEVBQVVDLE1BQVYsRUFBaUJsQixLQUFqQixFQUFaLEVBQW9DOztBQUVoQ21CLFlBQUEsNkNBQUFBLENBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsZUFBOUIsSUFBaUQsWUFBV3RCLE1BQU1FLEtBQWxFO0FBQ0EsbUJBQVEsNkNBQUFpQixDQUFNSSxHQUFOLENBQVUsY0FBVixFQUEwQkMsSUFBMUIsQ0FBZ0NDLFFBQUQsSUFBYztBQUNqRFAsdUJBQU8sYUFBUCxFQUFxQk8sU0FBU0MsSUFBVCxDQUFjQSxJQUFuQztBQUNILGFBRk8sRUFFTEMsS0FGSyxDQUVFQyxLQUFELElBQVc7QUFDaEJDLHdCQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxhQUpPLENBQVI7QUFNSCxTQVZJOztBQVlMRyx3QkFBZ0JDLE9BQWhCLEVBQXlCTixJQUF6QixFQUErQjtBQUMzQixtQkFBTyxJQUFJTyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDO0FBQ0FoQixnQkFBQSw2Q0FBQUEsQ0FBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixDQUE4QixlQUE5QixJQUFpRCxZQUFXVSxRQUFRaEMsS0FBUixDQUFjRSxLQUExRTtBQUNBaUIsZ0JBQUEsNkNBQUFBLENBQU1JLEdBQU4sQ0FBVSx1QkFBcUJHLEtBQUtuQixJQUFwQyxFQUEwQ2lCLElBQTFDLENBQStDQyxZQUFZO0FBQ3ZEOzs7QUFHQVMsNEJBQVFULFFBQVIsRUFKdUQsQ0FJbkM7QUFDdkIsaUJBTEQsRUFLR0csU0FBUztBQUNSO0FBQ0FPLDJCQUFPUCxLQUFQO0FBQ0gsaUJBUkQ7QUFTSCxhQVpNLENBQVA7QUFhSCxTQTFCSTs7QUE2QkxRLDBCQUFrQkosT0FBbEIsRUFBMkJOLElBQTNCLEVBQWlDO0FBQzdCLG1CQUFPLElBQUlPLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEM7QUFDQWhCLGdCQUFBLDZDQUFBQSxDQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlELFlBQVdVLFFBQVFoQyxLQUFSLENBQWNFLEtBQTFFO0FBQ0FpQixnQkFBQSw2Q0FBQUEsQ0FBTUksR0FBTixDQUFVLDZCQUEyQkcsS0FBS25CLElBQTFDLEVBQWdEaUIsSUFBaEQsQ0FBcURDLFlBQVk7QUFDN0Q7OztBQUdBUyw0QkFBUVQsUUFBUixFQUo2RCxDQUl6QztBQUN2QixpQkFMRCxFQUtHRyxTQUFTO0FBQ1I7QUFDQU8sMkJBQU9QLEtBQVA7QUFDSCxpQkFSRDtBQVNILGFBWk0sQ0FBUDtBQWFILFNBM0NJOztBQThDTFMsaUJBQVNMLE9BQVQsRUFBa0JOLElBQWxCLEVBQXdCO0FBQ3BCLG1CQUFPLElBQUlPLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEM7QUFDQWhCLGdCQUFBLDZDQUFBQSxDQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlELFlBQVdVLFFBQVFoQyxLQUFSLENBQWNFLEtBQTFFO0FBQ0FpQixnQkFBQSw2Q0FBQUEsQ0FBTUksR0FBTixDQUFVLG9CQUFrQkcsS0FBS25CLElBQWpDLEVBQXVDaUIsSUFBdkMsQ0FBNENDLFlBQVk7QUFDcEQ7OztBQUdBUyw0QkFBUVQsUUFBUixFQUpvRCxDQUloQztBQUN2QixpQkFMRCxFQUtHRyxTQUFTO0FBQ1I7QUFDQU8sMkJBQU9QLEtBQVA7QUFDSCxpQkFSRDtBQVNILGFBWk0sQ0FBUDtBQWFILFNBNURJOztBQStETFUsdUJBQWVOLE9BQWYsRUFBd0JOLElBQXhCLEVBQThCO0FBQzFCLG1CQUFPLElBQUlPLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEM7QUFDQWhCLGdCQUFBLDZDQUFBQSxDQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlELFlBQVdVLFFBQVFoQyxLQUFSLENBQWNFLEtBQTFFO0FBQ0FpQixnQkFBQSw2Q0FBQUEsQ0FBTUksR0FBTixDQUFVLDBCQUF3QkcsS0FBS25CLElBQXZDLEVBQTZDaUIsSUFBN0MsQ0FBa0RDLFlBQVk7QUFDMUQ7OztBQUdBUyw0QkFBUVQsUUFBUixFQUowRCxDQUl0QztBQUN2QixpQkFMRCxFQUtHRyxTQUFTO0FBQ1I7QUFDQU8sMkJBQU9QLEtBQVA7QUFDSCxpQkFSRDtBQVNILGFBWk0sQ0FBUDtBQWFILFNBN0VJOztBQWdGTFUsdUJBQWVOLE9BQWYsRUFBd0JOLElBQXhCLEVBQThCO0FBQzFCLG1CQUFPLElBQUlPLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcEM7QUFDQWhCLGdCQUFBLDZDQUFBQSxDQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlELFlBQVdVLFFBQVFoQyxLQUFSLENBQWNFLEtBQTFFO0FBQ0FpQixnQkFBQSw2Q0FBQUEsQ0FBTUksR0FBTixDQUFVLDBCQUF3QkcsS0FBS25CLElBQXZDLEVBQTZDaUIsSUFBN0MsQ0FBa0RDLFlBQVk7QUFDMUQ7OztBQUdBUyw0QkFBUVQsUUFBUixFQUowRCxDQUl0QztBQUN2QixpQkFMRCxFQUtHRyxTQUFTO0FBQ1I7QUFDQU8sMkJBQU9QLEtBQVA7QUFDSCxpQkFSRDtBQVNILGFBWk0sQ0FBUDtBQWFILFNBOUZJOztBQW1HTFcsc0JBQWMsRUFBQ3RCLFFBQUQsRUFBVUMsTUFBVixFQUFpQmxCLEtBQWpCLEVBQXVCUSxPQUF2QixFQUFkLEVBQThDOztBQUUxQyxnQkFBR0EsUUFBUUMsU0FBWCxFQUFxQjtBQUNqQlUsZ0JBQUEsNkNBQUFBLENBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsZUFBOUIsSUFBaUQsWUFBV3RCLE1BQU1FLEtBQWxFO0FBQ0FpQixnQkFBQSw2Q0FBQUEsQ0FBTXFCLElBQU4sQ0FBVyxpQkFBWCxFQUNDaEIsSUFERCxDQUNNQyxZQUFVO0FBQ1pJLDRCQUFRQyxHQUFSLENBQVlMLFFBQVo7QUFDQXRCLGlDQUFhc0MsVUFBYixDQUF3QixjQUF4QjtBQUNBO0FBQ0F2QiwyQkFBTyxVQUFQLEVBQWtCLElBQWxCO0FBQ0F3QixvQkFBQSwwREFBQUEsQ0FBT0MsSUFBUCxDQUFZLFFBQVo7QUFDSCxpQkFQRCxFQVFDaEIsS0FSRCxDQVFPaUIsVUFBUTtBQUNYZiw0QkFBUUMsR0FBUixDQUFZYyxNQUFaO0FBRUgsaUJBWEQ7QUFhSDtBQUVKLFNBdEhJOztBQXdITEMscUJBQWFiLE9BQWIsRUFBcUI7O0FBRWpCYixZQUFBLDZDQUFBQSxDQUFNcUIsSUFBTixDQUFXLGtCQUFYLEVBQThCLEVBQUN0QyxPQUFNOEIsUUFBUWhDLEtBQVIsQ0FBY0UsS0FBckIsRUFBOUIsRUFBMkRzQixJQUEzRCxDQUFpRUMsUUFBRCxJQUFjO0FBQzFFSSx3QkFBUUMsR0FBUixDQUFZLGNBQVlMLFNBQVNDLElBQVQsQ0FBY3hCLEtBQXRDO0FBQ0E4Qix3QkFBUWhDLEtBQVIsQ0FBY0UsS0FBZCxHQUFvQnVCLFNBQVNDLElBQVQsQ0FBY3hCLEtBQWxDO0FBQ0gsYUFIRCxFQUdHeUIsS0FISCxDQUdVQyxLQUFELElBQVc7QUFDaEJDLHdCQUFRQyxHQUFSLENBQVksV0FBU0YsS0FBckI7QUFDSCxhQUxEO0FBT0g7QUFqSUk7O0FBL0JpQixDQUFmLENBQWYiLCJmaWxlIjoiMTI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZXggZnJvbSAgJ3Z1ZXgnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7cm91dGVyfSBmcm9tICcuLi9yb3V0ZXIuanMnXG5cblZ1ZS51c2UoVnVleClcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuXG4gICAgc3RhdGU6IHtcbiAgICAgICAgdG90YWxUdkNvdW50OiAxMCAsLy8gVGhlIFRWIGludmVudG9yeVxuICAgICAgICB0b2tlbjpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJykgfHwgbnVsbCxcbiAgICAgICAgcHJvZHVjdHM6W10sXG4gICAgICAgIHF1ZXJ5X3BhcmFtOntwYWdlOjF9XG4gICAgfSxcblxuICAgIGdldHRlcnM6IHtcblxuICAgICAgICBpc0xvZ2VkSW4oc3RhdGUpe1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnRva2VuICE9bnVsbFxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICAgIHNldFRva2VuKHN0YXRlLHRva2VuKXtcbiAgICAgICAgICAgIHN0YXRlLnRva2VuID10b2tlblxuICAgICAgICB9LFxuICAgICAgICBzZXRQcm9kdWN0cyhzdGF0ZSxwcm9kdWN0cyl7XG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0cz1wcm9kdWN0c1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFF1ZXJ5UGFyYW0oc3RhdGUscXVlcnkpe1xuICAgICAgICAgICAgc3RhdGUucXVlcnlfcGFyYW09cXVlcnlcbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgICBcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGdldFByb2R1Y3RzKHtkaXNwYXRjaCxjb21taXQsc3RhdGV9KXtcbiAgICAgICAgXG4gICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnKyBzdGF0ZS50b2tlblxuICAgICAgICAgICAgcmV0dXJuICBheGlvcy5nZXQoJ2FwaS9wcm9kdWN0cycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWl0KCdzZXRQcm9kdWN0cycscmVzcG9uc2UuZGF0YS5kYXRhKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQcm9kdWN0VGFibGUoY29udGV4dCwgZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgaGVyZS4uLiBsZXRzIHNheSwgYSBodHRwIGNhbGwgdXNpbmcgdnVlLXJlc291cmNlXG4gICAgICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJysgY29udGV4dC5zdGF0ZS50b2tlblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9wcm9kdWN0cz9wYWdlPVwiK2RhdGEucGFnZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHAgc3VjY2VzcywgY2FsbCB0aGUgbXV0YXRvciBhbmQgY2hhbmdlIHNvbWV0aGluZyBpbiBzdGF0ZVxuICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpOyAgLy8gTGV0IHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGtub3cgdGhhdCBodHRwIGlzIGRvbmUuIFlvdSBtYXkgc2VuZCBzb21lIGRhdGEgYmFja1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cCBmYWlsZWQsIGxldCB0aGUgY2FsbGluZyBmdW5jdGlvbiBrbm93IHRoYXQgYWN0aW9uIGRpZCBub3Qgd29yayBvdXRcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuXG4gICAgICAgIGdldFB1cmNoYXNlT3JkZXJzKGNvbnRleHQsIGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIGhlcmUuLi4gbGV0cyBzYXksIGEgaHR0cCBjYWxsIHVzaW5nIHZ1ZS1yZXNvdXJjZVxuICAgICAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcrIGNvbnRleHQuc3RhdGUudG9rZW5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvcHVyY2hhc2VvcmRlcnM/cGFnZT1cIitkYXRhLnBhZ2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBodHRwIHN1Y2Nlc3MsIGNhbGwgdGhlIG11dGF0b3IgYW5kIGNoYW5nZSBzb21ldGhpbmcgaW4gc3RhdGVcbiAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTsgIC8vIExldCB0aGUgY2FsbGluZyBmdW5jdGlvbiBrbm93IHRoYXQgaHR0cCBpcyBkb25lLiBZb3UgbWF5IHNlbmQgc29tZSBkYXRhIGJhY2tcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHAgZmFpbGVkLCBsZXQgdGhlIGNhbGxpbmcgZnVuY3Rpb24ga25vdyB0aGF0IGFjdGlvbiBkaWQgbm90IHdvcmsgb3V0XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cblxuICAgICAgICBnZXRCaWxscyhjb250ZXh0LCBkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyBoZXJlLi4uIGxldHMgc2F5LCBhIGh0dHAgY2FsbCB1c2luZyB2dWUtcmVzb3VyY2VcbiAgICAgICAgICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnKyBjb250ZXh0LnN0YXRlLnRva2VuXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFwiYXBpL2JpbGxzP3BhZ2U9XCIrZGF0YS5wYWdlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cCBzdWNjZXNzLCBjYWxsIHRoZSBtdXRhdG9yIGFuZCBjaGFuZ2Ugc29tZXRoaW5nIGluIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7ICAvLyBMZXQgdGhlIGNhbGxpbmcgZnVuY3Rpb24ga25vdyB0aGF0IGh0dHAgaXMgZG9uZS4gWW91IG1heSBzZW5kIHNvbWUgZGF0YSBiYWNrXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBodHRwIGZhaWxlZCwgbGV0IHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGtub3cgdGhhdCBhY3Rpb24gZGlkIG5vdCB3b3JrIG91dFxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgZ2V0U2FsZXNPcmRlcnMoY29udGV4dCwgZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBEbyBzb21ldGhpbmcgaGVyZS4uLiBsZXRzIHNheSwgYSBodHRwIGNhbGwgdXNpbmcgdnVlLXJlc291cmNlXG4gICAgICAgICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJysgY29udGV4dC5zdGF0ZS50b2tlblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldChcImFwaS9zYWxlc29yZGVycz9wYWdlPVwiK2RhdGEucGFnZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHAgc3VjY2VzcywgY2FsbCB0aGUgbXV0YXRvciBhbmQgY2hhbmdlIHNvbWV0aGluZyBpbiBzdGF0ZVxuICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpOyAgLy8gTGV0IHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGtub3cgdGhhdCBodHRwIGlzIGRvbmUuIFlvdSBtYXkgc2VuZCBzb21lIGRhdGEgYmFja1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cCBmYWlsZWQsIGxldCB0aGUgY2FsbGluZyBmdW5jdGlvbiBrbm93IHRoYXQgYWN0aW9uIGRpZCBub3Qgd29yayBvdXRcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuXG4gICAgICAgIGdldFNhbGVzT3JkZXJzKGNvbnRleHQsIGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIGhlcmUuLi4gbGV0cyBzYXksIGEgaHR0cCBjYWxsIHVzaW5nIHZ1ZS1yZXNvdXJjZVxuICAgICAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcrIGNvbnRleHQuc3RhdGUudG9rZW5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoXCJhcGkvc2FsZXNvcmRlcnM/cGFnZT1cIitkYXRhLnBhZ2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBodHRwIHN1Y2Nlc3MsIGNhbGwgdGhlIG11dGF0b3IgYW5kIGNoYW5nZSBzb21ldGhpbmcgaW4gc3RhdGVcbiAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTsgIC8vIExldCB0aGUgY2FsbGluZyBmdW5jdGlvbiBrbm93IHRoYXQgaHR0cCBpcyBkb25lLiBZb3UgbWF5IHNlbmQgc29tZSBkYXRhIGJhY2tcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHAgZmFpbGVkLCBsZXQgdGhlIGNhbGxpbmcgZnVuY3Rpb24ga25vdyB0aGF0IGFjdGlvbiBkaWQgbm90IHdvcmsgb3V0XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cblxuXG5cbiAgICAgICAgYWN0aW9uX2xvZ291dCh7ZGlzcGF0Y2gsY29tbWl0LHN0YXRlLGdldHRlcnN9KXtcblxuICAgICAgICAgICAgaWYoZ2V0dGVycy5pc0xvZ2VkSW4pe1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnQmVhcmVyICcrIHN0YXRlLnRva2VuXG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnYXBpL3VzZXIvbG9nb3V0JylcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLiRzdG9yZS5jb21taXQoJ3NldFRva2VuJyx0b2tlbilcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KCdzZXRUb2tlbicsbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcnM9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICByZWZyZXNoVG9rZW4oY29udGV4dCl7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJ2FwaS91c2VyL3JlZnJlc2gnLHt0b2tlbjpjb250ZXh0LnN0YXRlLnRva2VufSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBUb2tlblwiK3Jlc3BvbnNlLmRhdGEudG9rZW4pXG4gICAgICAgICAgICAgICAgY29udGV4dC5zdGF0ZS50b2tlbj1yZXNwb25zZS5kYXRhLnRva2VuXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIFwiK2Vycm9yKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgfVxuXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3N0b3JlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///126\n");

/***/ })

})