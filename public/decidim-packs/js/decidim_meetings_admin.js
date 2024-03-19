/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_buttons_by_position.component.js":
/*!************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_buttons_by_position.component.js ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoButtonsByPositionComponent; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
var AutoButtonsByPositionComponent = /*#__PURE__*/function () {
  function AutoButtonsByPositionComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AutoButtonsByPositionComponent);
    this.listSelector = options.listSelector;
    this.hideOnFirstSelector = options.hideOnFirstSelector;
    this.hideOnLastSelector = options.hideOnLastSelector;
    this.run();
  }
  _createClass(AutoButtonsByPositionComponent, [{
    key: "run",
    value: function run() {
      var $list = $(this.listSelector);
      var hideOnFirst = this.hideOnFirstSelector;
      var hideOnLast = this.hideOnLastSelector;
      if ($list.length === 1) {
        var $item = $list.first();
        $item.find(hideOnFirst).hide();
        $item.find(hideOnLast).hide();
      } else {
        $list.each(function (idx, el) {
          if (el.id === $list.first().attr("id")) {
            $(el).find(hideOnFirst).hide();
            $(el).find(hideOnLast).show();
          } else if (el.id === $list.last().attr("id")) {
            $(el).find(hideOnLast).hide();
            $(el).find(hideOnFirst).show();
          } else {
            $(el).find(hideOnLast).show();
            $(el).find(hideOnFirst).show();
          }
        });
      }
    }
  }]);
  return AutoButtonsByPositionComponent;
}();


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_label_by_position.component.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_label_by_position.component.js ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoLabelByPositionComponent; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
var AutoLabelByPositionComponent = /*#__PURE__*/function () {
  function AutoLabelByPositionComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AutoLabelByPositionComponent);
    this.listSelector = options.listSelector;
    this.labelSelector = options.labelSelector;
    this.onPositionComputed = options.onPositionComputed;
    this.run();
  }
  _createClass(AutoLabelByPositionComponent, [{
    key: "run",
    value: function run() {
      var _this = this;
      var $list = $(this.listSelector);
      $list.each(function (idx, el) {
        var $label = $(el).find(_this.labelSelector);
        var labelContent = $label.html();
        if (labelContent.match(/#(\d+)/)) {
          $label.html(labelContent.replace(/#(\d+)/, "#".concat(idx + 1)));
        } else {
          $label.html("".concat(labelContent, " #").concat(idx + 1));
        }
        if (_this.onPositionComputed) {
          _this.onPositionComputed(el, idx);
        }
      });
    }
  }]);
  return AutoLabelByPositionComponent;
}();


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/dynamic_fields.component.js":
/*!**************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/dynamic_fields.component.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createDynamicFields; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
/* eslint-disable require-jsdoc */
var DynamicFieldsComponent = /*#__PURE__*/function () {
  function DynamicFieldsComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DynamicFieldsComponent);
    this.wrapperSelector = options.wrapperSelector;
    this.containerSelector = options.containerSelector;
    this.fieldSelector = options.fieldSelector;
    this.addFieldButtonSelector = options.addFieldButtonSelector;
    this.addSeparatorButtonSelector = options.addSeparatorButtonSelector;
    this.addTitleAndDescriptionButtonSelector = options.addTitleAndDescriptionButtonSelector;
    this.fieldTemplateSelector = options.fieldTemplateSelector;
    this.separatorTemplateSelector = options.separatorTemplateSelector;
    this.TitleAndDescriptionTemplateSelector = options.TitleAndDescriptionTemplateSelector;
    this.removeFieldButtonSelector = options.removeFieldButtonSelector;
    this.moveUpFieldButtonSelector = options.moveUpFieldButtonSelector;
    this.moveDownFieldButtonSelector = options.moveDownFieldButtonSelector;
    this.onAddField = options.onAddField;
    this.onRemoveField = options.onRemoveField;
    this.onMoveUpField = options.onMoveUpField;
    this.onMoveDownField = options.onMoveDownField;
    this.placeholderId = options.placeholderId;
    this.elementCounter = 0;
    this._enableInterpolation();
    this._activateFields();
    this._bindEvents();
  }
  _createClass(DynamicFieldsComponent, [{
    key: "_enableInterpolation",
    value: function _enableInterpolation() {
      $.fn.replaceAttribute = function (attribute, placeholder, value) {
        $(this).find("[".concat(attribute, "*=").concat(placeholder, "]")).addBack("[".concat(attribute, "*=").concat(placeholder, "]")).each(function (index, element) {
          $(element).attr(attribute, $(element).attr(attribute).replace(placeholder, value));
        });
        return this;
      };
      $.fn.template = function (placeholder, value) {
        // See the comment below in the `_addField()` method regarding the
        // `<template>` tag support in IE11.
        var $subtemplate = $(this).find("template, .decidim-template");
        if ($subtemplate.length > 0) {
          $subtemplate.html(function (index, oldHtml) {
            return $(oldHtml).template(placeholder, value)[0].outerHTML;
          });
        }

        // Handle those subtemplates that are mapped with the `data-template`
        // attribute. This is also because of the IE11 support.
        var $subtemplateParents = $(this).find("[data-template]");
        if ($subtemplateParents.length > 0) {
          $subtemplateParents.each(function (_i, elem) {
            var $self = $(elem);
            var $tpl = $($self.data("template"));

            // Duplicate the sub-template with a unique ID as there may be
            // multiple parent templates referring to the same sub-template.
            var $subtpl = $($tpl[0].outerHTML);
            var subtemplateId = "".concat($tpl.attr("id"), "-").concat(value);
            var subtemplateSelector = "#".concat(subtemplateId);
            $subtpl.attr("id", subtemplateId);
            $self.attr("data-template", subtemplateSelector).data("template", subtemplateSelector);
            $tpl.after($subtpl);
            $subtpl.html(function (index, oldHtml) {
              return $(oldHtml).template(placeholder, value)[0].outerHTML;
            });
          });
        }
        $(this).replaceAttribute("id", placeholder, value);
        $(this).replaceAttribute("name", placeholder, value);
        $(this).replaceAttribute("data-tabs-content", placeholder, value);
        $(this).replaceAttribute("for", placeholder, value);
        $(this).replaceAttribute("tabs_id", placeholder, value);
        $(this).replaceAttribute("href", placeholder, value);
        $(this).replaceAttribute("value", placeholder, value);
        return this;
      };
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this = this;
      $(this.wrapperSelector).on("click", this.addFieldButtonSelector, function (event) {
        return _this._bindSafeEvent(event, function () {
          return _this._addField(_this.fieldTemplateSelector);
        });
      });
      if (this.addSeparatorButtonSelector) {
        $(this.wrapperSelector).on("click", this.addSeparatorButtonSelector, function (event) {
          return _this._bindSafeEvent(event, function () {
            return _this._addField(_this.separatorTemplateSelector);
          });
        });
      }
      if (this.addTitleAndDescriptionButtonSelector) {
        $(this.wrapperSelector).on("click", this.addTitleAndDescriptionButtonSelector, function (event) {
          return _this._bindSafeEvent(event, function () {
            return _this._addField(_this.TitleAndDescriptionTemplateSelector);
          });
        });
      }
      $(this.wrapperSelector).on("click", this.removeFieldButtonSelector, function (event) {
        return _this._bindSafeEvent(event, function (target) {
          return _this._removeField(target);
        });
      });
      if (this.moveUpFieldButtonSelector) {
        $(this.wrapperSelector).on("click", this.moveUpFieldButtonSelector, function (event) {
          return _this._bindSafeEvent(event, function (target) {
            return _this._moveUpField(target);
          });
        });
      }
      if (this.moveDownFieldButtonSelector) {
        $(this.wrapperSelector).on("click", this.moveDownFieldButtonSelector, function (event) {
          return _this._bindSafeEvent(event, function (target) {
            return _this._moveDownField(target);
          });
        });
      }
    }
  }, {
    key: "_bindSafeEvent",
    value: function _bindSafeEvent(event, cb) {
      event.preventDefault();
      event.stopPropagation();
      try {
        return cb(event.target);
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
        return error;
      }
    }

    // Adds a field.
    //
    // template - A String matching the type of the template. Expected to be
    //  either ".decidim-question-template" or ".decidim-separator-template".
  }, {
    key: "_addField",
    value: function _addField() {
      var templateClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".decidim-template";
      var $wrapper = $(this.wrapperSelector);
      var $container = $wrapper.find(this.containerSelector);

      // Allow defining the template using a `data-template` attribute on the
      // wrapper element. This is to allow child templates which would otherwise
      // be impossible using `<script type="text/template">`. See the comment
      // below regarding the `<template>` tag and IE11.
      var templateSelector = $wrapper.data("template");
      var $template = null;
      if (templateSelector) {
        $template = $(templateSelector);
      }
      if ($template === null || $template.length < 1) {
        // To preserve IE11 backwards compatibility, the views are using
        // `<script type="text/template">` with a given `class` instead of
        // `<template>`. The `<template> tags are parsed in IE11 along with the
        // DOM which may cause the form elements inside them to break the forms
        // as they are submitted with them.
        $template = $wrapper.children("template, ".concat(templateClass));
      }
      var $newField = $($template.html()).template(this.placeholderId, this._getUID());
      $newField.find("ul.tabs").attr("data-tabs", true);
      var $lastQuestion = $container.find(this.fieldSelector).last();
      if ($lastQuestion.length > 0) {
        $lastQuestion.after($newField);
      } else {
        $newField.appendTo($container);
      }
      $newField.foundation();
      if (this.onAddField) {
        this.onAddField($newField);
      }
    }
  }, {
    key: "_removeField",
    value: function _removeField(target) {
      var $target = $(target);
      var $removedField = $target.parents(this.fieldSelector);
      var idInput = $removedField.find("input").filter(function (idx, input) {
        return input.name.match(/id/);
      });
      if (idInput.length > 0) {
        var deletedInput = $removedField.find("input").filter(function (idx, input) {
          return input.name.match(/delete/);
        });
        if (deletedInput.length > 0) {
          $(deletedInput[0]).val(true);
        }
        $removedField.addClass("hidden");
        $removedField.hide();
      } else {
        $removedField.remove();
      }
      if (this.onRemoveField) {
        this.onRemoveField($removedField);
      }
    }
  }, {
    key: "_moveUpField",
    value: function _moveUpField(target) {
      var $target = $(target);
      var $movedUpField = $target.parents(this.fieldSelector);
      $movedUpField.prev().before($movedUpField);
      if (this.onMoveUpField) {
        this.onMoveUpField($movedUpField);
      }
    }
  }, {
    key: "_moveDownField",
    value: function _moveDownField(target) {
      var $target = $(target);
      var $movedDownField = $target.parents(this.fieldSelector);
      $movedDownField.next().after($movedDownField);
      if (this.onMoveDownField) {
        this.onMoveDownField($movedDownField);
      }
    }
  }, {
    key: "_activateFields",
    value: function _activateFields() {
      var _this2 = this;
      // Move the `<script type="text/template">` elements to the bottom of the
      // list container so that they will not cause the question moving
      // functionality to break since it assumes that all children elements are
      // the dynamic field list child items.
      var $wrapper = $(this.wrapperSelector);
      var $container = $wrapper.find(this.containerSelector);
      $container.append($container.find("script"));
      $(this.fieldSelector).each(function (idx, el) {
        $(el).template(_this2.placeholderId, _this2._getUID());
        $(el).find("ul.tabs").attr("data-tabs", true);
      });
    }
  }, {
    key: "_getUID",
    value: function _getUID() {
      this.elementCounter += 1;
      return new Date().getTime() + this.elementCounter;
    }
  }]);
  return DynamicFieldsComponent;
}();
function createDynamicFields(options) {
  return new DynamicFieldsComponent(options);
}

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/field_dependent_inputs.component.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/field_dependent_inputs.component.js ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createFieldDependentInputs; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
/* eslint-disable require-jsdoc */
var FieldDependentInputsComponent = /*#__PURE__*/function () {
  function FieldDependentInputsComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, FieldDependentInputsComponent);
    this.controllerField = options.controllerField;
    this.wrapperSelector = options.wrapperSelector;
    this.dependentFieldsSelector = options.dependentFieldsSelector;
    this.dependentInputSelector = options.dependentInputSelector;
    this.enablingCondition = options.enablingCondition;
    this._bindEvent();
    this._run();
  }
  _createClass(FieldDependentInputsComponent, [{
    key: "_run",
    value: function _run() {
      var $controllerField = this.controllerField;
      var $dependentFields = $controllerField.parents(this.wrapperSelector).find(this.dependentFieldsSelector);
      var $dependentInputs = $dependentFields.find(this.dependentInputSelector);
      if (this.enablingCondition($controllerField)) {
        $dependentInputs.prop("disabled", false);
        $dependentFields.show();
      } else {
        $dependentInputs.prop("disabled", true);
        $dependentFields.hide();
      }
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this = this;
      this.controllerField.on("change", function () {
        _this._run();
      });
    }
  }]);
  return FieldDependentInputsComponent;
}();
function createFieldDependentInputs(options) {
  return new FieldDependentInputsComponent(options);
}

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js":
/*!*********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSortList; }
/* harmony export */ });
/* harmony import */ var html5sortable_dist_html5sortable_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html5sortable/dist/html5sortable.es */ "./node_modules/html5sortable/dist/html5sortable.es.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable require-jsdoc */

