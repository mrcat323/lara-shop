(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Categories/Category.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Categories/Category.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/HeroLayout.vue */ "./resources/js/components/layouts/HeroLayout.vue");
/* harmony import */ var _mixins_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/products.js */ "./resources/js/components/mixins/products.js");
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
      category: {},
      subTitle: 'Discover the products'
    };
  },
  mixins: [_mixins_products_js__WEBPACK_IMPORTED_MODULE_1__["products"]],
  methods: {
    gatherCategoryDetails: function gatherCategoryDetails(id) {
      var _this = this;

      this.$api.get("/category/".concat(id)).then(function (res) {
        _this.category = res.data.category;
        _this.products = res.data.products;
      }).catch(function (err) {
        return console.log(err);
      });
    }
  },
  components: {
    Hero: _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var id = this.$route.params.id;
    this.gatherCategoryDetails(id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Categories/Category.vue?vue&type=template&id=3582920b&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Categories/Category.vue?vue&type=template&id=3582920b& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("hero", {
        attrs: { title: _vm.category.name, "sub-title": _vm.subTitle }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container pt-25" },
        _vm._l(_vm.chunkedProducts, function(item, index) {
          return _c(
            "div",
            { staticClass: "columns" },
            _vm._l(_vm.chunkedProducts[index], function(product) {
              return _c(
                "div",
                { key: product.id, staticClass: "column is-4" },
                [
                  _c("div", { staticClass: "card" }, [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-content" }, [
                      _c("div", { staticClass: "media" }, [
                        _c("div", { staticClass: "media-content" }, [
                          _c("p", { staticClass: "title is-4" }, [
                            _vm._v(_vm._s(product.title))
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "subtitle is-6" }, [
                            _vm._v(_vm._s(product.price) + " $")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "content" }, [
                        _vm._v(
                          "\n\t\t\t\t\t      " +
                            _vm._s(product.about) +
                            "\n\t\t\t\t\t      "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "time",
                          { attrs: { datetime: product.created_at } },
                          [_vm._v(_vm._s(product.created_at))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("footer", { staticClass: "card-footer" }, [
                      _vm.$auth.check()
                        ? _c(
                            "a",
                            { staticClass: "card-footer-item" },
                            [_c("b-icon", { attrs: { icon: "cart" } })],
                            1
                          )
                        : _vm._e()
                    ])
                  ])
                ]
              )
            }),
            0
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-image" }, [
      _c("figure", { staticClass: "image is-4by3" }, [
        _c("img", {
          attrs: {
            src: "https://bulma.io/images/placeholders/1280x960.png",
            alt: "Placeholder image"
          }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/mixins/products.js":
/*!****************************************************!*\
  !*** ./resources/js/components/mixins/products.js ***!
  \****************************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = {
  data: function data() {
    return {
      products: []
    };
  },
  computed: {
    chunkedProducts: function chunkedProducts() {
      var array = [],
          n = 3;

      for (var i = 0; i < this.products.length; i += n) {
        array.push(this.products.slice(i, i + n));
      }

      return array;
    }
  }
};

/***/ }),

/***/ "./resources/js/components/pages/Categories/Category.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/Categories/Category.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_3582920b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=3582920b& */ "./resources/js/components/pages/Categories/Category.vue?vue&type=template&id=3582920b&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Categories/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_3582920b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_3582920b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Categories/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Categories/Category.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/Categories/Category.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Categories/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Categories/Category.vue?vue&type=template&id=3582920b&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/Categories/Category.vue?vue&type=template&id=3582920b& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3582920b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=3582920b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Categories/Category.vue?vue&type=template&id=3582920b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3582920b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_3582920b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);