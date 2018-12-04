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
  if (cart === null || cart === undefined) return 0;
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

/***/ })

})
//# sourceMappingURL=_app.js.9537386038a4cfc349a4.hot-update.js.map