var SortListComponent = /*#__PURE__*/_createClass(
/**
 * Creates a sortable list using hmtl5sortable function.
 *
 * @param {String} sortListSelector The list selector that has to be sortable.
 * @param {Object} options An object containing the same options as html5sortable. It also includes
 *                an extra option `onSortUpdate`, a callback which returns the children collection
 *                whenever the list order has been changed.
 *
 * @returns {void} Nothing.
 */
function SortListComponent(sortListSelector, options) {
  _classCallCheck(this, SortListComponent);
  if ($(sortListSelector).length > 0) {
    (0,html5sortable_dist_html5sortable_es__WEBPACK_IMPORTED_MODULE_0__["default"])(sortListSelector, options)[0].addEventListener("sortupdate", function (event) {
      var $children = $(event.target).children();
      if (options.onSortUpdate) {
        options.onSortUpdate($children);
      }
    });
  }
});
function createSortList(sortListSelector, options) {
  return new SortListComponent(sortListSelector, options);
}

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/agendas.js":
/*!*********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/agendas.js ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/auto_buttons_by_position.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_buttons_by_position.component.js");
/* harmony import */ var src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/auto_label_by_position.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_label_by_position.component.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js");
/* harmony import */ var src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/dynamic_fields.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/dynamic_fields.component.js");




var wrapperSelector = ".meeting-agenda-items";
var fieldSelector = ".meeting-agenda-item";
var childsWrapperSelector = ".meeting-agenda-item-childs";
var childFieldSelector = ".meeting-agenda-item-child";
var autoLabelByPosition = new src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
  listSelector: ".meeting-agenda-item:not(.hidden)",
  labelSelector: ".card-title span:first",
  onPositionComputed: function onPositionComputed(el, idx) {
    $(el).find("input[name$=\\[position\\]]").val(idx);
  }
});
var autoButtonsByPosition = new src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
  listSelector: ".meeting-agenda-item:not(.hidden)",
  hideOnFirstSelector: ".move-up-agenda-item",
  hideOnLastSelector: ".move-down-agenda-item"
});
var createSortableList = function createSortableList() {
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_2__["default"])(".meeting-agenda-items-list:not(.published)", {
    handle: ".agenda-item-divider",
    placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
    forcePlaceholderSize: true,
    onSortUpdate: function onSortUpdate() {
      autoLabelByPosition.run();
    }
  });
};
var createSortableListChild = function createSortableListChild() {
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_2__["default"])(".meeting-agenda-item-childs-list:not(.published)", {
    handle: ".agenda-item-child-divider",
    placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
    forcePlaceholderSize: true,
    onSortUpdate: function onSortUpdate() {
      autoLabelByPosition.run();
    }
  });
};
var autoLabelByPositionChild = new src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
  listSelector: ".meeting-agenda-item-child:not(.hidden)",
  labelSelector: ".card-title span:first",
  onPositionComputed: function onPositionComputed(el, idx) {
    $(el).find("input[name$=\\[position\\]]").val(idx);
  }
});
var autoButtonsByPositionChild = new src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
  listSelector: ".meeting-agenda-item-child:not(.hidden)",
  hideOnFirstSelector: ".move-up-agenda-item-child",
  hideOnLastSelector: ".move-down-agenda-item-child"
});
var createDynamicFieldsForAgendaItemChilds = function createDynamicFieldsForAgendaItemChilds(fieldId) {
  return (0,src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_3__["default"])({
    placeholderId: "meeting-agenda-item-child-id",
    wrapperSelector: "#".concat(fieldId, " ").concat(childsWrapperSelector),
    containerSelector: ".meeting-agenda-item-childs-list",
    fieldSelector: childFieldSelector,
    addFieldButtonSelector: ".add-agenda-item-child",
    removeFieldButtonSelector: ".remove-agenda-item-child",
    moveUpFieldButtonSelector: ".move-up-agenda-item-child",
    moveDownFieldButtonSelector: ".move-down-agenda-item-child",
    onAddField: function onAddField($field) {
      createSortableListChild();
      $field[0].querySelectorAll(".editor-container").forEach(function (el) {
        window.createEditor(el);
      });
      autoLabelByPositionChild.run();
      autoButtonsByPositionChild.run();
    },
    onRemoveField: function onRemoveField() {
      autoLabelByPositionChild.run();
      autoButtonsByPositionChild.run();
    },
    onMoveUpField: function onMoveUpField() {
      autoLabelByPositionChild.run();
      autoButtonsByPositionChild.run();
    },
    onMoveDownField: function onMoveDownField() {
      autoLabelByPositionChild.run();
      autoButtonsByPositionChild.run();
    }
  });
};
var dynamicFieldsForAgendaItemChilds = {};
var setupInitialAgendaItemChildAttributes = function setupInitialAgendaItemChildAttributes($target) {
  var fieldId = $target.attr("id");
  dynamicFieldsForAgendaItemChilds[fieldId] = createDynamicFieldsForAgendaItemChilds(fieldId);
};
var hideDeletedAgendaItem = function hideDeletedAgendaItem($target) {
  var inputDeleted = $target.find("input[name$=\\[deleted\\]]").val();
  if (inputDeleted === "true") {
    $target.addClass("hidden");
    $target.hide();
  }
};
(0,src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_3__["default"])({
  placeholderId: "meeting-agenda-item-id",
  wrapperSelector: wrapperSelector,
  containerSelector: ".meeting-agenda-items-list",
  fieldSelector: fieldSelector,
  addFieldButtonSelector: ".add-agenda-item",
  removeFieldButtonSelector: ".remove-agenda-item",
  moveUpFieldButtonSelector: ".move-up-agenda-item",
  moveDownFieldButtonSelector: ".move-down-agenda-item",
  onAddField: function onAddField($field) {
    // createDynamicFieldsForAgendaItemChilds($field);
    setupInitialAgendaItemChildAttributes($field);
    createSortableList();
    $field.find(".editor-container").each(function (idx, el) {
      window.createEditor(el);
    });
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  },
  onRemoveField: function onRemoveField() {
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  },
  onMoveUpField: function onMoveUpField() {
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  },
  onMoveDownField: function onMoveDownField() {
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  }
});
createSortableList();
$(fieldSelector).each(function (idx, el) {
  var $target = $(el);
  hideDeletedAgendaItem($target);
  setupInitialAgendaItemChildAttributes($target);
});
autoLabelByPosition.run();
autoButtonsByPosition.run();
autoLabelByPositionChild.run();
autoButtonsByPositionChild.run();

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/destroy_meeting_alert.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/destroy_meeting_alert.js ***!
  \***********************************************************************************************************************************************/
