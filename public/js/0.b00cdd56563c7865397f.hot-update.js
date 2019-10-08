webpackHotUpdate(0,{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__ = __webpack_require__(145);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(5);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nconst dict = {\n  custom: {\n    ponumber: {\n      required: \"Order# is empty\"\n    },\n    name: {\n      required: () => \"Your name is empty\"\n    }\n  }\n};\n\n__WEBPACK_IMPORTED_MODULE_4_vee_validate__[\"a\" /* Validator */].localize(\"en\", dict);\n\nfunction test() {\n  alert(\"inside test\");\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      ponumber: \"\",\n      vendor_id: \"\",\n      products: [],\n      isAddActive: false,\n      products: [],\n      keyword: \"\",\n      key: \"\",\n      unit_price: \"\",\n      qty: \"\",\n      product_grid: [],\n      vendors: [],\n      created_date: new Date(),\n      status: \"Created\",\n      delivery_date: \"\",\n      delivery_date_error: false,\n      error_vendor: false,\n      vendor: ''\n    };\n  },\n\n  components: {\n    purchase_order_table: __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__[\"a\" /* default */],\n    Select2Box: __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__[\"a\" /* default */],\n    Datepicker: __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__[\"a\" /* default */]\n  },\n\n  watch: {},\n\n  computed: {\n    isValidQty: function () {\n\n      return true;\n    }\n  },\n\n  mounted() {\n\n    document.addEventListener('click', this.closeProductDropdown);\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/purchaseorders/getnextponumber\").then(response => {\n      this.ponumber = response.data;\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error);\n    });\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\").then(response => {\n      this.vendors = response.data.data;\n      console.log(this.vendors);\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n\n  methods: {\n\n    closeProductDropdown(e) {\n      if (!this.$el.contains(e.target)) {\n        this.isAddActive = false;\n      }\n    },\n\n    customFormatter(date) {\n      return moment(date).format('MMMM Do YYYY, h:mm:ss a');\n    },\n    change_vendor: function () {\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\" + this.vendor_id + \"/products\").then(response => {\n        this.products = response.data.data;\n        this.error_vendor = false;\n      }).catch(error => {\n        console.log(error);\n      });\n\n      // get selected vendor\n\n      this.vendors.forEach((obj, index) => {\n        if (obj.id == this.vendor_id) {\n          this.vendor = obj;\n        }\n      });\n    },\n\n    change_delivery_date: function () {\n      this.delivery_date_error = false;\n    },\n\n    create_new: function () {\n      let self = this;\n      //alert(this.purchase_order_number);\n\n      if (this.delivery_date == \"\") {\n        this.delivery_date_error = true;\n        return;\n      }\n\n      let payload = {\n        product_id_list: [\"pid1234\", \"pid1235\"],\n        products: this.product_grid,\n        ponumber: this.ponumber,\n        vendor_id: this.vendor_id,\n        created_date: this.created_date,\n        delivery_date: this.delivery_date,\n        status: this.status,\n        total: this.sub_total()\n      };\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(\"api/purchaseorders/create\", payload).then(function (response) {\n        self.$router.push(\"/purchaseorders/all\");\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n\n    showproducts: function () {\n      if (this.products.length == 0) {\n        this.error_select_product = true;\n        this.error_vendor = true;\n      } else {\n        this.isAddActive = !this.isAddActive;\n      }\n    },\n\n    add_product: function ($event) {\n      this.isAddActive = false;\n      this.products.forEach((row, i) => {\n        if (row[\"id\"] == $event.target.id) {\n          let isProductInTable = false;\n          this.product_grid.forEach((obj, index) => {\n            if (obj[\"id\"] == $event.target.id) {\n              this.product_grid[index].qty = this.product_grid[index].qty + 1;\n              isProductInTable = true;\n            }\n          });\n\n          if (isProductInTable == false) {\n            row.qty = 1;\n            row.qty;\n            this.product_grid.push(row);\n          }\n          //alert($event.target.id)\n\n          return;\n        }\n      });\n    },\n    delete_row: function ($event) {\n      console.log($event.target);\n      //alert($event.target.id)\n      this.product_grid.splice($event.target.id, 1);\n    },\n\n    sub_total: function () {\n      let sum = 0;\n      this.product_grid.forEach((row, i) => {\n        sum = sum + row.productprice.purchase_price * row.qty;\n      });\n\n      return sum;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlPzYxMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFEQTs7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQSx3QkFKQTtBQUtBLGtCQUxBO0FBTUEsaUJBTkE7QUFPQSxhQVBBO0FBUUEsb0JBUkE7QUFTQSxhQVRBO0FBVUEsc0JBVkE7QUFXQSxpQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSx1QkFkQTtBQWVBLGdDQWZBO0FBZ0JBLHlCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxHQXRCQTs7QUF3QkE7QUFDQSxrR0FEQTtBQUVBLGdGQUZBO0FBR0E7QUFIQSxHQXhCQTs7QUE4QkEsV0E5QkE7O0FBZ0NBO0FBQ0E7O0FBR0E7QUFDQTtBQUxBLEdBaENBOztBQXdDQTs7QUFFQTtBQUNBLGtEQUNBLEdBREEsQ0FDQSxvQ0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxLQVJBOztBQVVBLGtEQUNBLEdBREEsQ0FDQSxjQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLEtBUkE7QUFTQSxHQTlEQTs7QUFnRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJBOztBQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQSxvREFDQSxHQURBLENBQ0EsNkNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsT0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsT0FSQTs7QUFVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE9BTEE7QUFTQSxLQW5DQTs7QUFxQ0E7QUFDQTtBQUNBLEtBdkNBOztBQXlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FEQTtBQUVBLG1DQUZBO0FBR0EsK0JBSEE7QUFJQSxpQ0FKQTtBQUtBLHVDQUxBO0FBTUEseUNBTkE7QUFPQSwyQkFQQTtBQVFBO0FBUkE7O0FBV0Esb0RBQ0EsSUFEQSxDQUNBLDJCQURBLEVBQ0EsT0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxPQVJBO0FBU0EsS0F0RUE7O0FBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLEtBL0VBOztBQWlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBTEE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQW5CQTtBQW9CQSxLQXZHQTtBQXdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUdBOztBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQXJIQTtBQWhFQSIsImZpbGUiOiIyNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTIuN3JlbTtwYWRkaW5nLXRvcDogMTNweDttYXJnaW4tYm90dG9tOiAxM3B4O1wiPlxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxuXG4gICAgIDxkaXYgY2xhc3M9XCJ0b29sX3N0cmlwXCI+XG4gICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZSBpcy02XCI+IENyZWF0ZSBQdXJjaGFzZSBPcmRlciA8L2gyPlxuICAgICA8L2Rpdj5cblxuICAgICA8ZGl2PlxuICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgQGNsaWNrPVwiY3JlYXRlX25ld1wiPlNhdmU8L2E+XG4gICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLXNtYWxsXCIgOnRvPVwiJy9wdXJjaGFzZW9yZGVycy9jcmVhdGUnXCIgPkNyZWF0ZSBOZXc8L3JvdXRlci1saW5rPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICA8L2Rpdj5cblxuPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2ZmZmZmZlwiPlxuIFxuXG4gIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtMTJcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0yLjdyZW07IGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtwYWRkaW5nLXRvcDogMTNweDtwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcIj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5PcmRlciAjPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgIGlzLXNtYWxsXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBuYW1lPVwicG9udW1iZXJcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJwb251bWJlclwiID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ3BvbnVtYmVyJykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgXG5cblxuICAgIDwvZGl2PlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjBweFwiPlxuICAgIFxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5DcmVhdGVkIERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciA6Zm9ybWF0PVwiJ3l5eXktTU0tZGQnXCIgOmlucHV0LWNsYXNzPVwiJ2lucHV0IGlzLXNtYWxsJ1wiIHYtdmFsaWRhdGU9XCIncmVxdWlyZWQnXCIgbmFtZT1cImNyZWF0ZWRfZGF0ZVwiIHYtbW9kZWw9XCJjcmVhdGVkX2RhdGVcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvcnMuZmlyc3QoJ2NyZWF0ZWRfZGF0ZScpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdCBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInN0YXR1c1wiID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JlYXRlZFwiID5DcmVhdGVkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlbnRcIiA+U2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+RXhwZWN0ZWQgRGVsaXZlcnkgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgIEBzZWxlY3RlZD1cImNoYW5nZV9kZWxpdmVyeV9kYXRlXCIgIG5hbWU9XCJkZWxpdmVyeV9kYXRlXCIgdi1tb2RlbD1cImRlbGl2ZXJ5X2RhdGVcIiA6Zm9ybWF0PVwiJ3l5eXktTU1NLWRkJ1wiIDppbnB1dC1jbGFzcz1cIidpbnB1dCBpcy1zbWFsbCdcIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZGVsaXZlcnlfZGF0ZV9lcnJvclwiPlBsZWFzZSBlbnRlciBkZWxpdmVyeSBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuXG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5WZW5kb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwidmVuZG9yX2lkXCIgQGNoYW5nZT1cImNoYW5nZV92ZW5kb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHZlbmRvciwgaW5kZXgpIGluIHZlbmRvcnNcIiA6dmFsdWU9XCJ2ZW5kb3IuaWRcIiAgPnt7dmVuZG9yLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yX3ZlbmRvclwiPlBsZWFzZSBzZWxlY3QgdmVuZG9yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD4ge3t2ZW5kb3IubmFtZX19IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmFkZGVzc319IDwvbGFiZWw+IDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNpdHl9fSAgPC9sYWJlbD4gPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD57e3ZlbmRvci5zdGF0ZX19IHt7dmVuZG9yLnppcH19ICA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PiA8bGFiZWw+IHt7dmVuZG9yLmNvdW50cnl9fSA8L2xhYmVsPiA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICAgXG5cbiAgICAgXG5cbiAgIFxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIGlzLWJvcmRlcmVkXCIgaWQ9XCJncmlkX3RhYmxlXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBQcm9kdWN0IE5hbWUgPC90aD5cbiAgICAgICAgPHRoPiBVbml0IFByaWNlPC90aD5cbiAgICAgICAgPHRoPiBRdHk8L3RoPlxuICAgICAgIFxuICAgICAgICA8dGg+IEFtb3VudDwvdGg+XG4gICAgICAgIDx0aD4gPC90aD5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgIDx0ciB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcHJvZHVjdF9ncmlkXCI+XG5cbiAgICAgICAgICAgIDx0ZD57e3Byb2R1Y3QubmFtZX19IDwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnByb2R1Y3RwcmljZS5wdXJjaGFzZV9wcmljZScgLz4gPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB2LW1vZGVsPSdwcm9kdWN0X2dyaWRbaW5kZXhdLnF0eScgLz5cbiAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJwcm9kdWN0X2dyaWRbaW5kZXhdLnF0eT5wcm9kdWN0LnF0eVwiIGNsYXNzPVwiZXJyb3JcIiA+UXVhbnRpdHkgb24gaGFuZCBpcyAyMDwvc3Bhbj5cbiAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPiB7eyhwcm9kdWN0X2dyaWRbaW5kZXhdLnByb2R1Y3RwcmljZS5wdXJjaGFzZV9wcmljZSpwcm9kdWN0X2dyaWRbaW5kZXhdLnF0eSkudG9GaXhlZCgyKX19PC90ZD5cbiAgICAgICAgICAgIDx0ZD4gPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIEBjbGljaz1cImRlbGV0ZV9yb3dcIiA+IDxpIDppZD1cImluZGV4XCIgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPiA8L2E+IDwvdGQ+XG4gICAgICAgICAgIFxuXG4gICAgICAgICAgPC90cj5cblxuICAgICAgICAgICA8dHI+XG5cbiAgICAgICAgICAgIDx0ZD4gXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgdi1iaW5kOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogaXNBZGRBY3RpdmUgfVwiID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIiBzdHlsZT1cIndpZHRoOjEwMCVcIj5cblxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiICB2LW1vZGVsOnZhbHVlPVwia2V5d29yZFwiIEBjbGljaz1cInNob3dwcm9kdWN0c1wiID4gXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImVycm9yXCIgdi1pZj1cImVycm9yX3ZlbmRvclwiPlBsZWFzZSBzZWxlY3QgdmVuZG9yIGZpcnN0PC9zcGFuPiAgXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBpZD1cImRyb3Bkb3duLW1lbnVcIiByb2xlPVwibWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOjBweFwiPlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHYtZm9yPVwiKHByb2R1Y3QsIGluZGV4KSBpbiBwcm9kdWN0c1wiIDppZD1cIihwcm9kdWN0LmlkKVwiIEBjbGljaz1cImFkZF9wcm9kdWN0XCIgPlxuICAgICAgICAgICAgICAgICAgICB7e3Byb2R1Y3QubmFtZX19ICBbe3twcm9kdWN0LnF0eX19XVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgV2l0aCBhIGRpdmlkZXJcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB0eXBlPVwidGV4dFwiICB2LW1vZGVsOnZhbHVlPVwidW5pdF9wcmljZVwiICA+ICA8L3RkPlxuICAgICAgICAgICAgPHRkPiAgPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIiB0eXBlPVwidGV4dFwiICB2LW1vZGVsOnZhbHVlPVwicXR5XCIgID4gIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gICA8L3RkPlxuXG5cblxuXG4gICAgICAgICAgPC90cj5cblxuICAgICAgICAgIDx0ciBzdHlsZT1cImJvcmRlci1ib3R0b20td2lkdGg6MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5TdWIgVG90YWwgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+e3tzdWJfdG90YWwoKS50b0ZpeGVkKDIpfX0gPC90ZD5cblxuICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDx0ciBzdHlsZT1cImJvcmRlcjpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcIiBjbGFzcz1cInRhYmxlX2xhYmVsIGlzLWZpZWxkLXRpdGxlXCI+VG90YWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkICBjbGFzcz1cInRhYmxlX2xhYmVsXCIgc3R5bGU9XCJib3JkZXI6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XCI+e3tzdWJfdG90YWwoKS50b0ZpeGVkKDIpfX08L3RkPlxuXG4gICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgIDwvdGJvZHk+XG5cbiAgICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuXG4gXG4gICAgXG5cblxuIDwvZGl2PlxuXG4gXG48L3NlY3Rpb24+ICBcblxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFB1cmNoYXNlT3JkZXJUYWJsZSBmcm9tIFwiLi4vUHVyY2hhc2VPcmRlclRhYmxlLnZ1ZVwiO1xuaW1wb3J0IFNlbGVjdDJCb3ggZnJvbSBcIi4uL1NlbGVjdDJCb3gudnVlXCI7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tIFwidnVlanMtZGF0ZXBpY2tlclwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSBcInZlZS12YWxpZGF0ZVwiO1xuXG5jb25zdCBkaWN0ID0ge1xuICBjdXN0b206IHtcbiAgICBwb251bWJlcjoge1xuICAgICAgcmVxdWlyZWQ6IFwiT3JkZXIjIGlzIGVtcHR5XCJcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiAoKSA9PiBcIllvdXIgbmFtZSBpcyBlbXB0eVwiXG4gICAgfVxuICB9XG59O1xuXG5WYWxpZGF0b3IubG9jYWxpemUoXCJlblwiLCBkaWN0KTtcblxuZnVuY3Rpb24gdGVzdCgpIHtcbiAgYWxlcnQoXCJpbnNpZGUgdGVzdFwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInB1cmNoYXNlb3JkZXJzXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvbnVtYmVyOiBcIlwiLFxuICAgICAgdmVuZG9yX2lkOiBcIlwiLFxuICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgaXNBZGRBY3RpdmU6IGZhbHNlLFxuICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAga2V5d29yZDogXCJcIixcbiAgICAgIGtleTogXCJcIixcbiAgICAgIHVuaXRfcHJpY2U6IFwiXCIsXG4gICAgICBxdHk6IFwiXCIsXG4gICAgICBwcm9kdWN0X2dyaWQ6IFtdLFxuICAgICAgdmVuZG9yczogW10sXG4gICAgICBjcmVhdGVkX2RhdGU6IG5ldyBEYXRlKCksXG4gICAgICBzdGF0dXM6IFwiQ3JlYXRlZFwiLFxuICAgICAgZGVsaXZlcnlfZGF0ZTogXCJcIixcbiAgICAgIGRlbGl2ZXJ5X2RhdGVfZXJyb3I6IGZhbHNlLFxuICAgICAgZXJyb3JfdmVuZG9yOiBmYWxzZSxcbiAgICAgIHZlbmRvcjonJ1xuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIHB1cmNoYXNlX29yZGVyX3RhYmxlOiBQdXJjaGFzZU9yZGVyVGFibGUsXG4gICAgU2VsZWN0MkJveDogU2VsZWN0MkJveCxcbiAgICBEYXRlcGlja2VyXG4gIH0sXG5cbiAgd2F0Y2g6IHt9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgICBpc1ZhbGlkUXR5OmZ1bmN0aW9uKCl7XG4gICAgICBcblxuICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQcm9kdWN0RHJvcGRvd24pXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJhcGkvcHVyY2hhc2VvcmRlcnMvZ2V0bmV4dHBvbnVtYmVyXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMucG9udW1iZXIgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJhcGkvdmVuZG9ycy9cIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy52ZW5kb3JzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZlbmRvcnMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcblxuICBcblxuICAgIGNsb3NlUHJvZHVjdERyb3Bkb3duIChlKSB7XG4gICAgICBpZiAoIXRoaXMuJGVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLmlzQWRkQWN0aXZlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3VzdG9tRm9ybWF0dGVyKGRhdGUpIHtcbiAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVksIGg6bW06c3MgYScpO1xuICAgIH0sXG4gICAgY2hhbmdlX3ZlbmRvcjogZnVuY3Rpb24oKSB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiYXBpL3ZlbmRvcnMvXCIgKyB0aGlzLnZlbmRvcl9pZCArIFwiL3Byb2R1Y3RzXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMuZXJyb3JfdmVuZG9yID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgdmVuZG9yXG4gICAgICBcbiAgICAgICAgIHRoaXMudmVuZG9ycy5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgIGlmKG9iai5pZD09dGhpcy52ZW5kb3JfaWQpIHtcbiAgICAgICAgICAgICB0aGlzLnZlbmRvcj0gb2JqO1xuICAgICAgICAgICB9XG4gXG4gICAgICAgICB9KTtcblxuXG5cbiAgICB9LFxuXG4gICAgY2hhbmdlX2RlbGl2ZXJ5X2RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kZWxpdmVyeV9kYXRlX2Vycm9yID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGNyZWF0ZV9uZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgLy9hbGVydCh0aGlzLnB1cmNoYXNlX29yZGVyX251bWJlcik7XG5cbiAgICAgIGlmICh0aGlzLmRlbGl2ZXJ5X2RhdGUgPT0gXCJcIikge1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5X2RhdGVfZXJyb3IgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICBwcm9kdWN0X2lkX2xpc3Q6IFtcInBpZDEyMzRcIiwgXCJwaWQxMjM1XCJdLFxuICAgICAgICBwcm9kdWN0czogdGhpcy5wcm9kdWN0X2dyaWQsXG4gICAgICAgIHBvbnVtYmVyOiB0aGlzLnBvbnVtYmVyLFxuICAgICAgICB2ZW5kb3JfaWQ6IHRoaXMudmVuZG9yX2lkLFxuICAgICAgICBjcmVhdGVkX2RhdGU6IHRoaXMuY3JlYXRlZF9kYXRlLFxuICAgICAgICBkZWxpdmVyeV9kYXRlOiB0aGlzLmRlbGl2ZXJ5X2RhdGUsXG4gICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgIHRvdGFsOnRoaXMuc3ViX3RvdGFsKClcbiAgICAgIH07XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiYXBpL3B1cmNoYXNlb3JkZXJzL2NyZWF0ZVwiLCBwYXlsb2FkKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKFwiL3B1cmNoYXNlb3JkZXJzL2FsbFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dwcm9kdWN0czpmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMuZXJyb3Jfc2VsZWN0X3Byb2R1Y3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yX3ZlbmRvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQWRkQWN0aXZlID0gIXRoaXMuaXNBZGRBY3RpdmU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFkZF9wcm9kdWN0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIHRoaXMuaXNBZGRBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIGlmIChyb3dbXCJpZFwiXSA9PSAkZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgbGV0IGlzUHJvZHVjdEluVGFibGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqW1wiaWRcIl0gPT0gJGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5ID0gdGhpcy5wcm9kdWN0X2dyaWRbaW5kZXhdLnF0eSArIDE7XG4gICAgICAgICAgICAgIGlzUHJvZHVjdEluVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlzUHJvZHVjdEluVGFibGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJvdy5xdHkgPSAxO1xuICAgICAgICAgICAgcm93LnF0eVxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2dyaWQucHVzaChyb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL2FsZXJ0KCRldmVudC50YXJnZXQuaWQpXG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVsZXRlX3JvdzogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygkZXZlbnQudGFyZ2V0KTtcbiAgICAgIC8vYWxlcnQoJGV2ZW50LnRhcmdldC5pZClcbiAgICAgIHRoaXMucHJvZHVjdF9ncmlkLnNwbGljZSgkZXZlbnQudGFyZ2V0LmlkLCAxKTtcbiAgICB9LFxuXG4gICAgc3ViX3RvdGFsOiBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgdGhpcy5wcm9kdWN0X2dyaWQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIHN1bSA9IHN1bSArIHJvdy5wcm9kdWN0cHJpY2UucHVyY2hhc2VfcHJpY2UgKiByb3cucXR5O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdW07XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wdXJjaGFzZW9yZGVycy9DcmVhdGVQdXJjaGFzZU9yZGVyLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///267\n");

/***/ })

})