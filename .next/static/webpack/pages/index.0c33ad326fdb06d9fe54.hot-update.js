"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/leftElem.js":
/*!********************************!*\
  !*** ./components/leftElem.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LeftElements; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\shivanya chandra\\Desktop\\Personal\\Web-dev\\Code\\projects\\dashboard-core\\components\\leftElem.js";
function LeftElements() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "leftElements",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "leftElements__time",
        children: "4:20pm"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "leftElements__auto",
        children: "Auto"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "leftElements__battery box",
        children: "69% Battery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "leftElements__speed box",
        children: "100km/hr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
        className: "map",
        src: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56071.83802276225!2d77.3176630599809!3d28.555048975843174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stesla%20supercharger!5e0!3m2!1sen!2sin!4v1629058876308!5m2!1sen!2sin" // width="600"
        ,
        style: {
          height: "200"
        } // style="border:0;"
        ,
        allowfullscreen: "",
        loading: "lazy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "leftElements__maps box-2",
        children: ["Head south west ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 22
        }, this), " ETA: 29.78"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconElem, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}
_c = LeftElements;

var _c;

$RefreshReg$(_c, "LeftElements");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGMzM2FkMzI2ZmRiMDZkOWZlNTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsWUFBVCxHQUF3QjtBQUN0QyxzQkFDQztBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDQztBQUFNLGlCQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFNLGlCQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQztBQUFNLGlCQUFTLEVBQUMsMkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQsZUFJQztBQUFNLGlCQUFTLEVBQUMseUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsZUFLQztBQUNDLGlCQUFTLEVBQUMsS0FEWDtBQUVDLFdBQUcsRUFBQyxvT0FGTCxDQUdDO0FBSEQ7QUFJQyxhQUFLLEVBQUU7QUFBRUMsVUFBQUEsTUFBTSxFQUFFO0FBQVYsU0FKUixDQUtDO0FBTEQ7QUFNQyx1QkFBZSxFQUFDLEVBTmpCO0FBT0MsZUFBTyxFQUFDO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBYUM7QUFBTSxpQkFBUyxFQUFDLDBCQUFoQjtBQUFBLG9EQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQWtCQyw4REFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkQ7QUFBQSxrQkFERDtBQXNCQTtLQXZCdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGVmdEVsZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGVmdEVsZW1lbnRzKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlZnRFbGVtZW50c1wiPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxlZnRFbGVtZW50c19fdGltZVwiPjQ6MjBwbTwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsZWZ0RWxlbWVudHNfX2F1dG9cIj5BdXRvPC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxlZnRFbGVtZW50c19fYmF0dGVyeSBib3hcIj42OSUgQmF0dGVyeTwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsZWZ0RWxlbWVudHNfX3NwZWVkIGJveFwiPjEwMGttL2hyPC9zcGFuPlxyXG5cdFx0XHRcdDxpZnJhbWVcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1hcFwiXHJcblx0XHRcdFx0XHRzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTYhMW0xMiExbTMhMWQ1NjA3MS44MzgwMjI3NjIyNSEyZDc3LjMxNzY2MzA1OTk4MDkhM2QyOC41NTUwNDg5NzU4NDMxNzQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITJtMSExc3Rlc2xhJTIwc3VwZXJjaGFyZ2VyITVlMCEzbTIhMXNlbiEyc2luITR2MTYyOTA1ODg3NjMwOCE1bTIhMXNlbiEyc2luXCJcclxuXHRcdFx0XHRcdC8vIHdpZHRoPVwiNjAwXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogXCIyMDBcIiB9fVxyXG5cdFx0XHRcdFx0Ly8gc3R5bGU9XCJib3JkZXI6MDtcIlxyXG5cdFx0XHRcdFx0YWxsb3dmdWxsc2NyZWVuPVwiXCJcclxuXHRcdFx0XHRcdGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGVmdEVsZW1lbnRzX19tYXBzIGJveC0yXCI+XHJcblx0XHRcdFx0XHRIZWFkIHNvdXRoIHdlc3QgPGJyIC8+IEVUQTogMjkuNzhcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8SWNvbkVsZW0gLz5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxlZnRFbGVtZW50cyIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=