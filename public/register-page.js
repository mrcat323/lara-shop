(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/RegisterComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/HeroLayout.vue */ "./resources/js/components/layouts/HeroLayout.vue");
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
  components: {
    Hero: _layouts_HeroLayout_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
      success: false,
      error: false,
      errormsg: '',
      errors: {}
    };
  },
  methods: {
    register: function register() {
      var self = this;
      this.$auth.register({
        data: {
          name: self.name,
          email: self.email,
          password: self.password,
          password_confirmation: self.password_confirm
        },
        success: function success() {
          self.success = true;
        },
        error: function error(res) {
          self.error = true;
          self.errormsg = res.response.data.error;
          self.errors = res.response.data.errors || {};
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/RegisterComponent.vue?vue&type=template&id=4ef817f4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/RegisterComponent.vue?vue&type=template&id=4ef817f4& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      "div",
      { staticClass: "hero-register" },
      [
        _c("hero", {
          attrs: {
            title: "Register",
            "sub-title": "Sign up to create an account"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container section" },
      [
        _vm.success
          ? _c(
              "b-message",
              {
                attrs: {
                  "has-icon": "",
                  title: "Success",
                  type: "is-warning",
                  "aria-close-label": "Close message"
                }
              },
              [
                _vm._v(
                  "\n    \tPlease make sure you verified your E-Mail address. Please check out your E-Mail to verify your account\n  \t"
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "box" }, [
          _c(
            "form",
            {
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.register($event)
                }
              }
            },
            [
              _c(
                "b-field",
                { attrs: { horizontal: "", label: "Name" } },
                [
                  _c("b-input", {
                    attrs: {
                      placeholder: "Your Name",
                      name: "name",
                      expanded: ""
                    },
                    model: {
                      value: _vm.name,
                      callback: function($$v) {
                        _vm.name = $$v
                      },
                      expression: "name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                { attrs: { horizontal: "", label: "E-Mail" } },
                [
                  _c("b-input", {
                    attrs: {
                      placeholder: "Your E-Mail",
                      name: "email",
                      type: "email",
                      expanded: ""
                    },
                    model: {
                      value: _vm.email,
                      callback: function($$v) {
                        _vm.email = $$v
                      },
                      expression: "email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                { attrs: { horizontal: "", label: "Password" } },
                [
                  _c("b-input", {
                    attrs: {
                      placeholder: "Your password",
                      name: "password",
                      type: "password",
                      expanded: ""
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                { attrs: { horizontal: "", label: "Password confirm" } },
                [
                  _c("b-input", {
                    attrs: {
                      placeholder: "Confirm your password",
                      name: "password-confirm",
                      type: "password",
                      expanded: ""
                    },
                    model: {
                      value: _vm.password_confirm,
                      callback: function($$v) {
                        _vm.password_confirm = $$v
                      },
                      expression: "password_confirm"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("b-field", { attrs: { horizontal: "" } }, [
                _c("p", { staticClass: "control" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button is-medium is-primary",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Register")]
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/RegisterComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/pages/RegisterComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterComponent_vue_vue_type_template_id_4ef817f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=template&id=4ef817f4& */ "./resources/js/components/pages/RegisterComponent.vue?vue&type=template&id=4ef817f4&");
/* harmony import */ var _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterComponent_vue_vue_type_template_id_4ef817f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterComponent_vue_vue_type_template_id_4ef817f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/RegisterComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/RegisterComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/pages/RegisterComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/RegisterComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/RegisterComponent.vue?vue&type=template&id=4ef817f4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/RegisterComponent.vue?vue&type=template&id=4ef817f4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_4ef817f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterComponent.vue?vue&type=template&id=4ef817f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/RegisterComponent.vue?vue&type=template&id=4ef817f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_4ef817f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterComponent_vue_vue_type_template_id_4ef817f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);