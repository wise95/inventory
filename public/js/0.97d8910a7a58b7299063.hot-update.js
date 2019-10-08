webpackHotUpdate(0,{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__ = __webpack_require__(145);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(5);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nconst dict = {\n  custom: {\n    ponumber: {\n      required: \"Order# is empty\"\n    },\n    name: {\n      required: () => \"Your name is empty\"\n    }\n  }\n};\n\n__WEBPACK_IMPORTED_MODULE_4_vee_validate__[\"a\" /* Validator */].localize(\"en\", dict);\n\nfunction test() {\n  alert(\"inside test\");\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      ponumber: \"\",\n      vendor_id: \"\",\n      products: [],\n      isAddActive: false,\n      products: [],\n      keyword: \"\",\n      key: \"\",\n      unit_price: \"\",\n      qty: \"\",\n      product_grid: [],\n      vendors: [],\n      created_date: new Date(),\n      status: \"Created\",\n      delivery_date: \"\",\n      delivery_date_error: false,\n      error_vendor: false,\n      vendor: ''\n    };\n  },\n\n  components: {\n    purchase_order_table: __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__[\"a\" /* default */],\n    Select2Box: __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__[\"a\" /* default */],\n    Datepicker: __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__[\"a\" /* default */]\n  },\n\n  watch: {},\n\n  mounted() {\n\n    document.addEventListener('click', this.closeProductDropdown);\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/purchaseorders/getnextponumber\").then(response => {\n      this.ponumber = response.data;\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error);\n    });\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\").then(response => {\n      this.vendors = response.data.data;\n      console.log(this.vendors);\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n\n  methods: {\n    closeProductDropdown(e) {\n\n      console.log(\"Outside \" + e.target);\n      console.log(\"$el \" + this.$el);\n      if (!this.$el.contains(e.target)) {\n        console.log(\"Hello\");\n        this.isAddActive = false;\n      }\n    },\n\n    customFormatter(date) {\n      return moment(date).format('MMMM Do YYYY, h:mm:ss a');\n    },\n    change_vendor: function () {\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\" + this.vendor_id + \"/products\").then(response => {\n        this.products = response.data.data;\n        this.error_vendor = false;\n      }).catch(error => {\n        console.log(error);\n      });\n\n      // get selected vendor\n\n      this.vendors.forEach((obj, index) => {\n        if (obj.id == this.vendor_id) {\n          this.vendor = obj;\n        }\n      });\n    },\n\n    change_delivery_date: function () {\n      this.delivery_date_error = false;\n    },\n\n    create_new: function () {\n      let self = this;\n      //alert(this.purchase_order_number);\n\n      if (this.delivery_date == \"\") {\n        this.delivery_date_error = true;\n        return;\n      }\n\n      let payload = {\n        product_id_list: [\"pid1234\", \"pid1235\"],\n        products: this.product_grid,\n        ponumber: this.ponumber,\n        vendor_id: this.vendor_id,\n        created_date: this.created_date,\n        delivery_date: this.delivery_date,\n        status: this.status,\n        total: this.sub_total()\n      };\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(\"api/purchaseorders/create\", payload).then(function (response) {\n        self.$router.push(\"/purchaseorders/all\");\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n\n    showproducts: function () {\n      if (this.products.length == 0) {\n        this.error_select_product = true;\n        this.error_vendor = true;\n      } else {\n        this.isAddActive = !this.isAddActive;\n      }\n    },\n\n    add_product: function ($event) {\n      this.isAddActive = false;\n      this.products.forEach((row, i) => {\n        if (row[\"id\"] == $event.target.id) {\n          let isProductInTable = false;\n          this.product_grid.forEach((obj, index) => {\n            if (obj[\"id\"] == $event.target.id) {\n              this.product_grid[index].qty = this.product_grid[index].qty + 1;\n              isProductInTable = true;\n            }\n          });\n\n          if (isProductInTable == false) {\n            row.qty = 1;\n            this.product_grid.push(row);\n          }\n          //alert($event.target.id)\n\n          return;\n        }\n      });\n    },\n    delete_row: function ($event) {\n      console.log($event.target);\n      //alert($event.target.id)\n      this.product_grid.splice($event.target.id, 1);\n    },\n\n    sub_total: function () {\n      let sum = 0;\n      this.product_grid.forEach((row, i) => {\n        sum = sum + row.productprice.purchase_price * row.qty;\n      });\n\n      return sum;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlPzYxMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFEQTs7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQSx3QkFKQTtBQUtBLGtCQUxBO0FBTUEsaUJBTkE7QUFPQSxhQVBBO0FBUUEsb0JBUkE7QUFTQSxhQVRBO0FBVUEsc0JBVkE7QUFXQSxpQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSx1QkFkQTtBQWVBLGdDQWZBO0FBZ0JBLHlCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxHQXRCQTs7QUF3QkE7QUFDQSxrR0FEQTtBQUVBLGdGQUZBO0FBR0E7QUFIQSxHQXhCQTs7QUE4QkEsV0E5QkE7O0FBZ0NBOztBQUVBO0FBQ0Esa0RBQ0EsR0FEQSxDQUNBLG9DQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLEtBUkE7O0FBVUEsa0RBQ0EsR0FEQSxDQUNBLGNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLEdBdERBOztBQXdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVEE7O0FBV0E7QUFDQTtBQUNBLEtBYkE7QUFjQTtBQUNBLG9EQUNBLEdBREEsQ0FDQSw2Q0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxPQVJBOztBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsT0FMQTtBQVNBLEtBcENBOztBQXNDQTtBQUNBO0FBQ0EsS0F4Q0E7O0FBMENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQURBO0FBRUEsbUNBRkE7QUFHQSwrQkFIQTtBQUlBLGlDQUpBO0FBS0EsdUNBTEE7QUFNQSx5Q0FOQTtBQU9BLDJCQVBBO0FBUUE7QUFSQTs7QUFXQSxvREFDQSxJQURBLENBQ0EsMkJBREEsRUFDQSxPQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLE9BUkE7QUFTQSxLQXZFQTs7QUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsS0FoRkE7O0FBa0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQWxCQTtBQW1CQSxLQXZHQTtBQXdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUdBOztBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQXJIQTtBQXhEQSIsImZpbGUiOiIyNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTIuN3JlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAxM3B4O1wiPlxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+IENyZWF0ZSBQdXJjaGFzZSBPcmRlciA8L2gyPlxuICAgICA8L2Rpdj5cblxuICAgICA8ZGl2PlxuICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgQGNsaWNrPVwiY3JlYXRlX25ld1wiPlNhdmU8L2E+XG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy9jcmVhdGUnXCIgPkNyZWF0ZSBOZXc8L3JvdXRlci1saW5rPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICA8L2Rpdj5cblxuPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZlwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtMTJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0yLjdyZW07IGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtwYWRkaW5nLXRvcDogMTNweDtwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcIj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5PcmRlciAjPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgIGlzLXNtYWxsXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBuYW1lPVwicG9udW1iZXJcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwb251bWJlclwiID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ3BvbnVtYmVyJykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgXG5cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjBweFwiPlxuICAgIFxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5DcmVhdGVkIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciA6Zm9ybWF0PVwiJ3l5eXktTU0tZGQnXCIgOmlucHV0LWNsYXNzPVwiJ2lucHV0IGlzLXNtYWxsJ1wiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgbmFtZT1cImNyZWF0ZWRfZGF0ZVwiIHYtbW9kZWw9XCJjcmVhdGVkX2RhdGVcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ2NyZWF0ZWRfZGF0ZScpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdCBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInN0YXR1c1wiID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JlYXRlZFwiID5DcmVhdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlbnRcIiA+U2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+RXhwZWN0ZWQgRGVsaXZlcnkgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgIEBzZWxlY3RlZD1cImNoYW5nZV9kZWxpdmVyeV9kYXRlXCIgIG5hbWU9XCJkZWxpdmVyeV9kYXRlXCIgdi1tb2RlbD1cImRlbGl2ZXJ5X2RhdGVcIiA6Zm9ybWF0PVwiJ3l5eXktTU1NLWRkJ1wiIDppbnB1dC1jbGFzcz1cIidpbnB1dCBpcy1zbWFsbCdcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZGVsaXZlcnlfZGF0ZV9lcnJvclwiPlBsZWFzZSBlbnRlciBkZWxpdmVyeSBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuXG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5WZW5kb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwidmVuZG9yX2lkXCIgQGNoYW5nZT1cImNoYW5nZV92ZW5kb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHZlbmRvciwgaW5kZXgpIGluIHZlbmRvcnNcIiA6dmFsdWU9XCJ2ZW5kb3IuaWRcIiAgPnt7dmVuZG9yLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yX3ZlbmRvclwiPlBsZWFzZSBzZWxlY3QgdmVuZG9yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD4ge3t2ZW5kb3IubmFtZX19IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmFkZGVzc319IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNpdHl9fSAgPC9sYWJlbD4gPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD57e3ZlbmRvci5zdGF0ZX19IHt7dmVuZG9yLnppcH19ICA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNvdW50cnl9fSA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAgXG5cbiAgICAgXG5cbiAgIFxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWJvcmRlcmVkXCIgaWQ9XCJncmlkX3RhYmxlXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBQcm9kdWN0IE5hbWUgPC90aD5cbiAgICAgICAgPHRoPiBVbml0IFByaWNlPC90aD5cbiAgICAgICAgPHRoPiBRdHk8L3RoPlxuICAgICAgIFxuICAgICAgICA8dGg+IEFtb3VudDwvdGg+XG4gICAgICAgIDx0aD4gPC90aD5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgIDx0ciB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdF9ncmlkXCI+XG5cbiAgICAgICAgICAgIDx0ZD57e3Byb2R1Y3QubmFtZX19IDwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnByb2R1Y3RwcmljZS5wdXJjaGFzZV9wcmljZScgLz4gPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnF0eScgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt7KHByb2R1Y3RfZ3JpZFtpbmRleF0ucHJvZHVjdHByaWNlLnB1cmNoYXNlX3ByaWNlKnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5KS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgPHRkPiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgQGNsaWNrPVwiZGVsZXRlX3Jvd1wiID4gPGkgOmlkPVwiaW5kZXhcIiBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+IDwvYT4gPC90ZD5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgPHRkPiBcblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIiBzdHlsZT1cIndpZHRoOjEwMCVcIiB2LWJpbmQ6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FkZEFjdGl2ZSB9XCIgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tdHJpZ2dlclwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxuXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCIgIHYtbW9kZWw6dmFsdWU9XCJrZXl3b3JkXCIgQGNsaWNrPVwic2hvd3Byb2R1Y3RzXCIgPiBcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JfdmVuZG9yXCI+UGxlYXNlIHNlbGVjdCB2ZW5kb3IgZmlyc3Q8L3NwYW4+ICBcblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6MHB4XCI+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIHByb2R1Y3RzXCIgOmlkPVwiKHByb2R1Y3QuaWQpXCIgQGNsaWNrPVwiYWRkX3Byb2R1Y3RcIiA+XG4gICAgICAgICAgICAgICAgICAgIHt7cHJvZHVjdC5uYW1lfX0gIFt7e3Byb2R1Y3QucXR5fX1dXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICBXaXRoIGEgZGl2aWRlclxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPiA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgIHYtbW9kZWw6dmFsdWU9XCJ1bml0X3ByaWNlXCIgID4gIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgIHYtbW9kZWw6dmFsdWU9XCJxdHlcIiAgPiAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gICA8L3RkPlxuICAgICAgICAgICAgPHRkPiAgIDwvdGQ+XG5cblxuXG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgPHRyIHN0eWxlPVwiYm9yZGVyLWJvdHRvbS13aWR0aDowXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCIgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlN1YiBUb3RhbCA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj57e3N1Yl90b3RhbCgpLnRvRml4ZWQoMil9fSA8L3RkPlxuXG4gICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1wiIGNsYXNzPVwidGFibGVfbGFiZWwgaXMtZmllbGQtdGl0bGVcIj5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgIGNsYXNzPVwidGFibGVfbGFiZWxcIiBzdHlsZT1cImJvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcIj57e3N1Yl90b3RhbCgpLnRvRml4ZWQoMil9fTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cbiAgPC9kaXY+XG5cbiBcbiAgICBcblxuXG4gPC9kaXY+XG5cbiBcbjwvc2VjdGlvbj4gIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUHVyY2hhc2VPcmRlclRhYmxlIGZyb20gXCIuLi9QdXJjaGFzZU9yZGVyVGFibGUudnVlXCI7XG5pbXBvcnQgU2VsZWN0MkJveCBmcm9tIFwiLi4vU2VsZWN0MkJveC52dWVcIjtcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gXCJ2dWVqcy1kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwidmVlLXZhbGlkYXRlXCI7XG5cbmNvbnN0IGRpY3QgPSB7XG4gIGN1c3RvbToge1xuICAgIHBvbnVtYmVyOiB7XG4gICAgICByZXF1aXJlZDogXCJPcmRlciMgaXMgZW1wdHlcIlxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICgpID0+IFwiWW91ciBuYW1lIGlzIGVtcHR5XCJcbiAgICB9XG4gIH1cbn07XG5cblZhbGlkYXRvci5sb2NhbGl6ZShcImVuXCIsIGRpY3QpO1xuXG5mdW5jdGlvbiB0ZXN0KCkge1xuICBhbGVydChcImluc2lkZSB0ZXN0XCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwicHVyY2hhc2VvcmRlcnNcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9udW1iZXI6IFwiXCIsXG4gICAgICB2ZW5kb3JfaWQ6IFwiXCIsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBpc0FkZEFjdGl2ZTogZmFsc2UsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBrZXl3b3JkOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgdW5pdF9wcmljZTogXCJcIixcbiAgICAgIHF0eTogXCJcIixcbiAgICAgIHByb2R1Y3RfZ3JpZDogW10sXG4gICAgICB2ZW5kb3JzOiBbXSxcbiAgICAgIGNyZWF0ZWRfZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIHN0YXR1czogXCJDcmVhdGVkXCIsXG4gICAgICBkZWxpdmVyeV9kYXRlOiBcIlwiLFxuICAgICAgZGVsaXZlcnlfZGF0ZV9lcnJvcjogZmFsc2UsXG4gICAgICBlcnJvcl92ZW5kb3I6IGZhbHNlLFxuICAgICAgdmVuZG9yOicnXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgcHVyY2hhc2Vfb3JkZXJfdGFibGU6IFB1cmNoYXNlT3JkZXJUYWJsZSxcbiAgICBTZWxlY3QyQm94OiBTZWxlY3QyQm94LFxuICAgIERhdGVwaWNrZXJcbiAgfSxcblxuICB3YXRjaDoge30sXG5cbiAgbW91bnRlZCgpIHtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVByb2R1Y3REcm9wZG93bilcbiAgICBheGlvc1xuICAgICAgLmdldChcImFwaS9wdXJjaGFzZW9yZGVycy9nZXRuZXh0cG9udW1iZXJcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5wb251bWJlciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChcImFwaS92ZW5kb3JzL1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnZlbmRvcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmVuZG9ycyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsb3NlUHJvZHVjdERyb3Bkb3duIChlKSB7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiT3V0c2lkZSBcIitlLnRhcmdldClcbiAgICAgIGNvbnNvbGUubG9nKFwiJGVsIFwiK3RoaXMuJGVsKVxuICAgICAgICAgICAgIGlmICghdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FkZEFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjdXN0b21Gb3JtYXR0ZXIoZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWSwgaDptbTpzcyBhJyk7XG4gICAgfSxcbiAgICBjaGFuZ2VfdmVuZG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCJhcGkvdmVuZG9ycy9cIiArIHRoaXMudmVuZG9yX2lkICsgXCIvcHJvZHVjdHNcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5lcnJvcl92ZW5kb3IgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGdldCBzZWxlY3RlZCB2ZW5kb3JcbiAgICAgIFxuICAgICAgICAgdGhpcy52ZW5kb3JzLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgaWYob2JqLmlkPT10aGlzLnZlbmRvcl9pZCkge1xuICAgICAgICAgICAgIHRoaXMudmVuZG9yPSBvYmo7XG4gICAgICAgICAgIH1cbiBcbiAgICAgICAgIH0pO1xuXG5cblxuICAgIH0sXG5cbiAgICBjaGFuZ2VfZGVsaXZlcnlfZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJ5X2RhdGVfZXJyb3IgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlX25ldzogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAvL2FsZXJ0KHRoaXMucHVyY2hhc2Vfb3JkZXJfbnVtYmVyKTtcblxuICAgICAgaWYgKHRoaXMuZGVsaXZlcnlfZGF0ZSA9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuZGVsaXZlcnlfZGF0ZV9lcnJvciA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgIHByb2R1Y3RfaWRfbGlzdDogW1wicGlkMTIzNFwiLCBcInBpZDEyMzVcIl0sXG4gICAgICAgIHByb2R1Y3RzOiB0aGlzLnByb2R1Y3RfZ3JpZCxcbiAgICAgICAgcG9udW1iZXI6IHRoaXMucG9udW1iZXIsXG4gICAgICAgIHZlbmRvcl9pZDogdGhpcy52ZW5kb3JfaWQsXG4gICAgICAgIGNyZWF0ZWRfZGF0ZTogdGhpcy5jcmVhdGVkX2RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5X2RhdGU6IHRoaXMuZGVsaXZlcnlfZGF0ZSxcbiAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgdG90YWw6dGhpcy5zdWJfdG90YWwoKVxuICAgICAgfTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCJhcGkvcHVyY2hhc2VvcmRlcnMvY3JlYXRlXCIsIHBheWxvYWQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goXCIvcHVyY2hhc2VvcmRlcnMvYWxsXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd3Byb2R1Y3RzOmZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucHJvZHVjdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lcnJvcl9zZWxlY3RfcHJvZHVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3JfdmVuZG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNBZGRBY3RpdmUgPSAhdGhpcy5pc0FkZEFjdGl2ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkX3Byb2R1Y3Q6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgdGhpcy5pc0FkZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgaWYgKHJvd1tcImlkXCJdID09ICRldmVudC50YXJnZXQuaWQpIHtcbiAgICAgICAgICBsZXQgaXNQcm9kdWN0SW5UYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvYmpbXCJpZFwiXSA9PSAkZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkW2luZGV4XS5xdHkgPSB0aGlzLnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5ICsgMTtcbiAgICAgICAgICAgICAgaXNQcm9kdWN0SW5UYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaXNQcm9kdWN0SW5UYWJsZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcm93LnF0eSA9IDE7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5wdXNoKHJvdyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vYWxlcnQoJGV2ZW50LnRhcmdldC5pZClcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkZWxldGVfcm93OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCRldmVudC50YXJnZXQpO1xuICAgICAgLy9hbGVydCgkZXZlbnQudGFyZ2V0LmlkKVxuICAgICAgdGhpcy5wcm9kdWN0X2dyaWQuc3BsaWNlKCRldmVudC50YXJnZXQuaWQsIDEpO1xuICAgIH0sXG5cbiAgICBzdWJfdG90YWw6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgc3VtID0gc3VtICsgcm93LnByb2R1Y3RwcmljZS5wdXJjaGFzZV9wcmljZSAqIHJvdy5xdHk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///267\n");

/***/ })

})