/***/ (function() {

var removeNewlineAdjacentSpaces = function removeNewlineAdjacentSpaces(text) {
  return text.replace(/\n\s/g, "\n");
};
$(function () {
  var $confirmButton = $(".destroy-meeting-alert");
  if ($confirmButton.length > 0) {
    $confirmButton.on("click", function () {
      var alertText = "".concat($confirmButton.data("invalid-destroy-message"), " \n\n");
      alertText += removeNewlineAdjacentSpaces($confirmButton.data("proposal-titles"));
      alert(alertText); // eslint-disable-line no-alert
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/meetings_form.js":
/*!***************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/meetings_form.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/auto_buttons_by_position.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_buttons_by_position.component.js");
/* harmony import */ var src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/auto_label_by_position.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_label_by_position.component.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js");
/* harmony import */ var src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/dynamic_fields.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/dynamic_fields.component.js");
/* harmony import */ var src_decidim_admin_field_dependent_inputs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/admin/field_dependent_inputs.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/field_dependent_inputs.component.js");
/* harmony import */ var src_decidim_geocoding_attach_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/geocoding/attach_input */ "./gems/decidim-module-core/app/packs/src/decidim/geocoding/attach_input.js");






$(function () {
  var wrapperSelector = ".meeting-services";
  var fieldSelector = ".meeting-service";
  var autoLabelByPosition = new src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
    listSelector: ".meeting-service:not(.hidden)",
    labelSelector: ".card-title span:first",
    onPositionComputed: function onPositionComputed(el, idx) {
      $(el).find("input[name$=\\[position\\]]").val(idx);
    }
  });
  var autoButtonsByPosition = new src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
    listSelector: ".meeting-service:not(.hidden)",
    hideOnFirstSelector: ".move-up-service",
    hideOnLastSelector: ".move-down-service"
  });
  var createSortableList = function createSortableList() {
    (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_2__["default"])(".meeting-services-list:not(.published)", {
      handle: ".service-divider",
      placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
      forcePlaceholderSize: true,
      onSortUpdate: function onSortUpdate() {
        autoLabelByPosition.run();
      }
    });
  };
  var hideDeletedService = function hideDeletedService($target) {
    var inputDeleted = $target.find("input[name$=\\[deleted\\]]").val();
    if (inputDeleted === "true") {
      $target.addClass("hidden");
      $target.hide();
    }
  };
  (0,src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_3__["default"])({
    placeholderId: "meeting-service-id",
    wrapperSelector: wrapperSelector,
    containerSelector: ".meeting-services-list",
    fieldSelector: fieldSelector,
    addFieldButtonSelector: ".add-service",
    removeFieldButtonSelector: ".remove-service",
    moveUpFieldButtonSelector: ".move-up-service",
    moveDownFieldButtonSelector: ".move-down-service",
    onAddField: function onAddField() {
      createSortableList();
      autoLabelByPosition.run();
      autoButtonsByPosition.run();
    },
    onRemoveField: function onRemoveField() {
      autoLabelByPosition.run();
      autoButtonsByPosition.run();
    },
    onMoveUpField: function onMoveUpField() {
      autoLabelByPosition.run();
      autoButtonsByPosition.run();
    },
    onMoveDownField: function onMoveDownField() {
      autoLabelByPosition.run();
      autoButtonsByPosition.run();
    }
  });
  createSortableList();
  $(fieldSelector).each(function (idx, el) {
    var $target = $(el);
    hideDeletedService($target);
  });
  autoLabelByPosition.run();
  autoButtonsByPosition.run();
  var $form = $(".edit_meeting, .new_meeting, .copy_meetings");
  if ($form.length > 0) {
    var $privateMeeting = $form.find("#private_meeting");
    var $transparent = $form.find("#transparent");
    var toggleDisabledHiddenFields = function toggleDisabledHiddenFields() {
      var enabledPrivateSpace = $privateMeeting.find("input[type='checkbox']").prop("checked");
      $transparent.find("input[type='checkbox']").attr("disabled", "disabled");
      if (enabledPrivateSpace) {
        $transparent.find("input[type='checkbox']").attr("disabled", !enabledPrivateSpace);
      }
    };
    $privateMeeting.on("change", toggleDisabledHiddenFields);
    toggleDisabledHiddenFields();
    (0,src_decidim_geocoding_attach_input__WEBPACK_IMPORTED_MODULE_5__["default"])($form.find("#meeting_address"));
    var $meetingRegistrationType = $form.find("#meeting_registration_type");
    var $meetingRegistrationUrl = $form.find("#meeting_registration_url");
    var toggleDependsOnSelect = function toggleDependsOnSelect($target, $showDiv, type) {
      var value = $target.val();
      $showDiv.toggle(value === type);
    };
    $meetingRegistrationType.on("change", function (ev) {
      var $target = $(ev.target);
      toggleDependsOnSelect($target, $meetingRegistrationUrl, "on_different_platform");
    });
    toggleDependsOnSelect($meetingRegistrationType, $meetingRegistrationUrl, "on_different_platform");
    var $meetingTypeOfMeeting = $form.find("#meeting_type_of_meeting");
    var $meetingOnlineFields = $form.find(".field[data-meeting-type='online']");
    var $meetingInPersonFields = $form.find(".field[data-meeting-type='in_person']");
    var $meetingOnlineAccessLevelFields = $form.find(".field[data-meeting-type='online-access-level']");
    var $meetingIframeEmbedType = $form.find("#meeting_iframe_embed_type");
    var toggleTypeDependsOnSelect = function toggleTypeDependsOnSelect($target, $showDiv, type) {
      var value = $target.val();
      if (value === "hybrid") {
        $showDiv.show();
      } else {
        $showDiv.hide();
        if (value === type) {
          $showDiv.show();
        }
      }
    };
    $meetingTypeOfMeeting.on("change", function (ev) {
      var $target = $(ev.target);
      var embedTypeValue = $("#meeting_iframe_embed_type select").val();
      toggleTypeDependsOnSelect($target, $meetingOnlineFields, "online");
      toggleTypeDependsOnSelect($target, $meetingInPersonFields, "in_person");
      if (embedTypeValue === "none") {
        $meetingOnlineAccessLevelFields.hide();
      } else {
        toggleTypeDependsOnSelect($target, $meetingOnlineAccessLevelFields, "online");
      }
    });
    toggleTypeDependsOnSelect($meetingTypeOfMeeting, $meetingOnlineFields, "online");
    toggleTypeDependsOnSelect($meetingTypeOfMeeting, $meetingInPersonFields, "in_person");
    (0,src_decidim_admin_field_dependent_inputs_component__WEBPACK_IMPORTED_MODULE_4__["default"])({
      controllerField: $meetingIframeEmbedType,
      wrapperSelector: ".iframe-fields",
      dependentFieldsSelector: ".iframe-fields--access-level",
      dependentInputSelector: "input",
      enablingCondition: function enablingCondition($field) {
        return $field.find("select").val() !== "none";
      }
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/registrations_form.js":
/*!********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/registrations_form.js ***!
  \********************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $form = $(".edit_meeting_registrations");
  if ($form.length > 0) {
    var $registrationsEnabled = $form.find("#meeting_registrations_enabled");
    var $availableSlots = $form.find("#meeting_available_slots");
    var $reservedSlots = $form.find("#meeting_reserved_slots");
    var $customizeRegistrationEmail = $form.find("#meeting_customize_registration_email");
    $customizeRegistrationEmail.on("click", function (event) {
      if (event.target.checked) {
        $("#customize_registration_email-div").removeClass("hidden");
      } else {
        $("#customize_registration_email-div").addClass("hidden");
      }
    });
    var toggleDisabledFields = function toggleDisabledFields() {
      var enabled = $registrationsEnabled.prop("checked");
      $availableSlots.attr("disabled", !enabled);
      $reservedSlots.attr("disabled", !enabled);
      $customizeRegistrationEmail.attr("disabled", !enabled);
      $form[0].querySelectorAll(".editor-container .ProseMirror").forEach(function (node) {
        node.editor.setOptions({
          editable: enabled
        });
      });
    };
    $registrationsEnabled.on("change", toggleDisabledFields);
    toggleDisabledFields();
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/registrations_invite_form.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/registrations_invite_form.js ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_field_dependent_inputs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/field_dependent_inputs.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/field_dependent_inputs.component.js");

$(function () {
  var $attendeeType = $('[name="meeting_registration_invite[existing_user]"');
  (0,src_decidim_admin_field_dependent_inputs_component__WEBPACK_IMPORTED_MODULE_0__["default"])({
    controllerField: $attendeeType,
    wrapperSelector: ".attendee-fields",
    dependentFieldsSelector: ".attendee-fields--new-user",
    dependentInputSelector: "input",
    enablingCondition: function enablingCondition() {
      return $("#meeting_registration_invite_existing_user_false").is(":checked");
    }
  });
  (0,src_decidim_admin_field_dependent_inputs_component__WEBPACK_IMPORTED_MODULE_0__["default"])({
    controllerField: $attendeeType,
    wrapperSelector: ".attendee-fields",
    dependentFieldsSelector: ".attendee-fields--user-picker",
    dependentInputSelector: "input",
    enablingCondition: function enablingCondition() {
      return $("#meeting_registration_invite_existing_user_true").is(":checked");
    }
  });
});

/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/geocoding/attach_input.js":
/*!**********************************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/geocoding/attach_input.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ attachGeocoding; }
/* harmony export */ });
/* harmony import */ var src_decidim_geocoding_coordinate_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/geocoding/coordinate_input */ "./gems/decidim-module-core/app/packs/src/decidim/geocoding/coordinate_input.js");
/* eslint-disable require-jsdoc */


/**
 * You can use this method to "attach" front-end geocoding to any forms in the
 * front-end which have address fields with geocoding autocompletion
 * functionality already applied to them.
 *
 * To learn more about the front-end geocoding autocompletion, please refer to
 * the maps documentation at: /docs/customization/maps.md.
 *
 * When the geocoding autocompletion finishes, most of the times, its results
 * will also contain the geocoordinate information for the selected address.
 * This method allows you to pass these coordinates (latitude and longitude)
 * to the same front-end form where the geocoding autocompletion address field
 * is located at (which is the $input you pass to this method). The latitude
 * and longitude coordinates will be added or "attached" to the form once the
 * user selects one of the suggested addresses.
 *
 * Therefore, if there was the following geocoding autocompletion field at
 * your form:
 *   <input
 *     id="record_address"
 *     type="text"
 *     name="record[address]"
 *     data-decidim-geocoding="{&quot;url&quot;:&quot;https://photon.example.org/api/&quot;}"
 *   />
 *
 * You would then "attach" the geocoding result coordinates to the same form
 * where this input is at as follows:
 *   $(document).ready(function() {
 *     window.Decidim.attachGeocoding($("#record_address"));
 *   });
 *
 * Now, after the user selects one of the suggested geocoding autocompletion
 * addresses and the geocoding autocompletion API provides the coordinates in
 * the results, you would have the following fields automatically generated
 * to your form:
 *   <input id="record_address" type="text" name="record[address]" value="Selected address, 00210, City" ... />
 *   <input id="record_latitude" type="hidden" name="record[latitude]" value="1.123" />
 *   <input id="record_longitude" type="hidden" name="record[longitude]" value="2.234" />
 *
 * If you would not do the attachment, these hidden longitude and latitude
 * fields would not be generated and the geocoding would have to happen at the
 * server-side when the form is submitted. The problem with that approach
 * would be that the server-side address geocoding could potentially result in
 * different coordinates than what the user actually selected in the front-end
 * because the autocompletion API can return different coordinates than the
 * geocoding API. Another reason is to avoid unnecessary calls to the
 * geocoding API as the front-end geocoding suggestion already returned the
 * coordinate values we need.
 *
 * @param {jQuery} $input The input jQuery element for the geocoded address
 *   field.
 * @param {Object} options (optional) Extra options if you want to customize
 *   the latitude and longitude element IDs or names from the default.
 * @param {function} callback (optional) Callback to run when updating the coordinates values
 * @returns {void}
 */

function attachGeocoding($input, options, callback) {
  var attachOptions = $.extend({}, options);
  var inputIdParts = $input.attr("id").split("_");
  inputIdParts.pop();
  var idPrefix = "".concat(inputIdParts.join("_"));
  var latitudeName = "latitude";
  var longitudeName = "longitude";
  if ($input.length > 0) {
    latitudeName = (0,src_decidim_geocoding_coordinate_input__WEBPACK_IMPORTED_MODULE_0__["default"])("latitude", $input, attachOptions);
    longitudeName = (0,src_decidim_geocoding_coordinate_input__WEBPACK_IMPORTED_MODULE_0__["default"])("longitude", $input, attachOptions);
  }
  var config = $.extend({
    latitudeId: "".concat(idPrefix, "_latitude"),
    longitudeId: "".concat(idPrefix, "_longitude"),
    latitudeName: latitudeName,
    longitudeName: longitudeName
  }, options);
  var geocoded = false;
  var createCoordinateFields = function createCoordinateFields() {
    var $latitude = $("#".concat(config.latitudeId));
    if ($latitude.length < 1) {
      $latitude = $("<input type=\"hidden\" name=\"".concat(config.latitudeName, "\" id=\"").concat(config.latitudeId, "\" />"));
      $input.after($latitude);
    }
    var $longitude = $("#".concat(config.longitudeId));
    if ($longitude.length < 1) {
      $longitude = $("<input type=\"hidden\" name=\"".concat(config.longitudeName, "\" id=\"").concat(config.longitudeId, "\" />"));
      $input.after($longitude);
    }
  };
  var clearCoordinateFields = function clearCoordinateFields() {
    if (geocoded) {
      return;
    }
    $("#".concat(config.latitudeId)).val("").removeAttr("value");
    $("#".concat(config.longitudeId)).val("").removeAttr("value");
  };
  var setCoordinates = function setCoordinates(coordinates) {
    createCoordinateFields();
    $("#".concat(config.latitudeId)).val(coordinates[0]).attr("value", coordinates[0]);
    $("#".concat(config.longitudeId)).val(coordinates[1]).attr("value", coordinates[1]);
  };

  // When the user changes the value of the coordinate field without selecting
  // any of the geocoding autocomplete results, clear the current latitude and
  // longitude values to let the backend do the geocoding. Once a geocoding
  // autocomplete value has been selected, assume the user just wants to
  // refine the address formatting without changing the location point value.
  // If they want, they can still modify the point in the next step of the
  // proposal creation/editing.
  $input.on("change.decidim", function () {
    clearCoordinateFields();
  });

  // When we receive the geocoding event on the field, update the coordinate
  // values.
  $input.on("geocoder-suggest-coordinates.decidim", function (_ev, coordinates) {
    setCoordinates(coordinates);
    geocoded = true;
    if (typeof callback === "function") {
      callback(coordinates);
      return;
    }
  });

  // Set the initial values if the field defines the coordinates
  var coordinates = "".concat($input.data("coordinates")).split(",").map(parseFloat);
  if (Array.isArray(coordinates) && coordinates.length === 2) {
    setCoordinates(coordinates);
  }
}

/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/geocoding/coordinate_input.js":
/*!**************************************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/geocoding/coordinate_input.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getCoordinateInputName; }
/* harmony export */ });
/**
 * Get coordinate input name from a given $input
 * @param {string} coordinate - Allows to find 'latitude' or 'longitude' field.
 * @param {jQuery} $input - Address input field
 * @param {Object} options (optional) - Extra options
 * @returns {string} - Returns input name
 */
function getCoordinateInputName(coordinate, $input, options) {
  var key = "".concat(coordinate, "Name");
  if (options[key]) {
    return options[key];
  }
  var inputName = $input.attr("name");
  var subNameMatch = /\[[^\]]+\]$/;
  if (inputName.match(subNameMatch)) {
    return inputName.replace(subNameMatch, "[".concat(coordinate, "]"));
  }
  return coordinate;
}

/***/ }),

