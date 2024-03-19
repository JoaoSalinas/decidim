/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/src/decidim/comments/comments.component.js":
/*!**************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/src/decidim/comments/comments.component.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CommentsComponent; }
/* harmony export */ });
/* harmony import */ var src_decidim_change_report_form_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/change_report_form_behavior */ "./gems/decidim-module-core/app/packs/src/decidim/change_report_form_behavior.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/* eslint id-length: ["error", { "exceptions": ["$"] }] */
/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true}] */

/**
 * A plain Javascript component that handles the comments.
 *
 * @class
 * @augments Component
 */

// This is necessary for testing purposes
var $ = window.$;

var CommentsComponent = /*#__PURE__*/function () {
  function CommentsComponent($element, config) {
    _classCallCheck(this, CommentsComponent);
    this.$element = $element;
    this.commentableGid = config.commentableGid;
    this.commentsUrl = config.commentsUrl;
    this.rootDepth = config.rootDepth;
    this.order = config.order;
    this.lastCommentId = config.lastCommentId;
    this.pollingInterval = config.pollingInterval || 15000;
    this.singleComment = config.singleComment;
    this.toggleTranslations = config.toggleTranslations;
    this.id = this.$element.attr("id") || this._getUID();
    this.mounted = false;
  }

  /**
   * Handles the logic for mounting the component
   * @public
   * @returns {Void} - Returns nothing
   */
  _createClass(CommentsComponent, [{
    key: "mountComponent",
    value: function mountComponent() {
      var _this = this;
      if (this.$element.length > 0 && !this.mounted) {
        this.mounted = true;
        this._initializeComments(this.$element);
        if (!this.singleComment) {
          $(".add-comment textarea", this.$element).prop("disabled", true);
          this._fetchComments(function () {
            $(".add-comment textarea", _this.$element).prop("disabled", false);
          });
        }
      }
    }

    /**
     * Handles the logic for unmounting the component
     * @public
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "unmountComponent",
    value: function unmountComponent() {
      var _this2 = this;
      if (this.mounted) {
        this.mounted = false;
        this._stopPolling();
        $(".add-comment .opinion-toggle button", this.$element).off("click.decidim-comments");
        $(".add-comment textarea", this.$element).off("input.decidim-comments");
        $(".add-comment form", this.$element).off("submit.decidim-comments");
        $(".add-comment textarea", this.$element).each(function (_i, el) {
          return el.removeEventListener("emoji.added", _this2._onTextInput);
        });
      }
    }

    /**
     * Adds a new thread to the comments section.
     * @public
     * @param {String} threadHtml - The HTML content for the thread.
     * @param {Boolean} fromCurrentUser - A boolean indicating whether the user
     *   herself was the author of the new thread. Defaults to false.
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "addThread",
    value: function addThread(threadHtml) {
      var fromCurrentUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var $parent = $(".comments:first", this.$element);
      var $comment = $(threadHtml);
      var $threads = $(".comment-threads", this.$element);
      this._addComment($threads, $comment);
      this._finalizeCommentCreation($parent, fromCurrentUser);
    }

    /**
     * Adds a new reply to an existing comment.
     * @public
     * @param {Number} commentId - The ID of the comment for which to add the
     *   reply to.
     * @param {String} replyHtml - The HTML content for the reply.
     * @param {Boolean} fromCurrentUser - A boolean indicating whether the user
     *   herself was the author of the new reply. Defaults to false.
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "addReply",
    value: function addReply(commentId, replyHtml) {
      var fromCurrentUser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var $parent = $("#comment_".concat(commentId));
      var $comment = $(replyHtml);
      var $replies = $("#comment-".concat(commentId, "-replies"));
      this._addComment($replies, $comment);
      $replies.addClass("comment-reply");
      this._finalizeCommentCreation($parent, fromCurrentUser);
    }

    /**
     * Generates a unique identifier for the form.
     * @private
     * @returns {String} - Returns a unique identifier
     */
  }, {
    key: "_getUID",
    value: function _getUID() {
      return "comments-".concat(new Date().setUTCMilliseconds(), "-").concat(Math.floor(Math.random() * 10000000));
    }

    /**
     * Initializes the comments for the given parent element.
     * @private
     * @param {jQuery} $parent The parent element to initialize.
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_initializeComments",
    value: function _initializeComments($parent) {
      var _this3 = this;
      $(".add-comment", $parent).each(function (_i, el) {
        var $add = $(el);
        var $form = $("form", $add);
        var $opinionButtons = $(".opinion-toggle button", $add);
        var $text = $("textarea", $form);
        $opinionButtons.on("click.decidim-comments", _this3._onToggleOpinion);
        $text.on("input.decidim-comments", _this3._onTextInput);
        $(document).trigger("attach-mentions-element", [$text.get(0)]);
        $form.on("submit.decidim-comments", function () {
          var $submit = $("button[type='submit']", $form);
          $submit.attr("disabled", "disabled");
          _this3._stopPolling();
        });
        document.querySelectorAll(".new_report").forEach(function (container) {
          return (0,src_decidim_change_report_form_behavior__WEBPACK_IMPORTED_MODULE_0__["default"])(container);
        });
        if ($text.length && $text.get(0) !== null) {
          // Attach event to the DOM node, instead of the jQuery object
          $text.get(0).addEventListener("emoji.added", _this3._onTextInput);
        }
      });
    }

    /**
     * Adds the given comment element to the given target element and
     * initializes it.
     * @private
     * @param {jQuery} $target - The target element to add the comment to.
     * @param {jQuery} $container - The comment container element to add.
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_addComment",
    value: function _addComment($target, $container) {
      var $comment = $(".comment", $container);
      if ($comment.length < 1) {
        // In case of a reply
        $comment = $container;
      }
      this.lastCommentId = parseInt($comment.data("comment-id"), 10);
      $target.append($container);
      this._initializeComments($container);
      document.dispatchEvent(new CustomEvent("comments:loaded", {
        detail: {
          commentsIds: [this.lastCommentId]
        }
      }));
    }

    /**
     * Finalizes the new comment creation after the comment adding finishes
     * successfully.
     * @private
     * @param {jQuery} $parent - The parent comment element to finalize.
     * @param {Boolean} fromCurrentUser - A boolean indicating whether the user
     *   herself was the author of the new comment.
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_finalizeCommentCreation",
    value: function _finalizeCommentCreation($parent, fromCurrentUser) {
      if (fromCurrentUser) {
        var $add = $(".add-comment", $parent);
        $("textarea", $add).each(function (_i, text) {
          var $text = $(text);
          // Reset textarea content
          $text.val("");
          // Update characterCounter component
          var characterCounter = $text.data("remaining-characters-counter");
          if (characterCounter) {
            characterCounter.handleInput();
            characterCounter.updateStatus();
          }
        });
      }

      // Restart the polling
      this._pollComments();
    }

    /**
     * Sets a timeout to poll new comments.
     * @private
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_pollComments",
    value: function _pollComments() {
      var _this4 = this;
      this._stopPolling();
      this.pollTimeout = setTimeout(function () {
        _this4._fetchComments();
      }, this.pollingInterval);
    }

    /**
     * Sends an ajax request based on current
     * params to get comments for the component
     * @private
     * @param {Function} successCallback A callback that is called after a
     *   successful fetch
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_fetchComments",
    value: function _fetchComments() {
      var _this5 = this;
      var successCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      Rails.ajax({
        url: this.commentsUrl,
        type: "GET",
        data: new URLSearchParams(_objectSpread(_objectSpread({
          "commentable_gid": this.commentableGid,
          "root_depth": this.rootDepth,
          "order": this.order
        }, this.toggleTranslations && {
          "toggle_translations": this.toggleTranslations
        }), this.lastCommentId && {
          "after": this.lastCommentId
        })),
        success: function success() {
          if (successCallback) {
            successCallback();
          }
          _this5._pollComments();
        }
      });
    }

    /**
     * Stops polling for new comments.
     * @private
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_stopPolling",
    value: function _stopPolling() {
      if (this.pollTimeout) {
        clearTimeout(this.pollTimeout);
      }
    }

    /**
     * Sets the loading comments element visible in the view.
     * @private
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_setLoading",
    value: function _setLoading() {
      var $container = $("> #comments", this.$element);
      $("> .comments", $container).addClass("hidden");
      $("> .loading-comments", $container).removeClass("hidden");
    }

    /**
     * Event listener for the ordering links.
     * @private
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_onInitOrder",
    value: function _onInitOrder() {
      this._stopPolling();
      this._setLoading();
    }

    /**
     * Event listener for the opinion toggle buttons.
     * @private
     * @param {Event} ev - The event object.
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_onToggleOpinion",
    value: function _onToggleOpinion(ev) {
      var $btn = $(ev.target);
      if (!$btn.is("button")) {
        $btn = $btn.parents("button");
      }
      var $add = $btn.closest(".add-comment");
      var $form = $("form", $add);
      var $opinionButtons = $(".opinion-toggle button", $add);
      var $selectedState = $(".opinion-toggle .selected-state", $add);
      var $alignment = $(".alignment-input", $form);
      $opinionButtons.removeClass("is-active").attr("aria-pressed", "false");
      $btn.addClass("is-active").attr("aria-pressed", "true");
      if ($btn.is(".opinion-toggle--ok")) {
        $alignment.val(1);
      } else if ($btn.is(".opinion-toggle--meh")) {
        $alignment.val(0);
      } else if ($btn.is(".opinion-toggle--ko")) {
        $alignment.val(-1);
      }

      // Announce the selected state for the screen reader
      $selectedState.text($btn.data("selected-label"));
    }

    /**
     * Event listener for the comment field text input.
     * @private
     * @param {Event} ev - The event object.
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "_onTextInput",
    value: function _onTextInput(ev) {
      var $text = $(ev.target);
      var $add = $text.closest(".add-comment");
      var $form = $("form", $add);
      var $submit = $("button[type='submit']", $form);
      if ($text.val().length > 0) {
        $submit.removeAttr("disabled");
      } else {
        $submit.attr("disabled", "disabled");
      }
    }
  }]);
  return CommentsComponent;
}();


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/src/decidim/comments/comments.js":
/*!****************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/src/decidim/comments/comments.js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/comments/comments.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/src/decidim/comments/comments.component.js");

window.Decidim.CommentsComponent = src_decidim_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__["default"];
var commentsInitializer = function commentsInitializer() {
  // Mount comments component
  $("[data-decidim-comments]").each(function (_i, el) {
    var $el = $(el);
    var comments = $(el).data("comments");
    if (!comments) {
      comments = new src_decidim_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__["default"]($el, $el.data("decidim-comments"));
    }
    comments.mountComponent();
    $(el).data("comments", comments);
  });
};

// If no jQuery is used the Tribute feature used in comments to autocomplete
// mentions stops working
$(function () {
  return commentsInitializer();
});

/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/change_report_form_behavior.js":
/*!***************************************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/change_report_form_behavior.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ changeReportFormBehavior; }
/* harmony export */ });
/**
 * These set of functions aims to change the behavior of the report modal forms
 * so that when checking various checkboxes, to change the label of the button
 * to either report or hide.
 * Given the behavior is similar for report content and report user, we have the
 * functionality grouped in one single function.
 * It is important to note that the report user modal has a checkbox that allows
 * the admin to block the user in the report user modal.
 */

/**
 * @param {DomElement} input The checkbox that is being checked
 * @return {Void} Nothing
 */
var changeLabel = function changeLabel(input) {
  var submit = input.closest("form").querySelector("button[type=submit]");
  if (submit.querySelector("span") !== null) {
    submit = submit.querySelector("span");
  }
  if (input.checked === true) {
    submit.innerHTML = input.dataset.labelAction;
  } else {
    submit.innerHTML = input.dataset.labelReport;
  }
};

/**
 * @param {Object} container The form handling the report.
 * @return {Void} Nothing
 */
function changeReportFormBehavior(container) {
  container.querySelectorAll("[data-hide=true]").forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      changeLabel(event.target);
    });
  });
  container.querySelectorAll("[data-block=true]").forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      changeLabel(event.target);
      var blockAndHide = event.target.closest("form").querySelector("#block_and_hide");
      blockAndHide.classList.toggle("invisible");
    });
  });
}

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/stylesheets/comments.scss":
/*!*********************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/stylesheets/comments.scss ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/entrypoints/decidim_comments.js ***!
  \***************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stylesheets_comments_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylesheets/comments.scss */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/stylesheets/comments.scss");
/* harmony import */ var src_decidim_comments_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/comments/comments */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-comments-0.28.0/app/packs/src/decidim/comments/comments.js");
// CSS


// Javacript

}();
/******/ })()
;
//# sourceMappingURL=decidim_comments.js.map