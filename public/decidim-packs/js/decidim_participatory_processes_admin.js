/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-participatory_processes-0.28.0/app/packs/src/decidim/participatory_processes/admin/participatory_processes.js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-participatory_processes-0.28.0/app/packs/src/decidim/participatory_processes/admin/participatory_processes.js ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $participatoryProcessScopeEnabled = $("#participatory_process_scopes_enabled");
  var $participatoryProcessScopeId = $("#participatory_process_scope_id");
  var $participatoryProcessScopeTypeId = $("#participatory_process_scope_type_max_depth_id");
  if ($(".edit_participatory_process, .new_participatory_process").length > 0) {
    $participatoryProcessScopeEnabled.on("change", function (event) {
      var checked = event.target.checked;
      $participatoryProcessScopeId.attr("disabled", !checked);
      if (checked === true) {
        $participatoryProcessScopeTypeId.removeAttr("disabled");
      } else {
        $participatoryProcessScopeTypeId.attr("disabled", true);
      }
      $participatoryProcessScopeId.attr("disabled", !$participatoryProcessScopeEnabled.prop("checked"));
    });
  }
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-participatory_processes-0.28.0/app/packs/entrypoints/decidim_participatory_processes_admin.js ***!
  \***************************************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_participatory_processes_admin_participatory_processes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/participatory_processes/admin/participatory_processes */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-participatory_processes-0.28.0/app/packs/src/decidim/participatory_processes/admin/participatory_processes.js");
/* harmony import */ var src_decidim_participatory_processes_admin_participatory_processes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_participatory_processes_admin_participatory_processes__WEBPACK_IMPORTED_MODULE_0__);

}();
/******/ })()
;
//# sourceMappingURL=decidim_participatory_processes_admin.js.map