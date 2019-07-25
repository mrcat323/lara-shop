(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-product"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/EditProduct.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Products/EditProduct.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/HeroLayout.vue */ "./resources/js/components/layouts/HeroLayout.vue");
/* harmony import */ var _DeleteComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DeleteComponent.vue */ "./resources/js/components/DeleteComponent.vue");
/* harmony import */ var _mixins_gather_categories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/gather-categories.js */ "./resources/js/components/mixins/gather-categories.js");
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
      title: 'Update a product',
      moreInfo: 'Update the product!',
      labelPosition: 'inside',
      product: {},
      message: '',
      deleteStatus: false
    };
  },
  mixins: [_mixins_gather_categories_js__WEBPACK_IMPORTED_MODULE_2__["gatherCategories"]],
  methods: {
    submit: function submit() {
      var self = this;
      this.$api.post('/product/update', {
        id: self.product.id,
        categoryId: self.product.category_id,
        title: self.product.title,
        about: self.product.about,
        price: self.product.price
      }).then(function (res) {
        self.message = res.data.msg;
      }).catch(function (err) {
        self.message = error.response.data.msg;
        console.log(err);
      });
    },
    gatherProductDetails: function gatherProductDetails(id) {
      var self = this;
      this.$api.get("/product/".concat(id)).then(function (res) {
        self.product = res.data.product;
      }).catch(function (err) {
        console.log(err);
      });
    },
    deleteProduct: function deleteProduct(id) {
      var self = this;
      this.$api.post('/product/destroy', {
        id: id
      }).then(function (res) {
        self.deleteStatus = true;
        self.message = res.data.msg;
      }).catch(function (res) {
        return console.log(err);
      });
    }
  },
  components: {
    Hero: _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Delete: _DeleteComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  created: function created() {
    var id = this.$route.params.id;
    this.gatherProductDetails(this.$route.params.id);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/EditProduct.vue?vue&type=template&id=5fe220d0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Products/EditProduct.vue?vue&type=template&id=5fe220d0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _vm.message != "" && !_vm.deleteStatus
        ? _c(
            "b-message",
            {
              attrs: {
                title: "Success",
                type: "is-success",
                "aria-close-label": "Close message"
              }
            },
            [_vm._v("\n        " + _vm._s(_vm.message) + "\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.deleteStatus
        ? _c(
            "b-message",
            {
              attrs: {
                title: "Success",
                type: "is-danger",
                "aria-close-label": "Close message"
              }
            },
            [_vm._v("\n        " + _vm._s(_vm.message) + "\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.deleteStatus
        ? _c("div", { staticClass: "container section" }, [
            _c(
              "div",
              { staticClass: "box" },
              [
                _c(
                  "b-field",
                  { attrs: { label: "Category" } },
                  [
                    _c(
                      "b-select",
                      {
                        model: {
                          value: _vm.product.category_id,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "category_id", $$v)
                          },
                          expression: "product.category_id"
                        }
                      },
                      _vm._l(_vm.categories, function(category) {
                        return _c(
                          "option",
                          { domProps: { value: category.id } },
                          [_vm._v(_vm._s(category.name))]
                        )
                      }),
                      0
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-field",
                  {
                    attrs: {
                      label: "Title",
                      "label-position": _vm.labelPosition
                    }
                  },
                  [
                    _c("b-input", {
                      model: {
                        value: _vm.product.title,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "title", $$v)
                        },
                        expression: "product.title"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-field",
                  {
                    attrs: {
                      label: "About",
                      "label-position": _vm.labelPosition
                    }
                  },
                  [
                    _c("b-input", {
                      attrs: { type: "textarea" },
                      model: {
                        value: _vm.product.about,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "about", $$v)
                        },
                        expression: "product.about"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-field",
                  {
                    attrs: {
                      label: "Price",
                      "label-position": _vm.labelPosition
                    }
                  },
                  [
                    _c("b-input", {
                      model: {
                        value: _vm.product.price,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "price", $$v)
                        },
                        expression: "product.price"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-field",
                  [
                    _c("div", { staticClass: "control" }, [
                      _c(
                        "button",
                        {
                          staticClass: "button is-info is-medium",
                          on: { click: _vm.submit }
                        },
                        [_vm._v("Update")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("delete", {
                      attrs: {
                        id: _vm.product.id,
                        "delete-by-id": _vm.deleteProduct
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e()
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

/***/ "./resources/js/components/pages/Products/EditProduct.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/pages/Products/EditProduct.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProduct_vue_vue_type_template_id_5fe220d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=template&id=5fe220d0& */ "./resources/js/components/pages/Products/EditProduct.vue?vue&type=template&id=5fe220d0&");
/* harmony import */ var _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Products/EditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProduct_vue_vue_type_template_id_5fe220d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProduct_vue_vue_type_template_id_5fe220d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Products/EditProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Products/EditProduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/pages/Products/EditProduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/EditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Products/EditProduct.vue?vue&type=template&id=5fe220d0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/Products/EditProduct.vue?vue&type=template&id=5fe220d0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_5fe220d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProduct.vue?vue&type=template&id=5fe220d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/EditProduct.vue?vue&type=template&id=5fe220d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_5fe220d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_5fe220d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);