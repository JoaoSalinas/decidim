/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/images sync recursive ^\\.\\/.*$":
/*!****************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/images/ sync ^\.\/.*$ ***!
  \****************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./decidim/budgets/decidim_budgets.svg": "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/images/decidim/budgets/decidim_budgets.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/exit_handler.js":
/*!******************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/exit_handler.js ***!
  \******************************************************************************************************************************/
/***/ (function() {

var currentAllocationZero = function currentAllocationZero() {
  var $budgetSummary = $(".budget-summary__progressbox");
  return parseInt($budgetSummary.attr("data-current-allocation"), 10) === 0;
};
var isSafeUrl = function isSafeUrl(exitUrl) {
  if (!exitUrl) {
    return false;
  }
  var safeUrls = [$(".budget-summary").attr("data-safe-url").replace(location.origin, ""), "".concat(location.pathname, "#"), "".concat(location.href, "#"), "#"];
  var safe = false;
  safeUrls.forEach(function (url) {
    if (exitUrl.startsWith(url)) {
      safe = true;
    }
  });
  return safe;
};
var allowExitFrom = function allowExitFrom($el) {
  if (currentAllocationZero()) {
    return true;
  } else if ($el.attr("target") === "_blank") {
    return true;
  } else if ($el.parents("#loginModal").length > 0) {
    return true;
  } else if ($el.parents("#authorizationModal").length > 0) {
    return true;
  } else if ($el.attr("id") === "exit-notification-link") {
    return true;
  } else if ($el.parents("main").length > 0) {
    return true;
  } else if (isSafeUrl($el.attr("href"))) {
    return true;
  } else if (document.querySelector(".panel-container") && document.querySelector(".panel-container").contains($el[0])) {
    return true;
  }
  return false;
};
$(function () {
  var $exitNotification = $("#exit-notification");
  var $exitLink = $("#exit-notification-link");
  var defaultExitUrl = $exitLink.attr("href");
  var defaultExitLinkText = $exitLink.text();
  var signOutPath = window.Decidim.config.get("sign_out_path");
  var exitLinkText = defaultExitLinkText;
  if ($exitNotification.length < 1) {
    // Do not apply when not inside the voting pipeline
    return;
  }
  var openExitNotification = function openExitNotification(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (method && method !== "get") {
      $exitLink.attr("data-method", method);
    } else {
      $exitLink.removeAttr("data-method");
    }
    $exitLink.attr("href", url);
    $exitLink.html(exitLinkText);
    window.Decidim.currentDialogs["exit-notification"].open();
  };
  $(document).on("click", "a", function (event) {
    exitLinkText = defaultExitLinkText;
    var $link = $(event.currentTarget);
    if (!allowExitFrom($link)) {
      event.preventDefault();
      openExitNotification($link.attr("href"), $link.data("method"));
    }
  });
  // Custom handling for the header sign out so that it will not trigger the
  // logout form submit and so that it changes the exit link text. This does
  // not trigger the document link click listener because it has the
  // data-method attribute to trigger a form submit event.
  $("[href='".concat(signOutPath, "']")).on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var $link = $(event.currentTarget);
    exitLinkText = $link.text();
    openExitNotification($link.attr("href"), $link.data("method"));
  });
  // Custom handling for the exit link which needs to change the exit link
  // text to the default text as this is not handled by the document click
  // listener.
  $("a[data-dialog-open='exit-notification']").on("click", function () {
    exitLinkText = defaultExitLinkText;
    openExitNotification(defaultExitUrl);
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/progressFixed.js":
/*!*******************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/progressFixed.js ***!
  \*******************************************************************************************************************************/
/***/ (function() {

$(function () {
  var checkProgressPosition = function checkProgressPosition() {
    var progressRef = document.querySelectorAll("[data-progress-reference]");
    if (progressRef.length) {
      var progressFix = document.querySelectorAll("[data-progressbox-fixed]");
      var selectedProgressRef = "";
      var selectedProgressFix = "";
      var progressVisibleClass = "is-progressbox-visible";
      if (window.matchMedia("(min-width: 768px)").matches) {
        selectedProgressRef = progressRef[1];
        selectedProgressFix = progressFix[1];
      } else {
        selectedProgressRef = progressRef[0];
        selectedProgressFix = progressFix[0];
      }
      if (!progressRef) {
        return;
      }
      var progressPosition = selectedProgressRef.getBoundingClientRect().bottom;
      if (progressPosition > 0) {
        selectedProgressFix.classList.remove(progressVisibleClass);
      } else {
        selectedProgressFix.classList.add(progressVisibleClass);
      }
    }
  };
  window.addEventListener("scroll", checkProgressPosition);
  window.DecidimBudgets = window.DecidimBudgets || {};
  window.DecidimBudgets.checkProgressPosition = checkProgressPosition;
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/projects.js":
/*!**************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/projects.js ***!
  \**************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $projects = $("#projects, #project-item");
  var $budgetSummaryTotal = $(".budget-summary__progressbar-marks_right");
  var selectBudgetSummaryTotal = $budgetSummaryTotal.data("totalAllocation");
  var $budgetSummary = $(".budget-summary__progressbox");
  var $voteButton = $(".budget-vote-button");
  var totalAllocation = parseInt(selectBudgetSummaryTotal, 10);
  var additionSelectorButtons = document.querySelectorAll(".budget__list--header .button__pill");
  var cancelEvent = function cancelEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  };
  $voteButton.on("click", "span", function () {
    $(".budget-list__action").click();
  });
  $projects.on("click", ".budget-list__action", function (event) {
    var currentAllocation = parseInt($budgetSummary.attr("data-current-allocation"), 10);
    var $currentTarget = $(event.currentTarget);
    var projectAllocation = parseInt($currentTarget.attr("data-allocation"), 10);
    if ($currentTarget.attr("disabled")) {
      cancelEvent(event);
    } else if ($currentTarget.attr("data-add") === "true" && currentAllocation + projectAllocation > totalAllocation) {
      window.Decidim.currentDialogs["budget-excess"].toggle();
      cancelEvent(event);
    }
  });
  additionSelectorButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      additionSelectorButtons.forEach(function (element) {
        element.classList.remove("button__pill--active");
      });
      event.currentTarget.classList.add("button__pill--active");
    });
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/stylesheets/budgets.scss":
/*!*******************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/stylesheets/budgets.scss ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/images/decidim/budgets/decidim_budgets.svg":
/*!*************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/images/decidim/budgets/decidim_budgets.svg ***!
  \*************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/decidim_budgets-63f448a8ecee4f8376a0.svg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/decidim-packs/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/entrypoints/decidim_budgets.js ***!
  \*************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_budgets_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/budgets/projects */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/projects.js");
/* harmony import */ var src_decidim_budgets_projects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_budgets_projects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_budgets_progressFixed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/budgets/progressFixed */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/progressFixed.js");
/* harmony import */ var src_decidim_budgets_progressFixed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_budgets_progressFixed__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_decidim_budgets_exit_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/budgets/exit_handler */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/src/decidim/budgets/exit_handler.js");
/* harmony import */ var src_decidim_budgets_exit_handler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(src_decidim_budgets_exit_handler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stylesheets_budgets_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylesheets/budgets.scss */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/stylesheets/budgets.scss");




// Images
__webpack_require__("../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-budgets-0.28.0/app/packs/images sync recursive ^\\.\\/.*$");

}();
/******/ })()
;
//# sourceMappingURL=decidim_budgets.js.map