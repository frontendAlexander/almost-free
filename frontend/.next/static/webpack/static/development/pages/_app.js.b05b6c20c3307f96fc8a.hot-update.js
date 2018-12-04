webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/sum.js":
/*!********************!*\
  !*** ./lib/sum.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcTotalPrice; });
function calcTotalPrice(cart) {
  if (cart === 'undefined') return 0;
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

/***/ })

})
//# sourceMappingURL=_app.js.b05b6c20c3307f96fc8a.hot-update.js.map