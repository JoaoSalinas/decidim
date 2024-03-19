/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-templates-0.28.0/app/packs/src/decidim/templates/admin/block_user_template_chooser.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-templates-0.28.0/app/packs/src/decidim/templates/admin/block_user_template_chooser.js ***!
  \*******************************************************************************************************************************************************/
/***/ (function() {

// Choose a Block User Message template, get it by AJAX and add the Template in the justification textarea
document.addEventListener("DOMContentLoaded", function () {
  var blockTemplateChooser = document.getElementById("block_template_chooser");
  if (blockTemplateChooser) {
    blockTemplateChooser.addEventListener("change", function () {
      var dropdown = document.getElementById("block_template_chooser");
      var url = dropdown.getAttribute("data-url");
      var templateId = dropdown.value;
      if (templateId === "") {
        return;
      }
      fetch("".concat(new URL(url).pathname, "?").concat(new URLSearchParams({
        id: templateId
      }))).then(function (response) {
        return response.json();
      }).then(function (data) {
        document.getElementById("block_user_justification").value = data.template;
      });
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-templates-0.28.0/app/packs/src/decidim/templates/admin/proposal_answer_template_chooser.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-templates-0.28.0/app/packs/src/decidim/templates/admin/proposal_answer_template_chooser.js ***!
  \************************************************************************************************************************************************************/
/***/ (function() {

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// Choose a Proposal Answer template, get it by AJAX and add the Template in the Proposal Answer textarea
document.addEventListener("DOMContentLoaded", function () {
  var proposalAnswerTemplateChooser = document.getElementById("proposal_answer_template_chooser");
  if (proposalAnswerTemplateChooser) {
    proposalAnswerTemplateChooser.addEventListener("change", function () {
      var dropdown = document.getElementById("proposal_answer_template_chooser");
      var url = dropdown.getAttribute("data-url");
      var templateId = dropdown.value;
      var proposalId = dropdown.dataset.proposal;
      if (templateId === "") {
        return;
      }
      fetch("".concat(new URL(url).pathname, "?").concat(new URLSearchParams({
        id: templateId,
        proposalId: proposalId
      }))).then(function (response) {
        return response.json();
      }).then(function (data) {
        document.getElementById("proposal_answer_internal_state_".concat(data.state)).click();
        var editorContainer = null;
        for (var _i = 0, _Object$entries = Object.entries(data.template); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          editorContainer = document.querySelector("[name=\"proposal_answer[answer_".concat(key, "]\"]")).nextElementSibling;
          var editor = editorContainer.querySelector(".ProseMirror").editor;
          editor.commands.setContent(value, true);
        }
      });
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
/*!***********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-templates-0.28.0/app/packs/entrypoints/decidim_templates_admin.js ***!
  \***********************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_templates_admin_block_user_template_chooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/templates/admin/block_user_template_chooser */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-templates-0.28.0/app/packs/src/decidim/templates/admin/block_user_template_chooser.js");
/* harmony import */ var src_decidim_templates_admin_block_user_template_chooser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_templates_admin_block_user_template_chooser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_templates_admin_proposal_answer_template_chooser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/templates/admin/proposal_answer_template_chooser */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-templates-0.28.0/app/packs/src/decidim/templates/admin/proposal_answer_template_chooser.js");
/* harmony import */ var src_decidim_templates_admin_proposal_answer_template_chooser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_templates_admin_proposal_answer_template_chooser__WEBPACK_IMPORTED_MODULE_1__);


}();
/******/ })()
;
//# sourceMappingURL=decidim_templates_admin.js.map