/***/ "./node_modules/html5sortable/dist/html5sortable.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/html5sortable/dist/html5sortable.es.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*
 * HTML5Sortable package
 * https://github.com/lukasoppermann/html5sortable
 *
 * Maintained by Lukas Oppermann <lukas@vea.re>
 *
 * Released under the MIT license.
 */
/**
 * Get or set data on element
 * @param {HTMLElement} element
 * @param {string} key
 * @param {any} value
 * @return {*}
 */
function addData(element, key, value) {
  if (value === undefined) {
    return element && element.h5s && element.h5s.data && element.h5s.data[key];
  } else {
    element.h5s = element.h5s || {};
    element.h5s.data = element.h5s.data || {};
    element.h5s.data[key] = value;
  }
}
/**
 * Remove data from element
 * @param {HTMLElement} element
 */
function removeData(element) {
  if (element.h5s) {
    delete element.h5s.data;
  }
}

/* eslint-env browser */
/**
 * Filter only wanted nodes
 * @param {NodeList|HTMLCollection|Array} nodes
 * @param {String} selector
 * @returns {Array}
 */
var filter = function filter(nodes, selector) {
  if (!(nodes instanceof NodeList || nodes instanceof HTMLCollection || nodes instanceof Array)) {
    throw new Error('You must provide a nodeList/HTMLCollection/Array of elements to be filtered.');
  }
  if (typeof selector !== 'string') {
    return Array.from(nodes);
  }
  return Array.from(nodes).filter(function (item) {
    return item.nodeType === 1 && item.matches(selector);
  });
};

/* eslint-env browser */
/* eslint-disable no-use-before-define */
var stores = new Map();
/* eslint-enable no-use-before-define */
/**
 * Stores data & configurations per Sortable
 * @param {Object} config
 */
