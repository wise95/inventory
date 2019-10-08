webpackHotUpdate(0,{

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: \"userprofilemenu\",\n    data() {\n        return {\n            isProfileDropdownActive: false,\n            mytime: __WEBPACK_IMPORTED_MODULE_1_moment___default()().format('M'),\n            current: 'Today'\n        };\n    },\n\n    computed: {\n        isLogedIn() {\n            return this.$store.getters.isLogedIn;\n        }\n    },\n\n    mounted() {\n        document.addEventListener('click', this.close);\n    },\n    methods: {\n\n        logout: function () {\n            this.$store.dispatch('action_logout');\n        },\n\n        click_menu(e) {\n\n            //alert(e.target.id)\n            this.isProfileDropdownActive = false;\n\n            if (e.target.id == 'today') {\n                this.current = \"Today\";\n            } else if (e.target.id == 'yesterday') {\n                this.current = \"Yesterday\";\n            } else if (e.target.id == 'thisweek') {\n\n                this.current = \"This Week\";\n            } else if (e.target.id == 'previousweek') {\n                this.current = \"Previous Week\";\n            } else if (e.target.id == 'thismonth') {\n                this.current = \"This Month\";\n            } else if (e.target.id == 'previoumonth') {\n                this.current = \"Previous Month\";\n            } else if (e.target.id == 'thisyear') {\n                this.current = \"This Year\";\n            } else if (e.target.id == 'previousweek') {\n                this.current = \"Previous Yaer\";\n            }\n        },\n\n        close(e) {\n\n            if (!this.$el.contains(e.target)) {\n                this.isProfileDropdownActive = false;\n            }\n        },\n\n        show_purchaseorder_dd: function () {\n            this.isProfileDropdownActive = true;\n        }\n\n    }\n\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9QdXJjaGFzZU9yZGVyU3VtbWFyeS52dWU/NDA3NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEZBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFDQTtBQUNBLDBDQURBO0FBRUEsZ0ZBRkE7QUFHQTtBQUhBO0FBS0EsS0FSQTs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEtBVkE7O0FBZ0JBO0FBQ0E7QUFDQSxLQWxCQTtBQW1CQTs7QUFFQTtBQUNBO0FBQ0EsU0FKQTs7QUFNQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUVBLGFBSEEsTUFHQTs7QUFFQTtBQUVBLGFBSkEsTUFJQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQSxhQUZBLE1BRUE7QUFDQTtBQUNBLGFBRkEsTUFFQTtBQUNBO0FBQ0EsYUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUdBLFNBakNBOztBQW1DQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQXhDQTs7QUEwQ0E7QUFDQTtBQUNBOztBQTVDQTs7QUFuQkEiLCJmaWxlIjoiNDA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48ZGl2IGNsYXNzPVwiYm94XCI+XG48ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+UHVyY2hhc2UgT3JkZXJzIDwvaDI+XG4gICAgIDwvZGl2PlxuICBcbiAgICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBpcy1yaWdodFwiIHYtYmluZDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzUHJvZmlsZURyb3Bkb3duQWN0aXZlIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2hvd19wdXJjaGFzZW9yZGVyX2RkXCIgY2xhc3M9XCJidXR0b25cIiBzdHlsZT1cImJvcmRlcjpub25lO2ZvbnQtc2l6ZTogMTJweDtcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2N1cnJlbnR9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJ0b2RheVwiIEBjbGljaz1cImNsaWNrX21lbnVcIiBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9kYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgIEBjbGljaz1cImNsaWNrX21lbnVcIiAgaWQ9XCJ5ZXN0ZXJkYXlcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFllc3RlcmRheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJjbGlja19tZW51XCIgIGlkPVwidGhpc3dlZWtcIiBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBXZWVrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImNsaWNrX21lbnVcIiAgaWQ9XCJwcmV2aW91c3dlZWtcIiBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXMgV2Vla1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XCJjbGlja19tZW51XCIgIGlkPVwidGhpc21vbnRoXCIgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgTW9udGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwiY2xpY2tfbWVudVwiICBpZD1cInByZXZpb3VzbW9udGhcIiBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvcyBNb250aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVwiY2xpY2tfbWVudVwiICBpZD1cInRoaXN5ZWFyXCIgaHJlZj1cIiNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgWWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cImNsaWNrX21lbnVcIiAgaWQ9XCJwcmV2aW91c3llYXJcIiBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXMgWWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICA8L2Rpdj5cblxuICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG5cbiAgICAgICA8dHI+IFxuXG4gICAgICAgICAgIDx0ZCBjbGFzcz1cInRhYmxlX2hlYWRcIj4gTnVtYmVyIE9mIE9yZGVycyA8L3RkPlxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8dHI+IFxuXG4gICAgICAgICAgIDx0ZCBjbGFzcz1cInRhYmxlX2RhdGFcIj4ge3tteXRpbWV9fTwvdGQ+XG4gICAgICAgPC90cj5cblxuXG4gICAgICAgIDx0cj4gXG5cbiAgICAgICAgICAgPHRkIGNsYXNzPVwidGFibGVfaGVhZFwiIHN0eWxlPVwicGFkZGluZy10b3A6MjBweFwiPiBUb3RhbCBDb3N0PC90ZD5cbiAgICAgICA8L3RyPlxuXG4gICAgICAgPHRyPiBcblxuICAgICAgICAgICA8dGQgY2xhc3M9XCJ0YWJsZV9kYXRhXCI+IDMwPC90ZD5cbiAgICAgICA8L3RyPlxuXG5cbiAgIDwvdGFibGU+XG5cbiAgPC9kaXY+ICAgICAgXG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG4gZXhwb3J0IGRlZmF1bHQge1xuICAgbmFtZTpcInVzZXJwcm9maWxlbWVudVwiLFxuICAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzUHJvZmlsZURyb3Bkb3duQWN0aXZlOmZhbHNlLFxuICAgICAgbXl0aW1lOm1vbWVudCgpLmZvcm1hdCgnTScpLFxuICAgICAgY3VycmVudDonVG9kYXknXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOntcbiAgICBpc0xvZ2VkSW4oKXtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmlzTG9nZWRJblxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXG4gIH0sXG4gIG1ldGhvZHM6IHtcblxuICAgICAgIGxvZ291dDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FjdGlvbl9sb2dvdXQnKVxuICAgICAgIH0sXG5cbiAgICAgICBjbGlja19tZW51KGUpe1xuXG4gICAgICAgICAgIC8vYWxlcnQoZS50YXJnZXQuaWQpXG4gICAgICAgICAgICB0aGlzLmlzUHJvZmlsZURyb3Bkb3duQWN0aXZlID0gZmFsc2VcblxuICAgICAgICAgICAgaWYoZS50YXJnZXQuaWQ9PSd0b2RheScpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50PVwiVG9kYXlcIlxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuaWQ9PSd5ZXN0ZXJkYXknKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQ9XCJZZXN0ZXJkYXlcIlxuXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5pZD09J3RoaXN3ZWVrJyl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQ9XCJUaGlzIFdlZWtcIlxuXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5pZD09J3ByZXZpb3Vzd2Vlaycpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudD1cIlByZXZpb3VzIFdlZWtcIlxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuaWQ9PSd0aGlzbW9udGgnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQ9XCJUaGlzIE1vbnRoXCJcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkPT0ncHJldmlvdW1vbnRoJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50PVwiUHJldmlvdXMgTW9udGhcIlxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuaWQ9PSd0aGlzeWVhcicpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudD1cIlRoaXMgWWVhclwiXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5pZD09J3ByZXZpb3Vzd2Vlaycpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudD1cIlByZXZpb3VzIFlhZXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICB9LFxuXG4gICAgICAgIGNsb3NlIChlKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Byb2ZpbGVEcm9wZG93bkFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2hvd19wdXJjaGFzZW9yZGVyX2RkOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgdGhpcy5pc1Byb2ZpbGVEcm9wZG93bkFjdGl2ZT10cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFxuXG4gICB9XG5cbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuLnRhYmxlX2hlYWR7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4udGFibGVfZGF0YXtcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyXG59XG5cbjwvc3R5bGU+XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvUHVyY2hhc2VPcmRlclN1bW1hcnkudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///405\n");

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(8)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.table_head{\\n     text-align: center\\n}\\n.table_data{\\n     text-align: center\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/Applications/XAMPP/xamppfiles/htdocs/dev/cc/laravel/invetory/resources/assets/js/components/dashboard/resources/assets/js/components/dashboard/PurchaseOrderSummary.vue\"],\"names\":[],\"mappings\":\";AAsKA;KACA,kBAAA;CACA;AAEA;KACA,kBAAA;CACA\",\"file\":\"PurchaseOrderSummary.vue\",\"sourcesContent\":[\"<template>\\n\\n<div class=\\\"box\\\">\\n<div class=\\\"toolbar\\\">\\n\\n     <div class=\\\"tool_strip\\\">\\n         <h2 class=\\\"title is-6\\\">Purchase Orders </h2>\\n     </div>\\n  \\n    <div>\\n    <div class=\\\"dropdown is-right\\\" v-bind:class=\\\"{ 'is-active': isProfileDropdownActive }\\\">\\n                              <div class=\\\"dropdown-trigger\\\">\\n                                <button @click=\\\"show_purchaseorder_dd\\\" class=\\\"button\\\" style=\\\"border:none;font-size: 12px;\\\" aria-haspopup=\\\"true\\\" aria-controls=\\\"dropdown-menu\\\">\\n                                    <span>{{current}}</span>\\n                                    <span class=\\\"icon is-small\\\">\\n                                        <i class=\\\"fas fa-angle-down\\\" aria-hidden=\\\"true\\\"></i>\\n                                    </span>\\n                                </button>\\n                              </div>\\n                              <div class=\\\"dropdown-menu\\\" id=\\\"dropdown-menu\\\" role=\\\"menu\\\">\\n                                <div class=\\\"dropdown-content\\\">\\n                                  <a id=\\\"today\\\" @click=\\\"click_menu\\\" href=\\\"#\\\" class=\\\"dropdown-item\\\">\\n                                    Today\\n                                  </a>\\n                                  <a  @click=\\\"click_menu\\\"  id=\\\"yesterday\\\" class=\\\"dropdown-item\\\">\\n                                    Yesterday\\n                                  </a>\\n                                  <a @click=\\\"click_menu\\\"  id=\\\"thisweek\\\" href=\\\"#\\\" class=\\\"dropdown-item\\\">\\n                                    This Week\\n                                  </a>\\n                                  <a @click=\\\"click_menu\\\"  id=\\\"previousweek\\\" href=\\\"#\\\" class=\\\"dropdown-item\\\">\\n                                    Previous Week\\n                                  </a>\\n                                  <a @click=\\\"click_menu\\\"  id=\\\"thismonth\\\" href=\\\"#\\\" class=\\\"dropdown-item\\\">\\n                                    This Month\\n                                  </a>\\n                                  <a @click=\\\"click_menu\\\"  id=\\\"previousmonth\\\" href=\\\"#\\\" class=\\\"dropdown-item\\\">\\n                                    Previos Month\\n                                  </a>\\n\\n                                 <a @click=\\\"click_menu\\\"  id=\\\"thisyear\\\" href=\\\"#\\\" class=\\\"dropdown-item\\\">\\n                                    This Year\\n                                  </a>\\n\\n                                  <a @click=\\\"click_menu\\\"  id=\\\"previousyear\\\" href=\\\"#\\\" class=\\\"dropdown-item\\\">\\n                                    Previous Year\\n                                  </a>\\n\\n\\n\\n                                 \\n                                </div>\\n                              </div>\\n                            </div>\\n\\n    </div>\\n   </div>\\n\\n   <table class=\\\"table is-fullwidth\\\">\\n\\n       <tr> \\n\\n           <td class=\\\"table_head\\\"> Number Of Orders </td>\\n       </tr>\\n\\n       <tr> \\n\\n           <td class=\\\"table_data\\\"> {{mytime}}</td>\\n       </tr>\\n\\n\\n        <tr> \\n\\n           <td class=\\\"table_head\\\" style=\\\"padding-top:20px\\\"> Total Cost</td>\\n       </tr>\\n\\n       <tr> \\n\\n           <td class=\\\"table_data\\\"> 30</td>\\n       </tr>\\n\\n\\n   </table>\\n\\n  </div>      \\n\\n</template>\\n\\n\\n<script>\\nimport axios from 'axios'\\nimport moment from \\\"moment\\\"\\n export default {\\n   name:\\\"userprofilemenu\\\",\\n   data () {\\n    return {\\n      isProfileDropdownActive:false,\\n      mytime:moment().format('M'),\\n      current:'Today'\\n    }\\n  },\\n\\n  computed:{\\n    isLogedIn(){\\n      return this.$store.getters.isLogedIn\\n    }\\n  },\\n\\n  mounted () {\\n    document.addEventListener('click', this.close)\\n  },\\n  methods: {\\n\\n       logout:function(){\\n            this.$store.dispatch('action_logout')\\n       },\\n\\n       click_menu(e){\\n\\n           //alert(e.target.id)\\n            this.isProfileDropdownActive = false\\n\\n            if(e.target.id=='today'){\\n                  this.current=\\\"Today\\\"\\n            }else if(e.target.id=='yesterday'){\\n                this.current=\\\"Yesterday\\\"\\n\\n            }else if(e.target.id=='thisweek'){\\n\\n                this.current=\\\"This Week\\\"\\n\\n            }else if(e.target.id=='previousweek'){\\n                this.current=\\\"Previous Week\\\"\\n            }else if(e.target.id=='thismonth'){\\n                this.current=\\\"This Month\\\"\\n            }else if(e.target.id=='previoumonth'){\\n                this.current=\\\"Previous Month\\\"\\n            }else if(e.target.id=='thisyear'){\\n                this.current=\\\"This Year\\\"\\n            }else if(e.target.id=='previousweek'){\\n                this.current=\\\"Previous Yaer\\\"\\n            }\\n            \\n\\n       },\\n\\n        close (e) {\\n            \\n            if (!this.$el.contains(e.target)) {\\n                this.isProfileDropdownActive = false\\n            }\\n        },\\n\\n        show_purchaseorder_dd:function(){\\n          this.isProfileDropdownActive=true\\n        },\\n        \\n\\n   }\\n\\n}\\n\\n</script>\\n\\n<style>\\n\\n.table_head{\\n     text-align: center\\n}\\n\\n.table_data{\\n     text-align: center\\n}\\n\\n</style>\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1B1cmNoYXNlT3JkZXJTdW1tYXJ5LnZ1ZT80ZDk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsdUNBQXdDLDRCQUE0QixjQUFjLDRCQUE0QixZQUFZLDJOQUEyTixNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsb1NBQW9TLHVDQUF1QyxtTEFBbUwsZ0JBQWdCLHdHQUF3RyxTQUFTLGk1RUFBaTVFLFFBQVEsa1dBQWtXLDRDQUE0QyxjQUFjLHdHQUF3RyxLQUFLLGlCQUFpQixrQkFBa0IsbURBQW1ELEtBQUssbUJBQW1CLHlEQUF5RCxlQUFlLDZCQUE2Qiw2REFBNkQsMEJBQTBCLDhIQUE4SCx5REFBeUQsa0NBQWtDLDZEQUE2RCxpQ0FBaUMsK0RBQStELHFDQUFxQywrREFBK0Qsa0NBQWtDLDREQUE0RCxxQ0FBcUMsZ0VBQWdFLGlDQUFpQywyREFBMkQscUNBQXFDLCtEQUErRCwwQkFBMEIsd0JBQXdCLCtEQUErRCxxRUFBcUUsV0FBVyw4Q0FBOEMsd0RBQXdELG1CQUFtQixLQUFLLHdDQUF3Qyw0QkFBNEIsZ0JBQWdCLDRCQUE0QixxQ0FBcUM7O0FBRXYvSyIsImZpbGUiOiI0MTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlX2hlYWR7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuLnRhYmxlX2RhdGF7XFxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3MvZGV2L2NjL2xhcmF2ZWwvaW52ZXRvcnkvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Rhc2hib2FyZC9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZGFzaGJvYXJkL1B1cmNoYXNlT3JkZXJTdW1tYXJ5LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0tBO0tBQ0Esa0JBQUE7Q0FDQTtBQUVBO0tBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUHVyY2hhc2VPcmRlclN1bW1hcnkudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG48ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbjxkaXYgY2xhc3M9XFxcInRvb2xiYXJcXFwiPlxcblxcbiAgICAgPGRpdiBjbGFzcz1cXFwidG9vbF9zdHJpcFxcXCI+XFxuICAgICAgICAgPGgyIGNsYXNzPVxcXCJ0aXRsZSBpcy02XFxcIj5QdXJjaGFzZSBPcmRlcnMgPC9oMj5cXG4gICAgIDwvZGl2PlxcbiAgXFxuICAgIDxkaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duIGlzLXJpZ2h0XFxcIiB2LWJpbmQ6Y2xhc3M9XFxcInsgJ2lzLWFjdGl2ZSc6IGlzUHJvZmlsZURyb3Bkb3duQWN0aXZlIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLXRyaWdnZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XFxcInNob3dfcHVyY2hhc2VvcmRlcl9kZFxcXCIgY2xhc3M9XFxcImJ1dHRvblxcXCIgc3R5bGU9XFxcImJvcmRlcjpub25lO2ZvbnQtc2l6ZTogMTJweDtcXFwiIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiIGFyaWEtY29udHJvbHM9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7Y3VycmVudH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1hbmdsZS1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIGlkPVxcXCJkcm9wZG93bi1tZW51XFxcIiByb2xlPVxcXCJtZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBpZD1cXFwidG9kYXlcXFwiIEBjbGljaz1cXFwiY2xpY2tfbWVudVxcXCIgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgIEBjbGljaz1cXFwiY2xpY2tfbWVudVxcXCIgIGlkPVxcXCJ5ZXN0ZXJkYXlcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZZXN0ZXJkYXlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XFxcImNsaWNrX21lbnVcXFwiICBpZD1cXFwidGhpc3dlZWtcXFwiIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIFdlZWtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XFxcImNsaWNrX21lbnVcXFwiICBpZD1cXFwicHJldmlvdXN3ZWVrXFxcIiBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXMgV2Vla1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIEBjbGljaz1cXFwiY2xpY2tfbWVudVxcXCIgIGlkPVxcXCJ0aGlzbW9udGhcXFwiIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIE1vbnRoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgQGNsaWNrPVxcXCJjbGlja19tZW51XFxcIiAgaWQ9XFxcInByZXZpb3VzbW9udGhcXFwiIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aW9zIE1vbnRoXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XFxcImNsaWNrX21lbnVcXFwiICBpZD1cXFwidGhpc3llYXJcXFwiIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIFllYXJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBAY2xpY2s9XFxcImNsaWNrX21lbnVcXFwiICBpZD1cXFwicHJldmlvdXN5ZWFyXFxcIiBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJldmlvdXMgWWVhclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuXFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgIDwvZGl2PlxcblxcbiAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgaXMtZnVsbHdpZHRoXFxcIj5cXG5cXG4gICAgICAgPHRyPiBcXG5cXG4gICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGVfaGVhZFxcXCI+IE51bWJlciBPZiBPcmRlcnMgPC90ZD5cXG4gICAgICAgPC90cj5cXG5cXG4gICAgICAgPHRyPiBcXG5cXG4gICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGVfZGF0YVxcXCI+IHt7bXl0aW1lfX08L3RkPlxcbiAgICAgICA8L3RyPlxcblxcblxcbiAgICAgICAgPHRyPiBcXG5cXG4gICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGVfaGVhZFxcXCIgc3R5bGU9XFxcInBhZGRpbmctdG9wOjIwcHhcXFwiPiBUb3RhbCBDb3N0PC90ZD5cXG4gICAgICAgPC90cj5cXG5cXG4gICAgICAgPHRyPiBcXG5cXG4gICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGVfZGF0YVxcXCI+IDMwPC90ZD5cXG4gICAgICAgPC90cj5cXG5cXG5cXG4gICA8L3RhYmxlPlxcblxcbiAgPC9kaXY+ICAgICAgXFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgbW9tZW50IGZyb20gXFxcIm1vbWVudFxcXCJcXG4gZXhwb3J0IGRlZmF1bHQge1xcbiAgIG5hbWU6XFxcInVzZXJwcm9maWxlbWVudVxcXCIsXFxuICAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaXNQcm9maWxlRHJvcGRvd25BY3RpdmU6ZmFsc2UsXFxuICAgICAgbXl0aW1lOm1vbWVudCgpLmZvcm1hdCgnTScpLFxcbiAgICAgIGN1cnJlbnQ6J1RvZGF5J1xcbiAgICB9XFxuICB9LFxcblxcbiAgY29tcHV0ZWQ6e1xcbiAgICBpc0xvZ2VkSW4oKXtcXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5pc0xvZ2VkSW5cXG4gICAgfVxcbiAgfSxcXG5cXG4gIG1vdW50ZWQgKCkge1xcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXFxuICB9LFxcbiAgbWV0aG9kczoge1xcblxcbiAgICAgICBsb2dvdXQ6ZnVuY3Rpb24oKXtcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWN0aW9uX2xvZ291dCcpXFxuICAgICAgIH0sXFxuXFxuICAgICAgIGNsaWNrX21lbnUoZSl7XFxuXFxuICAgICAgICAgICAvL2FsZXJ0KGUudGFyZ2V0LmlkKVxcbiAgICAgICAgICAgIHRoaXMuaXNQcm9maWxlRHJvcGRvd25BY3RpdmUgPSBmYWxzZVxcblxcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkPT0ndG9kYXknKXtcXG4gICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQ9XFxcIlRvZGF5XFxcIlxcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkPT0neWVzdGVyZGF5Jyl7XFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudD1cXFwiWWVzdGVyZGF5XFxcIlxcblxcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkPT0ndGhpc3dlZWsnKXtcXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50PVxcXCJUaGlzIFdlZWtcXFwiXFxuXFxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuaWQ9PSdwcmV2aW91c3dlZWsnKXtcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50PVxcXCJQcmV2aW91cyBXZWVrXFxcIlxcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkPT0ndGhpc21vbnRoJyl7XFxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudD1cXFwiVGhpcyBNb250aFxcXCJcXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5pZD09J3ByZXZpb3Vtb250aCcpe1xcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnQ9XFxcIlByZXZpb3VzIE1vbnRoXFxcIlxcbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmlkPT0ndGhpc3llYXInKXtcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50PVxcXCJUaGlzIFllYXJcXFwiXFxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuaWQ9PSdwcmV2aW91c3dlZWsnKXtcXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50PVxcXCJQcmV2aW91cyBZYWVyXFxcIlxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG5cXG4gICAgICAgfSxcXG5cXG4gICAgICAgIGNsb3NlIChlKSB7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgaWYgKCF0aGlzLiRlbC5jb250YWlucyhlLnRhcmdldCkpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Byb2ZpbGVEcm9wZG93bkFjdGl2ZSA9IGZhbHNlXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG5cXG4gICAgICAgIHNob3dfcHVyY2hhc2VvcmRlcl9kZDpmdW5jdGlvbigpe1xcbiAgICAgICAgICB0aGlzLmlzUHJvZmlsZURyb3Bkb3duQWN0aXZlPXRydWVcXG4gICAgICAgIH0sXFxuICAgICAgICBcXG5cXG4gICB9XFxuXFxufVxcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4udGFibGVfaGVhZHtcXG4gICAgIHRleHQtYWxpZ246IGNlbnRlclxcbn1cXG5cXG4udGFibGVfZGF0YXtcXG4gICAgIHRleHQtYWxpZ246IGNlbnRlclxcbn1cXG5cXG48L3N0eWxlPlxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi05ZjE1ZjJhYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9kYXNoYm9hcmQvUHVyY2hhc2VPcmRlclN1bW1hcnkudnVlXG4vLyBtb2R1bGUgaWQgPSA0MTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///412\n");

/***/ })

})