webpackHotUpdate(0,{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__ = __webpack_require__(145);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(5);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nconst dict = {\n  custom: {\n    ponumber: {\n      required: \"Order# is empty\"\n    },\n    name: {\n      required: () => \"Your name is empty\"\n    }\n  }\n};\n\n__WEBPACK_IMPORTED_MODULE_4_vee_validate__[\"a\" /* Validator */].localize(\"en\", dict);\n\nfunction test() {\n  alert(\"inside test\");\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      ponumber: \"\",\n      vendor_id: \"\",\n      products: [],\n      isAddActive: false,\n      products: [],\n      keyword: \"\",\n      key: \"\",\n      unit_price: \"\",\n      qty: \"\",\n      product_grid: [],\n      vendors: [],\n      created_date: new Date(),\n      status: \"Created\",\n      delivery_date: \"\",\n      delivery_date_error: false,\n      error_vendor: false,\n      vendor: ''\n    };\n  },\n\n  components: {\n    purchase_order_table: __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__[\"a\" /* default */],\n    Select2Box: __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__[\"a\" /* default */],\n    Datepicker: __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__[\"a\" /* default */]\n  },\n\n  watch: {},\n\n  computed: {\n    isValidQty: function () {\n\n      this.products.forEach((row, i) => {\n\n        this.product_grid.forEach((obj, index) => {\n\n          if (obj.id == row.id) {\n\n            if (obj.qty == obj.qty) {\n\n              console.log(\"Qty Equal\");\n              this.product_grid[index].qty_error = true;\n            }\n          }\n        });\n      });\n    }\n  },\n\n  mounted() {\n\n    document.addEventListener('click', this.closeProductDropdown);\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/purchaseorders/getnextponumber\").then(response => {\n      this.ponumber = response.data;\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error);\n    });\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\").then(response => {\n      this.vendors = response.data.data;\n      console.log(this.vendors);\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n\n  methods: {\n\n    closeProductDropdown(e) {\n      if (!this.$el.contains(e.target)) {\n        this.isAddActive = false;\n      }\n    },\n\n    customFormatter(date) {\n      return moment(date).format('MMMM Do YYYY, h:mm:ss a');\n    },\n    change_vendor: function () {\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\" + this.vendor_id + \"/products\").then(response => {\n        this.products = response.data.data;\n        this.error_vendor = false;\n      }).catch(error => {\n        console.log(error);\n      });\n\n      // get selected vendor\n\n      this.vendors.forEach((obj, index) => {\n        if (obj.id == this.vendor_id) {\n          this.vendor = obj;\n        }\n      });\n    },\n\n    change_delivery_date: function () {\n      this.delivery_date_error = false;\n    },\n\n    create_new: function () {\n      let self = this;\n      //alert(this.purchase_order_number);\n\n      if (this.delivery_date == \"\") {\n        this.delivery_date_error = true;\n        return;\n      }\n\n      let payload = {\n        product_id_list: [\"pid1234\", \"pid1235\"],\n        products: this.product_grid,\n        ponumber: this.ponumber,\n        vendor_id: this.vendor_id,\n        created_date: this.created_date,\n        delivery_date: this.delivery_date,\n        status: this.status,\n        total: this.sub_total()\n      };\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(\"api/purchaseorders/create\", payload).then(function (response) {\n        self.$router.push(\"/purchaseorders/all\");\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n\n    showproducts: function () {\n      if (this.products.length == 0) {\n        this.error_select_product = true;\n        this.error_vendor = true;\n      } else {\n        this.isAddActive = !this.isAddActive;\n      }\n    },\n\n    add_product: function ($event) {\n      this.isAddActive = false;\n      this.products.forEach((row, i) => {\n        if (row[\"id\"] == $event.target.id) {\n          let isProductInTable = false;\n          this.product_grid.forEach((obj, index) => {\n            if (obj[\"id\"] == $event.target.id) {\n              this.product_grid[index].qty = this.product_grid[index].qty + 1;\n              isProductInTable = true;\n            }\n          });\n\n          if (isProductInTable == false) {\n            row.qty = 1;\n            row.qty_error = false;\n            this.product_grid.push(row);\n          }\n          //alert($event.target.id)\n\n          return;\n        }\n      });\n    },\n    delete_row: function ($event) {\n      console.log($event.target);\n      //alert($event.target.id)\n      this.product_grid.splice($event.target.id, 1);\n    },\n\n    sub_total: function () {\n      let sum = 0;\n      this.product_grid.forEach((row, i) => {\n        sum = sum + row.productprice.purchase_price * row.qty;\n      });\n\n      return sum;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlPzYxMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFEQTs7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQSx3QkFKQTtBQUtBLGtCQUxBO0FBTUEsaUJBTkE7QUFPQSxhQVBBO0FBUUEsb0JBUkE7QUFTQSxhQVRBO0FBVUEsc0JBVkE7QUFXQSxpQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSx1QkFkQTtBQWVBLGdDQWZBO0FBZ0JBLHlCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxHQXRCQTs7QUF3QkE7QUFDQSxrR0FEQTtBQUVBLGdGQUZBO0FBR0E7QUFIQSxHQXhCQTs7QUE4QkEsV0E5QkE7O0FBZ0NBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQVhBO0FBWUEsT0FkQTtBQWdCQTtBQW5CQSxHQWhDQTs7QUFzREE7O0FBRUE7QUFDQSxrREFDQSxHQURBLENBQ0Esb0NBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsS0FSQTs7QUFVQSxrREFDQSxHQURBLENBQ0EsY0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxLQVJBO0FBU0EsR0E1RUE7O0FBOEVBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTs7QUFVQTtBQUNBO0FBQ0EsS0FaQTtBQWFBO0FBQ0Esb0RBQ0EsR0FEQSxDQUNBLDZDQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLE9BUkE7O0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxPQUxBO0FBU0EsS0FuQ0E7O0FBcUNBO0FBQ0E7QUFDQSxLQXZDQTs7QUF5Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBREE7QUFFQSxtQ0FGQTtBQUdBLCtCQUhBO0FBSUEsaUNBSkE7QUFLQSx1Q0FMQTtBQU1BLHlDQU5BO0FBT0EsMkJBUEE7QUFRQTtBQVJBOztBQVdBLG9EQUNBLElBREEsQ0FDQSwyQkFEQSxFQUNBLE9BREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsT0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsT0FSQTtBQVNBLEtBdEVBOztBQXdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQSxLQS9FQTs7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FuQkE7QUFvQkEsS0F2R0E7QUF3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVHQTs7QUE4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBOztBQUlBO0FBQ0E7QUFySEE7QUE5RUEiLCJmaWxlIjoiMjY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0yLjdyZW07cGFkZGluZy10b3A6IDEzcHg7bWFyZ2luLWJvdHRvbTogMTNweDtcIj5cbiAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cblxuICAgICA8ZGl2IGNsYXNzPVwidG9vbF9zdHJpcFwiPlxuICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUgaXMtNlwiPiBDcmVhdGUgUHVyY2hhc2UgT3JkZXIgPC9oMj5cbiAgICAgPC9kaXY+XG5cbiAgICAgPGRpdj5cbiAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1zbWFsbFwiIEBjbGljaz1cImNyZWF0ZV9uZXdcIj5TYXZlPC9hPlxuICAgICAgICA8cm91dGVyLWxpbmsgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1zbWFsbFwiIDp0bz1cIicvcHVyY2hhc2VvcmRlcnMvY3JlYXRlJ1wiID5DcmVhdGUgTmV3PC9yb3V0ZXItbGluaz5cbiAgICAgPC9kaXY+XG4gICAgIFxuICAgPC9kaXY+XG5cbjwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmZcIj5cbiBcblxuICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTEyXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDotMi43cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7cGFkZGluZy10b3A6IDEzcHg7cGFkZGluZy1sZWZ0OiAxLjVyZW07XCI+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjBweFwiPlxuICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+T3JkZXIgIzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0ICBpcy1zbWFsbFwiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgbmFtZT1cInBvbnVtYmVyXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwicG9udW1iZXJcIiA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCI+e3sgZXJyb3JzLmZpcnN0KCdwb251bWJlcicpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIFxuXG5cbiAgICA8L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowcHhcIj5cbiAgICBcbiAgICBcblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+Q3JlYXRlZCBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgOmZvcm1hdD1cIid5eXl5LU1NLWRkJ1wiIDppbnB1dC1jbGFzcz1cIidpbnB1dCBpcy1zbWFsbCdcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIG5hbWU9XCJjcmVhdGVkX2RhdGVcIiB2LW1vZGVsPVwiY3JlYXRlZF9kYXRlXCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCI+e3sgZXJyb3JzLmZpcnN0KCdjcmVhdGVkX2RhdGUnKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5TdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzdGF0dXNcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNyZWF0ZWRcIiA+Q3JlYXRlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZW50XCIgPlNlbnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPkV4cGVjdGVkIERlbGl2ZXJ5IERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyICBAc2VsZWN0ZWQ9XCJjaGFuZ2VfZGVsaXZlcnlfZGF0ZVwiICBuYW1lPVwiZGVsaXZlcnlfZGF0ZVwiIHYtbW9kZWw9XCJkZWxpdmVyeV9kYXRlXCIgOmZvcm1hdD1cIid5eXl5LU1NTS1kZCdcIiA6aW5wdXQtY2xhc3M9XCInaW5wdXQgaXMtc21hbGwnXCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImRlbGl2ZXJ5X2RhdGVfZXJyb3JcIj5QbGVhc2UgZW50ZXIgZGVsaXZlcnkgZGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cblxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuXG5cblxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjBweFwiPlxuICAgIFxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+VmVuZG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0IGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInZlbmRvcl9pZFwiIEBjaGFuZ2U9XCJjaGFuZ2VfdmVuZG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIih2ZW5kb3IsIGluZGV4KSBpbiB2ZW5kb3JzXCIgOnZhbHVlPVwidmVuZG9yLmlkXCIgID57e3ZlbmRvci5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IFxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvcl92ZW5kb3JcIj5QbGVhc2Ugc2VsZWN0IHZlbmRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLm5hbWV9fSA8L2xhYmVsPiA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj4gPGxhYmVsPiB7e3ZlbmRvci5hZGRlc3N9fSA8L2xhYmVsPiA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj4gPGxhYmVsPiB7e3ZlbmRvci5jaXR5fX0gIDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+e3t2ZW5kb3Iuc3RhdGV9fSB7e3ZlbmRvci56aXB9fSAgPC9sYWJlbD4gPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj4gPGxhYmVsPiB7e3ZlbmRvci5jb3VudHJ5fX0gPC9sYWJlbD4gPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgIFxuXG4gICAgIFxuXG4gICBcbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGlzLWZ1bGx3aWR0aCBpcy1ib3JkZXJlZFwiIGlkPVwiZ3JpZF90YWJsZVwiPlxuICAgICAgIDx0aGVhZD5cbiAgICAgICA8dHI+XG4gICAgICAgIDx0aD4gUHJvZHVjdCBOYW1lIDwvdGg+XG4gICAgICAgIDx0aD4gVW5pdCBQcmljZTwvdGg+XG4gICAgICAgIDx0aD4gUXR5PC90aD5cbiAgICAgICBcbiAgICAgICAgPHRoPiBBbW91bnQ8L3RoPlxuICAgICAgICA8dGg+IDwvdGg+XG5cbiAgICAgICA8L3RyPlxuXG4gICAgICAgPC90aGVhZD5cblxuXG4gICAgICAgICA8dGJvZHk+XG5cbiAgICAgICAgICA8dHIgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIHByb2R1Y3RfZ3JpZFwiPlxuXG4gICAgICAgICAgICA8dGQ+e3twcm9kdWN0Lm5hbWV9fSA8L3RkPlxuICAgICAgICAgICAgPHRkPjxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdi1tb2RlbD0ncHJvZHVjdF9ncmlkW2luZGV4XS5wcm9kdWN0cHJpY2UucHVyY2hhc2VfcHJpY2UnIC8+IDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdi1tb2RlbD0ncHJvZHVjdF9ncmlkW2luZGV4XS5xdHknIEBjaGFuZ2U9XCJjaGVja19xdHlcIiAvPlxuICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5X2Vycm9yPT10cnVlXCIgIGNsYXNzPVwiZXJyb3JcIiA+IEVycm9yIHt7aXNWYWxpZFF0eX19PC9zcGFuPlxuICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt7KHByb2R1Y3RfZ3JpZFtpbmRleF0ucHJvZHVjdHByaWNlLnB1cmNoYXNlX3ByaWNlKnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5KS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgPHRkPiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgQGNsaWNrPVwiZGVsZXRlX3Jvd1wiID4gPGkgOmlkPVwiaW5kZXhcIiBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+IDwvYT4gPC90ZD5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgPHRkPiBcblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIiBzdHlsZT1cIndpZHRoOjEwMCVcIiB2LWJpbmQ6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FkZEFjdGl2ZSB9XCIgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tdHJpZ2dlclwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxuXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCIgIHYtbW9kZWw6dmFsdWU9XCJrZXl3b3JkXCIgQGNsaWNrPVwic2hvd3Byb2R1Y3RzXCIgPiBcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JfdmVuZG9yXCI+UGxlYXNlIHNlbGVjdCB2ZW5kb3IgZmlyc3Q8L3NwYW4+ICBcblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6MHB4XCI+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIHByb2R1Y3RzXCIgOmlkPVwiKHByb2R1Y3QuaWQpXCIgQGNsaWNrPVwiYWRkX3Byb2R1Y3RcIiA+XG4gICAgICAgICAgICAgICAgICAgIHt7cHJvZHVjdC5uYW1lfX0gIFt7e3Byb2R1Y3QucXR5fX1dXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICBXaXRoIGEgZGl2aWRlclxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPiA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgIHYtbW9kZWw6dmFsdWU9XCJ1bml0X3ByaWNlXCIgID4gIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgIHYtbW9kZWw6dmFsdWU9XCJxdHlcIiAgPiAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gICA8L3RkPlxuICAgICAgICAgICAgPHRkPiAgIDwvdGQ+XG5cblxuXG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgPHRyIHN0eWxlPVwiYm9yZGVyLWJvdHRvbS13aWR0aDowXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCIgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlN1YiBUb3RhbCA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj57e3N1Yl90b3RhbCgpLnRvRml4ZWQoMil9fSA8L3RkPlxuXG4gICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1wiIGNsYXNzPVwidGFibGVfbGFiZWwgaXMtZmllbGQtdGl0bGVcIj5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgIGNsYXNzPVwidGFibGVfbGFiZWxcIiBzdHlsZT1cImJvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcIj57e3N1Yl90b3RhbCgpLnRvRml4ZWQoMil9fTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cbiAgPC9kaXY+XG5cbiBcbiAgICBcblxuXG4gPC9kaXY+XG5cbiBcbjwvc2VjdGlvbj4gIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUHVyY2hhc2VPcmRlclRhYmxlIGZyb20gXCIuLi9QdXJjaGFzZU9yZGVyVGFibGUudnVlXCI7XG5pbXBvcnQgU2VsZWN0MkJveCBmcm9tIFwiLi4vU2VsZWN0MkJveC52dWVcIjtcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gXCJ2dWVqcy1kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwidmVlLXZhbGlkYXRlXCI7XG5cbmNvbnN0IGRpY3QgPSB7XG4gIGN1c3RvbToge1xuICAgIHBvbnVtYmVyOiB7XG4gICAgICByZXF1aXJlZDogXCJPcmRlciMgaXMgZW1wdHlcIlxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICgpID0+IFwiWW91ciBuYW1lIGlzIGVtcHR5XCJcbiAgICB9XG4gIH1cbn07XG5cblZhbGlkYXRvci5sb2NhbGl6ZShcImVuXCIsIGRpY3QpO1xuXG5mdW5jdGlvbiB0ZXN0KCkge1xuICBhbGVydChcImluc2lkZSB0ZXN0XCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwicHVyY2hhc2VvcmRlcnNcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9udW1iZXI6IFwiXCIsXG4gICAgICB2ZW5kb3JfaWQ6IFwiXCIsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBpc0FkZEFjdGl2ZTogZmFsc2UsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBrZXl3b3JkOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgdW5pdF9wcmljZTogXCJcIixcbiAgICAgIHF0eTogXCJcIixcbiAgICAgIHByb2R1Y3RfZ3JpZDogW10sXG4gICAgICB2ZW5kb3JzOiBbXSxcbiAgICAgIGNyZWF0ZWRfZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIHN0YXR1czogXCJDcmVhdGVkXCIsXG4gICAgICBkZWxpdmVyeV9kYXRlOiBcIlwiLFxuICAgICAgZGVsaXZlcnlfZGF0ZV9lcnJvcjogZmFsc2UsXG4gICAgICBlcnJvcl92ZW5kb3I6IGZhbHNlLFxuICAgICAgdmVuZG9yOicnXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgcHVyY2hhc2Vfb3JkZXJfdGFibGU6IFB1cmNoYXNlT3JkZXJUYWJsZSxcbiAgICBTZWxlY3QyQm94OiBTZWxlY3QyQm94LFxuICAgIERhdGVwaWNrZXJcbiAgfSxcblxuICB3YXRjaDoge30sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAgIGlzVmFsaWRRdHk6ZnVuY3Rpb24oKXtcbiAgICAgIFxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuXG4gICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgIGlmKG9iai5pZD09cm93LmlkKXtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmKG9iai5xdHk9PW9iai5xdHkpe1xuXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlF0eSBFcXVhbFwiKVxuICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2dyaWRbaW5kZXhdLnF0eV9lcnJvcj10cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIFxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUHJvZHVjdERyb3Bkb3duKVxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiYXBpL3B1cmNoYXNlb3JkZXJzL2dldG5leHRwb251bWJlclwiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnBvbnVtYmVyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiYXBpL3ZlbmRvcnMvXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMudmVuZG9ycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52ZW5kb3JzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG5cbiAgXG5cbiAgICBjbG9zZVByb2R1Y3REcm9wZG93biAoZSkge1xuICAgICAgaWYgKCF0aGlzLiRlbC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5pc0FkZEFjdGl2ZSA9IGZhbHNlXG4gICAgICB9XG4gICAgfSxcblxuICAgIGN1c3RvbUZvcm1hdHRlcihkYXRlKSB7XG4gICAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdCgnTU1NTSBEbyBZWVlZLCBoOm1tOnNzIGEnKTtcbiAgICB9LFxuICAgIGNoYW5nZV92ZW5kb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcImFwaS92ZW5kb3JzL1wiICsgdGhpcy52ZW5kb3JfaWQgKyBcIi9wcm9kdWN0c1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLmVycm9yX3ZlbmRvciA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIHZlbmRvclxuICAgICAgXG4gICAgICAgICB0aGlzLnZlbmRvcnMuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICBpZihvYmouaWQ9PXRoaXMudmVuZG9yX2lkKSB7XG4gICAgICAgICAgICAgdGhpcy52ZW5kb3I9IG9iajtcbiAgICAgICAgICAgfVxuIFxuICAgICAgICAgfSk7XG5cblxuXG4gICAgfSxcblxuICAgIGNoYW5nZV9kZWxpdmVyeV9kYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGVsaXZlcnlfZGF0ZV9lcnJvciA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBjcmVhdGVfbmV3OiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIC8vYWxlcnQodGhpcy5wdXJjaGFzZV9vcmRlcl9udW1iZXIpO1xuXG4gICAgICBpZiAodGhpcy5kZWxpdmVyeV9kYXRlID09IFwiXCIpIHtcbiAgICAgICAgdGhpcy5kZWxpdmVyeV9kYXRlX2Vycm9yID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGF5bG9hZCA9IHtcbiAgICAgICAgcHJvZHVjdF9pZF9saXN0OiBbXCJwaWQxMjM0XCIsIFwicGlkMTIzNVwiXSxcbiAgICAgICAgcHJvZHVjdHM6IHRoaXMucHJvZHVjdF9ncmlkLFxuICAgICAgICBwb251bWJlcjogdGhpcy5wb251bWJlcixcbiAgICAgICAgdmVuZG9yX2lkOiB0aGlzLnZlbmRvcl9pZCxcbiAgICAgICAgY3JlYXRlZF9kYXRlOiB0aGlzLmNyZWF0ZWRfZGF0ZSxcbiAgICAgICAgZGVsaXZlcnlfZGF0ZTogdGhpcy5kZWxpdmVyeV9kYXRlLFxuICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgICB0b3RhbDp0aGlzLnN1Yl90b3RhbCgpXG4gICAgICB9O1xuXG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcImFwaS9wdXJjaGFzZW9yZGVycy9jcmVhdGVcIiwgcGF5bG9hZClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXIucHVzaChcIi9wdXJjaGFzZW9yZGVycy9hbGxcIik7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzaG93cHJvZHVjdHM6ZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICB0aGlzLmVycm9yX3NlbGVjdF9wcm9kdWN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvcl92ZW5kb3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0FkZEFjdGl2ZSA9ICF0aGlzLmlzQWRkQWN0aXZlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRfcHJvZHVjdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICB0aGlzLmlzQWRkQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICBpZiAocm93W1wiaWRcIl0gPT0gJGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgIGxldCBpc1Byb2R1Y3RJblRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9kdWN0X2dyaWQuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9ialtcImlkXCJdID09ICRldmVudC50YXJnZXQuaWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2dyaWRbaW5kZXhdLnF0eSA9IHRoaXMucHJvZHVjdF9ncmlkW2luZGV4XS5xdHkgKyAxO1xuICAgICAgICAgICAgICBpc1Byb2R1Y3RJblRhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpc1Byb2R1Y3RJblRhYmxlID09IGZhbHNlKSB7XG4gICAgICAgICAgICByb3cucXR5ID0gMTtcbiAgICAgICAgICAgIHJvdy5xdHlfZXJyb3I9ZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5wdXNoKHJvdyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vYWxlcnQoJGV2ZW50LnRhcmdldC5pZClcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWxldGVfcm93OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRldmVudC50YXJnZXQpO1xuICAgICAgLy9hbGVydCgkZXZlbnQudGFyZ2V0LmlkKVxuICAgICAgdGhpcy5wcm9kdWN0X2dyaWQuc3BsaWNlKCRldmVudC50YXJnZXQuaWQsIDEpO1xuICAgIH0sXG5cbiAgICBzdWJfdG90YWw6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgc3VtID0gc3VtICsgcm93LnByb2R1Y3RwcmljZS5wdXJjaGFzZV9wcmljZSAqIHJvdy5xdHk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///267\n");

/***/ })

})