var Store = /** @class */function () {
  function Store() {
    this._config = new Map(); // eslint-disable-line no-undef
    this._placeholder = undefined; // eslint-disable-line no-undef
    this._data = new Map(); // eslint-disable-line no-undef
  }
  Object.defineProperty(Store.prototype, "config", {
    /**
     * get the configuration map of a class instance
     * @method config
     * @return {object}
     */
    get: function get() {
      // transform Map to object
      var config = {};
      this._config.forEach(function (value, key) {
        config[key] = value;
      });
      // return object
      return config;
    },
    /**
     * set the configuration of a class instance
     * @method config
     * @param {object} config object of configurations
     */
    set: function set(config) {
      if (_typeof(config) !== 'object') {
        throw new Error('You must provide a valid configuration object to the config setter.');
      }
      // combine config with default
      var mergedConfig = Object.assign({}, config);
      // add config to map
      this._config = new Map(Object.entries(mergedConfig));
    },
    enumerable: false,
    configurable: true
  });
  /**
   * set individual configuration of a class instance
   * @method setConfig
   * @param  key valid configuration key
   * @param  value any value
   * @return void
   */
  Store.prototype.setConfig = function (key, value) {
    if (!this._config.has(key)) {
      throw new Error("Trying to set invalid configuration item: " + key);
    }
    // set config
    this._config.set(key, value);
  };
  /**
   * get an individual configuration of a class instance
   * @method getConfig
   * @param  key valid configuration key
   * @return any configuration value
   */
  Store.prototype.getConfig = function (key) {
    if (!this._config.has(key)) {
      throw new Error("Invalid configuration item requested: " + key);
    }
    return this._config.get(key);
  };
  Object.defineProperty(Store.prototype, "placeholder", {
    /**
     * get the placeholder for a class instance
     * @method placeholder
     * @return {HTMLElement|null}
     */
    get: function get() {
      return this._placeholder;
    },
    /**
     * set the placeholder for a class instance
     * @method placeholder
     * @param {HTMLElement} placeholder
     * @return {void}
     */
    set: function set(placeholder) {
      if (!(placeholder instanceof HTMLElement) && placeholder !== null) {
        throw new Error('A placeholder must be an html element or null.');
      }
      this._placeholder = placeholder;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * set an data entry
   * @method setData
   * @param {string} key
   * @param {any} value
   * @return {void}
   */
  Store.prototype.setData = function (key, value) {
    if (typeof key !== 'string') {
      throw new Error('The key must be a string.');
    }
    this._data.set(key, value);
  };
  /**
   * get an data entry
   * @method getData
   * @param {string} key an existing key
   * @return {any}
   */
  Store.prototype.getData = function (key) {
    if (typeof key !== 'string') {
      throw new Error('The key must be a string.');
    }
    return this._data.get(key);
  };
  /**
   * delete an data entry
   * @method deleteData
   * @param {string} key an existing key
   * @return {boolean}
   */
  Store.prototype.deleteData = function (key) {
    if (typeof key !== 'string') {
      throw new Error('The key must be a string.');
    }
    return this._data["delete"](key);
  };
  return Store;
}();
/**
 * @param {HTMLElement} sortableElement
 * @returns {Class: Store}
 */
var store = function store(sortableElement) {
  // if sortableElement is wrong type
  if (!(sortableElement instanceof HTMLElement)) {
    throw new Error('Please provide a sortable to the store function.');
  }
  // create new instance if not avilable
  if (!stores.has(sortableElement)) {
    stores.set(sortableElement, new Store());
  }
  // return instance
  return stores.get(sortableElement);
};

/**
 * @param {Array|HTMLElement} element
 * @param {Function} callback
 * @param {string} event
 */
function addEventListener(element, eventName, callback) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      addEventListener(element[i], eventName, callback);
    }
    return;
  }
  element.addEventListener(eventName, callback);
  store(element).setData("event" + eventName, callback);
}
/**
 * @param {Array<HTMLElement>|HTMLElement} element
 * @param {string} eventName
 */
function removeEventListener(element, eventName) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      removeEventListener(element[i], eventName);
    }
    return;
  }
  element.removeEventListener(eventName, store(element).getData("event" + eventName));
  store(element).deleteData("event" + eventName);
}

/**
 * @param {Array<HTMLElement>|HTMLElement} element
 * @param {string} attribute
 * @param {string} value
 */
function addAttribute(element, attribute, value) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      addAttribute(element[i], attribute, value);
    }
    return;
  }
  element.setAttribute(attribute, value);
}
/**
 * @param {Array|HTMLElement} element
 * @param {string} attribute
 */
function removeAttribute(element, attribute) {
  if (element instanceof Array) {
    for (var i = 0; i < element.length; ++i) {
      removeAttribute(element[i], attribute);
    }
    return;
  }
  element.removeAttribute(attribute);
}

/**
 * @param {HTMLElement} element
 * @returns {Object}
 */
var offset = function offset(element) {
  if (!element.parentElement || element.getClientRects().length === 0) {
    throw new Error('target element must be part of the dom');
  }
  var rect = element.getClientRects()[0];
  return {
    left: rect.left + window.pageXOffset,
    right: rect.right + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    bottom: rect.bottom + window.pageYOffset
  };
};

/**
 * Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed
 * @param {Function} func to debounce
 * @param {number} time to wait before calling function with latest arguments, 0 - no debounce
 * @returns {function} - debounced function
 */
var debounce = function debounce(func, wait) {
  if (wait === void 0) {
    wait = 0;
  }
  var timeout;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(void 0, args);
    }, wait);
  };
};

/* eslint-env browser */
/**
 * Get position of the element relatively to its sibling elements
 * @param {HTMLElement} element
 * @returns {number}
 */
var getIndex = function getIndex(element, elementList) {
  if (!(element instanceof HTMLElement) || !(elementList instanceof NodeList || elementList instanceof HTMLCollection || elementList instanceof Array)) {
    throw new Error('You must provide an element and a list of elements.');
  }
  return Array.from(elementList).indexOf(element);
};

/* eslint-env browser */
/**
 * Test whether element is in DOM
 * @param {HTMLElement} element
 * @returns {boolean}
 */
var isInDom = function isInDom(element) {
  if (!(element instanceof HTMLElement)) {
    throw new Error('Element is not a node element.');
  }
  return element.parentNode !== null;
};

/* eslint-env browser */
/**
 * Insert node before or after target
 * @param {HTMLElement} referenceNode - reference element
 * @param {HTMLElement} newElement - element to be inserted
 * @param {String} position - insert before or after reference element
 */
var insertNode = function insertNode(referenceNode, newElement, position) {
  if (!(referenceNode instanceof HTMLElement) || !(referenceNode.parentElement instanceof HTMLElement)) {
    throw new Error('target and element must be a node');
  }
  referenceNode.parentElement.insertBefore(newElement, position === 'before' ? referenceNode : referenceNode.nextElementSibling);
};
/**
 * Insert before target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
var insertBefore = function insertBefore(target, element) {
  return insertNode(target, element, 'before');
};
/**
 * Insert after target
 * @param {HTMLElement} target
 * @param {HTMLElement} element
 */
var insertAfter = function insertAfter(target, element) {
  return insertNode(target, element, 'after');
};

/* eslint-env browser */
/**
 * Filter only wanted nodes
 * @param {HTMLElement} sortableContainer
 * @param {Function} customSerializer
 * @returns {Array}
 */
var serialize = function serialize(sortableContainer, customItemSerializer, customContainerSerializer) {
  if (customItemSerializer === void 0) {
    customItemSerializer = function customItemSerializer(serializedItem, sortableContainer) {
      return serializedItem;
    };
  }
  if (customContainerSerializer === void 0) {
    customContainerSerializer = function customContainerSerializer(serializedContainer) {
      return serializedContainer;
    };
  }
  // check for valid sortableContainer
  if (!(sortableContainer instanceof HTMLElement) || !sortableContainer.isSortable === true) {
    throw new Error('You need to provide a sortableContainer to be serialized.');
  }
  // check for valid serializers
  if (typeof customItemSerializer !== 'function' || typeof customContainerSerializer !== 'function') {
    throw new Error('You need to provide a valid serializer for items and the container.');
  }
  // get options
  var options = addData(sortableContainer, 'opts');
  var item = options.items;
  // serialize container
  var items = filter(sortableContainer.children, item);
  var serializedItems = items.map(function (item) {
    return {
      parent: sortableContainer,
      node: item,
      html: item.outerHTML,
      index: getIndex(item, items)
    };
  });
  // serialize container
  var container = {
    node: sortableContainer,
    itemCount: serializedItems.length
  };
  return {
    container: customContainerSerializer(container),
    items: serializedItems.map(function (item) {
      return customItemSerializer(item, sortableContainer);
    })
  };
};

/* eslint-env browser */
/**
 * create a placeholder element
 * @param {HTMLElement} sortableElement a single sortable
 * @param {string|undefined} placeholder a string representing an html element
 * @param {string} placeholderClasses a string representing the classes that should be added to the placeholder
 */
var makePlaceholder = function makePlaceholder(sortableElement, placeholder, placeholderClass) {
  var _a;
  if (placeholderClass === void 0) {
    placeholderClass = 'sortable-placeholder';
  }
  if (!(sortableElement instanceof HTMLElement)) {
    throw new Error('You must provide a valid element as a sortable.');
  }
  // if placeholder is not an element
  if (!(placeholder instanceof HTMLElement) && placeholder !== undefined) {
    throw new Error('You must provide a valid element as a placeholder or set ot to undefined.');
  }
  // if no placeholder element is given
  if (placeholder === undefined) {
    if (['UL', 'OL'].includes(sortableElement.tagName)) {
      placeholder = document.createElement('li');
    } else if (['TABLE', 'TBODY'].includes(sortableElement.tagName)) {
      placeholder = document.createElement('tr');
      // set colspan to always all rows, otherwise the item can only be dropped in first column
      placeholder.innerHTML = '<td colspan="100"></td>';
    } else {
      placeholder = document.createElement('div');
    }
  }
  // add classes to placeholder
  if (typeof placeholderClass === 'string') {
    (_a = placeholder.classList).add.apply(_a, placeholderClass.split(' '));
  }
  return placeholder;
};

/* eslint-env browser */
/**
 * Get height of an element including padding
 * @param {HTMLElement} element an dom element
 */
var getElementHeight = function getElementHeight(element) {
  if (!(element instanceof HTMLElement)) {
    throw new Error('You must provide a valid dom element');
  }
  // get calculated style of element
  var style = window.getComputedStyle(element);
  // get only height if element has box-sizing: border-box specified
  if (style.getPropertyValue('box-sizing') === 'border-box') {
    return parseInt(style.getPropertyValue('height'), 10);
  }
  // pick applicable properties, convert to int and reduce by adding
  return ['height', 'padding-top', 'padding-bottom'].map(function (key) {
    var _int = parseInt(style.getPropertyValue(key), 10);
    return isNaN(_int) ? 0 : _int;
  }).reduce(function (sum, value) {
    return sum + value;
  });
};

/* eslint-env browser */
/**
 * Get width of an element including padding
 * @param {HTMLElement} element an dom element
 */
var getElementWidth = function getElementWidth(element) {
  if (!(element instanceof HTMLElement)) {
    throw new Error('You must provide a valid dom element');
  }
  // get calculated style of element
  var style = window.getComputedStyle(element);
  // pick applicable properties, convert to int and reduce by adding
  return ['width', 'padding-left', 'padding-right'].map(function (key) {
    var _int2 = parseInt(style.getPropertyValue(key), 10);
    return isNaN(_int2) ? 0 : _int2;
  }).reduce(function (sum, value) {
    return sum + value;
  });
};

/* eslint-env browser */
/**
 * get handle or return item
 * @param {Array<HTMLElement>} items
 * @param {string} selector
 */
