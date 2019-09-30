(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeleteComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  methods: {
    emit: function emit() {
      this.$emit('delete-by-id', this.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CartComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/CartComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/HeroLayout.vue */ "./resources/js/components/layouts/HeroLayout.vue");
/* harmony import */ var _DeleteComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DeleteComponent.vue */ "./resources/js/components/DeleteComponent.vue");
/* harmony import */ var _layouts_FooterLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/FooterLayout.vue */ "./resources/js/components/layouts/FooterLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: 'Cart',
      moreInfo: 'Discover your items!',
      products: [],
      isEmpty: false
    };
  },
  computed: {
    total: function total() {
      var total = 0;

      if (this.products.length) {
        for (var i = 0; i < this.products.length; i++) {
          total += parseInt(this.products[i].price) * parseInt(this.products[i].product.quantity);
        }
      }

      return total;
    }
  },
  components: {
    DeleteComponent: _DeleteComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Hero: _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Booter: _layouts_FooterLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    receiveCartItems: function receiveCartItems() {
      var _this = this;

      this.$http.get('/cart/all').then(function (res) {
        if (res.data.items.length === 0) {
          _this.isEmpty = true;
        }

        _this.products = res.data.items;
      }).catch(function (err) {
        return console.log(err);
      });
    },
    removeItemFromCart: function removeItemFromCart(id) {
      var _this2 = this;

      this.$http.delete("/cart/".concat(id)).then(function (res) {
        _this2.products = res.data.items;

        if (_this2.products.length === 0) {
          _this2.isEmpty = true;
        }
      }).catch(function (err) {
        return console.log(err);
      });
    },
    emptyCart: function emptyCart() {
      var _this3 = this;

      var products = this.products;
      this.$http.delete('/cart/empty', {
        products: products
      }).then(function () {
        _this3.receiveCartItems();

        _this3.isEmpty = true;
      }).catch(function (err) {
        return console.log(err);
      });
    }
  },
  created: function created() {
    this.receiveCartItems();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteComponent.vue?vue&type=template&id=0308daf7&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeleteComponent.vue?vue&type=template&id=0308daf7& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      { staticClass: "button is-danger", on: { click: _vm.emit } },
      [_c("b-icon", { attrs: { icon: "delete", size: "is-medium" } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CartComponent.vue?vue&type=template&id=7ff56f97&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/CartComponent.vue?vue&type=template&id=7ff56f97& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("hero", { attrs: { title: _vm.title, "sub-title": _vm.moreInfo } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "b-table",
            {
              attrs: {
                data: _vm.isEmpty ? [] : _vm.products,
                striped: "true",
                hoverable: "true"
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(props) {
                      return !_vm.isEmpty
                        ? [
                            _c(
                              "b-table-column",
                              {
                                attrs: {
                                  field: "id",
                                  label: "Product ID",
                                  width: "40",
                                  numeric: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(props.row.id) +
                                    "\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              { attrs: { field: "title", label: "Name" } },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(props.row.title) +
                                    "\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: {
                                  field: "date",
                                  label: "Date",
                                  centered: ""
                                }
                              },
                              [
                                _c("span", { staticClass: "tag is-success" }, [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(
                                        new Date(
                                          props.row.product.created_at
                                        ).toLocaleDateString()
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              { attrs: { field: "price", label: "Price" } },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(props.row.price) +
                                    "\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: {
                                  field: "product.quantity",
                                  label: "Q-TY"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(props.row.product.quantity) +
                                    "\n                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              { attrs: { label: "" } },
                              [
                                _c("delete-component", {
                                  attrs: { id: props.row.id },
                                  on: { "delete-by-id": _vm.removeItemFromCart }
                                })
                              ],
                              1
                            )
                          ]
                        : undefined
                    }
                  }
                ],
                true
              )
            },
            [
              _vm._v(" "),
              _c("template", { slot: "empty" }, [
                _c("section", { staticClass: "section" }, [
                  _c(
                    "div",
                    { staticClass: "content has-text-grey has-text-centered" },
                    [
                      _c(
                        "p",
                        [
                          _c("b-icon", {
                            attrs: { icon: "emoticon-sad", size: "is-large" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v("Nothing here.")])
                    ]
                  )
                ])
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      !_vm.isEmpty
        ? _c("div", { staticClass: "container" }, [
            _c("h2", [_vm._v("Total " + _vm._s(_vm.total) + "$")]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "button is-danger", on: { click: _vm.emptyCart } },
              [_c("b-icon", { attrs: { icon: "delete", size: "is-large" } })],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("booter")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/DeleteComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/DeleteComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteComponent_vue_vue_type_template_id_0308daf7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteComponent.vue?vue&type=template&id=0308daf7& */ "./resources/js/components/DeleteComponent.vue?vue&type=template&id=0308daf7&");
/* harmony import */ var _DeleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/DeleteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteComponent_vue_vue_type_template_id_0308daf7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteComponent_vue_vue_type_template_id_0308daf7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeleteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeleteComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DeleteComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DeleteComponent.vue?vue&type=template&id=0308daf7&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/DeleteComponent.vue?vue&type=template&id=0308daf7& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0308daf7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteComponent.vue?vue&type=template&id=0308daf7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteComponent.vue?vue&type=template&id=0308daf7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0308daf7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0308daf7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pages/CartComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/pages/CartComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartComponent_vue_vue_type_template_id_7ff56f97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=template&id=7ff56f97& */ "./resources/js/components/pages/CartComponent.vue?vue&type=template&id=7ff56f97&");
/* harmony import */ var _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/CartComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartComponent_vue_vue_type_template_id_7ff56f97___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartComponent_vue_vue_type_template_id_7ff56f97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/CartComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/CartComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/pages/CartComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CartComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CartComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/CartComponent.vue?vue&type=template&id=7ff56f97&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/CartComponent.vue?vue&type=template&id=7ff56f97& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_7ff56f97___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CartComponent.vue?vue&type=template&id=7ff56f97& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/CartComponent.vue?vue&type=template&id=7ff56f97&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_7ff56f97___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartComponent_vue_vue_type_template_id_7ff56f97___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);