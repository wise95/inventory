webpackHotUpdate(0,{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__ = __webpack_require__(145);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vee_validate__ = __webpack_require__(5);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nconst dict = {\n  custom: {\n    ponumber: {\n      required: \"Order# is empty\"\n    },\n    name: {\n      required: () => \"Your name is empty\"\n    }\n  }\n};\n\n__WEBPACK_IMPORTED_MODULE_4_vee_validate__[\"a\" /* Validator */].localize(\"en\", dict);\n\nfunction test() {\n  alert(\"inside test\");\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: \"purchaseorders\",\n  data() {\n    return {\n      ponumber: \"\",\n      vendor_id: \"\",\n      products: [],\n      isAddActive: false,\n      products: [],\n      keyword: \"\",\n      key: \"\",\n      unit_price: \"\",\n      qty: \"\",\n      product_grid: [],\n      vendors: [],\n      created_date: new Date(),\n      status: \"Created\",\n      delivery_date: \"\",\n      delivery_date_error: false,\n      error_vendor: false,\n      vendor: ''\n    };\n  },\n\n  components: {\n    purchase_order_table: __WEBPACK_IMPORTED_MODULE_1__PurchaseOrderTable_vue__[\"a\" /* default */],\n    Select2Box: __WEBPACK_IMPORTED_MODULE_2__Select2Box_vue__[\"a\" /* default */],\n    Datepicker: __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__[\"a\" /* default */]\n  },\n\n  watch: {},\n\n  computed: {\n    isValidQty: function () {\n\n      this.products.forEach((row, i) => {\n\n        this.product_grid.forEach((obj, index) => {\n\n          if (obj.qty == row.qty) {\n            cosole.log(\"Q\");\n            this.product_grid[index].qty_error = true;\n          }\n        });\n      });\n    }\n  },\n\n  mounted() {\n\n    document.addEventListener('click', this.closeProductDropdown);\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/purchaseorders/getnextponumber\").then(response => {\n      this.ponumber = response.data;\n      console.log(response);\n    }).catch(function (error) {\n      console.log(error);\n    });\n\n    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\").then(response => {\n      this.vendors = response.data.data;\n      console.log(this.vendors);\n    }).catch(error => {\n      console.log(error);\n    });\n  },\n\n  methods: {\n\n    closeProductDropdown(e) {\n      if (!this.$el.contains(e.target)) {\n        this.isAddActive = false;\n      }\n    },\n\n    customFormatter(date) {\n      return moment(date).format('MMMM Do YYYY, h:mm:ss a');\n    },\n    change_vendor: function () {\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(\"api/vendors/\" + this.vendor_id + \"/products\").then(response => {\n        this.products = response.data.data;\n        this.error_vendor = false;\n      }).catch(error => {\n        console.log(error);\n      });\n\n      // get selected vendor\n\n      this.vendors.forEach((obj, index) => {\n        if (obj.id == this.vendor_id) {\n          this.vendor = obj;\n        }\n      });\n    },\n\n    change_delivery_date: function () {\n      this.delivery_date_error = false;\n    },\n\n    create_new: function () {\n      let self = this;\n      //alert(this.purchase_order_number);\n\n      if (this.delivery_date == \"\") {\n        this.delivery_date_error = true;\n        return;\n      }\n\n      let payload = {\n        product_id_list: [\"pid1234\", \"pid1235\"],\n        products: this.product_grid,\n        ponumber: this.ponumber,\n        vendor_id: this.vendor_id,\n        created_date: this.created_date,\n        delivery_date: this.delivery_date,\n        status: this.status,\n        total: this.sub_total()\n      };\n\n      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(\"api/purchaseorders/create\", payload).then(function (response) {\n        self.$router.push(\"/purchaseorders/all\");\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n\n    showproducts: function () {\n      if (this.products.length == 0) {\n        this.error_select_product = true;\n        this.error_vendor = true;\n      } else {\n        this.isAddActive = !this.isAddActive;\n      }\n    },\n\n    add_product: function ($event) {\n      this.isAddActive = false;\n      this.products.forEach((row, i) => {\n        if (row[\"id\"] == $event.target.id) {\n          let isProductInTable = false;\n          this.product_grid.forEach((obj, index) => {\n            if (obj[\"id\"] == $event.target.id) {\n              this.product_grid[index].qty = this.product_grid[index].qty + 1;\n              isProductInTable = true;\n            }\n          });\n\n          if (isProductInTable == false) {\n            row.qty = 1;\n            row.qty_error = false;\n            this.product_grid.push(row);\n          }\n          //alert($event.target.id)\n\n          return;\n        }\n      });\n    },\n    delete_row: function ($event) {\n      console.log($event.target);\n      //alert($event.target.id)\n      this.product_grid.splice($event.target.id, 1);\n    },\n\n    sub_total: function () {\n      let sum = 0;\n      this.product_grid.forEach((row, i) => {\n        sum = sum + row.productprice.purchase_price * row.qty;\n      });\n\n      return sum;\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3B1cmNoYXNlb3JkZXJzL0NyZWF0ZVB1cmNoYXNlT3JkZXIudnVlPzYxMTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFEQTs7QUFXQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG1CQUZBO0FBR0Esa0JBSEE7QUFJQSx3QkFKQTtBQUtBLGtCQUxBO0FBTUEsaUJBTkE7QUFPQSxhQVBBO0FBUUEsb0JBUkE7QUFTQSxhQVRBO0FBVUEsc0JBVkE7QUFXQSxpQkFYQTtBQVlBLDhCQVpBO0FBYUEsdUJBYkE7QUFjQSx1QkFkQTtBQWVBLGdDQWZBO0FBZ0JBLHlCQWhCQTtBQWlCQTtBQWpCQTtBQW1CQSxHQXRCQTs7QUF3QkE7QUFDQSxrR0FEQTtBQUVBLGdGQUZBO0FBR0E7QUFIQSxHQXhCQTs7QUE4QkEsV0E5QkE7O0FBZ0NBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQVBBO0FBUUEsT0FWQTtBQVlBO0FBZkEsR0FoQ0E7O0FBa0RBOztBQUVBO0FBQ0Esa0RBQ0EsR0FEQSxDQUNBLG9DQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLEtBUkE7O0FBVUEsa0RBQ0EsR0FEQSxDQUNBLGNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLEdBeEVBOztBQTBFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7O0FBVUE7QUFDQTtBQUNBLEtBWkE7QUFhQTtBQUNBLG9EQUNBLEdBREEsQ0FDQSw2Q0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxPQVJBOztBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsT0FMQTtBQVNBLEtBbkNBOztBQXFDQTtBQUNBO0FBQ0EsS0F2Q0E7O0FBeUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQURBO0FBRUEsbUNBRkE7QUFHQSwrQkFIQTtBQUlBLGlDQUpBO0FBS0EsdUNBTEE7QUFNQSx5Q0FOQTtBQU9BLDJCQVBBO0FBUUE7QUFSQTs7QUFXQSxvREFDQSxJQURBLENBQ0EsMkJBREEsRUFDQSxPQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsRUFNQSxLQU5BLENBTUE7QUFDQTtBQUNBLE9BUkE7QUFTQSxLQXRFQTs7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsS0EvRUE7O0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FMQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BbkJBO0FBb0JBLEtBdkdBO0FBd0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1R0E7O0FBOEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTs7QUFJQTtBQUNBO0FBckhBO0FBMUVBIiwiZmlsZSI6IjI2Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDotMi43cmVtO3BhZGRpbmctdG9wOiAxM3B4O21hcmdpbi1ib3R0b206IDEzcHg7XCI+XG4gIDxkaXYgY2xhc3M9XCJ0b29sYmFyXCI+XG5cbiAgICAgPGRpdiBjbGFzcz1cInRvb2xfc3RyaXBcIj5cbiAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlIGlzLTZcIj4gQ3JlYXRlIFB1cmNoYXNlIE9yZGVyIDwvaDI+XG4gICAgIDwvZGl2PlxuXG4gICAgIDxkaXY+XG4gICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtc21hbGxcIiBAY2xpY2s9XCJjcmVhdGVfbmV3XCI+U2F2ZTwvYT5cbiAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtc21hbGxcIiA6dG89XCInL3B1cmNoYXNlb3JkZXJzL2NyZWF0ZSdcIiA+Q3JlYXRlIE5ldzwvcm91dGVyLWxpbms+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgIDwvZGl2PlxuXG48L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmXCI+XG4gXG5cbiAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0xMlwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6LTIuN3JlbTsgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO3BhZGRpbmctdG9wOiAxM3B4O3BhZGRpbmctbGVmdDogMS41cmVtO1wiPlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowcHhcIj5cbiAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPk9yZGVyICM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCAgaXMtc21hbGxcIiB2LXZhbGlkYXRlPVwiJ3JlcXVpcmVkJ1wiIG5hbWU9XCJwb251bWJlclwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInBvbnVtYmVyXCIgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPnt7IGVycm9ycy5maXJzdCgncG9udW1iZXInKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICBcblxuXG4gICAgPC9kaXY+XG5cblxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MHB4XCI+XG4gICAgXG4gICAgXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPkNyZWF0ZWQgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIDpmb3JtYXQ9XCIneXl5eS1NTS1kZCdcIiA6aW5wdXQtY2xhc3M9XCInaW5wdXQgaXMtc21hbGwnXCIgdi12YWxpZGF0ZT1cIidyZXF1aXJlZCdcIiBuYW1lPVwiY3JlYXRlZF9kYXRlXCIgdi1tb2RlbD1cImNyZWF0ZWRfZGF0ZVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPnt7IGVycm9ycy5maXJzdCgnY3JlYXRlZF9kYXRlJykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIGlzLWZpZWxkLXRpdGxlXCI+U3RhdHVzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0IGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic3RhdHVzXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDcmVhdGVkXCIgPkNyZWF0ZWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VudFwiID5TZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWwgaXMtZmllbGQtdGl0bGVcIj5FeHBlY3RlZCBEZWxpdmVyeSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciAgQHNlbGVjdGVkPVwiY2hhbmdlX2RlbGl2ZXJ5X2RhdGVcIiAgbmFtZT1cImRlbGl2ZXJ5X2RhdGVcIiB2LW1vZGVsPVwiZGVsaXZlcnlfZGF0ZVwiIDpmb3JtYXQ9XCIneXl5eS1NTU0tZGQnXCIgOmlucHV0LWNsYXNzPVwiJ2lucHV0IGlzLXNtYWxsJ1wiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiIHYtaWY9XCJkZWxpdmVyeV9kYXRlX2Vycm9yXCI+UGxlYXNlIGVudGVyIGRlbGl2ZXJ5IGRhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy0zXCI+XG5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cblxuXG5cblxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uc1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTowcHhcIj5cbiAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlZlbmRvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdCBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJ2ZW5kb3JfaWRcIiBAY2hhbmdlPVwiY2hhbmdlX3ZlbmRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIodmVuZG9yLCBpbmRleCkgaW4gdmVuZG9yc1wiIDp2YWx1ZT1cInZlbmRvci5pZFwiICA+e3t2ZW5kb3IubmFtZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiBcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JfdmVuZG9yXCI+UGxlYXNlIHNlbGVjdCB2ZW5kb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj4gPGxhYmVsPiB7e3ZlbmRvci5uYW1lfX0gPC9sYWJlbD4gPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD4ge3t2ZW5kb3IuYWRkZXNzfX0gPC9sYWJlbD4gPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD4ge3t2ZW5kb3IuY2l0eX19ICA8L2xhYmVsPiA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj4gPGxhYmVsPnt7dmVuZG9yLnN0YXRlfX0ge3t2ZW5kb3IuemlwfX0gIDwvbGFiZWw+IDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+IDxsYWJlbD4ge3t2ZW5kb3IuY291bnRyeX19IDwvbGFiZWw+IDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgICBcblxuICAgICBcblxuICAgXG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBpcy1mdWxsd2lkdGggaXMtYm9yZGVyZWRcIiBpZD1cImdyaWRfdGFibGVcIj5cbiAgICAgICA8dGhlYWQ+XG4gICAgICAgPHRyPlxuICAgICAgICA8dGg+IFByb2R1Y3QgTmFtZSA8L3RoPlxuICAgICAgICA8dGg+IFVuaXQgUHJpY2U8L3RoPlxuICAgICAgICA8dGg+IFF0eTwvdGg+XG4gICAgICAgXG4gICAgICAgIDx0aD4gQW1vdW50PC90aD5cbiAgICAgICAgPHRoPiA8L3RoPlxuXG4gICAgICAgPC90cj5cblxuICAgICAgIDwvdGhlYWQ+XG5cblxuICAgICAgICAgPHRib2R5PlxuXG4gICAgICAgICAgPHRyIHYtZm9yPVwiKHByb2R1Y3QsIGluZGV4KSBpbiBwcm9kdWN0X2dyaWRcIj5cblxuICAgICAgICAgICAgPHRkPnt7cHJvZHVjdC5uYW1lfX0gPC90ZD5cbiAgICAgICAgICAgIDx0ZD48aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHYtbW9kZWw9J3Byb2R1Y3RfZ3JpZFtpbmRleF0ucHJvZHVjdHByaWNlLnB1cmNoYXNlX3ByaWNlJyAvPiA8L3RkPlxuICAgICAgICAgICAgPHRkPiA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHYtbW9kZWw9J3Byb2R1Y3RfZ3JpZFtpbmRleF0ucXR5JyAvPlxuICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5X2Vycm9yPT10cnVlXCIgIGNsYXNzPVwiZXJyb3JcIiA+IEVycm9yIHt7aXNWYWxpZFF0eX19PC9zcGFuPlxuICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+IHt7KHByb2R1Y3RfZ3JpZFtpbmRleF0ucHJvZHVjdHByaWNlLnB1cmNoYXNlX3ByaWNlKnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5KS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgPHRkPiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgQGNsaWNrPVwiZGVsZXRlX3Jvd1wiID4gPGkgOmlkPVwiaW5kZXhcIiBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+IDwvYT4gPC90ZD5cbiAgICAgICAgICAgXG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgIDx0cj5cblxuICAgICAgICAgICAgPHRkPiBcblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIiBzdHlsZT1cIndpZHRoOjEwMCVcIiB2LWJpbmQ6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBpc0FkZEFjdGl2ZSB9XCIgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tdHJpZ2dlclwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxuXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCIgIHYtbW9kZWw6dmFsdWU9XCJrZXl3b3JkXCIgQGNsaWNrPVwic2hvd3Byb2R1Y3RzXCIgPiBcbiAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXJyb3JcIiB2LWlmPVwiZXJyb3JfdmVuZG9yXCI+UGxlYXNlIHNlbGVjdCB2ZW5kb3IgZmlyc3Q8L3NwYW4+ICBcblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGlkPVwiZHJvcGRvd24tbWVudVwiIHJvbGU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIiBzdHlsZT1cImJvcmRlci1yYWRpdXM6MHB4XCI+XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIHByb2R1Y3RzXCIgOmlkPVwiKHByb2R1Y3QuaWQpXCIgQGNsaWNrPVwiYWRkX3Byb2R1Y3RcIiA+XG4gICAgICAgICAgICAgICAgICAgIHt7cHJvZHVjdC5uYW1lfX0gIFt7e3Byb2R1Y3QucXR5fX1dXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICBXaXRoIGEgZGl2aWRlclxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPiA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgIHYtbW9kZWw6dmFsdWU9XCJ1bml0X3ByaWNlXCIgID4gIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+ICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiIHR5cGU9XCJ0ZXh0XCIgIHYtbW9kZWw6dmFsdWU9XCJxdHlcIiAgPiAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD4gICA8L3RkPlxuICAgICAgICAgICAgPHRkPiAgIDwvdGQ+XG5cblxuXG5cbiAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgPHRyIHN0eWxlPVwiYm9yZGVyLWJvdHRvbS13aWR0aDowXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj4gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCIgY2xhc3M9XCJsYWJlbCBpcy1maWVsZC10aXRsZVwiPlN1YiBUb3RhbCA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj57e3N1Yl90b3RhbCgpLnRvRml4ZWQoMil9fSA8L3RkPlxuXG4gICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPVwiYm9yZGVyOm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cImJvcmRlcjpub25lXCI+IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJib3JkZXI6bm9uZVwiPiA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwiYm9yZGVyOm5vbmU7YmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1wiIGNsYXNzPVwidGFibGVfbGFiZWwgaXMtZmllbGQtdGl0bGVcIj5Ub3RhbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgIGNsYXNzPVwidGFibGVfbGFiZWxcIiBzdHlsZT1cImJvcmRlcjpub25lO2JhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcIj57e3N1Yl90b3RhbCgpLnRvRml4ZWQoMil9fTwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgPC90Ym9keT5cblxuICAgICAgPC90YWJsZT5cbiAgPC9kaXY+XG5cbiBcbiAgICBcblxuXG4gPC9kaXY+XG5cbiBcbjwvc2VjdGlvbj4gIFxuXG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUHVyY2hhc2VPcmRlclRhYmxlIGZyb20gXCIuLi9QdXJjaGFzZU9yZGVyVGFibGUudnVlXCI7XG5pbXBvcnQgU2VsZWN0MkJveCBmcm9tIFwiLi4vU2VsZWN0MkJveC52dWVcIjtcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gXCJ2dWVqcy1kYXRlcGlja2VyXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwidmVlLXZhbGlkYXRlXCI7XG5cbmNvbnN0IGRpY3QgPSB7XG4gIGN1c3RvbToge1xuICAgIHBvbnVtYmVyOiB7XG4gICAgICByZXF1aXJlZDogXCJPcmRlciMgaXMgZW1wdHlcIlxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICgpID0+IFwiWW91ciBuYW1lIGlzIGVtcHR5XCJcbiAgICB9XG4gIH1cbn07XG5cblZhbGlkYXRvci5sb2NhbGl6ZShcImVuXCIsIGRpY3QpO1xuXG5mdW5jdGlvbiB0ZXN0KCkge1xuICBhbGVydChcImluc2lkZSB0ZXN0XCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwicHVyY2hhc2VvcmRlcnNcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9udW1iZXI6IFwiXCIsXG4gICAgICB2ZW5kb3JfaWQ6IFwiXCIsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBpc0FkZEFjdGl2ZTogZmFsc2UsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBrZXl3b3JkOiBcIlwiLFxuICAgICAga2V5OiBcIlwiLFxuICAgICAgdW5pdF9wcmljZTogXCJcIixcbiAgICAgIHF0eTogXCJcIixcbiAgICAgIHByb2R1Y3RfZ3JpZDogW10sXG4gICAgICB2ZW5kb3JzOiBbXSxcbiAgICAgIGNyZWF0ZWRfZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIHN0YXR1czogXCJDcmVhdGVkXCIsXG4gICAgICBkZWxpdmVyeV9kYXRlOiBcIlwiLFxuICAgICAgZGVsaXZlcnlfZGF0ZV9lcnJvcjogZmFsc2UsXG4gICAgICBlcnJvcl92ZW5kb3I6IGZhbHNlLFxuICAgICAgdmVuZG9yOicnXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgcHVyY2hhc2Vfb3JkZXJfdGFibGU6IFB1cmNoYXNlT3JkZXJUYWJsZSxcbiAgICBTZWxlY3QyQm94OiBTZWxlY3QyQm94LFxuICAgIERhdGVwaWNrZXJcbiAgfSxcblxuICB3YXRjaDoge30sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAgIGlzVmFsaWRRdHk6ZnVuY3Rpb24oKXtcbiAgICAgIFxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuXG4gICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkLmZvckVhY2goKG9iaiwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgIGlmKG9iai5xdHk9PXJvdy5xdHkpe1xuICAgICAgICAgICAgICAgY29zb2xlLmxvZyhcIlFcIilcbiAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkW2luZGV4XS5xdHlfZXJyb3I9dHJ1ZVxuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQcm9kdWN0RHJvcGRvd24pXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJhcGkvcHVyY2hhc2VvcmRlcnMvZ2V0bmV4dHBvbnVtYmVyXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMucG9udW1iZXIgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJhcGkvdmVuZG9ycy9cIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy52ZW5kb3JzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZlbmRvcnMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcblxuICBcblxuICAgIGNsb3NlUHJvZHVjdERyb3Bkb3duIChlKSB7XG4gICAgICBpZiAoIXRoaXMuJGVsLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICB0aGlzLmlzQWRkQWN0aXZlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3VzdG9tRm9ybWF0dGVyKGRhdGUpIHtcbiAgICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVksIGg6bW06c3MgYScpO1xuICAgIH0sXG4gICAgY2hhbmdlX3ZlbmRvcjogZnVuY3Rpb24oKSB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiYXBpL3ZlbmRvcnMvXCIgKyB0aGlzLnZlbmRvcl9pZCArIFwiL3Byb2R1Y3RzXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMuZXJyb3JfdmVuZG9yID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgdmVuZG9yXG4gICAgICBcbiAgICAgICAgIHRoaXMudmVuZG9ycy5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgIGlmKG9iai5pZD09dGhpcy52ZW5kb3JfaWQpIHtcbiAgICAgICAgICAgICB0aGlzLnZlbmRvcj0gb2JqO1xuICAgICAgICAgICB9XG4gXG4gICAgICAgICB9KTtcblxuXG5cbiAgICB9LFxuXG4gICAgY2hhbmdlX2RlbGl2ZXJ5X2RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kZWxpdmVyeV9kYXRlX2Vycm9yID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGNyZWF0ZV9uZXc6IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgLy9hbGVydCh0aGlzLnB1cmNoYXNlX29yZGVyX251bWJlcik7XG5cbiAgICAgIGlmICh0aGlzLmRlbGl2ZXJ5X2RhdGUgPT0gXCJcIikge1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5X2RhdGVfZXJyb3IgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICBwcm9kdWN0X2lkX2xpc3Q6IFtcInBpZDEyMzRcIiwgXCJwaWQxMjM1XCJdLFxuICAgICAgICBwcm9kdWN0czogdGhpcy5wcm9kdWN0X2dyaWQsXG4gICAgICAgIHBvbnVtYmVyOiB0aGlzLnBvbnVtYmVyLFxuICAgICAgICB2ZW5kb3JfaWQ6IHRoaXMudmVuZG9yX2lkLFxuICAgICAgICBjcmVhdGVkX2RhdGU6IHRoaXMuY3JlYXRlZF9kYXRlLFxuICAgICAgICBkZWxpdmVyeV9kYXRlOiB0aGlzLmRlbGl2ZXJ5X2RhdGUsXG4gICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgIHRvdGFsOnRoaXMuc3ViX3RvdGFsKClcbiAgICAgIH07XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiYXBpL3B1cmNoYXNlb3JkZXJzL2NyZWF0ZVwiLCBwYXlsb2FkKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIHNlbGYuJHJvdXRlci5wdXNoKFwiL3B1cmNoYXNlb3JkZXJzL2FsbFwiKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dwcm9kdWN0czpmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHRoaXMuZXJyb3Jfc2VsZWN0X3Byb2R1Y3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yX3ZlbmRvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzQWRkQWN0aXZlID0gIXRoaXMuaXNBZGRBY3RpdmU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFkZF9wcm9kdWN0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgIHRoaXMuaXNBZGRBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgIGlmIChyb3dbXCJpZFwiXSA9PSAkZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgbGV0IGlzUHJvZHVjdEluVGFibGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5mb3JFYWNoKChvYmosIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqW1wiaWRcIl0gPT0gJGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfZ3JpZFtpbmRleF0ucXR5ID0gdGhpcy5wcm9kdWN0X2dyaWRbaW5kZXhdLnF0eSArIDE7XG4gICAgICAgICAgICAgIGlzUHJvZHVjdEluVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGlzUHJvZHVjdEluVGFibGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJvdy5xdHkgPSAxO1xuICAgICAgICAgICAgcm93LnF0eV9lcnJvcj1mYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdF9ncmlkLnB1c2gocm93KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy9hbGVydCgkZXZlbnQudGFyZ2V0LmlkKVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlbGV0ZV9yb3c6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgY29uc29sZS5sb2coJGV2ZW50LnRhcmdldCk7XG4gICAgICAvL2FsZXJ0KCRldmVudC50YXJnZXQuaWQpXG4gICAgICB0aGlzLnByb2R1Y3RfZ3JpZC5zcGxpY2UoJGV2ZW50LnRhcmdldC5pZCwgMSk7XG4gICAgfSxcblxuICAgIHN1Yl90b3RhbDogZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc3VtID0gMDtcbiAgICAgIHRoaXMucHJvZHVjdF9ncmlkLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICBzdW0gPSBzdW0gKyByb3cucHJvZHVjdHByaWNlLnB1cmNoYXNlX3ByaWNlICogcm93LnF0eTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3VtO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcHVyY2hhc2VvcmRlcnMvQ3JlYXRlUHVyY2hhc2VPcmRlci52dWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///267\n");

/***/ })

})