var getHandles = function getHandles(items, selector) {
  if (!(items instanceof Array)) {
    throw new Error('You must provide a Array of HTMLElements to be filtered.');
  }
  if (typeof selector !== 'string') {
    return items;
  }
  return items
  // remove items without handle from array
  .filter(function (item) {
    return item.querySelector(selector) instanceof HTMLElement || item.shadowRoot && item.shadowRoot.querySelector(selector) instanceof HTMLElement;
  })
  // replace item with handle in array
  .map(function (item) {
    return item.querySelector(selector) || item.shadowRoot && item.shadowRoot.querySelector(selector);
  });
};

/**
 * @param {Event} event
 * @returns {HTMLElement}
 */
var getEventTarget = function getEventTarget(event) {
  return event.composedPath && event.composedPath()[0] || event.target;
};

/* eslint-env browser */
/**
 * defaultDragImage returns the current item as dragged image
 * @param {HTMLElement} draggedElement - the item that the user drags
 * @param {object} elementOffset - an object with the offsets top, left, right & bottom
 * @param {Event} event - the original drag event object
 * @return {object} with element, posX and posY properties
 */
var defaultDragImage = function defaultDragImage(draggedElement, elementOffset, event) {
  return {
    element: draggedElement,
    posX: event.pageX - elementOffset.left,
    posY: event.pageY - elementOffset.top
  };
};
/**
 * attaches an element as the drag image to an event
 * @param {Event} event - the original drag event object
 * @param {HTMLElement} draggedElement - the item that the user drags
 * @param {Function} customDragImage - function to create a custom dragImage
 * @return void
 */
var setDragImage = function setDragImage(event, draggedElement, customDragImage) {
  // check if event is provided
  if (!(event instanceof Event)) {
    throw new Error('setDragImage requires a DragEvent as the first argument.');
  }
  // check if draggedElement is provided
  if (!(draggedElement instanceof HTMLElement)) {
    throw new Error('setDragImage requires the dragged element as the second argument.');
  }
  // set default function of none provided
  if (!customDragImage) {
    customDragImage = defaultDragImage;
  }
  // check if setDragImage method is available
  if (event.dataTransfer && event.dataTransfer.setDragImage) {
    // get the elements offset
    var elementOffset = offset(draggedElement);
    // get the dragImage
    var dragImage = customDragImage(draggedElement, elementOffset, event);
    // check if custom function returns correct values
    if (!(dragImage.element instanceof HTMLElement) || typeof dragImage.posX !== 'number' || typeof dragImage.posY !== 'number') {
      throw new Error('The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].');
    }
    // needs to be set for HTML5 drag & drop to work
    event.dataTransfer.effectAllowed = 'copyMove';
    // Firefox requires it to use the event target's id for the data
    event.dataTransfer.setData('text/plain', getEventTarget(event).id);
    // set the drag image on the event
    event.dataTransfer.setDragImage(dragImage.element, dragImage.posX, dragImage.posY);
  }
};

/**
 * Check if curList accepts items from destList
 * @param {sortable} destination the container an item is move to
 * @param {sortable} origin the container an item comes from
 */
var listsConnected = function listsConnected(destination, origin) {
  // check if valid sortable
  if (destination.isSortable === true) {
    var acceptFrom = store(destination).getConfig('acceptFrom');
    // check if acceptFrom is valid
    if (acceptFrom !== null && acceptFrom !== false && typeof acceptFrom !== 'string') {
      throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');
    }
    if (acceptFrom !== null) {
      return acceptFrom !== false && acceptFrom.split(',').filter(function (sel) {
        return sel.length > 0 && origin.matches(sel);
      }).length > 0;
    }
    // drop in same list
    if (destination === origin) {
      return true;
    }
    // check if lists are connected with connectWith
    if (store(destination).getConfig('connectWith') !== undefined && store(destination).getConfig('connectWith') !== null) {
      return store(destination).getConfig('connectWith') === store(origin).getConfig('connectWith');
    }
  }
  return false;
};

/**
 * default configurations
 */
var defaultConfiguration = {
  items: null,
  // deprecated
  connectWith: null,
  // deprecated
  disableIEFix: null,
  acceptFrom: null,
  copy: false,
  placeholder: null,
  placeholderClass: 'sortable-placeholder',
  draggingClass: 'sortable-dragging',
  hoverClass: false,
  dropTargetContainerClass: false,
  debounce: 0,
  throttleTime: 100,
  maxItems: 0,
  itemSerializer: undefined,
  containerSerializer: undefined,
  customDragImage: null,
  orientation: 'vertical'
};

/**
 * make sure a function is only called once within the given amount of time
 * @param {Function} fn the function to throttle
 * @param {number} threshold time limit for throttling
 */
// must use function to keep this context
function throttle(fn, threshold) {
  var _this = this;
  if (threshold === void 0) {
    threshold = 250;
  }
  // check function
  if (typeof fn !== 'function') {
    throw new Error('You must provide a function as the first argument for throttle.');
  }
  // check threshold
  if (typeof threshold !== 'number') {
    throw new Error('You must provide a number as the second argument for throttle.');
  }
  var lastEventTimestamp = null;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var now = Date.now();
    if (lastEventTimestamp === null || now - lastEventTimestamp >= threshold) {
      lastEventTimestamp = now;
      fn.apply(_this, args);
    }
  };
}

/* eslint-env browser */
/**
 * enable or disable hoverClass on mouseenter/leave if container Items
 * @param {sortable} sortableContainer a valid sortableContainer
 * @param {boolean} enable enable or disable event
 */
// export default (sortableContainer: sortable, enable: boolean) => {
var enableHoverClass = function enableHoverClass(sortableContainer, enable) {
  if (typeof store(sortableContainer).getConfig('hoverClass') === 'string') {
    var hoverClasses_1 = store(sortableContainer).getConfig('hoverClass').split(' ');
    // add class on hover
    if (enable === true) {
      addEventListener(sortableContainer, 'mousemove', throttle(function (event) {
        // check of no mouse button was pressed when mousemove started == no drag
        if (event.buttons === 0) {
          filter(sortableContainer.children, store(sortableContainer).getConfig('items')).forEach(function (item) {
            var _a, _b;
            if (item !== event.target) {
              (_a = item.classList).remove.apply(_a, hoverClasses_1);
            } else {
              (_b = item.classList).add.apply(_b, hoverClasses_1);
            }
          });
        }
      }, store(sortableContainer).getConfig('throttleTime')));
      // remove class on leave
      addEventListener(sortableContainer, 'mouseleave', function () {
        filter(sortableContainer.children, store(sortableContainer).getConfig('items')).forEach(function (item) {
          var _a;
          (_a = item.classList).remove.apply(_a, hoverClasses_1);
        });
      });
      // remove events
    } else {
      removeEventListener(sortableContainer, 'mousemove');
      removeEventListener(sortableContainer, 'mouseleave');
    }
  }
};

/* eslint-env browser */
/*
 * variables global to the plugin
 */
var dragging;
var draggingHeight;
var draggingWidth;
/*
 * Keeps track of the initialy selected list, where 'dragstart' event was triggered
 * It allows us to move the data in between individual Sortable List instances
 */
// Origin List - data from before any item was changed
var originContainer;
var originIndex;
var originElementIndex;
var originItemsBeforeUpdate;
// Previous Sortable Container - we dispatch as sortenter event when a
// dragged item enters a sortableContainer for the first time
var previousContainer;
// Destination List - data from before any item was changed
var destinationItemsBeforeUpdate;
/**
 * remove event handlers from items
 * @param {Array|NodeList} items
 */
var removeItemEvents = function removeItemEvents(items) {
  removeEventListener(items, 'dragstart');
  removeEventListener(items, 'dragend');
  removeEventListener(items, 'dragover');
  removeEventListener(items, 'dragenter');
  removeEventListener(items, 'drop');
  removeEventListener(items, 'mouseenter');
  removeEventListener(items, 'mouseleave');
};
// Remove container events
var removeContainerEvents = function removeContainerEvents(originContainer, previousContainer) {
  if (originContainer) {
    removeEventListener(originContainer, 'dragleave');
  }
  if (previousContainer && previousContainer !== originContainer) {
    removeEventListener(previousContainer, 'dragleave');
  }
};
/**
 * getDragging returns the current element to drag or
 * a copy of the element.
 * Is Copy Active for sortable
 * @param {HTMLElement} draggedItem - the item that the user drags
 * @param {HTMLElement} sortable a single sortable
 */
var getDragging = function getDragging(draggedItem, sortable) {
  var ditem = draggedItem;
  if (store(sortable).getConfig('copy') === true) {
    ditem = draggedItem.cloneNode(true);
    addAttribute(ditem, 'aria-copied', 'true');
    draggedItem.parentElement.appendChild(ditem);
    ditem.style.display = 'none';
    ditem.oldDisplay = draggedItem.style.display;
  }
  return ditem;
};
/**
 * Remove data from sortable
 * @param {HTMLElement} sortable a single sortable
 */
var removeSortableData = function removeSortableData(sortable) {
  removeData(sortable);
  removeAttribute(sortable, 'aria-dropeffect');
};
/**
 * Remove data from items
 * @param {Array<HTMLElement>|HTMLElement} items
 */
var removeItemData = function removeItemData(items) {
  removeAttribute(items, 'aria-grabbed');
  removeAttribute(items, 'aria-copied');
  removeAttribute(items, 'draggable');
  removeAttribute(items, 'role');
};
/**
 * find sortable from element. travels up parent element until found or null.
 * @param {HTMLElement} element a single sortable
 * @param {Event} event - the current event. We need to pass it to be able to
 * find Sortable whith shadowRoot (document fragment has no parent)
 */
