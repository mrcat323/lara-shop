(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_HeroLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/HeroLayout */ "./resources/js/components/layouts/HeroLayout.vue");
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
      token: '',
      password: '',
      password_confirm: '',
      success: false,
      error: false,
      message: ''
    };
  },
  components: {
    Hero: _layouts_HeroLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    passwordConfirmed: function passwordConfirmed() {
      return this.password_confirm === this.password;
    }
  },
  methods: {
    resetPassword: function resetPassword() {
      var _this = this;

      var token = this.token,
          password = this.password;
      this.$http.post('/reset/now', {
        token: token,
        password: password
      }).then(function (res) {
        _this.message = res.data.msg;

        if (res.data.status === 1) {
          setTimeout(function () {
            _this.$router.push({
              name: 'login'
            });
          }, 5000);
        }

        return res.data.status === 1 ? _this.success = true : _this.error = true;
      }).catch(function (err) {
        return console.log(err);
      });
    }
  },
  created: function created() {
    this.token = this.$route.params.token;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        attrs: {
          title: "Reset Password",
          "sub-title": "Please type your new password to replace the old one"
        }
      }),
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
                    type: "is-success",
                    "aria-close-label": "Close message"
                  }
                },
                [_vm._v("\n            " + _vm._s(_vm.message) + "\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.error
            ? _c(
                "b-message",
                {
                  attrs: {
                    "has-icon": "",
                    title: "Error",
                    type: "is-danger",
                    "aria-close-label": "Close message"
                  }
                },
                [_vm._v("\n            " + _vm._s(_vm.message) + "\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-field",
            [
              _c("b-input", {
                attrs: {
                  type: "password",
                  placeholder: "Your New Password",
                  "password-reveal": ""
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
            [
              _c("b-input", {
                attrs: {
                  type: "password",
                  placeholder: "Please Confirm Your New Password",
                  "password-reveal": ""
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
          _c("b-field", [
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _vm.passwordConfirmed
                  ? _c(
                      "b-button",
                      {
                        attrs: {
                          type: "is-primary",
                          size: "is-medium",
                          outlined: ""
                        },
                        on: { click: _vm.resetPassword }
                      },
                      [_vm._v("Reset")]
                    )
                  : _c(
                      "b-button",
                      { attrs: { size: "is-medium", disabled: "" } },
                      [_vm._v("Reset")]
                    )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/ResetPasswordComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/pages/ResetPasswordComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPasswordComponent_vue_vue_type_template_id_2a110eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true& */ "./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true&");
/* harmony import */ var _ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPasswordComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPasswordComponent_vue_vue_type_template_id_2a110eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPasswordComponent_vue_vue_type_template_id_2a110eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a110eae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/ResetPasswordComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_template_id_2a110eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/ResetPasswordComponent.vue?vue&type=template&id=2a110eae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_template_id_2a110eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPasswordComponent_vue_vue_type_template_id_2a110eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);