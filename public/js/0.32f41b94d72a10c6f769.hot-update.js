webpackHotUpdate(0,{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__ = __webpack_require__(145);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(5);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nconst dict = {\n  custom: {\n    ponumber: {\n      required: \"Order# is empty\"\n    },\n    name: {\n      required: () => \"Your name is empty\"\n    }\n  }\n};\n\n__WEBPACK_IMPORTED_MODULE_4_vee_validate__[\"a\" /* Validator */].localize(\"en\", dict);\n\nfunction test() {\n  alert(\"inside test\");\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      ponumber: \"\",\n      vendor_id: \"\",\n      products: [],\n      isAddActive: false,\n      products: [],\n      keyword: \"\",\n      key: \"\",\n      unit_price: \"\",\n      qty: \"\",\n      product_grid: [],\n      vendors: [],\n      created_date: new Date(),\n      status: \"Created\",\n      delivery_date: \"\",\n      delivery_date_error: false,\n      error_vendor: false,\n      vendor: ''\n    };\n  },\n\n  components: {\n    purchase_order_table: __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__[\"a\" /* default */],\n    Select2Box: __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__[\"a\" /* default */],\n    Datepicker: __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__[\"a\" /* default */]\n  },\n\n  watch: {\n\n    product_grid: function () {\n      alert(\"hello\");\n    }\n\n  },\n\n  computed: {\n    isValidQty: function () {}\n  },\n\n  mounted() {\n\n    document.addEventListener('click', this.closeProductDropdown);\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/purchaseorders/getnextponumber\").then(response => {\n      this.ponumber = response.data;\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error);\n    });\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\").then(response => {\n      this.vendors = response.data.data;\n      console.log(this.vendors);\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n\n  methods: {\n\n    check_qty: function () {\n\n      this.product_grid;\n\n      this.products.forEach((row, i) => {\n\n        this.product_grid.forEach((obj, index) => {\n\n          if (obj.id == row.id) {\n\n            if (obj.qty == obj.qty) {\n\n              console.log(\"Qty Equal\" + index);\n              this.product_grid[index].qty_error = true;\n            }\n          }\n        });\n      });\n    },\n\n    closeProductDropdown(e) {\n      if (!this.$el.contains(e.target)) {\n        this.isAddActive = false;\n      }\n    },\n\n    customFormatter(date) {\n      return moment(date).format('MMMM Do YYYY, h:mm:ss a');\n    },\n    change_vendor: function () {\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\" + this.vendor_id + \"/products\").then(response => {\n        this.products = response.data.data;\n        this.error_vendor = false;\n      }).catch(error => {\n        console.log(error);\n      });\n\n      // get selected vendor\n\n      this.vendors.forEach((obj, index) => {\n        if (obj.id == this.vendor_id) {\n          this.vendor = obj;\n        }\n      });\n    },\n\n    change_delivery_date: function () {\n      this.delivery_date_error = false;\n    },\n\n    create_new: function () {\n      let self = this;\n      //alert(this.purchase_order_number);\n\n      if (this.delivery_date == \"\") {\n        this.delivery_date_error = true;\n        return;\n      }\n\n      let payload = {\n        product_id_list: [\"pid1234\", \"pid1235\"],\n        products: this.product_grid,\n        ponumber: this.ponumber,\n        vendor_id: this.vendor_id,\n        created_date: this.created_date,\n        delivery_date: this.delivery_date,\n        status: this.status,\n        total: this.sub_total()\n      };\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(\"api/purchaseorders/create\", payload).then(function (response) {\n        self.$router.push(\"/purchaseorders/all\");\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n\n    showproducts: function () {\n      if (this.products.length == 0) {\n        this.error_select_product = true;\n        this.error_vendor = true;\n      } else {\n        this.isAddActive = !this.isAddActive;\n      }\n    },\n\n    add_product: function ($event) {\n      this.isAddActive = false;\n      this.products.forEach((row, i) => {\n        if (row[\"id\"] == $event.target.id) {\n          let isProductInTable = false;\n          this.product_grid.forEach((obj, index) => {\n            if (obj[\"id\"] == $event.target.id) {\n              this.product_grid[index].qty = this.product_grid[index].qty + 1;\n              isProductInTable = true;\n            }\n          });\n\n          if (isProductInTable == false) {\n            row.qty = 1;\n            row.qty_error = false;\n            this.product_grid.push(row);\n          }\n          //alert($event.target.id)\n\n          return;\n        }\n      });\n    },\n    delete_row: function ($event) {\n      console.log($event.target);\n      //alert($event.target.id)\n      this.product_grid.splice($event.target.id, 1);\n    },\n\n    sub_total: function () {\n      let sum = 0;\n      this.product_grid.forEach((row, i) => {\n        sum = sum + row.productprice.purchase_price * row.qty;\n      });\n\n      return sum;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlPzYxMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFEQTs7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQSx3QkFKQTtBQUtBLGtCQUxBO0FBTUEsaUJBTkE7QUFPQSxhQVBBO0FBUUEsb0JBUkE7QUFTQSxhQVRBO0FBVUEsc0JBVkE7QUFXQSxpQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSx1QkFkQTtBQWVBLGdDQWZBO0FBZ0JBLHlCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxHQXRCQTs7QUF3QkE7QUFDQSxrR0FEQTtBQUVBLGdGQUZBO0FBR0E7QUFIQSxHQXhCQTs7QUE4QkE7O0FBRUE7QUFDQTtBQUNBOztBQUpBLEdBOUJBOztBQXNDQTtBQUNBLDZCQUlBO0FBTEEsR0F0Q0E7O0FBOENBOztBQUVBO0FBQ0Esa0RBQ0EsR0FEQSxDQUNBLG9DQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLEtBUkE7O0FBVUEsa0RBQ0EsR0FEQSxDQUNBLGNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLEdBcEVBOztBQXNFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFNBWEE7QUFZQSxPQWRBO0FBZ0JBLEtBdEJBOztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUJBOztBQThCQTtBQUNBO0FBQ0EsS0FoQ0E7QUFpQ0E7QUFDQSxvREFDQSxHQURBLENBQ0EsNkNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsT0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsT0FSQTs7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE9BTEE7QUFTQSxLQXZEQTs7QUF5REE7QUFDQTtBQUNBLEtBM0RBOztBQTZEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FEQTtBQUVBLG1DQUZBO0FBR0EsK0JBSEE7QUFJQSxpQ0FKQTtBQUtBLHVDQUxBO0FBTUEseUNBTkE7QUFPQSwyQkFQQTtBQVFBO0FBUkE7O0FBV0Esb0RBQ0EsSUFEQSxDQUNBLDJCQURBLEVBQ0EsT0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxPQVJBO0FBU0EsS0ExRkE7O0FBNEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLEtBbkdBOztBQXFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQW5CQTtBQW9CQSxLQTNIQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaElBOztBQWtJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQXpJQTtBQXRFQSIsImZpbGUiOiIyNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTIuN3JlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAxM3B4O1wiPlxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+IENyZWF0ZSBQdXJjaGFzZSBPcmRlciA8L2gyPlxuICAgICA8L2Rpdj5cblxuICAgICA8ZGl2PlxuICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgQGNsaWNrPVwiY3JlYXRlX25ld1wiPlNhdmU8L2E+XG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy9jcmVhdGUnXCIgPkNyZWF0ZSBOZXc8L3JvdXRlci1saW5rPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICA8L2Rpdj5cblxuPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZlwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtMTJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0yLjdyZW07IGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtwYWRkaW5nLXRvcDogMTNweDtwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcIj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5PcmRlciAjPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgIGlzLXNtYWxsXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBuYW1lPVwicG9udW1iZXJcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwb251bWJlclwiID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ3BvbnVtYmVyJykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgXG5cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjBweFwiPlxuICAgIFxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5DcmVhdGVkIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciA6Zm9ybWF0PVwiJ3l5eXktTU0tZGQnXCIgOmlucHV0LWNsYXNzPVwiJ2lucHV0IGlzLXNtYWxsJ1wiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgbmFtZT1cImNyZWF0ZWRfZGF0ZVwiIHYtbW9kZWw9XCJjcmVhdGVkX2RhdGVcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ2NyZWF0ZWRfZGF0ZScpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdCBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInN0YXR1c1wiID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JlYXRlZFwiID5DcmVhdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlbnRcIiA+U2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+RXhwZWN0ZWQgRGVsaXZlcnkgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgIEBzZWxlY3RlZD1cImNoYW5nZV9kZWxpdmVyeV9kYXRlXCIgIG5hbWU9XCJkZWxpdmVyeV9kYXRlXCIgdi1tb2RlbD1cImRlbGl2ZXJ5X2RhdGVcIiA6Zm9ybWF0PVwiJ3l5eXktTU1NLWRkJ1wiIDppbnB1dC1jbGFzcz1cIidpbnB1dCBpcy1zbWFsbCdcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZGVsaXZlcnlfZGF0ZV9lcnJvclwiPlBsZWFzZSBlbnRlciBkZWxpdmVyeSBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuXG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5WZW5kb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwidmVuZG9yX2lkXCIgQGNoYW5nZT1cImNoYW5nZV92ZW5kb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHZlbmRvciwgaW5kZXgpIGluIHZlbmRvcnNcIiA6dmFsdWU9XCJ2ZW5kb3IuaWRcIiAgPnt7dmVuZG9yLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yX3ZlbmRvclwiPlBsZWFzZSBzZWxlY3QgdmVuZG9yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD4ge3t2ZW5kb3IubmFtZX19IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmFkZGVzc319IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNpdHl9fSAgPC9sYWJlbD4gPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD57e3ZlbmRvci5zdGF0ZX19IHt7dmVuZG9yLnppcH19ICA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNvdW50cnl9fSA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAgXG5cbiAgICAgXG5cbiAgIFxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWJvcmRlcmVkXCIgaWQ9XCJncmlkX3RhYmxlXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBQcm9kdWN0IE5hbWUgPC90aD5cbiAgICAgICAgPHRoPiBVbml0IFByaWNlPC90aD5cbiAgICAgICAgPHRoPiBRdHk8L3RoPlxuICAgICAgIFxuICAgICAgICA8dGg+IEFtb3VudDwvdGg+XG4gICAgICAgIDx0aD4gPC90aD5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgIDx0ciB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdF9ncmlkXCI+XG5cbiAgICAgICAgICAgIDx0ZD57e3Byb2R1Y3QubmFtZX19IDwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnByb2R1Y3RwcmljZS5wdXJjaGFzZV9wcmljZScgLz4gPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnF0eScgQGNoYW5nZT1cImNoZWNrX3F0eVwiIC8+XG4gICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwicHJvZHVjdF9ncmlkW2luZGV4XS5xdHlfZXJyb3I9PXRydWVcIiAgY2xhc3M9XCJlcnJvclwiID4gRXJyb3I8L3NwYW4+XG4gICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3socHJvZHVjdF9ncmlkW2luZGV4XS5wcm9kdWN0cHJpY2UucHVyY2hhc2VfcHJpY2UqcHJvZHVjdF9ncmlkW2luZGV4XS5xdHkpLnRvRml4ZWQoMil9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBAY2xpY2s9XCJkZWxldGVfcm93XCIgPiA8aSA6aWQ9XCJpbmRleFwiIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT4gPC9hPiA8L3RkPlxuICAgICAgICAgICBcblxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgPHRyPlxuXG4gICAgICAgICAgICA8dGQ+IFxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIHYtYmluZDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWRkQWN0aXZlIH1cIiA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+XG5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB0eXBlPVwidGV4dFwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIiAgdi1tb2RlbDp2YWx1ZT1cImtleXdvcmRcIiBAY2xpY2s9XCJzaG93cHJvZHVjdHNcIiA+IFxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvcl92ZW5kb3JcIj5QbGVhc2Ugc2VsZWN0IHZlbmRvciBmaXJzdDwvc3Bhbj4gIFxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czowcHhcIj5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdHNcIiA6aWQ9XCIocHJvZHVjdC5pZClcIiBAY2xpY2s9XCJhZGRfcHJvZHVjdFwiID5cbiAgICAgICAgICAgICAgICAgICAge3twcm9kdWN0Lm5hbWV9fSAgW3t7cHJvZHVjdC5xdHl9fV1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIFdpdGggYSBkaXZpZGVyXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiAgdi1tb2RlbDp2YWx1ZT1cInVuaXRfcHJpY2VcIiAgPiAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiAgdi1tb2RlbDp2YWx1ZT1cInF0eVwiICA+ICA8L3RkPlxuICAgICAgICAgICAgPHRkPiAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ICAgPC90ZD5cblxuXG5cblxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICA8dHIgc3R5bGU9XCJib3JkZXItYm90dG9tLXdpZHRoOjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIiBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+U3ViIFRvdGFsIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPnt7c3ViX3RvdGFsKCkudG9GaXhlZCgyKX19IDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9XCJib3JkZXI6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XCIgY2xhc3M9XCJ0YWJsZV9sYWJlbCBpcy1maWVsZC10aXRsZVwiPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAgY2xhc3M9XCJ0YWJsZV9sYWJlbFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1wiPnt7c3ViX3RvdGFsKCkudG9GaXhlZCgyKX19PC90ZD5cblxuICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuICA8L2Rpdj5cblxuIFxuICAgIFxuXG5cbiA8L2Rpdj5cblxuIFxuPC9zZWN0aW9uPiAgXG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQdXJjaGFzZU9yZGVyVGFibGUgZnJvbSBcIi4uL1B1cmNoYXNlT3JkZXJUYWJsZS52dWVcIjtcbmltcG9ydCBTZWxlY3QyQm94IGZyb20gXCIuLi9TZWxlY3QyQm94LnZ1ZVwiO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSBcInZ1ZWpzLWRhdGVwaWNrZXJcIjtcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCJ2ZWUtdmFsaWRhdGVcIjtcblxuY29uc3QgZGljdCA9IHtcbiAgY3VzdG9tOiB7XG4gICAgcG9udW1iZXI6IHtcbiAgICAgIHJlcXVpcmVkOiBcIk9yZGVyIyBpcyBlbXB0eVwiXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogKCkgPT4gXCJZb3VyIG5hbWUgaXMgZW1wdHlcIlxuICAgIH1cbiAgfVxufTtcblxuVmFsaWRhdG9yLmxvY2FsaXplKFwiZW5cIiwgZGljdCk7XG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gIGFsZXJ0KFwiaW5zaWRlIHRlc3RcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJwdXJjaGFzZW9yZGVyc1wiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb251bWJlcjogXCJcIixcbiAgICAgIHZlbmRvcl9pZDogXCJcIixcbiAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgIGlzQWRkQWN0aXZlOiBmYWxzZSxcbiAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgIGtleXdvcmQ6IFwiXCIsXG4gICAgICBrZXk6IFwiXCIsXG4gICAgICB1bml0X3ByaWNlOiBcIlwiLFxuICAgICAgcXR5OiBcIlwiLFxuICAgICAgcHJvZHVjdF9ncmlkOiBbXSxcbiAgICAgIHZlbmRvcnM6IFtdLFxuICAgICAgY3JlYXRlZF9kYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgc3RhdHVzOiBcIkNyZWF0ZWRcIixcbiAgICAgIGRlbGl2ZXJ5X2RhdGU6IFwiXCIsXG4gICAgICBkZWxpdmVyeV9kYXRlX2Vycm9yOiBmYWxzZSxcbiAgICAgIGVycm9yX3ZlbmRvcjogZmFsc2UsXG4gICAgICB2ZW5kb3I6JydcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBwdXJjaGFzZV9vcmRlcl90YWJsZTogUHVyY2hhc2VPcmRlclRhYmxlLFxuICAgIFNlbGVjdDJCb3g6IFNlbGVjdDJCb3gsXG4gICAgRGF0ZXBpY2tlclxuICB9LFxuXG4gIHdhdGNoOiB7XG5cbiAgIHByb2R1Y3RfZ3JpZDpmdW5jdGlvbigpe1xuICAgICBhbGVydChcImhlbGxvXCIpXG4gICB9XG5cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgICAgaXNWYWxpZFF0eTpmdW5jdGlvbigpe1xuICAgICAgXG5cbiAgICAgIFxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUHJvZHVjdERyb3Bkb3duKVxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiYXBpL3B1cmNoYXNlb3JkZXJzL2dldG5leHRwb251bWJlclwiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnBvbnVtYmVyID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcblxuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiYXBpL3ZlbmRvcnMvXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMudmVuZG9ycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52ZW5kb3JzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG5cbiAgIGNoZWNrX3F0eTpmdW5jdGlvbigpe1xuXG4gICAgICAgIHRoaXMucHJvZHVjdF9ncmlkXG5cbiAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChyb3csIGkpID0+IHtcblxuICAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICBpZihvYmouaWQ9PXJvdy5pZCl7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZihvYmoucXR5PT1vYmoucXR5KXtcblxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdHkgRXF1YWxcIiArIGluZGV4KVxuICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2dyaWRbaW5kZXhdLnF0eV9lcnJvcj10cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgfSxcblxuICAgIGNsb3NlUHJvZHVjdERyb3Bkb3duIChlKSB7XG4gICAgICBpZiAoIXRoaXMuJGVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLmlzQWRkQWN0aXZlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3VzdG9tRm9ybWF0dGVyKGRhdGUpIHtcbiAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVksIGg6bW06c3MgYScpO1xuICAgIH0sXG4gICAgY2hhbmdlX3ZlbmRvcjogZnVuY3Rpb24oKSB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiYXBpL3ZlbmRvcnMvXCIgKyB0aGlzLnZlbmRvcl9pZCArIFwiL3Byb2R1Y3RzXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMuZXJyb3JfdmVuZG9yID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgdmVuZG9yXG4gICAgICBcbiAgICAgICAgIHRoaXMudmVuZG9ycy5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgIGlmKG9iai5pZD09dGhpcy52ZW5kb3JfaWQpIHtcbiAgICAgICAgICAgICB0aGlzLnZlbmRvcj0gb2JqO1xuICAgICAgICAgICB9XG4gXG4gICAgICAgICB9KTtcblxuXG5cbiAgICB9LFxuXG4gICAgY2hhbmdlX2RlbGl2ZXJ5X2RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kZWxpdmVyeV9kYXRlX2Vycm9yID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGNyZWF0ZV9uZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgLy9hbGVydCh0aGlzLnB1cmNoYXNlX29yZGVyX251bWJlcik7XG5cbiAgICAgIGlmICh0aGlzLmRlbGl2ZXJ5X2RhdGUgPT0gXCJcIikge1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5X2RhdGVfZXJyb3IgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICBwcm9kdWN0X2lkX2xpc3Q6IFtcInBpZDEyMzRcIiwgXCJwaWQxMjM1XCJdLFxuICAgICAgICBwcm9kdWN0czogdGhpcy5wcm9kdWN0X2dyaWQsXG4gICAgICAgIHBvbnVtYmVyOiB0aGlzLnBvbnVtYmVyLFxuICAgICAgICB2ZW5kb3JfaWQ6IHRoaXMudmVuZG9yX2lkLFxuICAgICAgICBjcmVhdGVkX2RhdGU6IHRoaXMuY3JlYXRlZF9kYXRlLFxuICAgICAgICBkZWxpdmVyeV9kYXRlOiB0aGlzLmRlbGl2ZXJ5X2RhdGUsXG4gICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgIHRvdGFsOnRoaXMuc3ViX3RvdGFsKClcbiAgICAgIH07XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiYXBpL3B1cmNoYXNlb3JkZXJzL2NyZWF0ZVwiLCBwYXlsb2FkKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKFwiL3B1cmNoYXNlb3JkZXJzL2FsbFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dwcm9kdWN0czpmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMuZXJyb3Jfc2VsZWN0X3Byb2R1Y3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yX3ZlbmRvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQWRkQWN0aXZlID0gIXRoaXMuaXNBZGRBY3RpdmU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFkZF9wcm9kdWN0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIHRoaXMuaXNBZGRBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIGlmIChyb3dbXCJpZFwiXSA9PSAkZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgbGV0IGlzUHJvZHVjdEluVGFibGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqW1wiaWRcIl0gPT0gJGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5ID0gdGhpcy5wcm9kdWN0X2dyaWRbaW5kZXhdLnF0eSArIDE7XG4gICAgICAgICAgICAgIGlzUHJvZHVjdEluVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlzUHJvZHVjdEluVGFibGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJvdy5xdHkgPSAxO1xuICAgICAgICAgICAgcm93LnF0eV9lcnJvcj1mYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkLnB1c2gocm93KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9hbGVydCgkZXZlbnQudGFyZ2V0LmlkKVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZV9yb3c6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJGV2ZW50LnRhcmdldCk7XG4gICAgICAvL2FsZXJ0KCRldmVudC50YXJnZXQuaWQpXG4gICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5zcGxpY2UoJGV2ZW50LnRhcmdldC5pZCwgMSk7XG4gICAgfSxcblxuICAgIHN1Yl90b3RhbDogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIHRoaXMucHJvZHVjdF9ncmlkLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICBzdW0gPSBzdW0gKyByb3cucHJvZHVjdHByaWNlLnB1cmNoYXNlX3ByaWNlICogcm93LnF0eTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3VtO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHVyY2hhc2VvcmRlcnMvQ3JlYXRlUHVyY2hhc2VPcmRlci52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///267\n");

/***/ })

})