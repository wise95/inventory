webpackHotUpdate(0,{

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: \"invoicepayment\",\n    data() {\n        return {\n            invoices: \"\",\n            links: '',\n            meta: '',\n            page: this.$route.query.page || 1\n        };\n    },\n\n    mounted() {\n\n        // clear query_param\n        this.$store.commit('setQueryParam', null);\n\n        //this.$store.dispatch('getProducts')\n\n        this.$store.dispatch('getInvoices', { page: this.page }).then(response => {\n            this.invoices = response.data.data;\n            this.links = response.data.links;\n            this.meta = response.data.meta;\n        });\n    },\n    methods: {\n        paginationClick: function ($event) {\n            if ($event.target.id <= this.meta.last_page) {\n                //alert($vent.target.id)\n\n                this.$store.dispatch('getInvoices', { page: $event.target.id }).then(response => {\n                    this.invoices = response.data.data;\n                    this.links = response.data.links;\n                    this.meta = response.data.meta;\n\n                    this.$router.replace({ query: { page: $event.target.id } });\n                    this.$store.commit('setQueryParam', this.$route.query);\n                });\n            }\n        }\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2ludm9pY2VzL0ludm9pY2VzLnZ1ZT8zMzYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUZBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHFCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBO0FBTUEsS0FUQTs7QUFjQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGlFQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTEE7QUFNQSxLQTNCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRkFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBLGlCQVRBO0FBVUE7QUFDQTtBQWhCQTtBQTVCQSIsImZpbGUiOiI2OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICAgXG5cbjxkaXY+XG5cbjxkaXYgY2xhc3M9XCJjb2x1bW5zXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDotMy40cmVtO3BhZGRpbmctdG9wOiAxM3B4O21hcmdpbi1ib3R0b206IDBweDtcIj5cbjxkaXYgY2xhc3M9XCJ0b29sYmFyXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xfc3RyaXBcIj5cbiAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlIGlzLTZcIj5JbnZvaWNlczwvaDI+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICA8ZGl2PlxuXG4gICAgICAgPHVsIGNsYXNzPVwidG9vbGJhcl9tZW51XCI+XG4gICAgICAgICA8bGk+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwicGFnaW5hdGlvbiBpcy1yb3VuZGVkXCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwicGFnaW5hdGlvblwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT1cIm1hcmdpbi1sZWZ0OjEwcHhcIiBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3ttZXRhLmZyb219fSAtIHt7bWV0YS50b319IG9mIHt7bWV0YS50b3RhbH19IDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgIDpjbGFzcz1cIm1ldGEuY3VycmVudF9wYWdlID09ICAxICYmICdkaXNhYmxlZCdcIj48YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiIEBjbGljaz1cInBhZ2luYXRpb25DbGlja1wiIDppZD1cIihtZXRhLmN1cnJlbnRfcGFnZSAtMSlcIj48PC9hPiA8L2xpPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAgOmNsYXNzPVwibWV0YS5jdXJyZW50X3BhZ2UgPT09IG1ldGEubGFzdF9wYWdlICYmICdkaXNhYmxlZCdcIj48YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiIEBjbGljaz1cInBhZ2luYXRpb25DbGlja1wiIDppZD1cIihtZXRhLmN1cnJlbnRfcGFnZSArMSlcIj4+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgPC9saT5cbiAgICAgIFxuICAgICAgICA8L3VsPlxuICAgICA8L2Rpdj5cblxuICAgICBcbjwvZGl2PlxuXG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0Oi0zLjRyZW07cGFkZGluZy10b3A6IDEzcHg7XCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgPHRoZWFkPlxuICAgICAgIDx0cj5cbiAgICAgICAgPHRoPiBEYXRlIDwvdGg+XG4gICAgICAgIDx0aD4gSW52b2ljZSAjPC90aD5cbiAgICAgICAgPHRoPiBPcmRlciAjPC90aD5cbiAgICAgICAgPHRoPiBDdXN0b21lcjwvdGg+XG4gICAgICAgIDx0aD4gU3RhdHVzPC90aD5cbiAgICAgICAgPHRoPiBEdWUgRGF0ZTwvdGg+XG4gICAgICAgIDx0aCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHRcIj4gQW1vdW50PC90aD5cbiAgICAgICAgPHRoIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodFwiPiBCYWxhbmNlIER1ZTwvdGg+XG5cblxuICAgICAgIDwvdHI+XG5cbiAgICAgICA8L3RoZWFkPlxuXG5cbiAgICAgICAgIDx0Ym9keT5cblxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpbnZvaWNlLCBpbmRleCkgaW4gaW52b2ljZXNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3tpbnZvaWNlLmNyZWF0ZWRfYXR9fSA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwiJy9pbnZvaWNlcy8nK2ludm9pY2UuaWQrJy92aWV3J1wiID4ge3tpbnZvaWNlLmludm51bWJlcn19PC9hPiA8L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7aW52b2ljZS5zYWxlc29yZGVyLnNvbnVtYmVyfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57e2ludm9pY2UuY3VzdG9tZXJmdWxsbmFtZX19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tpbnZvaWNlLnN0YXR1c319PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3tpbnZvaWNlLmR1ZV9kYXRlfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cInRleHQtYWxpZ246cmlnaHRcIiA+e3tpbnZvaWNlLnRvdGFsLnRvRml4ZWQoMil9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodFwiPjwvdGQ+XG5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICBcblxuXG4gICAgICAgICA8L3Rib2R5PlxuICAgICA8L3RhYmxlPlxuICAgICA8L2Rpdj5cblxuPC9kaXY+XG5cbiAgXG5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICBuYW1lOlwiaW52b2ljZXBheW1lbnRcIixcbiAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIGludm9pY2VzOlwiXCIsXG4gICAgICAgICBsaW5rczonJyxcbiAgICAgICAgIG1ldGE6JycsXG4gICAgICAgICBwYWdlOiB0aGlzLiRyb3V0ZS5xdWVyeS5wYWdlIHx8IDEsXG4gICAgICB9XG4gICB9LFxuXG5cblxuICAgXG4gICAgbW91bnRlZCAoKSB7XG5cbiAgICAgLy8gY2xlYXIgcXVlcnlfcGFyYW1cbiAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFF1ZXJ5UGFyYW0nLG51bGwpXG5cbiAgICAvL3RoaXMuJHN0b3JlLmRpc3BhdGNoKCdnZXRQcm9kdWN0cycpXG5cbiAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2dldEludm9pY2VzJyx7cGFnZTp0aGlzLnBhZ2V9KVxuICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICB0aGlzLmludm9pY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgICAgIHRoaXMubGlua3MgPSByZXNwb25zZS5kYXRhLmxpbmtzO1xuICAgICAgICAgICAgIHRoaXMubWV0YSA9IHJlc3BvbnNlLmRhdGEubWV0YTtcbiAgICAgICAgIH0pXG4gICAgfSxcbiAgICBtZXRob2RzOntcbiAgICAgIHBhZ2luYXRpb25DbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuaWQgPD0gdGhpcy5tZXRhLmxhc3RfcGFnZSkge1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoJHZlbnQudGFyZ2V0LmlkKVxuXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZ2V0SW52b2ljZXMnLHtwYWdlOiRldmVudC50YXJnZXQuaWR9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgICB0aGlzLmludm9pY2VzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICB0aGlzLmxpbmtzID0gcmVzcG9uc2UuZGF0YS5saW5rc1xuICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhID0gcmVzcG9uc2UuZGF0YS5tZXRhXG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKHtxdWVyeToge3BhZ2U6JGV2ZW50LnRhcmdldC5pZH19KVxuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRRdWVyeVBhcmFtJyx0aGlzLiRyb3V0ZS5xdWVyeSlcblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2ludm9pY2VzL0ludm9pY2VzLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///68\n");

/***/ })

})