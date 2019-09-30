(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["404-page~about-page~cart-page~category~create-category~create-product~edit-category~edit-product~for~97f463c3"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/HeroLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/HeroLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavbarLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarLayout.vue */ "./resources/js/components/layouts/NavbarLayout.vue");
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
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  components: {
    Navbar: _NavbarLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavbarLayout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/NavbarLayout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_gather_categories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/gather-categories.js */ "./resources/js/components/mixins/gather-categories.js");
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
      elements: [{
        id: 1,
        title: 'Home',
        path: '/'
      }, {
        id: 2,
        title: 'About',
        path: '/about'
      }, {
        id: 3,
        title: 'Products',
        path: '/products/'
      }]
    };
  },
  mixins: [_mixins_gather_categories_js__WEBPACK_IMPORTED_MODULE_0__["gatherCategories"]],
  methods: {
    logout: function logout() {
      this.$auth.logout({
        makeRequest: true,
        params: {},
        success: function success() {},
        error: function error() {},
        redirect: '/'
      });
    },
    cart: function cart() {
      this.$router.push({
        name: 'cart'
      });
    }
  },
  created: function created() {
    console.log(this.categories);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/HeroLayout.vue?vue&type=template&id=24e72096&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/HeroLayout.vue?vue&type=template&id=24e72096& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "hero is-primary is-large is-bold" }, [
      _c("div", { staticClass: "hero-head" }, [_c("navbar")], 1),
      _vm._v(" "),
      _c("div", { staticClass: "hero-body" }, [
        _c("div", { staticClass: "container has-text-centered" }, [
          _c("h1", { staticClass: "title" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.title) +
                "\n                "
            )
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "subtitle" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.subTitle) +
                "\n                "
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavbarLayout.vue?vue&type=template&id=ddecb3ea&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/NavbarLayout.vue?vue&type=template&id=ddecb3ea& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      "nav",
      {
        staticClass: "navbar",
        attrs: { role: "navigation", "aria-label": "main navigation" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "navbar-brand" },
            [
              _c(
                "router-link",
                { staticClass: "navbar-item", attrs: { to: "/" } },
                [_vm._v("\n          Lara-Shop\n        ")]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "navbar-burger burger",
                  attrs: {
                    role: "button",
                    "aria-label": "menu",
                    "aria-expanded": "false",
                    "data-target": "navbarBasicExample"
                  }
                },
                [
                  _c("span", { attrs: { "aria-hidden": "true" } }),
                  _vm._v(" "),
                  _c("span", { attrs: { "aria-hidden": "true" } }),
                  _vm._v(" "),
                  _c("span", { attrs: { "aria-hidden": "true" } })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "navbar-menu", attrs: { id: "navbarBasicExample" } },
            [
              _c(
                "div",
                { staticClass: "navbar-start" },
                [
                  _vm._l(_vm.elements, function(element) {
                    return _c(
                      "router-link",
                      {
                        key: element.id,
                        staticClass: "navbar-item",
                        attrs: { to: element.path }
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(element.title) +
                            "\n          "
                        )
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    { attrs: { hoverable: "", "aria-role": "menu" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "navbar-item",
                          attrs: { slot: "trigger" },
                          slot: "trigger"
                        },
                        [
                          _c("span", [_vm._v("Categories")]),
                          _vm._v(" "),
                          _c("b-icon", { attrs: { icon: "menu-down" } })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category) {
                        return _c(
                          "b-dropdown-item",
                          {
                            key: category.id,
                            attrs: { "aria-role": "listitem" }
                          },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "category",
                                    params: { id: category.id }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(category.name) +
                                    "\n                "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "navbar-end" },
                [
                  _vm.$auth.check()
                    ? _c(
                        "b-dropdown",
                        {
                          attrs: {
                            position: "is-bottom-left",
                            "aria-role": "menu"
                          }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "navbar-item",
                              attrs: { slot: "trigger", role: "button" },
                              slot: "trigger"
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$auth.user().name))
                              ]),
                              _vm._v(" "),
                              _c("b-icon", { attrs: { icon: "menu-down" } })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              attrs: { "aria-role": "menu-item" },
                              on: { click: _vm.cart }
                            },
                            [
                              _c(
                                "a",
                                [
                                  _vm._v("Cart "),
                                  _c("b-icon", {
                                    attrs: { icon: "cart-outline" }
                                  })
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              attrs: { "aria-role": "menu-item" },
                              on: {
                                click: function($event) {
                                  return _vm.logout()
                                }
                              }
                            },
                            [_c("a", [_vm._v("Logout")])]
                          )
                        ],
                        1
                      )
                    : _c("div", { staticClass: "navbar-item" }, [
                        _c(
                          "div",
                          { staticClass: "buttons" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "button is-primary",
                                attrs: { to: "/register" }
                              },
                              [_c("strong", [_vm._v("Sign up")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "button is-light",
                                attrs: { to: "/login" }
                              },
                              [
                                _vm._v(
                                  "\n                Log in\n              "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                ],
                1
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/HeroLayout.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/HeroLayout.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroLayout_vue_vue_type_template_id_24e72096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeroLayout.vue?vue&type=template&id=24e72096& */ "./resources/js/components/layouts/HeroLayout.vue?vue&type=template&id=24e72096&");
/* harmony import */ var _HeroLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/HeroLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HeroLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroLayout_vue_vue_type_template_id_24e72096___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HeroLayout_vue_vue_type_template_id_24e72096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/HeroLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/HeroLayout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/HeroLayout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeroLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/HeroLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/HeroLayout.vue?vue&type=template&id=24e72096&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/HeroLayout.vue?vue&type=template&id=24e72096& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroLayout_vue_vue_type_template_id_24e72096___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HeroLayout.vue?vue&type=template&id=24e72096& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/HeroLayout.vue?vue&type=template&id=24e72096&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroLayout_vue_vue_type_template_id_24e72096___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroLayout_vue_vue_type_template_id_24e72096___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/NavbarLayout.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/layouts/NavbarLayout.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavbarLayout_vue_vue_type_template_id_ddecb3ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarLayout.vue?vue&type=template&id=ddecb3ea& */ "./resources/js/components/layouts/NavbarLayout.vue?vue&type=template&id=ddecb3ea&");
/* harmony import */ var _NavbarLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/NavbarLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavbarLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavbarLayout_vue_vue_type_template_id_ddecb3ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavbarLayout_vue_vue_type_template_id_ddecb3ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/NavbarLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/NavbarLayout.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/NavbarLayout.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavbarLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/NavbarLayout.vue?vue&type=template&id=ddecb3ea&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/layouts/NavbarLayout.vue?vue&type=template&id=ddecb3ea& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarLayout_vue_vue_type_template_id_ddecb3ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavbarLayout.vue?vue&type=template&id=ddecb3ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavbarLayout.vue?vue&type=template&id=ddecb3ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarLayout_vue_vue_type_template_id_ddecb3ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarLayout_vue_vue_type_template_id_ddecb3ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/mixins/gather-categories.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/mixins/gather-categories.js ***!
  \*************************************************************/
/*! exports provided: gatherCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gatherCategories", function() { return gatherCategories; });
var gatherCategories = {
  data: function data() {
    return {
      categories: []
    };
  },
  methods: {
    gatherCategories: function gatherCategories() {
      var self = this;
      this.$api.get('/category/all').then(function (res) {
        self.categories = res.data.categories;
      }).catch(function (err) {
        console.log(err);
      });
    }
  },
  created: function created() {
    this.gatherCategories();
  }
};

/***/ })

}]);