function findSortable(element, event) {
  if (event.composedPath) {
    return event.composedPath().find(function (el) {
      return el.isSortable;
    });
  }
  while (element.isSortable !== true) {
    element = element.parentElement;
  }
  return element;
}
/**
 * Dragging event is on the sortable element. finds the top child that
 * contains the element.
 * @param {HTMLElement} sortableElement a single sortable
 * @param {HTMLElement} element is that being dragged
 */
function findDragElement(sortableElement, element) {
  var options = addData(sortableElement, 'opts');
  var items = filter(sortableElement.children, options.items);
  var itemlist = items.filter(function (ele) {
    return ele.contains(element) || ele.shadowRoot && ele.shadowRoot.contains(element);
  });
  return itemlist.length > 0 ? itemlist[0] : element;
}
/**
 * Destroy the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var destroySortable = function destroySortable(sortableElement) {
  var opts = addData(sortableElement, 'opts') || {};
  var items = filter(sortableElement.children, opts.items);
  var handles = getHandles(items, opts.handle);
  // remove event handlers & data from sortable
  removeEventListener(sortableElement, 'dragover');
  removeEventListener(sortableElement, 'dragenter');
  removeEventListener(sortableElement, 'dragstart');
  removeEventListener(sortableElement, 'dragend');
  removeEventListener(sortableElement, 'drop');
  // remove event data from sortable
  removeSortableData(sortableElement);
  // remove event handlers & data from items
  removeEventListener(handles, 'mousedown');
  removeItemEvents(items);
  removeItemData(items);
  removeContainerEvents(originContainer, previousContainer);
  // clear sortable flag
  sortableElement.isSortable = false;
};
/**
 * Enable the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var enableSortable = function enableSortable(sortableElement) {
  var opts = addData(sortableElement, 'opts');
  var items = filter(sortableElement.children, opts.items);
  var handles = getHandles(items, opts.handle);
  addAttribute(sortableElement, 'aria-dropeffect', 'move');
  addData(sortableElement, '_disabled', 'false');
  addAttribute(handles, 'draggable', 'true');
  // @todo: remove this fix
  // IE FIX for ghost
  // can be disabled as it has the side effect that other events
  // (e.g. click) will be ignored
  if (opts.disableIEFix === false) {
    var spanEl = (document || window.document).createElement('span');
    if (typeof spanEl.dragDrop === 'function') {
      addEventListener(handles, 'mousedown', function () {
        if (items.indexOf(this) !== -1) {
          this.dragDrop();
        } else {
          var parent = this.parentElement;
          while (items.indexOf(parent) === -1) {
            parent = parent.parentElement;
          }
          parent.dragDrop();
        }
      });
    }
  }
};
/**
 * Disable the sortable
 * @param {HTMLElement} sortableElement a single sortable
 */
var disableSortable = function disableSortable(sortableElement) {
  var opts = addData(sortableElement, 'opts');
  var items = filter(sortableElement.children, opts.items);
  var handles = getHandles(items, opts.handle);
  addAttribute(sortableElement, 'aria-dropeffect', 'none');
  addData(sortableElement, '_disabled', 'true');
  addAttribute(handles, 'draggable', 'false');
  removeEventListener(handles, 'mousedown');
};
/**
 * Reload the sortable
 * @param {HTMLElement} sortableElement a single sortable
 * @description events need to be removed to not be double bound
 */
var reloadSortable = function reloadSortable(sortableElement) {
  var opts = addData(sortableElement, 'opts');
  var items = filter(sortableElement.children, opts.items);
  var handles = getHandles(items, opts.handle);
  addData(sortableElement, '_disabled', 'false');
  // remove event handlers from items
  removeItemEvents(items);
  removeContainerEvents(originContainer, previousContainer);
  removeEventListener(handles, 'mousedown');
  // remove event handlers from sortable
  removeEventListener(sortableElement, 'dragover');
  removeEventListener(sortableElement, 'dragenter');
  removeEventListener(sortableElement, 'drop');
};
/**
 * Public sortable object
 * @param {Array|NodeList} sortableElements
 * @param {object|string} options|method
 */
