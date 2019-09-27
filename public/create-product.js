(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-product"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/CreateProduct.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Products/CreateProduct.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/HeroLayout.vue */ "./resources/js/components/layouts/HeroLayout.vue");
/* harmony import */ var _mixins_gather_categories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/gather-categories.js */ "./resources/js/components/mixins/gather-categories.js");
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
      title: 'Create a product',
      moreInfo: 'Insert a new product to the website!',
      labelPosition: 'inside',
      product: {},
      message: ''
    };
  },
  mixins: [_mixins_gather_categories_js__WEBPACK_IMPORTED_MODULE_1__["gatherCategories"]],
  methods: {
    submit: function submit() {
      var self = this;
      this.$http.post('/product', {
        categoryId: self.product.categoryId,
        title: self.product.title,
        about: self.product.about,
        price: self.product.price
      }).then(function (res) {
        self.message = res.data.msg;
        self.product.title = '';
        self.product.about = '';
        self.product.price = '';
      }).catch(function (err) {
        self.message = error.response.data.msg;
        console.log(err);
      });
    }
  },
  components: {
    Hero: _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/CreateProduct.vue?vue&type=template&id=71bb81de&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Products/CreateProduct.vue?vue&type=template&id=71bb81de& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _vm.message != ""
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
      _c("div", { staticClass: "container section" }, [
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
                      value: _vm.product.categoryId,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "categoryId", $$v)
                      },
                      expression: "product.categoryId"
                    }
                  },
                  _vm._l(_vm.categories, function(category) {
                    return _c("option", { domProps: { value: category.id } }, [
                      _vm._v(_vm._s(category.name))
                    ])
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
                attrs: { label: "Title", "label-position": _vm.labelPosition }
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
                attrs: { label: "About", "label-position": _vm.labelPosition }
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
                attrs: { label: "Price", "label-position": _vm.labelPosition }
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
            _c("b-field", [
              _c("div", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-primary is-medium",
                    on: { click: _vm.submit }
                  },
                  [_vm._v("Create")]
                )
              ])
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Products/CreateProduct.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pages/Products/CreateProduct.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateProduct_vue_vue_type_template_id_71bb81de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=template&id=71bb81de& */ "./resources/js/components/pages/Products/CreateProduct.vue?vue&type=template&id=71bb81de&");
/* harmony import */ var _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Products/CreateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateProduct_vue_vue_type_template_id_71bb81de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateProduct_vue_vue_type_template_id_71bb81de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Products/CreateProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Products/CreateProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/Products/CreateProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/CreateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Products/CreateProduct.vue?vue&type=template&id=71bb81de&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/Products/CreateProduct.vue?vue&type=template&id=71bb81de& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_71bb81de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateProduct.vue?vue&type=template&id=71bb81de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Products/CreateProduct.vue?vue&type=template&id=71bb81de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_71bb81de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_71bb81de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);