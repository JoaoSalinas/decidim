/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-accountability-0.28.0/app/packs/src/decidim/accountability/admin/imports.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-accountability-0.28.0/app/packs/src/decidim/accountability/admin/imports.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var toggleInfo = function toggleInfo(val) {
  document.querySelectorAll(".help-text").forEach(function (toBeHidden) {
    if (val === toBeHidden.id && toBeHidden.classList.value.includes("hide")) {
      toBeHidden.classList.remove("hide");
    } else {
      toBeHidden.classList.add("hide");
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var item = document.querySelector("#result_import_projects_origin_component_id");
  item.addEventListener("change", function (event) {
    toggleInfo("component_".concat(event.target.value));
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-accountability-0.28.0/app/packs/entrypoints/decidim_accountability_admin_imports.js ***!
  \*****************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_accountability_admin_imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/accountability/admin/imports */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-accountability-0.28.0/app/packs/src/decidim/accountability/admin/imports.js");

window.addEventListener("DOMContentLoaded", src_decidim_accountability_admin_imports__WEBPACK_IMPORTED_MODULE_0__["default"]);
}();
/******/ })()
;
//# sourceMappingURL=decidim_accountability_admin_imports.js.map