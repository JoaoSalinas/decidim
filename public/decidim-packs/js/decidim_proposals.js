/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents sync recursive ^\\.\\/.*$":
/*!*********************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents/ sync ^\.\/.*$ ***!
  \*********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./decidim/proposals/participatory_texts/participatory_text.md": "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents/decidim/proposals/participatory_texts/participatory_text.md",
	"./decidim/proposals/participatory_texts/participatory_text.odt": "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents/decidim/proposals/participatory_texts/participatory_text.odt"
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
webpackContext.id = "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images sync recursive ^\\.\\/.*$":
/*!******************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/ sync ^\.\/.*$ ***!
  \******************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./decidim/gamification/badges/decidim_gamification_badges_accepted_proposals.svg": "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_accepted_proposals.svg",
	"./decidim/gamification/badges/decidim_gamification_badges_proposal_votes.svg": "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_proposal_votes.svg",
	"./decidim/gamification/badges/decidim_gamification_badges_proposals.svg": "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_proposals.svg",
	"./decidim/proposals/decidim_proposals.svg": "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/proposals/decidim_proposals.svg"
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
webpackContext.id = "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/add_proposal.js":
/*!**********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/add_proposal.js ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_geocoding_attach_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/geocoding/attach_input */ "./gems/decidim-module-core/app/packs/src/decidim/geocoding/attach_input.js");
/* harmony import */ var src_decidim_geocoding_coordinate_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/geocoding/coordinate_input */ "./gems/decidim-module-core/app/packs/src/decidim/geocoding/coordinate_input.js");