function sortable(sortableElements, options) {
  // get method string to see if a method is called
  var method = String(options);
  options = options || {};
  // check if the user provided a selector instead of an element
  if (typeof sortableElements === 'string') {
    sortableElements = document.querySelectorAll(sortableElements);
  }
  // if the user provided an element, return it in an array to keep the return value consistant
  if (sortableElements instanceof HTMLElement) {
    sortableElements = [sortableElements];
  }
  sortableElements = Array.prototype.slice.call(sortableElements);
  if (/serialize/.test(method)) {
    return sortableElements.map(function (sortableContainer) {
      var opts = addData(sortableContainer, 'opts');
      return serialize(sortableContainer, opts.itemSerializer, opts.containerSerializer);
    });
  }
  sortableElements.forEach(function (sortableElement) {
    if (/enable|disable|destroy/.test(method)) {
      return sortable[method](sortableElement);
    }
    // log deprecation
    ['connectWith', 'disableIEFix'].forEach(function (configKey) {
      if (Object.prototype.hasOwnProperty.call(options, configKey) && options[configKey] !== null) {
        console.warn("HTML5Sortable: You are using the deprecated configuration \"" + configKey + "\". This will be removed in an upcoming version, make sure to migrate to the new options when updating.");
      }
    });
    // merge options with default options
    options = Object.assign({}, defaultConfiguration, store(sortableElement).config, options);
    // init data store for sortable
    store(sortableElement).config = options;
    // set options on sortable
    addData(sortableElement, 'opts', options);
    // property to define as sortable
    sortableElement.isSortable = true;
    // reset sortable
    reloadSortable(sortableElement);
    // initialize
    var listItems = filter(sortableElement.children, options.items);
    // create element if user defined a placeholder element as a string
    var customPlaceholder;
    if (options.placeholder !== null && options.placeholder !== undefined) {
      var tempContainer = document.createElement(sortableElement.tagName);
      if (options.placeholder instanceof HTMLElement) {
        tempContainer.appendChild(options.placeholder);
      } else {
        tempContainer.innerHTML = options.placeholder;
      }
      customPlaceholder = tempContainer.children[0];
    }
    // add placeholder
    store(sortableElement).placeholder = makePlaceholder(sortableElement, customPlaceholder, options.placeholderClass);
    addData(sortableElement, 'items', options.items);
    if (options.acceptFrom) {
      addData(sortableElement, 'acceptFrom', options.acceptFrom);
    } else if (options.connectWith) {
      addData(sortableElement, 'connectWith', options.connectWith);
    }
    enableSortable(sortableElement);
    addAttribute(listItems, 'role', 'option');
    addAttribute(listItems, 'aria-grabbed', 'false');
    // enable hover class
    enableHoverClass(sortableElement, true);
    /*
     Handle drag events on draggable items
     Handle is set at the sortableElement level as it will bubble up
     from the item
     */
    addEventListener(sortableElement, 'dragstart', function (e) {
      // ignore dragstart events
      var target = getEventTarget(e);
      if (target.isSortable === true) {
        return;
      }
      e.stopImmediatePropagation();
      if (options.handle && !target.matches(options.handle) || target.getAttribute('draggable') === 'false') {
        return;
      }
      var sortableContainer = findSortable(target, e);
      var dragItem = findDragElement(sortableContainer, target);
      // grab values
      originItemsBeforeUpdate = filter(sortableContainer.children, options.items);
      originIndex = originItemsBeforeUpdate.indexOf(dragItem);
      originElementIndex = getIndex(dragItem, sortableContainer.children);
      originContainer = sortableContainer;
      // add transparent clone or other ghost to cursor
      setDragImage(e, dragItem, options.customDragImage);
      // cache selsection & add attr for dragging
      draggingHeight = getElementHeight(dragItem);
      draggingWidth = getElementWidth(dragItem);
      dragItem.classList.add(options.draggingClass);
      dragging = getDragging(dragItem, sortableContainer);
      addAttribute(dragging, 'aria-grabbed', 'true');
      // dispatch sortstart event on each element in group
      sortableContainer.dispatchEvent(new CustomEvent('sortstart', {
        detail: {
          origin: {
            elementIndex: originElementIndex,
            index: originIndex,
            container: originContainer
          },
          item: dragging,
          originalTarget: target
        }
      }));
    });
    /*
     We are capturing targetSortable before modifications with 'dragenter' event
    */
    addEventListener(sortableElement, 'dragenter', function (e) {
      var target = getEventTarget(e);
      var sortableContainer = findSortable(target, e);
      if (sortableContainer && sortableContainer !== previousContainer) {
        destinationItemsBeforeUpdate = filter(sortableContainer.children, addData(sortableContainer, 'items')).filter(function (item) {
          return item !== store(sortableElement).placeholder;
        });
        if (options.dropTargetContainerClass) {
          sortableContainer.classList.add(options.dropTargetContainerClass);
        }
        sortableContainer.dispatchEvent(new CustomEvent('sortenter', {
          detail: {
            origin: {
              elementIndex: originElementIndex,
              index: originIndex,
              container: originContainer
            },
            destination: {
              container: sortableContainer,
              itemsBeforeUpdate: destinationItemsBeforeUpdate
            },
            item: dragging,
            originalTarget: target
          }
        }));
        addEventListener(sortableContainer, 'dragleave', function (e) {
          // TODO: rename outTarget to be more self-explanatory
          // e.fromElement for very old browsers, similar to relatedTarget
          var outTarget = e.relatedTarget || e.fromElement;
          if (!e.currentTarget.contains(outTarget)) {
            if (options.dropTargetContainerClass) {
              sortableContainer.classList.remove(options.dropTargetContainerClass);
            }
            sortableContainer.dispatchEvent(new CustomEvent('sortleave', {
              detail: {
                origin: {
                  elementIndex: originElementIndex,
                  index: originIndex,
                  container: sortableContainer
                },
                item: dragging,
                originalTarget: target
              }
            }));
          }
        });
      }
      previousContainer = sortableContainer;
    });
    /*
     * Dragend Event - https://developer.mozilla.org/en-US/docs/Web/Events/dragend
     * Fires each time dragEvent end, or ESC pressed
     * We are using it to clean up any draggable elements and placeholders
     */
    addEventListener(sortableElement, 'dragend', function (e) {
      if (!dragging) {
        return;
      }
      dragging.classList.remove(options.draggingClass);
      addAttribute(dragging, 'aria-grabbed', 'false');
      if (dragging.getAttribute('aria-copied') === 'true' && addData(dragging, 'dropped') !== 'true') {
        dragging.remove();
      }
      dragging.style.display = dragging.oldDisplay;
      delete dragging.oldDisplay;
      var visiblePlaceholder = Array.from(stores.values()).map(function (data) {
        return data.placeholder;
      }).filter(function (placeholder) {
        return placeholder instanceof HTMLElement;
      }).filter(isInDom)[0];
      if (visiblePlaceholder) {
        visiblePlaceholder.remove();
      }
      // dispatch sortstart event on each element in group
      sortableElement.dispatchEvent(new CustomEvent('sortstop', {
        detail: {
          origin: {
            elementIndex: originElementIndex,
            index: originIndex,
            container: originContainer
          },
          item: dragging
        }
      }));
      previousContainer = null;
      dragging = null;
      draggingHeight = null;
      draggingWidth = null;
    });
    /*
     * Drop Event - https://developer.mozilla.org/en-US/docs/Web/Events/drop
     * Fires when valid drop target area is hit
     */
    addEventListener(sortableElement, 'drop', function (e) {
      if (!listsConnected(sortableElement, dragging.parentElement)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      addData(dragging, 'dropped', 'true');
      // get the one placeholder that is currently visible
      var visiblePlaceholder = Array.from(stores.values()).map(function (data) {
        return data.placeholder;
      })
      // filter only HTMLElements
      .filter(function (placeholder) {
        return placeholder instanceof HTMLElement;
      })
      // only elements in DOM
      .filter(isInDom)[0];
      // attach element after placeholder
      insertAfter(visiblePlaceholder, dragging);
      // remove placeholder from dom
      visiblePlaceholder.remove();
      /*
       * Fires Custom Event - 'sortstop'
       */
      sortableElement.dispatchEvent(new CustomEvent('sortstop', {
        detail: {
          origin: {
            elementIndex: originElementIndex,
            index: originIndex,
            container: originContainer
          },
          item: dragging
        }
      }));
      var placeholder = store(sortableElement).placeholder;
      var originItems = filter(originContainer.children, options.items).filter(function (item) {
        return item !== placeholder;
      });
      var destinationContainer = this.isSortable === true ? this : this.parentElement;
      var destinationItems = filter(destinationContainer.children, addData(destinationContainer, 'items')).filter(function (item) {
        return item !== placeholder;
      });
      var destinationElementIndex = getIndex(dragging, Array.from(dragging.parentElement.children).filter(function (item) {
        return item !== placeholder;
      }));
      var destinationIndex = getIndex(dragging, destinationItems);
      if (options.dropTargetContainerClass) {
        destinationContainer.classList.remove(options.dropTargetContainerClass);
      }
      /*
       * When a list item changed container lists or index within a list
       * Fires Custom Event - 'sortupdate'
       */
      if (originElementIndex !== destinationElementIndex || originContainer !== destinationContainer) {
        sortableElement.dispatchEvent(new CustomEvent('sortupdate', {
          detail: {
            origin: {
              elementIndex: originElementIndex,
              index: originIndex,
              container: originContainer,
              itemsBeforeUpdate: originItemsBeforeUpdate,
              items: originItems
            },
            destination: {
              index: destinationIndex,
              elementIndex: destinationElementIndex,
              container: destinationContainer,
              itemsBeforeUpdate: destinationItemsBeforeUpdate,
              items: destinationItems
            },
            item: dragging
          }
        }));
      }
    });
    var debouncedDragOverEnter = debounce(function (sortableElement, element, pageX, pageY) {
      if (!dragging) {
        return;
      }
      // set placeholder height if forcePlaceholderSize option is set
      if (options.forcePlaceholderSize) {
        store(sortableElement).placeholder.style.height = draggingHeight + 'px';
        store(sortableElement).placeholder.style.width = draggingWidth + 'px';
      }
      // if element the draggedItem is dragged onto is within the array of all elements in list
      // (not only items, but also disabled, etc.)
      if (Array.from(sortableElement.children).indexOf(element) > -1) {
        var thisHeight = getElementHeight(element);
        var thisWidth = getElementWidth(element);
        var placeholderIndex = getIndex(store(sortableElement).placeholder, element.parentElement.children);
        var thisIndex = getIndex(element, element.parentElement.children);
        // Check if `element` is bigger than the draggable. If it is, we have to define a dead zone to prevent flickering
        if (thisHeight > draggingHeight || thisWidth > draggingWidth) {
          // Dead zone?
          var deadZoneVertical = thisHeight - draggingHeight;
          var deadZoneHorizontal = thisWidth - draggingWidth;
          var offsetTop = offset(element).top;
          var offsetLeft = offset(element).left;
          if (placeholderIndex < thisIndex && (options.orientation === 'vertical' && pageY < offsetTop || options.orientation === 'horizontal' && pageX < offsetLeft)) {
            return;
          }
          if (placeholderIndex > thisIndex && (options.orientation === 'vertical' && pageY > offsetTop + thisHeight - deadZoneVertical || options.orientation === 'horizontal' && pageX > offsetLeft + thisWidth - deadZoneHorizontal)) {
            return;
          }
        }
        if (dragging.oldDisplay === undefined) {
          dragging.oldDisplay = dragging.style.display;
        }
        if (dragging.style.display !== 'none') {
          dragging.style.display = 'none';
        }
        // To avoid flicker, determine where to position the placeholder
        // based on where the mouse pointer is relative to the elements
        // vertical center.
        var placeAfter = false;
        try {
          var elementMiddleVertical = offset(element).top + element.offsetHeight / 2;
          var elementMiddleHorizontal = offset(element).left + element.offsetWidth / 2;
          placeAfter = options.orientation === 'vertical' && pageY >= elementMiddleVertical || options.orientation === 'horizontal' && pageX >= elementMiddleHorizontal;
        } catch (e) {
          placeAfter = placeholderIndex < thisIndex;
        }
        if (placeAfter) {
          insertAfter(element, store(sortableElement).placeholder);
        } else {
          insertBefore(element, store(sortableElement).placeholder);
        }
        // get placeholders from all stores & remove all but current one
        Array.from(stores.values())
        // remove empty values
        .filter(function (data) {
          return data.placeholder !== undefined;
        })
        // foreach placeholder in array if outside of current sorableContainer -> remove from DOM
        .forEach(function (data) {
          if (data.placeholder !== store(sortableElement).placeholder) {
            data.placeholder.remove();
          }
        });
      } else {
        // get all placeholders from store
        var placeholders = Array.from(stores.values()).filter(function (data) {
          return data.placeholder !== undefined;
        }).map(function (data) {
          return data.placeholder;
        });
        // check if element is not in placeholders
        if (placeholders.indexOf(element) === -1 && sortableElement === element && !filter(element.children, options.items).length) {
          placeholders.forEach(function (element) {
            return element.remove();
          });
          element.appendChild(store(sortableElement).placeholder);
        }
      }
    }, options.debounce);
    // Handle dragover and dragenter events on draggable items
    var onDragOverEnter = function onDragOverEnter(e) {
      var element = e.target;
      var sortableElement = element.isSortable === true ? element : findSortable(element, e);
      element = findDragElement(sortableElement, element);
      if (!dragging || !listsConnected(sortableElement, dragging.parentElement) || addData(sortableElement, '_disabled') === 'true') {
        return;
      }
      var options = addData(sortableElement, 'opts');
      if (parseInt(options.maxItems) && filter(sortableElement.children, addData(sortableElement, 'items')).length >= parseInt(options.maxItems) && dragging.parentElement !== sortableElement) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = store(sortableElement).getConfig('copy') === true ? 'copy' : 'move';
      debouncedDragOverEnter(sortableElement, element, e.pageX, e.pageY);
    };
    addEventListener(listItems.concat(sortableElement), 'dragover', onDragOverEnter);
    addEventListener(listItems.concat(sortableElement), 'dragenter', onDragOverEnter);
  });
  return sortableElements;
}
sortable.destroy = function (sortableElement) {
  destroySortable(sortableElement);
};
sortable.enable = function (sortableElement) {
  enableSortable(sortableElement);
};
sortable.disable = function (sortableElement) {
  disableSortable(sortableElement);
};
/* START.TESTS_ONLY */
sortable.__testing = {
  // add internal methods here for testing purposes
  data: addData,
  removeItemEvents: removeItemEvents,
  removeItemData: removeItemData,
  removeSortableData: removeSortableData,
  removeContainerEvents: removeContainerEvents
};
/* harmony default export */ __webpack_exports__["default"] = (sortable);

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
/*!*********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/entrypoints/decidim_meetings_admin.js ***!
  \*********************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_meetings_admin_agendas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/meetings/admin/agendas */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/agendas.js");
/* harmony import */ var src_decidim_meetings_admin_destroy_meeting_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/meetings/admin/destroy_meeting_alert */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/destroy_meeting_alert.js");
/* harmony import */ var src_decidim_meetings_admin_destroy_meeting_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_meetings_admin_destroy_meeting_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_decidim_meetings_admin_meetings_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/meetings/admin/meetings_form */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/meetings_form.js");
/* harmony import */ var src_decidim_meetings_admin_registrations_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/meetings/admin/registrations_form */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/registrations_form.js");
/* harmony import */ var src_decidim_meetings_admin_registrations_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(src_decidim_meetings_admin_registrations_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_decidim_meetings_admin_registrations_invite_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/meetings/admin/registrations_invite_form */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-meetings-0.28.0/app/packs/src/decidim/meetings/admin/registrations_invite_form.js");





}();
/******/ })()
;
//# sourceMappingURL=decidim_meetings_admin.js.map