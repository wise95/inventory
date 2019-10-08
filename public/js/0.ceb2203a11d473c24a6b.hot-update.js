webpackHotUpdate(0,{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__ = __webpack_require__(145);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(5);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nconst dict = {\n  custom: {\n    ponumber: {\n      required: \"Order# is empty\"\n    },\n    name: {\n      required: () => \"Your name is empty\"\n    }\n  }\n};\n\n__WEBPACK_IMPORTED_MODULE_4_vee_validate__[\"a\" /* Validator */].localize(\"en\", dict);\n\nfunction test() {\n  alert(\"inside test\");\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      ponumber: \"\",\n      vendor_id: \"\",\n      products: [],\n      isAddActive: false,\n      products: [],\n      keyword: \"\",\n      key: \"\",\n      unit_price: \"\",\n      qty: \"\",\n      product_grid: [],\n      vendors: [],\n      created_date: new Date(),\n      status: \"Created\",\n      delivery_date: \"\",\n      delivery_date_error: false,\n      error_vendor: false,\n      vendor: ''\n    };\n  },\n\n  components: {\n    purchase_order_table: __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__[\"a\" /* default */],\n    Select2Box: __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__[\"a\" /* default */],\n    Datepicker: __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__[\"a\" /* default */]\n  },\n\n  watch: {},\n\n  computed: {\n    isValidQty: function () {\n\n      this.products.forEach((row, i) => {\n\n        this.product_grid.forEach((obj, index) => {\n\n          if (obj.qty == row.qty) {\n            console.log(\"found\");\n          }\n        });\n      });\n    }\n  },\n\n  mounted() {\n\n    document.addEventListener('click', this.closeProductDropdown);\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/purchaseorders/getnextponumber\").then(response => {\n      this.ponumber = response.data;\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error);\n    });\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\").then(response => {\n      this.vendors = response.data.data;\n      console.log(this.vendors);\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n\n  methods: {\n\n    closeProductDropdown(e) {\n      if (!this.$el.contains(e.target)) {\n        this.isAddActive = false;\n      }\n    },\n\n    customFormatter(date) {\n      return moment(date).format('MMMM Do YYYY, h:mm:ss a');\n    },\n    change_vendor: function () {\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\" + this.vendor_id + \"/products\").then(response => {\n        this.products = response.data.data;\n        this.error_vendor = false;\n      }).catch(error => {\n        console.log(error);\n      });\n\n      // get selected vendor\n\n      this.vendors.forEach((obj, index) => {\n        if (obj.id == this.vendor_id) {\n          this.vendor = obj;\n        }\n      });\n    },\n\n    change_delivery_date: function () {\n      this.delivery_date_error = false;\n    },\n\n    create_new: function () {\n      let self = this;\n      //alert(this.purchase_order_number);\n\n      if (this.delivery_date == \"\") {\n        this.delivery_date_error = true;\n        return;\n      }\n\n      let payload = {\n        product_id_list: [\"pid1234\", \"pid1235\"],\n        products: this.product_grid,\n        ponumber: this.ponumber,\n        vendor_id: this.vendor_id,\n        created_date: this.created_date,\n        delivery_date: this.delivery_date,\n        status: this.status,\n        total: this.sub_total()\n      };\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(\"api/purchaseorders/create\", payload).then(function (response) {\n        self.$router.push(\"/purchaseorders/all\");\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n\n    showproducts: function () {\n      if (this.products.length == 0) {\n        this.error_select_product = true;\n        this.error_vendor = true;\n      } else {\n        this.isAddActive = !this.isAddActive;\n      }\n    },\n\n    add_product: function ($event) {\n      this.isAddActive = false;\n      this.products.forEach((row, i) => {\n        if (row[\"id\"] == $event.target.id) {\n          let isProductInTable = false;\n          this.product_grid.forEach((obj, index) => {\n            if (obj[\"id\"] == $event.target.id) {\n              this.product_grid[index].qty = this.product_grid[index].qty + 1;\n              isProductInTable = true;\n            }\n          });\n\n          if (isProductInTable == false) {\n            row.qty = 1;\n            row.qty_error = false;\n            this.product_grid.push(row);\n          }\n          //alert($event.target.id)\n\n          return;\n        }\n      });\n    },\n    delete_row: function ($event) {\n      console.log($event.target);\n      //alert($event.target.id)\n      this.product_grid.splice($event.target.id, 1);\n    },\n\n    sub_total: function () {\n      let sum = 0;\n      this.product_grid.forEach((row, i) => {\n        sum = sum + row.productprice.purchase_price * row.qty;\n      });\n\n      return sum;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlPzYxMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFEQTs7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQSx3QkFKQTtBQUtBLGtCQUxBO0FBTUEsaUJBTkE7QUFPQSxhQVBBO0FBUUEsb0JBUkE7QUFTQSxhQVRBO0FBVUEsc0JBVkE7QUFXQSxpQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSx1QkFkQTtBQWVBLGdDQWZBO0FBZ0JBLHlCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxHQXRCQTs7QUF3QkE7QUFDQSxrR0FEQTtBQUVBLGdGQUZBO0FBR0E7QUFIQSxHQXhCQTs7QUE4QkEsV0E5QkE7O0FBZ0NBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUEsU0FOQTtBQU9BLE9BVEE7QUFXQTtBQWRBLEdBaENBOztBQWlEQTs7QUFFQTtBQUNBLGtEQUNBLEdBREEsQ0FDQSxvQ0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxLQVJBOztBQVVBLGtEQUNBLEdBREEsQ0FDQSxjQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQSxHQXZFQTs7QUF5RUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJBOztBQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQSxvREFDQSxHQURBLENBQ0EsNkNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsT0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsT0FSQTs7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE9BTEE7QUFTQSxLQW5DQTs7QUFxQ0E7QUFDQTtBQUNBLEtBdkNBOztBQXlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FEQTtBQUVBLG1DQUZBO0FBR0EsK0JBSEE7QUFJQSxpQ0FKQTtBQUtBLHVDQUxBO0FBTUEseUNBTkE7QUFPQSwyQkFQQTtBQVFBO0FBUkE7O0FBV0Esb0RBQ0EsSUFEQSxDQUNBLDJCQURBLEVBQ0EsT0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxPQVJBO0FBU0EsS0F0RUE7O0FBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLEtBL0VBOztBQWlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQW5CQTtBQW9CQSxLQXZHQTtBQXdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUdBOztBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQXJIQTtBQXpFQSIsImZpbGUiOiIyNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTIuN3JlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAxM3B4O1wiPlxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+IENyZWF0ZSBQdXJjaGFzZSBPcmRlciA8L2gyPlxuICAgICA8L2Rpdj5cblxuICAgICA8ZGl2PlxuICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgQGNsaWNrPVwiY3JlYXRlX25ld1wiPlNhdmU8L2E+XG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy9jcmVhdGUnXCIgPkNyZWF0ZSBOZXc8L3JvdXRlci1saW5rPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICA8L2Rpdj5cblxuPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZlwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtMTJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0yLjdyZW07IGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtwYWRkaW5nLXRvcDogMTNweDtwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcIj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5PcmRlciAjPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgIGlzLXNtYWxsXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBuYW1lPVwicG9udW1iZXJcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwb251bWJlclwiID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ3BvbnVtYmVyJykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgXG5cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjBweFwiPlxuICAgIFxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5DcmVhdGVkIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciA6Zm9ybWF0PVwiJ3l5eXktTU0tZGQnXCIgOmlucHV0LWNsYXNzPVwiJ2lucHV0IGlzLXNtYWxsJ1wiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgbmFtZT1cImNyZWF0ZWRfZGF0ZVwiIHYtbW9kZWw9XCJjcmVhdGVkX2RhdGVcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ2NyZWF0ZWRfZGF0ZScpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdCBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInN0YXR1c1wiID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JlYXRlZFwiID5DcmVhdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlbnRcIiA+U2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+RXhwZWN0ZWQgRGVsaXZlcnkgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgIEBzZWxlY3RlZD1cImNoYW5nZV9kZWxpdmVyeV9kYXRlXCIgIG5hbWU9XCJkZWxpdmVyeV9kYXRlXCIgdi1tb2RlbD1cImRlbGl2ZXJ5X2RhdGVcIiA6Zm9ybWF0PVwiJ3l5eXktTU1NLWRkJ1wiIDppbnB1dC1jbGFzcz1cIidpbnB1dCBpcy1zbWFsbCdcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZGVsaXZlcnlfZGF0ZV9lcnJvclwiPlBsZWFzZSBlbnRlciBkZWxpdmVyeSBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuXG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5WZW5kb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwidmVuZG9yX2lkXCIgQGNoYW5nZT1cImNoYW5nZV92ZW5kb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHZlbmRvciwgaW5kZXgpIGluIHZlbmRvcnNcIiA6dmFsdWU9XCJ2ZW5kb3IuaWRcIiAgPnt7dmVuZG9yLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yX3ZlbmRvclwiPlBsZWFzZSBzZWxlY3QgdmVuZG9yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD4ge3t2ZW5kb3IubmFtZX19IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmFkZGVzc319IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNpdHl9fSAgPC9sYWJlbD4gPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD57e3ZlbmRvci5zdGF0ZX19IHt7dmVuZG9yLnppcH19ICA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNvdW50cnl9fSA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAgXG5cbiAgICAgXG5cbiAgIFxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWJvcmRlcmVkXCIgaWQ9XCJncmlkX3RhYmxlXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBQcm9kdWN0IE5hbWUgPC90aD5cbiAgICAgICAgPHRoPiBVbml0IFByaWNlPC90aD5cbiAgICAgICAgPHRoPiBRdHk8L3RoPlxuICAgICAgIFxuICAgICAgICA8dGg+IEFtb3VudDwvdGg+XG4gICAgICAgIDx0aD4gPC90aD5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgIDx0ciB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdF9ncmlkXCI+XG5cbiAgICAgICAgICAgIDx0ZD57e3Byb2R1Y3QubmFtZX19IDwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnByb2R1Y3RwcmljZS5wdXJjaGFzZV9wcmljZScgLz4gPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnF0eScgLz5cbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiA+e3tpc1ZhbGlkUXR5fX08L3NwYW4+XG4gICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4ge3socHJvZHVjdF9ncmlkW2luZGV4XS5wcm9kdWN0cHJpY2UucHVyY2hhc2VfcHJpY2UqcHJvZHVjdF9ncmlkW2luZGV4XS5xdHkpLnRvRml4ZWQoMil9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+IDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBAY2xpY2s9XCJkZWxldGVfcm93XCIgPiA8aSA6aWQ9XCJpbmRleFwiIGNsYXNzPVwiZmFyIGZhLXRyYXNoLWFsdFwiPjwvaT4gPC9hPiA8L3RkPlxuICAgICAgICAgICBcblxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgPHRyPlxuXG4gICAgICAgICAgICA8dGQ+IFxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiIHN0eWxlPVwid2lkdGg6MTAwJVwiIHYtYmluZDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWRkQWN0aXZlIH1cIiA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+XG5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB0eXBlPVwidGV4dFwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIiAgdi1tb2RlbDp2YWx1ZT1cImtleXdvcmRcIiBAY2xpY2s9XCJzaG93cHJvZHVjdHNcIiA+IFxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJlcnJvcl92ZW5kb3JcIj5QbGVhc2Ugc2VsZWN0IHZlbmRvciBmaXJzdDwvc3Bhbj4gIFxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgaWQ9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czowcHhcIj5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdHNcIiA6aWQ9XCIocHJvZHVjdC5pZClcIiBAY2xpY2s9XCJhZGRfcHJvZHVjdFwiID5cbiAgICAgICAgICAgICAgICAgICAge3twcm9kdWN0Lm5hbWV9fSAgW3t7cHJvZHVjdC5xdHl9fV1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIFdpdGggYSBkaXZpZGVyXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiAgdi1tb2RlbDp2YWx1ZT1cInVuaXRfcHJpY2VcIiAgPiAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiAgdi1tb2RlbDp2YWx1ZT1cInF0eVwiICA+ICA8L3RkPlxuICAgICAgICAgICAgPHRkPiAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ICAgPC90ZD5cblxuXG5cblxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICA8dHIgc3R5bGU9XCJib3JkZXItYm90dG9tLXdpZHRoOjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIiBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+U3ViIFRvdGFsIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPnt7c3ViX3RvdGFsKCkudG9GaXhlZCgyKX19IDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9XCJib3JkZXI6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XCIgY2xhc3M9XCJ0YWJsZV9sYWJlbCBpcy1maWVsZC10aXRsZVwiPlRvdGFsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAgY2xhc3M9XCJ0YWJsZV9sYWJlbFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1wiPnt7c3ViX3RvdGFsKCkudG9GaXhlZCgyKX19PC90ZD5cblxuICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICA8L3Rib2R5PlxuXG4gICAgICA8L3RhYmxlPlxuICA8L2Rpdj5cblxuIFxuICAgIFxuXG5cbiA8L2Rpdj5cblxuIFxuPC9zZWN0aW9uPiAgXG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQdXJjaGFzZU9yZGVyVGFibGUgZnJvbSBcIi4uL1B1cmNoYXNlT3JkZXJUYWJsZS52dWVcIjtcbmltcG9ydCBTZWxlY3QyQm94IGZyb20gXCIuLi9TZWxlY3QyQm94LnZ1ZVwiO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSBcInZ1ZWpzLWRhdGVwaWNrZXJcIjtcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCJ2ZWUtdmFsaWRhdGVcIjtcblxuY29uc3QgZGljdCA9IHtcbiAgY3VzdG9tOiB7XG4gICAgcG9udW1iZXI6IHtcbiAgICAgIHJlcXVpcmVkOiBcIk9yZGVyIyBpcyBlbXB0eVwiXG4gICAgfSxcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogKCkgPT4gXCJZb3VyIG5hbWUgaXMgZW1wdHlcIlxuICAgIH1cbiAgfVxufTtcblxuVmFsaWRhdG9yLmxvY2FsaXplKFwiZW5cIiwgZGljdCk7XG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gIGFsZXJ0KFwiaW5zaWRlIHRlc3RcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJwdXJjaGFzZW9yZGVyc1wiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb251bWJlcjogXCJcIixcbiAgICAgIHZlbmRvcl9pZDogXCJcIixcbiAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgIGlzQWRkQWN0aXZlOiBmYWxzZSxcbiAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgIGtleXdvcmQ6IFwiXCIsXG4gICAgICBrZXk6IFwiXCIsXG4gICAgICB1bml0X3ByaWNlOiBcIlwiLFxuICAgICAgcXR5OiBcIlwiLFxuICAgICAgcHJvZHVjdF9ncmlkOiBbXSxcbiAgICAgIHZlbmRvcnM6IFtdLFxuICAgICAgY3JlYXRlZF9kYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgc3RhdHVzOiBcIkNyZWF0ZWRcIixcbiAgICAgIGRlbGl2ZXJ5X2RhdGU6IFwiXCIsXG4gICAgICBkZWxpdmVyeV9kYXRlX2Vycm9yOiBmYWxzZSxcbiAgICAgIGVycm9yX3ZlbmRvcjogZmFsc2UsXG4gICAgICB2ZW5kb3I6JydcbiAgICB9O1xuICB9LFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBwdXJjaGFzZV9vcmRlcl90YWJsZTogUHVyY2hhc2VPcmRlclRhYmxlLFxuICAgIFNlbGVjdDJCb3g6IFNlbGVjdDJCb3gsXG4gICAgRGF0ZXBpY2tlclxuICB9LFxuXG4gIHdhdGNoOiB7fSxcblxuICBjb21wdXRlZDoge1xuICAgICAgaXNWYWxpZFF0eTpmdW5jdGlvbigpe1xuICAgICAgXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG5cbiAgICAgICAgICAgdGhpcy5wcm9kdWN0X2dyaWQuZm9yRWFjaCgob2JqLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgaWYob2JqLnF0eT09cm93LnF0eSl7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kXCIpXG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZVByb2R1Y3REcm9wZG93bilcbiAgICBheGlvc1xuICAgICAgLmdldChcImFwaS9wdXJjaGFzZW9yZGVycy9nZXRuZXh0cG9udW1iZXJcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5wb251bWJlciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChcImFwaS92ZW5kb3JzL1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnZlbmRvcnMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmVuZG9ycyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuXG4gIFxuXG4gICAgY2xvc2VQcm9kdWN0RHJvcGRvd24gKGUpIHtcbiAgICAgIGlmICghdGhpcy4kZWwuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuaXNBZGRBY3RpdmUgPSBmYWxzZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBjdXN0b21Gb3JtYXR0ZXIoZGF0ZSkge1xuICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoJ01NTU0gRG8gWVlZWSwgaDptbTpzcyBhJyk7XG4gICAgfSxcbiAgICBjaGFuZ2VfdmVuZG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCJhcGkvdmVuZG9ycy9cIiArIHRoaXMudmVuZG9yX2lkICsgXCIvcHJvZHVjdHNcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5lcnJvcl92ZW5kb3IgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGdldCBzZWxlY3RlZCB2ZW5kb3JcbiAgICAgIFxuICAgICAgICAgdGhpcy52ZW5kb3JzLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgaWYob2JqLmlkPT10aGlzLnZlbmRvcl9pZCkge1xuICAgICAgICAgICAgIHRoaXMudmVuZG9yPSBvYmo7XG4gICAgICAgICAgIH1cbiBcbiAgICAgICAgIH0pO1xuXG5cblxuICAgIH0sXG5cbiAgICBjaGFuZ2VfZGVsaXZlcnlfZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRlbGl2ZXJ5X2RhdGVfZXJyb3IgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgY3JlYXRlX25ldzogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAvL2FsZXJ0KHRoaXMucHVyY2hhc2Vfb3JkZXJfbnVtYmVyKTtcblxuICAgICAgaWYgKHRoaXMuZGVsaXZlcnlfZGF0ZSA9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuZGVsaXZlcnlfZGF0ZV9lcnJvciA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgIHByb2R1Y3RfaWRfbGlzdDogW1wicGlkMTIzNFwiLCBcInBpZDEyMzVcIl0sXG4gICAgICAgIHByb2R1Y3RzOiB0aGlzLnByb2R1Y3RfZ3JpZCxcbiAgICAgICAgcG9udW1iZXI6IHRoaXMucG9udW1iZXIsXG4gICAgICAgIHZlbmRvcl9pZDogdGhpcy52ZW5kb3JfaWQsXG4gICAgICAgIGNyZWF0ZWRfZGF0ZTogdGhpcy5jcmVhdGVkX2RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5X2RhdGU6IHRoaXMuZGVsaXZlcnlfZGF0ZSxcbiAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgdG90YWw6dGhpcy5zdWJfdG90YWwoKVxuICAgICAgfTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCJhcGkvcHVyY2hhc2VvcmRlcnMvY3JlYXRlXCIsIHBheWxvYWQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgc2VsZi4kcm91dGVyLnB1c2goXCIvcHVyY2hhc2VvcmRlcnMvYWxsXCIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd3Byb2R1Y3RzOmZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucHJvZHVjdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lcnJvcl9zZWxlY3RfcHJvZHVjdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3JfdmVuZG9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNBZGRBY3RpdmUgPSAhdGhpcy5pc0FkZEFjdGl2ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkX3Byb2R1Y3Q6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgdGhpcy5pc0FkZEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgaWYgKHJvd1tcImlkXCJdID09ICRldmVudC50YXJnZXQuaWQpIHtcbiAgICAgICAgICBsZXQgaXNQcm9kdWN0SW5UYWJsZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvYmpbXCJpZFwiXSA9PSAkZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkW2luZGV4XS5xdHkgPSB0aGlzLnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5ICsgMTtcbiAgICAgICAgICAgICAgaXNQcm9kdWN0SW5UYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoaXNQcm9kdWN0SW5UYWJsZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcm93LnF0eSA9IDE7XG4gICAgICAgICAgICByb3cucXR5X2Vycm9yPWZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2dyaWQucHVzaChyb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL2FsZXJ0KCRldmVudC50YXJnZXQuaWQpXG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlX3JvdzogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygkZXZlbnQudGFyZ2V0KTtcbiAgICAgIC8vYWxlcnQoJGV2ZW50LnRhcmdldC5pZClcbiAgICAgIHRoaXMucHJvZHVjdF9ncmlkLnNwbGljZSgkZXZlbnQudGFyZ2V0LmlkLCAxKTtcbiAgICB9LFxuXG4gICAgc3ViX3RvdGFsOiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgdGhpcy5wcm9kdWN0X2dyaWQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIHN1bSA9IHN1bSArIHJvdy5wcm9kdWN0cHJpY2UucHVyY2hhc2VfcHJpY2UgKiByb3cucXR5O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdW07XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wdXJjaGFzZW9yZGVycy9DcmVhdGVQdXJjaGFzZU9yZGVyLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///267\n");

/***/ })

})