$(function () {
  var $map = $("#address_map");
  var $addressInputField = $("[data-decidim-geocoding]");
  if ($map.length) {
    if (!$addressInputField.data("coordinates")) {
      $map.hide();
    }
    $addressInputField.on("geocoder-suggest-coordinates.decidim", function () {
      return $map.show();
    });
    var latFieldName = "latitude";
    var longFieldName = "longitude";
    if ($addressInputField.length > 0) {
      latFieldName = (0,src_decidim_geocoding_coordinate_input__WEBPACK_IMPORTED_MODULE_1__["default"])("latitude", $addressInputField, {});
      longFieldName = (0,src_decidim_geocoding_coordinate_input__WEBPACK_IMPORTED_MODULE_1__["default"])("longitude", $addressInputField, {});
    }
    $("[data-decidim-map]").on("ready.decidim", function (event) {
      var ctrl = $(event.target).data("map-controller");
      ctrl.setEventHandler("coordinates", function (ev) {
        $("input[name='".concat(latFieldName, "']")).val(ev.lat);
        $("input[name='".concat(longFieldName, "']")).val(ev.lng);
      });
      (0,src_decidim_geocoding_attach_input__WEBPACK_IMPORTED_MODULE_0__["default"])($addressInputField, null, function (coordinates) {
        // Remove previous marker when user updates address in address field
        ctrl.removeMarker();
        ctrl.addMarker({
          latitude: coordinates[0],
          longitude: coordinates[1],
          address: $addressInputField.val()
        });
      });
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/choose_proposals.js":
/*!**************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/choose_proposals.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tom_select_dist_cjs_tom_select_popular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tom-select/dist/cjs/tom-select.popular */ "./node_modules/tom-select/dist/cjs/tom-select.popular.js");
/* harmony import */ var tom_select_dist_cjs_tom_select_popular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tom_select_dist_cjs_tom_select_popular__WEBPACK_IMPORTED_MODULE_0__);
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

document.addEventListener("DOMContentLoaded", function () {
  var tagContainers = document.querySelectorAll("#proposals_list");
  tagContainers.forEach(function (container) {
    var _container$dataset = container.dataset,
      tmName = _container$dataset.tmName,
      tmItems = _container$dataset.tmItems,
      tmNoResults = _container$dataset.tmNoResults;
    var config = {
      plugins: ["remove_button", "dropdown_input"],
      allowEmptyOption: true,
      items: JSON.parse(tmItems),
      render: _objectSpread({
        item: function item(data, escape) {
          return "<div>".concat(escape(data.text), "<input type=\"hidden\" name=\"").concat(tmName, "[]\" value=\"").concat(data.value, "\" /></div>");
        }
      }, tmNoResults && {
        no_results: function no_results() {
          return "<div class=\"no-results\">".concat(tmNoResults, "</div>");
        }
      })
    };
    return new (tom_select_dist_cjs_tom_select_popular__WEBPACK_IMPORTED_MODULE_0___default())(container, config);
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/utils.js":
/*!***************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/utils.js ***!
  \***************************************************************************************************************************/
/***/ (function() {

/* eslint-disable no-invalid-this */

$(function () {
  $("#vote_button").mouseover(function () {
    $(this).text($(this).data("replace"));
  });
  $("#vote_button").mouseout(function () {
    $(this).text($(this).data("original"));
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

/***/ "./node_modules/tom-select/dist/cjs/tom-select.popular.js":
/*!****************************************************************!*\
  !*** ./node_modules/tom-select/dist/cjs/tom-select.popular.js ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
/**
* Tom Select v2.2.2
* Licensed under the Apache License, Version 2.0 (the "License");
*/



/**
 * MicroEvent - to make any js object an event emitter
 *
 * - pure javascript - server compatible, browser compatible
 * - dont rely on the browser doms
 * - super simple - you get it immediatly, no mistery, no magic involved
 *
 * @author Jerome Etienne (https://github.com/jeromeetienne)
 */

/**
 * Execute callback for each event in space separated list of event names
 *
 */
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(generator);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function forEvents(events, callback) {
  events.split(/\s+/).forEach(function (event) {
    callback(event);
  });
}
var MicroEvent = /*#__PURE__*/function () {
  function MicroEvent() {
    _classCallCheck(this, MicroEvent);
    this._events = void 0;
    this._events = {};
  }
  _createClass(MicroEvent, [{
    key: "on",
    value: function on(events, fct) {
      var _this = this;
      forEvents(events, function (event) {
        var event_array = _this._events[event] || [];
        event_array.push(fct);
        _this._events[event] = event_array;
      });
    }
  }, {
    key: "off",
    value: function off(events, fct) {
      var _this2 = this;
      var n = arguments.length;
      if (n === 0) {
        this._events = {};
        return;
      }
      forEvents(events, function (event) {
        if (n === 1) {
          delete _this2._events[event];
          return;
        }
        var event_array = _this2._events[event];
        if (event_array === undefined) return;
        event_array.splice(event_array.indexOf(fct), 1);
        _this2._events[event] = event_array;
      });
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var self = this;
      forEvents(events, function (event) {
        var event_array = self._events[event];
        if (event_array === undefined) return;
        event_array.forEach(function (fct) {
          fct.apply(self, args);
        });
      });
    }
  }]);
  return MicroEvent;
}();
/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */
function MicroPlugin(Interface) {
  Interface.plugins = {};
  return /*#__PURE__*/function (_Interface) {
    _inherits(_class, _Interface);
    function _class() {
      var _this3;
      _classCallCheck(this, _class);
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this3 = _callSuper(this, _class, [].concat(args));
      _this3.plugins = {
        names: [],
        settings: {},
        requested: {},
        loaded: {}
      };
      return _this3;
    }

    /**
     * Registers a plugin.
     *
     * @param {function} fn
     */
    _createClass(_class, [{
      key: "initializePlugins",
      value:
      /**
       * Initializes the listed plugins (with options).
       * Acceptable formats:
       *
       * List (without options):
       *   ['a', 'b', 'c']
       *
       * List (with options):
       *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
       *
       * Hash (with options):
       *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
       *
       * @param {array|object} plugins
       */

      function initializePlugins(plugins) {
        var key, name;
        var self = this;
        var queue = [];
        if (Array.isArray(plugins)) {
          plugins.forEach(function (plugin) {
            if (typeof plugin === 'string') {
              queue.push(plugin);
            } else {
              self.plugins.settings[plugin.name] = plugin.options;
              queue.push(plugin.name);
            }
          });
        } else if (plugins) {
          for (key in plugins) {
            if (plugins.hasOwnProperty(key)) {
              self.plugins.settings[key] = plugins[key];
              queue.push(key);
            }
          }
        }
        while (name = queue.shift()) {
          self.require(name);
        }
      }
    }, {
      key: "loadPlugin",
      value: function loadPlugin(name) {
        var self = this;
        var plugins = self.plugins;
        var plugin = Interface.plugins[name];
        if (!Interface.plugins.hasOwnProperty(name)) {
          throw new Error('Unable to find "' + name + '" plugin');
        }
        plugins.requested[name] = true;
        plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
        plugins.names.push(name);
      }
      /**
       * Initializes a plugin.
       *
       */
    }, {
      key: "require",
      value: function require(name) {
        var self = this;
        var plugins = self.plugins;
        if (!self.plugins.loaded.hasOwnProperty(name)) {
          if (plugins.requested[name]) {
            throw new Error('Plugin has circular dependency ("' + name + '")');
          }
          self.loadPlugin(name);
        }
        return plugins.loaded[name];
      }
    }], [{
      key: "define",
      value: function define(name, fn) {
        Interface.plugins[name] = {
          'name': name,
          'fn': fn
        };
      }
    }]);
    return _class;
  }(Interface);
}

/*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */
/**
 * Convert array of strings to a regular expression
 *	ex ['ab','a'] => (?:ab|a)
 * 	ex ['a','b'] => [ab]
 * @param {string[]} chars
 * @return {string}
 */
var arrayToPattern = function arrayToPattern(chars) {
  chars = chars.filter(Boolean);
  if (chars.length < 2) {
    return chars[0] || '';
  }
  return maxValueLength(chars) == 1 ? '[' + chars.join('') + ']' : '(?:' + chars.join('|') + ')';
};
/**
 * @param {string[]} array
 * @return {string}
 */

var sequencePattern = function sequencePattern(array) {
  if (!hasDuplicates(array)) {
    return array.join('');
  }
  var pattern = '';
  var prev_char_count = 0;
  var prev_pattern = function prev_pattern() {
    if (prev_char_count > 1) {
      pattern += '{' + prev_char_count + '}';
    }
  };
  array.forEach(function (_char, i) {
    if (_char === array[i - 1]) {
      prev_char_count++;
      return;
    }
    prev_pattern();
    pattern += _char;
    prev_char_count = 1;
  });
  prev_pattern();
  return pattern;
};
/**
 * Convert array of strings to a regular expression
 *	ex ['ab','a'] => (?:ab|a)
 * 	ex ['a','b'] => [ab]
 * @param {Set<string>} chars
 * @return {string}
 */

var setToPattern = function setToPattern(chars) {
  var array = toArray(chars);
  return arrayToPattern(array);
};
/**
 *
 * https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
 * @param {any[]} array
 */

var hasDuplicates = function hasDuplicates(array) {
  return new Set(array).size !== array.length;
};
/**
 * https://stackoverflow.com/questions/63006601/why-does-u-throw-an-invalid-escape-error
 * @param {string} str
 * @return {string}
 */

var escape_regex = function escape_regex(str) {
  return (str + '').replace(/([\$\(-\+\.\?\[-\^\{-\}])/g, '\\$1');
};
/**
 * Return the max length of array values
 * @param {string[]} array
 *
 */

var maxValueLength = function maxValueLength(array) {
  return array.reduce(function (longest, value) {
    return Math.max(longest, unicodeLength(value));
  }, 0);
};
/**
 * @param {string} str
 */

var unicodeLength = function unicodeLength(str) {
  return toArray(str).length;
};
/**
 * @param {any} p
 * @return {any[]}
 */

var toArray = function toArray(p) {
  return Array.from(p);
};

/*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */
/**
 * Get all possible combinations of substrings that add up to the given string
 * https://stackoverflow.com/questions/30169587/find-all-the-combination-of-substrings-that-add-up-to-the-given-string
 * @param {string} input
 * @return {string[][]}
 */
var allSubstrings = function allSubstrings(input) {
  if (input.length === 1) return [[input]];
  /** @type {string[][]} */

  var result = [];
  var start = input.substring(1);
  var suba = allSubstrings(start);
  suba.forEach(function (subresult) {
    var tmp = subresult.slice(0);
    tmp[0] = input.charAt(0) + tmp[0];
    result.push(tmp);
    tmp = subresult.slice(0);
    tmp.unshift(input.charAt(0));
    result.push(tmp);
  });
  return result;
};

/*! @orchidjs/unicode-variants | https://github.com/orchidjs/unicode-variants | Apache License (v2) */

/**
 * @typedef {{[key:string]:string}} TUnicodeMap
 * @typedef {{[key:string]:Set<string>}} TUnicodeSets
 * @typedef {[[number,number]]} TCodePoints
 * @typedef {{folded:string,composed:string,code_point:number}} TCodePointObj
 * @typedef {{start:number,end:number,length:number,substr:string}} TSequencePart
 */
/** @type {TCodePoints} */

var code_points = [[0, 65535]];
var accent_pat = "[\u0300-\u036F\xB7\u02BE\u02BC]";
/** @type {TUnicodeMap} */

var unicode_map;
/** @type {RegExp} */

var multi_char_reg;
var max_char_length = 3;
/** @type {TUnicodeMap} */

var latin_convert = {};
/** @type {TUnicodeMap} */

var latin_condensed = {
  '/': '⁄∕',
  '0': '߀',
  "a": "ⱥɐɑ",
  "aa": "ꜳ",
  "ae": "æǽǣ",
  "ao": "ꜵ",
  "au": "ꜷ",
  "av": "ꜹꜻ",
  "ay": "ꜽ",
  "b": "ƀɓƃ",
  "c": "ꜿƈȼↄ",
  "d": "đɗɖᴅƌꮷԁɦ",
  "e": "ɛǝᴇɇ",
  "f": "ꝼƒ",
  "g": "ǥɠꞡᵹꝿɢ",
  "h": "ħⱨⱶɥ",
  "i": "ɨı",
  "j": "ɉȷ",
  "k": "ƙⱪꝁꝃꝅꞣ",
  "l": "łƚɫⱡꝉꝇꞁɭ",
  "m": "ɱɯϻ",
  "n": "ꞥƞɲꞑᴎлԉ",
  "o": "øǿɔɵꝋꝍᴑ",
  "oe": "œ",
  "oi": "ƣ",
  "oo": "ꝏ",
  "ou": "ȣ",
  "p": "ƥᵽꝑꝓꝕρ",
  "q": "ꝗꝙɋ",
  "r": "ɍɽꝛꞧꞃ",
  "s": "ßȿꞩꞅʂ",
  "t": "ŧƭʈⱦꞇ",
  "th": "þ",
  "tz": "ꜩ",
  "u": "ʉ",
  "v": "ʋꝟʌ",
  "vy": "ꝡ",
  "w": "ⱳ",
  "y": "ƴɏỿ",
  "z": "ƶȥɀⱬꝣ",
  "hv": "ƕ"
};
for (var latin in latin_condensed) {
  var unicode = latin_condensed[latin] || '';
  for (var i = 0; i < unicode.length; i++) {
    var _char2 = unicode.substring(i, i + 1);
    latin_convert[_char2] = latin;
  }
}
var convert_pat = new RegExp(Object.keys(latin_convert).join('|') + '|' + accent_pat, 'gu');
/**
 * Initialize the unicode_map from the give code point ranges
 *
 * @param {TCodePoints=} _code_points
 */

var initialize = function initialize(_code_points) {
  if (unicode_map !== undefined) return;
  unicode_map = generateMap(_code_points || code_points);
};
/**
 * Helper method for normalize a string
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
 * @param {string} str
 * @param {string} form
 */

var normalize = function normalize(str) {
  var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NFKD';
  return str.normalize(form);
};
/**
 * Remove accents without reordering string
 * calling str.normalize('NFKD') on \u{594}\u{595}\u{596} becomes \u{596}\u{594}\u{595}
 * via https://github.com/krisk/Fuse/issues/133#issuecomment-318692703
 * @param {string} str
 * @return {string}
 */

var asciifold = function asciifold(str) {
  return toArray(str).reduce(
  /**
   * @param {string} result
   * @param {string} char
   */
  function (result, _char3) {
    return result + _asciifold(_char3);
  }, '');
};
/**
 * @param {string} str
 * @return {string}
 */

var _asciifold = function _asciifold(str) {
  str = normalize(str).toLowerCase().replace(convert_pat, function ( /** @type {string} */
  _char4) {
    return latin_convert[_char4] || '';
  }); //return str;

  return normalize(str, 'NFC');
};
/**
 * Generate a list of unicode variants from the list of code points
 * @param {TCodePoints} code_points
 * @yield {TCodePointObj}
 */

function generator(code_points) {
  var _iterator, _step, _step$value, code_point_min, code_point_max, _i, composed, folded;
  return _regeneratorRuntime().wrap(function generator$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _iterator = _createForOfIteratorHelper(code_points);
        _context.prev = 1;
        _iterator.s();
      case 3:
        if ((_step = _iterator.n()).done) {
          _context.next = 22;
          break;
        }
        _step$value = _slicedToArray(_step.value, 2), code_point_min = _step$value[0], code_point_max = _step$value[1];
        _i = code_point_min;
      case 6:
        if (!(_i <= code_point_max)) {
          _context.next = 20;
          break;
        }
        composed = String.fromCharCode(_i);
        folded = asciifold(composed);
        if (!(folded == composed.toLowerCase())) {
          _context.next = 11;
          break;
        }
        return _context.abrupt("continue", 17);
      case 11:
        if (!(folded.length > max_char_length)) {
          _context.next = 13;
          break;
        }
        return _context.abrupt("continue", 17);
      case 13:
        if (!(folded.length == 0)) {
          _context.next = 15;
          break;
        }
        return _context.abrupt("continue", 17);
      case 15:
        _context.next = 17;
        return {
          folded: folded,
          composed: composed,
          code_point: _i
        };
      case 17:
        _i++;
        _context.next = 6;
        break;
      case 20:
        _context.next = 3;
        break;
      case 22:
        _context.next = 27;
        break;
      case 24:
        _context.prev = 24;
        _context.t0 = _context["catch"](1);
        _iterator.e(_context.t0);
      case 27:
        _context.prev = 27;
        _iterator.f();
        return _context.finish(27);
      case 30:
      case "end":
        return _context.stop();
    }
  }, _marked, null, [[1, 24, 27, 30]]);
}
/**
 * Generate a unicode map from the list of code points
 * @param {TCodePoints} code_points
 * @return {TUnicodeSets}
 */

var generateSets = function generateSets(code_points) {
  /** @type {{[key:string]:Set<string>}} */
  var unicode_sets = {};
  /**
   * @param {string} folded
   * @param {string} to_add
   */

  var addMatching = function addMatching(folded, to_add) {
    /** @type {Set<string>} */
    var folded_set = unicode_sets[folded] || new Set();
    var patt = new RegExp('^' + setToPattern(folded_set) + '$', 'iu');
    if (to_add.match(patt)) {
      return;
    }
    folded_set.add(escape_regex(to_add));
    unicode_sets[folded] = folded_set;
  };
  var _iterator2 = _createForOfIteratorHelper(generator(code_points)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var value = _step2.value;
      addMatching(value.folded, value.folded);
      addMatching(value.folded, value.composed);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return unicode_sets;
};
/**
 * Generate a unicode map from the list of code points
 * ae => (?:(?:ae|Æ|Ǽ|Ǣ)|(?:A|Ⓐ|Ａ...)(?:E|ɛ|Ⓔ...))
 *
 * @param {TCodePoints} code_points
 * @return {TUnicodeMap}
 */

var generateMap = function generateMap(code_points) {
  /** @type {TUnicodeSets} */
  var unicode_sets = generateSets(code_points);
  /** @type {TUnicodeMap} */

  var unicode_map = {};
  /** @type {string[]} */

  var multi_char = [];
  for (var folded in unicode_sets) {
    var set = unicode_sets[folded];
    if (set) {
      unicode_map[folded] = setToPattern(set);
    }
    if (folded.length > 1) {
      multi_char.push(escape_regex(folded));
    }
  }
  multi_char.sort(function (a, b) {
    return b.length - a.length;
  });
  var multi_char_patt = arrayToPattern(multi_char);
  multi_char_reg = new RegExp('^' + multi_char_patt, 'u');
  return unicode_map;
};
/**
 * Map each element of an array from it's folded value to all possible unicode matches
 * @param {string[]} strings
 * @param {number} min_replacement
 * @return {string}
 */

var mapSequence = function mapSequence(strings) {
  var min_replacement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var chars_replaced = 0;
  strings = strings.map(function (str) {
    if (unicode_map[str]) {
      chars_replaced += str.length;
    }
    return unicode_map[str] || str;
  });
  if (chars_replaced >= min_replacement) {
    return sequencePattern(strings);
  }
  return '';
};
/**
 * Convert a short string and split it into all possible patterns
 * Keep a pattern only if min_replacement is met
 *
 * 'abc'
 * 		=> [['abc'],['ab','c'],['a','bc'],['a','b','c']]
 *		=> ['abc-pattern','ab-c-pattern'...]
 *
 *
 * @param {string} str
 * @param {number} min_replacement
 * @return {string}
 */

var substringsToPattern = function substringsToPattern(str) {
  var min_replacement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  min_replacement = Math.max(min_replacement, str.length - 1);
  return arrayToPattern(allSubstrings(str).map(function (sub_pat) {
    return mapSequence(sub_pat, min_replacement);
  }));
};
/**
 * Convert an array of sequences into a pattern
 * [{start:0,end:3,length:3,substr:'iii'}...] => (?:iii...)
 *
 * @param {Sequence[]} sequences
 * @param {boolean} all
 */

var sequencesToPattern = function sequencesToPattern(sequences) {
  var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var min_replacement = sequences.length > 1 ? 1 : 0;
  return arrayToPattern(sequences.map(function (sequence) {
    var seq = [];
    var len = all ? sequence.length() : sequence.length() - 1;
    for (var j = 0; j < len; j++) {
      seq.push(substringsToPattern(sequence.substrs[j] || '', min_replacement));
    }
    return sequencePattern(seq);
  }));
};
/**
 * Return true if the sequence is already in the sequences
 * @param {Sequence} needle_seq
 * @param {Sequence[]} sequences
 */

var inSequences = function inSequences(needle_seq, sequences) {
  var _iterator3 = _createForOfIteratorHelper(sequences),
    _step3;
  try {
    var _loop = function _loop() {
        var seq = _step3.value;
        if (seq.start != needle_seq.start || seq.end != needle_seq.end) {
          return 0; // continue
        }
        if (seq.substrs.join('') !== needle_seq.substrs.join('')) {
          return 0; // continue
        }
        var needle_parts = needle_seq.parts;
        /**
         * @param {TSequencePart} part
         */

        var filter = function filter(part) {
          var _iterator4 = _createForOfIteratorHelper(needle_parts),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var needle_part = _step4.value;
              if (needle_part.start === part.start && needle_part.substr === part.substr) {
                return false;
              }
              if (part.length == 1 || needle_part.length == 1) {
                continue;
              } // check for overlapping parts
              // a = ['::=','==']
              // b = ['::','===']
              // a = ['r','sm']
              // b = ['rs','m']

              if (part.start < needle_part.start && part.end > needle_part.start) {
                return true;
              }
              if (needle_part.start < part.start && needle_part.end > part.start) {
                return true;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return false;
        };
        var filtered = seq.parts.filter(filter);
        if (filtered.length > 0) {
          return 0; // continue
        }
        return {
          v: true
        };
      },
      _ret;
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _ret = _loop();
      if (_ret === 0) continue;
      if (_ret) return _ret.v;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return false;
};
var Sequence = /*#__PURE__*/function () {
  function Sequence() {
    _classCallCheck(this, Sequence);
    /** @type {TSequencePart[]} */
    this.parts = [];
    /** @type {string[]} */

    this.substrs = [];
    this.start = 0;
    this.end = 0;
  }
  /**
   * @param {TSequencePart|undefined} part
   */
  _createClass(Sequence, [{
    key: "add",
    value: function add(part) {
      if (part) {
        this.parts.push(part);
        this.substrs.push(part.substr);
        this.start = Math.min(part.start, this.start);
        this.end = Math.max(part.end, this.end);
      }
    }
  }, {
    key: "last",
    value: function last() {
      return this.parts[this.parts.length - 1];
    }
  }, {
    key: "length",
    value: function length() {
      return this.parts.length;
    }
    /**
     * @param {number} position
     * @param {TSequencePart} last_piece
     */
  }, {
    key: "clone",
    value: function clone(position, last_piece) {
      var clone = new Sequence();
      var parts = JSON.parse(JSON.stringify(this.parts));
      var last_part = parts.pop();
      var _iterator5 = _createForOfIteratorHelper(parts),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var part = _step5.value;
          clone.add(part);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      var last_substr = last_piece.substr.substring(0, position - last_part.start);
      var clone_last_len = last_substr.length;
      clone.add({
        start: last_part.start,
        end: last_part.start + clone_last_len,
        length: clone_last_len,
        substr: last_substr
      });
      return clone;
    }
  }]);
  return Sequence;
}();
/**
 * Expand a regular expression pattern to include unicode variants
 * 	eg /a/ becomes /aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑAⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ/
 *
 * Issue:
 *  ﺊﺋ [ 'ﺊ = \\u{fe8a}', 'ﺋ = \\u{fe8b}' ]
 *	becomes:	ئئ [ 'ي = \\u{64a}', 'ٔ = \\u{654}', 'ي = \\u{64a}', 'ٔ = \\u{654}' ]
 *
 *	İĲ = IIJ = ⅡJ
 *
 * 	1/2/4
 *
 * @param {string} str
 * @return {string|undefined}
 */
var getPattern = function getPattern(str) {
  initialize();
  str = asciifold(str);
  var pattern = '';
  var sequences = [new Sequence()];
  for (var _i2 = 0; _i2 < str.length; _i2++) {
    var substr = str.substring(_i2);
    var match = substr.match(multi_char_reg);
    var _char5 = str.substring(_i2, _i2 + 1);
    var match_str = match ? match[0] : null; // loop through sequences
    // add either the char or multi_match

    var overlapping = [];
    var added_types = new Set();
    var _iterator6 = _createForOfIteratorHelper(sequences),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var sequence = _step6.value;
        var last_piece = sequence.last();
        if (!last_piece || last_piece.length == 1 || last_piece.end <= _i2) {
          // if we have a multi match
          if (match_str) {
            var len = match_str.length;
            sequence.add({
              start: _i2,
              end: _i2 + len,
              length: len,
              substr: match_str
            });
            added_types.add('1');
          } else {
            sequence.add({
              start: _i2,
              end: _i2 + 1,
              length: 1,
              substr: _char5
            });
            added_types.add('2');
          }
        } else if (match_str) {
          var _clone = sequence.clone(_i2, last_piece);
          var _len3 = match_str.length;
          _clone.add({
            start: _i2,
            end: _i2 + _len3,
            length: _len3,
            substr: match_str
          });
          overlapping.push(_clone);
        } else {
          // don't add char
          // adding would create invalid patterns: 234 => [2,34,4]
          added_types.add('3');
        }
      } // if we have overlapping
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (overlapping.length > 0) {
      // ['ii','iii'] before ['i','i','iii']
      overlapping = overlapping.sort(function (a, b) {
        return a.length() - b.length();
      });
      var _iterator7 = _createForOfIteratorHelper(overlapping),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var clone = _step7.value;
          // don't add if we already have an equivalent sequence
          if (inSequences(clone, sequences)) {
            continue;
          }
          sequences.push(clone);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      continue;
    } // if we haven't done anything unique
    // clean up the patterns
    // helps keep patterns smaller
    // if str = 'r₨㎧aarss', pattern will be 446 instead of 655

    if (_i2 > 0 && added_types.size == 1 && !added_types.has('3')) {
      pattern += sequencesToPattern(sequences, false);
      var new_seq = new Sequence();
      var old_seq = sequences[0];
      if (old_seq) {
        new_seq.add(old_seq.last());
      }
      sequences = [new_seq];
    }
  }
  pattern += sequencesToPattern(sequences, true);
  return pattern;
};

/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */

/**
 * A property getter resolving dot-notation
 * @param  {Object}  obj     The root object to fetch property on
 * @param  {String}  name    The optionally dotted property name to fetch
 * @return {Object}          The resolved property value
 */
var getAttr = function getAttr(obj, name) {
  if (!obj) return;
  return obj[name];
};
/**
 * A property getter resolving dot-notation
 * @param  {Object}  obj     The root object to fetch property on
 * @param  {String}  name    The optionally dotted property name to fetch
 * @return {Object}          The resolved property value
 */

var getAttrNesting = function getAttrNesting(obj, name) {
  if (!obj) return;
  var part,
    names = name.split(".");
  while ((part = names.shift()) && (obj = obj[part]));
  return obj;
};
/**
 * Calculates how close of a match the
 * given value is against a search token.
 *
 */

var scoreValue = function scoreValue(value, token, weight) {
  var score, pos;
  if (!value) return 0;
  value = value + '';
  if (token.regex == null) return 0;
  pos = value.search(token.regex);
  if (pos === -1) return 0;
  score = token.string.length / value.length;
  if (pos === 0) score += 0.5;
  return score * weight;
};
/**
 * Cast object property to an array if it exists and has a value
 *
 */

var propToArray = function propToArray(obj, key) {
  var value = obj[key];
  if (typeof value == 'function') return value;
  if (value && !Array.isArray(value)) {
    obj[key] = [value];
  }
};
/**
 * Iterates over arrays and hashes.
 *
 * ```
 * iterate(this.items, function(item, id) {
 *    // invoked for each item
 * });
 * ```
 *
 */

var iterate$1 = function iterate$1(object, callback) {
  if (Array.isArray(object)) {
    object.forEach(callback);
  } else {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        callback(object[key], key);
      }
    }
  }
};
var cmp = function cmp(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  a = asciifold(a + '').toLowerCase();
  b = asciifold(b + '').toLowerCase();
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
};

/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */

/**
 * sifter.js
 * Copyright (c) 2013–2020 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */
var Sifter = /*#__PURE__*/function () {
  // []|{};

  /**
   * Textually searches arrays and hashes of objects
   * by property (or multiple properties). Designed
   * specifically for autocomplete.
   *
   */
  function Sifter(items, settings) {
    _classCallCheck(this, Sifter);
    this.items = void 0;
    this.settings = void 0;
    this.items = items;
    this.settings = settings || {
      diacritics: true
    };
  }

  /**
   * Splits a search string into an array of individual
   * regexps to be used to match results.
   *
   */
  _createClass(Sifter, [{
    key: "tokenize",
    value: function tokenize(query, respect_word_boundaries, weights) {
      var _this4 = this;
      if (!query || !query.length) return [];
      var tokens = [];
      var words = query.split(/\s+/);
      var field_regex;
      if (weights) {
        field_regex = new RegExp('^(' + Object.keys(weights).map(escape_regex).join('|') + ')\:(.*)$');
      }
      words.forEach(function (word) {
        var field_match;
        var field = null;
        var regex = null; // look for "field:query" tokens

        if (field_regex && (field_match = word.match(field_regex))) {
          field = field_match[1];
          word = field_match[2];
        }
        if (word.length > 0) {
          if (_this4.settings.diacritics) {
            regex = getPattern(word) || null;
          } else {
            regex = escape_regex(word);
          }
          if (regex && respect_word_boundaries) regex = "\\b" + regex;
        }
        tokens.push({
          string: word,
          regex: regex ? new RegExp(regex, 'iu') : null,
          field: field
        });
      });
      return tokens;
    }

    /**
     * Returns a function to be used to score individual results.
     *
     * Good matches will have a higher score than poor matches.
     * If an item is not a match, 0 will be returned by the function.
     *
     * @returns {T.ScoreFn}
     */
  }, {
    key: "getScoreFunction",
    value: function getScoreFunction(query, options) {
      var search = this.prepareSearch(query, options);
      return this._getScoreFunction(search);
    }
    /**
     * @returns {T.ScoreFn}
     *
     */
  }, {
    key: "_getScoreFunction",
    value: function _getScoreFunction(search) {
      var tokens = search.tokens,
        token_count = tokens.length;
      if (!token_count) {
        return function () {
          return 0;
        };
      }
      var fields = search.options.fields,
        weights = search.weights,
        field_count = fields.length,
        getAttrFn = search.getAttrFn;
      if (!field_count) {
        return function () {
          return 1;
        };
      }
      /**
       * Calculates the score of an object
       * against the search query.
       *
       */

      var scoreObject = function () {
        if (field_count === 1) {
          return function (token, data) {
            var field = fields[0].field;
            return scoreValue(getAttrFn(data, field), token, weights[field] || 1);
          };
        }
        return function (token, data) {
          var sum = 0; // is the token specific to a field?

          if (token.field) {
            var value = getAttrFn(data, token.field);
            if (!token.regex && value) {
              sum += 1 / field_count;
            } else {
              sum += scoreValue(value, token, 1);
            }
          } else {
            iterate$1(weights, function (weight, field) {
              sum += scoreValue(getAttrFn(data, field), token, weight);
            });
          }
          return sum / field_count;
        };
      }();
      if (token_count === 1) {
        return function (data) {
          return scoreObject(tokens[0], data);
        };
      }
      if (search.options.conjunction === 'and') {
        return function (data) {
          var score,
            sum = 0;
          var _iterator8 = _createForOfIteratorHelper(tokens),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var token = _step8.value;
              score = scoreObject(token, data);
              if (score <= 0) return 0;
              sum += score;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          return sum / token_count;
        };
      } else {
        return function (data) {
          var sum = 0;
          iterate$1(tokens, function (token) {
            sum += scoreObject(token, data);
          });
          return sum / token_count;
        };
      }
    }

    /**
     * Returns a function that can be used to compare two
     * results, for sorting purposes. If no sorting should
     * be performed, `null` will be returned.
     *
     * @return function(a,b)
     */
  }, {
    key: "getSortFunction",
    value: function getSortFunction(query, options) {
      var search = this.prepareSearch(query, options);
      return this._getSortFunction(search);
    }
  }, {
    key: "_getSortFunction",
    value: function _getSortFunction(search) {
      var implicit_score,
        sort_flds = [];
      var self = this,
        options = search.options,
        sort = !search.query && options.sort_empty ? options.sort_empty : options.sort;
      if (typeof sort == 'function') {
        return sort.bind(this);
      }
      /**
       * Fetches the specified sort field value
       * from a search result item.
       *
       */

      var get_field = function get_field(name, result) {
        if (name === '$score') return result.score;
        return search.getAttrFn(self.items[result.id], name);
      }; // parse options

      if (sort) {
        var _iterator9 = _createForOfIteratorHelper(sort),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var s = _step9.value;
            if (search.query || s.field !== '$score') {
              sort_flds.push(s);
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      } // the "$score" field is implied to be the primary
      // sort field, unless it's manually specified

      if (search.query) {
        implicit_score = true;
        var _iterator10 = _createForOfIteratorHelper(sort_flds),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var fld = _step10.value;
            if (fld.field === '$score') {
              implicit_score = false;
              break;
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        if (implicit_score) {
          sort_flds.unshift({
            field: '$score',
            direction: 'desc'
          });
        } // without a search.query, all items will have the same score
      } else {
        sort_flds = sort_flds.filter(function (fld) {
          return fld.field !== '$score';
        });
      } // build function

      var sort_flds_count = sort_flds.length;
      if (!sort_flds_count) {
        return null;
      }
      return function (a, b) {
        var result, field;
        var _iterator11 = _createForOfIteratorHelper(sort_flds),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var sort_fld = _step11.value;
            field = sort_fld.field;
            var multiplier = sort_fld.direction === 'desc' ? -1 : 1;
            result = multiplier * cmp(get_field(field, a), get_field(field, b));
            if (result) return result;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return 0;
      };
    }

    /**
     * Parses a search query and returns an object
     * with tokens and fields ready to be populated
     * with results.
     *
     */
  }, {
    key: "prepareSearch",
    value: function prepareSearch(query, optsUser) {
      var weights = {};
      var options = Object.assign({}, optsUser);
      propToArray(options, 'sort');
      propToArray(options, 'sort_empty'); // convert fields to new format

      if (options.fields) {
        propToArray(options, 'fields');
        var fields = [];
        options.fields.forEach(function (field) {
          if (typeof field == 'string') {
            field = {
              field: field,
              weight: 1
            };
          }
          fields.push(field);
          weights[field.field] = 'weight' in field ? field.weight : 1;
        });
        options.fields = fields;
      }
      return {
        options: options,
        query: query.toLowerCase().trim(),
        tokens: this.tokenize(query, options.respect_word_boundaries, weights),
        total: 0,
        items: [],
        weights: weights,
        getAttrFn: options.nesting ? getAttrNesting : getAttr
      };
    }

    /**
     * Searches through all items and returns a sorted array of matches.
     *
     */
  }, {
    key: "search",
    value: function search(query, options) {
      var self = this,
        score,
        search;
      search = this.prepareSearch(query, options);
      options = search.options;
      query = search.query; // generate result scoring function

      var fn_score = options.score || self._getScoreFunction(search); // perform search and sort

      if (query.length) {
        iterate$1(self.items, function (item, id) {
          score = fn_score(item);
          if (options.filter === false || score > 0) {
            search.items.push({
              'score': score,
              'id': id
            });
          }
        });
      } else {
        iterate$1(self.items, function (_, id) {
          search.items.push({
            'score': 1,
            'id': id
          });
        });
      }
      var fn_sort = self._getSortFunction(search);
      if (fn_sort) search.items.sort(fn_sort); // apply limits

      search.total = search.items.length;
      if (typeof options.limit === 'number') {
        search.items = search.items.slice(0, options.limit);
      }
      return search;
    }
  }]);
  return Sifter;
}();
/**
 * Iterates over arrays and hashes.
 *
 * ```
 * iterate(this.items, function(item, id) {
 *    // invoked for each item
 * });
 * ```
 *
 */
var iterate = function iterate(object, callback) {
  if (Array.isArray(object)) {
    object.forEach(callback);
  } else {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        callback(object[key], key);
      }
    }
  }
};

/**
 * Return a dom element from either a dom query string, jQuery object, a dom element or html string
 * https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
 *
 * param query should be {}
 */

var getDom = function getDom(query) {
  if (query.jquery) {
    return query[0];
  }
  if (query instanceof HTMLElement) {
    return query;
  }
  if (isHtmlString(query)) {
    var tpl = document.createElement('template');
    tpl.innerHTML = query.trim(); // Never return a text node of whitespace as the result

    return tpl.content.firstChild;
  }
  return document.querySelector(query);
};
var isHtmlString = function isHtmlString(arg) {
  if (typeof arg === 'string' && arg.indexOf('<') > -1) {
    return true;
  }
  return false;
};
var escapeQuery = function escapeQuery(query) {
  return query.replace(/['"\\]/g, '\\$&');
};
/**
 * Dispatch an event
 *
 */

var triggerEvent = function triggerEvent(dom_el, event_name) {
  var event = document.createEvent('HTMLEvents');
  event.initEvent(event_name, true, false);
  dom_el.dispatchEvent(event);
};
/**
 * Apply CSS rules to a dom element
 *
 */

var applyCSS = function applyCSS(dom_el, css) {
  Object.assign(dom_el.style, css);
};
/**
 * Add css classes
 *
 */

var addClasses = function addClasses(elmts) {
  for (var _len4 = arguments.length, classes = new Array(_len4 > 1 ? _len4 - 1 : 0), _key3 = 1; _key3 < _len4; _key3++) {
    classes[_key3 - 1] = arguments[_key3];
  }
  var norm_classes = classesArray(classes);
  elmts = castAsArray(elmts);
  elmts.map(function (el) {
    norm_classes.map(function (cls) {
      el.classList.add(cls);
    });
  });
};
/**
 * Remove css classes
 *
 */

var removeClasses = function removeClasses(elmts) {
  for (var _len5 = arguments.length, classes = new Array(_len5 > 1 ? _len5 - 1 : 0), _key4 = 1; _key4 < _len5; _key4++) {
    classes[_key4 - 1] = arguments[_key4];
  }
  var norm_classes = classesArray(classes);
  elmts = castAsArray(elmts);
  elmts.map(function (el) {
    norm_classes.map(function (cls) {
      el.classList.remove(cls);
    });
  });
};
/**
 * Return arguments
 *
 */

var classesArray = function classesArray(args) {
  var classes = [];
  iterate(args, function (_classes) {
    if (typeof _classes === 'string') {
      _classes = _classes.trim().split(/[\11\12\14\15\40]/);
    }
    if (Array.isArray(_classes)) {
      classes = classes.concat(_classes);
    }
  });
  return classes.filter(Boolean);
};
/**
 * Create an array from arg if it's not already an array
 *
 */

var castAsArray = function castAsArray(arg) {
  if (!Array.isArray(arg)) {
    arg = [arg];
  }
  return arg;
};
/**
 * Get the closest node to the evt.target matching the selector
 * Stops at wrapper
 *
 */

var parentMatch = function parentMatch(target, selector, wrapper) {
  if (wrapper && !wrapper.contains(target)) {
    return;
  }
  while (target && target.matches) {
    if (target.matches(selector)) {
      return target;
    }
    target = target.parentNode;
  }
};
/**
 * Get the first or last item from an array
 *
 * > 0 - right (last)
 * <= 0 - left (first)
 *
 */

var getTail = function getTail(list) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (direction > 0) {
    return list[list.length - 1];
  }
  return list[0];
};
/**
 * Return true if an object is empty
 *
 */

var isEmptyObject = function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
};
/**
 * Get the index of an element amongst sibling nodes of the same type
 *
 */

var nodeIndex = function nodeIndex(el, amongst) {
  if (!el) return -1;
  amongst = amongst || el.nodeName;
  var i = 0;
  while (el = el.previousElementSibling) {
    if (el.matches(amongst)) {
      i++;
    }
  }
  return i;
};
/**
 * Set attributes of an element
 *
 */

var setAttr = function setAttr(el, attrs) {
  iterate(attrs, function (val, attr) {
    if (val == null) {
      el.removeAttribute(attr);
    } else {
      el.setAttribute(attr, '' + val);
    }
  });
};
/**
 * Replace a node
 */

var replaceNode = function replaceNode(existing, replacement) {
  if (existing.parentNode) existing.parentNode.replaceChild(replacement, existing);
};

/**
 * highlight v3 | MIT license | Johann Burkard <jb@eaio.com>
 * Highlights arbitrary terms in a node.
 *
 * - Modified by Marshal <beatgates@gmail.com> 2011-6-24 (added regex)
 * - Modified by Brian Reavis <brian@thirdroute.com> 2012-8-27 (cleanup)
 */
var highlight = function highlight(element, regex) {
  if (regex === null) return; // convet string to regex

  if (typeof regex === 'string') {
    if (!regex.length) return;
    regex = new RegExp(regex, 'i');
  } // Wrap matching part of text node with highlighting <span>, e.g.
  // Soccer  ->  <span class="highlight">Soc</span>cer  for regex = /soc/i

  var highlightText = function highlightText(node) {
    var match = node.data.match(regex);
    if (match && node.data.length > 0) {
      var spannode = document.createElement('span');
      spannode.className = 'highlight';
      var middlebit = node.splitText(match.index);
      middlebit.splitText(match[0].length);
      var middleclone = middlebit.cloneNode(true);
      spannode.appendChild(middleclone);
      replaceNode(middlebit, spannode);
      return 1;
    }
    return 0;
  }; // Recurse element node, looking for child text nodes to highlight, unless element
  // is childless, <script>, <style>, or already highlighted: <span class="hightlight">

  var highlightChildren = function highlightChildren(node) {
    if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName) && (node.className !== 'highlight' || node.tagName !== 'SPAN')) {
      Array.from(node.childNodes).forEach(function (element) {
        highlightRecursive(element);
      });
    }
  };
  var highlightRecursive = function highlightRecursive(node) {
    if (node.nodeType === 3) {
      return highlightText(node);
    }
    highlightChildren(node);
    return 0;
  };
  highlightRecursive(element);
};
/**
 * removeHighlight fn copied from highlight v5 and
 * edited to remove with(), pass js strict mode, and use without jquery
 */

var removeHighlight = function removeHighlight(el) {
  var elements = el.querySelectorAll("span.highlight");
  Array.prototype.forEach.call(elements, function (el) {
    var parent = el.parentNode;
    parent.replaceChild(el.firstChild, el);
    parent.normalize();
  });
};
var KEY_A = 65;
var KEY_RETURN = 13;
var KEY_ESC = 27;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_BACKSPACE = 8;
var KEY_DELETE = 46;
var KEY_TAB = 9;
var IS_MAC = typeof navigator === 'undefined' ? false : /Mac/.test(navigator.userAgent);
var KEY_SHORTCUT = IS_MAC ? 'metaKey' : 'ctrlKey'; // ctrl key or apple key for ma

var defaults = {
  options: [],
  optgroups: [],
  plugins: [],
  delimiter: ',',
  splitOn: null,
  // regexp or string for splitting up values from a paste command
  persist: true,
  diacritics: true,
  create: null,
  createOnBlur: false,
  createFilter: null,
  highlight: true,
  openOnFocus: true,
  shouldOpen: null,
  maxOptions: 50,
  maxItems: null,
  hideSelected: null,
  duplicates: false,
  addPrecedence: false,
  selectOnTab: false,
  preload: null,
  allowEmptyOption: false,
  //closeAfterSelect: false,
  loadThrottle: 300,
  loadingClass: 'loading',
  dataAttr: null,
  //'data-data',
  optgroupField: 'optgroup',
  valueField: 'value',
  labelField: 'text',
  disabledField: 'disabled',
  optgroupLabelField: 'label',
  optgroupValueField: 'value',
  lockOptgroupOrder: false,
  sortField: '$order',
  searchField: ['text'],
  searchConjunction: 'and',
  mode: null,
  wrapperClass: 'ts-wrapper',
  controlClass: 'ts-control',
  dropdownClass: 'ts-dropdown',
  dropdownContentClass: 'ts-dropdown-content',
  itemClass: 'item',
  optionClass: 'option',
  dropdownParent: null,
  controlInput: '<input type="text" autocomplete="off" size="1" />',
  copyClassesToDropdown: false,
  placeholder: null,
  hidePlaceholder: null,
  shouldLoad: function shouldLoad(query) {
    return query.length > 0;
  },
  /*
  load                 : null, // function(query, callback) { ... }
  score                : null, // function(search) { ... }
  onInitialize         : null, // function() { ... }
  onChange             : null, // function(value) { ... }
  onItemAdd            : null, // function(value, $item) { ... }
  onItemRemove         : null, // function(value) { ... }
  onClear              : null, // function() { ... }
  onOptionAdd          : null, // function(value, data) { ... }
  onOptionRemove       : null, // function(value) { ... }
  onOptionClear        : null, // function() { ... }
  onOptionGroupAdd     : null, // function(id, data) { ... }
  onOptionGroupRemove  : null, // function(id) { ... }
  onOptionGroupClear   : null, // function() { ... }
  onDropdownOpen       : null, // function(dropdown) { ... }
  onDropdownClose      : null, // function(dropdown) { ... }
  onType               : null, // function(str) { ... }
  onDelete             : null, // function(values) { ... }
  */
  render: {
    /*
    item: null,
    optgroup: null,
    optgroup_header: null,
    option: null,
    option_create: null
    */
  }
};

/**
 * Converts a scalar to its best string representation
 * for hash keys and HTML attribute values.
 *
 * Transformations:
 *   'str'     -> 'str'
 *   null      -> ''
 *   undefined -> ''
 *   true      -> '1'
 *   false     -> '0'
 *   0         -> '0'
 *   1         -> '1'
 *
 */
var hash_key = function hash_key(value) {
  if (typeof value === 'undefined' || value === null) return null;
  return get_hash(value);
};
var get_hash = function get_hash(value) {
  if (typeof value === 'boolean') return value ? '1' : '0';
  return value + '';
};
/**
 * Escapes a string for use within HTML.
 *
 */

var escape_html = function escape_html(str) {
  return (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};
/**
 * Debounce the user provided load function
 *
 */

var loadDebounce = function loadDebounce(fn, delay) {
  var timeout;
  return function (value, callback) {
    var self = this;
    if (timeout) {
      self.loading = Math.max(self.loading - 1, 0);
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      timeout = null;
      self.loadedSearches[value] = true;
      fn.call(self, value, callback);
    }, delay);
  };
};
/**
 * Debounce all fired events types listed in `types`
 * while executing the provided `fn`.
 *
 */

var debounce_events = function debounce_events(self, types, fn) {
  var type;
  var trigger = self.trigger;
  var event_args = {}; // override trigger method

  self.trigger = function () {
    var type = arguments[0];
    if (types.indexOf(type) !== -1) {
      event_args[type] = arguments;
    } else {
      return trigger.apply(self, arguments);
    }
  }; // invoke provided function

  fn.apply(self, []);
  self.trigger = trigger; // trigger queued events
  var _iterator12 = _createForOfIteratorHelper(types),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      type = _step12.value;
      if (type in event_args) {
        trigger.apply(self, event_args[type]);
      }
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
};
/**
 * Determines the current selection within a text input control.
 * Returns an object containing:
 *   - start
 *   - length
 *
 */

var getSelection = function getSelection(input) {
  return {
    start: input.selectionStart || 0,
    length: (input.selectionEnd || 0) - (input.selectionStart || 0)
  };
};
/**
 * Prevent default
 *
 */

var preventDefault = function preventDefault(evt) {
  var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (evt) {
    evt.preventDefault();
    if (stop) {
      evt.stopPropagation();
    }
  }
};
/**
 * Add event helper
 *
 */

var addEvent = function addEvent(target, type, callback, options) {
  target.addEventListener(type, callback, options);
};
/**
 * Return true if the requested key is down
 * Will return false if more than one control character is pressed ( when [ctrl+shift+a] != [ctrl+a] )
 * The current evt may not always set ( eg calling advanceSelection() )
 *
 */

var isKeyDown = function isKeyDown(key_name, evt) {
  if (!evt) {
    return false;
  }
  if (!evt[key_name]) {
    return false;
  }
  var count = (evt.altKey ? 1 : 0) + (evt.ctrlKey ? 1 : 0) + (evt.shiftKey ? 1 : 0) + (evt.metaKey ? 1 : 0);
  if (count === 1) {
    return true;
  }
  return false;
};
/**
 * Get the id of an element
 * If the id attribute is not set, set the attribute with the given id
 *
 */

var getId = function getId(el, id) {
  var existing_id = el.getAttribute('id');
  if (existing_id) {
    return existing_id;
  }
  el.setAttribute('id', id);
  return id;
};
/**
 * Returns a string with backslashes added before characters that need to be escaped.
 */

var addSlashes = function addSlashes(str) {
  return str.replace(/[\\"']/g, '\\$&');
};
/**
 *
 */

var append = function append(parent, node) {
  if (node) parent.append(node);
};
function getSettings(input, settings_user) {
  var settings = Object.assign({}, defaults, settings_user);
  var attr_data = settings.dataAttr;
  var field_label = settings.labelField;
  var field_value = settings.valueField;
  var field_disabled = settings.disabledField;
  var field_optgroup = settings.optgroupField;
  var field_optgroup_label = settings.optgroupLabelField;
  var field_optgroup_value = settings.optgroupValueField;
  var tag_name = input.tagName.toLowerCase();
  var placeholder = input.getAttribute('placeholder') || input.getAttribute('data-placeholder');
  if (!placeholder && !settings.allowEmptyOption) {
    var option = input.querySelector('option[value=""]');
    if (option) {
      placeholder = option.textContent;
    }
  }
  var settings_element = {
    placeholder: placeholder,
    options: [],
    optgroups: [],
    items: [],
    maxItems: null
  };
  /**
   * Initialize from a <select> element.
   *
   */

  var init_select = function init_select() {
    var tagName;
    var options = settings_element.options;
    var optionsMap = {};
    var group_count = 1;
    var readData = function readData(el) {
      var data = Object.assign({}, el.dataset); // get plain object from DOMStringMap

      var json = attr_data && data[attr_data];
      if (typeof json === 'string' && json.length) {
        data = Object.assign(data, JSON.parse(json));
      }
      return data;
    };
    var addOption = function addOption(option, group) {
      var value = hash_key(option.value);
      if (value == null) return;
      if (!value && !settings.allowEmptyOption) return; // if the option already exists, it's probably been
      // duplicated in another optgroup. in this case, push
      // the current group to the "optgroup" property on the
      // existing option so that it's rendered in both places.

      if (optionsMap.hasOwnProperty(value)) {
        if (group) {
          var arr = optionsMap[value][field_optgroup];
          if (!arr) {
            optionsMap[value][field_optgroup] = group;
          } else if (!Array.isArray(arr)) {
            optionsMap[value][field_optgroup] = [arr, group];
          } else {
            arr.push(group);
          }
        }
      } else {
        var option_data = readData(option);
        option_data[field_label] = option_data[field_label] || option.textContent;
        option_data[field_value] = option_data[field_value] || value;
        option_data[field_disabled] = option_data[field_disabled] || option.disabled;
        option_data[field_optgroup] = option_data[field_optgroup] || group;
        option_data.$option = option;
        optionsMap[value] = option_data;
        options.push(option_data);
      }
      if (option.selected) {
        settings_element.items.push(value);
      }
    };
    var addGroup = function addGroup(optgroup) {
      var id, optgroup_data;
      optgroup_data = readData(optgroup);
      optgroup_data[field_optgroup_label] = optgroup_data[field_optgroup_label] || optgroup.getAttribute('label') || '';
      optgroup_data[field_optgroup_value] = optgroup_data[field_optgroup_value] || group_count++;
      optgroup_data[field_disabled] = optgroup_data[field_disabled] || optgroup.disabled;
      settings_element.optgroups.push(optgroup_data);
      id = optgroup_data[field_optgroup_value];
      iterate(optgroup.children, function (option) {
        addOption(option, id);
      });
    };
    settings_element.maxItems = input.hasAttribute('multiple') ? null : 1;
    iterate(input.children, function (child) {
      tagName = child.tagName.toLowerCase();
      if (tagName === 'optgroup') {
        addGroup(child);
      } else if (tagName === 'option') {
        addOption(child);
      }
    });
  };
  /**
   * Initialize from a <input type="text"> element.
   *
   */

  var init_textbox = function init_textbox() {
    var data_raw = input.getAttribute(attr_data);
    if (!data_raw) {
      var value = input.value.trim() || '';
      if (!settings.allowEmptyOption && !value.length) return;
      var values = value.split(settings.delimiter);
      iterate(values, function (value) {
        var option = {};
        option[field_label] = value;
        option[field_value] = value;
        settings_element.options.push(option);
      });
      settings_element.items = values;
    } else {
      settings_element.options = JSON.parse(data_raw);
      iterate(settings_element.options, function (opt) {
        settings_element.items.push(opt[field_value]);
      });
    }
  };
  if (tag_name === 'select') {
    init_select();
  } else {
    init_textbox();
  }
  return Object.assign({}, defaults, settings_element, settings_user);
}
var instance_i = 0;
var TomSelect = /*#__PURE__*/function (_MicroPlugin) {
  _inherits(TomSelect, _MicroPlugin);
  // @deprecated 1.8
  function TomSelect(input_arg, user_settings) {
    var _this5;
    _classCallCheck(this, TomSelect);
    _this5 = _callSuper(this, TomSelect);
    _this5.control_input = void 0;
    _this5.wrapper = void 0;
    _this5.dropdown = void 0;
    _this5.control = void 0;
    _this5.dropdown_content = void 0;
    _this5.focus_node = void 0;
    _this5.order = 0;
    _this5.settings = void 0;
    _this5.input = void 0;
    _this5.tabIndex = void 0;
    _this5.is_select_tag = void 0;
    _this5.rtl = void 0;
    _this5.inputId = void 0;
    _this5._destroy = void 0;
    _this5.sifter = void 0;
    _this5.isOpen = false;
    _this5.isDisabled = false;
    _this5.isRequired = void 0;
    _this5.isInvalid = false;
    _this5.isValid = true;
    _this5.isLocked = false;
    _this5.isFocused = false;
    _this5.isInputHidden = false;
    _this5.isSetup = false;
    _this5.ignoreFocus = false;
    _this5.ignoreHover = false;
    _this5.hasOptions = false;
    _this5.currentResults = void 0;
    _this5.lastValue = '';
    _this5.caretPos = 0;
    _this5.loading = 0;
    _this5.loadedSearches = {};
    _this5.activeOption = null;
    _this5.activeItems = [];
    _this5.optgroups = {};
    _this5.options = {};
    _this5.userOptions = {};
    _this5.items = [];
    instance_i++;
    var dir;
    var input = getDom(input_arg);
    if (input.tomselect) {
      throw new Error('Tom Select already initialized on this element');
    }
    input.tomselect = _assertThisInitialized(_this5); // detect rtl environment

    var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
    dir = computedStyle.getPropertyValue('direction'); // setup default state

    var settings = getSettings(input, user_settings);
    _this5.settings = settings;
    _this5.input = input;
    _this5.tabIndex = input.tabIndex || 0;
    _this5.is_select_tag = input.tagName.toLowerCase() === 'select';
    _this5.rtl = /rtl/i.test(dir);
    _this5.inputId = getId(input, 'tomselect-' + instance_i);
    _this5.isRequired = input.required; // search system

    _this5.sifter = new Sifter(_this5.options, {
      diacritics: settings.diacritics
    }); // option-dependent defaults

    settings.mode = settings.mode || (settings.maxItems === 1 ? 'single' : 'multi');
    if (typeof settings.hideSelected !== 'boolean') {
      settings.hideSelected = settings.mode === 'multi';
    }
    if (typeof settings.hidePlaceholder !== 'boolean') {
      settings.hidePlaceholder = settings.mode !== 'multi';
    } // set up createFilter callback

    var filter = settings.createFilter;
    if (typeof filter !== 'function') {
      if (typeof filter === 'string') {
        filter = new RegExp(filter);
      }
      if (filter instanceof RegExp) {
        settings.createFilter = function (input) {
          return filter.test(input);
        };
      } else {
        settings.createFilter = function (value) {
          return _this5.settings.duplicates || !_this5.options[value];
        };
      }
    }
    _this5.initializePlugins(settings.plugins);
    _this5.setupCallbacks();
    _this5.setupTemplates(); // Create all elements

    var wrapper = getDom('<div>');
    var control = getDom('<div>');
    var dropdown = _this5._render('dropdown');
    var dropdown_content = getDom("<div role=\"listbox\" tabindex=\"-1\">");
    var classes = _this5.input.getAttribute('class') || '';
    var inputMode = settings.mode;
    var control_input;
    addClasses(wrapper, settings.wrapperClass, classes, inputMode);
    addClasses(control, settings.controlClass);
    append(wrapper, control);
    addClasses(dropdown, settings.dropdownClass, inputMode);
    if (settings.copyClassesToDropdown) {
      addClasses(dropdown, classes);
    }
    addClasses(dropdown_content, settings.dropdownContentClass);
    append(dropdown, dropdown_content);
    getDom(settings.dropdownParent || wrapper).appendChild(dropdown); // default controlInput

    if (isHtmlString(settings.controlInput)) {
      control_input = getDom(settings.controlInput); // set attributes

      var attrs = ['autocorrect', 'autocapitalize', 'autocomplete'];
      iterate$1(attrs, function (attr) {
        if (input.getAttribute(attr)) {
          setAttr(control_input, _defineProperty({}, attr, input.getAttribute(attr)));
        }
      });
      control_input.tabIndex = -1;
      control.appendChild(control_input);
      _this5.focus_node = control_input; // dom element
    } else if (settings.controlInput) {
      control_input = getDom(settings.controlInput);
      _this5.focus_node = control_input;
    } else {
      control_input = getDom('<input/>');
      _this5.focus_node = control;
    }
    _this5.wrapper = wrapper;
    _this5.dropdown = dropdown;
    _this5.dropdown_content = dropdown_content;
    _this5.control = control;
    _this5.control_input = control_input;
    _this5.setup();
    return _this5;
  }
  /**
   * set up event bindings.
   *
   */
  _createClass(TomSelect, [{
    key: "setup",
    value: function setup() {
      var self = this;
      var settings = self.settings;
      var control_input = self.control_input;
      var dropdown = self.dropdown;
      var dropdown_content = self.dropdown_content;
      var wrapper = self.wrapper;
      var control = self.control;
      var input = self.input;
      var focus_node = self.focus_node;
      var passive_event = {
        passive: true
      };
      var listboxId = self.inputId + '-ts-dropdown';
      setAttr(dropdown_content, {
        id: listboxId
      });
      setAttr(focus_node, {
        role: 'combobox',
        'aria-haspopup': 'listbox',
        'aria-expanded': 'false',
        'aria-controls': listboxId
      });
      var control_id = getId(focus_node, self.inputId + '-ts-control');
      var query = "label[for='" + escapeQuery(self.inputId) + "']";
      var label = document.querySelector(query);
      var label_click = self.focus.bind(self);
      if (label) {
        addEvent(label, 'click', label_click);
        setAttr(label, {
          "for": control_id
        });
        var label_id = getId(label, self.inputId + '-ts-label');
        setAttr(focus_node, {
          'aria-labelledby': label_id
        });
        setAttr(dropdown_content, {
          'aria-labelledby': label_id
        });
      }
      wrapper.style.width = input.style.width;
      if (self.plugins.names.length) {
        var classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
        addClasses([wrapper, dropdown], classes_plugins);
      }
      if ((settings.maxItems === null || settings.maxItems > 1) && self.is_select_tag) {
        setAttr(input, {
          multiple: 'multiple'
        });
      }
      if (settings.placeholder) {
        setAttr(control_input, {
          placeholder: settings.placeholder
        });
      } // if splitOn was not passed in, construct it from the delimiter to allow pasting universally

      if (!settings.splitOn && settings.delimiter) {
        settings.splitOn = new RegExp('\\s*' + escape_regex(settings.delimiter) + '+\\s*');
      } // debounce user defined load() if loadThrottle > 0
      // after initializePlugins() so plugins can create/modify user defined loaders

      if (settings.load && settings.loadThrottle) {
        settings.load = loadDebounce(settings.load, settings.loadThrottle);
      }
      self.control_input.type = input.type;
      addEvent(dropdown, 'mousemove', function () {
        self.ignoreHover = false;
      });
      addEvent(dropdown, 'mouseenter', function (e) {
        var target_match = parentMatch(e.target, '[data-selectable]', dropdown);
        if (target_match) self.onOptionHover(e, target_match);
      }, {
        capture: true
      }); // clicking on an option should select it

      addEvent(dropdown, 'click', function (evt) {
        var option = parentMatch(evt.target, '[data-selectable]');
        if (option) {
          self.onOptionSelect(evt, option);
          preventDefault(evt, true);
        }
      });
      addEvent(control, 'click', function (evt) {
        var target_match = parentMatch(evt.target, '[data-ts-item]', control);
        if (target_match && self.onItemSelect(evt, target_match)) {
          preventDefault(evt, true);
          return;
        } // retain focus (see control_input mousedown)

        if (control_input.value != '') {
          return;
        }
        self.onClick();
        preventDefault(evt, true);
      }); // keydown on focus_node for arrow_down/arrow_up

      addEvent(focus_node, 'keydown', function (e) {
        return self.onKeyDown(e);
      }); // keypress and input/keyup

      addEvent(control_input, 'keypress', function (e) {
        return self.onKeyPress(e);
      });
      addEvent(control_input, 'input', function (e) {
        return self.onInput(e);
      });
      addEvent(focus_node, 'blur', function (e) {
        return self.onBlur(e);
      });
      addEvent(focus_node, 'focus', function (e) {
        return self.onFocus(e);
      });
      addEvent(control_input, 'paste', function (e) {
        return self.onPaste(e);
      });
      var doc_mousedown = function doc_mousedown(evt) {
        // blur if target is outside of this instance
        // dropdown is not always inside wrapper
        var target = evt.composedPath()[0];
        if (!wrapper.contains(target) && !dropdown.contains(target)) {
          if (self.isFocused) {
            self.blur();
          }
          self.inputState();
          return;
        } // retain focus by preventing native handling. if the
        // event target is the input it should not be modified.
        // otherwise, text selection within the input won't work.
        // Fixes bug #212 which is no covered by tests

        if (target == control_input && self.isOpen) {
          evt.stopPropagation(); // clicking anywhere in the control should not blur the control_input (which would close the dropdown)
        } else {
          preventDefault(evt, true);
        }
      };
      var win_scroll = function win_scroll() {
        if (self.isOpen) {
          self.positionDropdown();
        }
      };
      addEvent(document, 'mousedown', doc_mousedown);
      addEvent(window, 'scroll', win_scroll, passive_event);
      addEvent(window, 'resize', win_scroll, passive_event);
      this._destroy = function () {
        document.removeEventListener('mousedown', doc_mousedown);
        window.removeEventListener('scroll', win_scroll);
        window.removeEventListener('resize', win_scroll);
        if (label) label.removeEventListener('click', label_click);
      }; // store original html and tab index so that they can be
      // restored when the destroy() method is called.

      this.revertSettings = {
        innerHTML: input.innerHTML,
        tabIndex: input.tabIndex
      };
      input.tabIndex = -1;
      input.insertAdjacentElement('afterend', self.wrapper);
      self.sync(false);
      settings.items = [];
      delete settings.optgroups;
      delete settings.options;
      addEvent(input, 'invalid', function () {
        if (self.isValid) {
          self.isValid = false;
          self.isInvalid = true;
          self.refreshState();
        }
      });
      self.updateOriginalInput();
      self.refreshItems();
      self.close(false);
      self.inputState();
      self.isSetup = true;
      if (input.disabled) {
        self.disable();
      } else {
        self.enable(); //sets tabIndex
      }
      self.on('change', this.onChange);
      addClasses(input, 'tomselected', 'ts-hidden-accessible');
      self.trigger('initialize'); // preload options

      if (settings.preload === true) {
        self.preload();
      }
    }
    /**
     * Register options and optgroups
     *
     */
  }, {
    key: "setupOptions",
    value: function setupOptions() {
      var _this6 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var optgroups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      // build options table
      this.addOptions(options); // build optgroup table

      iterate$1(optgroups, function (optgroup) {
        _this6.registerOptionGroup(optgroup);
      });
    }
    /**
     * Sets up default rendering functions.
     */
  }, {
    key: "setupTemplates",
    value: function setupTemplates() {
      var self = this;
      var field_label = self.settings.labelField;
      var field_optgroup = self.settings.optgroupLabelField;
      var templates = {
        'optgroup': function optgroup(data) {
          var optgroup = document.createElement('div');
          optgroup.className = 'optgroup';
          optgroup.appendChild(data.options);
          return optgroup;
        },
        'optgroup_header': function optgroup_header(data, escape) {
          return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
        },
        'option': function option(data, escape) {
          return '<div>' + escape(data[field_label]) + '</div>';
        },
        'item': function item(data, escape) {
          return '<div>' + escape(data[field_label]) + '</div>';
        },
        'option_create': function option_create(data, escape) {
          return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
        },
        'no_results': function no_results() {
          return '<div class="no-results">No results found</div>';
        },
        'loading': function loading() {
          return '<div class="spinner"></div>';
        },
        'not_loading': function not_loading() {},
        'dropdown': function dropdown() {
          return '<div></div>';
        }
      };
      self.settings.render = Object.assign({}, templates, self.settings.render);
    }
    /**
     * Maps fired events to callbacks provided
     * in the settings used when creating the control.
     */
  }, {
    key: "setupCallbacks",
    value: function setupCallbacks() {
      var key, fn;
      var callbacks = {
        'initialize': 'onInitialize',
        'change': 'onChange',
        'item_add': 'onItemAdd',
        'item_remove': 'onItemRemove',
        'item_select': 'onItemSelect',
        'clear': 'onClear',
        'option_add': 'onOptionAdd',
        'option_remove': 'onOptionRemove',
        'option_clear': 'onOptionClear',
        'optgroup_add': 'onOptionGroupAdd',
        'optgroup_remove': 'onOptionGroupRemove',
        'optgroup_clear': 'onOptionGroupClear',
        'dropdown_open': 'onDropdownOpen',
        'dropdown_close': 'onDropdownClose',
        'type': 'onType',
        'load': 'onLoad',
        'focus': 'onFocus',
        'blur': 'onBlur'
      };
      for (key in callbacks) {
        fn = this.settings[callbacks[key]];
        if (fn) this.on(key, fn);
      }
    }
    /**
     * Sync the Tom Select instance with the original input or select
     *
     */
  }, {
    key: "sync",
    value: function sync() {
      var get_settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var self = this;
      var settings = get_settings ? getSettings(self.input, {
        delimiter: self.settings.delimiter
      }) : self.settings;
      self.setupOptions(settings.options, settings.optgroups);
      self.setValue(settings.items || [], true); // silent prevents recursion

      self.lastQuery = null; // so updated options will be displayed in dropdown
    }
    /**
     * Triggered when the main control element
     * has a click event.
     *
     */
  }, {
    key: "onClick",
    value: function onClick() {
      var self = this;
      if (self.activeItems.length > 0) {
        self.clearActiveItems();
        self.focus();
        return;
      }
      if (self.isFocused && self.isOpen) {
        self.blur();
      } else {
        self.focus();
      }
    }
    /**
     * @deprecated v1.7
     *
     */
  }, {
    key: "onMouseDown",
    value: function onMouseDown() {}
    /**
     * Triggered when the value of the control has been changed.
     * This should propagate the event to the original DOM
     * input / select element.
     */
  }, {
    key: "onChange",
    value: function onChange() {
      triggerEvent(this.input, 'input');
      triggerEvent(this.input, 'change');
    }
    /**
     * Triggered on <input> paste.
     *
     */
  }, {
    key: "onPaste",
    value: function onPaste(e) {
      var _this7 = this;
      var self = this;
      if (self.isInputHidden || self.isLocked) {
        preventDefault(e);
        return;
      } // If a regex or string is included, this will split the pasted
      // input and create Items for each separate value

      if (!self.settings.splitOn) {
        return;
      } // Wait for pasted text to be recognized in value

      setTimeout(function () {
        var pastedText = self.inputValue();
        if (!pastedText.match(self.settings.splitOn)) {
          return;
        }
        var splitInput = pastedText.trim().split(self.settings.splitOn);
        iterate$1(splitInput, function (piece) {
          var hash = hash_key(piece);
          if (hash) {
            if (_this7.options[piece]) {
              self.addItem(piece);
            } else {
              self.createItem(piece);
            }
          }
        });
      }, 0);
    }
    /**
     * Triggered on <input> keypress.
     *
     */
  }, {
    key: "onKeyPress",
    value: function onKeyPress(e) {
      var self = this;
      if (self.isLocked) {
        preventDefault(e);
        return;
      }
      var character = String.fromCharCode(e.keyCode || e.which);
      if (self.settings.create && self.settings.mode === 'multi' && character === self.settings.delimiter) {
        self.createItem();
        preventDefault(e);
        return;
      }
    }
    /**
     * Triggered on <input> keydown.
     *
     */
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var self = this;
      self.ignoreHover = true;
      if (self.isLocked) {
        if (e.keyCode !== KEY_TAB) {
          preventDefault(e);
        }
        return;
      }
      switch (e.keyCode) {
        // ctrl+A: select all
        case KEY_A:
          if (isKeyDown(KEY_SHORTCUT, e)) {
            if (self.control_input.value == '') {
              preventDefault(e);
              self.selectAll();
              return;
            }
          }
          break;
        // esc: close dropdown

        case KEY_ESC:
          if (self.isOpen) {
            preventDefault(e, true);
            self.close();
          }
          self.clearActiveItems();
          return;
        // down: open dropdown or move selection down

        case KEY_DOWN:
          if (!self.isOpen && self.hasOptions) {
            self.open();
          } else if (self.activeOption) {
            var next = self.getAdjacent(self.activeOption, 1);
            if (next) self.setActiveOption(next);
          }
          preventDefault(e);
          return;
        // up: move selection up

        case KEY_UP:
          if (self.activeOption) {
            var prev = self.getAdjacent(self.activeOption, -1);
            if (prev) self.setActiveOption(prev);
          }
          preventDefault(e);
          return;
        // return: select active option

        case KEY_RETURN:
          if (self.canSelect(self.activeOption)) {
            self.onOptionSelect(e, self.activeOption);
            preventDefault(e); // if the option_create=null, the dropdown might be closed
          } else if (self.settings.create && self.createItem()) {
            preventDefault(e); // don't submit form when searching for a value
          } else if (document.activeElement == self.control_input && self.isOpen) {
            preventDefault(e);
          }
          return;
        // left: modifiy item selection to the left

        case KEY_LEFT:
          self.advanceSelection(-1, e);
          return;
        // right: modifiy item selection to the right

        case KEY_RIGHT:
          self.advanceSelection(1, e);
          return;
        // tab: select active option and/or create item

        case KEY_TAB:
          if (self.settings.selectOnTab) {
            if (self.canSelect(self.activeOption)) {
              self.onOptionSelect(e, self.activeOption); // prevent default [tab] behaviour of jump to the next field
              // if select isFull, then the dropdown won't be open and [tab] will work normally

              preventDefault(e);
            }
            if (self.settings.create && self.createItem()) {
              preventDefault(e);
            }
          }
          return;
        // delete|backspace: delete items

        case KEY_BACKSPACE:
        case KEY_DELETE:
          self.deleteSelection(e);
          return;
      } // don't enter text in the control_input when active items are selected

      if (self.isInputHidden && !isKeyDown(KEY_SHORTCUT, e)) {
        preventDefault(e);
      }
    }
    /**
     * Triggered on <input> keyup.
     *
     */
  }, {
    key: "onInput",
    value: function onInput(e) {
      var self = this;
      if (self.isLocked) {
        return;
      }
      var value = self.inputValue();
      if (self.lastValue !== value) {
        self.lastValue = value;
        if (self.settings.shouldLoad.call(self, value)) {
          self.load(value);
        }
        self.refreshOptions();
        self.trigger('type', value);
      }
    }
    /**
     * Triggered when the user rolls over
     * an option in the autocomplete dropdown menu.
     *
     */
  }, {
    key: "onOptionHover",
    value: function onOptionHover(evt, option) {
      if (this.ignoreHover) return;
      this.setActiveOption(option, false);
    }
    /**
     * Triggered on <input> focus.
     *
     */
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var self = this;
      var wasFocused = self.isFocused;
      if (self.isDisabled) {
        self.blur();
        preventDefault(e);
        return;
      }
      if (self.ignoreFocus) return;
      self.isFocused = true;
      if (self.settings.preload === 'focus') self.preload();
      if (!wasFocused) self.trigger('focus');
      if (!self.activeItems.length) {
        self.showInput();
        self.refreshOptions(!!self.settings.openOnFocus);
      }
      self.refreshState();
    }
    /**
     * Triggered on <input> blur.
     *
     */
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (document.hasFocus() === false) return;
      var self = this;
      if (!self.isFocused) return;
      self.isFocused = false;
      self.ignoreFocus = false;
      var deactivate = function deactivate() {
        self.close();
        self.setActiveItem();
        self.setCaret(self.items.length);
        self.trigger('blur');
      };
      if (self.settings.create && self.settings.createOnBlur) {
        self.createItem(null, deactivate);
      } else {
        deactivate();
      }
    }
    /**
     * Triggered when the user clicks on an option
     * in the autocomplete dropdown menu.
     *
     */
  }, {
    key: "onOptionSelect",
    value: function onOptionSelect(evt, option) {
      var value,
        self = this; // should not be possible to trigger a option under a disabled optgroup

      if (option.parentElement && option.parentElement.matches('[data-disabled]')) {
        return;
      }
      if (option.classList.contains('create')) {
        self.createItem(null, function () {
          if (self.settings.closeAfterSelect) {
            self.close();
          }
        });
      } else {
        value = option.dataset.value;
        if (typeof value !== 'undefined') {
          self.lastQuery = null;
          self.addItem(value);
          if (self.settings.closeAfterSelect) {
            self.close();
          }
          if (!self.settings.hideSelected && evt.type && /click/.test(evt.type)) {
            self.setActiveOption(option);
          }
        }
      }
    }
    /**
     * Return true if the given option can be selected
     *
     */
  }, {
    key: "canSelect",
    value: function canSelect(option) {
      if (this.isOpen && option && this.dropdown_content.contains(option)) {
        return true;
      }
      return false;
    }
    /**
     * Triggered when the user clicks on an item
     * that has been selected.
     *
     */
  }, {
    key: "onItemSelect",
    value: function onItemSelect(evt, item) {
      var self = this;
      if (!self.isLocked && self.settings.mode === 'multi') {
        preventDefault(evt);
        self.setActiveItem(item, evt);
        return true;
      }
      return false;
    }
    /**
     * Determines whether or not to invoke
     * the user-provided option provider / loader
     *
     * Note, there is a subtle difference between
     * this.canLoad() and this.settings.shouldLoad();
     *
     *	- settings.shouldLoad() is a user-input validator.
     *	When false is returned, the not_loading template
     *	will be added to the dropdown
     *
     *	- canLoad() is lower level validator that checks
     * 	the Tom Select instance. There is no inherent user
     *	feedback when canLoad returns false
     *
     */
  }, {
    key: "canLoad",
    value: function canLoad(value) {
      if (!this.settings.load) return false;
      if (this.loadedSearches.hasOwnProperty(value)) return false;
      return true;
    }
    /**
     * Invokes the user-provided option provider / loader.
     *
     */
  }, {
    key: "load",
    value: function load(value) {
      var self = this;
      if (!self.canLoad(value)) return;
      addClasses(self.wrapper, self.settings.loadingClass);
      self.loading++;
      var callback = self.loadCallback.bind(self);
      self.settings.load.call(self, value, callback);
    }
    /**
     * Invoked by the user-provided option provider
     *
     */
  }, {
    key: "loadCallback",
    value: function loadCallback(options, optgroups) {
      var self = this;
      self.loading = Math.max(self.loading - 1, 0);
      self.lastQuery = null;
      self.clearActiveOption(); // when new results load, focus should be on first option

      self.setupOptions(options, optgroups);
      self.refreshOptions(self.isFocused && !self.isInputHidden);
      if (!self.loading) {
        removeClasses(self.wrapper, self.settings.loadingClass);
      }
      self.trigger('load', options, optgroups);
    }
  }, {
    key: "preload",
    value: function preload() {
      var classList = this.wrapper.classList;
      if (classList.contains('preloaded')) return;
      classList.add('preloaded');
      this.load('');
    }
    /**
     * Sets the input field of the control to the specified value.
     *
     */
  }, {
    key: "setTextboxValue",
    value: function setTextboxValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var input = this.control_input;
      var changed = input.value !== value;
      if (changed) {
        input.value = value;
        triggerEvent(input, 'update');
        this.lastValue = value;
      }
    }
    /**
     * Returns the value of the control. If multiple items
     * can be selected (e.g. <select multiple>), this returns
     * an array. If only one item can be selected, this
     * returns a string.
     *
     */
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.is_select_tag && this.input.hasAttribute('multiple')) {
        return this.items;
      }
      return this.items.join(this.settings.delimiter);
    }
    /**
     * Resets the selected items to the given value.
     *
     */
  }, {
    key: "setValue",
    value: function setValue(value, silent) {
      var _this8 = this;
      var events = silent ? [] : ['change'];
      debounce_events(this, events, function () {
        _this8.clear(silent);
        _this8.addItems(value, silent);
      });
    }
    /**
     * Resets the number of max items to the given value
     *
     */
  }, {
    key: "setMaxItems",
    value: function setMaxItems(value) {
      if (value === 0) value = null; //reset to unlimited items.

      this.settings.maxItems = value;
      this.refreshState();
    }
    /**
     * Sets the selected item.
     *
     */
  }, {
    key: "setActiveItem",
    value: function setActiveItem(item, e) {
      var self = this;
      var eventName;
      var i, begin, end, swap;
      var last;
      if (self.settings.mode === 'single') return; // clear the active selection

      if (!item) {
        self.clearActiveItems();
        if (self.isFocused) {
          self.showInput();
        }
        return;
      } // modify selection

      eventName = e && e.type.toLowerCase();
      if (eventName === 'click' && isKeyDown('shiftKey', e) && self.activeItems.length) {
        last = self.getLastActive();
        begin = Array.prototype.indexOf.call(self.control.children, last);
        end = Array.prototype.indexOf.call(self.control.children, item);
        if (begin > end) {
          swap = begin;
          begin = end;
          end = swap;
        }
        for (i = begin; i <= end; i++) {
          item = self.control.children[i];
          if (self.activeItems.indexOf(item) === -1) {
            self.setActiveItemClass(item);
          }
        }
        preventDefault(e);
      } else if (eventName === 'click' && isKeyDown(KEY_SHORTCUT, e) || eventName === 'keydown' && isKeyDown('shiftKey', e)) {
        if (item.classList.contains('active')) {
          self.removeActiveItem(item);
        } else {
          self.setActiveItemClass(item);
        }
      } else {
        self.clearActiveItems();
        self.setActiveItemClass(item);
      } // ensure control has focus

      self.hideInput();
      if (!self.isFocused) {
        self.focus();
      }
    }
    /**
     * Set the active and last-active classes
     *
     */
  }, {
    key: "setActiveItemClass",
    value: function setActiveItemClass(item) {
      var self = this;
      var last_active = self.control.querySelector('.last-active');
      if (last_active) removeClasses(last_active, 'last-active');
      addClasses(item, 'active last-active');
      self.trigger('item_select', item);
      if (self.activeItems.indexOf(item) == -1) {
        self.activeItems.push(item);
      }
    }
    /**
     * Remove active item
     *
     */
  }, {
    key: "removeActiveItem",
    value: function removeActiveItem(item) {
      var idx = this.activeItems.indexOf(item);
      this.activeItems.splice(idx, 1);
      removeClasses(item, 'active');
    }
    /**
     * Clears all the active items
     *
     */
  }, {
    key: "clearActiveItems",
    value: function clearActiveItems() {
      removeClasses(this.activeItems, 'active');
      this.activeItems = [];
    }
    /**
     * Sets the selected item in the dropdown menu
     * of available options.
     *
     */
  }, {
    key: "setActiveOption",
    value: function setActiveOption(option) {
      var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (option === this.activeOption) {
        return;
      }
      this.clearActiveOption();
      if (!option) return;
      this.activeOption = option;
      setAttr(this.focus_node, {
        'aria-activedescendant': option.getAttribute('id')
      });
      setAttr(option, {
        'aria-selected': 'true'
      });
      addClasses(option, 'active');
      if (scroll) this.scrollToOption(option);
    }
    /**
     * Sets the dropdown_content scrollTop to display the option
     *
     */
  }, {
    key: "scrollToOption",
    value: function scrollToOption(option, behavior) {
      if (!option) return;
      var content = this.dropdown_content;
      var height_menu = content.clientHeight;
      var scrollTop = content.scrollTop || 0;
      var height_item = option.offsetHeight;
      var y = option.getBoundingClientRect().top - content.getBoundingClientRect().top + scrollTop;
      if (y + height_item > height_menu + scrollTop) {
        this.scroll(y - height_menu + height_item, behavior);
      } else if (y < scrollTop) {
        this.scroll(y, behavior);
      }
    }
    /**
     * Scroll the dropdown to the given position
     *
     */
  }, {
    key: "scroll",
    value: function scroll(scrollTop, behavior) {
      var content = this.dropdown_content;
      if (behavior) {
        content.style.scrollBehavior = behavior;
      }
      content.scrollTop = scrollTop;
      content.style.scrollBehavior = '';
    }
    /**
     * Clears the active option
     *
     */
  }, {
    key: "clearActiveOption",
    value: function clearActiveOption() {
      if (this.activeOption) {
        removeClasses(this.activeOption, 'active');
        setAttr(this.activeOption, {
          'aria-selected': null
        });
      }
      this.activeOption = null;
      setAttr(this.focus_node, {
        'aria-activedescendant': null
      });
    }
    /**
     * Selects all items (CTRL + A).
     */
  }, {
    key: "selectAll",
    value: function selectAll() {
      var self = this;
      if (self.settings.mode === 'single') return;
      var activeItems = self.controlChildren();
      if (!activeItems.length) return;
      self.hideInput();
      self.close();
      self.activeItems = activeItems;
      iterate$1(activeItems, function (item) {
        self.setActiveItemClass(item);
      });
    }
    /**
     * Determines if the control_input should be in a hidden or visible state
     *
     */
  }, {
    key: "inputState",
    value: function inputState() {
      var self = this;
      if (!self.control.contains(self.control_input)) return;
      setAttr(self.control_input, {
        placeholder: self.settings.placeholder
      });
      if (self.activeItems.length > 0 || !self.isFocused && self.settings.hidePlaceholder && self.items.length > 0) {
        self.setTextboxValue();
        self.isInputHidden = true;
      } else {
        if (self.settings.hidePlaceholder && self.items.length > 0) {
          setAttr(self.control_input, {
            placeholder: ''
          });
        }
        self.isInputHidden = false;
      }
      self.wrapper.classList.toggle('input-hidden', self.isInputHidden);
    }
    /**
     * Hides the input element out of view, while
     * retaining its focus.
     * @deprecated 1.3
     */
  }, {
    key: "hideInput",
    value: function hideInput() {
      this.inputState();
    }
    /**
     * Restores input visibility.
     * @deprecated 1.3
     */
  }, {
    key: "showInput",
    value: function showInput() {
      this.inputState();
    }
    /**
     * Get the input value
     */
  }, {
    key: "inputValue",
    value: function inputValue() {
      return this.control_input.value.trim();
    }
    /**
     * Gives the control focus.
     */
  }, {
    key: "focus",
    value: function focus() {
      var self = this;
      if (self.isDisabled) return;
      self.ignoreFocus = true;
      if (self.control_input.offsetWidth) {
        self.control_input.focus();
      } else {
        self.focus_node.focus();
      }
      setTimeout(function () {
        self.ignoreFocus = false;
        self.onFocus();
      }, 0);
    }
    /**
     * Forces the control out of focus.
     *
     */
  }, {
    key: "blur",
    value: function blur() {
      this.focus_node.blur();
      this.onBlur();
    }
    /**
     * Returns a function that scores an object
     * to show how good of a match it is to the
     * provided query.
     *
     * @return {function}
     */
  }, {
    key: "getScoreFunction",
    value: function getScoreFunction(query) {
      return this.sifter.getScoreFunction(query, this.getSearchOptions());
    }
    /**
     * Returns search options for sifter (the system
     * for scoring and sorting results).
     *
     * @see https://github.com/orchidjs/sifter.js
     * @return {object}
     */
  }, {
    key: "getSearchOptions",
    value: function getSearchOptions() {
      var settings = this.settings;
      var sort = settings.sortField;
      if (typeof settings.sortField === 'string') {
        sort = [{
          field: settings.sortField
        }];
      }
      return {
        fields: settings.searchField,
        conjunction: settings.searchConjunction,
        sort: sort,
        nesting: settings.nesting
      };
    }
    /**
     * Searches through available options and returns
     * a sorted array of matches.
     *
     */
  }, {
    key: "search",
    value: function search(query) {
      var result, calculateScore;
      var self = this;
      var options = this.getSearchOptions(); // validate user-provided result scoring function

      if (self.settings.score) {
        calculateScore = self.settings.score.call(self, query);
        if (typeof calculateScore !== 'function') {
          throw new Error('Tom Select "score" setting must be a function that returns a function');
        }
      } // perform search

      if (query !== self.lastQuery) {
        self.lastQuery = query;
        result = self.sifter.search(query, Object.assign(options, {
          score: calculateScore
        }));
        self.currentResults = result;
      } else {
        result = Object.assign({}, self.currentResults);
      } // filter out selected items

      if (self.settings.hideSelected) {
        result.items = result.items.filter(function (item) {
          var hashed = hash_key(item.id);
          return !(hashed && self.items.indexOf(hashed) !== -1);
        });
      }
      return result;
    }
    /**
     * Refreshes the list of available options shown
     * in the autocomplete dropdown menu.
     *
     */
  }, {
    key: "refreshOptions",
    value: function refreshOptions() {
      var triggerDropdown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var i, j, k, n, optgroup, optgroups, html, has_create_option, active_group;
      var create;
      var groups = {};
      var groups_order = [];
      var self = this;
      var query = self.inputValue();
      var same_query = query === self.lastQuery || query == '' && self.lastQuery == null;
      var results = self.search(query);
      var active_option = null;
      var show_dropdown = self.settings.shouldOpen || false;
      var dropdown_content = self.dropdown_content;
      if (same_query) {
        active_option = self.activeOption;
        if (active_option) {
          active_group = active_option.closest('[data-group]');
        }
      } // build markup

      n = results.items.length;
      if (typeof self.settings.maxOptions === 'number') {
        n = Math.min(n, self.settings.maxOptions);
      }
      if (n > 0) {
        show_dropdown = true;
      } // render and group available options individually

      for (i = 0; i < n; i++) {
        // get option dom element
        var item = results.items[i];
        if (!item) continue;
        var opt_value = item.id;
        var option = self.options[opt_value];
        if (option === undefined) continue;
        var opt_hash = get_hash(opt_value);
        var option_el = self.getOption(opt_hash, true); // toggle 'selected' class

        if (!self.settings.hideSelected) {
          option_el.classList.toggle('selected', self.items.includes(opt_hash));
        }
        optgroup = option[self.settings.optgroupField] || '';
        optgroups = Array.isArray(optgroup) ? optgroup : [optgroup];
        for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
          optgroup = optgroups[j];
          if (!self.optgroups.hasOwnProperty(optgroup)) {
            optgroup = '';
          }
          var group_fragment = groups[optgroup];
          if (group_fragment === undefined) {
            group_fragment = document.createDocumentFragment();
            groups_order.push(optgroup);
          } // nodes can only have one parent, so if the option is in mutple groups, we need a clone

          if (j > 0) {
            option_el = option_el.cloneNode(true);
            setAttr(option_el, {
              id: option.$id + '-clone-' + j,
              'aria-selected': null
            });
            option_el.classList.add('ts-cloned');
            removeClasses(option_el, 'active'); // make sure we keep the activeOption in the same group

            if (self.activeOption && self.activeOption.dataset.value == opt_value) {
              if (active_group && active_group.dataset.group === optgroup.toString()) {
                active_option = option_el;
              }
            }
          }
          group_fragment.appendChild(option_el);
          groups[optgroup] = group_fragment;
        }
      } // sort optgroups

      if (self.settings.lockOptgroupOrder) {
        groups_order.sort(function (a, b) {
          var grp_a = self.optgroups[a];
          var grp_b = self.optgroups[b];
          var a_order = grp_a && grp_a.$order || 0;
          var b_order = grp_b && grp_b.$order || 0;
          return a_order - b_order;
        });
      } // render optgroup headers & join groups

      html = document.createDocumentFragment();
      iterate$1(groups_order, function (optgroup) {
        var group_fragment = groups[optgroup];
        if (!group_fragment || !group_fragment.children.length) return;
        var group_heading = self.optgroups[optgroup];
        if (group_heading !== undefined) {
          var group_options = document.createDocumentFragment();
          var header = self.render('optgroup_header', group_heading);
          append(group_options, header);
          append(group_options, group_fragment);
          var group_html = self.render('optgroup', {
            group: group_heading,
            options: group_options
          });
          append(html, group_html);
        } else {
          append(html, group_fragment);
        }
      });
      dropdown_content.innerHTML = '';
      append(dropdown_content, html); // highlight matching terms inline

      if (self.settings.highlight) {
        removeHighlight(dropdown_content);
        if (results.query.length && results.tokens.length) {
          iterate$1(results.tokens, function (tok) {
            highlight(dropdown_content, tok.regex);
          });
        }
      } // helper method for adding templates to dropdown

      var add_template = function add_template(template) {
        var content = self.render(template, {
          input: query
        });
        if (content) {
          show_dropdown = true;
          dropdown_content.insertBefore(content, dropdown_content.firstChild);
        }
        return content;
      }; // add loading message

      if (self.loading) {
        add_template('loading'); // invalid query
      } else if (!self.settings.shouldLoad.call(self, query)) {
        add_template('not_loading'); // add no_results message
      } else if (results.items.length === 0) {
        add_template('no_results');
      } // add create option

      has_create_option = self.canCreate(query);
      if (has_create_option) {
        create = add_template('option_create');
      } // activate

      self.hasOptions = results.items.length > 0 || has_create_option;
      if (show_dropdown) {
        if (results.items.length > 0) {
          if (!active_option && self.settings.mode === 'single' && self.items[0] != undefined) {
            active_option = self.getOption(self.items[0]);
          }
          if (!dropdown_content.contains(active_option)) {
            var active_index = 0;
            if (create && !self.settings.addPrecedence) {
              active_index = 1;
            }
            active_option = self.selectable()[active_index];
          }
        } else if (create) {
          active_option = create;
        }
        if (triggerDropdown && !self.isOpen) {
          self.open();
          self.scrollToOption(active_option, 'auto');
        }
        self.setActiveOption(active_option);
      } else {
        self.clearActiveOption();
        if (triggerDropdown && self.isOpen) {
          self.close(false); // if create_option=null, we want the dropdown to close but not reset the textbox value
        }
      }
    }
    /**
     * Return list of selectable options
     *
     */
  }, {
    key: "selectable",
    value: function selectable() {
      return this.dropdown_content.querySelectorAll('[data-selectable]');
    }
    /**
     * Adds an available option. If it already exists,
     * nothing will happen. Note: this does not refresh
     * the options list dropdown (use `refreshOptions`
     * for that).
     *
     * Usage:
     *
     *   this.addOption(data)
     *
     */
  }, {
    key: "addOption",
    value: function addOption(data) {
      var user_created = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var self = this; // @deprecated 1.7.7
      // use addOptions( array, user_created ) for adding multiple options

      if (Array.isArray(data)) {
        self.addOptions(data, user_created);
        return false;
      }
      var key = hash_key(data[self.settings.valueField]);
      if (key === null || self.options.hasOwnProperty(key)) {
        return false;
      }
      data.$order = data.$order || ++self.order;
      data.$id = self.inputId + '-opt-' + data.$order;
      self.options[key] = data;
      self.lastQuery = null;
      if (user_created) {
        self.userOptions[key] = user_created;
        self.trigger('option_add', key, data);
      }
      return key;
    }
    /**
     * Add multiple options
     *
     */
  }, {
    key: "addOptions",
    value: function addOptions(data) {
      var _this9 = this;
      var user_created = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      iterate$1(data, function (dat) {
        _this9.addOption(dat, user_created);
      });
    }
    /**
     * @deprecated 1.7.7
     */
  }, {
    key: "registerOption",
    value: function registerOption(data) {
      return this.addOption(data);
    }
    /**
     * Registers an option group to the pool of option groups.
     *
     * @return {boolean|string}
     */
  }, {
    key: "registerOptionGroup",
    value: function registerOptionGroup(data) {
      var key = hash_key(data[this.settings.optgroupValueField]);
      if (key === null) return false;
      data.$order = data.$order || ++this.order;
      this.optgroups[key] = data;
      return key;
    }
    /**
     * Registers a new optgroup for options
     * to be bucketed into.
     *
     */
  }, {
    key: "addOptionGroup",
    value: function addOptionGroup(id, data) {
      var hashed_id;
      data[this.settings.optgroupValueField] = id;
      if (hashed_id = this.registerOptionGroup(data)) {
        this.trigger('optgroup_add', hashed_id, data);
      }
    }
    /**
     * Removes an existing option group.
     *
     */
  }, {
    key: "removeOptionGroup",
    value: function removeOptionGroup(id) {
      if (this.optgroups.hasOwnProperty(id)) {
        delete this.optgroups[id];
        this.clearCache();
        this.trigger('optgroup_remove', id);
      }
    }
    /**
     * Clears all existing option groups.
     */
  }, {
    key: "clearOptionGroups",
    value: function clearOptionGroups() {
      this.optgroups = {};
      this.clearCache();
      this.trigger('optgroup_clear');
    }
    /**
     * Updates an option available for selection. If
     * it is visible in the selected items or options
     * dropdown, it will be re-rendered automatically.
     *
     */
  }, {
    key: "updateOption",
    value: function updateOption(value, data) {
      var self = this;
      var item_new;
      var index_item;
      var value_old = hash_key(value);
      var value_new = hash_key(data[self.settings.valueField]); // sanity checks

      if (value_old === null) return;
      var data_old = self.options[value_old];
      if (data_old == undefined) return;
      if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
      var option = self.getOption(value_old);
      var item = self.getItem(value_old);
      data.$order = data.$order || data_old.$order;
      delete self.options[value_old]; // invalidate render cache
      // don't remove existing node yet, we'll remove it after replacing it

      self.uncacheValue(value_new);
      self.options[value_new] = data; // update the option if it's in the dropdown

      if (option) {
        if (self.dropdown_content.contains(option)) {
          var option_new = self._render('option', data);
          replaceNode(option, option_new);
          if (self.activeOption === option) {
            self.setActiveOption(option_new);
          }
        }
        option.remove();
      } // update the item if we have one

      if (item) {
        index_item = self.items.indexOf(value_old);
        if (index_item !== -1) {
          self.items.splice(index_item, 1, value_new);
        }
        item_new = self._render('item', data);
        if (item.classList.contains('active')) addClasses(item_new, 'active');
        replaceNode(item, item_new);
      } // invalidate last query because we might have updated the sortField

      self.lastQuery = null;
    }
    /**
     * Removes a single option.
     *
     */
  }, {
    key: "removeOption",
    value: function removeOption(value, silent) {
      var self = this;
      value = get_hash(value);
      self.uncacheValue(value);
      delete self.userOptions[value];
      delete self.options[value];
      self.lastQuery = null;
      self.trigger('option_remove', value);
      self.removeItem(value, silent);
    }
    /**
     * Clears all options.
     */
  }, {
    key: "clearOptions",
    value: function clearOptions(filter) {
      var boundFilter = (filter || this.clearFilter).bind(this);
      this.loadedSearches = {};
      this.userOptions = {};
      this.clearCache();
      var selected = {};
      iterate$1(this.options, function (option, key) {
        if (boundFilter(option, key)) {
          selected[key] = option;
        }
      });
      this.options = this.sifter.items = selected;
      this.lastQuery = null;
      this.trigger('option_clear');
    }
    /**
     * Used by clearOptions() to decide whether or not an option should be removed
     * Return true to keep an option, false to remove
     *
     */
  }, {
    key: "clearFilter",
    value: function clearFilter(option, value) {
      if (this.items.indexOf(value) >= 0) {
        return true;
      }
      return false;
    }
    /**
     * Returns the dom element of the option
     * matching the given value.
     *
     */
  }, {
    key: "getOption",
    value: function getOption(value) {
      var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var hashed = hash_key(value);
      if (hashed === null) return null;
      var option = this.options[hashed];
      if (option != undefined) {
        if (option.$div) {
          return option.$div;
        }
        if (create) {
          return this._render('option', option);
        }
      }
      return null;
    }
    /**
     * Returns the dom element of the next or previous dom element of the same type
     * Note: adjacent options may not be adjacent DOM elements (optgroups)
     *
     */
  }, {
    key: "getAdjacent",
    value: function getAdjacent(option, direction) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'option';
      var self = this,
        all;
      if (!option) {
        return null;
      }
      if (type == 'item') {
        all = self.controlChildren();
      } else {
        all = self.dropdown_content.querySelectorAll('[data-selectable]');
      }
      for (var _i3 = 0; _i3 < all.length; _i3++) {
        if (all[_i3] != option) {
          continue;
        }
        if (direction > 0) {
          return all[_i3 + 1];
        }
        return all[_i3 - 1];
      }
      return null;
    }
    /**
     * Returns the dom element of the item
     * matching the given value.
     *
     */
  }, {
    key: "getItem",
    value: function getItem(item) {
      if (_typeof(item) == 'object') {
        return item;
      }
      var value = hash_key(item);
      return value !== null ? this.control.querySelector("[data-value=\"".concat(addSlashes(value), "\"]")) : null;
    }
    /**
     * "Selects" multiple items at once. Adds them to the list
     * at the current caret position.
     *
     */
  }, {
    key: "addItems",
    value: function addItems(values, silent) {
      var self = this;
      var items = Array.isArray(values) ? values : [values];
      items = items.filter(function (x) {
        return self.items.indexOf(x) === -1;
      });
      var last_item = items[items.length - 1];
      items.forEach(function (item) {
        self.isPending = item !== last_item;
        self.addItem(item, silent);
      });
    }
    /**
     * "Selects" an item. Adds it to the list
     * at the current caret position.
     *
     */
  }, {
    key: "addItem",
    value: function addItem(value, silent) {
      var _this10 = this;
      var events = silent ? [] : ['change', 'dropdown_close'];
      debounce_events(this, events, function () {
        var item, wasFull;
        var self = _this10;
        var inputMode = self.settings.mode;
        var hashed = hash_key(value);
        if (hashed && self.items.indexOf(hashed) !== -1) {
          if (inputMode === 'single') {
            self.close();
          }
          if (inputMode === 'single' || !self.settings.duplicates) {
            return;
          }
        }
        if (hashed === null || !self.options.hasOwnProperty(hashed)) return;
        if (inputMode === 'single') self.clear(silent);
        if (inputMode === 'multi' && self.isFull()) return;
        item = self._render('item', self.options[hashed]);
        if (self.control.contains(item)) {
          // duplicates
          item = item.cloneNode(true);
        }
        wasFull = self.isFull();
        self.items.splice(self.caretPos, 0, hashed);
        self.insertAtCaret(item);
        if (self.isSetup) {
          // update menu / remove the option (if this is not one item being added as part of series)
          if (!self.isPending && self.settings.hideSelected) {
            var option = self.getOption(hashed);
            var next = self.getAdjacent(option, 1);
            if (next) {
              self.setActiveOption(next);
            }
          } // refreshOptions after setActiveOption(),
          // otherwise setActiveOption() will be called by refreshOptions() with the wrong value

          if (!self.isPending && !self.settings.closeAfterSelect) {
            self.refreshOptions(self.isFocused && inputMode !== 'single');
          } // hide the menu if the maximum number of items have been selected or no options are left

          if (self.settings.closeAfterSelect != false && self.isFull()) {
            self.close();
          } else if (!self.isPending) {
            self.positionDropdown();
          }
          self.trigger('item_add', hashed, item);
          if (!self.isPending) {
            self.updateOriginalInput({
              silent: silent
            });
          }
        }
        if (!self.isPending || !wasFull && self.isFull()) {
          self.inputState();
          self.refreshState();
        }
      });
    }
    /**
     * Removes the selected item matching
     * the provided value.
     *
     */
  }, {
    key: "removeItem",
    value: function removeItem() {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var silent = arguments.length > 1 ? arguments[1] : undefined;
      var self = this;
      item = self.getItem(item);
      if (!item) return;
      var i, idx;
      var value = item.dataset.value;
      i = nodeIndex(item);
      item.remove();
      if (item.classList.contains('active')) {
        idx = self.activeItems.indexOf(item);
        self.activeItems.splice(idx, 1);
        removeClasses(item, 'active');
      }
      self.items.splice(i, 1);
      self.lastQuery = null;
      if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
        self.removeOption(value, silent);
      }
      if (i < self.caretPos) {
        self.setCaret(self.caretPos - 1);
      }
      self.updateOriginalInput({
        silent: silent
      });
      self.refreshState();
      self.positionDropdown();
      self.trigger('item_remove', value, item);
    }
    /**
     * Invokes the `create` method provided in the
     * TomSelect options that should provide the data
     * for the new item, given the user input.
     *
     * Once this completes, it will be added
     * to the item list.
     *
     */
  }, {
    key: "createItem",
    value: function createItem() {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      // triggerDropdown parameter @deprecated 2.1.1
      if (arguments.length === 3) {
        callback = arguments[2];
      }
      if (typeof callback != 'function') {
        callback = function callback() {};
      }
      var self = this;
      var caret = self.caretPos;
      var output;
      input = input || self.inputValue();
      if (!self.canCreate(input)) {
        callback();
        return false;
      }
      self.lock();
      var created = false;
      var create = function create(data) {
        self.unlock();
        if (!data || _typeof(data) !== 'object') return callback();
        var value = hash_key(data[self.settings.valueField]);
        if (typeof value !== 'string') {
          return callback();
        }
        self.setTextboxValue();
        self.addOption(data, true);
        self.setCaret(caret);
        self.addItem(value);
        callback(data);
        created = true;
      };
      if (typeof self.settings.create === 'function') {
        output = self.settings.create.call(this, input, create);
      } else {
        output = _defineProperty(_defineProperty({}, self.settings.labelField, input), self.settings.valueField, input);
      }
      if (!created) {
        create(output);
      }
      return true;
    }
    /**
     * Re-renders the selected item lists.
     */
  }, {
    key: "refreshItems",
    value: function refreshItems() {
      var self = this;
      self.lastQuery = null;
      if (self.isSetup) {
        self.addItems(self.items);
      }
      self.updateOriginalInput();
      self.refreshState();
    }
    /**
     * Updates all state-dependent attributes
     * and CSS classes.
     */
  }, {
    key: "refreshState",
    value: function refreshState() {
      var self = this;
      self.refreshValidityState();
      var isFull = self.isFull();
      var isLocked = self.isLocked;
      self.wrapper.classList.toggle('rtl', self.rtl);
      var wrap_classList = self.wrapper.classList;
      wrap_classList.toggle('focus', self.isFocused);
      wrap_classList.toggle('disabled', self.isDisabled);
      wrap_classList.toggle('required', self.isRequired);
      wrap_classList.toggle('invalid', !self.isValid);
      wrap_classList.toggle('locked', isLocked);
      wrap_classList.toggle('full', isFull);
      wrap_classList.toggle('input-active', self.isFocused && !self.isInputHidden);
      wrap_classList.toggle('dropdown-active', self.isOpen);
      wrap_classList.toggle('has-options', isEmptyObject(self.options));
      wrap_classList.toggle('has-items', self.items.length > 0);
    }
    /**
     * Update the `required` attribute of both input and control input.
     *
     * The `required` property needs to be activated on the control input
     * for the error to be displayed at the right place. `required` also
     * needs to be temporarily deactivated on the input since the input is
     * hidden and can't show errors.
     */
  }, {
    key: "refreshValidityState",
    value: function refreshValidityState() {
      var self = this;
      if (!self.input.validity) {
        return;
      }
      self.isValid = self.input.validity.valid;
      self.isInvalid = !self.isValid;
    }
    /**
     * Determines whether or not more items can be added
     * to the control without exceeding the user-defined maximum.
     *
     * @returns {boolean}
     */
  }, {
    key: "isFull",
    value: function isFull() {
      return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
    }
    /**
     * Refreshes the original <select> or <input>
     * element to reflect the current state.
     *
     */
  }, {
    key: "updateOriginalInput",
    value: function updateOriginalInput() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var self = this;
      var option, label;
      var empty_option = self.input.querySelector('option[value=""]');
      if (self.is_select_tag) {
        var AddSelected = function AddSelected(option_el, value, label) {
          if (!option_el) {
            option_el = getDom('<option value="' + escape_html(value) + '">' + escape_html(label) + '</option>');
          } // don't move empty option from top of list
          // fixes bug in firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1725293

          if (option_el != empty_option) {
            self.input.append(option_el);
          }
          selected.push(option_el); // marking empty option as selected can break validation
          // fixes https://github.com/orchidjs/tom-select/issues/303

          if (option_el != empty_option || has_selected > 0) {
            option_el.selected = true;
          }
          return option_el;
        }; // unselect all selected options
        var selected = [];
        var has_selected = self.input.querySelectorAll('option:checked').length;
        self.input.querySelectorAll('option:checked').forEach(function (option_el) {
          option_el.selected = false;
        }); // nothing selected?

        if (self.items.length == 0 && self.settings.mode == 'single') {
          AddSelected(empty_option, "", ""); // order selected <option> tags for values in self.items
        } else {
          self.items.forEach(function (value) {
            option = self.options[value];
            label = option[self.settings.labelField] || '';
            if (selected.includes(option.$option)) {
              var reuse_opt = self.input.querySelector("option[value=\"".concat(addSlashes(value), "\"]:not(:checked)"));
              AddSelected(reuse_opt, value, label);
            } else {
              option.$option = AddSelected(option.$option, value, label);
            }
          });
        }
      } else {
        self.input.value = self.getValue();
      }
      if (self.isSetup) {
        if (!opts.silent) {
          self.trigger('change', self.getValue());
        }
      }
    }
    /**
     * Shows the autocomplete dropdown containing
     * the available options.
     */
  }, {
    key: "open",
    value: function open() {
      var self = this;
      if (self.isLocked || self.isOpen || self.settings.mode === 'multi' && self.isFull()) return;
      self.isOpen = true;
      setAttr(self.focus_node, {
        'aria-expanded': 'true'
      });
      self.refreshState();
      applyCSS(self.dropdown, {
        visibility: 'hidden',
        display: 'block'
      });
      self.positionDropdown();
      applyCSS(self.dropdown, {
        visibility: 'visible',
        display: 'block'
      });
      self.focus();
      self.trigger('dropdown_open', self.dropdown);
    }
    /**
     * Closes the autocomplete dropdown menu.
     */
  }, {
    key: "close",
    value: function close() {
      var setTextboxValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var self = this;
      var trigger = self.isOpen;
      if (setTextboxValue) {
        // before blur() to prevent form onchange event
        self.setTextboxValue();
        if (self.settings.mode === 'single' && self.items.length) {
          self.hideInput();
        }
      }
      self.isOpen = false;
      setAttr(self.focus_node, {
        'aria-expanded': 'false'
      });
      applyCSS(self.dropdown, {
        display: 'none'
      });
      if (self.settings.hideSelected) {
        self.clearActiveOption();
      }
      self.refreshState();
      if (trigger) self.trigger('dropdown_close', self.dropdown);
    }
    /**
     * Calculates and applies the appropriate
     * position of the dropdown if dropdownParent = 'body'.
     * Otherwise, position is determined by css
     */
  }, {
    key: "positionDropdown",
    value: function positionDropdown() {
      if (this.settings.dropdownParent !== 'body') {
        return;
      }
      var context = this.control;
      var rect = context.getBoundingClientRect();
      var top = context.offsetHeight + rect.top + window.scrollY;
      var left = rect.left + window.scrollX;
      applyCSS(this.dropdown, {
        width: rect.width + 'px',
        top: top + 'px',
        left: left + 'px'
      });
    }
    /**
     * Resets / clears all selected items
     * from the control.
     *
     */
  }, {
    key: "clear",
    value: function clear(silent) {
      var self = this;
      if (!self.items.length) return;
      var items = self.controlChildren();
      iterate$1(items, function (item) {
        self.removeItem(item, true);
      });
      self.showInput();
      if (!silent) self.updateOriginalInput();
      self.trigger('clear');
    }
    /**
     * A helper method for inserting an element
     * at the current caret position.
     *
     */
  }, {
    key: "insertAtCaret",
    value: function insertAtCaret(el) {
      var self = this;
      var caret = self.caretPos;
      var target = self.control;
      target.insertBefore(el, target.children[caret] || null);
      self.setCaret(caret + 1);
    }
    /**
     * Removes the current selected item(s).
     *
     */
  }, {
    key: "deleteSelection",
    value: function deleteSelection(e) {
      var direction, selection, caret, tail;
      var self = this;
      direction = e && e.keyCode === KEY_BACKSPACE ? -1 : 1;
      selection = getSelection(self.control_input); // determine items that will be removed

      var rm_items = [];
      if (self.activeItems.length) {
        tail = getTail(self.activeItems, direction);
        caret = nodeIndex(tail);
        if (direction > 0) {
          caret++;
        }
        iterate$1(self.activeItems, function (item) {
          return rm_items.push(item);
        });
      } else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
        var items = self.controlChildren();
        var rm_item;
        if (direction < 0 && selection.start === 0 && selection.length === 0) {
          rm_item = items[self.caretPos - 1];
        } else if (direction > 0 && selection.start === self.inputValue().length) {
          rm_item = items[self.caretPos];
        }
        if (rm_item !== undefined) {
          rm_items.push(rm_item);
        }
      }
      if (!self.shouldDelete(rm_items, e)) {
        return false;
      }
      preventDefault(e, true); // perform removal

      if (typeof caret !== 'undefined') {
        self.setCaret(caret);
      }
      while (rm_items.length) {
        self.removeItem(rm_items.pop());
      }
      self.showInput();
      self.positionDropdown();
      self.refreshOptions(false);
      return true;
    }
    /**
     * Return true if the items should be deleted
     */
  }, {
    key: "shouldDelete",
    value: function shouldDelete(items, evt) {
      var values = items.map(function (item) {
        return item.dataset.value;
      }); // allow the callback to abort

      if (!values.length || typeof this.settings.onDelete === 'function' && this.settings.onDelete(values, evt) === false) {
        return false;
      }
      return true;
    }
    /**
     * Selects the previous / next item (depending on the `direction` argument).
     *
     * > 0 - right
     * < 0 - left
     *
     */
  }, {
    key: "advanceSelection",
    value: function advanceSelection(direction, e) {
      var last_active,
        adjacent,
        self = this;
      if (self.rtl) direction *= -1;
      if (self.inputValue().length) return; // add or remove to active items

      if (isKeyDown(KEY_SHORTCUT, e) || isKeyDown('shiftKey', e)) {
        last_active = self.getLastActive(direction);
        if (last_active) {
          if (!last_active.classList.contains('active')) {
            adjacent = last_active;
          } else {
            adjacent = self.getAdjacent(last_active, direction, 'item');
          } // if no active item, get items adjacent to the control input
        } else if (direction > 0) {
          adjacent = self.control_input.nextElementSibling;
        } else {
          adjacent = self.control_input.previousElementSibling;
        }
        if (adjacent) {
          if (adjacent.classList.contains('active')) {
            self.removeActiveItem(last_active);
          }
          self.setActiveItemClass(adjacent); // mark as last_active !! after removeActiveItem() on last_active
        } // move caret to the left or right
      } else {
        self.moveCaret(direction);
      }
    }
  }, {
    key: "moveCaret",
    value: function moveCaret(direction) {}
    /**
     * Get the last active item
     *
     */
  }, {
    key: "getLastActive",
    value: function getLastActive(direction) {
      var last_active = this.control.querySelector('.last-active');
      if (last_active) {
        return last_active;
      }
      var result = this.control.querySelectorAll('.active');
      if (result) {
        return getTail(result, direction);
      }
    }
    /**
     * Moves the caret to the specified index.
     *
     * The input must be moved by leaving it in place and moving the
     * siblings, due to the fact that focus cannot be restored once lost
     * on mobile webkit devices
     *
     */
  }, {
    key: "setCaret",
    value: function setCaret(new_pos) {
      this.caretPos = this.items.length;
    }
    /**
     * Return list of item dom elements
     *
     */
  }, {
    key: "controlChildren",
    value: function controlChildren() {
      return Array.from(this.control.querySelectorAll('[data-ts-item]'));
    }
    /**
     * Disables user input on the control. Used while
     * items are being asynchronously created.
     */
  }, {
    key: "lock",
    value: function lock() {
      this.isLocked = true;
      this.refreshState();
    }
    /**
     * Re-enables user input on the control.
     */
  }, {
    key: "unlock",
    value: function unlock() {
      this.isLocked = false;
      this.refreshState();
    }
    /**
     * Disables user input on the control completely.
     * While disabled, it cannot receive focus.
     */
  }, {
    key: "disable",
    value: function disable() {
      var self = this;
      self.input.disabled = true;
      self.control_input.disabled = true;
      self.focus_node.tabIndex = -1;
      self.isDisabled = true;
      this.close();
      self.lock();
    }
    /**
     * Enables the control so that it can respond
     * to focus and user input.
     */
  }, {
    key: "enable",
    value: function enable() {
      var self = this;
      self.input.disabled = false;
      self.control_input.disabled = false;
      self.focus_node.tabIndex = self.tabIndex;
      self.isDisabled = false;
      self.unlock();
    }
    /**
     * Completely destroys the control and
     * unbinds all event listeners so that it can
     * be garbage collected.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      var self = this;
      var revertSettings = self.revertSettings;
      self.trigger('destroy');
      self.off();
      self.wrapper.remove();
      self.dropdown.remove();
      self.input.innerHTML = revertSettings.innerHTML;
      self.input.tabIndex = revertSettings.tabIndex;
      removeClasses(self.input, 'tomselected', 'ts-hidden-accessible');
      self._destroy();
      delete self.input.tomselect;
    }
    /**
     * A helper method for rendering "item" and
     * "option" templates, given the data.
     *
     */
  }, {
    key: "render",
    value: function render(templateName, data) {
      var id, html;
      var self = this;
      if (typeof this.settings.render[templateName] !== 'function') {
        return null;
      } // render markup

      html = self.settings.render[templateName].call(this, data, escape_html);
      if (!html) {
        return null;
      }
      html = getDom(html); // add mandatory attributes

      if (templateName === 'option' || templateName === 'option_create') {
        if (data[self.settings.disabledField]) {
          setAttr(html, {
            'aria-disabled': 'true'
          });
        } else {
          setAttr(html, {
            'data-selectable': ''
          });
        }
      } else if (templateName === 'optgroup') {
        id = data.group[self.settings.optgroupValueField];
        setAttr(html, {
          'data-group': id
        });
        if (data.group[self.settings.disabledField]) {
          setAttr(html, {
            'data-disabled': ''
          });
        }
      }
      if (templateName === 'option' || templateName === 'item') {
        var value = get_hash(data[self.settings.valueField]);
        setAttr(html, {
          'data-value': value
        }); // make sure we have some classes if a template is overwritten

        if (templateName === 'item') {
          addClasses(html, self.settings.itemClass);
          setAttr(html, {
            'data-ts-item': ''
          });
        } else {
          addClasses(html, self.settings.optionClass);
          setAttr(html, {
            role: 'option',
            id: data.$id
          }); // update cache

          data.$div = html;
          self.options[value] = data;
        }
      }
      return html;
    }
    /**
     * Type guarded rendering
     *
     */
  }, {
    key: "_render",
    value: function _render(templateName, data) {
      var html = this.render(templateName, data);
      if (html == null) {
        throw 'HTMLElement expected';
      }
      return html;
    }
    /**
     * Clears the render cache for a template. If
     * no template is given, clears all render
     * caches.
     *
     */
  }, {
    key: "clearCache",
    value: function clearCache() {
      iterate$1(this.options, function (option) {
        if (option.$div) {
          option.$div.remove();
          delete option.$div;
        }
      });
    }
    /**
     * Removes a value from item and option caches
     *
     */
  }, {
    key: "uncacheValue",
    value: function uncacheValue(value) {
      var option_el = this.getOption(value);
      if (option_el) option_el.remove();
    }
    /**
     * Determines whether or not to display the
     * create item prompt, given a user input.
     *
     */
  }, {
    key: "canCreate",
    value: function canCreate(input) {
      return this.settings.create && input.length > 0 && this.settings.createFilter.call(this, input);
    }
    /**
     * Wraps this.`method` so that `new_fn` can be invoked 'before', 'after', or 'instead' of the original method
     *
     * this.hook('instead','onKeyDown',function( arg1, arg2 ...){
     *
     * });
     */
  }, {
    key: "hook",
    value: function hook(when, method, new_fn) {
      var self = this;
      var orig_method = self[method];
      self[method] = function () {
        var result, result_new;
        if (when === 'after') {
          result = orig_method.apply(self, arguments);
        }
        result_new = new_fn.apply(self, arguments);
        if (when === 'instead') {
          return result_new;
        }
        if (when === 'before') {
          result = orig_method.apply(self, arguments);
        }
        return result;
      };
    }
  }]);
  return TomSelect;
}(MicroPlugin(MicroEvent));
/**
 * Plugin: "dropdown_input" (Tom Select)
 * Copyright (c) contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */
function caret_position() {
  var self = this;
  /**
   * Moves the caret to the specified index.
   *
   * The input must be moved by leaving it in place and moving the
   * siblings, due to the fact that focus cannot be restored once lost
   * on mobile webkit devices
   *
   */

  self.hook('instead', 'setCaret', function (new_pos) {
    if (self.settings.mode === 'single' || !self.control.contains(self.control_input)) {
      new_pos = self.items.length;
    } else {
      new_pos = Math.max(0, Math.min(self.items.length, new_pos));
      if (new_pos != self.caretPos && !self.isPending) {
        self.controlChildren().forEach(function (child, j) {
          if (j < new_pos) {
            self.control_input.insertAdjacentElement('beforebegin', child);
          } else {
            self.control.appendChild(child);
          }
        });
      }
    }
    self.caretPos = new_pos;
  });
  self.hook('instead', 'moveCaret', function (direction) {
    if (!self.isFocused) return; // move caret before or after selected items

    var last_active = self.getLastActive(direction);
    if (last_active) {
      var idx = nodeIndex(last_active);
      self.setCaret(direction > 0 ? idx + 1 : idx);
      self.setActiveItem();
      removeClasses(last_active, 'last-active'); // move caret left or right of current position
    } else {
      self.setCaret(self.caretPos + direction);
    }
  });
}

/**
 * Plugin: "dropdown_input" (Tom Select)
 * Copyright (c) contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */
function dropdown_input() {
  var self = this;
  self.settings.shouldOpen = true; // make sure the input is shown even if there are no options to display in the dropdown

  self.hook('before', 'setup', function () {
    self.focus_node = self.control;
    addClasses(self.control_input, 'dropdown-input');
    var div = getDom('<div class="dropdown-input-wrap">');
    div.append(self.control_input);
    self.dropdown.insertBefore(div, self.dropdown.firstChild); // set a placeholder in the select control

    var placeholder = getDom('<input class="items-placeholder" tabindex="-1" />');
    placeholder.placeholder = self.settings.placeholder || '';
    self.control.append(placeholder);
  });
  self.on('initialize', function () {
    // set tabIndex on control to -1, otherwise [shift+tab] will put focus right back on control_input
    self.control_input.addEventListener('keydown', function (evt) {
      //addEvent(self.control_input,'keydown' as const,(evt:KeyboardEvent) =>{
      switch (evt.keyCode) {
        case KEY_ESC:
          if (self.isOpen) {
            preventDefault(evt, true);
            self.close();
          }
          self.clearActiveItems();
          return;
        case KEY_TAB:
          self.focus_node.tabIndex = -1;
          break;
      }
      return self.onKeyDown.call(self, evt);
    });
    self.on('blur', function () {
      self.focus_node.tabIndex = self.isDisabled ? -1 : self.tabIndex;
    }); // give the control_input focus when the dropdown is open

    self.on('dropdown_open', function () {
      self.control_input.focus();
    }); // prevent onBlur from closing when focus is on the control_input

    var orig_onBlur = self.onBlur;
    self.hook('instead', 'onBlur', function (evt) {
      if (evt && evt.relatedTarget == self.control_input) return;
      return orig_onBlur.call(self);
    });
    addEvent(self.control_input, 'blur', function () {
      return self.onBlur();
    }); // return focus to control to allow further keyboard input

    self.hook('before', 'close', function () {
      if (!self.isOpen) return;
      self.focus_node.focus({
        preventScroll: true
      });
    });
  });
}

/**
 * Plugin: "input_autogrow" (Tom Select)
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */
function no_backspace_delete() {
  var self = this;
  var orig_deleteSelection = self.deleteSelection;
  this.hook('instead', 'deleteSelection', function (evt) {
    if (self.activeItems.length) {
      return orig_deleteSelection.call(self, evt);
    }
    return false;
  });
}

/**
 * Plugin: "remove_button" (Tom Select)
 * Copyright (c) contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */
function remove_button(userOptions) {
  var options = Object.assign({
    label: '&times;',
    title: 'Remove',
    className: 'remove',
    append: true
  }, userOptions); //options.className = 'remove-single';

  var self = this; // override the render method to add remove button to each item

  if (!options.append) {
    return;
  }
  var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
  self.hook('after', 'setupTemplates', function () {
    var orig_render_item = self.settings.render.item;
    self.settings.render.item = function (data, escape) {
      var item = getDom(orig_render_item.call(self, data, escape));
      var close_button = getDom(html);
      item.appendChild(close_button);
      addEvent(close_button, 'mousedown', function (evt) {
        preventDefault(evt, true);
      });
      addEvent(close_button, 'click', function (evt) {
        // propagating will trigger the dropdown to show for single mode
        preventDefault(evt, true);
        if (self.isLocked) return;
        if (!self.shouldDelete([item], evt)) return;
        self.removeItem(item);
        self.refreshOptions(false);
        self.inputState();
      });
      return item;
    };
  });
}

/**
 * Plugin: "restore_on_backspace" (Tom Select)
 * Copyright (c) contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */
function restore_on_backspace(userOptions) {
  var self = this;
  var options = Object.assign({
    text: function text(option) {
      return option[self.settings.labelField];
    }
  }, userOptions);
  self.on('item_remove', function (value) {
    if (!self.isFocused) {
      return;
    }
    if (self.control_input.value.trim() === '') {
      var option = self.options[value];
      if (option) {
        self.setTextboxValue(options.text.call(self, option));
      }
    }
  });
}
TomSelect.define('caret_position', caret_position);
TomSelect.define('dropdown_input', dropdown_input);
TomSelect.define('no_backspace_delete', no_backspace_delete);
TomSelect.define('remove_button', remove_button);
TomSelect.define('restore_on_backspace', restore_on_backspace);
module.exports = TomSelect;

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/stylesheets/decidim/proposals/proposals.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/stylesheets/decidim/proposals/proposals.scss ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents/decidim/proposals/participatory_texts/participatory_text.md":
/*!******************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents/decidim/proposals/participatory_texts/participatory_text.md ***!
  \******************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/documents/37364f317e5732cb655a.md";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents/decidim/proposals/participatory_texts/participatory_text.odt":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents/decidim/proposals/participatory_texts/participatory_text.odt ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/documents/057f608bdff3d77526ff.odt";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_accepted_proposals.svg":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_accepted_proposals.svg ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/decidim_gamification_badges_accepted_proposals-8b0f9473774f7761cab5.svg";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_proposal_votes.svg":
/*!******************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_proposal_votes.svg ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/decidim_gamification_badges_proposal_votes-80a97598a4719e1eedfb.svg";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_proposals.svg":
/*!*************************************************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/gamification/badges/decidim_gamification_badges_proposals.svg ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/decidim_gamification_badges_proposals-cdb21571f327000c14da.svg";

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/proposals/decidim_proposals.svg":
/*!*******************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images/decidim/proposals/decidim_proposals.svg ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/decidim_proposals-15e5583a7f2834cd644e.svg";

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
/*!*****************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/entrypoints/decidim_proposals.js ***!
  \*****************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_proposals_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/proposals/utils */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/utils.js");
/* harmony import */ var src_decidim_proposals_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_proposals_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_proposals_add_proposal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/proposals/add_proposal */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/add_proposal.js");
/* harmony import */ var src_decidim_proposals_choose_proposals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/proposals/choose_proposals */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/src/decidim/proposals/choose_proposals.js");
/* harmony import */ var stylesheets_decidim_proposals_proposals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylesheets/decidim/proposals/proposals.scss */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/stylesheets/decidim/proposals/proposals.scss");




// Images
__webpack_require__("../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/images sync recursive ^\\.\\/.*$");

// Documents
__webpack_require__("../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-proposals-0.28.0/app/packs/documents sync recursive ^\\.\\/.*$");

// CSS

}();
/******/ })()
;
//# sourceMappingURL=decidim_proposals.js.map