/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./gems/decidim-module-calendar/app/packs/images sync recursive ^\\.\\/.*$":
/*!**********************************************************************!*\
  !*** ./gems/decidim-module-calendar/app/packs/images/ sync ^\.\/.*$ ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./decidim_calendar_icon.svg": "./gems/decidim-module-calendar/app/packs/images/decidim_calendar_icon.svg"
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
webpackContext.id = "./gems/decidim-module-calendar/app/packs/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./gems/decidim-module-calendar/app/packs/src/decidim/calendar/calendar.js":
/*!*********************************************************************************!*\
  !*** ./gems/decidim-module-calendar/app/packs/src/decidim/calendar/calendar.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/index.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");
/* harmony import */ var _fullcalendar_core_locales_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/locales-all */ "./node_modules/@fullcalendar/core/locales-all.js");






var calendarEl = document.getElementById("calendar");
var events = JSON.parse(calendarEl.dataset.events);
var currentLocale = _fullcalendar_core_locales_all__WEBPACK_IMPORTED_MODULE_0__["default"].find(function (lng) {
  return lng.code === calendarEl.dataset.locale;
});
var hide = [],
  firstRender = true;
var updateHash = function updateHash(date, type) {
  var dates = "year=".concat(date.getFullYear(), "&month=").concat(date.getMonth(), "&day=").concat(date.getDate());
  if (type) {
    dates += "&view=".concat(type);
  }
  var filters = $(".calendar-filters .cal-filter:not(.hollow)").map(function (_, el) {
    return el.id;
  }).toArray();
  window.location.hash = "".concat(dates, "&filters=").concat(filters.join(","));
};
var getInitialDate = function getInitialDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDate();
  window.location.hash.substring(1).split("&").forEach(function (v) {
    if (v.match("^year")) {
      year = v.substring(5);
    }
    if (v.match("^month")) {
      month = v.substring(6);
    }
    if (v.match("^day")) {
      day = v.substring(4);
    }
  });
  return new Date(year, month, day, 0, 0, 0);
};
var getInitialView = function getInitialView() {
  var view = calendarEl.dataset.defaultview || "dayGridMonth";
  var isMobile = window.innerWidth < 576;
  if (isMobile) {
    view = "dayGridWeek";
  } else {
    window.location.hash.substring(1).split("&").forEach(function (v) {
      if (v.match("^view")) {
        view = v.substring(5);
      }
    });
  }
  return view;
};
var getInitialFilters = function getInitialFilters() {
  var filters = false;
  window.location.hash.substring(1).split("&").forEach(function (v) {
    if (v.match("^filters")) {
      filters = v.substring(8).split(",");
    }
  });
  return filters;
};
var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar(calendarEl, {
  plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__["default"]],
  initialView: getInitialView(),
  dayMaxEvents: 3,
  locale: currentLocale,
  firstDay: calendarEl.dataset.hasOwnProperty("firstday") // eslint-disable-line no-prototype-builtins
  ? parseInt(calendarEl.dataset.firstday) : 1,
  initialDate: getInitialDate(),
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: calendarEl.dataset.views || "dayGridMonth,dayGridWeek,dayGridDay,listWeek"
  },
  buttonIcons: false,
  eventTimeFormat: {
    hour: "2-digit",
    minute: "2-digit",
    hour12: Boolean(calendarEl.dataset.hour12),
    omitZeroMinute: false
  },
  events: events,
  eventClassNames: function eventClassNames(info) {
    if (hide.includes(info.event.extendedProps.resourceId)) {
      return ["hide"];
    }
    return [];
  },
  eventContent: function eventContent(info) {
    var subtitle = "subtitle" in info.event.extendedProps ? " - ".concat(info.event.extendedProps.subtitle) : "";
    var hour = "hour" in info.event.extendedProps ? "".concat(info.event.extendedProps.hour, "  ") : "";
    return {
      html: "<span class=\"fc-title\" >".concat(hour, "<b>").concat(info.event.title, "</b>").concat(subtitle, "</span>")
    };
  },
  eventClick: function eventClick(info) {
    if (calendarEl.dataset.openinnewwindow) {
      info.jsEvent.preventDefault(); // don't let the browser navigate

      if (info.event.url) {
        window.open(info.event.url);
      }
    }
  },
  // This ensures to store the hash when changing the view type
  viewClassNames: function viewClassNames(info) {
    if (firstRender) {
      firstRender = false;
      return;
    }
    updateHash(info.view.calendar.getDate(), info.view.calendar.view.type);
  },
  // This ensures to store the hash when changing dates from the buttons
  viewDidMount: function viewDidMount(info) {
    $(calendarEl).find(".fc-prev-button,.fc-next-button,.fc-today-button").on("click", function () {
      updateHash(info.view.calendar.getDate(), info.view.calendar.view.type);
    });
  }
});
$(function () {
  calendar.render();
  $(".cal-filter").on("click", function (evt) {
    evt.preventDefault();
    var $this = $(evt.currentTarget);
    $this.toggleClass("hollow").blur();
    hide = [];
    $(".cal-filter").each(function (_idx, el) {
      if ($(el).hasClass("hollow")) {
        hide.push(el.id);
      }
    });
    updateHash(calendar.getDate());
    calendar.render();
  });

  // Initial filter values from hash
  var filters = getInitialFilters();
  if (filters !== false) {
    $(".cal-filter").each(function (_, el) {
      if (!filters.includes(el.id)) {
        $(el).click();
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Children: function() { return /* binding */ O; },
/* harmony export */   Component: function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component; },
/* harmony export */   Fragment: function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment; },
/* harmony export */   PureComponent: function() { return /* binding */ w; },
/* harmony export */   StrictMode: function() { return /* binding */ vn; },
/* harmony export */   Suspense: function() { return /* binding */ D; },
/* harmony export */   SuspenseList: function() { return /* binding */ V; },
/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: function() { return /* binding */ rn; },
/* harmony export */   cloneElement: function() { return /* binding */ cn; },
/* harmony export */   createContext: function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext; },
/* harmony export */   createElement: function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement; },
/* harmony export */   createFactory: function() { return /* binding */ on; },
/* harmony export */   createPortal: function() { return /* binding */ j; },
/* harmony export */   createRef: function() { return /* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef; },
/* harmony export */   "default": function() { return /* binding */ bn; },
/* harmony export */   findDOMNode: function() { return /* binding */ an; },
/* harmony export */   flushSync: function() { return /* binding */ hn; },
/* harmony export */   forwardRef: function() { return /* binding */ k; },
/* harmony export */   hydrate: function() { return /* binding */ q; },
/* harmony export */   isValidElement: function() { return /* binding */ ln; },
/* harmony export */   lazy: function() { return /* binding */ M; },
/* harmony export */   memo: function() { return /* binding */ R; },
/* harmony export */   render: function() { return /* binding */ Y; },
/* harmony export */   startTransition: function() { return /* binding */ dn; },
/* harmony export */   unmountComponentAtNode: function() { return /* binding */ fn; },
/* harmony export */   unstable_batchedUpdates: function() { return /* binding */ sn; },
/* harmony export */   useCallback: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback; },
/* harmony export */   useContext: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext; },
/* harmony export */   useDebugValue: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue; },
/* harmony export */   useDeferredValue: function() { return /* binding */ pn; },
/* harmony export */   useEffect: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect; },
/* harmony export */   useErrorBoundary: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary; },
/* harmony export */   useId: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId; },
/* harmony export */   useImperativeHandle: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle; },
/* harmony export */   useInsertionEffect: function() { return /* binding */ yn; },
/* harmony export */   useLayoutEffect: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect; },
/* harmony export */   useMemo: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo; },
/* harmony export */   useReducer: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer; },
/* harmony export */   useRef: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef; },
/* harmony export */   useState: function() { return /* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState; },
/* harmony export */   useSyncExternalStore: function() { return /* binding */ _n; },
/* harmony export */   useTransition: function() { return /* binding */ mn; },
/* harmony export */   version: function() { return /* binding */ un; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




function g(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n, t) {
  return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
}
function w(n) {
  this.props = n;
}
function R(n, e) {
  function r(n) {
    var t = this.props.ref,
      r = t == n.ref;
    return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
  }
  function u(e) {
    return this.shouldComponentUpdate = r, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n, e);
  }
  return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
}
(w.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var x = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
};
var N = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.forward_ref") || 3911;
function k(n) {
  function t(t) {
    var e = g({}, t);
    return delete e.ref, n(e, t.ref || null);
  }
  return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var A = function A(n, t) {
    return null == n ? null : (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t));
  },
  O = {
    map: A,
    forEach: A,
    count: function count(n) {
      return n ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length : 0;
    },
    only: function only(n) {
      var t = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray
  },
  T = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function (n, t, e, r) {
  if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
  T(n, t, e, r);
};
var I = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
function L(n, t, e) {
  return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
    "function" == typeof n.__c && n.__c();
  }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
    return L(n, t, e);
  })), n;
}
function U(n, t, e) {
  return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
    return U(n, t, e);
  }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F(n) {
  var t = n.__.__c;
  return t && t.__a && t.__a(n);
}
function M(n) {
  var e, r, u;
  function o(o) {
    if (e || (e = n()).then(function (n) {
      r = n["default"] || n;
    }, function (n) {
      u = n;
    }), u) throw u;
    if (!r) throw e;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r, o);
  }
  return o.displayName = "Lazy", o.__f = !0, o;
}
function V() {
  this.u = null, this.o = null;
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
}, (D.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = F(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__a) {
          var n = r.state.__a;
          r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __a: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, D.prototype.componentWillUnmount = function () {
  this.t = [];
}, D.prototype.render = function (n, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"),
        o = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
    }
    this.__b = null;
  }
  var i = e.__a && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, n.fallback);
  return i && (i.__h = null), [(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, e.__a ? null : n.children), i];
};
var W = function W(n, t, e) {
  if (++e[1] === e[0] && n.o["delete"](t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function P(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function $(n) {
  var e = this,
    r = n.i;
  e.componentWillUnmount = function () {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, e.l), e.l = null, e.i = null;
  }, e.i && e.i !== r && e.componentWillUnmount(), n.__v ? (e.l || (e.i = r, e.l = {
    nodeType: 1,
    parentNode: r,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, t) {
      this.childNodes.push(n), e.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
    }
  }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(P, {
    context: e.context
  }, n.__v), e.l)) : e.l && e.componentWillUnmount();
}
function j(n, e) {
  var r = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)($, {
    __v: n,
    i: e
  });
  return r.containerInfo = e, r;
}
(V.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component()).__a = function (n) {
  var t = this,
    e = F(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, V.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    W(n, e, t);
  });
};
var z = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
  B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  H = "undefined" != typeof document,
  Z = function Z(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
  };
function Y(n, t, e) {
  return null == t.__k && (t.textContent = ""), (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function q(n, t, e) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
  Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, t, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + t];
    },
    set: function set(n) {
      Object.defineProperty(this, t, {
        configurable: !0,
        writable: !0,
        value: n
      });
    }
  });
});
var G = preact__WEBPACK_IMPORTED_MODULE_0__.options.event;
function J() {}
function K() {
  return this.cancelBubble;
}
function Q() {
  return this.defaultPrevented;
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.event = function (n) {
  return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
};
var X,
  nn = {
    configurable: !0,
    get: function get() {
      return this["class"];
    }
  },
  tn = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function (n) {
  var t = n.type,
    e = n.props,
    u = e;
  if ("string" == typeof t) {
    var o = -1 === t.indexOf("-");
    for (var i in u = {}, e) {
      var l = e[i];
      H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
    }
    "select" == t && u.multiple && Array.isArray(u.value) && (u.value = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = -1 != u.value.indexOf(n.props.value);
    })), "select" == t && null != u.defaultValue && (u.value = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(e.children).forEach(function (n) {
      n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
    })), n.props = u, e["class"] != e.className && (nn.enumerable = "className" in e, null != e.className && (u["class"] = e.className), Object.defineProperty(u, "className", nn));
  }
  n.$$typeof = z, tn && tn(n);
};
var en = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
  en && en(n), X = n.__c;
};
var rn = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return X.__n[n.__c].props.value;
        }
      }
    }
  },
  un = "17.0.2";
function on(n) {
  return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null, n);
}
function ln(n) {
  return !!n && n.$$typeof === z;
}
function cn(n) {
  return ln(n) ? preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, arguments) : n;
}
function fn(n) {
  return !!n.__k && ((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, n), !0);
}
function an(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var sn = function sn(n, t) {
    return n(t);
  },
  hn = function hn(n, t) {
    return n(t);
  },
  vn = preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function dn(n) {
  n();
}
function pn(n) {
  return n;
}
function mn() {
  return [!1, dn];
}
var yn = preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;
function _n(n, t) {
  var e = t(),
    r = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
      h: {
        __: e,
        v: t
      }
    }),
    u = r[0].h,
    o = r[1];
  return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    u.__ = e, u.v = t, E(u.__, t()) || o({
      h: u
    });
  }, [n, e, t]), (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return E(u.__, u.v()) || o({
      h: u
    }), n(function () {
      E(u.__, u.v()) || o({
        h: u
      });
    });
  }, [n]), e;
}
var bn = {
  useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
  useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
  useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
  useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
  useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
  useInsertionEffect: yn,
  useTransition: mn,
  useDeferredValue: pn,
  useSyncExternalStore: _n,
  startTransition: dn,
  useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
  useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
  useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
  useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
  useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
  useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
  version: "17.0.2",
  Children: O,
  render: Y,
  hydrate: q,
  unmountComponentAtNode: fn,
  createPortal: j,
  createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
  createContext: preact__WEBPACK_IMPORTED_MODULE_0__.createContext,
  createFactory: on,
  cloneElement: cn,
  createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
  Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
  isValidElement: ln,
  findDOMNode: an,
  Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
  PureComponent: w,
  memo: R,
  forwardRef: k,
  flushSync: hn,
  unstable_batchedUpdates: sn,
  StrictMode: vn,
  Suspense: D,
  SuspenseList: V,
  lazy: M,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rn
};


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: function() { return /* binding */ x; },
/* harmony export */   Fragment: function() { return /* binding */ _; },
/* harmony export */   cloneElement: function() { return /* binding */ F; },
/* harmony export */   createContext: function() { return /* binding */ G; },
/* harmony export */   createElement: function() { return /* binding */ y; },
/* harmony export */   createRef: function() { return /* binding */ d; },
/* harmony export */   h: function() { return /* binding */ y; },
/* harmony export */   hydrate: function() { return /* binding */ E; },
/* harmony export */   isValidElement: function() { return /* binding */ i; },
/* harmony export */   options: function() { return /* binding */ l; },
/* harmony export */   render: function() { return /* binding */ D; },
/* harmony export */   toChildArray: function() { return /* binding */ j; }
/* harmony export */ });
var n,
  l,
  u,
  i,
  t,
  r,
  o,
  f,
  e,
  c = {},
  s = [],
  a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function v(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function y(l, u, i) {
  var t,
    r,
    o,
    f = {};
  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
  return p(l, f, t, r, null);
}
function p(n, i, t, r, o) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++u : o
  };
  return null == o && null != l.vnode && l.vnode(f), f;
}
function d() {
  return {
    current: null
  };
}
function _(n) {
  return n.children;
}
function k(n, l, u, i, t) {
  var r;
  for (r in u) "children" === r || "key" === r || r in l || g(n, r, null, u[r], i);
  for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || g(n, r, l[r], u[r], i);
}
function b(n, l, u) {
  "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a.test(l) ? u : u + "px";
}
function g(n, l, u, i, t) {
  var r;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || b(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || b(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? w : m, r) : n.removeEventListener(l, r ? w : m, r);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
  }
}
function m(n) {
  t = !0;
  try {
    return this.l[n.type + !1](l.event ? l.event(n) : n);
  } finally {
    t = !1;
  }
}
function w(n) {
  t = !0;
  try {
    return this.l[n.type + !0](l.event ? l.event(n) : n);
  } finally {
    t = !1;
  }
}
function x(n, l) {
  this.props = n, this.context = l;
}
function A(n, l) {
  if (null == l) return n.__ ? A(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? A(n) : null;
}
function P(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return P(n);
  }
}
function C(n) {
  t ? setTimeout(n) : f(n);
}
function T(n) {
  (!n.__d && (n.__d = !0) && r.push(n) && !$.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || C)($);
}
function $() {
  var n, l, u, i, t, o, f, e;
  for (r.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }); n = r.shift();) n.__d && (l = r.length, i = void 0, t = void 0, f = (o = (u = n).__v).__e, (e = u.__P) && (i = [], (t = h({}, o)).__v = o.__v + 1, M(e, o, t, u.__n, void 0 !== e.ownerSVGElement, null != o.__h ? [f] : null, i, null == f ? A(o) : f, o.__h), N(i, o), o.__e != f && P(o)), r.length > l && r.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }));
  $.__r = 0;
}
function H(n, l, u, i, t, r, o, f, e, a) {
  var h,
    v,
    y,
    d,
    k,
    b,
    g,
    m = i && i.__k || s,
    w = m.length;
  for (u.__k = [], h = 0; h < l.length; h++) if (null != (d = u.__k[h] = null == (d = l[h]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? p(null, d, null, null, d) : Array.isArray(d) ? p(_, {
    children: d
  }, null, null, null) : d.__b > 0 ? p(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d)) {
    if (d.__ = u, d.__b = u.__b + 1, null === (y = m[h]) || y && d.key == y.key && d.type === y.type) m[h] = void 0;else for (v = 0; v < w; v++) {
      if ((y = m[v]) && d.key == y.key && d.type === y.type) {
        m[v] = void 0;
        break;
      }
      y = null;
    }
    M(n, d, y = y || c, t, r, o, f, e, a), k = d.__e, (v = d.ref) && y.ref != v && (g || (g = []), y.ref && g.push(y.ref, null, d), g.push(v, d.__c || k, d)), null != k ? (null == b && (b = k), "function" == typeof d.type && d.__k === y.__k ? d.__d = e = I(d, e, n) : e = z(n, d, y, m, k, e), "function" == typeof u.type && (u.__d = e)) : e && y.__e == e && e.parentNode != n && (e = A(y));
  }
  for (u.__e = b, h = w; h--;) null != m[h] && ("function" == typeof u.type && null != m[h].__e && m[h].__e == u.__d && (u.__d = L(i).nextSibling), q(m[h], m[h]));
  if (g) for (h = 0; h < g.length; h++) S(g[h], g[++h], g[++h]);
}
function I(n, l, u) {
  for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? I(i, l, u) : z(u, i, i, t, i.__e, l));
  return l;
}
function j(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    j(n, l);
  }) : l.push(n)), l;
}
function z(n, l, u, i, t, r) {
  var o, f, e;
  if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
    for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
    n.insertBefore(t, r), o = r;
  }
  return void 0 !== o ? o : t.nextSibling;
}
function L(n) {
  var l, u, i;
  if (null == n.type || "string" == typeof n.type) return n.__e;
  if (n.__k) for (l = n.__k.length - 1; l >= 0; l--) if ((u = n.__k[l]) && (i = L(u))) return i;
  return null;
}
function M(n, u, i, t, r, o, f, e, c) {
  var s,
    a,
    v,
    y,
    p,
    d,
    k,
    b,
    g,
    m,
    w,
    A,
    P,
    C,
    T,
    $ = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l.__b) && s(u);
  try {
    n: if ("function" == typeof $) {
      if (b = u.props, g = (s = $.contextType) && t[s.__c], m = s ? g ? g.props.value : s.__ : t, i.__c ? k = (a = u.__c = i.__c).__ = a.__E : ("prototype" in $ && $.prototype.render ? u.__c = a = new $(b, m) : (u.__c = a = new x(b, m), a.constructor = $, a.render = B), g && g.sub(a), a.props = b, a.state || (a.state = {}), a.context = m, a.__n = t, v = a.__d = !0, a.__h = [], a._sb = []), null == a.__s && (a.__s = a.state), null != $.getDerivedStateFromProps && (a.__s == a.state && (a.__s = h({}, a.__s)), h(a.__s, $.getDerivedStateFromProps(b, a.__s))), y = a.props, p = a.state, a.__v = u, v) null == $.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), null != a.componentDidMount && a.__h.push(a.componentDidMount);else {
        if (null == $.getDerivedStateFromProps && b !== y && null != a.componentWillReceiveProps && a.componentWillReceiveProps(b, m), !a.__e && null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(b, a.__s, m) || u.__v === i.__v) {
          for (u.__v !== i.__v && (a.props = b, a.state = a.__s, a.__d = !1), u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), w = 0; w < a._sb.length; w++) a.__h.push(a._sb[w]);
          a._sb = [], a.__h.length && f.push(a);
          break n;
        }
        null != a.componentWillUpdate && a.componentWillUpdate(b, a.__s, m), null != a.componentDidUpdate && a.__h.push(function () {
          a.componentDidUpdate(y, p, d);
        });
      }
      if (a.context = m, a.props = b, a.__P = n, A = l.__r, P = 0, "prototype" in $ && $.prototype.render) {
        for (a.state = a.__s, a.__d = !1, A && A(u), s = a.render(a.props, a.state, a.context), C = 0; C < a._sb.length; C++) a.__h.push(a._sb[C]);
        a._sb = [];
      } else do {
        a.__d = !1, A && A(u), s = a.render(a.props, a.state, a.context), a.state = a.__s;
      } while (a.__d && ++P < 25);
      a.state = a.__s, null != a.getChildContext && (t = h(h({}, t), a.getChildContext())), v || null == a.getSnapshotBeforeUpdate || (d = a.getSnapshotBeforeUpdate(y, p)), T = null != s && s.type === _ && null == s.key ? s.props.children : s, H(n, Array.isArray(T) ? T : [T], u, i, t, r, o, f, e, c), a.base = u.__e, u.__h = null, a.__h.length && f.push(a), k && (a.__E = a.__ = null), a.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = O(i.__e, u, i, t, r, o, f, c);
    (s = l.diffed) && s(u);
  } catch (n) {
    u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l.__e(n, u, i);
  }
}
function N(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}
function O(l, u, i, t, r, o, f, e) {
  var s,
    a,
    h,
    y = i.props,
    p = u.props,
    d = u.type,
    _ = 0;
  if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, o[_] = null;
    break;
  }
  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, e = !1;
  }
  if (null === d) y === p || e && l.data === p || (l.data = p);else {
    if (o = o && n.call(l.childNodes), a = (y = i.props || c).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !e) {
      if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
      (h || a) && (h && (a && h.__html == a.__html || h.__html === l.innerHTML) || (l.innerHTML = h && h.__html || ""));
    }
    if (k(l, p, y, r, e), h) u.__k = [];else if (_ = u.props.children, H(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && A(i, 0), e), null != o) for (_ = o.length; _--;) null != o[_] && v(o[_]);
    e || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && g(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && g(l, "checked", _, y.checked, !1));
  }
  return l;
}
function S(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}
function q(n, u, i) {
  var t, r;
  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || S(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null, n.__c = void 0;
  }
  if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && q(t[r], u, i || "function" != typeof n.type);
  i || null == n.__e || v(n.__e), n.__ = n.__e = n.__d = void 0;
}
function B(n, l, u) {
  return this.constructor(n, u);
}
function D(u, i, t) {
  var r, o, f;
  l.__ && l.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], M(i, u = (!r && t || i).__k = y(_, null, [u]), o || c, c, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), N(f, u);
}
function E(n, l) {
  D(n, l, E);
}
function F(l, u, i) {
  var t,
    r,
    o,
    f = h({}, l.props);
  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), p(l.type, f, t || l.key, r || l.ref, null);
}
function G(n, l) {
  var u = {
    __c: l = "__cC" + e++,
    __: n,
    Consumer: function Consumer(n, l) {
      return n.children(l);
    },
    Provider: function Provider(n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(function (n) {
          n.__e = !0, T(n);
        });
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
n = s.slice, l = {
  __e: function __e(n, l, u, i) {
    for (var t, r, o; l = l.__;) if ((t = l.__c) && !t.__) try {
      if ((r = t.constructor) && null != r.getDerivedStateFromError && (t.setState(r.getDerivedStateFromError(n)), o = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), o = t.__d), o) return t.__E = t;
    } catch (l) {
      n = l;
    }
    throw n;
  }
}, u = 0, i = function i(n) {
  return null != n && void 0 === n.constructor;
}, t = !1, x.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n && (n = n(h({}, u), this.props)), n && h(u, n), null != n && this.__v && (l && this._sb.push(l), T(this));
}, x.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), T(this));
}, x.prototype.render = _, r = [], f = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $.__r = 0, e = 0;


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: function() { return /* binding */ T; },
/* harmony export */   useContext: function() { return /* binding */ q; },
/* harmony export */   useDebugValue: function() { return /* binding */ x; },
/* harmony export */   useEffect: function() { return /* binding */ h; },
/* harmony export */   useErrorBoundary: function() { return /* binding */ P; },
/* harmony export */   useId: function() { return /* binding */ V; },
/* harmony export */   useImperativeHandle: function() { return /* binding */ A; },
/* harmony export */   useLayoutEffect: function() { return /* binding */ s; },
/* harmony export */   useMemo: function() { return /* binding */ F; },
/* harmony export */   useReducer: function() { return /* binding */ y; },
/* harmony export */   useRef: function() { return /* binding */ _; },
/* harmony export */   useState: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.__h && preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__.options.__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "./gems/decidim-module-calendar/app/packs/entrypoints/decidim_calendar.scss":
/*!**********************************************************************************!*\
  !*** ./gems/decidim-module-calendar/app/packs/entrypoints/decidim_calendar.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./gems/decidim-module-calendar/app/packs/images/decidim_calendar_icon.svg":
/*!*********************************************************************************!*\
  !*** ./gems/decidim-module-calendar/app/packs/images/decidim_calendar_icon.svg ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "media/images/decidim_calendar_icon-821577f123b9560d5932.svg";

/***/ }),

/***/ "./node_modules/@fullcalendar/core/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/core/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Calendar: function() { return /* binding */ Calendar; },
/* harmony export */   JsonRequestError: function() { return /* reexport safe */ _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ag; },
/* harmony export */   createPlugin: function() { return /* binding */ createPlugin; },
/* harmony export */   formatDate: function() { return /* binding */ formatDate; },
/* harmony export */   formatRange: function() { return /* binding */ formatRange; },
/* harmony export */   globalLocales: function() { return /* binding */ globalLocales; },
/* harmony export */   globalPlugins: function() { return /* binding */ globalPlugins; },
/* harmony export */   sliceEvents: function() { return /* binding */ sliceEvents; },
/* harmony export */   version: function() { return /* binding */ version; }
/* harmony export */ });
/* harmony import */ var _internal_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal-common.js */ "./node_modules/@fullcalendar/core/internal-common.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var globalLocales = [];
var MINIMAL_RAW_EN_LOCALE = {
  code: 'en',
  week: {
    dow: 0,
    doy: 4 // 4 days need to be within the year to be considered the first week
  },
  direction: 'ltr',
  buttonText: {
    prev: 'prev',
    next: 'next',
    prevYear: 'prev year',
    nextYear: 'next year',
    year: 'year',
    today: 'today',
    month: 'month',
    week: 'week',
    day: 'day',
    list: 'list'
  },
  weekText: 'W',
  weekTextLong: 'Week',
  closeHint: 'Close',
  timeHint: 'Time',
  eventHint: 'Event',
  allDayText: 'all-day',
  moreLinkText: 'more',
  noEventsText: 'No events to display'
};
var RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: 'Previous $0',
    next: 'Next $0',
    today: function today(buttonText, unit) {
      return unit === 'day' ? 'Today' : "This ".concat(buttonText);
    }
  },
  viewHint: '$0 view',
  navLinkHint: 'Go to $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Show ".concat(eventCnt, " more event").concat(eventCnt === 1 ? '' : 's');
  }
});
function organizeRawLocales(explicitRawLocales) {
  var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
  var allRawLocales = globalLocales.concat(explicitRawLocales);
  var rawLocaleMap = {
    en: RAW_EN_LOCALE
  };
  var _iterator = _createForOfIteratorHelper(allRawLocales),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rawLocale = _step.value;
      rawLocaleMap[rawLocale.code] = rawLocale;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    map: rawLocaleMap,
    defaultCode: defaultCode
  };
}
function buildLocale(inputSingular, available) {
  if (_typeof(inputSingular) === 'object' && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }
  return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
  var codes = [].concat(codeArg || []); // will convert to array
  var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
  for (var i = 0; i < codes.length; i += 1) {
    var parts = codes[i].toLocaleLowerCase().split('-');
    for (var j = parts.length; j > 0; j -= 1) {
      var simpleId = parts.slice(0, j).join('-');
      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }
  return null;
}
function parseLocale(codeArg, codes, raw) {
  var merged = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.m)([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
  delete merged.code; // don't want this part of the options
  var week = merged.week;
  delete merged.week;
  return {
    codeArg: codeArg,
    codes: codes,
    week: week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}

// TODO: easier way to add new hooks? need to update a million things
function createPlugin(input) {
  return {
    id: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.g)(),
    name: input.name,
    premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : undefined,
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || '',
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}
function buildPluginHooks(pluginDefs, globalDefs) {
  var currentPluginIds = {};
  var hooks = {
    premiumReleaseDate: undefined,
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: '',
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };
  function addDefs(defs) {
    var _iterator2 = _createForOfIteratorHelper(defs),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var def = _step2.value;
        var pluginName = def.name;
        var currentId = currentPluginIds[pluginName];
        if (currentId === undefined) {
          currentPluginIds[pluginName] = def.id;
          addDefs(def.deps);
          hooks = combineHooks(hooks, def);
        } else if (currentId !== def.id) {
          // different ID than the one already added
          console.warn("Duplicate plugin '".concat(pluginName, "'"));
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (pluginDefs) {
    addDefs(pluginDefs);
  }
  addDefs(globalDefs);
  return hooks;
}
function buildBuildPluginHooks() {
  var currentOverrideDefs = [];
  var currentGlobalDefs = [];
  var currentHooks;
  return function (overrideDefs, globalDefs) {
    if (!currentHooks || !(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.i)(overrideDefs, currentOverrideDefs) || !(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.i)(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }
    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}
function combineHooks(hooks0, hooks1) {
  return {
    premiumReleaseDate: compareOptionalDates(hooks0.premiumReleaseDate, hooks1.premiumReleaseDate),
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: Object.assign(Object.assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: Object.assign(Object.assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: Object.assign(Object.assign({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: Object.assign(Object.assign({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: Object.assign(Object.assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    listenerRefiners: Object.assign(Object.assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: Object.assign(Object.assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: Object.assign(Object.assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}
function compareOptionalDates(date0, date1) {
  if (date0 === undefined) {
    return date1;
  }
  if (date1 === undefined) {
    return date0;
  }
  return new Date(Math.max(date0.valueOf(), date1.valueOf()));
}
var StandardTheme = /*#__PURE__*/function (_Theme) {
  _inherits(StandardTheme, _Theme);
  function StandardTheme() {
    _classCallCheck(this, StandardTheme);
    return _callSuper(this, StandardTheme, arguments);
  }
  return _createClass(StandardTheme);
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.T);
StandardTheme.prototype.classes = {
  root: 'fc-theme-standard',
  tableCellShaded: 'fc-cell-shaded',
  buttonGroup: 'fc-button-group',
  button: 'fc-button fc-button-primary',
  buttonActive: 'fc-button-active'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
  close: 'fc-icon-x',
  prev: 'fc-icon-chevron-left',
  next: 'fc-icon-chevron-right',
  prevYear: 'fc-icon-chevrons-left',
  nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.rtlIconClasses = {
  prev: 'fc-icon-chevron-right',
  next: 'fc-icon-chevron-left',
  prevYear: 'fc-icon-chevrons-right',
  nextYear: 'fc-icon-chevrons-left'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';
function compileViewDefs(defaultConfigs, overrideConfigs) {
  var hash = {};
  var viewType;
  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }
  return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }
  var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  if (viewDef) {
    hash[viewType] = viewDef;
  }
  return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  var defaultConfig = defaultConfigs[viewType];
  var overrideConfig = overrideConfigs[viewType];
  var queryProp = function queryProp(name) {
    return defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  };
  var theComponent = queryProp('component');
  var superType = queryProp('superType');
  var superDef = null;
  if (superType) {
    if (superType === viewType) {
      throw new Error('Can\'t have a custom view type that references itself');
    }
    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }
  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }
  if (!theComponent) {
    return null; // don't throw a warning, might be settings for a single-unit view
  }
  return {
    type: viewType,
    component: theComponent,
    defaults: Object.assign(Object.assign({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: Object.assign(Object.assign({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
function parseViewConfigs(inputs) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a)(inputs, parseViewConfig);
}
function parseViewConfig(input) {
  var rawOptions = typeof input === 'function' ? {
    component: input
  } : input;
  var component = rawOptions.component;
  if (rawOptions.content) {
    // TODO: remove content/classNames/didMount/etc from options?
    component = createViewHookComponent(rawOptions);
  } else if (component && !(component.prototype instanceof _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B)) {
    // WHY?: people were using `component` property for `content`
    // TODO: converge on one setting name
    component = createViewHookComponent(Object.assign(Object.assign({}, rawOptions), {
      content: component
    }));
  }
  return {
    superType: rawOptions.type,
    component: component,
    rawOptions: rawOptions // includes type and component too :(
  };
}
function createViewHookComponent(options) {
  return function (viewProps) {
    return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.V.Consumer, null, function (context) {
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "div",
        elClasses: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.b)(context.viewSpec),
        renderProps: Object.assign(Object.assign({}, viewProps), {
          nextDayThreshold: context.options.nextDayThreshold
        }),
        generatorName: undefined,
        customGenerator: options.content,
        classNameGenerator: options.classNames,
        didMount: options.didMount,
        willUnmount: options.willUnmount
      });
    });
  };
}
function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var defaultConfigs = parseViewConfigs(defaultInputs);
  var overrideConfigs = parseViewConfigs(optionOverrides.views);
  var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a)(viewDefs, function (viewDef) {
    return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults);
  });
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  var duration = null;
  var durationUnit = '';
  var singleUnit = '';
  var singleUnitOverrides = {};
  if (durationInput) {
    duration = createDurationCached(durationInput);
    if (duration) {
      // valid?
      var denom = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.c)(duration);
      durationUnit = denom.unit;
      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }
  var queryButtonText = function queryButtonText(optionsSubset) {
    var buttonTextMap = optionsSubset.buttonText || {};
    var buttonTextKey = viewDef.defaults.buttonTextKey;
    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }
    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }
    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }
    return null;
  };
  var queryButtonTitle = function queryButtonTitle(optionsSubset) {
    var buttonHints = optionsSubset.buttonHints || {};
    var buttonKey = viewDef.defaults.buttonTextKey; // use same key as text
    if (buttonKey != null && buttonHints[buttonKey] != null) {
      return buttonHints[buttonKey];
    }
    if (buttonHints[viewDef.type] != null) {
      return buttonHints[viewDef.type];
    }
    if (buttonHints[singleUnit] != null) {
      return buttonHints[singleUnit];
    }
    return null;
  };
  return {
    type: viewDef.type,
    component: viewDef.component,
    duration: duration,
    durationUnit: durationUnit,
    singleUnit: singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: Object.assign(Object.assign({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) ||
    // constructor-specified buttonText lookup hash takes precedence
    viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e) || viewDef.type,
    // not DRY
    buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
    buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e)
    // will eventually fall back to buttonText
  };
}
// hack to get memoization working
var durationInputMap = {};
function createDurationCached(durationInput) {
  var json = JSON.stringify(durationInput);
  var res = durationInputMap[json];
  if (res === undefined) {
    res = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.d)(durationInput);
    durationInputMap[json] = res;
  }
  return res;
}
function reduceViewType(viewType, action) {
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      viewType = action.viewType;
  }
  return viewType;
}
function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  switch (action.type) {
    case 'SET_OPTION':
      return Object.assign(Object.assign({}, dynamicOptionOverrides), _defineProperty({}, action.optionName, action.rawOptionValue));
    default:
      return dynamicOptionOverrides;
  }
}
function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  var dp;
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return dateProfileGenerator.build(action.dateMarker || currentDate);
    case 'CHANGE_DATE':
      return dateProfileGenerator.build(action.dateMarker);
    case 'PREV':
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
    case 'NEXT':
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
      if (dp.isValid) {
        return dp;
      }
      break;
  }
  return currentDateProfile;
}
function initEventSources(calendarOptions, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
  switch (action.type) {
    case 'ADD_EVENT_SOURCES':
      // already parsed
      return addSources(eventSources, action.sources, activeRange, context);
    case 'REMOVE_EVENT_SOURCE':
      return removeSource(eventSources, action.sourceId);
    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }
      return eventSources;
    case 'FETCH_EVENT_SOURCES':
      return fetchSourcesByIds(eventSources, action.sourceIds ?
      // why no type?
      (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.f)(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
    case 'RECEIVE_EVENTS':
    case 'RECEIVE_EVENT_ERROR':
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
    case 'REMOVE_ALL_EVENT_SOURCES':
      return {};
    default:
      return eventSources;
  }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
  for (var sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }
  return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
  var hash = {};
  var _iterator3 = _createForOfIteratorHelper(sources),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var source = _step3.value;
      hash[source.sourceId] = source;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }
  return Object.assign(Object.assign({}, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.h)(eventSourceHash, function (eventSource) {
    return eventSource.sourceId !== sourceId;
  });
}
function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.h)(sourceHash, function (eventSource) {
    return isSourceDirty(eventSource, fetchRange, context);
  }), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }
  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching ||
  // always cancel outdated in-progress fetches
  fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  var nextSources = {};
  for (var sourceId in prevSources) {
    var source = prevSources[sourceId];
    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }
  return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
  var options = context.options,
    calendarApi = context.calendarApi;
  var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  var fetchId = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.g)();
  sourceDef.fetch({
    eventSource: eventSource,
    range: fetchRange,
    isRefetch: isRefetch,
    context: context
  }, function (res) {
    var rawEvents = res.rawEvents;
    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.response) || rawEvents;
    }
    context.dispatch({
      type: 'RECEIVE_EVENTS',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      rawEvents: rawEvents
    });
  }, function (error) {
    var errorHandled = false;
    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
      errorHandled = true;
    }
    if (eventSource.failure) {
      eventSource.failure(error);
      errorHandled = true;
    }
    if (!errorHandled) {
      console.warn(error.message, error);
    }
    context.dispatch({
      type: 'RECEIVE_EVENT_ERROR',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      error: error
    });
  });
  return Object.assign(Object.assign({}, eventSource), {
    isFetching: true,
    latestFetchId: fetchId
  });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  var eventSource = sourceHash[sourceId];
  if (eventSource &&
  // not already removed
  fetchId === eventSource.latestFetchId) {
    return Object.assign(Object.assign({}, sourceHash), _defineProperty({}, sourceId, Object.assign(Object.assign({}, eventSource), {
      isFetching: false,
      fetchRange: fetchRange
    })));
  }
  return sourceHash;
}
function excludeStaticSources(eventSources, context) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.h)(eventSources, function (eventSource) {
    return doesSourceNeedRange(eventSource, context);
  });
}
function parseInitialSources(rawOptions, context) {
  var refiners = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.j)(context);
  var rawSources = [].concat(rawOptions.eventSources || []);
  var sources = []; // parsed
  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }
  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }
  var _iterator4 = _createForOfIteratorHelper(rawSources),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var rawSource = _step4.value;
      var source = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.p)(rawSource, context, refiners);
      if (source) {
        sources.push(source);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return sources;
}
function doesSourceNeedRange(eventSource, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}
function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case 'UNSELECT_DATES':
      return null;
    case 'SELECT_DATES':
      return action.selection;
    default:
      return currentSelection;
  }
}
function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case 'UNSELECT_EVENT':
      return '';
    case 'SELECT_EVENT':
      return action.eventInstanceId;
    default:
      return currentInstanceId;
  }
}
function reduceEventDrag(currentDrag, action) {
  var newDrag;
  switch (action.type) {
    case 'UNSET_EVENT_DRAG':
      return null;
    case 'SET_EVENT_DRAG':
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };
    default:
      return currentDrag;
  }
}
function reduceEventResize(currentResize, action) {
  var newResize;
  switch (action.type) {
    case 'UNSET_EVENT_RESIZE':
      return null;
    case 'SET_EVENT_RESIZE':
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };
    default:
      return currentResize;
  }
}
function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  var footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  return {
    header: header,
    footer: footer
  };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var sectionWidgets = {};
  var viewsWithButtons = [];
  var hasTitle = false;
  for (var sectionName in sectionStrHash) {
    var sectionStr = sectionStrHash[sectionName];
    var sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
    sectionWidgets[sectionName] = sectionRes.widgets;
    viewsWithButtons.push.apply(viewsWithButtons, _toConsumableArray(sectionRes.viewsWithButtons));
    hasTitle = hasTitle || sectionRes.hasTitle;
  }
  return {
    sectionWidgets: sectionWidgets,
    viewsWithButtons: viewsWithButtons,
    hasTitle: hasTitle
  };
}
/*
BAD: querying icons and text here. should be done at render time
*/
function parseSection(sectionStr, calendarOptions,
// defaults+overrides, then refined
calendarOptionOverrides,
// overrides only!, unrefined :(
theme, viewSpecs, calendarApi) {
  var isRtl = calendarOptions.direction === 'rtl';
  var calendarCustomButtons = calendarOptions.customButtons || {};
  var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  var calendarButtonText = calendarOptions.buttonText || {};
  var calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
  var calendarButtonHints = calendarOptions.buttonHints || {};
  var sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
  var viewsWithButtons = [];
  var hasTitle = false;
  var widgets = sectionSubstrs.map(function (buttonGroupStr) {
    return buttonGroupStr.split(',').map(function (buttonName) {
      if (buttonName === 'title') {
        hasTitle = true;
        return {
          buttonName: buttonName
        };
      }
      var customButtonProps;
      var viewSpec;
      var buttonClick;
      var buttonIcon; // only one of these will be set
      var buttonText; // "
      var buttonHint;
      // ^ for the title="" attribute, for accessibility
      if (customButtonProps = calendarCustomButtons[buttonName]) {
        buttonClick = function buttonClick(ev) {
          if (customButtonProps.click) {
            customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
          }
        };
        (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
        buttonHint = customButtonProps.hint || customButtonProps.text;
      } else if (viewSpec = viewSpecs[buttonName]) {
        viewsWithButtons.push(buttonName);
        buttonClick = function buttonClick() {
          calendarApi.changeView(buttonName);
        };
        (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
        var textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
        buttonHint = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.k)(viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint, [textFallback, buttonName],
        // view-name = buttonName
        textFallback);
      } else if (calendarApi[buttonName]) {
        // a calendarApi method
        buttonClick = function buttonClick() {
          calendarApi[buttonName]();
        };
        (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]); // everything else is considered default
        if (buttonName === 'prevYear' || buttonName === 'nextYear') {
          var prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
          buttonHint = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.k)(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [calendarButtonText.year || 'year', 'year'], calendarButtonText[buttonName]);
        } else {
          buttonHint = function buttonHint(navUnit) {
            return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.k)(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [calendarButtonText[navUnit] || navUnit, navUnit], calendarButtonText[buttonName]);
          };
        }
      }
      return {
        buttonName: buttonName,
        buttonClick: buttonClick,
        buttonIcon: buttonIcon,
        buttonText: buttonText,
        buttonHint: buttonHint
      };
    });
  });
  return {
    widgets: widgets,
    viewsWithButtons: viewsWithButtons,
    hasTitle: hasTitle
  };
}

// always represents the current view. otherwise, it'd need to change value every time date changes
var ViewImpl = /*#__PURE__*/function () {
  function ViewImpl(type, getCurrentData, dateEnv) {
    _classCallCheck(this, ViewImpl);
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }
  _createClass(ViewImpl, [{
    key: "calendar",
    get: function get() {
      return this.getCurrentData().calendarApi;
    }
  }, {
    key: "title",
    get: function get() {
      return this.getCurrentData().viewTitle;
    }
  }, {
    key: "activeStart",
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    }
  }, {
    key: "activeEnd",
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    }
  }, {
    key: "currentStart",
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    }
  }, {
    key: "currentEnd",
    get: function get() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.getCurrentData().options[name]; // are the view-specific options
    }
  }]);
  return ViewImpl;
}();
var eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta: function parseMeta(refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }
    return null;
  },
  fetch: function fetch(arg, successCallback) {
    successCallback({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = createPlugin({
  name: 'array-event-source',
  eventSourceDefs: [eventSourceDef$2]
});
var eventSourceDef$1 = {
  parseMeta: function parseMeta(refined) {
    if (typeof refined.events === 'function') {
      return refined.events;
    }
    return null;
  },
  fetch: function fetch(arg, successCallback, errorCallback) {
    var dateEnv = arg.context.dateEnv;
    var func = arg.eventSource.meta;
    (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.u)(func.bind(null, (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.l)(arg.range, dateEnv)), function (rawEvents) {
      return successCallback({
        rawEvents: rawEvents
      });
    }, errorCallback);
  }
};
var funcEventSourcePlugin = createPlugin({
  name: 'func-event-source',
  eventSourceDefs: [eventSourceDef$1]
});
var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.n,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef = {
  parseMeta: function parseMeta(refined) {
    if (refined.url && (refined.format === 'json' || !refined.format)) {
      return {
        url: refined.url,
        format: 'json',
        method: (refined.method || 'GET').toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }
    return null;
  },
  fetch: function fetch(arg, successCallback, errorCallback) {
    var meta = arg.eventSource.meta;
    var requestParams = buildRequestParams(meta, arg.range, arg.context);
    (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.r)(meta.method, meta.url, requestParams).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        rawEvents = _ref2[0],
        response = _ref2[1];
      successCallback({
        rawEvents: rawEvents,
        response: response
      });
    }, errorCallback);
  }
};
var jsonFeedEventSourcePlugin = createPlugin({
  name: 'json-event-source',
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});
function buildRequestParams(meta, range, context) {
  var dateEnv = context.dateEnv,
    options = context.options;
  var startParam;
  var endParam;
  var timeZoneParam;
  var customRequestParams;
  var params = {};
  startParam = meta.startParam;
  if (startParam == null) {
    startParam = options.startParam;
  }
  endParam = meta.endParam;
  if (endParam == null) {
    endParam = options.endParam;
  }
  timeZoneParam = meta.timeZoneParam;
  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  }
  // retrieve any outbound GET/POST data from the options
  if (typeof meta.extraParams === 'function') {
    // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
  } else {
    // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {};
  }
  Object.assign(params, customRequestParams);
  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);
  if (dateEnv.timeZone !== 'local') {
    params[timeZoneParam] = dateEnv.timeZone;
  }
  return params;
}
var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.n,
  startTime: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.d,
  endTime: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.d,
  duration: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.d,
  startRecur: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.n,
  endRecur: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.n
};
var recurring = {
  parse: function parse(refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      var recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      var duration;
      if (refined.duration) {
        duration = refined.duration;
      }
      if (!duration && refined.startTime && refined.endTime) {
        duration = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.s)(refined.endTime, refined.startTime);
      }
      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration: duration,
        typeData: recurringData // doesn't need endTime anymore but oh well
      };
    }
    return null;
  },
  expand: function expand(typeData, framingRange, dateEnv) {
    var clippedFramingRange = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.o)(framingRange, {
      start: typeData.startRecur,
      end: typeData.endRecur
    });
    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    }
    return [];
  }
};
var simpleRecurringEventsPlugin = createPlugin({
  name: 'simple-recurring-event',
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  var dowHash = daysOfWeek ? (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.f)(daysOfWeek) : null;
  var dayMarker = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.q)(framingRange.start);
  var endMarker = framingRange.end;
  var instanceStarts = [];
  while (dayMarker < endMarker) {
    var instanceStart = void 0;
    // if everyday, or this particular day-of-week
    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }
      instanceStarts.push(instanceStart);
    }
    dayMarker = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayMarker, 1);
  }
  return instanceStarts;
}
var changeHandlerPlugin = createPlugin({
  name: 'change-handler',
  optionChangeHandlers: {
    events: function events(_events, context) {
      handleEventSources([_events], context);
    },
    eventSources: handleEventSources
  }
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/
function handleEventSources(inputs, context) {
  var unfoundSources = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.v)(context.getCurrentData().eventSources);
  if (unfoundSources.length === 1 && inputs.length === 1 && Array.isArray(unfoundSources[0]._raw) && Array.isArray(inputs[0])) {
    context.dispatch({
      type: 'RESET_RAW_EVENTS',
      sourceId: unfoundSources[0].sourceId,
      rawEvents: inputs[0]
    });
    return;
  }
  var newInputs = [];
  var _iterator5 = _createForOfIteratorHelper(inputs),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var input = _step5.value;
      var inputFound = false;
      for (var i = 0; i < unfoundSources.length; i += 1) {
        if (unfoundSources[i]._raw === input) {
          unfoundSources.splice(i, 1); // delete
          inputFound = true;
          break;
        }
      }
      if (!inputFound) {
        newInputs.push(input);
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  var _iterator6 = _createForOfIteratorHelper(unfoundSources),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var unfoundSource = _step6.value;
      context.dispatch({
        type: 'REMOVE_EVENT_SOURCE',
        sourceId: unfoundSource.sourceId
      });
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  for (var _i = 0, _newInputs = newInputs; _i < _newInputs.length; _i++) {
    var newInput = _newInputs[_i];
    context.calendarApi.addEventSource(newInput);
  }
}
function handleDateProfile(dateProfile, context) {
  context.emitter.trigger('datesSet', Object.assign(Object.assign({}, (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.l)(dateProfile.activeRange, context.dateEnv)), {
    view: context.viewApi
  }));
}
function handleEventStore(eventStore, context) {
  var emitter = context.emitter;
  if (emitter.hasHandlers('eventsSet')) {
    emitter.trigger('eventsSet', (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.w)(eventStore, context));
  }
}

/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/
var globalPlugins = [arrayEventSourcePlugin, funcEventSourcePlugin, jsonFeedEventSourcePlugin, simpleRecurringEventsPlugin, changeHandlerPlugin, createPlugin({
  name: 'misc',
  isLoadingFuncs: [function (state) {
    return computeEventSourcesLoading(state.eventSources);
  }],
  propSetHandlers: {
    dateProfile: handleDateProfile,
    eventStore: handleEventStore
  }
})];
var TaskRunner = /*#__PURE__*/function () {
  function TaskRunner(runTaskOption, drainedOption) {
    _classCallCheck(this, TaskRunner);
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D(this.drain.bind(this));
  }
  _createClass(TaskRunner, [{
    key: "request",
    value: function request(task, delay) {
      this.queue.push(task);
      this.delayedRunner.request(delay);
    }
  }, {
    key: "pause",
    value: function pause(scope) {
      this.delayedRunner.pause(scope);
    }
  }, {
    key: "resume",
    value: function resume(scope, force) {
      this.delayedRunner.resume(scope, force);
    }
  }, {
    key: "drain",
    value: function drain() {
      var queue = this.queue;
      while (queue.length) {
        var completedTasks = [];
        var task = void 0;
        while (task = queue.shift()) {
          this.runTask(task);
          completedTasks.push(task);
        }
        this.drained(completedTasks);
      } // keep going, in case new tasks were added in the drained handler
    }
  }, {
    key: "runTask",
    value: function runTask(task) {
      if (this.runTaskOption) {
        this.runTaskOption(task);
      }
    }
  }, {
    key: "drained",
    value: function drained(completedTasks) {
      if (this.drainedOption) {
        this.drainedOption(completedTasks);
      }
    }
  }]);
  return TaskRunner;
}(); // Computes what the title at the top of the calendarApi should be for this view
function buildTitle(dateProfile, viewOptions, dateEnv) {
  var range;
  // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    // for day units or smaller, use the actual day range
    range = dateProfile.activeRange;
  }
  return dateEnv.formatRange(range.start, range.end, (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.x)(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
}
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function buildTitleFormat(dateProfile) {
  var currentRangeUnit = dateProfile.currentRangeUnit;
  if (currentRangeUnit === 'year') {
    return {
      year: 'numeric'
    };
  }
  if (currentRangeUnit === 'month') {
    return {
      year: 'numeric',
      month: 'long'
    }; // like "September 2014"
  }
  var days = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.y)(dateProfile.currentRange.start, dateProfile.currentRange.end);
  if (days !== null && days > 1) {
    // multi-day range. shorter, like "Sep 9 - 10 2014"
    return {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
  }
  // one day. longer, like "September 9 2014"
  return {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
}

// in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too
var CalendarDataManager = /*#__PURE__*/function () {
  function CalendarDataManager(props) {
    var _this = this;
    _classCallCheck(this, CalendarDataManager);
    this.computeCurrentViewData = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(this._computeCurrentViewData);
    this.organizeRawLocales = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(organizeRawLocales);
    this.buildLocale = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDateEnv$1);
    this.buildTheme = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildTheme);
    this.parseToolbars = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(parseToolbars);
    this.buildViewSpecs = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildViewSpecs);
    this.buildDateProfileGenerator = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.A)(buildDateProfileGenerator);
    this.buildViewApi = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildViewApi);
    this.buildViewUiProps = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.A)(buildViewUiProps);
    this.buildEventUiBySource = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildEventUiBySource, _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.E);
    this.buildEventUiBases = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildEventUiBases);
    this.parseContextBusinessHours = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.A)(parseContextBusinessHours);
    this.buildTitle = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildTitle);
    this.emitter = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.F();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};
    this.optionsForRefining = [];
    this.optionsForHandling = [];
    this.getCurrentData = function () {
      return _this.data;
    };
    this.dispatch = function (action) {
      _this.actionRunner.request(action); // protects against recursive calls to _handleAction
    };
    this.props = props;
    this.actionRunner.pause();
    var dynamicOptionOverrides = {};
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
    // wire things up
    // TODO: not DRY
    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    var currentDate = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.G)(optionsData.calendarOptions, optionsData.dateEnv);
    var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    if (!(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H)(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    };
    // needs to be after setThisContext
    var _iterator7 = _createForOfIteratorHelper(optionsData.pluginHooks.contextInit),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var callback = _step7.value;
        callback(calendarContext);
      }
      // NOT DRY
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    var initialState = {
      dynamicOptionOverrides: dynamicOptionOverrides,
      currentViewType: currentViewType,
      currentDate: currentDate,
      dateProfile: dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources: eventSources,
      eventUiBases: {},
      eventStore: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
      renderableEventStore: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
      dateSelection: null,
      eventSelection: '',
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };
    var contextAndState = Object.assign(Object.assign({}, calendarContext), initialState);
    var _iterator8 = _createForOfIteratorHelper(optionsData.pluginHooks.reducers),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var reducer = _step8.value;
        Object.assign(initialState, reducer(null, null, contextAndState));
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger('loading', true); // NOT DRY
    }
    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }
  _createClass(CalendarDataManager, [{
    key: "resetOptions",
    value: function resetOptions(optionOverrides, changedOptionNames) {
      var props = this.props;
      if (changedOptionNames === undefined) {
        props.optionOverrides = optionOverrides;
      } else {
        var _this$optionsForRefin;
        props.optionOverrides = Object.assign(Object.assign({}, props.optionOverrides || {}), optionOverrides);
        (_this$optionsForRefin = this.optionsForRefining).push.apply(_this$optionsForRefin, _toConsumableArray(changedOptionNames));
      }
      if (changedOptionNames === undefined || changedOptionNames.length) {
        this.actionRunner.request({
          type: 'NOTHING'
        });
      }
    }
  }, {
    key: "_handleAction",
    value: function _handleAction(action) {
      var props = this.props,
        state = this.state,
        emitter = this.emitter;
      var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
      var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
      var currentViewType = reduceViewType(state.currentViewType, action);
      var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
      // wire things up
      // TODO: not DRY
      props.calendarApi.currentDataManager = this;
      emitter.setThisContext(props.calendarApi);
      emitter.setOptions(currentViewData.options);
      var calendarContext = {
        dateEnv: optionsData.dateEnv,
        options: optionsData.calendarOptions,
        pluginHooks: optionsData.pluginHooks,
        calendarApi: props.calendarApi,
        dispatch: this.dispatch,
        emitter: emitter,
        getCurrentData: this.getCurrentData
      };
      var currentDate = state.currentDate,
        dateProfile = state.dateProfile;
      if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
        // hack
        dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
      }
      currentDate = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.J)(currentDate, action);
      dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
      if (action.type === 'PREV' ||
      // TODO: move this logic into DateProfileGenerator
      action.type === 'NEXT' ||
      // "
      !(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H)(dateProfile.currentRange, currentDate)) {
        currentDate = dateProfile.currentRange.start;
      }
      var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
      var eventStore = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.K)(state.eventStore, action, eventSources, dateProfile, calendarContext);
      var isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading
      var renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore :
      // try from previous state
      eventStore;
      var _this$buildViewUiProp = this.buildViewUiProps(calendarContext),
        eventUiSingleBase = _this$buildViewUiProp.eventUiSingleBase,
        selectionConfig = _this$buildViewUiProp.selectionConfig; // will memoize obj
      var eventUiBySource = this.buildEventUiBySource(eventSources);
      var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
      var newState = {
        dynamicOptionOverrides: dynamicOptionOverrides,
        currentViewType: currentViewType,
        currentDate: currentDate,
        dateProfile: dateProfile,
        eventSources: eventSources,
        eventStore: eventStore,
        renderableEventStore: renderableEventStore,
        selectionConfig: selectionConfig,
        eventUiBases: eventUiBases,
        businessHours: this.parseContextBusinessHours(calendarContext),
        dateSelection: reduceDateSelection(state.dateSelection, action),
        eventSelection: reduceSelectedEvent(state.eventSelection, action),
        eventDrag: reduceEventDrag(state.eventDrag, action),
        eventResize: reduceEventResize(state.eventResize, action)
      };
      var contextAndState = Object.assign(Object.assign({}, calendarContext), newState);
      var _iterator9 = _createForOfIteratorHelper(optionsData.pluginHooks.reducers),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var reducer = _step9.value;
          Object.assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      var wasLoading = computeIsLoading(state, calendarContext);
      var isLoading = computeIsLoading(newState, calendarContext);
      // TODO: use propSetHandlers in plugin system
      if (!wasLoading && isLoading) {
        emitter.trigger('loading', true);
      } else if (wasLoading && !isLoading) {
        emitter.trigger('loading', false);
      }
      this.state = newState;
      if (props.onAction) {
        props.onAction(action);
      }
    }
  }, {
    key: "updateData",
    value: function updateData() {
      var props = this.props,
        state = this.state;
      var oldData = this.data;
      var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
      var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
      var data = this.data = Object.assign(Object.assign(Object.assign({
        viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv),
        calendarApi: props.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      }, optionsData), currentViewData), state);
      var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
      var oldCalendarOptions = oldData && oldData.calendarOptions;
      var newCalendarOptions = optionsData.calendarOptions;
      if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
        if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
          // hack
          state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
          state.eventStore = data.eventStore = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.L)(data.eventStore, oldData.dateEnv, data.dateEnv);
          state.renderableEventStore = data.renderableEventStore = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.L)(data.renderableEventStore, oldData.dateEnv, data.dateEnv);
        }
        for (var optionName in changeHandlers) {
          if (this.optionsForHandling.indexOf(optionName) !== -1 || oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
            changeHandlers[optionName](newCalendarOptions[optionName], data);
          }
        }
      }
      this.optionsForHandling = [];
      if (props.onData) {
        props.onData(data);
      }
    }
  }, {
    key: "computeOptionsData",
    value: function computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
      // TODO: blacklist options that are handled by optionChangeHandlers
      if (!this.optionsForRefining.length && optionOverrides === this.stableOptionOverrides && dynamicOptionOverrides === this.stableDynamicOptionOverrides) {
        return this.stableCalendarOptionsData;
      }
      var _this$processRawCalen = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides),
        refinedOptions = _this$processRawCalen.refinedOptions,
        pluginHooks = _this$processRawCalen.pluginHooks,
        localeDefaults = _this$processRawCalen.localeDefaults,
        availableLocaleData = _this$processRawCalen.availableLocaleData,
        extra = _this$processRawCalen.extra;
      warnUnknownOptions(extra);
      var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
      var viewSpecs = this.buildViewSpecs(pluginHooks.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, localeDefaults);
      var theme = this.buildTheme(refinedOptions, pluginHooks);
      var toolbarConfig = this.parseToolbars(refinedOptions, this.stableOptionOverrides, theme, viewSpecs, calendarApi);
      return this.stableCalendarOptionsData = {
        calendarOptions: refinedOptions,
        pluginHooks: pluginHooks,
        dateEnv: dateEnv,
        viewSpecs: viewSpecs,
        theme: theme,
        toolbarConfig: toolbarConfig,
        localeDefaults: localeDefaults,
        availableRawLocales: availableLocaleData.map
      };
    }
    // always called from behind a memoizer
  }, {
    key: "processRawCalendarOptions",
    value: function processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
      var _this$optionsForHandl;
      var _mergeRawOptions = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.M)([_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e, optionOverrides, dynamicOptionOverrides]),
        locales = _mergeRawOptions.locales,
        locale = _mergeRawOptions.locale;
      var availableLocaleData = this.organizeRawLocales(locales);
      var availableRawLocales = availableLocaleData.map;
      var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
      var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
      var refiners = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.N), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.O), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.P), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
      var extra = {};
      var raw = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.M)([_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e, localeDefaults, optionOverrides, dynamicOptionOverrides]);
      var refined = {};
      var currentRaw = this.currentCalendarOptionsInput;
      var currentRefined = this.currentCalendarOptionsRefined;
      var anyChanges = false;
      for (var optionName in raw) {
        if (this.optionsForRefining.indexOf(optionName) === -1 && (raw[optionName] === currentRaw[optionName] || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q[optionName] && optionName in currentRaw && _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q[optionName](currentRaw[optionName], raw[optionName]))) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
      if (anyChanges) {
        this.currentCalendarOptionsInput = raw;
        this.currentCalendarOptionsRefined = refined;
        this.stableOptionOverrides = optionOverrides;
        this.stableDynamicOptionOverrides = dynamicOptionOverrides;
      }
      (_this$optionsForHandl = this.optionsForHandling).push.apply(_this$optionsForHandl, _toConsumableArray(this.optionsForRefining));
      this.optionsForRefining = [];
      return {
        rawOptions: this.currentCalendarOptionsInput,
        refinedOptions: this.currentCalendarOptionsRefined,
        pluginHooks: pluginHooks,
        availableLocaleData: availableLocaleData,
        localeDefaults: localeDefaults,
        extra: extra
      };
    }
  }, {
    key: "_computeCurrentViewData",
    value: function _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
      var viewSpec = optionsData.viewSpecs[viewType];
      if (!viewSpec) {
        throw new Error("viewType \"".concat(viewType, "\" is not available. Please make sure you've loaded all neccessary plugins"));
      }
      var _this$processRawViewO = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides),
        refinedOptions = _this$processRawViewO.refinedOptions,
        extra = _this$processRawViewO.extra;
      warnUnknownOptions(extra);
      var dateProfileGenerator = this.buildDateProfileGenerator({
        dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
        duration: viewSpec.duration,
        durationUnit: viewSpec.durationUnit,
        usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
        dateEnv: optionsData.dateEnv,
        calendarApi: this.props.calendarApi,
        slotMinTime: refinedOptions.slotMinTime,
        slotMaxTime: refinedOptions.slotMaxTime,
        showNonCurrentDates: refinedOptions.showNonCurrentDates,
        dayCount: refinedOptions.dayCount,
        dateAlignment: refinedOptions.dateAlignment,
        dateIncrement: refinedOptions.dateIncrement,
        hiddenDays: refinedOptions.hiddenDays,
        weekends: refinedOptions.weekends,
        nowInput: refinedOptions.now,
        validRangeInput: refinedOptions.validRange,
        visibleRangeInput: refinedOptions.visibleRange,
        fixedWeekCount: refinedOptions.fixedWeekCount
      });
      var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
      return {
        viewSpec: viewSpec,
        options: refinedOptions,
        dateProfileGenerator: dateProfileGenerator,
        viewApi: viewApi
      };
    }
  }, {
    key: "processRawViewOptions",
    value: function processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
      var raw = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.M)([_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e, viewSpec.optionDefaults, localeDefaults, optionOverrides, viewSpec.optionOverrides, dynamicOptionOverrides]);
      var refiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.N), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.O), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.P), _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.R), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
      var refined = {};
      var currentRaw = this.currentViewOptionsInput;
      var currentRefined = this.currentViewOptionsRefined;
      var anyChanges = false;
      var extra = {};
      for (var optionName in raw) {
        if (raw[optionName] === currentRaw[optionName] || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q[optionName] && _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q[optionName](raw[optionName], currentRaw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else {
          if (raw[optionName] === this.currentCalendarOptionsInput[optionName] || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q[optionName] && _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Q[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName])) {
            if (optionName in this.currentCalendarOptionsRefined) {
              // might be an "extra" prop
              refined[optionName] = this.currentCalendarOptionsRefined[optionName];
            }
          } else if (refiners[optionName]) {
            refined[optionName] = refiners[optionName](raw[optionName]);
          } else {
            extra[optionName] = raw[optionName];
          }
          anyChanges = true;
        }
      }
      if (anyChanges) {
        this.currentViewOptionsInput = raw;
        this.currentViewOptionsRefined = refined;
      }
      return {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: extra
      };
    }
  }]);
  return CalendarDataManager;
}();
function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.S({
    calendarSystem: 'gregory',
    timeZone: timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale: locale,
    weekNumberCalculation: weekNumberCalculation,
    firstDay: firstDay,
    weekText: weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator: defaultSeparator
  });
}
function buildTheme(options, pluginHooks) {
  var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
  var DateProfileGeneratorClass = props.dateProfileGeneratorClass || _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.U;
  return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewImpl(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a)(eventSources, function (eventSource) {
    return eventSource.ui;
  });
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  var eventUiBases = {
    '': eventUiSingleBase
  };
  for (var defId in eventDefs) {
    var def = eventDefs[defId];
    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }
  return eventUiBases;
}
function buildViewUiProps(calendarContext) {
  var options = calendarContext.options;
  return {
    eventUiSingleBase: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.W)({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor
      // classNames: options.eventClassNames // render hook will handle this
    }, calendarContext),
    selectionConfig: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.W)({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
      allow: options.selectAllow
    }, calendarContext)
  };
}
function computeIsLoading(state, context) {
  var _iterator10 = _createForOfIteratorHelper(context.pluginHooks.isLoadingFuncs),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var isLoadingFunc = _step10.value;
      if (isLoadingFunc(state)) {
        return true;
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  return false;
}
function parseContextBusinessHours(calendarContext) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.X)(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
  for (var optionName in options) {
    console.warn("Unknown option '".concat(optionName, "'") + (viewName ? " for view '".concat(viewName, "'") : ''));
  }
}
var ToolbarSection = /*#__PURE__*/function (_BaseComponent) {
  _inherits(ToolbarSection, _BaseComponent);
  function ToolbarSection() {
    _classCallCheck(this, ToolbarSection);
    return _callSuper(this, ToolbarSection, arguments);
  }
  _createClass(ToolbarSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var children = this.props.widgetGroups.map(function (widgetGroup) {
        return _this2.renderWidgetGroup(widgetGroup);
      });
      return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, ['div', {
        className: 'fc-toolbar-chunk'
      }].concat(_toConsumableArray(children)));
    }
  }, {
    key: "renderWidgetGroup",
    value: function renderWidgetGroup(widgetGroup) {
      var props = this.props;
      var theme = this.context.theme;
      var children = [];
      var isOnlyButtons = true;
      var _iterator11 = _createForOfIteratorHelper(widgetGroup),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var widget = _step11.value;
          var buttonName = widget.buttonName,
            buttonClick = widget.buttonClick,
            buttonText = widget.buttonText,
            buttonIcon = widget.buttonIcon,
            buttonHint = widget.buttonHint;
          if (buttonName === 'title') {
            isOnlyButtons = false;
            children.push((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
              className: "fc-toolbar-title",
              id: props.titleId
            }, props.title));
          } else {
            var isPressed = buttonName === props.activeButton;
            var isDisabled = !props.isTodayEnabled && buttonName === 'today' || !props.isPrevEnabled && buttonName === 'prev' || !props.isNextEnabled && buttonName === 'next';
            var buttonClasses = ["fc-".concat(buttonName, "-button"), theme.getClass('button')];
            if (isPressed) {
              buttonClasses.push(theme.getClass('buttonActive'));
            }
            children.push((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
              type: "button",
              title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint,
              disabled: isDisabled,
              "aria-pressed": isPressed,
              className: buttonClasses.join(' '),
              onClick: buttonClick
            }, buttonText || (buttonIcon ? (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
              className: buttonIcon,
              role: "img"
            }) : '')));
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      if (children.length > 1) {
        var groupClassName = isOnlyButtons && theme.getClass('buttonGroup') || '';
        return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, ['div', {
          className: groupClassName
        }].concat(children));
      }
      return children[0];
    }
  }]);
  return ToolbarSection;
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B);
var Toolbar = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(Toolbar, _BaseComponent2);
  function Toolbar() {
    _classCallCheck(this, Toolbar);
    return _callSuper(this, Toolbar, arguments);
  }
  _createClass(Toolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        model = _this$props.model,
        extraClassName = _this$props.extraClassName;
      var forceLtr = false;
      var startContent;
      var endContent;
      var sectionWidgets = model.sectionWidgets;
      var centerContent = sectionWidgets.center;
      if (sectionWidgets.left) {
        forceLtr = true;
        startContent = sectionWidgets.left;
      } else {
        startContent = sectionWidgets.start;
      }
      if (sectionWidgets.right) {
        forceLtr = true;
        endContent = sectionWidgets.right;
      } else {
        endContent = sectionWidgets.end;
      }
      var classNames = [extraClassName || '', 'fc-toolbar', forceLtr ? 'fc-toolbar-ltr' : ''];
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: classNames.join(' ')
      }, this.renderSection('start', startContent || []), this.renderSection('center', centerContent || []), this.renderSection('end', endContent || []));
    }
  }, {
    key: "renderSection",
    value: function renderSection(key, widgetGroups) {
      var props = this.props;
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarSection, {
        key: key,
        widgetGroups: widgetGroups,
        title: props.title,
        navUnit: props.navUnit,
        activeButton: props.activeButton,
        isTodayEnabled: props.isTodayEnabled,
        isPrevEnabled: props.isPrevEnabled,
        isNextEnabled: props.isNextEnabled,
        titleId: props.titleId
      });
    }
  }]);
  return Toolbar;
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B);
var ViewHarness = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(ViewHarness, _BaseComponent3);
  function ViewHarness() {
    var _this3;
    _classCallCheck(this, ViewHarness);
    _this3 = _callSuper(this, ViewHarness, arguments);
    _this3.state = {
      availableWidth: null
    };
    _this3.handleEl = function (el) {
      _this3.el = el;
      (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Y)(_this3.props.elRef, el);
      _this3.updateAvailableWidth();
    };
    _this3.handleResize = function () {
      _this3.updateAvailableWidth();
    };
    return _this3;
  }
  _createClass(ViewHarness, [{
    key: "render",
    value: function render() {
      var props = this.props,
        state = this.state;
      var aspectRatio = props.aspectRatio;
      var classNames = ['fc-view-harness', aspectRatio || props.liquid || props.height ? 'fc-view-harness-active' // harness controls the height
      : 'fc-view-harness-passive' // let the view do the height
      ];
      var height = '';
      var paddingBottom = '';
      if (aspectRatio) {
        if (state.availableWidth !== null) {
          height = state.availableWidth / aspectRatio;
        } else {
          // while waiting to know availableWidth, we can't set height to *zero*
          // because will cause lots of unnecessary scrollbars within scrollgrid.
          // BETTER: don't start rendering ANYTHING yet until we know container width
          // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
          paddingBottom = "".concat(1 / aspectRatio * 100, "%");
        }
      } else {
        height = props.height || '';
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        "aria-labelledby": props.labeledById,
        ref: this.handleEl,
        className: classNames.join(' '),
        style: {
          height: height,
          paddingBottom: paddingBottom
        }
      }, props.children);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.context.addResizeHandler(this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
  }, {
    key: "updateAvailableWidth",
    value: function updateAvailableWidth() {
      if (this.el &&
      // needed. but why?
      this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
      ) {
        this.setState({
          availableWidth: this.el.offsetWidth
        });
      }
    }
  }]);
  return ViewHarness;
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.B);
/*
Detects when the user clicks on an event within a DateComponent
*/
var EventClicking = /*#__PURE__*/function (_Interaction) {
  _inherits(EventClicking, _Interaction);
  function EventClicking(settings) {
    var _this4;
    _classCallCheck(this, EventClicking);
    _this4 = _callSuper(this, EventClicking, [settings]);
    _this4.handleSegClick = function (ev, segEl) {
      var _assertThisInitialize = _assertThisInitialized(_this4),
        component = _assertThisInitialize.component;
      var context = component.context;
      var seg = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      if (seg &&
      // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        // our way to simulate a link click for elements that can't be <a> tags
        // grab before trigger fired in case trigger trashes DOM thru rerendering
        var hasUrlContainer = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.$)(ev.target, '.fc-event-forced-url');
        var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
        context.emitter.trigger('eventClick', {
          el: segEl,
          event: new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a0(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });
        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };
    _this4.destroy = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a1)(settings.el, 'click', '.fc-event',
    // on both fg and bg events
    _this4.handleSegClick);
    return _this4;
  }
  return _createClass(EventClicking);
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Z);
/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/
var EventHovering = /*#__PURE__*/function (_Interaction2) {
  _inherits(EventHovering, _Interaction2);
  function EventHovering(settings) {
    var _this5;
    _classCallCheck(this, EventHovering);
    _this5 = _callSuper(this, EventHovering, [settings]);
    // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
    _this5.handleEventElRemove = function (el) {
      if (el === _this5.currentSegEl) {
        _this5.handleSegLeave(null, _this5.currentSegEl);
      }
    };
    _this5.handleSegEnter = function (ev, segEl) {
      if ((0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl)) {
        // TODO: better way to make sure not hovering over more+ link or its wrapper
        _this5.currentSegEl = segEl;
        _this5.triggerEvent('eventMouseEnter', ev, segEl);
      }
    };
    _this5.handleSegLeave = function (ev, segEl) {
      if (_this5.currentSegEl) {
        _this5.currentSegEl = null;
        _this5.triggerEvent('eventMouseLeave', ev, segEl);
      }
    };
    _this5.removeHoverListeners = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a2)(settings.el, '.fc-event',
    // on both fg and bg events
    _this5.handleSegEnter, _this5.handleSegLeave);
    return _this5;
  }
  _createClass(EventHovering, [{
    key: "destroy",
    value: function destroy() {
      this.removeHoverListeners();
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(publicEvName, ev, segEl) {
      var component = this.component;
      var context = component.context;
      var seg = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      if (!ev || component.isValidSegDownEl(ev.target)) {
        context.emitter.trigger(publicEvName, {
          el: segEl,
          event: new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });
      }
    }
  }]);
  return EventHovering;
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.Z);
var CalendarContent = /*#__PURE__*/function (_PureComponent) {
  _inherits(CalendarContent, _PureComponent);
  function CalendarContent() {
    var _this6;
    _classCallCheck(this, CalendarContent);
    _this6 = _callSuper(this, CalendarContent, arguments);
    _this6.buildViewContext = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a4);
    _this6.buildViewPropTransformers = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildViewPropTransformers);
    _this6.buildToolbarProps = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildToolbarProps);
    _this6.headerRef = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this6.footerRef = (0,preact__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this6.interactionsStore = {};
    // eslint-disable-next-line
    _this6.state = {
      viewLabelId: (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
    // Component Registration
    // -----------------------------------------------------------------------------------------------------------------
    _this6.registerInteractiveComponent = function (component, settingsInput) {
      var settings = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a6)(component, settingsInput);
      var DEFAULT_INTERACTIONS = [EventClicking, EventHovering];
      var interactionClasses = DEFAULT_INTERACTIONS.concat(_this6.props.pluginHooks.componentInteractions);
      var interactions = interactionClasses.map(function (TheInteractionClass) {
        return new TheInteractionClass(settings);
      });
      _this6.interactionsStore[component.uid] = interactions;
      _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a7[component.uid] = settings;
    };
    _this6.unregisterInteractiveComponent = function (component) {
      var listeners = _this6.interactionsStore[component.uid];
      if (listeners) {
        var _iterator12 = _createForOfIteratorHelper(listeners),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var listener = _step12.value;
            listener.destroy();
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        delete _this6.interactionsStore[component.uid];
      }
      delete _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a7[component.uid];
    };
    // Resizing
    // -----------------------------------------------------------------------------------------------------------------
    _this6.resizeRunner = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D(function () {
      _this6.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?
      _this6.props.emitter.trigger('windowResize', {
        view: _this6.props.viewApi
      });
    });
    _this6.handleWindowResize = function (ev) {
      var options = _this6.props.options;
      if (options.handleWindowResize && ev.target === window // avoid jqui events
      ) {
        _this6.resizeRunner.request(options.windowResizeDelay);
      }
    };
    return _this6;
  }
  /*
  renders INSIDE of an outer div
  */
  _createClass(CalendarContent, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var toolbarConfig = props.toolbarConfig,
        options = props.options;
      var toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a8)(props.options.now, props.dateEnv),
      // TODO: use NowTimer????
      props.viewTitle);
      var viewVGrow = false;
      var viewHeight = '';
      var viewAspectRatio;
      if (props.isHeightAuto || props.forPrint) {
        viewHeight = '';
      } else if (options.height != null) {
        viewVGrow = true;
      } else if (options.contentHeight != null) {
        viewHeight = options.contentHeight;
      } else {
        viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
      }
      var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
      var viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : undefined;
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.V.Provider, {
        value: viewContext
      }, toolbarConfig.header && (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, Object.assign({
        ref: this.headerRef,
        extraClassName: "fc-header-toolbar",
        model: toolbarConfig.header,
        titleId: viewLabelId
      }, toolbarProps)), (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewHarness, {
        liquid: viewVGrow,
        height: viewHeight,
        aspectRatio: viewAspectRatio,
        labeledById: viewLabelId
      }, this.renderView(props), this.buildAppendContent()), toolbarConfig.footer && (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, Object.assign({
        ref: this.footerRef,
        extraClassName: "fc-footer-toolbar",
        model: toolbarConfig.footer,
        titleId: ""
      }, toolbarProps)));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      this.calendarInteractions = props.pluginHooks.calendarInteractions.map(function (CalendarInteractionClass) {
        return new CalendarInteractionClass(props);
      });
      window.addEventListener('resize', this.handleWindowResize);
      var propSetHandlers = props.pluginHooks.propSetHandlers;
      for (var propName in propSetHandlers) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;
      var propSetHandlers = props.pluginHooks.propSetHandlers;
      for (var propName in propSetHandlers) {
        if (props[propName] !== prevProps[propName]) {
          propSetHandlers[propName](props[propName], props);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize);
      this.resizeRunner.clear();
      var _iterator13 = _createForOfIteratorHelper(this.calendarInteractions),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var interaction = _step13.value;
          interaction.destroy();
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      this.props.emitter.trigger('_unmount');
    }
  }, {
    key: "buildAppendContent",
    value: function buildAppendContent() {
      var props = this.props;
      var children = props.pluginHooks.viewContainerAppends.map(function (buildAppendContent) {
        return buildAppendContent(props);
      });
      return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, [preact__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}].concat(_toConsumableArray(children)));
    }
  }, {
    key: "renderView",
    value: function renderView(props) {
      var pluginHooks = props.pluginHooks;
      var viewSpec = props.viewSpec;
      var viewProps = {
        dateProfile: props.dateProfile,
        businessHours: props.businessHours,
        eventStore: props.renderableEventStore,
        eventUiBases: props.eventUiBases,
        dateSelection: props.dateSelection,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        isHeightAuto: props.isHeightAuto,
        forPrint: props.forPrint
      };
      var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
      var _iterator14 = _createForOfIteratorHelper(transformers),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var transformer = _step14.value;
          Object.assign(viewProps, transformer.transform(viewProps, props));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
      var ViewComponent = viewSpec.component;
      return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewComponent, Object.assign({}, viewProps));
    }
  }]);
  return CalendarContent;
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a3);
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
  var todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
  var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title: title,
    activeButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.H)(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
}
// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses) {
  return theClasses.map(function (TheClass) {
    return new TheClass();
  });
}
var Calendar = /*#__PURE__*/function (_CalendarImpl) {
  _inherits(Calendar, _CalendarImpl);
  function Calendar(el) {
    var _this7;
    var optionOverrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Calendar);
    _this7 = _callSuper(this, Calendar);
    _this7.isRendering = false;
    _this7.isRendered = false;
    _this7.currentClassNames = [];
    _this7.customContentRenderId = 0;
    _this7.handleAction = function (action) {
      // actions we know we want to render immediately
      switch (action.type) {
        case 'SET_EVENT_DRAG':
        case 'SET_EVENT_RESIZE':
          _this7.renderRunner.tryDrain();
      }
    };
    _this7.handleData = function (data) {
      _this7.currentData = data;
      _this7.renderRunner.request(data.calendarOptions.rerenderDelay);
    };
    _this7.handleRenderRequest = function () {
      if (_this7.isRendering) {
        _this7.isRendered = true;
        var _assertThisInitialize2 = _assertThisInitialized(_this7),
          currentData = _assertThisInitialize2.currentData;
        (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aa)(function () {
          (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ab, {
            options: currentData.calendarOptions,
            theme: currentData.theme,
            emitter: currentData.emitter
          }, function (classNames, height, isHeightAuto, forPrint) {
            _this7.setClassNames(classNames);
            _this7.setHeight(height);
            return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ac.Provider, {
              value: _this7.customContentRenderId
            }, (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(CalendarContent, Object.assign({
              isHeightAuto: isHeightAuto,
              forPrint: forPrint
            }, currentData)));
          }), _this7.el);
        });
      } else if (_this7.isRendered) {
        _this7.isRendered = false;
        (0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null, _this7.el);
        _this7.setClassNames([]);
        _this7.setHeight('');
      }
    };
    (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ad)(el);
    _this7.el = el;
    _this7.renderRunner = new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.D(_this7.handleRenderRequest);
    new CalendarDataManager({
      optionOverrides: optionOverrides,
      calendarApi: _assertThisInitialized(_this7),
      onAction: _this7.handleAction,
      onData: _this7.handleData
    });
    return _this7;
  }
  _createClass(Calendar, [{
    key: "render",
    value: function render() {
      var wasRendering = this.isRendering;
      if (!wasRendering) {
        this.isRendering = true;
      } else {
        this.customContentRenderId += 1;
      }
      this.renderRunner.request();
      if (wasRendering) {
        this.updateSize();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isRendering) {
        this.isRendering = false;
        this.renderRunner.request();
      }
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var _this8 = this;
      (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.aa)(function () {
        _get(_getPrototypeOf(Calendar.prototype), "updateSize", _this8).call(_this8);
      });
    }
  }, {
    key: "batchRendering",
    value: function batchRendering(func) {
      this.renderRunner.pause('batchRendering');
      func();
      this.renderRunner.resume('batchRendering');
    }
  }, {
    key: "pauseRendering",
    value: function pauseRendering() {
      this.renderRunner.pause('pauseRendering');
    }
  }, {
    key: "resumeRendering",
    value: function resumeRendering() {
      this.renderRunner.resume('pauseRendering', true);
    }
  }, {
    key: "resetOptions",
    value: function resetOptions(optionOverrides, changedOptionNames) {
      this.currentDataManager.resetOptions(optionOverrides, changedOptionNames);
    }
  }, {
    key: "setClassNames",
    value: function setClassNames(classNames) {
      if (!(0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.i)(classNames, this.currentClassNames)) {
        var classList = this.el.classList;
        var _iterator15 = _createForOfIteratorHelper(this.currentClassNames),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var className = _step15.value;
            classList.remove(className);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        var _iterator16 = _createForOfIteratorHelper(classNames),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _className = _step16.value;
            classList.add(_className);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        this.currentClassNames = classNames;
      }
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.ae)(this.el, 'height', height);
    }
  }]);
  return Calendar;
}(_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.a9);
function formatDate(dateInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dateEnv = buildDateEnv(options);
  var formatter = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.x)(options);
  var dateMeta = dateEnv.createMarkerMeta(dateInput);
  if (!dateMeta) {
    // TODO: warning?
    return '';
  }
  return dateEnv.format(dateMeta.marker, formatter, {
    forcedTzo: dateMeta.forcedTzo
  });
}
function formatRange(startInput, endInput, options) {
  var dateEnv = buildDateEnv(_typeof(options) === 'object' && options ? options : {}); // pass in if non-null object
  var formatter = (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.x)(options);
  var startMeta = dateEnv.createMarkerMeta(startInput);
  var endMeta = dateEnv.createMarkerMeta(endInput);
  if (!startMeta || !endMeta) {
    // TODO: warning?
    return '';
  }
  return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
    forcedStartTzo: startMeta.forcedTzo,
    forcedEndTzo: endMeta.forcedTzo,
    isEndExclusive: options.isEndExclusive,
    defaultSeparator: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e.defaultRangeSeparator
  });
}
// TODO: more DRY and optimized
function buildDateEnv(settings) {
  var locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
  return new _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.S(Object.assign(Object.assign({
    timeZone: _internal_common_js__WEBPACK_IMPORTED_MODULE_0__.e.timeZone,
    calendarSystem: 'gregory'
  }, settings), {
    locale: locale
  }));
}

// HELPERS
/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/
function sliceEvents(props, allDay) {
  return (0,_internal_common_js__WEBPACK_IMPORTED_MODULE_0__.af)(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}
var version = '6.1.11';


/***/ }),

/***/ "./node_modules/@fullcalendar/core/internal-common.js":
/*!************************************************************!*\
  !*** ./node_modules/@fullcalendar/core/internal-common.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ elementClosest; },
/* harmony export */   A: function() { return /* binding */ memoizeObjArg; },
/* harmony export */   B: function() { return /* binding */ BaseComponent; },
/* harmony export */   C: function() { return /* binding */ ContentContainer; },
/* harmony export */   D: function() { return /* binding */ DelayedRunner; },
/* harmony export */   E: function() { return /* binding */ isPropsEqual; },
/* harmony export */   F: function() { return /* binding */ Emitter; },
/* harmony export */   G: function() { return /* binding */ getInitialDate; },
/* harmony export */   H: function() { return /* binding */ rangeContainsMarker; },
/* harmony export */   I: function() { return /* binding */ createEmptyEventStore; },
/* harmony export */   J: function() { return /* binding */ reduceCurrentDate; },
/* harmony export */   K: function() { return /* binding */ reduceEventStore; },
/* harmony export */   L: function() { return /* binding */ rezoneEventStoreDates; },
/* harmony export */   M: function() { return /* binding */ mergeRawOptions; },
/* harmony export */   N: function() { return /* binding */ BASE_OPTION_REFINERS; },
/* harmony export */   O: function() { return /* binding */ CALENDAR_LISTENER_REFINERS; },
/* harmony export */   P: function() { return /* binding */ CALENDAR_OPTION_REFINERS; },
/* harmony export */   Q: function() { return /* binding */ COMPLEX_OPTION_COMPARATORS; },
/* harmony export */   R: function() { return /* binding */ VIEW_OPTION_REFINERS; },
/* harmony export */   S: function() { return /* binding */ DateEnv; },
/* harmony export */   T: function() { return /* binding */ Theme; },
/* harmony export */   U: function() { return /* binding */ DateProfileGenerator; },
/* harmony export */   V: function() { return /* binding */ ViewContextType; },
/* harmony export */   W: function() { return /* binding */ createEventUi; },
/* harmony export */   X: function() { return /* binding */ parseBusinessHours; },
/* harmony export */   Y: function() { return /* binding */ setRef; },
/* harmony export */   Z: function() { return /* binding */ Interaction; },
/* harmony export */   _: function() { return /* binding */ getElSeg; },
/* harmony export */   a: function() { return /* binding */ mapHash; },
/* harmony export */   a$: function() { return /* binding */ getSlotClassNames; },
/* harmony export */   a0: function() { return /* binding */ EventImpl; },
/* harmony export */   a1: function() { return /* binding */ listenBySelector; },
/* harmony export */   a2: function() { return /* binding */ listenToHoverBySelector; },
/* harmony export */   a3: function() { return /* binding */ PureComponent; },
/* harmony export */   a4: function() { return /* binding */ buildViewContext; },
/* harmony export */   a5: function() { return /* binding */ getUniqueDomId; },
/* harmony export */   a6: function() { return /* binding */ parseInteractionSettings; },
/* harmony export */   a7: function() { return /* binding */ interactionSettingsStore; },
/* harmony export */   a8: function() { return /* binding */ getNow; },
/* harmony export */   a9: function() { return /* binding */ CalendarImpl; },
/* harmony export */   aA: function() { return /* binding */ diffDates; },
/* harmony export */   aB: function() { return /* binding */ removeExact; },
/* harmony export */   aC: function() { return /* binding */ memoizeArraylike; },
/* harmony export */   aD: function() { return /* binding */ memoizeHashlike; },
/* harmony export */   aE: function() { return /* binding */ intersectRects; },
/* harmony export */   aF: function() { return /* binding */ pointInsideRect; },
/* harmony export */   aG: function() { return /* binding */ constrainPoint; },
/* harmony export */   aH: function() { return /* binding */ getRectCenter; },
/* harmony export */   aI: function() { return /* binding */ diffPoints; },
/* harmony export */   aJ: function() { return /* binding */ translateRect; },
/* harmony export */   aK: function() { return /* binding */ compareObjs; },
/* harmony export */   aL: function() { return /* binding */ collectFromHash; },
/* harmony export */   aM: function() { return /* binding */ findElements; },
/* harmony export */   aN: function() { return /* binding */ findDirectChildren; },
/* harmony export */   aO: function() { return /* binding */ removeElement; },
/* harmony export */   aP: function() { return /* binding */ applyStyle; },
/* harmony export */   aQ: function() { return /* binding */ elementMatches; },
/* harmony export */   aR: function() { return /* binding */ getEventTargetViaRoot; },
/* harmony export */   aS: function() { return /* binding */ parseClassNames; },
/* harmony export */   aT: function() { return /* binding */ getCanVGrowWithinCell; },
/* harmony export */   aU: function() { return /* binding */ mergeEventStores; },
/* harmony export */   aV: function() { return /* binding */ getRelevantEvents; },
/* harmony export */   aW: function() { return /* binding */ eventTupleToStore; },
/* harmony export */   aX: function() { return /* binding */ combineEventUis; },
/* harmony export */   aY: function() { return /* binding */ Splitter; },
/* harmony export */   aZ: function() { return /* binding */ getDayClassNames; },
/* harmony export */   a_: function() { return /* binding */ getDateMeta; },
/* harmony export */   aa: function() { return /* binding */ flushSync; },
/* harmony export */   ab: function() { return /* binding */ CalendarRoot; },
/* harmony export */   ac: function() { return /* binding */ RenderId; },
/* harmony export */   ad: function() { return /* binding */ ensureElHasStyles; },
/* harmony export */   ae: function() { return /* binding */ applyStyleProp; },
/* harmony export */   af: function() { return /* binding */ sliceEventStore; },
/* harmony export */   ag: function() { return /* binding */ JsonRequestError; },
/* harmony export */   ah: function() { return /* binding */ createContext; },
/* harmony export */   ai: function() { return /* binding */ refineProps; },
/* harmony export */   aj: function() { return /* binding */ createEventInstance; },
/* harmony export */   ak: function() { return /* binding */ parseEventDef; },
/* harmony export */   al: function() { return /* binding */ refineEventDef; },
/* harmony export */   am: function() { return /* binding */ padStart; },
/* harmony export */   an: function() { return /* binding */ isInt; },
/* harmony export */   ao: function() { return /* binding */ parseFieldSpecs; },
/* harmony export */   ap: function() { return /* binding */ compareByFieldSpecs; },
/* harmony export */   aq: function() { return /* binding */ flexibleCompare; },
/* harmony export */   ar: function() { return /* binding */ preventSelection; },
/* harmony export */   as: function() { return /* binding */ allowSelection; },
/* harmony export */   at: function() { return /* binding */ preventContextMenu; },
/* harmony export */   au: function() { return /* binding */ allowContextMenu; },
/* harmony export */   av: function() { return /* binding */ compareNumbers; },
/* harmony export */   aw: function() { return /* binding */ enableCursor; },
/* harmony export */   ax: function() { return /* binding */ disableCursor; },
/* harmony export */   ay: function() { return /* binding */ computeVisibleDayRange; },
/* harmony export */   az: function() { return /* binding */ isMultiDayRange; },
/* harmony export */   b: function() { return /* binding */ buildViewClassNames; },
/* harmony export */   b$: function() { return /* binding */ SimpleScrollGrid; },
/* harmony export */   b0: function() { return /* binding */ buildNavLinkAttrs; },
/* harmony export */   b1: function() { return /* binding */ preventDefault; },
/* harmony export */   b2: function() { return /* binding */ whenTransitionDone; },
/* harmony export */   b3: function() { return /* binding */ computeInnerRect; },
/* harmony export */   b4: function() { return /* binding */ computeEdges; },
/* harmony export */   b5: function() { return /* binding */ getClippingParents; },
/* harmony export */   b6: function() { return /* binding */ computeRect; },
/* harmony export */   b7: function() { return /* binding */ rangesEqual; },
/* harmony export */   b8: function() { return /* binding */ rangesIntersect; },
/* harmony export */   b9: function() { return /* binding */ rangeContainsRange; },
/* harmony export */   bA: function() { return /* binding */ SegHierarchy; },
/* harmony export */   bB: function() { return /* binding */ buildEntryKey; },
/* harmony export */   bC: function() { return /* binding */ getEntrySpanEnd; },
/* harmony export */   bD: function() { return /* binding */ binarySearch; },
/* harmony export */   bE: function() { return /* binding */ groupIntersectingEntries; },
/* harmony export */   bF: function() { return /* binding */ intersectSpans; },
/* harmony export */   bG: function() { return /* binding */ interactionSettingsToStore; },
/* harmony export */   bH: function() { return /* binding */ ElementDragging; },
/* harmony export */   bI: function() { return /* binding */ config; },
/* harmony export */   bJ: function() { return /* binding */ parseDragMeta; },
/* harmony export */   bK: function() { return /* binding */ DayHeader; },
/* harmony export */   bL: function() { return /* binding */ computeFallbackHeaderFormat; },
/* harmony export */   bM: function() { return /* binding */ TableDateCell; },
/* harmony export */   bN: function() { return /* binding */ TableDowCell; },
/* harmony export */   bO: function() { return /* binding */ DaySeriesModel; },
/* harmony export */   bP: function() { return /* binding */ hasBgRendering; },
/* harmony export */   bQ: function() { return /* binding */ buildSegTimeText; },
/* harmony export */   bR: function() { return /* binding */ sortEventSegs; },
/* harmony export */   bS: function() { return /* binding */ getSegMeta; },
/* harmony export */   bT: function() { return /* binding */ buildEventRangeKey; },
/* harmony export */   bU: function() { return /* binding */ getSegAnchorAttrs; },
/* harmony export */   bV: function() { return /* binding */ DayTableModel; },
/* harmony export */   bW: function() { return /* binding */ Slicer; },
/* harmony export */   bX: function() { return /* binding */ applyMutationToEventStore; },
/* harmony export */   bY: function() { return /* binding */ isPropsValid; },
/* harmony export */   bZ: function() { return /* binding */ isInteractionValid; },
/* harmony export */   b_: function() { return /* binding */ isDateSelectionValid; },
/* harmony export */   ba: function() { return /* binding */ PositionCache; },
/* harmony export */   bb: function() { return /* binding */ ScrollController; },
/* harmony export */   bc: function() { return /* binding */ ElementScrollController; },
/* harmony export */   bd: function() { return /* binding */ WindowScrollController; },
/* harmony export */   be: function() { return /* binding */ DateComponent; },
/* harmony export */   bf: function() { return /* binding */ isDateSpansEqual; },
/* harmony export */   bg: function() { return /* binding */ addMs; },
/* harmony export */   bh: function() { return /* binding */ addWeeks; },
/* harmony export */   bi: function() { return /* binding */ diffWeeks; },
/* harmony export */   bj: function() { return /* binding */ diffWholeWeeks; },
/* harmony export */   bk: function() { return /* binding */ diffDayAndTime; },
/* harmony export */   bl: function() { return /* binding */ diffDays; },
/* harmony export */   bm: function() { return /* binding */ isValidDate; },
/* harmony export */   bn: function() { return /* binding */ asCleanDays; },
/* harmony export */   bo: function() { return /* binding */ multiplyDuration; },
/* harmony export */   bp: function() { return /* binding */ addDurations; },
/* harmony export */   bq: function() { return /* binding */ asRoughMinutes; },
/* harmony export */   br: function() { return /* binding */ asRoughSeconds; },
/* harmony export */   bs: function() { return /* binding */ asRoughMs; },
/* harmony export */   bt: function() { return /* binding */ wholeDivideDurations; },
/* harmony export */   bu: function() { return /* binding */ formatIsoTimeString; },
/* harmony export */   bv: function() { return /* binding */ formatDayString; },
/* harmony export */   bw: function() { return /* binding */ buildIsoString; },
/* harmony export */   bx: function() { return /* binding */ formatIsoMonthStr; },
/* harmony export */   by: function() { return /* binding */ NamedTimeZoneImpl; },
/* harmony export */   bz: function() { return /* binding */ _parse; },
/* harmony export */   c: function() { return /* binding */ greatestDurationDenominator; },
/* harmony export */   c0: function() { return /* binding */ hasShrinkWidth; },
/* harmony export */   c1: function() { return /* binding */ renderMicroColGroup; },
/* harmony export */   c2: function() { return /* binding */ getScrollGridClassNames; },
/* harmony export */   c3: function() { return /* binding */ getSectionClassNames; },
/* harmony export */   c4: function() { return /* binding */ getSectionHasLiquidHeight; },
/* harmony export */   c5: function() { return /* binding */ getAllowYScrolling; },
/* harmony export */   c6: function() { return /* binding */ renderChunkContent; },
/* harmony export */   c7: function() { return /* binding */ _computeShrinkWidth; },
/* harmony export */   c8: function() { return /* binding */ sanitizeShrinkWidth; },
/* harmony export */   c9: function() { return /* binding */ isColPropsEqual; },
/* harmony export */   ca: function() { return /* binding */ renderScrollShim; },
/* harmony export */   cb: function() { return /* binding */ getStickyFooterScrollbar; },
/* harmony export */   cc: function() { return /* binding */ getStickyHeaderDates; },
/* harmony export */   cd: function() { return /* binding */ Scroller; },
/* harmony export */   ce: function() { return /* binding */ getScrollbarWidths; },
/* harmony export */   cf: function() { return /* binding */ RefMap; },
/* harmony export */   cg: function() { return /* binding */ getIsRtlScrollbarOnLeft; },
/* harmony export */   ch: function() { return /* binding */ NowTimer; },
/* harmony export */   ci: function() { return /* binding */ ScrollResponder; },
/* harmony export */   cj: function() { return /* binding */ StandardEvent; },
/* harmony export */   ck: function() { return /* binding */ NowIndicatorContainer; },
/* harmony export */   cl: function() { return /* binding */ DayCellContainer; },
/* harmony export */   cm: function() { return /* binding */ hasCustomDayCellContent; },
/* harmony export */   cn: function() { return /* binding */ EventContainer; },
/* harmony export */   co: function() { return /* binding */ renderFill; },
/* harmony export */   cp: function() { return /* binding */ BgEvent; },
/* harmony export */   cq: function() { return /* binding */ WeekNumberContainer; },
/* harmony export */   cr: function() { return /* binding */ MoreLinkContainer; },
/* harmony export */   cs: function() { return /* binding */ computeEarliestSegStart; },
/* harmony export */   ct: function() { return /* binding */ ViewContainer; },
/* harmony export */   cu: function() { return /* binding */ triggerDateSelect; },
/* harmony export */   cv: function() { return /* binding */ getDefaultEventEnd; },
/* harmony export */   cw: function() { return /* binding */ injectStyles; },
/* harmony export */   cx: function() { return /* binding */ buildElAttrs; },
/* harmony export */   cy: function() { return /* binding */ CustomRenderingStore; },
/* harmony export */   d: function() { return /* binding */ createDuration; },
/* harmony export */   e: function() { return /* binding */ BASE_OPTION_DEFAULTS; },
/* harmony export */   f: function() { return /* binding */ arrayToHash; },
/* harmony export */   g: function() { return /* binding */ guid; },
/* harmony export */   h: function() { return /* binding */ filterHash; },
/* harmony export */   i: function() { return /* binding */ isArraysEqual; },
/* harmony export */   j: function() { return /* binding */ buildEventSourceRefiners; },
/* harmony export */   k: function() { return /* binding */ formatWithOrdinals; },
/* harmony export */   l: function() { return /* binding */ buildRangeApiWithTimeZone; },
/* harmony export */   m: function() { return /* binding */ mergeProps; },
/* harmony export */   n: function() { return /* binding */ identity; },
/* harmony export */   o: function() { return /* binding */ intersectRanges; },
/* harmony export */   p: function() { return /* binding */ parseEventSource; },
/* harmony export */   q: function() { return /* binding */ startOfDay; },
/* harmony export */   r: function() { return /* binding */ requestJson; },
/* harmony export */   s: function() { return /* binding */ subtractDurations; },
/* harmony export */   t: function() { return /* binding */ addDays; },
/* harmony export */   u: function() { return /* binding */ unpromisify; },
/* harmony export */   v: function() { return /* binding */ hashValuesToArray; },
/* harmony export */   w: function() { return /* binding */ buildEventApis; },
/* harmony export */   x: function() { return /* binding */ createFormatter; },
/* harmony export */   y: function() { return /* binding */ diffWholeDays; },
/* harmony export */   z: function() { return /* binding */ memoize; }
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var styleTexts = [];
var styleEls = new Map();
function injectStyles(styleText) {
  styleTexts.push(styleText);
  styleEls.forEach(function (styleEl) {
    appendStylesTo(styleEl, styleText);
  });
}
function ensureElHasStyles(el) {
  if (el.isConnected &&
  // sometimes true if SSR system simulates DOM
  el.getRootNode // sometimes undefined if SSR system simulates DOM
  ) {
    registerStylesRoot(el.getRootNode());
  }
}
function registerStylesRoot(rootNode) {
  var styleEl = styleEls.get(rootNode);
  if (!styleEl || !styleEl.isConnected) {
    styleEl = rootNode.querySelector('style[data-fullcalendar]');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.setAttribute('data-fullcalendar', '');
      var nonce = getNonceValue();
      if (nonce) {
        styleEl.nonce = nonce;
      }
      var parentEl = rootNode === document ? document.head : rootNode;
      var insertBefore = rootNode === document ? parentEl.querySelector('script,link[rel=stylesheet],link[as=style],style') : parentEl.firstChild;
      parentEl.insertBefore(styleEl, insertBefore);
    }
    styleEls.set(rootNode, styleEl);
    hydrateStylesRoot(styleEl);
  }
}
function hydrateStylesRoot(styleEl) {
  var _iterator = _createForOfIteratorHelper(styleTexts),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var styleText = _step.value;
      appendStylesTo(styleEl, styleText);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function appendStylesTo(styleEl, styleText) {
  var sheet = styleEl.sheet;
  var ruleCnt = sheet.cssRules.length;
  styleText.split('}').forEach(function (styleStr, i) {
    styleStr = styleStr.trim();
    if (styleStr) {
      sheet.insertRule(styleStr + '}', ruleCnt + i);
    }
  });
}
// nonce
// -------------------------------------------------------------------------------------------------
var queriedNonceValue;
function getNonceValue() {
  if (queriedNonceValue === undefined) {
    queriedNonceValue = queryNonceValue();
  }
  return queriedNonceValue;
}
/*
TODO: discourage meta tag and instead put nonce attribute on placeholder <style> tag
*/
function queryNonceValue() {
  var metaWithNonce = document.querySelector('meta[name="csp-nonce"]');
  if (metaWithNonce && metaWithNonce.hasAttribute('content')) {
    return metaWithNonce.getAttribute('content');
  }
  var elWithNonce = document.querySelector('script[nonce]');
  if (elWithNonce) {
    return elWithNonce.nonce || '';
  }
  return '';
}
// main
// -------------------------------------------------------------------------------------------------
if (typeof document !== 'undefined') {
  registerStylesRoot(document);
}
var css_248z = ":root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:\"\\e900\"}.fc-icon-chevron-right:before{content:\"\\e901\"}.fc-icon-chevrons-left:before{content:\"\\e902\"}.fc-icon-chevrons-right:before{content:\"\\e903\"}.fc-icon-minus-square:before{content:\"\\e904\"}.fc-icon-plus-square:before{content:\"\\e905\"}.fc-icon-x:before{content:\"\\e906\"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:\"\";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:\"\";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}";
injectStyles(css_248z);
var DelayedRunner = /*#__PURE__*/function () {
  function DelayedRunner(drainedOption) {
    _classCallCheck(this, DelayedRunner);
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }
  _createClass(DelayedRunner, [{
    key: "request",
    value: function request(delay) {
      this.isDirty = true;
      if (!this.isPaused()) {
        this.clearTimeout();
        if (delay == null) {
          this.tryDrain();
        } else {
          this.timeoutId = setTimeout(
          // NOT OPTIMAL! TODO: look at debounce
          this.tryDrain.bind(this), delay);
        }
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var pauseDepths = this.pauseDepths;
      pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
      this.clearTimeout();
    }
  }, {
    key: "resume",
    value: function resume() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var force = arguments.length > 1 ? arguments[1] : undefined;
      var pauseDepths = this.pauseDepths;
      if (scope in pauseDepths) {
        if (force) {
          delete pauseDepths[scope];
        } else {
          pauseDepths[scope] -= 1;
          var depth = pauseDepths[scope];
          if (depth <= 0) {
            delete pauseDepths[scope];
          }
        }
        this.tryDrain();
      }
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return Object.keys(this.pauseDepths).length;
    }
  }, {
    key: "tryDrain",
    value: function tryDrain() {
      if (!this.isRunning && !this.isPaused()) {
        this.isRunning = true;
        while (this.isDirty) {
          this.isDirty = false;
          this.drained(); // might set isDirty to true again
        }
        this.isRunning = false;
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.clearTimeout();
      this.isDirty = false;
      this.pauseDepths = {};
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }
      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };
      return clearTimeout;
    }(function () {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = 0;
      }
    })
  }, {
    key: "drained",
    value: function drained() {
      if (this.drainedOption) {
        this.drainedOption();
      }
    }
  }]);
  return DelayedRunner;
}();
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
// Querying
// ----------------------------------------------------------------------------------------------------------------
function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
    // really bad fallback for IE
    // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  }
  if (!document.documentElement.contains(el)) {
    return null;
  }
  do {
    if (elementMatches(el, selector)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}
function elementMatches(el, selector) {
  var method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
}
// accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document
function findElements(container, selector) {
  var containers = container instanceof HTMLElement ? [container] : container;
  var allMatches = [];
  for (var i = 0; i < containers.length; i += 1) {
    var matches = containers[i].querySelectorAll(selector);
    for (var j = 0; j < matches.length; j += 1) {
      allMatches.push(matches[j]);
    }
  }
  return allMatches;
}
// accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!
function findDirectChildren(parent, selector) {
  var parents = parent instanceof HTMLElement ? [parent] : parent;
  var allMatches = [];
  for (var i = 0; i < parents.length; i += 1) {
    var childNodes = parents[i].children; // only ever elements
    for (var j = 0; j < childNodes.length; j += 1) {
      var childNode = childNodes[j];
      if (!selector || elementMatches(childNode, selector)) {
        allMatches.push(childNode);
      }
    }
  }
  return allMatches;
}
// Style
// ----------------------------------------------------------------------------------------------------------------
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
  for (var propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}
function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = '';
  } else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
    el.style[name] = "".concat(val, "px");
  } else {
    el.style[name] = val;
  }
}
// Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.
function getEventTargetViaRoot(ev) {
  var _a, _b;
  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}
// Unique ID for DOM attribute
var guid$1 = 0;
function getUniqueDomId() {
  guid$1 += 1;
  return 'fc-dom-' + guid$1;
}

// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
  ev.preventDefault();
}
// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function buildDelegationHandler(selector, handler) {
  return function (ev) {
    var matchedChild = elementClosest(ev.target, selector);
    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}
function listenBySelector(container, eventType, selector, handler) {
  var attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return function () {
    container.removeEventListener(eventType, attachedHandler);
  };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  var currentMatchedChild;
  return listenBySelector(container, 'mouseover', selector, function (mouseOverEv, matchedChild) {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);
      var realOnMouseLeave = function realOnMouseLeave(mouseLeaveEv) {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener('mouseleave', realOnMouseLeave);
      };
      // listen to the next mouseleave, and then unattach
      matchedChild.addEventListener('mouseleave', realOnMouseLeave);
    }
  });
}
// Animation
// ----------------------------------------------------------------------------------------------------------------
var transitionEventNames = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend'];
// triggered only when the next single subsequent transition finishes
function whenTransitionDone(el, callback) {
  var realCallback = function realCallback(ev) {
    callback(ev);
    transitionEventNames.forEach(function (eventName) {
      el.removeEventListener(eventName, realCallback);
    });
  };
  transitionEventNames.forEach(function (eventName) {
    el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
  });
}
// ARIA workarounds
// ----------------------------------------------------------------------------------------------------------------
function createAriaClickAttrs(handler) {
  return Object.assign({
    onClick: handler
  }, createAriaKeyboardAttrs(handler));
}
function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,
    onKeyDown: function onKeyDown(ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        handler(ev);
        ev.preventDefault(); // if space, don't scroll down page
      }
    }
  };
}
var guidNumber = 0;
function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
  document.body.classList.add('fc-not-allowed');
}
// Returns the mouse cursor to its original look
function enableCursor() {
  document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/
function preventSelection(el) {
  el.style.userSelect = 'none';
  el.style.webkitUserSelect = 'none';
  el.addEventListener('selectstart', preventDefault);
}
function allowSelection(el) {
  el.style.userSelect = '';
  el.style.webkitUserSelect = '';
  el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/
function preventContextMenu(el) {
  el.addEventListener('contextmenu', preventDefault);
}
function allowContextMenu(el) {
  el.removeEventListener('contextmenu', preventDefault);
}
function parseFieldSpecs(input) {
  var specs = [];
  var tokens = [];
  var i;
  var token;
  if (typeof input === 'string') {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === 'function') {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }
  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];
    if (typeof token === 'string') {
      specs.push(token.charAt(0) === '-' ? {
        field: token.substring(1),
        order: -1
      } : {
        field: token,
        order: 1
      });
    } else if (typeof token === 'function') {
      specs.push({
        func: token
      });
    }
  }
  return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  var i;
  var cmp;
  for (i = 0; i < fieldSpecs.length; i += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
    if (cmp) {
      return cmp;
    }
  }
  return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }
  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
  if (!a && !b) {
    return 0;
  }
  if (b == null) {
    return -1;
  }
  if (a == null) {
    return 1;
  }
  if (typeof a === 'string' || typeof b === 'string') {
    return String(a).localeCompare(String(b));
  }
  return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/
function padStart(val, len) {
  var s = String(val);
  return '000'.substr(0, len - s.length) + s;
}
function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === 'function') {
    return formatter.apply(void 0, _toConsumableArray(args));
  }
  if (typeof formatter === 'string') {
    // non-blank string
    return args.reduce(function (str, arg, index) {
      return str.replace('$' + index, arg || '');
    }, formatter);
  }
  return fallbackText;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/
function compareNumbers(a, b) {
  return a - b;
}
function isInt(n) {
  return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/
function computeSmallestCellWidth(cellEl) {
  var allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
  var contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');
  if (!allWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
  }
  if (!contentWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-cushion className');
  }
  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width +
  // the cell padding+border
  contentWidthEl.getBoundingClientRect().width;
}
var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
// Parsing and Creation
function createDuration(input, unit) {
  if (typeof input === 'string') {
    return parseString(input);
  }
  if (_typeof(input) === 'object' && input) {
    // non-null object
    return parseObject(input);
  }
  if (typeof input === 'number') {
    return parseObject(_defineProperty({}, unit || 'milliseconds', input));
  }
  return null;
}
function parseString(s) {
  var m = PARSE_RE.exec(s);
  if (m) {
    var sign = m[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m[2] ? parseInt(m[2], 10) : 0),
      milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 +
      // hours
      (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 +
      // minutes
      (m[5] ? parseInt(m[5], 10) : 0) * 1000 + (
      // seconds
      m[6] ? parseInt(m[6], 10) : 0) // ms
      )
    };
  }
  return null;
}
function parseObject(obj) {
  var duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 +
    // hours
    (obj.minutes || obj.minute || 0) * 60 * 1000 +
    // minutes
    (obj.seconds || obj.second || 0) * 1000 + (
    // seconds
    obj.milliseconds || obj.millisecond || obj.ms || 0) // ms
  };
  var weeks = obj.weeks || obj.week;
  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }
  return duration;
}
// Equality
function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}
function asCleanDays(dur) {
  if (!dur.years && !dur.months && !dur.milliseconds) {
    return dur.days;
  }
  return 0;
}
// Simple Math
function addDurations(d0, d1) {
  return {
    years: d0.years + d1.years,
    months: d0.months + d1.months,
    days: d0.days + d1.days,
    milliseconds: d0.milliseconds + d1.milliseconds
  };
}
function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}
function multiplyDuration(d, n) {
  return {
    years: d.years * n,
    months: d.months * n,
    days: d.days * n,
    milliseconds: d.milliseconds * n
  };
}
// Conversions
// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}
function asRoughMinutes(dur) {
  return asRoughMs(dur) / (1000 * 60);
}
function asRoughSeconds(dur) {
  return asRoughMs(dur) / 1000;
}
function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
}
// Advanced Math
function wholeDivideDurations(numerator, denominator) {
  var res = null;
  for (var i = 0; i < INTERNAL_UNITS.length; i += 1) {
    var unit = INTERNAL_UNITS[i];
    if (denominator[unit]) {
      var localRes = numerator[unit] / denominator[unit];
      if (!isInt(localRes) || res !== null && res !== localRes) {
        return null;
      }
      res = localRes;
    } else if (numerator[unit]) {
      // needs to divide by something but can't!
      return null;
    }
  }
  return res;
}
function greatestDurationDenominator(dur) {
  var ms = dur.milliseconds;
  if (ms) {
    if (ms % 1000 !== 0) {
      return {
        unit: 'millisecond',
        value: ms
      };
    }
    if (ms % (1000 * 60) !== 0) {
      return {
        unit: 'second',
        value: ms / 1000
      };
    }
    if (ms % (1000 * 60 * 60) !== 0) {
      return {
        unit: 'minute',
        value: ms / (1000 * 60)
      };
    }
    if (ms) {
      return {
        unit: 'hour',
        value: ms / (1000 * 60 * 60)
      };
    }
  }
  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return {
        unit: 'week',
        value: dur.days / 7
      };
    }
    return {
      unit: 'day',
      value: dur.days
    };
  }
  if (dur.months) {
    return {
      unit: 'month',
      value: dur.months
    };
  }
  if (dur.years) {
    return {
      unit: 'year',
      value: dur.years
    };
  }
  return {
    unit: 'millisecond',
    value: 0
  };
}

// TODO: new util arrayify?
function removeExact(array, exactVal) {
  var removeCnt = 0;
  var i = 0;
  while (i < array.length) {
    if (array[i] === exactVal) {
      array.splice(i, 1);
      removeCnt += 1;
    } else {
      i += 1;
    }
  }
  return removeCnt;
}
function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }
  var len = a0.length;
  var i;
  if (len !== a1.length) {
    // not array? or not same length?
    return false;
  }
  for (i = 0; i < len; i += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
      return false;
    }
  }
  return true;
}
var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Adding
function addWeeks(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n * 7;
  return arrayToUtcDate(a);
}
function addDays(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n;
  return arrayToUtcDate(a);
}
function addMs(m, n) {
  var a = dateToUtcArray(m);
  a[6] += n;
  return arrayToUtcDate(a);
}
// Diffing (all return floats)
// TODO: why not use ranges?
function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}
function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}
function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1000;
}
function diffDayAndTime(m0, m1) {
  var m0day = startOfDay(m0);
  var m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
}
// Diffing Whole Units
function diffWholeWeeks(m0, m1) {
  var d = diffWholeDays(m0, m1);
  if (d !== null && d % 7 === 0) {
    return d / 7;
  }
  return null;
}
function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }
  return null;
}
// Start-Of
function startOfDay(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()]);
}
function startOfHour(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours()]);
}
function startOfMinute(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes()]);
}
function startOfSecond(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds()]);
}
// Week Computation
function weekOfYear(marker, dow, doy) {
  var y = marker.getUTCFullYear();
  var w = weekOfGivenYear(marker, y, dow, doy);
  if (w < 1) {
    return weekOfGivenYear(marker, y - 1, dow, doy);
  }
  var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
  if (nextW >= 1) {
    return Math.min(w, nextW);
  }
  return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
  var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  var dayStart = startOfDay(marker);
  var days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1; // zero-indexed
}
// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
  // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  var fwd = 7 + dow - doy;
  // first-week day local weekday -- which local weekday is fwd
  var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
// Array Conversion
function dateToLocalArray(date) {
  return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
}
function arrayToLocalDate(a) {
  return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2],
  // day of month
  a[3] || 0, a[4] || 0, a[5] || 0);
}
function dateToUtcArray(date) {
  return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
}
function arrayToUtcDate(a) {
  // according to web standards (and Safari), a month index is required.
  // massage if only given a year.
  if (a.length === 1) {
    a = a.concat([0]);
  }
  return new Date(Date.UTC.apply(Date, _toConsumableArray(a)));
}
// Other Utils
function isValidDate(m) {
  return !isNaN(m.valueOf());
}
function timeAsMs(m) {
  return m.getUTCHours() * 1000 * 60 * 60 + m.getUTCMinutes() * 1000 * 60 + m.getUTCSeconds() * 1000 + m.getUTCMilliseconds();
}

// timeZoneOffset is in minutes
function buildIsoString(marker, timeZoneOffset) {
  var stripZeroTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var s = marker.toISOString();
  s = s.replace('.000', '');
  if (stripZeroTime) {
    s = s.replace('T00:00:00Z', '');
  }
  if (s.length > 10) {
    // time part wasn't stripped, can add timezone info
    if (timeZoneOffset == null) {
      s = s.replace('Z', '');
    } else if (timeZoneOffset !== 0) {
      s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
    }
    // otherwise, its UTC-0 and we want to keep the Z
  }
  return s;
}
// formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"
function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, '');
}
function formatIsoMonthStr(marker) {
  return marker.toISOString().match(/^\d{4}-\d{2}/)[0];
}
// TODO: use Date::toISOString and use everything after the T?
function formatIsoTimeString(marker) {
  return padStart(marker.getUTCHours(), 2) + ':' + padStart(marker.getUTCMinutes(), 2) + ':' + padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes) {
  var doIso = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var sign = minutes < 0 ? '-' : '+';
  var abs = Math.abs(minutes);
  var hours = Math.floor(abs / 60);
  var mins = Math.round(abs % 60);
  if (doIso) {
    return "".concat(sign + padStart(hours, 2), ":").concat(padStart(mins, 2));
  }
  return "GMT".concat(sign).concat(hours).concat(mins ? ":".concat(padStart(mins, 2)) : '');
}
function memoize(workerFunc, resEquality, teardownFunc) {
  var currentArgs;
  var currentRes;
  return function () {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }
    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      var res = workerFunc.apply(this, newArgs);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArgs = newArgs;
    return currentRes;
  };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  var _this = this;
  var currentArg;
  var currentRes;
  return function (newArg) {
    if (!currentArg) {
      currentRes = workerFunc.call(_this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }
      var res = workerFunc.call(_this, newArg);
      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }
    currentArg = newArg;
    return currentRes;
  };
}
function memoizeArraylike(
// used at all?
workerFunc, resEquality, teardownFunc) {
  var _this2 = this;
  var currentArgSets = [];
  var currentResults = [];
  return function (newArgSets) {
    var currentLen = currentArgSets.length;
    var newLen = newArgSets.length;
    var i = 0;
    for (; i < currentLen; i += 1) {
      if (!newArgSets[i]) {
        // one of the old sets no longer exists
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
      } else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
        var res = workerFunc.apply(_this2, newArgSets[i]);
        if (!resEquality || !resEquality(res, currentResults[i])) {
          currentResults[i] = res;
        }
      }
    }
    for (; i < newLen; i += 1) {
      currentResults[i] = workerFunc.apply(_this2, newArgSets[i]);
    }
    currentArgSets = newArgSets;
    currentResults.splice(newLen); // remove excess
    return currentResults;
  };
}
function memoizeHashlike(workerFunc, resEquality, teardownFunc) {
  var _this3 = this;
  var currentArgHash = {};
  var currentResHash = {};
  return function (newArgHash) {
    var newResHash = {};
    for (var key in newArgHash) {
      if (!currentResHash[key]) {
        newResHash[key] = workerFunc.apply(_this3, newArgHash[key]);
      } else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
        if (teardownFunc) {
          teardownFunc(currentResHash[key]);
        }
        var res = workerFunc.apply(_this3, newArgHash[key]);
        newResHash[key] = resEquality && resEquality(res, currentResHash[key]) ? currentResHash[key] : res;
      } else {
        newResHash[key] = currentResHash[key];
      }
    }
    currentArgHash = newArgHash;
    currentResHash = newResHash;
    return newResHash;
  };
}
var EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
var COMMA_RE = /,/g; // we need re for globalness
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character
var UTC_RE = /UTC|GMT/;
var NativeFormatter = /*#__PURE__*/function () {
  function NativeFormatter(formatSettings) {
    _classCallCheck(this, NativeFormatter);
    var standardDateProps = {};
    var extendedSettings = {};
    var severity = 0;
    for (var name in formatSettings) {
      if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name] = formatSettings[name];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name], severity);
      } else {
        standardDateProps[name] = formatSettings[name];
        if (name in STANDARD_DATE_PROP_SEVERITIES) {
          // TODO: what about hour12? no severity
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name], severity);
        }
      }
    }
    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }
  _createClass(NativeFormatter, [{
    key: "format",
    value: function format(date, context) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
    }
  }, {
    key: "formatRange",
    value: function formatRange(start, end, context, betterDefaultSeparator) {
      var standardDateProps = this.standardDateProps,
        extendedSettings = this.extendedSettings;
      var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
      if (!diffSeverity) {
        return this.format(start, context);
      }
      var biggestUnitForPartial = diffSeverity;
      if (biggestUnitForPartial > 1 && (
      // the two dates are different in a way that's larger scale than time
      standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') && (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') && (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
        biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
      }
      var full0 = this.format(start, context);
      var full1 = this.format(end, context);
      if (full0 === full1) {
        return full0;
      }
      var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
      var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
      var partial0 = partialFormattingFunc(start);
      var partial1 = partialFormattingFunc(end);
      var insertion = findCommonInsertion(full0, partial0, full1, partial1);
      var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
      if (insertion) {
        return insertion.before + partial0 + separator + partial1 + insertion.after;
      }
      return full0 + separator + full1;
    }
  }, {
    key: "getLargestUnit",
    value: function getLargestUnit() {
      switch (this.severity) {
        case 7:
        case 6:
        case 5:
          return 'year';
        case 4:
          return 'month';
        case 3:
          return 'week';
        case 2:
          return 'day';
        default:
          return 'time';
        // really?
      }
    }
  }]);
  return NativeFormatter;
}();
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  var standardDatePropCnt = Object.keys(standardDateProps).length;
  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
    return function (date) {
      return formatTimeZoneOffset(date.timeZoneOffset);
    };
  }
  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return function (date) {
      return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
    };
  }
  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = Object.assign({}, standardDateProps); // copy
  extendedSettings = Object.assign({}, extendedSettings); // copy
  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
  var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  var zeroFormat; // needed?
  if (extendedSettings.omitZeroMinute) {
    var zeroProps = Object.assign({}, standardDateProps);
    delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }
  return function (date) {
    var marker = date.marker;
    var format;
    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }
    var s = format.format(marker);
    return postProcess(s, date, standardDateProps, extendedSettings, context);
  };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
  // deal with a browser inconsistency where formatting the timezone
  // requires that the hour/minute be present.
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = '2-digit';
    }
    if (!standardDateProps.minute) {
      standardDateProps.minute = '2-digit';
    }
  }
  // only support short timezone names
  if (standardDateProps.timeZoneName === 'long') {
    standardDateProps.timeZoneName = 'short';
  }
  // if requesting to display seconds, MUST display minutes
  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
  s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
  if (standardDateProps.timeZoneName === 'short') {
    s = injectTzoStr(s, context.timeZone === 'UTC' || date.timeZoneOffset == null ? 'UTC' :
    // important to normalize for IE, which does "GMT"
    formatTimeZoneOffset(date.timeZoneOffset));
  }
  if (extendedSettings.omitCommas) {
    s = s.replace(COMMA_RE, '').trim();
  }
  if (extendedSettings.omitZeroMinute) {
    s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
  }
  // ^ do anything that might create adjacent spaces before this point,
  // because MERIDIEM_RE likes to eat up loading spaces
  if (extendedSettings.meridiem === false) {
    s = s.replace(MERIDIEM_RE, '').trim();
  } else if (extendedSettings.meridiem === 'narrow') {
    // a/p
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return m1.toLocaleLowerCase();
    });
  } else if (extendedSettings.meridiem === 'short') {
    // am/pm
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return "".concat(m1.toLocaleLowerCase(), "m");
    });
  } else if (extendedSettings.meridiem === 'lowercase') {
    // other meridiem transformers already converted to lowercase
    s = s.replace(MERIDIEM_RE, function (m0) {
      return m0.toLocaleLowerCase();
    });
  }
  s = s.replace(MULTI_SPACE_RE, ' ');
  s = s.trim();
  return s;
}
function injectTzoStr(s, tzoStr) {
  var replaced = false;
  s = s.replace(UTC_RE, function () {
    replaced = true;
    return tzoStr;
  });
  // IE11 doesn't include UTC/GMT in the original string, so append to end
  if (!replaced) {
    s += " ".concat(tzoStr);
  }
  return s;
}
function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
  var parts = [];
  if (display === 'long') {
    parts.push(weekTextLong);
  } else if (display === 'short' || display === 'narrow') {
    parts.push(weekText);
  }
  if (display === 'long' || display === 'short') {
    parts.push(' ');
  }
  parts.push(locale.simpleNumberFormat.format(num));
  if (locale.options.direction === 'rtl') {
    // TODO: use control characters instead?
    parts.reverse();
  }
  return parts.join('');
}
// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }
  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }
  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }
  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }
  return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
  var partialOptions = {};
  for (var name in options) {
    if (!(name in STANDARD_DATE_PROP_SEVERITIES) ||
    // not a date part prop (like timeZone)
    STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
      partialOptions[name] = options[name];
    }
  }
  return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
  var i0 = 0;
  while (i0 < full0.length) {
    var found0 = full0.indexOf(partial0, i0);
    if (found0 === -1) {
      break;
    }
    var before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    var after0 = full0.substr(i0);
    var i1 = 0;
    while (i1 < full1.length) {
      var found1 = full1.indexOf(partial1, i1);
      if (found1 === -1) {
        break;
      }
      var before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      var after1 = full1.substr(i1);
      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }
  return null;
}
function expandZonedMarker(dateInfo, calendarSystem) {
  var a = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a,
    year: a[0],
    month: a[1],
    day: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5],
    millisecond: a[6]
  };
}
function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  var startInfo = expandZonedMarker(start, context.calendarSystem);
  var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}

/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/
/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/
var CmdFormatter = /*#__PURE__*/function () {
  function CmdFormatter(cmdStr) {
    _classCallCheck(this, CmdFormatter);
    this.cmdStr = cmdStr;
  }
  _createClass(CmdFormatter, [{
    key: "format",
    value: function format(date, context, betterDefaultSeparator) {
      return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    }
  }, {
    key: "formatRange",
    value: function formatRange(start, end, context, betterDefaultSeparator) {
      return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    }
  }]);
  return CmdFormatter;
}();
var FuncFormatter = /*#__PURE__*/function () {
  function FuncFormatter(func) {
    _classCallCheck(this, FuncFormatter);
    this.func = func;
  }
  _createClass(FuncFormatter, [{
    key: "format",
    value: function format(date, context, betterDefaultSeparator) {
      return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    }
  }, {
    key: "formatRange",
    value: function formatRange(start, end, context, betterDefaultSeparator) {
      return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    }
  }]);
  return FuncFormatter;
}();
function createFormatter(input) {
  if (_typeof(input) === 'object' && input) {
    // non-null object
    return new NativeFormatter(input);
  }
  if (typeof input === 'string') {
    return new CmdFormatter(input);
  }
  if (typeof input === 'function') {
    return new FuncFormatter(input);
  }
  return null;
}

// base options
// ------------
var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: identity,
  navLinkHint: identity,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity,
  monthStartFormat: createFormatter,
  // for connectors
  // (can't be part of plugin system b/c must be provided at runtime)
  handleCustomRendering: identity,
  customRenderingMetaMap: identity,
  customRenderingReplaces: Boolean
};
// do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.
var BASE_OPTION_DEFAULTS = {
  eventDisplay: 'auto',
  defaultRangeSeparator: ' - ',
  titleRangeSeparator: " \u2013 ",
  defaultTimedEventDuration: '01:00:00',
  defaultAllDayEventDuration: {
    day: 1
  },
  forceEventDuration: false,
  nextDayThreshold: '00:00:00',
  dayHeaders: true,
  initialView: '',
  aspectRatio: 1.35,
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'today prev,next'
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: 'local',
  editable: false,
  nowIndicator: false,
  scrollTime: '06:00:00',
  scrollTimeReset: true,
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: 'start',
  endParam: 'end',
  timeZoneParam: 'timeZone',
  timeZone: 'local',
  locales: [],
  locale: '',
  themeSystem: 'standard',
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: '*',
  eventOrder: 'start,-duration,allDay,title',
  dayPopoverFormat: {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1000,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30,
  monthStartFormat: {
    month: 'long',
    day: 'numeric'
  }
};
// calendar listeners
// ------------------
var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
};
// calendar-specific options
// -------------------------
var CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  buttonHints: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = _defineProperty({
  headerToolbar: isMaybeObjectsEqual,
  footerToolbar: isMaybeObjectsEqual,
  buttonText: isMaybeObjectsEqual,
  buttonHints: isMaybeObjectsEqual,
  buttonIcons: isMaybeObjectsEqual,
  dateIncrement: isMaybeObjectsEqual,
  plugins: isMaybeArraysEqual,
  events: isMaybeArraysEqual,
  eventSources: isMaybeArraysEqual
}, 'resources', isMaybeArraysEqual);
function isMaybeObjectsEqual(a, b) {
  if (_typeof(a) === 'object' && _typeof(b) === 'object' && a && b) {
    // both non-null objects
    return isPropsEqual(a, b);
  }
  return a === b;
}
function isMaybeArraysEqual(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return isArraysEqual(a, b);
  }
  return a === b;
}
// view-specific options
// ---------------------
var VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
};
// util funcs
// ----------------------------------------------------------------------------------------------------
function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
  var refined = {};
  var extra = {};
  for (var propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }
  for (var _propName in input) {
    if (!(_propName in refiners)) {
      extra[_propName] = input[_propName];
    }
  }
  return {
    refined: refined,
    extra: extra
  };
}
function identity(raw) {
  return raw;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexPropsMap) {
  var dest = {};
  if (complexPropsMap) {
    for (var name in complexPropsMap) {
      if (complexPropsMap[name] === isMaybeObjectsEqual) {
        // implies that it's object-mergeable
        var complexObjs = [];
        // collect the trailing object values, stopping when a non-object is discovered
        for (var i = propObjs.length - 1; i >= 0; i -= 1) {
          var val = propObjs[i][name];
          if (_typeof(val) === 'object' && val) {
            // non-null object
            complexObjs.unshift(val);
          } else if (val !== undefined) {
            dest[name] = val; // if there were no objects, this value will be used
            break;
          }
        }
        // if the trailing values were objects, use the merged value
        if (complexObjs.length) {
          dest[name] = mergeProps(complexObjs);
        }
      }
    }
  }
  // copy values into the destination, going from last to first
  for (var _i = propObjs.length - 1; _i >= 0; _i -= 1) {
    var props = propObjs[_i];
    for (var _name in props) {
      if (!(_name in dest)) {
        // if already assigned by previous props or complex props, don't reassign
        dest[_name] = props[_name];
      }
    }
  }
  return dest;
}
function filterHash(hash, func) {
  var filtered = {};
  for (var key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }
  return filtered;
}
function mapHash(hash, func) {
  var newHash = {};
  for (var key in hash) {
    newHash[key] = func(hash[key], key);
  }
  return newHash;
}
function arrayToHash(a) {
  var hash = {};
  var _iterator2 = _createForOfIteratorHelper(a),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      hash[item] = true;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return hash;
}
// TODO: reassess browser support
// https://caniuse.com/?search=object.values
function hashValuesToArray(obj) {
  var a = [];
  for (var key in obj) {
    a.push(obj[key]);
  }
  return a;
}
function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }
  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }
  for (var _key2 in obj1) {
    if (hasOwnProperty.call(obj1, _key2)) {
      if (obj0[_key2] !== obj1[_key2]) {
        return false;
      }
    }
  }
  return true;
}
var HANDLER_RE = /^on[A-Z]/;
function isNonHandlerPropsEqual(obj0, obj1) {
  var keys = getUnequalProps(obj0, obj1);
  var _iterator3 = _createForOfIteratorHelper(keys),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var key = _step3.value;
      if (!HANDLER_RE.test(key)) {
        return false;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return true;
}
function getUnequalProps(obj0, obj1) {
  var keys = [];
  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }
  for (var _key3 in obj1) {
    if (hasOwnProperty.call(obj1, _key3)) {
      if (obj0[_key3] !== obj1[_key3]) {
        keys.push(_key3);
      }
    }
  }
  return keys;
}
function compareObjs(oldProps, newProps) {
  var equalityFuncs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (oldProps === newProps) {
    return true;
  }
  for (var key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;else {
      return false;
    }
  }
  // check for props that were omitted in the new
  for (var _key4 in oldProps) {
    if (!(_key4 in newProps)) {
      return false;
    }
  }
  return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/
function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }
  if (comparator) {
    return comparator(val0, val1);
  }
  return false;
}
function collectFromHash(hash) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var endIndex = arguments.length > 2 ? arguments[2] : undefined;
  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var res = [];
  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }
  for (var i = startIndex; i < endIndex; i += step) {
    var val = hash[i];
    if (val !== undefined) {
      // will disregard undefined for sparse arrays
      res.push(val);
    }
  }
  return res;
}
var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = /*#__PURE__*/function () {
  function GregorianCalendarSystem() {
    _classCallCheck(this, GregorianCalendarSystem);
  }
  _createClass(GregorianCalendarSystem, [{
    key: "getMarkerYear",
    value: function getMarkerYear(d) {
      return d.getUTCFullYear();
    }
  }, {
    key: "getMarkerMonth",
    value: function getMarkerMonth(d) {
      return d.getUTCMonth();
    }
  }, {
    key: "getMarkerDay",
    value: function getMarkerDay(d) {
      return d.getUTCDate();
    }
  }, {
    key: "arrayToMarker",
    value: function arrayToMarker(arr) {
      return arrayToUtcDate(arr);
    }
  }, {
    key: "markerToArray",
    value: function markerToArray(marker) {
      return dateToUtcArray(marker);
    }
  }]);
  return GregorianCalendarSystem;
}();
registerCalendarSystem('gregory', GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function _parse(str) {
  var m = ISO_RE.exec(str);
  if (m) {
    var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number("0.".concat(m[12])) * 1000 : 0));
    if (isValidDate(marker)) {
      var timeZoneOffset = null;
      if (m[13]) {
        timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
      }
      return {
        marker: marker,
        isTimeUnspecified: !m[6],
        timeZoneOffset: timeZoneOffset
      };
    }
  }
  return null;
}
var DateEnv = /*#__PURE__*/function () {
  function DateEnv(settings) {
    _classCallCheck(this, DateEnv);
    var timeZone = this.timeZone = settings.timeZone;
    var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }
    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;
    if (settings.weekNumberCalculation === 'ISO') {
      this.weekDow = 1;
      this.weekDoy = 4;
    }
    if (typeof settings.firstDay === 'number') {
      this.weekDow = settings.firstDay;
    }
    if (typeof settings.weekNumberCalculation === 'function') {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }
    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  }
  // Creating / Parsing
  _createClass(DateEnv, [{
    key: "createMarker",
    value: function createMarker(input) {
      var meta = this.createMarkerMeta(input);
      if (meta === null) {
        return null;
      }
      return meta.marker;
    }
  }, {
    key: "createNowMarker",
    value: function createNowMarker() {
      if (this.canComputeOffset) {
        return this.timestampToMarker(new Date().valueOf());
      }
      // if we can't compute the current date val for a timezone,
      // better to give the current local date vals than UTC
      return arrayToUtcDate(dateToLocalArray(new Date()));
    }
  }, {
    key: "createMarkerMeta",
    value: function createMarkerMeta(input) {
      if (typeof input === 'string') {
        return this.parse(input);
      }
      var marker = null;
      if (typeof input === 'number') {
        marker = this.timestampToMarker(input);
      } else if (input instanceof Date) {
        input = input.valueOf();
        if (!isNaN(input)) {
          marker = this.timestampToMarker(input);
        }
      } else if (Array.isArray(input)) {
        marker = arrayToUtcDate(input);
      }
      if (marker === null || !isValidDate(marker)) {
        return null;
      }
      return {
        marker: marker,
        isTimeUnspecified: false,
        forcedTzo: null
      };
    }
  }, {
    key: "parse",
    value: function parse(s) {
      var parts = _parse(s);
      if (parts === null) {
        return null;
      }
      var marker = parts.marker;
      var forcedTzo = null;
      if (parts.timeZoneOffset !== null) {
        if (this.canComputeOffset) {
          marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
        } else {
          forcedTzo = parts.timeZoneOffset;
        }
      }
      return {
        marker: marker,
        isTimeUnspecified: parts.isTimeUnspecified,
        forcedTzo: forcedTzo
      };
    }
    // Accessors
  }, {
    key: "getYear",
    value: function getYear(marker) {
      return this.calendarSystem.getMarkerYear(marker);
    }
  }, {
    key: "getMonth",
    value: function getMonth(marker) {
      return this.calendarSystem.getMarkerMonth(marker);
    }
  }, {
    key: "getDay",
    value: function getDay(marker) {
      return this.calendarSystem.getMarkerDay(marker);
    }
    // Adding / Subtracting
  }, {
    key: "add",
    value: function add(marker, dur) {
      var a = this.calendarSystem.markerToArray(marker);
      a[0] += dur.years;
      a[1] += dur.months;
      a[2] += dur.days;
      a[6] += dur.milliseconds;
      return this.calendarSystem.arrayToMarker(a);
    }
  }, {
    key: "subtract",
    value: function subtract(marker, dur) {
      var a = this.calendarSystem.markerToArray(marker);
      a[0] -= dur.years;
      a[1] -= dur.months;
      a[2] -= dur.days;
      a[6] -= dur.milliseconds;
      return this.calendarSystem.arrayToMarker(a);
    }
  }, {
    key: "addYears",
    value: function addYears(marker, n) {
      var a = this.calendarSystem.markerToArray(marker);
      a[0] += n;
      return this.calendarSystem.arrayToMarker(a);
    }
  }, {
    key: "addMonths",
    value: function addMonths(marker, n) {
      var a = this.calendarSystem.markerToArray(marker);
      a[1] += n;
      return this.calendarSystem.arrayToMarker(a);
    }
    // Diffing Whole Units
  }, {
    key: "diffWholeYears",
    value: function diffWholeYears(m0, m1) {
      var calendarSystem = this.calendarSystem;
      if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
        return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
      }
      return null;
    }
  }, {
    key: "diffWholeMonths",
    value: function diffWholeMonths(m0, m1) {
      var calendarSystem = this.calendarSystem;
      if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
        return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
      }
      return null;
    }
    // Range / Duration
  }, {
    key: "greatestWholeUnit",
    value: function greatestWholeUnit(m0, m1) {
      var n = this.diffWholeYears(m0, m1);
      if (n !== null) {
        return {
          unit: 'year',
          value: n
        };
      }
      n = this.diffWholeMonths(m0, m1);
      if (n !== null) {
        return {
          unit: 'month',
          value: n
        };
      }
      n = diffWholeWeeks(m0, m1);
      if (n !== null) {
        return {
          unit: 'week',
          value: n
        };
      }
      n = diffWholeDays(m0, m1);
      if (n !== null) {
        return {
          unit: 'day',
          value: n
        };
      }
      n = diffHours(m0, m1);
      if (isInt(n)) {
        return {
          unit: 'hour',
          value: n
        };
      }
      n = diffMinutes(m0, m1);
      if (isInt(n)) {
        return {
          unit: 'minute',
          value: n
        };
      }
      n = diffSeconds(m0, m1);
      if (isInt(n)) {
        return {
          unit: 'second',
          value: n
        };
      }
      return {
        unit: 'millisecond',
        value: m1.valueOf() - m0.valueOf()
      };
    }
  }, {
    key: "countDurationsBetween",
    value: function countDurationsBetween(m0, m1, d) {
      // TODO: can use greatestWholeUnit
      var diff;
      if (d.years) {
        diff = this.diffWholeYears(m0, m1);
        if (diff !== null) {
          return diff / asRoughYears(d);
        }
      }
      if (d.months) {
        diff = this.diffWholeMonths(m0, m1);
        if (diff !== null) {
          return diff / asRoughMonths(d);
        }
      }
      if (d.days) {
        diff = diffWholeDays(m0, m1);
        if (diff !== null) {
          return diff / asRoughDays(d);
        }
      }
      return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
    }
    // Start-Of
    // these DON'T return zoned-dates. only UTC start-of dates
  }, {
    key: "startOf",
    value: function startOf(m, unit) {
      if (unit === 'year') {
        return this.startOfYear(m);
      }
      if (unit === 'month') {
        return this.startOfMonth(m);
      }
      if (unit === 'week') {
        return this.startOfWeek(m);
      }
      if (unit === 'day') {
        return startOfDay(m);
      }
      if (unit === 'hour') {
        return startOfHour(m);
      }
      if (unit === 'minute') {
        return startOfMinute(m);
      }
      if (unit === 'second') {
        return startOfSecond(m);
      }
      return null;
    }
  }, {
    key: "startOfYear",
    value: function startOfYear(m) {
      return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m)]);
    }
  }, {
    key: "startOfMonth",
    value: function startOfMonth(m) {
      return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m)]);
    }
  }, {
    key: "startOfWeek",
    value: function startOfWeek(m) {
      return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m), m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7]);
    }
    // Week Number
  }, {
    key: "computeWeekNumber",
    value: function computeWeekNumber(marker) {
      if (this.weekNumberFunc) {
        return this.weekNumberFunc(this.toDate(marker));
      }
      return weekOfYear(marker, this.weekDow, this.weekDoy);
    }
    // TODO: choke on timeZoneName: long
  }, {
    key: "format",
    value: function format(marker, formatter) {
      var dateOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return formatter.format({
        marker: marker,
        timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
      }, this);
    }
  }, {
    key: "formatRange",
    value: function formatRange(start, end, formatter) {
      var dateOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (dateOptions.isEndExclusive) {
        end = addMs(end, -1);
      }
      return formatter.formatRange({
        marker: start,
        timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
      }, {
        marker: end,
        timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
      }, this, dateOptions.defaultSeparator);
    }
    /*
    DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
    might as well use buildIsoString or some other util directly
    */
  }, {
    key: "formatIso",
    value: function formatIso(marker) {
      var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var timeZoneOffset = null;
      if (!extraOptions.omitTimeZoneOffset) {
        if (extraOptions.forcedTzo != null) {
          timeZoneOffset = extraOptions.forcedTzo;
        } else {
          timeZoneOffset = this.offsetForMarker(marker);
        }
      }
      return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
    }
    // TimeZone
  }, {
    key: "timestampToMarker",
    value: function timestampToMarker(ms) {
      if (this.timeZone === 'local') {
        return arrayToUtcDate(dateToLocalArray(new Date(ms)));
      }
      if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
        return new Date(ms);
      }
      return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
    }
  }, {
    key: "offsetForMarker",
    value: function offsetForMarker(m) {
      if (this.timeZone === 'local') {
        return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
      }
      if (this.timeZone === 'UTC') {
        return 0;
      }
      if (this.namedTimeZoneImpl) {
        return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
      }
      return null;
    }
    // Conversion
  }, {
    key: "toDate",
    value: function toDate(m, forcedTzo) {
      if (this.timeZone === 'local') {
        return arrayToLocalDate(dateToUtcArray(m));
      }
      if (this.timeZone === 'UTC') {
        return new Date(m.valueOf()); // make sure it's a copy
      }
      if (!this.namedTimeZoneImpl) {
        return new Date(m.valueOf() - (forcedTzo || 0));
      }
      return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
    }
  }]);
  return DateEnv;
}();
var Theme = /*#__PURE__*/function () {
  function Theme(calendarOptions) {
    _classCallCheck(this, Theme);
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }
  _createClass(Theme, [{
    key: "setIconOverride",
    value: function setIconOverride(iconOverrideHash) {
      var iconClassesCopy;
      var buttonName;
      if (_typeof(iconOverrideHash) === 'object' && iconOverrideHash) {
        // non-null object
        iconClassesCopy = Object.assign({}, this.iconClasses);
        for (buttonName in iconOverrideHash) {
          iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
        }
        this.iconClasses = iconClassesCopy;
      } else if (iconOverrideHash === false) {
        this.iconClasses = {};
      }
    }
  }, {
    key: "applyIconOverridePrefix",
    value: function applyIconOverridePrefix(className) {
      var prefix = this.iconOverridePrefix;
      if (prefix && className.indexOf(prefix) !== 0) {
        // if not already present
        className = prefix + className;
      }
      return className;
    }
  }, {
    key: "getClass",
    value: function getClass(key) {
      return this.classes[key] || '';
    }
  }, {
    key: "getIconClass",
    value: function getIconClass(buttonName, isRtl) {
      var className;
      if (isRtl && this.rtlIconClasses) {
        className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
      } else {
        className = this.iconClasses[buttonName];
      }
      if (className) {
        return "".concat(this.baseIconClass, " ").concat(className);
      }
      return '';
    }
  }, {
    key: "getCustomButtonIconClass",
    value: function getCustomButtonIconClass(customButtonProps) {
      var className;
      if (this.iconOverrideCustomButtonOption) {
        className = customButtonProps[this.iconOverrideCustomButtonOption];
        if (className) {
          return "".concat(this.baseIconClass, " ").concat(this.applyIconOverridePrefix(className));
        }
      }
      return '';
    }
  }]);
  return Theme;
}();
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

/*
NOTE: this can be a public API, especially createElement for hooks.
See examples/typescript-scheduler/src/index.ts
*/
function flushSync(runBeforeFlush) {
  runBeforeFlush();
  var oldDebounceRendering = preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering; // orig
  var callbackQ = [];
  function execCallbackSync(callback) {
    callbackQ.push(callback);
  }
  preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = execCallbackSync;
  preact__WEBPACK_IMPORTED_MODULE_0__.render(preact__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeComponent, {}), document.createElement('div'));
  while (callbackQ.length) {
    callbackQ.shift()();
  }
  preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = oldDebounceRendering;
}
var FakeComponent = /*#__PURE__*/function (_preact$Component) {
  _inherits(FakeComponent, _preact$Component);
  function FakeComponent() {
    _classCallCheck(this, FakeComponent);
    return _callSuper(this, FakeComponent, arguments);
  }
  _createClass(FakeComponent, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {});
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({});
    }
  }]);
  return FakeComponent;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component); // TODO: use preact/compat instead?
function createContext(defaultValue) {
  var ContextType = preact__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultValue);
  var origProvider = ContextType.Provider;
  ContextType.Provider = function () {
    var _this4 = this;
    var isNew = !this.getChildContext;
    var children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
    if (isNew) {
      var subs = [];
      this.shouldComponentUpdate = function (_props) {
        if (_this4.props.value !== _props.value) {
          subs.forEach(function (c) {
            c.context = _props.value;
            c.forceUpdate();
          });
        }
      };
      this.sub = function (c) {
        subs.push(c);
        var old = c.componentWillUnmount;
        c.componentWillUnmount = function () {
          subs.splice(subs.indexOf(c), 1);
          old && old.call(c);
        };
      };
    }
    return children;
  };
  return ContextType;
}
var ScrollResponder = /*#__PURE__*/function () {
  function ScrollResponder(execFunc, emitter, scrollTime, scrollTimeReset) {
    var _this5 = this;
    _classCallCheck(this, ScrollResponder);
    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;
    this.handleScrollRequest = function (request) {
      _this5.queuedRequest = Object.assign({}, _this5.queuedRequest || {}, request);
      _this5.drain();
    };
    emitter.on('_scrollRequest', this.handleScrollRequest);
    this.fireInitialScroll();
  }
  _createClass(ScrollResponder, [{
    key: "detach",
    value: function detach() {
      this.emitter.off('_scrollRequest', this.handleScrollRequest);
    }
  }, {
    key: "update",
    value: function update(isDatesNew) {
      if (isDatesNew && this.scrollTimeReset) {
        this.fireInitialScroll(); // will drain
      } else {
        this.drain();
      }
    }
  }, {
    key: "fireInitialScroll",
    value: function fireInitialScroll() {
      this.handleScrollRequest({
        time: this.scrollTime
      });
    }
  }, {
    key: "drain",
    value: function drain() {
      if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
        this.queuedRequest = null;
      }
    }
  }]);
  return ScrollResponder;
}();
var ViewContextType = createContext({}); // for Components
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv: dateEnv,
    options: viewOptions,
    pluginHooks: pluginHooks,
    emitter: emitter,
    dispatch: dispatch,
    getCurrentData: getCurrentData,
    calendarApi: calendarApi,
    viewSpec: viewSpec,
    viewApi: viewApi,
    dateProfileGenerator: dateProfileGenerator,
    theme: theme,
    isRtl: viewOptions.direction === 'rtl',
    addResizeHandler: function addResizeHandler(handler) {
      emitter.on('_resize', handler);
    },
    removeResizeHandler: function removeResizeHandler(handler) {
      emitter.off('_resize', handler);
    },
    createScrollResponder: function createScrollResponder(execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },
    registerInteractiveComponent: registerInteractiveComponent,
    unregisterInteractiveComponent: unregisterInteractiveComponent
  };
}

/* eslint max-classes-per-file: off */
var PureComponent = /*#__PURE__*/function (_Component) {
  _inherits(PureComponent, _Component);
  function PureComponent() {
    _classCallCheck(this, PureComponent);
    return _callSuper(this, PureComponent, arguments);
  }
  _createClass(PureComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.debug) {
        // eslint-disable-next-line no-console
        console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
      }
      return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
    }
    // HACK for freakin' React StrictMode
  }, {
    key: "safeSetState",
    value: function safeSetState(newState) {
      if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
        this.setState(newState);
      }
    }
  }]);
  return PureComponent;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
PureComponent.addPropsEquality = addPropsEquality;
PureComponent.addStateEquality = addStateEquality;
PureComponent.contextType = ViewContextType;
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
var BaseComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(BaseComponent, _PureComponent);
  function BaseComponent() {
    _classCallCheck(this, BaseComponent);
    return _callSuper(this, BaseComponent, arguments);
  }
  return _createClass(BaseComponent);
}(PureComponent);
BaseComponent.contextType = ViewContextType;
function addPropsEquality(propEquality) {
  var hash = Object.create(this.prototype.propEquality);
  Object.assign(hash, propEquality);
  this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
  var hash = Object.create(this.prototype.stateEquality);
  Object.assign(hash, stateEquality);
  this.prototype.stateEquality = hash;
}
// use other one
function setRef(ref, current) {
  if (typeof ref === 'function') {
    ref(current);
  } else if (ref) {
    // see https://github.com/facebook/react/issues/13029
    ref.current = current;
  }
}
var ContentInjector = /*#__PURE__*/function (_BaseComponent) {
  _inherits(ContentInjector, _BaseComponent);
  function ContentInjector() {
    var _this6;
    _classCallCheck(this, ContentInjector);
    _this6 = _callSuper(this, ContentInjector, arguments);
    _this6.id = guid();
    _this6.queuedDomNodes = [];
    _this6.currentDomNodes = [];
    _this6.handleEl = function (el) {
      var options = _this6.context.options;
      var generatorName = _this6.props.generatorName;
      if (!options.customRenderingReplaces || !hasCustomRenderingHandler(generatorName, options)) {
        _this6.updateElRef(el);
      }
    };
    _this6.updateElRef = function (el) {
      if (_this6.props.elRef) {
        setRef(_this6.props.elRef, el);
      }
    };
    return _this6;
  }
  _createClass(ContentInjector, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var customGenerator = props.customGenerator,
        defaultGenerator = props.defaultGenerator,
        renderProps = props.renderProps;
      var attrs = buildElAttrs(props, [], this.handleEl);
      var useDefault = false;
      var innerContent;
      var queuedDomNodes = [];
      var currentGeneratorMeta;
      if (customGenerator != null) {
        var customGeneratorRes = typeof customGenerator === 'function' ? customGenerator(renderProps, preact__WEBPACK_IMPORTED_MODULE_0__.createElement) : customGenerator;
        if (customGeneratorRes === true) {
          useDefault = true;
        } else {
          var isObject = customGeneratorRes && _typeof(customGeneratorRes) === 'object'; // non-null
          if (isObject && 'html' in customGeneratorRes) {
            attrs.dangerouslySetInnerHTML = {
              __html: customGeneratorRes.html
            };
          } else if (isObject && 'domNodes' in customGeneratorRes) {
            queuedDomNodes = Array.prototype.slice.call(customGeneratorRes.domNodes);
          } else if (isObject ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(customGeneratorRes) // vdom node
          : typeof customGeneratorRes !== 'function' // primitive value (like string or number)
          ) {
            // use in vdom
            innerContent = customGeneratorRes;
          } else {
            // an exotic object for handleCustomRendering
            currentGeneratorMeta = customGeneratorRes;
          }
        }
      } else {
        useDefault = !hasCustomRenderingHandler(props.generatorName, options);
      }
      if (useDefault && defaultGenerator) {
        innerContent = defaultGenerator(renderProps);
      }
      this.queuedDomNodes = queuedDomNodes;
      this.currentGeneratorMeta = currentGeneratorMeta;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(props.elTag, attrs, innerContent);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.applyQueueudDomNodes();
      this.triggerCustomRendering(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.applyQueueudDomNodes();
      this.triggerCustomRendering(true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.triggerCustomRendering(false); // TODO: different API for removal?
    }
  }, {
    key: "triggerCustomRendering",
    value: function triggerCustomRendering(isActive) {
      var _a;
      var props = this.props,
        context = this.context;
      var _context$options = context.options,
        handleCustomRendering = _context$options.handleCustomRendering,
        customRenderingMetaMap = _context$options.customRenderingMetaMap;
      if (handleCustomRendering) {
        var generatorMeta = (_a = this.currentGeneratorMeta) !== null && _a !== void 0 ? _a : customRenderingMetaMap === null || customRenderingMetaMap === void 0 ? void 0 : customRenderingMetaMap[props.generatorName];
        if (generatorMeta) {
          handleCustomRendering(Object.assign(Object.assign({
            id: this.id,
            isActive: isActive,
            containerEl: this.base,
            reportNewContainerEl: this.updateElRef,
            // front-end framework tells us about new container els
            generatorMeta: generatorMeta
          }, props), {
            elClasses: (props.elClasses || []).filter(isTruthy)
          }));
        }
      }
    }
  }, {
    key: "applyQueueudDomNodes",
    value: function applyQueueudDomNodes() {
      var queuedDomNodes = this.queuedDomNodes,
        currentDomNodes = this.currentDomNodes;
      var el = this.base;
      if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
        currentDomNodes.forEach(removeElement);
        var _iterator4 = _createForOfIteratorHelper(queuedDomNodes),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var newNode = _step4.value;
            el.appendChild(newNode);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this.currentDomNodes = queuedDomNodes;
      }
    }
  }]);
  return ContentInjector;
}(BaseComponent);
ContentInjector.addPropsEquality({
  elClasses: isArraysEqual,
  elStyle: isPropsEqual,
  elAttrs: isNonHandlerPropsEqual,
  renderProps: isPropsEqual
});
// Util
/*
Does UI-framework provide custom way of rendering that does not use Preact VDOM
AND does the calendar's options define custom rendering?
AKA. Should we NOT render the default content?
*/
function hasCustomRenderingHandler(generatorName, options) {
  var _a;
  return Boolean(options.handleCustomRendering && generatorName && ((_a = options.customRenderingMetaMap) === null || _a === void 0 ? void 0 : _a[generatorName]));
}
function buildElAttrs(props, extraClassNames, elRef) {
  var attrs = Object.assign(Object.assign({}, props.elAttrs), {
    ref: elRef
  });
  if (props.elClasses || extraClassNames) {
    attrs.className = (props.elClasses || []).concat(extraClassNames || []).concat(attrs.className || []).filter(Boolean).join(' ');
  }
  if (props.elStyle) {
    attrs.style = props.elStyle;
  }
  return attrs;
}
function isTruthy(val) {
  return Boolean(val);
}
var RenderId = createContext(0);
var ContentContainer = /*#__PURE__*/function (_Component2) {
  _inherits(ContentContainer, _Component2);
  function ContentContainer() {
    var _this7;
    _classCallCheck(this, ContentContainer);
    _this7 = _callSuper(this, ContentContainer, arguments);
    _this7.InnerContent = InnerContentInjector.bind(undefined, _assertThisInitialized(_this7));
    _this7.handleEl = function (el) {
      _this7.el = el;
      if (_this7.props.elRef) {
        setRef(_this7.props.elRef, el);
        if (el && _this7.didMountMisfire) {
          _this7.componentDidMount();
        }
      }
    };
    return _this7;
  }
  _createClass(ContentContainer, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var generatedClassNames = generateClassNames(props.classNameGenerator, props.renderProps);
      if (props.children) {
        var elAttrs = buildElAttrs(props, generatedClassNames, this.handleEl);
        var children = props.children(this.InnerContent, props.renderProps, elAttrs);
        if (props.elTag) {
          return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(props.elTag, elAttrs, children);
        } else {
          return children;
        }
      } else {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentInjector, Object.assign(Object.assign({}, props), {
          elRef: this.handleEl,
          elTag: props.elTag || 'div',
          elClasses: (props.elClasses || []).concat(generatedClassNames),
          renderId: this.context
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _a, _b;
      if (this.el) {
        (_b = (_a = this.props).didMount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), {
          el: this.el
        }));
      } else {
        this.didMountMisfire = true;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _a, _b;
      (_b = (_a = this.props).willUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), {
        el: this.el
      }));
    }
  }]);
  return ContentContainer;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
ContentContainer.contextType = RenderId;
function InnerContentInjector(containerComponent, props) {
  var parentProps = containerComponent.props;
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentInjector, Object.assign({
    renderProps: parentProps.renderProps,
    generatorName: parentProps.generatorName,
    customGenerator: parentProps.customGenerator,
    defaultGenerator: parentProps.defaultGenerator,
    renderId: containerComponent.context
  }, props));
}
// Utils
function generateClassNames(classNameGenerator, renderProps) {
  var classNames = typeof classNameGenerator === 'function' ? classNameGenerator(renderProps) : classNameGenerator || [];
  return typeof classNames === 'string' ? [classNames] : classNames;
}
var ViewContainer = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(ViewContainer, _BaseComponent2);
  function ViewContainer() {
    _classCallCheck(this, ViewContainer);
    return _callSuper(this, ViewContainer, arguments);
  }
  _createClass(ViewContainer, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var renderProps = {
        view: context.viewApi
      };
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props, {
        elTag: props.elTag || 'div',
        elClasses: [].concat(_toConsumableArray(buildViewClassNames(props.viewSpec)), _toConsumableArray(props.elClasses || [])),
        renderProps: renderProps,
        classNameGenerator: options.viewClassNames,
        generatorName: undefined,
        didMount: options.viewDidMount,
        willUnmount: options.viewWillUnmount
      }), function () {
        return props.children;
      });
    }
  }]);
  return ViewContainer;
}(BaseComponent);
function buildViewClassNames(viewSpec) {
  return ["fc-".concat(viewSpec.type, "-view"), 'fc-view'];
}
function parseRange(input, dateEnv) {
  var start = null;
  var end = null;
  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }
  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }
  if (!start && !end) {
    return null;
  }
  if (start && end && end < start) {
    return null;
  }
  return {
    start: start,
    end: end
  };
}
// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges, constraintRange) {
  var invertedRanges = [];
  var start = constraintRange.start; // the end of the previous range. the start of the new range
  var i;
  var dateRange;
  // ranges need to be in order. required for our date-walking algorithm
  ranges.sort(compareRanges);
  for (i = 0; i < ranges.length; i += 1) {
    dateRange = ranges[i];
    // add the span of time before the event (if there is any)
    if (dateRange.start > start) {
      // compare millisecond time (skip any ambig logic)
      invertedRanges.push({
        start: start,
        end: dateRange.start
      });
    }
    if (dateRange.end > start) {
      start = dateRange.end;
    }
  }
  // add the span of time after the last event (if there is any)
  if (start < constraintRange.end) {
    // compare millisecond time (skip any ambig logic)
    invertedRanges.push({
      start: start,
      end: constraintRange.end
    });
  }
  return invertedRanges;
}
function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}
function intersectRanges(range0, range1) {
  var start = range0.start,
    end = range0.end;
  var newRange = null;
  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }
  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }
  if (start === null || end === null || start < end) {
    newRange = {
      start: start,
      end: end
    };
  }
  return newRange;
}
function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}
function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }
  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }
  return date;
}

/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange) {
  var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  var start = startOfDay(timedRange.start);
  var end = addDays(start, dayCnt);
  return {
    start: start,
    end: end
  };
}
// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange) {
  var nextDayThreshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createDuration(0);
  var startDay = null;
  var endDay = null;
  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
    // If the end time is actually inclusively part of the next day and is equal to or
    // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
    // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }
  if (timedRange.start) {
    startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
    // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }
  return {
    start: startDay,
    end: endDay
  };
}
// spans from one day into another?
function isMultiDayRange(range) {
  var visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === 'year') {
    return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
  }
  if (largeUnit === 'month') {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
  }
  return diffDayAndTime(date0, date1); // returns a duration
}
function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.dateMarker;
    default:
      return currentDate;
  }
}
function getInitialDate(options, dateEnv) {
  var initialDateInput = options.initialDate;
  // compute the initial ambig-timezone date
  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }
  return getNow(options.now, dateEnv); // getNow already returns unzoned
}
function getNow(nowInput, dateEnv) {
  if (typeof nowInput === 'function') {
    nowInput = nowInput();
  }
  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }
  return dateEnv.createMarker(nowInput);
}
var DateProfileGenerator = /*#__PURE__*/function () {
  function DateProfileGenerator(props) {
    _classCallCheck(this, DateProfileGenerator);
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.
  _createClass(DateProfileGenerator, [{
    key: "buildPrev",
    value: function buildPrev(currentDateProfile, currentDate, forceToValid) {
      var dateEnv = this.props.dateEnv;
      var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      // important for start-of-month
      currentDateProfile.dateIncrement);
      return this.build(prevDate, -1, forceToValid);
    }
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
  }, {
    key: "buildNext",
    value: function buildNext(currentDateProfile, currentDate, forceToValid) {
      var dateEnv = this.props.dateEnv;
      var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit),
      // important for start-of-month
      currentDateProfile.dateIncrement);
      return this.build(nextDate, 1, forceToValid);
    }
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
  }, {
    key: "build",
    value: function build(currentDate, direction) {
      var forceToValid = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var props = this.props;
      var validRange;
      var currentInfo;
      var isRangeAllDay;
      var renderRange;
      var activeRange;
      var isValid;
      validRange = this.buildValidRange();
      validRange = this.trimHiddenDays(validRange);
      if (forceToValid) {
        currentDate = constrainMarkerToRange(currentDate, validRange);
      }
      currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
      isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
      renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
      renderRange = this.trimHiddenDays(renderRange);
      activeRange = renderRange;
      if (!props.showNonCurrentDates) {
        activeRange = intersectRanges(activeRange, currentInfo.range);
      }
      activeRange = this.adjustActiveRange(activeRange);
      activeRange = intersectRanges(activeRange, validRange); // might return null
      // it's invalid if the originally requested date is not contained,
      // or if the range is completely outside of the valid range.
      isValid = rangesIntersect(currentInfo.range, validRange);
      // HACK: constrain to render-range so `currentDate` is more useful to view rendering
      if (!rangeContainsMarker(renderRange, currentDate)) {
        currentDate = renderRange.start;
      }
      return {
        currentDate: currentDate,
        // constraint for where prev/next operations can go and where events can be dragged/resized to.
        // an object with optional start and end properties.
        validRange: validRange,
        // range the view is formally responsible for.
        // for example, a month view might have 1st-31st, excluding padded dates
        currentRange: currentInfo.range,
        // name of largest unit being displayed, like "month" or "week"
        currentRangeUnit: currentInfo.unit,
        isRangeAllDay: isRangeAllDay,
        // dates that display events and accept drag-n-drop
        // will be `null` if no dates accept events
        activeRange: activeRange,
        // date range with a rendered skeleton
        // includes not-active days that need some sort of DOM
        renderRange: renderRange,
        // Duration object that denotes the first visible time of any given day
        slotMinTime: props.slotMinTime,
        // Duration object that denotes the exclusive visible end time of any given day
        slotMaxTime: props.slotMaxTime,
        isValid: isValid,
        // how far the current date will move for a prev/next operation
        dateIncrement: this.buildDateIncrement(currentInfo.duration)
        // pass a fallback (might be null) ^
      };
    }
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
  }, {
    key: "buildValidRange",
    value: function buildValidRange() {
      var input = this.props.validRangeInput;
      var simpleInput = typeof input === 'function' ? input.call(this.props.calendarApi, this.nowDate) : input;
      return this.refineRange(simpleInput) || {
        start: null,
        end: null
      }; // completely open-ended
    }
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
  }, {
    key: "buildCurrentRangeInfo",
    value: function buildCurrentRangeInfo(date, direction) {
      var props = this.props;
      var duration = null;
      var unit = null;
      var range = null;
      var dayCount;
      if (props.duration) {
        duration = props.duration;
        unit = props.durationUnit;
        range = this.buildRangeFromDuration(date, direction, duration, unit);
      } else if (dayCount = this.props.dayCount) {
        unit = 'day';
        range = this.buildRangeFromDayCount(date, direction, dayCount);
      } else if (range = this.buildCustomVisibleRange(date)) {
        unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
      } else {
        duration = this.getFallbackDuration();
        unit = greatestDurationDenominator(duration).unit;
        range = this.buildRangeFromDuration(date, direction, duration, unit);
      }
      return {
        duration: duration,
        unit: unit,
        range: range
      };
    }
  }, {
    key: "getFallbackDuration",
    value: function getFallbackDuration() {
      return createDuration({
        day: 1
      });
    }
    // Returns a new activeRange to have time values (un-ambiguate)
    // slotMinTime or slotMaxTime causes the range to expand.
  }, {
    key: "adjustActiveRange",
    value: function adjustActiveRange(range) {
      var _this$props = this.props,
        dateEnv = _this$props.dateEnv,
        usesMinMaxTime = _this$props.usesMinMaxTime,
        slotMinTime = _this$props.slotMinTime,
        slotMaxTime = _this$props.slotMaxTime;
      var start = range.start,
        end = range.end;
      if (usesMinMaxTime) {
        // expand active range if slotMinTime is negative (why not when positive?)
        if (asRoughDays(slotMinTime) < 0) {
          start = startOfDay(start); // necessary?
          start = dateEnv.add(start, slotMinTime);
        }
        // expand active range if slotMaxTime is beyond one day (why not when negative?)
        if (asRoughDays(slotMaxTime) > 1) {
          end = startOfDay(end); // necessary?
          end = addDays(end, -1);
          end = dateEnv.add(end, slotMaxTime);
        }
      }
      return {
        start: start,
        end: end
      };
    }
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed greatestDurationDenominator unit of duration.
  }, {
    key: "buildRangeFromDuration",
    value: function buildRangeFromDuration(date, direction, duration, unit) {
      var _this$props2 = this.props,
        dateEnv = _this$props2.dateEnv,
        dateAlignment = _this$props2.dateAlignment;
      var start;
      var end;
      var res;
      // compute what the alignment should be
      if (!dateAlignment) {
        var dateIncrement = this.props.dateIncrement;
        if (dateIncrement) {
          // use the smaller of the two units
          if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
            dateAlignment = greatestDurationDenominator(dateIncrement).unit;
          } else {
            dateAlignment = unit;
          }
        } else {
          dateAlignment = unit;
        }
      }
      // if the view displays a single day or smaller
      if (asRoughDays(duration) <= 1) {
        if (this.isHiddenDay(start)) {
          start = this.skipHiddenDays(start, direction);
          start = startOfDay(start);
        }
      }
      function computeRes() {
        start = dateEnv.startOf(date, dateAlignment);
        end = dateEnv.add(start, duration);
        res = {
          start: start,
          end: end
        };
      }
      computeRes();
      // if range is completely enveloped by hidden days, go past the hidden days
      if (!this.trimHiddenDays(res)) {
        date = this.skipHiddenDays(date, direction);
        computeRes();
      }
      return res;
    }
    // Builds the "current" range when a dayCount is specified.
  }, {
    key: "buildRangeFromDayCount",
    value: function buildRangeFromDayCount(date, direction, dayCount) {
      var _this$props3 = this.props,
        dateEnv = _this$props3.dateEnv,
        dateAlignment = _this$props3.dateAlignment;
      var runningCount = 0;
      var start = date;
      var end;
      if (dateAlignment) {
        start = dateEnv.startOf(start, dateAlignment);
      }
      start = startOfDay(start);
      start = this.skipHiddenDays(start, direction);
      end = start;
      do {
        end = addDays(end, 1);
        if (!this.isHiddenDay(end)) {
          runningCount += 1;
        }
      } while (runningCount < dayCount);
      return {
        start: start,
        end: end
      };
    }
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentRange and activeRange at the same time.
  }, {
    key: "buildCustomVisibleRange",
    value: function buildCustomVisibleRange(date) {
      var props = this.props;
      var input = props.visibleRangeInput;
      var simpleInput = typeof input === 'function' ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
      var range = this.refineRange(simpleInput);
      if (range && (range.start == null || range.end == null)) {
        return null;
      }
      return range;
    }
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
  }, {
    key: "buildRenderRange",
    value: function buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
      return currentRange;
    }
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
  }, {
    key: "buildDateIncrement",
    value: function buildDateIncrement(fallback) {
      var dateIncrement = this.props.dateIncrement;
      var customAlignment;
      if (dateIncrement) {
        return dateIncrement;
      }
      if (customAlignment = this.props.dateAlignment) {
        return createDuration(1, customAlignment);
      }
      if (fallback) {
        return fallback;
      }
      return createDuration({
        days: 1
      });
    }
  }, {
    key: "refineRange",
    value: function refineRange(rangeInput) {
      if (rangeInput) {
        var range = parseRange(rangeInput, this.props.dateEnv);
        if (range) {
          range = computeVisibleDayRange(range);
        }
        return range;
      }
      return null;
    }
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/
    // Initializes internal variables related to calculating hidden days-of-week
  }, {
    key: "initHiddenDays",
    value: function initHiddenDays() {
      var hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
      var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
      var dayCnt = 0;
      var i;
      if (this.props.weekends === false) {
        hiddenDays.push(0, 6); // 0=sunday, 6=saturday
      }
      for (i = 0; i < 7; i += 1) {
        if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
          dayCnt += 1;
        }
      }
      if (!dayCnt) {
        throw new Error('invalid hiddenDays'); // all days were hidden? bad.
      }
      this.isHiddenDayHash = isHiddenDayHash;
    }
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
  }, {
    key: "trimHiddenDays",
    value: function trimHiddenDays(range) {
      var start = range.start,
        end = range.end;
      if (start) {
        start = this.skipHiddenDays(start);
      }
      if (end) {
        end = this.skipHiddenDays(end, -1, true);
      }
      if (start == null || end == null || start < end) {
        return {
          start: start,
          end: end
        };
      }
      return null;
    }
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Date (used for UTC)
  }, {
    key: "isHiddenDay",
    value: function isHiddenDay(day) {
      if (day instanceof Date) {
        day = day.getUTCDay();
      }
      return this.isHiddenDayHash[day];
    }
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
  }, {
    key: "skipHiddenDays",
    value: function skipHiddenDays(date) {
      var inc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var isExclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
        date = addDays(date, inc);
      }
      return date;
    }
  }]);
  return DateProfileGenerator;
}();
function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId: defId,
    range: range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}
function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (var i = 0; i < recurringTypes.length; i += 1) {
    var parsed = recurringTypes[i].parse(refined, dateEnv);
    if (parsed) {
      var allDay = refined.allDay;
      if (allDay == null) {
        allDay = defaultAllDay;
        if (allDay == null) {
          allDay = parsed.allDayGuess;
          if (allDay == null) {
            allDay = false;
          }
        }
      }
      return {
        allDay: allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i
      };
    }
  }
  return null;
}
function expandRecurring(eventStore, framingRange, context) {
  var dateEnv = context.dateEnv,
    pluginHooks = context.pluginHooks,
    options = context.options;
  var defs = eventStore.defs,
    instances = eventStore.instances;
  // remove existing recurring instances
  // TODO: bad. always expand events as a second step
  instances = filterHash(instances, function (instance) {
    return !defs[instance.defId].recurringDef;
  });
  for (var defId in defs) {
    var def = defs[defId];
    if (def.recurringDef) {
      var duration = def.recurringDef.duration;
      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }
      var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
      var _iterator5 = _createForOfIteratorHelper(starts),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var start = _step5.value;
          var instance = createEventInstance(defId, {
            start: start,
            end: dateEnv.add(start, duration)
          });
          instances[instance.instanceId] = instance;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }
  return {
    defs: defs,
    instances: instances
  };
}
/*
Event MUST have a recurringDef
*/
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  var typeDef = recurringTypes[eventDef.recurringDef.typeId];
  var markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv);
  // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }
  return markers;
}
var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};
var EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), {
  extendedProps: identity
});
function parseEvent(raw, eventSource, context, allowOpenRange) {
  var refiners = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : buildEventRefiners(context);
  var defIdMap = arguments.length > 5 ? arguments[5] : undefined;
  var instanceIdMap = arguments.length > 6 ? arguments[6] : undefined;
  var _refineEventDef = refineEventDef(raw, context, refiners),
    refined = _refineEventDef.refined,
    extra = _refineEventDef.extra;
  var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
  if (recurringRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context, defIdMap);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return {
      def: def,
      instance: null
    };
  }
  var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
  if (singleRes) {
    var _def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context, defIdMap);
    var instance = createEventInstance(_def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    if (instanceIdMap && _def.publicId && instanceIdMap[_def.publicId]) {
      instance.instanceId = instanceIdMap[_def.publicId];
    }
    return {
      def: _def,
      instance: instance
    };
  }
  return null;
}
function refineEventDef(raw, context) {
  var refiners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildEventRefiners(context);
  return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context, defIdMap) {
  var def = {
    title: refined.title || '',
    groupId: refined.groupId || '',
    publicId: refined.id || '',
    url: refined.url || '',
    recurringDef: null,
    defId: (defIdMap && refined.id ? defIdMap[refined.id] : '') || guid(),
    sourceId: sourceId,
    allDay: allDay,
    hasEnd: hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: Object.assign(Object.assign({}, refined.extendedProps || {}), extra)
  };
  var _iterator6 = _createForOfIteratorHelper(context.pluginHooks.eventDefMemberAdders),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var memberAdder = _step6.value;
      Object.assign(def, memberAdder(refined));
    }
    // help out EventImpl from having user modify props
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  var allDay = refined.allDay;
  var startMeta;
  var startMarker = null;
  var hasEnd = false;
  var endMeta;
  var endMarker = null;
  var startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);
  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }
  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }
  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      // fall back to the date props LAST
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }
  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }
  if (endMeta) {
    endMarker = endMeta.marker;
    if (allDay) {
      endMarker = startOfDay(endMarker);
    }
    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }
  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }
  return {
    allDay: allDay,
    hasEnd: hasEnd,
    range: {
      start: startMarker,
      end: endMarker
    },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}
function computeIsDefaultAllDay(eventSource, context) {
  var res = null;
  if (eventSource) {
    res = eventSource.defaultAllDay;
  }
  if (res == null) {
    res = context.options.defaultAllDay;
  }
  return res;
}
function parseEvents(rawEvents, eventSource, context, allowOpenRange, defIdMap, instanceIdMap) {
  var eventStore = createEmptyEventStore();
  var eventRefiners = buildEventRefiners(context);
  var _iterator7 = _createForOfIteratorHelper(rawEvents),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var rawEvent = _step7.value;
      var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners, defIdMap, instanceIdMap);
      if (tuple) {
        eventTupleToStore(tuple, eventStore);
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return eventStore;
}
function eventTupleToStore(tuple) {
  var eventStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createEmptyEventStore();
  eventStore.defs[tuple.def.defId] = tuple.def;
  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }
  return eventStore;
}
// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore, instanceId) {
  var instance = eventStore.instances[instanceId];
  if (instance) {
    var def = eventStore.defs[instance.defId];
    // get events/instances with same group
    var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
      return isEventDefsGrouped(def, lookDef);
    });
    // add the original
    // TODO: wish we could use eventTupleToStore or something like it
    newStore.defs[def.defId] = def;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }
  return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
  return {
    defs: {},
    instances: {}
  };
}
function mergeEventStores(store0, store1) {
  return {
    defs: Object.assign(Object.assign({}, store0.defs), store1.defs),
    instances: Object.assign(Object.assign({}, store0.instances), store1.instances)
  };
}
function filterEventStoreDefs(eventStore, filterFunc) {
  var defs = filterHash(eventStore.defs, filterFunc);
  var instances = filterHash(eventStore.instances, function (instance) {
    return defs[instance.defId] // still exists?
    ;
  });
  return {
    defs: defs,
    instances: instances
  };
}
function excludeSubEventStore(master, sub) {
  var defs = master.defs,
    instances = master.instances;
  var filteredDefs = {};
  var filteredInstances = {};
  for (var defId in defs) {
    if (!sub.defs[defId]) {
      // not explicitly excluded
      filteredDefs[defId] = defs[defId];
    }
  }
  for (var instanceId in instances) {
    if (!sub.instances[instanceId] &&
    // not explicitly excluded
    filteredDefs[instances[instanceId].defId] // def wasn't filtered away
    ) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }
  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}
function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true); // allowOpenRange=true
  }
  if (_typeof(input) === 'object' && input) {
    // non-null object
    return parseEvents([input], null, context, true); // allowOpenRange=true
  }
  if (input != null) {
    return String(input);
  }
  return null;
}
function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }
  if (typeof raw === 'string') {
    return raw.split(/\s+/);
  }
  return [];
}

// TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props
var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: '',
  borderColor: '',
  textColor: '',
  classNames: []
};
function createEventUi(refined, context) {
  var constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || '',
    borderColor: refined.borderColor || refined.color || '',
    textColor: refined.textColor || '',
    classNames: (refined.className || []).concat(refined.classNames || []) // join singular and plural
  };
}
// TODO: prevent against problems with <2 args!
function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}
var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};
function parseEventSource(raw, context) {
  var refiners = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildEventSourceRefiners(context);
  var rawObj;
  if (typeof raw === 'string') {
    rawObj = {
      url: raw
    };
  } else if (typeof raw === 'function' || Array.isArray(raw)) {
    rawObj = {
      events: raw
    };
  } else if (_typeof(raw) === 'object' && raw) {
    // not null
    rawObj = raw;
  }
  if (rawObj) {
    var _refineProps = refineProps(rawObj, refiners),
      refined = _refineProps.refined,
      extra = _refineProps.extra;
    var metaRes = buildEventSourceMeta(refined, context);
    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: '',
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || '',
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }
  return null;
}
function buildEventSourceRefiners(context) {
  return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  for (var i = defs.length - 1; i >= 0; i -= 1) {
    // later-added plugins take precedence
    var def = defs[i];
    var meta = def.parseMeta(raw);
    if (meta) {
      return {
        sourceDefId: i,
        meta: meta
      };
    }
  }
  return null;
}
function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      // raw
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
    case 'RESET_RAW_EVENTS':
      return resetRawEvents(eventStore, eventSources[action.sourceId], action.rawEvents, dateProfile.activeRange, context);
    case 'ADD_EVENTS':
      // already parsed, but not expanded
      return addEvent(eventStore, action.eventStore,
      // new ones
      dateProfile ? dateProfile.activeRange : null, context);
    case 'RESET_EVENTS':
      return action.eventStore;
    case 'MERGE_EVENTS':
      // already parsed and expanded
      return mergeEventStores(eventStore, action.eventStore);
    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }
      return eventStore;
    case 'REMOVE_EVENTS':
      return excludeSubEventStore(eventStore, action.eventStore);
    case 'REMOVE_EVENT_SOURCE':
      return excludeEventsBySourceId(eventStore, action.sourceId);
    case 'REMOVE_ALL_EVENT_SOURCES':
      return filterEventStoreDefs(eventStore, function (eventDef) {
        return !eventDef.sourceId // only keep events with no source id
        ;
      });
    case 'REMOVE_ALL_EVENTS':
      return createEmptyEventStore();
    default:
      return eventStore;
  }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource &&
  // not already removed
  fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
  ) {
    var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }
    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }
  return eventStore;
}
function resetRawEvents(existingEventStore, eventSource, rawEvents, activeRange, context) {
  var _buildPublicIdMaps = buildPublicIdMaps(existingEventStore),
    defIdMap = _buildPublicIdMaps.defIdMap,
    instanceIdMap = _buildPublicIdMaps.instanceIdMap;
  var newEventStore = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context, false, defIdMap, instanceIdMap);
  return expandRecurring(newEventStore, activeRange, context);
}
function transformRawEvents(rawEvents, eventSource, context) {
  var calEachTransform = context.options.eventDataTransform;
  var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }
  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }
  return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
  var refinedEvents;
  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];
    var _iterator8 = _createForOfIteratorHelper(rawEvents),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var rawEvent = _step8.value;
        var refinedEvent = func(rawEvent);
        if (refinedEvent) {
          refinedEvents.push(refinedEvent);
        } else if (refinedEvent == null) {
          refinedEvents.push(rawEvent);
        } // if a different falsy value, do nothing
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
  }
  return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }
  return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  var defs = eventStore.defs;
  var instances = mapHash(eventStore.instances, function (instance) {
    var def = defs[instance.defId];
    if (def.allDay) {
      return instance; // isn't dependent on timezone
    }
    return Object.assign(Object.assign({}, instance), {
      range: {
        start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
        end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
      },
      forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo,
      forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo
    });
  });
  return {
    defs: defs,
    instances: instances
  };
}
function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, function (eventDef) {
    return eventDef.sourceId !== sourceId;
  });
}
// QUESTION: why not just return instances? do a general object-property-exclusion util
function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, function (instance) {
      return !removals[instance.instanceId];
    })
  };
}
function buildPublicIdMaps(eventStore) {
  var defs = eventStore.defs,
    instances = eventStore.instances;
  var defIdMap = {};
  var instanceIdMap = {};
  for (var defId in defs) {
    var def = defs[defId];
    var publicId = def.publicId;
    if (publicId) {
      defIdMap[publicId] = defId;
    }
  }
  for (var instanceId in instances) {
    var instance = instances[instanceId];
    var _def2 = defs[instance.defId];
    var _publicId = _def2.publicId;
    if (_publicId) {
      instanceIdMap[_publicId] = instanceId;
    }
  }
  return {
    defIdMap: defIdMap,
    instanceIdMap: instanceIdMap
  };
}
var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
    this.handlers = {};
    this.thisContext = null;
  }
  _createClass(Emitter, [{
    key: "setThisContext",
    value: function setThisContext(thisContext) {
      this.thisContext = thisContext;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "on",
    value: function on(type, handler) {
      addToHash(this.handlers, type, handler);
    }
  }, {
    key: "off",
    value: function off(type, handler) {
      removeFromHash(this.handlers, type, handler);
    }
  }, {
    key: "trigger",
    value: function trigger(type) {
      var attachedHandlers = this.handlers[type] || [];
      var optionHandler = this.options && this.options[type];
      var handlers = [].concat(optionHandler || [], attachedHandlers);
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key5 = 1; _key5 < _len2; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }
      var _iterator9 = _createForOfIteratorHelper(handlers),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var handler = _step9.value;
          handler.apply(this.thisContext, args);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "hasHandlers",
    value: function hasHandlers(type) {
      return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
    }
  }]);
  return Emitter;
}();
function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}
function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(function (func) {
        return func !== handler;
      });
    }
  } else {
    delete hash[type]; // remove all handler funcs for this type
  }
}
var DEF_DEFAULTS = {
  startTime: '09:00',
  endTime: '17:00',
  daysOfWeek: [1, 2, 3, 4, 5],
  display: 'inverse-background',
  classNames: 'fc-non-business',
  groupId: '_businessHours' // so multiple defs get grouped
};
/*
TODO: pass around as EventDefHash!!!
*/
function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
  var rawDefs;
  if (input === true) {
    rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
  } else if (Array.isArray(input)) {
    // if specifying an array, every sub-definition NEEDS a day-of-week
    rawDefs = input.filter(function (rawDef) {
      return rawDef.daysOfWeek;
    });
  } else if (_typeof(input) === 'object' && input) {
    // non-null object
    rawDefs = [input];
  } else {
    // is probably false
    rawDefs = [];
  }
  rawDefs = rawDefs.map(function (rawDef) {
    return Object.assign(Object.assign({}, DEF_DEFAULTS), rawDef);
  });
  return rawDefs;
}
function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger('select', Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  }));
}
function triggerDateUnselect(pev, context) {
  context.emitter.trigger('unselect', {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}
function buildDateSpanApiWithContext(dateSpan, context) {
  var props = {};
  var _iterator10 = _createForOfIteratorHelper(context.pluginHooks.dateSpanTransforms),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var transform = _step10.value;
      Object.assign(props, transform(dateSpan, context));
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
  return props;
}
// Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd
function getDefaultEventEnd(allDay, marker, context) {
  var dateEnv = context.dateEnv,
    options = context.options;
  var end = marker;
  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }
  return end;
}

// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  var dest = createEmptyEventStore();
  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }
  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var _def3 = dest.defs[instance.defId]; // important to grab the newly modified def
    dest.instances[instanceId] = applyMutationToEventInstance(instance, _def3, eventConfigs[instance.defId], mutation, context);
  }
  return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  var standardProps = mutation.standardProps || {};
  // if hasEnd has not been specified, guess a good value based on deltas.
  // if duration will change, there's no way the default duration will persist,
  // and thus, we need to mark the event as having a real end
  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true; // TODO: is this mutation okay?
  }
  var copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), {
    ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui)
  });
  if (mutation.extendedProps) {
    copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
  }
  var _iterator11 = _createForOfIteratorHelper(context.pluginHooks.eventDefMutationAppliers),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var applier = _step11.value;
      applier(copy, mutation, context);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }
  return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef,
// must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
  var dateEnv = context.dateEnv;
  var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
  var copy = Object.assign({}, eventInstance);
  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }
  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }
  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }
  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }
  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  }
  // in case event was all-day but the supplied deltas were not
  // better util for this?
  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  }
  // handle invalid durations
  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }
  return copy;
}
var EventSourceImpl = /*#__PURE__*/function () {
  function EventSourceImpl(context, internalEventSource) {
    _classCallCheck(this, EventSourceImpl);
    this.context = context;
    this.internalEventSource = internalEventSource;
  }
  _createClass(EventSourceImpl, [{
    key: "remove",
    value: function remove() {
      this.context.dispatch({
        type: 'REMOVE_EVENT_SOURCE',
        sourceId: this.internalEventSource.sourceId
      });
    }
  }, {
    key: "refetch",
    value: function refetch() {
      this.context.dispatch({
        type: 'FETCH_EVENT_SOURCES',
        sourceIds: [this.internalEventSource.sourceId],
        isRefetch: true
      });
    }
  }, {
    key: "id",
    get: function get() {
      return this.internalEventSource.publicId;
    }
  }, {
    key: "url",
    get: function get() {
      return this.internalEventSource.meta.url;
    }
  }, {
    key: "format",
    get: function get() {
      return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
    }
  }]);
  return EventSourceImpl;
}();
var EventImpl = /*#__PURE__*/function () {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  function EventImpl(context, def, instance) {
    _classCallCheck(this, EventImpl);
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */
  _createClass(EventImpl, [{
    key: "setProp",
    value: function setProp(name, val) {
      if (name in EVENT_DATE_REFINERS) {
        console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
        // TODO: make proper aliasing system?
      } else if (name === 'id') {
        val = EVENT_NON_DATE_REFINERS[name](val);
        this.mutate({
          standardProps: {
            publicId: val
          } // hardcoded internal name
        });
      } else if (name in EVENT_NON_DATE_REFINERS) {
        val = EVENT_NON_DATE_REFINERS[name](val);
        this.mutate({
          standardProps: _defineProperty({}, name, val)
        });
      } else if (name in EVENT_UI_REFINERS) {
        var ui = EVENT_UI_REFINERS[name](val);
        if (name === 'color') {
          ui = {
            backgroundColor: val,
            borderColor: val
          };
        } else if (name === 'editable') {
          ui = {
            startEditable: val,
            durationEditable: val
          };
        } else {
          ui = _defineProperty({}, name, val);
        }
        this.mutate({
          standardProps: {
            ui: ui
          }
        });
      } else {
        console.warn("Could not set prop '".concat(name, "'. Use setExtendedProp instead."));
      }
    }
  }, {
    key: "setExtendedProp",
    value: function setExtendedProp(name, val) {
      this.mutate({
        extendedProps: _defineProperty({}, name, val)
      });
    }
  }, {
    key: "setStart",
    value: function setStart(startInput) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var dateEnv = this._context.dateEnv;
      var start = dateEnv.createMarker(startInput);
      if (start && this._instance) {
        // TODO: warning if parsed bad
        var instanceRange = this._instance.range;
        var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
        if (options.maintainDuration) {
          this.mutate({
            datesDelta: startDelta
          });
        } else {
          this.mutate({
            startDelta: startDelta
          });
        }
      }
    }
  }, {
    key: "setEnd",
    value: function setEnd(endInput) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var dateEnv = this._context.dateEnv;
      var end;
      if (endInput != null) {
        end = dateEnv.createMarker(endInput);
        if (!end) {
          return; // TODO: warning if parsed bad
        }
      }
      if (this._instance) {
        if (end) {
          var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
          this.mutate({
            endDelta: endDelta
          });
        } else {
          this.mutate({
            standardProps: {
              hasEnd: false
            }
          });
        }
      }
    }
  }, {
    key: "setDates",
    value: function setDates(startInput, endInput) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var dateEnv = this._context.dateEnv;
      var standardProps = {
        allDay: options.allDay
      };
      var start = dateEnv.createMarker(startInput);
      var end;
      if (!start) {
        return; // TODO: warning if parsed bad
      }
      if (endInput != null) {
        end = dateEnv.createMarker(endInput);
        if (!end) {
          // TODO: warning if parsed bad
          return;
        }
      }
      if (this._instance) {
        var instanceRange = this._instance.range;
        // when computing the diff for an event being converted to all-day,
        // compute diff off of the all-day values the way event-mutation does.
        if (options.allDay === true) {
          instanceRange = computeAlignedDayRange(instanceRange);
        }
        var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
        if (end) {
          var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
          if (durationsEqual(startDelta, endDelta)) {
            this.mutate({
              datesDelta: startDelta,
              standardProps: standardProps
            });
          } else {
            this.mutate({
              startDelta: startDelta,
              endDelta: endDelta,
              standardProps: standardProps
            });
          }
        } else {
          // means "clear the end"
          standardProps.hasEnd = false;
          this.mutate({
            datesDelta: startDelta,
            standardProps: standardProps
          });
        }
      }
    }
  }, {
    key: "moveStart",
    value: function moveStart(deltaInput) {
      var delta = createDuration(deltaInput);
      if (delta) {
        // TODO: warning if parsed bad
        this.mutate({
          startDelta: delta
        });
      }
    }
  }, {
    key: "moveEnd",
    value: function moveEnd(deltaInput) {
      var delta = createDuration(deltaInput);
      if (delta) {
        // TODO: warning if parsed bad
        this.mutate({
          endDelta: delta
        });
      }
    }
  }, {
    key: "moveDates",
    value: function moveDates(deltaInput) {
      var delta = createDuration(deltaInput);
      if (delta) {
        // TODO: warning if parsed bad
        this.mutate({
          datesDelta: delta
        });
      }
    }
  }, {
    key: "setAllDay",
    value: function setAllDay(allDay) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var standardProps = {
        allDay: allDay
      };
      var maintainDuration = options.maintainDuration;
      if (maintainDuration == null) {
        maintainDuration = this._context.options.allDayMaintainDuration;
      }
      if (this._def.allDay !== allDay) {
        standardProps.hasEnd = maintainDuration;
      }
      this.mutate({
        standardProps: standardProps
      });
    }
  }, {
    key: "formatRange",
    value: function formatRange(formatInput) {
      var dateEnv = this._context.dateEnv;
      var instance = this._instance;
      var formatter = createFormatter(formatInput);
      if (this._def.hasEnd) {
        return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
          forcedStartTzo: instance.forcedStartTzo,
          forcedEndTzo: instance.forcedEndTzo
        });
      }
      return dateEnv.format(instance.range.start, formatter, {
        forcedTzo: instance.forcedStartTzo
      });
    }
  }, {
    key: "mutate",
    value: function mutate(mutation) {
      var instance = this._instance;
      if (instance) {
        var def = this._def;
        var context = this._context;
        var _context$getCurrentDa = context.getCurrentData(),
          eventStore = _context$getCurrentDa.eventStore;
        var relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
        var eventConfigBase = {
          '': {
            display: '',
            startEditable: true,
            durationEditable: true,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: '',
            borderColor: '',
            textColor: '',
            classNames: []
          }
        };
        relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
        var oldEvent = new EventImpl(context, def, instance); // snapshot
        this._def = relevantEvents.defs[def.defId];
        this._instance = relevantEvents.instances[instance.instanceId];
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: relevantEvents
        });
        context.emitter.trigger('eventChange', {
          oldEvent: oldEvent,
          event: this,
          relatedEvents: buildEventApis(relevantEvents, context, instance),
          revert: function revert() {
            context.dispatch({
              type: 'RESET_EVENTS',
              eventStore: eventStore // the ORIGINAL store
            });
          }
        });
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      var context = this._context;
      var asStore = eventApiToStore(this);
      context.dispatch({
        type: 'REMOVE_EVENTS',
        eventStore: asStore
      });
      context.emitter.trigger('eventRemove', {
        event: this,
        relatedEvents: [],
        revert: function revert() {
          context.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: asStore
          });
        }
      });
    }
  }, {
    key: "source",
    get: function get() {
      var sourceId = this._def.sourceId;
      if (sourceId) {
        return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
      }
      return null;
    }
  }, {
    key: "start",
    get: function get() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    }
  }, {
    key: "end",
    get: function get() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    }
  }, {
    key: "startStr",
    get: function get() {
      var instance = this._instance;
      if (instance) {
        return this._context.dateEnv.formatIso(instance.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedStartTzo
        });
      }
      return '';
    }
  }, {
    key: "endStr",
    get: function get() {
      var instance = this._instance;
      if (instance && this._def.hasEnd) {
        return this._context.dateEnv.formatIso(instance.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedEndTzo
        });
      }
      return '';
    }
    // computable props that all access the def
    // TODO: find a TypeScript-compatible way to do this at scale
  }, {
    key: "id",
    get: function get() {
      return this._def.publicId;
    }
  }, {
    key: "groupId",
    get: function get() {
      return this._def.groupId;
    }
  }, {
    key: "allDay",
    get: function get() {
      return this._def.allDay;
    }
  }, {
    key: "title",
    get: function get() {
      return this._def.title;
    }
  }, {
    key: "url",
    get: function get() {
      return this._def.url;
    }
  }, {
    key: "display",
    get: function get() {
      return this._def.ui.display || 'auto';
    } // bad. just normalize the type earlier
  }, {
    key: "startEditable",
    get: function get() {
      return this._def.ui.startEditable;
    }
  }, {
    key: "durationEditable",
    get: function get() {
      return this._def.ui.durationEditable;
    }
  }, {
    key: "constraint",
    get: function get() {
      return this._def.ui.constraints[0] || null;
    }
  }, {
    key: "overlap",
    get: function get() {
      return this._def.ui.overlap;
    }
  }, {
    key: "allow",
    get: function get() {
      return this._def.ui.allows[0] || null;
    }
  }, {
    key: "backgroundColor",
    get: function get() {
      return this._def.ui.backgroundColor;
    }
  }, {
    key: "borderColor",
    get: function get() {
      return this._def.ui.borderColor;
    }
  }, {
    key: "textColor",
    get: function get() {
      return this._def.ui.textColor;
    }
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
  }, {
    key: "classNames",
    get: function get() {
      return this._def.ui.classNames;
    }
  }, {
    key: "extendedProps",
    get: function get() {
      return this._def.extendedProps;
    }
  }, {
    key: "toPlainObject",
    value: function toPlainObject() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var def = this._def;
      var ui = def.ui;
      var startStr = this.startStr,
        endStr = this.endStr;
      var res = {
        allDay: def.allDay
      };
      if (def.title) {
        res.title = def.title;
      }
      if (startStr) {
        res.start = startStr;
      }
      if (endStr) {
        res.end = endStr;
      }
      if (def.publicId) {
        res.id = def.publicId;
      }
      if (def.groupId) {
        res.groupId = def.groupId;
      }
      if (def.url) {
        res.url = def.url;
      }
      if (ui.display && ui.display !== 'auto') {
        res.display = ui.display;
      }
      // TODO: what about recurring-event properties???
      // TODO: include startEditable/durationEditable/constraint/overlap/allow
      if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
        res.color = ui.backgroundColor;
      } else {
        if (ui.backgroundColor) {
          res.backgroundColor = ui.backgroundColor;
        }
        if (ui.borderColor) {
          res.borderColor = ui.borderColor;
        }
      }
      if (ui.textColor) {
        res.textColor = ui.textColor;
      }
      if (ui.classNames.length) {
        res.classNames = ui.classNames;
      }
      if (Object.keys(def.extendedProps).length) {
        if (settings.collapseExtendedProps) {
          Object.assign(res, def.extendedProps);
        } else {
          res.extendedProps = def.extendedProps;
        }
      }
      return res;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toPlainObject();
    }
  }]);
  return EventImpl;
}();
function eventApiToStore(eventApi) {
  var def = eventApi._def;
  var instance = eventApi._instance;
  return {
    defs: _defineProperty({}, def.defId, def),
    instances: instance ? _defineProperty({}, instance.instanceId, instance) : {}
  };
}
function buildEventApis(eventStore, context, excludeInstance) {
  var defs = eventStore.defs,
    instances = eventStore.instances;
  var eventApis = [];
  var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
  for (var id in instances) {
    var instance = instances[id];
    var def = defs[instance.defId];
    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventImpl(context, def, instance));
    }
  }
  return eventApis;
}

/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  var inverseBgByGroupId = {};
  var inverseBgByDefId = {};
  var defByGroupId = {};
  var bgRanges = [];
  var fgRanges = [];
  var eventUis = compileEventUis(eventStore.defs, eventUiBases);
  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    var ui = eventUis[def.defId];
    if (ui.display === 'inverse-background') {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];
        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }
  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var _def4 = eventStore.defs[instance.defId];
    var _ui2 = eventUis[_def4.defId];
    var origRange = instance.range;
    var normalRange = !_def4.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    var slicedRange = intersectRanges(normalRange, framingRange);
    if (slicedRange) {
      if (_ui2.display === 'inverse-background') {
        if (_def4.groupId) {
          inverseBgByGroupId[_def4.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (_ui2.display !== 'none') {
        (_ui2.display === 'background' ? bgRanges : fgRanges).push({
          def: _def4,
          ui: _ui2,
          instance: instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }
  for (var groupId in inverseBgByGroupId) {
    // BY GROUP
    var ranges = inverseBgByGroupId[groupId];
    var invertedRanges = invertRanges(ranges, framingRange);
    var _iterator12 = _createForOfIteratorHelper(invertedRanges),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var invertedRange = _step12.value;
        var _def5 = defByGroupId[groupId];
        var _ui3 = eventUis[_def5.defId];
        bgRanges.push({
          def: _def5,
          ui: _ui3,
          instance: null,
          range: invertedRange,
          isStart: false,
          isEnd: false
        });
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  }
  for (var _defId in inverseBgByDefId) {
    var _ranges = inverseBgByDefId[_defId];
    var _invertedRanges = invertRanges(_ranges, framingRange);
    var _iterator13 = _createForOfIteratorHelper(_invertedRanges),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _invertedRange = _step13.value;
        bgRanges.push({
          def: eventStore.defs[_defId],
          ui: eventUis[_defId],
          instance: null,
          range: _invertedRange,
          isStart: false,
          isEnd: false
        });
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
  }
  return {
    bg: bgRanges,
    fg: fgRanges
  };
}
function hasBgRendering(def) {
  return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}
function setElSeg(el, seg) {
  el.fcSeg = seg;
}
function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg ||
  // for the harness
  null;
}
// event ui computation
function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, function (eventDef) {
    return compileEventUi(eventDef, eventUiBases);
  });
}
function compileEventUi(eventDef, eventUiBases) {
  var uis = [];
  if (eventUiBases['']) {
    uis.push(eventUiBases['']);
  }
  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }
  uis.push(eventDef.ui);
  return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
  var objs = segs.map(buildSegCompareObj);
  objs.sort(function (obj0, obj1) {
    return compareByFieldSpecs(obj0, obj1, eventOrderSpecs);
  });
  return objs.map(function (c) {
    return c._seg;
  });
}
// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg) {
  var eventRange = seg.eventRange;
  var eventDef = eventRange.def;
  var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
  var end = range.end ? range.end.valueOf() : 0; // "
  return Object.assign(Object.assign(Object.assign({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start: start,
    end: end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}
function computeSegDraggable(seg, context) {
  var pluginHooks = context.pluginHooks;
  var transformers = pluginHooks.isDraggableTransformers;
  var _seg$eventRange = seg.eventRange,
    def = _seg$eventRange.def,
    ui = _seg$eventRange.ui;
  var val = ui.startEditable;
  var _iterator14 = _createForOfIteratorHelper(transformers),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var transformer = _step14.value;
      val = transformer(val, def, ui, context);
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
  return val;
}
function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime,
// defaults to true
defaultDisplayEventEnd,
// defaults to true
startOverride, endOverride) {
  var dateEnv = context.dateEnv,
    options = context.options;
  var displayEventTime = options.displayEventTime,
    displayEventEnd = options.displayEventEnd;
  var eventDef = seg.eventRange.def;
  var eventInstance = seg.eventRange.instance;
  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }
  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }
  var wholeEventStart = eventInstance.range.start;
  var wholeEventEnd = eventInstance.range.end;
  var segStart = startOverride || seg.start || seg.eventRange.range.start;
  var segEnd = endOverride || seg.end || seg.eventRange.range.end;
  var isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  var isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;
    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }
    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo // nooooo, same
    });
  }
  return '';
}
function getSegMeta(seg, todayRange, nowDate) {
  var segRange = seg.eventRange.range;
  return {
    isPast: segRange.end <= (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}
function getEventClassNames(props) {
  var classNames = ['fc-event'];
  if (props.isMirror) {
    classNames.push('fc-event-mirror');
  }
  if (props.isDraggable) {
    classNames.push('fc-event-draggable');
  }
  if (props.isStartResizable || props.isEndResizable) {
    classNames.push('fc-event-resizable');
  }
  if (props.isDragging) {
    classNames.push('fc-event-dragging');
  }
  if (props.isResizing) {
    classNames.push('fc-event-resizing');
  }
  if (props.isSelected) {
    classNames.push('fc-event-selected');
  }
  if (props.isStart) {
    classNames.push('fc-event-start');
  }
  if (props.isEnd) {
    classNames.push('fc-event-end');
  }
  if (props.isPast) {
    classNames.push('fc-event-past');
  }
  if (props.isToday) {
    classNames.push('fc-event-today');
  }
  if (props.isFuture) {
    classNames.push('fc-event-future');
  }
  return classNames;
}
function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : "".concat(eventRange.def.defId, ":").concat(eventRange.range.start.toISOString());
  // inverse-background events don't have specific instances. TODO: better solution
}
function getSegAnchorAttrs(seg, context) {
  var _seg$eventRange2 = seg.eventRange,
    def = _seg$eventRange2.def,
    instance = _seg$eventRange2.instance;
  var url = def.url;
  if (url) {
    return {
      href: url
    };
  }
  var emitter = context.emitter,
    options = context.options;
  var eventInteractive = options.eventInteractive;
  if (eventInteractive == null) {
    eventInteractive = def.interactive;
    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
    }
  }
  // mock what happens in EventClicking
  if (eventInteractive) {
    // only attach keyboard-related handlers because click handler is already done in EventClicking
    return createAriaKeyboardAttrs(function (ev) {
      emitter.trigger('eventClick', {
        el: ev.target,
        event: new EventImpl(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
  }
  return {};
}
var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
  var span = parseOpenDateSpan(raw, dateEnv);
  var range = span.range;
  if (!range.start) {
    return null;
  }
  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }
    range.end = dateEnv.add(range.start, defaultDuration);
  }
  return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/
function parseOpenDateSpan(raw, dateEnv) {
  var _refineProps2 = refineProps(raw, STANDARD_PROPS),
    standardProps = _refineProps2.refined,
    extra = _refineProps2.extra;
  var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  var allDay = standardProps.allDay;
  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }
  return Object.assign({
    range: {
      start: startMeta ? startMeta.marker : null,
      end: endMeta ? endMeta.marker : null
    },
    allDay: allDay
  }, extra);
}
function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
}
// the NON-DATE-RELATED props
function isSpanPropsEqual(span0, span1) {
  for (var propName in span1) {
    if (propName !== 'range' && propName !== 'allDay') {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  }
  // are there any props that span0 has that span1 DOESN'T have?
  // both have range/allDay, so no need to special-case.
  for (var _propName2 in span0) {
    if (!(_propName2 in span1)) {
      return false;
    }
  }
  return true;
}
function buildDateSpanApi(span, dateEnv) {
  return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), {
    allDay: span.allDay
  });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), {
    timeZone: dateEnv.timeZone
  });
}
function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, {
      omitTime: omitTime
    }),
    endStr: dateEnv.formatIso(range.end, {
      omitTime: omitTime
    })
  };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
  var res = refineEventDef({
    editable: false
  }, context);
  var def = parseEventDef(res.refined, res.extra, '',
  // sourceId
  dateSpan.allDay, true,
  // hasEnd
  context);
  return {
    def: def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}

/*
given a function that resolves a result asynchronously.
the function can either call passed-in success and failure callbacks,
or it can return a promise.
if you need to pass additional params to func, bind them first.
*/
function unpromisify(func, normalizedSuccessCallback, normalizedFailureCallback) {
  // guard against success/failure callbacks being called more than once
  // and guard against a promise AND callback being used together.
  var isResolved = false;
  var wrappedSuccess = function wrappedSuccess(res) {
    if (!isResolved) {
      isResolved = true;
      normalizedSuccessCallback(res);
    }
  };
  var wrappedFailure = function wrappedFailure(error) {
    if (!isResolved) {
      isResolved = true;
      normalizedFailureCallback(error);
    }
  };
  var res = func(wrappedSuccess, wrappedFailure);
  if (res && typeof res.then === 'function') {
    res.then(wrappedSuccess, wrappedFailure);
  }
}
var JsonRequestError = /*#__PURE__*/function (_Error) {
  _inherits(JsonRequestError, _Error);
  function JsonRequestError(message, response) {
    var _this8;
    _classCallCheck(this, JsonRequestError);
    _this8 = _callSuper(this, JsonRequestError, [message]);
    _this8.response = response;
    return _this8;
  }
  return _createClass(JsonRequestError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
function requestJson(method, url, params) {
  method = method.toUpperCase();
  var fetchOptions = {
    method: method
  };
  if (method === 'GET') {
    url += (url.indexOf('?') === -1 ? '?' : '&') + new URLSearchParams(params);
  } else {
    fetchOptions.body = new URLSearchParams(params);
    fetchOptions.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  }
  return fetch(url, fetchOptions).then(function (fetchRes) {
    if (fetchRes.ok) {
      return fetchRes.json().then(function (parsedResponse) {
        return [parsedResponse, fetchRes];
      }, function () {
        throw new JsonRequestError('Failure parsing JSON', fetchRes);
      });
    } else {
      throw new JsonRequestError('Request failed', fetchRes);
    }
  });
}
var canVGrowWithinCell;
function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }
  return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
  // for SSR, because this function is call immediately at top-level
  // TODO: just make this logic execute top-level, immediately, instead of doing lazily
  if (typeof document === 'undefined') {
    return true;
  }
  var el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.left = '0px';
  el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
  el.querySelector('table').style.height = '100px';
  el.querySelector('div').style.height = '100%';
  document.body.appendChild(el);
  var div = el.querySelector('div');
  var possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}
var CalendarRoot = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(CalendarRoot, _BaseComponent3);
  function CalendarRoot() {
    var _this9;
    _classCallCheck(this, CalendarRoot);
    _this9 = _callSuper(this, CalendarRoot, arguments);
    _this9.state = {
      forPrint: false
    };
    _this9.handleBeforePrint = function () {
      flushSync(function () {
        _this9.setState({
          forPrint: true
        });
      });
    };
    _this9.handleAfterPrint = function () {
      flushSync(function () {
        _this9.setState({
          forPrint: false
        });
      });
    };
    return _this9;
  }
  _createClass(CalendarRoot, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var options = props.options;
      var forPrint = this.state.forPrint;
      var isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
      var height = !isHeightAuto && options.height != null ? options.height : '';
      var classNames = ['fc', forPrint ? 'fc-media-print' : 'fc-media-screen', "fc-direction-".concat(options.direction), props.theme.getClass('root')];
      if (!getCanVGrowWithinCell()) {
        classNames.push('fc-liquid-hack');
      }
      return props.children(classNames, height, isHeightAuto, forPrint);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var emitter = this.props.emitter;
      emitter.on('_beforeprint', this.handleBeforePrint);
      emitter.on('_afterprint', this.handleAfterPrint);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var emitter = this.props.emitter;
      emitter.off('_beforeprint', this.handleBeforePrint);
      emitter.off('_afterprint', this.handleAfterPrint);
    }
  }]);
  return CalendarRoot;
}(BaseComponent);
var Interaction = /*#__PURE__*/function () {
  function Interaction(settings) {
    _classCallCheck(this, Interaction);
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }
  _createClass(Interaction, [{
    key: "destroy",
    value: function destroy() {}
  }]);
  return Interaction;
}();
function parseInteractionSettings(component, input) {
  return {
    component: component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}
function interactionSettingsToStore(settings) {
  return _defineProperty({}, settings.component.uid, settings);
}
// global state
var interactionSettingsStore = {};
var CalendarImpl = /*#__PURE__*/function () {
  function CalendarImpl() {
    _classCallCheck(this, CalendarImpl);
  }
  _createClass(CalendarImpl, [{
    key: "getCurrentData",
    value: function getCurrentData() {
      return this.currentDataManager.getCurrentData();
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.currentDataManager.dispatch(action);
    }
  }, {
    key: "view",
    get: function get() {
      return this.getCurrentData().viewApi;
    }
  }, {
    key: "batchRendering",
    value: function batchRendering(callback) {
      callback();
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      this.trigger('_resize', true);
    }
    // Options
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "setOption",
    value: function setOption(name, val) {
      this.dispatch({
        type: 'SET_OPTION',
        optionName: name,
        rawOptionValue: val
      });
    }
  }, {
    key: "getOption",
    value: function getOption(name) {
      return this.currentDataManager.currentCalendarOptionsInput[name];
    }
  }, {
    key: "getAvailableLocaleCodes",
    value: function getAvailableLocaleCodes() {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }
    // Trigger
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "on",
    value: function on(handlerName, handler) {
      var currentDataManager = this.currentDataManager;
      if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
        currentDataManager.emitter.on(handlerName, handler);
      } else {
        console.warn("Unknown listener name '".concat(handlerName, "'"));
      }
    }
  }, {
    key: "off",
    value: function off(handlerName, handler) {
      this.currentDataManager.emitter.off(handlerName, handler);
    }
    // not meant for public use
  }, {
    key: "trigger",
    value: function trigger(handlerName) {
      var _this$currentDataMana;
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key6 = 1; _key6 < _len3; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }
      (_this$currentDataMana = this.currentDataManager.emitter).trigger.apply(_this$currentDataMana, [handlerName].concat(args));
    }
    // View
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "changeView",
    value: function changeView(viewType, dateOrRange) {
      var _this10 = this;
      this.batchRendering(function () {
        _this10.unselect();
        if (dateOrRange) {
          if (dateOrRange.start && dateOrRange.end) {
            // a range
            _this10.dispatch({
              type: 'CHANGE_VIEW_TYPE',
              viewType: viewType
            });
            _this10.dispatch({
              type: 'SET_OPTION',
              optionName: 'visibleRange',
              rawOptionValue: dateOrRange
            });
          } else {
            var _this10$getCurrentDat = _this10.getCurrentData(),
              dateEnv = _this10$getCurrentDat.dateEnv;
            _this10.dispatch({
              type: 'CHANGE_VIEW_TYPE',
              viewType: viewType,
              dateMarker: dateEnv.createMarker(dateOrRange)
            });
          }
        } else {
          _this10.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: viewType
          });
        }
      });
    }
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    // needs to change
  }, {
    key: "zoomTo",
    value: function zoomTo(dateMarker, viewType) {
      var state = this.getCurrentData();
      var spec;
      viewType = viewType || 'day'; // day is default zoom
      spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
      this.unselect();
      if (spec) {
        this.dispatch({
          type: 'CHANGE_VIEW_TYPE',
          viewType: spec.type,
          dateMarker: dateMarker
        });
      } else {
        this.dispatch({
          type: 'CHANGE_DATE',
          dateMarker: dateMarker
        });
      }
    }
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
  }, {
    key: "getUnitViewSpec",
    value: function getUnitViewSpec(unit) {
      var _this$getCurrentData = this.getCurrentData(),
        viewSpecs = _this$getCurrentData.viewSpecs,
        toolbarConfig = _this$getCurrentData.toolbarConfig;
      var viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
      var i;
      var spec;
      for (var viewType in viewSpecs) {
        viewTypes.push(viewType);
      }
      for (i = 0; i < viewTypes.length; i += 1) {
        spec = viewSpecs[viewTypes[i]];
        if (spec) {
          if (spec.singleUnit === unit) {
            return spec;
          }
        }
      }
      return null;
    }
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "prev",
    value: function prev() {
      this.unselect();
      this.dispatch({
        type: 'PREV'
      });
    }
  }, {
    key: "next",
    value: function next() {
      this.unselect();
      this.dispatch({
        type: 'NEXT'
      });
    }
  }, {
    key: "prevYear",
    value: function prevYear() {
      var state = this.getCurrentData();
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.addYears(state.currentDate, -1)
      });
    }
  }, {
    key: "nextYear",
    value: function nextYear() {
      var state = this.getCurrentData();
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.addYears(state.currentDate, 1)
      });
    }
  }, {
    key: "today",
    value: function today() {
      var state = this.getCurrentData();
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
      });
    }
  }, {
    key: "gotoDate",
    value: function gotoDate(zonedDateInput) {
      var state = this.getCurrentData();
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.createMarker(zonedDateInput)
      });
    }
  }, {
    key: "incrementDate",
    value: function incrementDate(deltaInput) {
      var state = this.getCurrentData();
      var delta = createDuration(deltaInput);
      if (delta) {
        // else, warn about invalid input?
        this.unselect();
        this.dispatch({
          type: 'CHANGE_DATE',
          dateMarker: state.dateEnv.add(state.currentDate, delta)
        });
      }
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var state = this.getCurrentData();
      return state.dateEnv.toDate(state.currentDate);
    }
    // Date Formatting Utils
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "formatDate",
    value: function formatDate(d, formatter) {
      var _this$getCurrentData2 = this.getCurrentData(),
        dateEnv = _this$getCurrentData2.dateEnv;
      return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
    }
    // `settings` is for formatter AND isEndExclusive
  }, {
    key: "formatRange",
    value: function formatRange(d0, d1, settings) {
      var _this$getCurrentData3 = this.getCurrentData(),
        dateEnv = _this$getCurrentData3.dateEnv;
      return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
    }
  }, {
    key: "formatIso",
    value: function formatIso(d, omitTime) {
      var _this$getCurrentData4 = this.getCurrentData(),
        dateEnv = _this$getCurrentData4.dateEnv;
      return dateEnv.formatIso(dateEnv.createMarker(d), {
        omitTime: omitTime
      });
    }
    // Date Selection / Event Selection / DayClick
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "select",
    value: function select(dateOrObj, endDate) {
      var selectionInput;
      if (endDate == null) {
        if (dateOrObj.start != null) {
          selectionInput = dateOrObj;
        } else {
          selectionInput = {
            start: dateOrObj,
            end: null
          };
        }
      } else {
        selectionInput = {
          start: dateOrObj,
          end: endDate
        };
      }
      var state = this.getCurrentData();
      var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({
        days: 1
      }));
      if (selection) {
        // throw parse error otherwise?
        this.dispatch({
          type: 'SELECT_DATES',
          selection: selection
        });
        triggerDateSelect(selection, null, state);
      }
    }
  }, {
    key: "unselect",
    value: function unselect(pev) {
      var state = this.getCurrentData();
      if (state.dateSelection) {
        this.dispatch({
          type: 'UNSELECT_DATES'
        });
        triggerDateUnselect(pev, state);
      }
    }
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "addEvent",
    value: function addEvent(eventInput, sourceInput) {
      if (eventInput instanceof EventImpl) {
        var def = eventInput._def;
        var instance = eventInput._instance;
        var currentData = this.getCurrentData();
        // not already present? don't want to add an old snapshot
        if (!currentData.eventStore.defs[def.defId]) {
          this.dispatch({
            type: 'ADD_EVENTS',
            eventStore: eventTupleToStore({
              def: def,
              instance: instance
            }) // TODO: better util for two args?
          });
          this.triggerEventAdd(eventInput);
        }
        return eventInput;
      }
      var state = this.getCurrentData();
      var eventSource;
      if (sourceInput instanceof EventSourceImpl) {
        eventSource = sourceInput.internalEventSource;
      } else if (typeof sourceInput === 'boolean') {
        if (sourceInput) {
          // true. part of the first event source
          var _hashValuesToArray = hashValuesToArray(state.eventSources);
          var _hashValuesToArray2 = _slicedToArray(_hashValuesToArray, 1);
          eventSource = _hashValuesToArray2[0];
        }
      } else if (sourceInput != null) {
        // an ID. accepts a number too
        var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
        if (!sourceApi) {
          console.warn("Could not find an event source with ID \"".concat(sourceInput, "\"")); // TODO: test
          return null;
        }
        eventSource = sourceApi.internalEventSource;
      }
      var tuple = parseEvent(eventInput, eventSource, state, false);
      if (tuple) {
        var newEventApi = new EventImpl(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
        this.dispatch({
          type: 'ADD_EVENTS',
          eventStore: eventTupleToStore(tuple)
        });
        this.triggerEventAdd(newEventApi);
        return newEventApi;
      }
      return null;
    }
  }, {
    key: "triggerEventAdd",
    value: function triggerEventAdd(eventApi) {
      var _this11 = this;
      var _this$getCurrentData5 = this.getCurrentData(),
        emitter = _this$getCurrentData5.emitter;
      emitter.trigger('eventAdd', {
        event: eventApi,
        relatedEvents: [],
        revert: function revert() {
          _this11.dispatch({
            type: 'REMOVE_EVENTS',
            eventStore: eventApiToStore(eventApi)
          });
        }
      });
    }
    // TODO: optimize
  }, {
    key: "getEventById",
    value: function getEventById(id) {
      var state = this.getCurrentData();
      var _state$eventStore = state.eventStore,
        defs = _state$eventStore.defs,
        instances = _state$eventStore.instances;
      id = String(id);
      for (var defId in defs) {
        var def = defs[defId];
        if (def.publicId === id) {
          if (def.recurringDef) {
            return new EventImpl(state, def, null);
          }
          for (var instanceId in instances) {
            var instance = instances[instanceId];
            if (instance.defId === def.defId) {
              return new EventImpl(state, def, instance);
            }
          }
        }
      }
      return null;
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      var currentData = this.getCurrentData();
      return buildEventApis(currentData.eventStore, currentData);
    }
  }, {
    key: "removeAllEvents",
    value: function removeAllEvents() {
      this.dispatch({
        type: 'REMOVE_ALL_EVENTS'
      });
    }
    // Public Event Sources API
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "getEventSources",
    value: function getEventSources() {
      var state = this.getCurrentData();
      var sourceHash = state.eventSources;
      var sourceApis = [];
      for (var internalId in sourceHash) {
        sourceApis.push(new EventSourceImpl(state, sourceHash[internalId]));
      }
      return sourceApis;
    }
  }, {
    key: "getEventSourceById",
    value: function getEventSourceById(id) {
      var state = this.getCurrentData();
      var sourceHash = state.eventSources;
      id = String(id);
      for (var sourceId in sourceHash) {
        if (sourceHash[sourceId].publicId === id) {
          return new EventSourceImpl(state, sourceHash[sourceId]);
        }
      }
      return null;
    }
  }, {
    key: "addEventSource",
    value: function addEventSource(sourceInput) {
      var state = this.getCurrentData();
      if (sourceInput instanceof EventSourceImpl) {
        // not already present? don't want to add an old snapshot
        if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
          this.dispatch({
            type: 'ADD_EVENT_SOURCES',
            sources: [sourceInput.internalEventSource]
          });
        }
        return sourceInput;
      }
      var eventSource = parseEventSource(sourceInput, state);
      if (eventSource) {
        // TODO: error otherwise?
        this.dispatch({
          type: 'ADD_EVENT_SOURCES',
          sources: [eventSource]
        });
        return new EventSourceImpl(state, eventSource);
      }
      return null;
    }
  }, {
    key: "removeAllEventSources",
    value: function removeAllEventSources() {
      this.dispatch({
        type: 'REMOVE_ALL_EVENT_SOURCES'
      });
    }
  }, {
    key: "refetchEvents",
    value: function refetchEvents() {
      this.dispatch({
        type: 'FETCH_EVENT_SOURCES',
        isRefetch: true
      });
    }
    // Scroll
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "scrollToTime",
    value: function scrollToTime(timeInput) {
      var time = createDuration(timeInput);
      if (time) {
        this.trigger('_scrollRequest', {
          time: time
        });
      }
    }
  }]);
  return CalendarImpl;
}();
function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
  var res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };
  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }
  return false;
}
function translateRect(rect, deltaX, deltaY) {
  return {
    left: rect.left + deltaX,
    right: rect.right + deltaX,
    top: rect.top + deltaY,
    bottom: rect.bottom + deltaY
  };
}
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
}
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
}
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}
var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
var Splitter = /*#__PURE__*/function () {
  function Splitter() {
    _classCallCheck(this, Splitter);
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {}; // TODO: typescript protection
  }
  _createClass(Splitter, [{
    key: "splitProps",
    value: function splitProps(props) {
      var _this12 = this;
      var keyInfos = this.getKeyInfo(props);
      var defKeys = this.getKeysForEventDefs(props.eventStore);
      var dateSelections = this.splitDateSelection(props.dateSelection);
      var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
      var eventStores = this.splitEventStore(props.eventStore, defKeys);
      var eventDrags = this.splitEventDrag(props.eventDrag);
      var eventResizes = this.splitEventResize(props.eventResize);
      var splitProps = {};
      this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
        return _this12.eventUiBuilders[key] || memoize(buildEventUiForKey);
      });
      for (var key in keyInfos) {
        var keyInfo = keyInfos[key];
        var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
        var buildEventUi = this.eventUiBuilders[key];
        splitProps[key] = {
          businessHours: keyInfo.businessHours || props.businessHours,
          dateSelection: dateSelections[key] || null,
          eventStore: eventStore,
          eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
          eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
          eventDrag: eventDrags[key] || null,
          eventResize: eventResizes[key] || null
        };
      }
      return splitProps;
    }
  }, {
    key: "_splitDateSpan",
    value: function _splitDateSpan(dateSpan) {
      var dateSpans = {};
      if (dateSpan) {
        var keys = this.getKeysForDateSpan(dateSpan);
        var _iterator15 = _createForOfIteratorHelper(keys),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var key = _step15.value;
            dateSpans[key] = dateSpan;
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
      return dateSpans;
    }
  }, {
    key: "_getKeysForEventDefs",
    value: function _getKeysForEventDefs(eventStore) {
      var _this13 = this;
      return mapHash(eventStore.defs, function (eventDef) {
        return _this13.getKeysForEventDef(eventDef);
      });
    }
  }, {
    key: "_splitEventStore",
    value: function _splitEventStore(eventStore, defKeys) {
      var defs = eventStore.defs,
        instances = eventStore.instances;
      var splitStores = {};
      for (var defId in defs) {
        var _iterator16 = _createForOfIteratorHelper(defKeys[defId]),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var key = _step16.value;
            if (!splitStores[key]) {
              splitStores[key] = createEmptyEventStore();
            }
            splitStores[key].defs[defId] = defs[defId];
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      }
      for (var instanceId in instances) {
        var instance = instances[instanceId];
        var _iterator17 = _createForOfIteratorHelper(defKeys[instance.defId]),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _key7 = _step17.value;
            if (splitStores[_key7]) {
              // must have already been created
              splitStores[_key7].instances[instanceId] = instance;
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }
      return splitStores;
    }
  }, {
    key: "_splitIndividualUi",
    value: function _splitIndividualUi(eventUiBases, defKeys) {
      var splitHashes = {};
      for (var defId in eventUiBases) {
        if (defId) {
          // not the '' key
          var _iterator18 = _createForOfIteratorHelper(defKeys[defId]),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var key = _step18.value;
              if (!splitHashes[key]) {
                splitHashes[key] = {};
              }
              splitHashes[key][defId] = eventUiBases[defId];
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }
      }
      return splitHashes;
    }
  }, {
    key: "_splitInteraction",
    value: function _splitInteraction(interaction) {
      var splitStates = {};
      if (interaction) {
        var affectedStores = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
        // can't rely on defKeys because event data is mutated
        var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
        var mutatedStores = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
        var populate = function populate(key) {
          if (!splitStates[key]) {
            splitStates[key] = {
              affectedEvents: affectedStores[key] || EMPTY_EVENT_STORE,
              mutatedEvents: mutatedStores[key] || EMPTY_EVENT_STORE,
              isEvent: interaction.isEvent
            };
          }
        };
        for (var key in affectedStores) {
          populate(key);
        }
        for (var _key8 in mutatedStores) {
          populate(_key8);
        }
      }
      return splitStates;
    }
  }]);
  return Splitter;
}();
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  var baseParts = [];
  if (allUi) {
    baseParts.push(allUi);
  }
  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }
  var stuff = {
    '': combineEventUis(baseParts)
  };
  if (individualUi) {
    Object.assign(stuff, individualUi);
  }
  return stuff;
}
function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}
function getDayClassNames(meta, theme) {
  var classNames = ['fc-day', "fc-day-".concat(DAY_IDS[meta.dow])];
  if (meta.isDisabled) {
    classNames.push('fc-day-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-day-today');
      classNames.push(theme.getClass('today'));
    }
    if (meta.isPast) {
      classNames.push('fc-day-past');
    }
    if (meta.isFuture) {
      classNames.push('fc-day-future');
    }
    if (meta.isOther) {
      classNames.push('fc-day-other');
    }
  }
  return classNames;
}
function getSlotClassNames(meta, theme) {
  var classNames = ['fc-slot', "fc-slot-".concat(DAY_IDS[meta.dow])];
  if (meta.isDisabled) {
    classNames.push('fc-slot-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-slot-today');
      classNames.push(theme.getClass('today'));
    }
    if (meta.isPast) {
      classNames.push('fc-slot-past');
    }
    if (meta.isFuture) {
      classNames.push('fc-slot-future');
    }
  }
  return classNames;
}
var DAY_FORMAT = createFormatter({
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
var WEEK_FORMAT = createFormatter({
  week: 'long'
});
function buildNavLinkAttrs(context, dateMarker) {
  var viewType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  var isTabbable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var dateEnv = context.dateEnv,
    options = context.options,
    calendarApi = context.calendarApi;
  var dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);
  if (options.navLinks) {
    var zonedDate = dateEnv.toDate(dateMarker);
    var handleInteraction = function handleInteraction(ev) {
      var customAction = viewType === 'day' ? options.navLinkDayClick : viewType === 'week' ? options.navLinkWeekClick : null;
      if (typeof customAction === 'function') {
        customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
      } else {
        if (typeof customAction === 'string') {
          viewType = customAction;
        }
        calendarApi.zoomTo(dateMarker, viewType);
      }
    };
    return Object.assign({
      title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr),
      'data-navlink': ''
    }, isTabbable ? createAriaClickAttrs(handleInteraction) : {
      onClick: handleInteraction
    });
  }
  return {
    'aria-label': dateStr
  };
}
var _isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }
  return _isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
  var outerEl = document.createElement('div');
  applyStyle(outerEl, {
    position: 'absolute',
    top: -1000,
    left: 0,
    border: 0,
    padding: 0,
    overflow: 'scroll',
    direction: 'rtl'
  });
  outerEl.innerHTML = '<div></div>';
  document.body.appendChild(outerEl);
  var innerEl = outerEl.firstChild;
  var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}
var _scrollbarWidths;
function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }
  return _scrollbarWidths;
}
function computeScrollbarWidths() {
  var el = document.createElement('div');
  el.style.overflow = 'scroll';
  el.style.position = 'absolute';
  el.style.top = '-9999px';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  var res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
}
// WARNING: will include border
function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}
function computeEdges(el) {
  var getPadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var computedStyle = window.getComputedStyle(el);
  var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  var badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!
  var scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  var scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  var res = {
    borderLeft: borderLeft,
    borderRight: borderRight,
    borderTop: borderTop,
    borderBottom: borderBottom,
    scrollbarBottom: scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };
  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') {
    // is the scrollbar on the left side?
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }
  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }
  return res;
}
function computeInnerRect(el) {
  var goWithinPadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var doFromWindowViewport = arguments.length > 2 ? arguments[2] : undefined;
  var outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  var edges = computeEdges(el, goWithinPadding);
  var res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };
  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }
  return res;
}
function computeRect(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset
  };
}
function computeClippedClientRect(el) {
  var clippingParents = getClippingParents(el);
  var rect = el.getBoundingClientRect();
  var _iterator19 = _createForOfIteratorHelper(clippingParents),
    _step19;
  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var clippingParent = _step19.value;
      var intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
      if (intersection) {
        rect = intersection;
      } else {
        return null;
      }
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
  return rect;
}
// does not return window
function getClippingParents(el) {
  var parents = [];
  while (el instanceof HTMLElement) {
    // will stop when gets to document or null
    var computedStyle = window.getComputedStyle(el);
    if (computedStyle.position === 'fixed') {
      break;
    }
    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }
    el = el.parentNode;
  }
  return parents;
}

/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/
var PositionCache = /*#__PURE__*/function () {
  function PositionCache(originEl, els, isHorizontal, isVertical) {
    _classCallCheck(this, PositionCache);
    this.els = els;
    var originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }
    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  }
  // Populates the left/right internal coordinate arrays
  _createClass(PositionCache, [{
    key: "buildElHorizontals",
    value: function buildElHorizontals(originClientLeft) {
      var lefts = [];
      var rights = [];
      var _iterator20 = _createForOfIteratorHelper(this.els),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var el = _step20.value;
          var rect = el.getBoundingClientRect();
          lefts.push(rect.left - originClientLeft);
          rights.push(rect.right - originClientLeft);
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
      this.lefts = lefts;
      this.rights = rights;
    }
    // Populates the top/bottom internal coordinate arrays
  }, {
    key: "buildElVerticals",
    value: function buildElVerticals(originClientTop) {
      var tops = [];
      var bottoms = [];
      var _iterator21 = _createForOfIteratorHelper(this.els),
        _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var el = _step21.value;
          var rect = el.getBoundingClientRect();
          tops.push(rect.top - originClientTop);
          bottoms.push(rect.bottom - originClientTop);
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
      this.tops = tops;
      this.bottoms = bottoms;
    }
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
  }, {
    key: "leftToIndex",
    value: function leftToIndex(leftPosition) {
      var lefts = this.lefts,
        rights = this.rights;
      var len = lefts.length;
      var i;
      for (i = 0; i < len; i += 1) {
        if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
          return i;
        }
      }
      return undefined; // TODO: better
    }
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
  }, {
    key: "topToIndex",
    value: function topToIndex(topPosition) {
      var tops = this.tops,
        bottoms = this.bottoms;
      var len = tops.length;
      var i;
      for (i = 0; i < len; i += 1) {
        if (topPosition >= tops[i] && topPosition < bottoms[i]) {
          return i;
        }
      }
      return undefined; // TODO: better
    }
    // Gets the width of the element at the given index
  }, {
    key: "getWidth",
    value: function getWidth(leftIndex) {
      return this.rights[leftIndex] - this.lefts[leftIndex];
    }
    // Gets the height of the element at the given index
  }, {
    key: "getHeight",
    value: function getHeight(topIndex) {
      return this.bottoms[topIndex] - this.tops[topIndex];
    }
  }, {
    key: "similarTo",
    value: function similarTo(otherCache) {
      return similarNumArrays(this.tops || [], otherCache.tops || []) && similarNumArrays(this.bottoms || [], otherCache.bottoms || []) && similarNumArrays(this.lefts || [], otherCache.lefts || []) && similarNumArrays(this.rights || [], otherCache.rights || []);
    }
  }]);
  return PositionCache;
}();
function similarNumArrays(a, b) {
  var len = a.length;
  if (len !== b.length) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (Math.round(a[i]) !== Math.round(b[i])) {
      return false;
    }
  }
  return true;
}

/* eslint max-classes-per-file: "off" */
/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/
var ScrollController = /*#__PURE__*/function () {
  function ScrollController() {
    _classCallCheck(this, ScrollController);
  }
  _createClass(ScrollController, [{
    key: "getMaxScrollTop",
    value: function getMaxScrollTop() {
      return this.getScrollHeight() - this.getClientHeight();
    }
  }, {
    key: "getMaxScrollLeft",
    value: function getMaxScrollLeft() {
      return this.getScrollWidth() - this.getClientWidth();
    }
  }, {
    key: "canScrollVertically",
    value: function canScrollVertically() {
      return this.getMaxScrollTop() > 0;
    }
  }, {
    key: "canScrollHorizontally",
    value: function canScrollHorizontally() {
      return this.getMaxScrollLeft() > 0;
    }
  }, {
    key: "canScrollUp",
    value: function canScrollUp() {
      return this.getScrollTop() > 0;
    }
  }, {
    key: "canScrollDown",
    value: function canScrollDown() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }
  }, {
    key: "canScrollLeft",
    value: function canScrollLeft() {
      return this.getScrollLeft() > 0;
    }
  }, {
    key: "canScrollRight",
    value: function canScrollRight() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }
  }]);
  return ScrollController;
}();
var ElementScrollController = /*#__PURE__*/function (_ScrollController) {
  _inherits(ElementScrollController, _ScrollController);
  function ElementScrollController(el) {
    var _this14;
    _classCallCheck(this, ElementScrollController);
    _this14 = _callSuper(this, ElementScrollController);
    _this14.el = el;
    return _this14;
  }
  _createClass(ElementScrollController, [{
    key: "getScrollTop",
    value: function getScrollTop() {
      return this.el.scrollTop;
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return this.el.scrollLeft;
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(top) {
      this.el.scrollTop = top;
    }
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(left) {
      this.el.scrollLeft = left;
    }
  }, {
    key: "getScrollWidth",
    value: function getScrollWidth() {
      return this.el.scrollWidth;
    }
  }, {
    key: "getScrollHeight",
    value: function getScrollHeight() {
      return this.el.scrollHeight;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight() {
      return this.el.clientHeight;
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth() {
      return this.el.clientWidth;
    }
  }]);
  return ElementScrollController;
}(ScrollController);
var WindowScrollController = /*#__PURE__*/function (_ScrollController2) {
  _inherits(WindowScrollController, _ScrollController2);
  function WindowScrollController() {
    _classCallCheck(this, WindowScrollController);
    return _callSuper(this, WindowScrollController, arguments);
  }
  _createClass(WindowScrollController, [{
    key: "getScrollTop",
    value: function getScrollTop() {
      return window.pageYOffset;
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return window.pageXOffset;
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(n) {
      window.scroll(window.pageXOffset, n);
    }
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(n) {
      window.scroll(n, window.pageYOffset);
    }
  }, {
    key: "getScrollWidth",
    value: function getScrollWidth() {
      return document.documentElement.scrollWidth;
    }
  }, {
    key: "getScrollHeight",
    value: function getScrollHeight() {
      return document.documentElement.scrollHeight;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight() {
      return document.documentElement.clientHeight;
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth() {
      return document.documentElement.clientWidth;
    }
  }]);
  return WindowScrollController;
}(ScrollController);
/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/
var DateComponent = /*#__PURE__*/function (_BaseComponent4) {
  _inherits(DateComponent, _BaseComponent4);
  function DateComponent() {
    var _this15;
    _classCallCheck(this, DateComponent);
    _this15 = _callSuper(this, DateComponent, arguments);
    _this15.uid = guid();
    return _this15;
  }
  // Hit System
  // -----------------------------------------------------------------------------------------------------------------
  _createClass(DateComponent, [{
    key: "prepareHits",
    value: function prepareHits() {}
  }, {
    key: "queryHit",
    value: function queryHit(positionLeft, positionTop, elWidth, elHeight) {
      return null; // this should be abstract
    }
    // Pointer Interaction Utils
    // -----------------------------------------------------------------------------------------------------------------
  }, {
    key: "isValidSegDownEl",
    value: function isValidSegDownEl(el) {
      return !this.props.eventDrag &&
      // HACK
      !this.props.eventResize &&
      // HACK
      !elementClosest(el, '.fc-event-mirror');
    }
  }, {
    key: "isValidDateDownEl",
    value: function isValidDateDownEl(el) {
      return !elementClosest(el, '.fc-event:not(.fc-bg-event)') && !elementClosest(el, '.fc-more-link') &&
      // a "more.." link
      !elementClosest(el, 'a[data-navlink]') &&
      // a clickable nav link
      !elementClosest(el, '.fc-popover'); // hack
    }
  }]);
  return DateComponent;
}(BaseComponent);
var NamedTimeZoneImpl = /*#__PURE__*/_createClass(function NamedTimeZoneImpl(timeZoneName) {
  _classCallCheck(this, NamedTimeZoneImpl);
  this.timeZoneName = timeZoneName;
});
var SegHierarchy = /*#__PURE__*/function () {
  function SegHierarchy() {
    var getEntryThickness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (entry) {
      // if no thickness known, assume 1 (if 0, so small it always fits)
      return entry.thickness || 1;
    };
    _classCallCheck(this, SegHierarchy);
    this.getEntryThickness = getEntryThickness;
    // settings
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1; // -1 means no max
    this.maxStackCnt = -1; // -1 means no max
    this.levelCoords = []; // ordered
    this.entriesByLevel = []; // parallel with levelCoords
    this.stackCnts = {}; // TODO: use better technique!?
  }
  _createClass(SegHierarchy, [{
    key: "addSegs",
    value: function addSegs(inputs) {
      var hiddenEntries = [];
      var _iterator22 = _createForOfIteratorHelper(inputs),
        _step22;
      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var input = _step22.value;
          this.insertEntry(input, hiddenEntries);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }
      return hiddenEntries;
    }
  }, {
    key: "insertEntry",
    value: function insertEntry(entry, hiddenEntries) {
      var insertion = this.findInsertion(entry);
      if (this.isInsertionValid(insertion, entry)) {
        this.insertEntryAt(entry, insertion);
      } else {
        this.handleInvalidInsertion(insertion, entry, hiddenEntries);
      }
    }
  }, {
    key: "isInsertionValid",
    value: function isInsertionValid(insertion, entry) {
      return (this.maxCoord === -1 || insertion.levelCoord + this.getEntryThickness(entry) <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
    }
  }, {
    key: "handleInvalidInsertion",
    value: function handleInvalidInsertion(insertion, entry, hiddenEntries) {
      if (this.allowReslicing && insertion.touchingEntry) {
        var hiddenEntry = Object.assign(Object.assign({}, entry), {
          span: intersectSpans(entry.span, insertion.touchingEntry.span)
        });
        hiddenEntries.push(hiddenEntry);
        this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
      } else {
        hiddenEntries.push(entry);
      }
    }
    /*
    Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
    */
  }, {
    key: "splitEntry",
    value: function splitEntry(entry, barrier, hiddenEntries) {
      var entrySpan = entry.span;
      var barrierSpan = barrier.span;
      if (entrySpan.start < barrierSpan.start) {
        this.insertEntry({
          index: entry.index,
          thickness: entry.thickness,
          span: {
            start: entrySpan.start,
            end: barrierSpan.start
          }
        }, hiddenEntries);
      }
      if (entrySpan.end > barrierSpan.end) {
        this.insertEntry({
          index: entry.index,
          thickness: entry.thickness,
          span: {
            start: barrierSpan.end,
            end: entrySpan.end
          }
        }, hiddenEntries);
      }
    }
  }, {
    key: "insertEntryAt",
    value: function insertEntryAt(entry, insertion) {
      var entriesByLevel = this.entriesByLevel,
        levelCoords = this.levelCoords;
      if (insertion.lateral === -1) {
        // create a new level
        insertAt(levelCoords, insertion.level, insertion.levelCoord);
        insertAt(entriesByLevel, insertion.level, [entry]);
      } else {
        // insert into existing level
        insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
      }
      this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
    }
    /*
    does not care about limits
    */
  }, {
    key: "findInsertion",
    value: function findInsertion(newEntry) {
      var levelCoords = this.levelCoords,
        entriesByLevel = this.entriesByLevel,
        strictOrder = this.strictOrder,
        stackCnts = this.stackCnts;
      var levelCnt = levelCoords.length;
      var candidateCoord = 0;
      var touchingLevel = -1;
      var touchingLateral = -1;
      var touchingEntry = null;
      var stackCnt = 0;
      for (var trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
        var trackingCoord = levelCoords[trackingLevel];
        // if the current level is past the placed entry, we have found a good empty space and can stop.
        // if strictOrder, keep finding more lateral intersections.
        if (!strictOrder && trackingCoord >= candidateCoord + this.getEntryThickness(newEntry)) {
          break;
        }
        var trackingEntries = entriesByLevel[trackingLevel];
        var trackingEntry = void 0;
        var searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end
        var lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
        while (
        // loop through entries that horizontally intersect
        (trackingEntry = trackingEntries[lateralIndex]) &&
        // but not past the whole entry list
        trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
        ) {
          var trackingEntryBottom = trackingCoord + this.getEntryThickness(trackingEntry);
          // intersects into the top of the candidate?
          if (trackingEntryBottom > candidateCoord) {
            candidateCoord = trackingEntryBottom;
            touchingEntry = trackingEntry;
            touchingLevel = trackingLevel;
            touchingLateral = lateralIndex;
          }
          // butts up against top of candidate? (will happen if just intersected as well)
          if (trackingEntryBottom === candidateCoord) {
            // accumulate the highest possible stackCnt of the trackingEntries that butt up
            stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
          }
          lateralIndex += 1;
        }
      }
      // the destination level will be after touchingEntry's level. find it
      var destLevel = 0;
      if (touchingEntry) {
        destLevel = touchingLevel + 1;
        while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
          destLevel += 1;
        }
      }
      // if adding to an existing level, find where to insert
      var destLateral = -1;
      if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
        destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
      }
      return {
        touchingLevel: touchingLevel,
        touchingLateral: touchingLateral,
        touchingEntry: touchingEntry,
        stackCnt: stackCnt,
        levelCoord: candidateCoord,
        level: destLevel,
        lateral: destLateral
      };
    }
    // sorted by levelCoord (lowest to highest)
  }, {
    key: "toRects",
    value: function toRects() {
      var entriesByLevel = this.entriesByLevel,
        levelCoords = this.levelCoords;
      var levelCnt = entriesByLevel.length;
      var rects = [];
      for (var level = 0; level < levelCnt; level += 1) {
        var entries = entriesByLevel[level];
        var levelCoord = levelCoords[level];
        var _iterator23 = _createForOfIteratorHelper(entries),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var entry = _step23.value;
            rects.push(Object.assign(Object.assign({}, entry), {
              thickness: this.getEntryThickness(entry),
              levelCoord: levelCoord
            }));
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
      return rects;
    }
  }]);
  return SegHierarchy;
}();
function getEntrySpanEnd(entry) {
  return entry.span.end;
}
function buildEntryKey(entry) {
  return entry.index + ':' + entry.span.start;
}
// returns groups with entries sorted by input order
function groupIntersectingEntries(entries) {
  var merges = [];
  var _iterator24 = _createForOfIteratorHelper(entries),
    _step24;
  try {
    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
      var entry = _step24.value;
      var filteredMerges = [];
      var hungryMerge = {
        span: entry.span,
        entries: [entry]
      };
      var _iterator25 = _createForOfIteratorHelper(merges),
        _step25;
      try {
        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
          var merge = _step25.value;
          if (intersectSpans(merge.span, hungryMerge.span)) {
            hungryMerge = {
              entries: merge.entries.concat(hungryMerge.entries),
              span: joinSpans(merge.span, hungryMerge.span)
            };
          } else {
            filteredMerges.push(merge);
          }
        }
      } catch (err) {
        _iterator25.e(err);
      } finally {
        _iterator25.f();
      }
      filteredMerges.push(hungryMerge);
      merges = filteredMerges;
    }
  } catch (err) {
    _iterator24.e(err);
  } finally {
    _iterator24.f();
  }
  return merges;
}
function joinSpans(span0, span1) {
  return {
    start: Math.min(span0.start, span1.start),
    end: Math.max(span0.end, span1.end)
  };
}
function intersectSpans(span0, span1) {
  var start = Math.max(span0.start, span1.start);
  var end = Math.min(span0.end, span1.end);
  if (start < end) {
    return {
      start: start,
      end: end
    };
  }
  return null;
}
// general util
// ---------------------------------------------------------------------------------------------------------------------
function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
}
function binarySearch(a, searchVal, getItemVal) {
  var startIndex = 0;
  var endIndex = a.length; // exclusive
  if (!endIndex || searchVal < getItemVal(a[startIndex])) {
    // no items OR before first item
    return [0, 0];
  }
  if (searchVal > getItemVal(a[endIndex - 1])) {
    // after last item
    return [endIndex, 0];
  }
  while (startIndex < endIndex) {
    var middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    var middleVal = getItemVal(a[middleIndex]);
    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      // equal!
      return [middleIndex, 1];
    }
  }
  return [startIndex, 0];
}

/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/
var ElementDragging = /*#__PURE__*/function () {
  function ElementDragging(el, selector) {
    _classCallCheck(this, ElementDragging);
    this.emitter = new Emitter();
  }
  _createClass(ElementDragging, [{
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "setMirrorIsVisible",
    value: function setMirrorIsVisible(bool) {
      // optional if subclass doesn't want to support a mirror
    }
  }, {
    key: "setMirrorNeedsRevert",
    value: function setMirrorNeedsRevert(bool) {
      // optional if subclass doesn't want to support a mirror
    }
  }, {
    key: "setAutoScrollEnabled",
    value: function setAutoScrollEnabled(bool) {
      // optional
    }
  }]);
  return ElementDragging;
}(); // TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.
var config = {};

/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/
var DRAG_META_REFINERS = {
  startTime: createDuration,
  duration: createDuration,
  create: Boolean,
  sourceId: String
};
function parseDragMeta(raw) {
  var _refineProps3 = refineProps(raw, DRAG_META_REFINERS),
    refined = _refineProps3.refined,
    extra = _refineProps3.extra;
  return {
    startTime: refined.startTime || null,
    duration: refined.duration || null,
    create: refined.create != null ? refined.create : true,
    sourceId: refined.sourceId,
    leftoverProps: extra
  };
}

// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  // if more than one week row, or if there are a lot of columns with not much space,
  // put just the day numbers will be in each cell
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({
      weekday: 'short'
    }); // "Sat"
  }
  if (dayCnt > 1) {
    return createFormatter({
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      omitCommas: true
    }); // "Sat 11/12"
  }
  return createFormatter({
    weekday: 'long'
  }); // "Saturday"
}
var CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no
function renderInner$1(renderProps) {
  return renderProps.text;
}

// BAD name for this class now. used in the Header
var TableDateCell = /*#__PURE__*/function (_BaseComponent5) {
  _inherits(TableDateCell, _BaseComponent5);
  function TableDateCell() {
    _classCallCheck(this, TableDateCell);
    return _callSuper(this, TableDateCell, arguments);
  }
  _createClass(TableDateCell, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
        dateEnv = _this$context.dateEnv,
        options = _this$context.options,
        theme = _this$context.theme,
        viewApi = _this$context.viewApi;
      var props = this.props;
      var date = props.date,
        dateProfile = props.dateProfile;
      var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
      var classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
      var text = dateEnv.format(date, props.dayHeaderFormat);
      // if colCnt is 1, we are already in a day-view and don't need a navlink
      var navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {};
      var renderProps = Object.assign(Object.assign(Object.assign({
        date: dateEnv.toDate(date),
        view: viewApi
      }, props.extraRenderProps), {
        text: text
      }), dayMeta);
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, {
        elTag: "th",
        elClasses: classNames,
        elAttrs: Object.assign({
          role: 'columnheader',
          colSpan: props.colSpan,
          'data-date': !dayMeta.isDisabled ? formatDayString(date) : undefined
        }, props.extraDataAttrs),
        renderProps: renderProps,
        generatorName: "dayHeaderContent",
        customGenerator: options.dayHeaderContent,
        defaultGenerator: renderInner$1,
        classNameGenerator: options.dayHeaderClassNames,
        didMount: options.dayHeaderDidMount,
        willUnmount: options.dayHeaderWillUnmount
      }, function (InnerContainer) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-scrollgrid-sync-inner"
        }, !dayMeta.isDisabled && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContainer, {
          elTag: "a",
          elAttrs: navLinkAttrs,
          elClasses: ['fc-col-header-cell-cushion', props.isSticky && 'fc-sticky']
        }));
      });
    }
  }]);
  return TableDateCell;
}(BaseComponent);
var WEEKDAY_FORMAT = createFormatter({
  weekday: 'long'
});
var TableDowCell = /*#__PURE__*/function (_BaseComponent6) {
  _inherits(TableDowCell, _BaseComponent6);
  function TableDowCell() {
    _classCallCheck(this, TableDowCell);
    return _callSuper(this, TableDowCell, arguments);
  }
  _createClass(TableDowCell, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var _this$context2 = this.context,
        dateEnv = _this$context2.dateEnv,
        theme = _this$context2.theme,
        viewApi = _this$context2.viewApi,
        options = _this$context2.options;
      var date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
      var dateMeta = {
        dow: props.dow,
        isDisabled: false,
        isFuture: false,
        isPast: false,
        isToday: false,
        isOther: false
      };
      var text = dateEnv.format(date, props.dayHeaderFormat);
      var renderProps = Object.assign(Object.assign(Object.assign(Object.assign({
        // TODO: make this public?
        date: date
      }, dateMeta), {
        view: viewApi
      }), props.extraRenderProps), {
        text: text
      });
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, {
        elTag: "th",
        elClasses: [CLASS_NAME].concat(_toConsumableArray(getDayClassNames(dateMeta, theme)), _toConsumableArray(props.extraClassNames || [])),
        elAttrs: Object.assign({
          role: 'columnheader',
          colSpan: props.colSpan
        }, props.extraDataAttrs),
        renderProps: renderProps,
        generatorName: "dayHeaderContent",
        customGenerator: options.dayHeaderContent,
        defaultGenerator: renderInner$1,
        classNameGenerator: options.dayHeaderClassNames,
        didMount: options.dayHeaderDidMount,
        willUnmount: options.dayHeaderWillUnmount
      }, function (InnerContent) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-scrollgrid-sync-inner"
        }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContent, {
          elTag: "a",
          elClasses: ['fc-col-header-cell-cushion', props.isSticky && 'fc-sticky'],
          elAttrs: {
            'aria-label': dateEnv.format(date, WEEKDAY_FORMAT)
          }
        }));
      });
    }
  }]);
  return TableDowCell;
}(BaseComponent);
var NowTimer = /*#__PURE__*/function (_Component3) {
  _inherits(NowTimer, _Component3);
  function NowTimer(props, context) {
    var _this16;
    _classCallCheck(this, NowTimer);
    _this16 = _callSuper(this, NowTimer, [props, context]);
    _this16.initialNowDate = getNow(context.options.now, context.dateEnv);
    _this16.initialNowQueriedMs = new Date().valueOf();
    _this16.state = _this16.computeTiming().currentState;
    return _this16;
  }
  _createClass(NowTimer, [{
    key: "render",
    value: function render() {
      var props = this.props,
        state = this.state;
      return props.children(state.nowDate, state.todayRange);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTimeout();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.unit !== this.props.unit) {
        this.clearTimeout();
        this.setTimeout();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearTimeout();
    }
  }, {
    key: "computeTiming",
    value: function computeTiming() {
      var props = this.props,
        context = this.context;
      var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
      var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
      var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
      var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
      // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
      // ensure no longer than a day
      waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
      return {
        currentState: {
          nowDate: currentUnitStart,
          todayRange: buildDayRange(currentUnitStart)
        },
        nextState: {
          nowDate: nextUnitStart,
          todayRange: buildDayRange(nextUnitStart)
        },
        waitMs: waitMs
      };
    }
  }, {
    key: "setTimeout",
    value: function (_setTimeout) {
      function setTimeout() {
        return _setTimeout.apply(this, arguments);
      }
      setTimeout.toString = function () {
        return _setTimeout.toString();
      };
      return setTimeout;
    }(function () {
      var _this17 = this;
      var _this$computeTiming = this.computeTiming(),
        nextState = _this$computeTiming.nextState,
        waitMs = _this$computeTiming.waitMs;
      this.timeoutId = setTimeout(function () {
        _this17.setState(nextState, function () {
          _this17.setTimeout();
        });
      }, waitMs);
    })
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout2) {
      function clearTimeout() {
        return _clearTimeout2.apply(this, arguments);
      }
      clearTimeout.toString = function () {
        return _clearTimeout2.toString();
      };
      return clearTimeout;
    }(function () {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    })
  }]);
  return NowTimer;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component);
NowTimer.contextType = ViewContextType;
function buildDayRange(date) {
  var start = startOfDay(date);
  var end = addDays(start, 1);
  return {
    start: start,
    end: end
  };
}
var DayHeader = /*#__PURE__*/function (_BaseComponent7) {
  _inherits(DayHeader, _BaseComponent7);
  function DayHeader() {
    var _this18;
    _classCallCheck(this, DayHeader);
    _this18 = _callSuper(this, DayHeader, arguments);
    _this18.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
    return _this18;
  }
  _createClass(DayHeader, [{
    key: "render",
    value: function render() {
      var context = this.context;
      var _this$props4 = this.props,
        dates = _this$props4.dates,
        dateProfile = _this$props4.dateProfile,
        datesRepDistinctDays = _this$props4.datesRepDistinctDays,
        renderIntro = _this$props4.renderIntro;
      var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(NowTimer, {
        unit: "day"
      }, function (nowDate, todayRange) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
          role: "row"
        }, renderIntro && renderIntro('day'), dates.map(function (date) {
          return datesRepDistinctDays ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableDateCell, {
            key: date.toISOString(),
            date: date,
            dateProfile: dateProfile,
            todayRange: todayRange,
            colCnt: dates.length,
            dayHeaderFormat: dayHeaderFormat
          }) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableDowCell, {
            key: date.getUTCDay(),
            dow: date.getUTCDay(),
            dayHeaderFormat: dayHeaderFormat
          });
        }));
      });
    }
  }]);
  return DayHeader;
}(BaseComponent);
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}
var DaySeriesModel = /*#__PURE__*/function () {
  function DaySeriesModel(range, dateProfileGenerator) {
    _classCallCheck(this, DaySeriesModel);
    var date = range.start;
    var end = range.end;
    var indices = [];
    var dates = [];
    var dayIndex = -1;
    while (date < end) {
      // loop each day from start to end
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5); // mark that it's between indices
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }
      date = addDays(date, 1);
    }
    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }
  _createClass(DaySeriesModel, [{
    key: "sliceRange",
    value: function sliceRange(range) {
      var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
      var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
      var clippedFirstIndex = Math.max(0, firstIndex);
      var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
      // deal with in-between indices
      clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
      clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
      if (clippedFirstIndex <= clippedLastIndex) {
        return {
          firstIndex: clippedFirstIndex,
          lastIndex: clippedLastIndex,
          isStart: firstIndex === clippedFirstIndex,
          isEnd: lastIndex === clippedLastIndex
        };
      }
      return null;
    }
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  }, {
    key: "getDateDayIndex",
    value: function getDateDayIndex(date) {
      var indices = this.indices;
      var dayOffset = Math.floor(diffDays(this.dates[0], date));
      if (dayOffset < 0) {
        return indices[0] - 1;
      }
      if (dayOffset >= indices.length) {
        return indices[indices.length - 1] + 1;
      }
      return indices[dayOffset];
    }
  }]);
  return DaySeriesModel;
}();
var DayTableModel = /*#__PURE__*/function () {
  function DayTableModel(daySeries, breakOnWeeks) {
    _classCallCheck(this, DayTableModel);
    var dates = daySeries.dates;
    var daysPerRow;
    var firstDay;
    var rowCnt;
    if (breakOnWeeks) {
      // count columns until the day-of-week repeats
      firstDay = dates[0].getUTCDay();
      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }
      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }
    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }
  _createClass(DayTableModel, [{
    key: "buildCells",
    value: function buildCells() {
      var rows = [];
      for (var row = 0; row < this.rowCnt; row += 1) {
        var cells = [];
        for (var col = 0; col < this.colCnt; col += 1) {
          cells.push(this.buildCell(row, col));
        }
        rows.push(cells);
      }
      return rows;
    }
  }, {
    key: "buildCell",
    value: function buildCell(row, col) {
      var date = this.daySeries.dates[row * this.colCnt + col];
      return {
        key: date.toISOString(),
        date: date
      };
    }
  }, {
    key: "buildHeaderDates",
    value: function buildHeaderDates() {
      var dates = [];
      for (var col = 0; col < this.colCnt; col += 1) {
        dates.push(this.cells[0][col].date);
      }
      return dates;
    }
  }, {
    key: "sliceRange",
    value: function sliceRange(range) {
      var colCnt = this.colCnt;
      var seriesSeg = this.daySeries.sliceRange(range);
      var segs = [];
      if (seriesSeg) {
        var firstIndex = seriesSeg.firstIndex,
          lastIndex = seriesSeg.lastIndex;
        var index = firstIndex;
        while (index <= lastIndex) {
          var row = Math.floor(index / colCnt);
          var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
          segs.push({
            row: row,
            firstCol: index % colCnt,
            lastCol: (nextIndex - 1) % colCnt,
            isStart: seriesSeg.isStart && index === firstIndex,
            isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
          });
          index = nextIndex;
        }
      }
      return segs;
    }
  }]);
  return DayTableModel;
}();
var Slicer = /*#__PURE__*/function () {
  function Slicer() {
    _classCallCheck(this, Slicer);
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false; // hack
  }
  _createClass(Slicer, [{
    key: "sliceProps",
    value: function sliceProps(props, dateProfile, nextDayThreshold, context) {
      var eventUiBases = props.eventUiBases;
      for (var _len4 = arguments.length, extraArgs = new Array(_len4 > 4 ? _len4 - 4 : 0), _key9 = 4; _key9 < _len4; _key9++) {
        extraArgs[_key9 - 4] = arguments[_key9];
      }
      var eventSegs = this.sliceEventStore.apply(this, [props.eventStore, eventUiBases, dateProfile, nextDayThreshold].concat(extraArgs));
      return {
        dateSelectionSegs: this.sliceDateSelection.apply(this, [props.dateSelection, dateProfile, nextDayThreshold, eventUiBases, context].concat(extraArgs)),
        businessHourSegs: this.sliceBusinessHours.apply(this, [props.businessHours, dateProfile, nextDayThreshold, context].concat(extraArgs)),
        fgEventSegs: eventSegs.fg,
        bgEventSegs: eventSegs.bg,
        eventDrag: this.sliceEventDrag.apply(this, [props.eventDrag, eventUiBases, dateProfile, nextDayThreshold].concat(extraArgs)),
        eventResize: this.sliceEventResize.apply(this, [props.eventResize, eventUiBases, dateProfile, nextDayThreshold].concat(extraArgs)),
        eventSelection: props.eventSelection
      }; // TODO: give interactionSegs?
    }
  }, {
    key: "sliceNowDate",
    value: function sliceNowDate(
    // does not memoize
    date, dateProfile, nextDayThreshold, context) {
      for (var _len5 = arguments.length, extraArgs = new Array(_len5 > 4 ? _len5 - 4 : 0), _key10 = 4; _key10 < _len5; _key10++) {
        extraArgs[_key10 - 4] = arguments[_key10];
      }
      return this._sliceDateSpan.apply(this, [{
        range: {
          start: date,
          end: addMs(date, 1)
        },
        allDay: false
      },
      // add 1 ms, protect against null range
      dateProfile, nextDayThreshold, {}, context].concat(extraArgs));
    }
  }, {
    key: "_sliceBusinessHours",
    value: function _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context) {
      if (!businessHours) {
        return [];
      }
      for (var _len6 = arguments.length, extraArgs = new Array(_len6 > 4 ? _len6 - 4 : 0), _key11 = 4; _key11 < _len6; _key11++) {
        extraArgs[_key11 - 4] = arguments[_key11];
      }
      return this._sliceEventStore.apply(this, [expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold].concat(extraArgs)).bg;
    }
  }, {
    key: "_sliceEventStore",
    value: function _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold) {
      if (eventStore) {
        var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
        for (var _len7 = arguments.length, extraArgs = new Array(_len7 > 4 ? _len7 - 4 : 0), _key12 = 4; _key12 < _len7; _key12++) {
          extraArgs[_key12 - 4] = arguments[_key12];
        }
        return {
          bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
          fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
        };
      }
      return {
        bg: [],
        fg: []
      };
    }
  }, {
    key: "_sliceInteraction",
    value: function _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold) {
      if (!interaction) {
        return null;
      }
      var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      for (var _len8 = arguments.length, extraArgs = new Array(_len8 > 4 ? _len8 - 4 : 0), _key13 = 4; _key13 < _len8; _key13++) {
        extraArgs[_key13 - 4] = arguments[_key13];
      }
      return {
        segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
        affectedInstances: interaction.affectedEvents.instances,
        isEvent: interaction.isEvent
      };
    }
  }, {
    key: "_sliceDateSpan",
    value: function _sliceDateSpan(dateSpan, dateProfile, nextDayThreshold, eventUiBases, context) {
      if (!dateSpan) {
        return [];
      }
      var activeRange = computeActiveRange(dateProfile, Boolean(nextDayThreshold));
      var activeDateSpanRange = intersectRanges(dateSpan.range, activeRange);
      if (activeDateSpanRange) {
        dateSpan = Object.assign(Object.assign({}, dateSpan), {
          range: activeDateSpanRange
        });
        var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
        for (var _len9 = arguments.length, extraArgs = new Array(_len9 > 5 ? _len9 - 5 : 0), _key14 = 5; _key14 < _len9; _key14++) {
          extraArgs[_key14 - 5] = arguments[_key14];
        }
        var segs = this.sliceRange.apply(this, [dateSpan.range].concat(extraArgs));
        var _iterator26 = _createForOfIteratorHelper(segs),
          _step26;
        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var seg = _step26.value;
            seg.eventRange = eventRange;
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
        return segs;
      }
      return [];
    }
    /*
    "complete" seg means it has component and eventRange
    */
  }, {
    key: "sliceEventRanges",
    value: function sliceEventRanges(eventRanges, extraArgs) {
      var segs = [];
      var _iterator27 = _createForOfIteratorHelper(eventRanges),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var eventRange = _step27.value;
          segs.push.apply(segs, _toConsumableArray(this.sliceEventRange(eventRange, extraArgs)));
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      return segs;
    }
    /*
    "complete" seg means it has component and eventRange
    */
  }, {
    key: "sliceEventRange",
    value: function sliceEventRange(eventRange, extraArgs) {
      var dateRange = eventRange.range;
      // hack to make multi-day events that are being force-displayed as list-items to take up only one day
      if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
        dateRange = {
          start: dateRange.start,
          end: addDays(dateRange.start, 1)
        };
      }
      var segs = this.sliceRange.apply(this, [dateRange].concat(_toConsumableArray(extraArgs)));
      var _iterator28 = _createForOfIteratorHelper(segs),
        _step28;
      try {
        for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
          var seg = _step28.value;
          seg.eventRange = eventRange;
          seg.isStart = eventRange.isStart && seg.isStart;
          seg.isEnd = eventRange.isEnd && seg.isEnd;
        }
      } catch (err) {
        _iterator28.e(err);
      } finally {
        _iterator28.f();
      }
      return segs;
    }
  }]);
  return Slicer;
}();
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/
function computeActiveRange(dateProfile, isComponentAllDay) {
  var range = dateProfile.activeRange;
  if (isComponentAllDay) {
    return range;
  }
  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5) // 864e5 = ms in a day
  };
}

// high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionValid(interaction, dateProfile, context) {
  var instances = interaction.mutatedEvents.instances;
  for (var instanceId in instances) {
    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
      return false;
    }
  }
  return isNewPropsValid({
    eventDrag: interaction
  }, context); // HACK: the eventDrag props is used for ALL interactions
}
function isDateSelectionValid(dateSelection, dateProfile, context) {
  if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
    return false;
  }
  return isNewPropsValid({
    dateSelection: dateSelection
  }, context);
}
function isNewPropsValid(newProps, context) {
  var calendarState = context.getCurrentData();
  var props = Object.assign({
    businessHours: calendarState.businessHours,
    dateSelection: '',
    eventStore: calendarState.eventStore,
    eventUiBases: calendarState.eventUiBases,
    eventSelection: '',
    eventDrag: null,
    eventResize: null
  }, newProps);
  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}
function isPropsValid(state, context) {
  var dateSpanMeta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var filterConfig = arguments.length > 3 ? arguments[3] : undefined;
  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }
  return true;
}
// Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var currentState = context.getCurrentData();
  var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
  var subjectEventStore = interaction.mutatedEvents;
  var subjectDefs = subjectEventStore.defs;
  var subjectInstances = subjectEventStore.instances;
  var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : {
    '': currentState.selectionConfig
  });
  if (filterConfig) {
    subjectConfigs = mapHash(subjectConfigs, filterConfig);
  }
  // exclude the subject events. TODO: exclude defs too?
  var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
  var otherDefs = otherEventStore.defs;
  var otherInstances = otherEventStore.instances;
  var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
  for (var subjectInstanceId in subjectInstances) {
    var subjectInstance = subjectInstances[subjectInstanceId];
    var subjectRange = subjectInstance.range;
    var subjectConfig = subjectConfigs[subjectInstance.defId];
    var subjectDef = subjectDefs[subjectInstance.defId];
    // constraint
    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    }
    // overlap
    var eventOverlap = context.options.eventOverlap;
    var eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;
    for (var otherInstanceId in otherInstances) {
      var otherInstance = otherInstances[otherInstanceId];
      // intersect! evaluate
      if (rangesIntersect(subjectRange, otherInstance.range)) {
        var otherOverlap = otherConfigs[otherInstance.defId].overlap;
        // consider the other event's overlap. only do this if the subject event is a "real" event
        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }
        if (subjectConfig.overlap === false) {
          return false;
        }
        if (eventOverlapFunc && !eventOverlapFunc(new EventImpl(context, otherDefs[otherInstance.defId], otherInstance),
        // still event
        new EventImpl(context, subjectDef, subjectInstance))) {
          return false;
        }
      }
    }
    // allow (a function)
    var calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state
    var _iterator29 = _createForOfIteratorHelper(subjectConfig.allows),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var subjectAllow = _step29.value;
        var subjectDateSpan = Object.assign(Object.assign({}, dateSpanMeta), {
          range: subjectInstance.range,
          allDay: subjectDef.allDay
        });
        var origDef = calendarEventStore.defs[subjectDef.defId];
        var origInstance = calendarEventStore.instances[subjectInstanceId];
        var eventApi = void 0;
        if (origDef) {
          // was previously in the calendar
          eventApi = new EventImpl(context, origDef, origInstance);
        } else {
          // was an external event
          eventApi = new EventImpl(context, subjectDef); // no instance, because had no dates
        }
        if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
          return false;
        }
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
  }
  return true;
}
// Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------
function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var relevantEventStore = state.eventStore;
  var relevantDefs = relevantEventStore.defs;
  var relevantInstances = relevantEventStore.instances;
  var selection = state.dateSelection;
  var selectionRange = selection.range;
  var _context$getCurrentDa2 = context.getCurrentData(),
    selectionConfig = _context$getCurrentDa2.selectionConfig;
  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  }
  // constraint
  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  }
  // overlap
  var selectOverlap = context.options.selectOverlap;
  var selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;
  for (var relevantInstanceId in relevantInstances) {
    var relevantInstance = relevantInstances[relevantInstanceId];
    // intersect! evaluate
    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }
      if (selectOverlapFunc && !selectOverlapFunc(new EventImpl(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  }
  // allow (a function)
  var _iterator30 = _createForOfIteratorHelper(selectionConfig.allows),
    _step30;
  try {
    for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
      var selectionAllow = _step30.value;
      var fullDateSpan = Object.assign(Object.assign({}, dateSpanMeta), selection);
      if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
        return false;
      }
    }
  } catch (err) {
    _iterator30.e(err);
  } finally {
    _iterator30.f();
  }
  return true;
}
// Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  var _iterator31 = _createForOfIteratorHelper(constraints),
    _step31;
  try {
    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
      var constraint = _step31.value;
      if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
        return false;
      }
    }
  } catch (err) {
    _iterator31.e(err);
  } finally {
    _iterator31.f();
  }
  return true;
}
function constraintToRanges(constraint, subjectRange,
// for expanding a recurring constraint, or expanding business hours
otherEventStore,
// for if constraint is an even group ID
businessHoursUnexpanded,
// for if constraint is 'businessHours'
context) {
  if (constraint === 'businessHours') {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  }
  if (typeof constraint === 'string') {
    // an group ID
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
      return eventDef.groupId === constraint;
    }));
  }
  if (_typeof(constraint) === 'object' && constraint) {
    // non-null object
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }
  return []; // if it's false
}
// TODO: move to event-store file?
function eventStoreToRanges(eventStore) {
  var instances = eventStore.instances;
  var ranges = [];
  for (var instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }
  return ranges;
}
// TODO: move to geom file?
function anyRangesContainRange(outerRanges, innerRange) {
  var _iterator32 = _createForOfIteratorHelper(outerRanges),
    _step32;
  try {
    for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
      var outerRange = _step32.value;
      if (rangeContainsRange(outerRange, innerRange)) {
        return true;
      }
    }
  } catch (err) {
    _iterator32.e(err);
  } finally {
    _iterator32.f();
  }
  return false;
}
var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
var Scroller = /*#__PURE__*/function (_BaseComponent8) {
  _inherits(Scroller, _BaseComponent8);
  function Scroller() {
    var _this19;
    _classCallCheck(this, Scroller);
    _this19 = _callSuper(this, Scroller, arguments);
    _this19.handleEl = function (el) {
      _this19.el = el;
      setRef(_this19.props.elRef, el);
    };
    return _this19;
  }
  _createClass(Scroller, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var liquid = props.liquid,
        liquidIsAbsolute = props.liquidIsAbsolute;
      var isAbsolute = liquid && liquidIsAbsolute;
      var className = ['fc-scroller'];
      if (liquid) {
        if (liquidIsAbsolute) {
          className.push('fc-scroller-liquid-absolute');
        } else {
          className.push('fc-scroller-liquid');
        }
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        ref: this.handleEl,
        className: className.join(' '),
        style: {
          overflowX: props.overflowX,
          overflowY: props.overflowY,
          left: isAbsolute && -(props.overcomeLeft || 0) || '',
          right: isAbsolute && -(props.overcomeRight || 0) || '',
          bottom: isAbsolute && -(props.overcomeBottom || 0) || '',
          marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || '',
          marginRight: !isAbsolute && -(props.overcomeRight || 0) || '',
          marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || '',
          maxHeight: props.maxHeight || ''
        }
      }, props.children);
    }
  }, {
    key: "needsXScrolling",
    value: function needsXScrolling() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
        return false;
      }
      // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
      // much more reliable to see if children are taller than the scroller, even tho doesn't account for
      // inner-child margins and absolute positioning
      var el = this.el;
      var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
      var children = el.children;
      for (var i = 0; i < children.length; i += 1) {
        var childEl = children[i];
        if (childEl.getBoundingClientRect().width > realClientWidth) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "needsYScrolling",
    value: function needsYScrolling() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
        return false;
      }
      // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
      // much more reliable to see if children are taller than the scroller, even tho doesn't account for
      // inner-child margins and absolute positioning
      var el = this.el;
      var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
      var children = el.children;
      for (var i = 0; i < children.length; i += 1) {
        var childEl = children[i];
        if (childEl.getBoundingClientRect().height > realClientHeight) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: "getXScrollbarWidth",
    value: function getXScrollbarWidth() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
        return 0;
      }
      return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
    }
  }, {
    key: "getYScrollbarWidth",
    value: function getYScrollbarWidth() {
      if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
        return 0;
      }
      return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
    }
  }]);
  return Scroller;
}(BaseComponent);
/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/
var RefMap = /*#__PURE__*/function () {
  function RefMap(masterCallback) {
    var _this20 = this;
    _classCallCheck(this, RefMap);
    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};
    this.handleValue = function (val, key) {
      var depths = _this20.depths,
        currentMap = _this20.currentMap;
      var removed = false;
      var added = false;
      if (val !== null) {
        // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;
        if (!depths[key]) {
          delete currentMap[key];
          delete _this20.callbackMap[key];
          removed = true;
        }
      }
      if (_this20.masterCallback) {
        if (removed) {
          _this20.masterCallback(null, String(key));
        }
        if (added) {
          _this20.masterCallback(val, String(key));
        }
      }
    };
  }
  _createClass(RefMap, [{
    key: "createRef",
    value: function createRef(key) {
      var _this21 = this;
      var refCallback = this.callbackMap[key];
      if (!refCallback) {
        refCallback = this.callbackMap[key] = function (val) {
          _this21.handleValue(val, String(key));
        };
      }
      return refCallback;
    }
    // TODO: check callers that don't care about order. should use getAll instead
    // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
    // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
  }, {
    key: "collect",
    value: function collect(startIndex, endIndex, step) {
      return collectFromHash(this.currentMap, startIndex, endIndex, step);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return hashValuesToArray(this.currentMap);
    }
  }]);
  return RefMap;
}();
function _computeShrinkWidth(chunkEls) {
  var shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
  var largestWidth = 0;
  var _iterator33 = _createForOfIteratorHelper(shrinkCells),
    _step33;
  try {
    for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
      var shrinkCell = _step33.value;
      largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
    }
  } catch (err) {
    _iterator33.e(err);
  } finally {
    _iterator33.f();
  }
  return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}
function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}
function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null ||
  // if its possible for the height to max out, we might need scrollbars
  getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
}
// TODO: ONLY use `arg`. force out internal function to use same API
function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
  var expandRows = arg.expandRows;
  var content = typeof chunkConfig.content === 'function' ? chunkConfig.content(arg) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('table', {
    role: 'presentation',
    className: [chunkConfig.tableClassName, sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(' '),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : '' // css `height` on a <table> serves as a min-height
    }
  }, arg.tableColGroupNode, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(isHeader ? 'thead' : 'tbody', {
    role: 'presentation'
  }, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}
function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
  var colNodes = [];
  /*
  for ColProps with spans, it would have been great to make a single <col span="">
  HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
  SOLUTION: making individual <col> elements makes Chrome behave.
  */
  var _iterator34 = _createForOfIteratorHelper(cols),
    _step34;
  try {
    for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
      var colProps = _step34.value;
      var span = colProps.span || 1;
      for (var i = 0; i < span; i += 1) {
        colNodes.push((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("col", {
          style: {
            width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || '',
            minWidth: colProps.minWidth || ''
          }
        }));
      }
    }
  } catch (err) {
    _iterator34.e(err);
  } finally {
    _iterator34.f();
  }
  return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0, ['colgroup', {}].concat(colNodes));
}
function sanitizeShrinkWidth(shrinkWidth) {
  /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
  4 accounts for 2 2-pixel borders. TODO: better solution? */
  return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
  var _iterator35 = _createForOfIteratorHelper(cols),
    _step35;
  try {
    for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
      var col = _step35.value;
      if (col.width === 'shrink') {
        return true;
      }
    }
  } catch (err) {
    _iterator35.e(err);
  } finally {
    _iterator35.f();
  }
  return false;
}
function getScrollGridClassNames(liquid, context) {
  var classNames = ['fc-scrollgrid', context.theme.getClass('table')];
  if (liquid) {
    classNames.push('fc-scrollgrid-liquid');
  }
  return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  var classNames = ['fc-scrollgrid-section', "fc-scrollgrid-section-".concat(sectionConfig.type), sectionConfig.className // used?
  ];
  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push('fc-scrollgrid-section-liquid');
  }
  if (sectionConfig.isSticky) {
    classNames.push('fc-scrollgrid-section-sticky');
  }
  return classNames;
}
function renderScrollShim(arg) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-scrollgrid-sticky-shim",
    style: {
      width: arg.clientWidth,
      minWidth: arg.tableMinWidth
    }
  });
}
function getStickyHeaderDates(options) {
  var stickyHeaderDates = options.stickyHeaderDates;
  if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
    stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
  }
  return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
  var stickyFooterScrollbar = options.stickyFooterScrollbar;
  if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
    stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
  }
  return stickyFooterScrollbar;
}
var SimpleScrollGrid = /*#__PURE__*/function (_BaseComponent9) {
  _inherits(SimpleScrollGrid, _BaseComponent9);
  function SimpleScrollGrid() {
    var _this22;
    _classCallCheck(this, SimpleScrollGrid);
    _this22 = _callSuper(this, SimpleScrollGrid, arguments);
    _this22.processCols = memoize(function (a) {
      return a;
    }, isColPropsEqual); // so we get same `cols` props every time
    // yucky to memoize VNodes, but much more efficient for consumers
    _this22.renderMicroColGroup = memoize(renderMicroColGroup);
    _this22.scrollerRefs = new RefMap();
    _this22.scrollerElRefs = new RefMap(_this22._handleScrollerEl.bind(_assertThisInitialized(_this22)));
    _this22.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    };
    // TODO: can do a really simple print-view. dont need to join rows
    _this22.handleSizing = function () {
      _this22.safeSetState(Object.assign({
        shrinkWidth: _this22.computeShrinkWidth()
      }, _this22.computeScrollerDims()));
    };
    return _this22;
  }
  _createClass(SimpleScrollGrid, [{
    key: "render",
    value: function render() {
      var props = this.props,
        state = this.state,
        context = this.context;
      var sectionConfigs = props.sections || [];
      var cols = this.processCols(props.cols);
      var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
      var classNames = getScrollGridClassNames(props.liquid, context);
      if (props.collapsibleWidth) {
        classNames.push('fc-scrollgrid-collapsible');
      }
      // TODO: make DRY
      var configCnt = sectionConfigs.length;
      var configI = 0;
      var currentConfig;
      var headSectionNodes = [];
      var bodySectionNodes = [];
      var footSectionNodes = [];
      while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
        headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
        configI += 1;
      }
      while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
        bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
        configI += 1;
      }
      while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
        footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
        configI += 1;
      }
      // firefox bug: when setting height on table and there is a thead or tfoot,
      // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
      // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
      // if so, use a simpler dom structure, jam everything into a lone tbody.
      var isBuggy = !getCanVGrowWithinCell();
      var roleAttrs = {
        role: 'rowgroup'
      };
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('table', {
        role: 'grid',
        className: classNames.join(' '),
        style: {
          height: props.height
        }
      }, Boolean(!isBuggy && headSectionNodes.length) && preact__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0, ['thead', roleAttrs].concat(headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && preact__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0, ['tbody', roleAttrs].concat(bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && preact__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0, ['tfoot', roleAttrs].concat(footSectionNodes)), isBuggy && preact__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0, ['tbody', roleAttrs].concat(headSectionNodes, bodySectionNodes, footSectionNodes)));
    }
  }, {
    key: "renderSection",
    value: function renderSection(sectionConfig, microColGroupNode, isHeader) {
      if ('outerContent' in sectionConfig) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          key: sectionConfig.key
        }, sectionConfig.outerContent);
      }
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
        key: sectionConfig.key,
        role: "presentation",
        className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ')
      }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
    }
  }, {
    key: "renderChunkTd",
    value: function renderChunkTd(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
      if ('outerContent' in chunkConfig) {
        return chunkConfig.outerContent;
      }
      var props = this.props;
      var _this$state = this.state,
        forceYScrollbars = _this$state.forceYScrollbars,
        scrollerClientWidths = _this$state.scrollerClientWidths,
        scrollerClientHeights = _this$state.scrollerClientHeights;
      var needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?
      var isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
      // for `!props.liquid` - is WHOLE scrollgrid natural height?
      // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
      var overflowY = !props.liquid ? 'visible' : forceYScrollbars ? 'scroll' : !needsYScrolling ? 'hidden' : 'auto';
      var sectionKey = sectionConfig.key;
      var content = renderChunkContent(sectionConfig, chunkConfig, {
        tableColGroupNode: microColGroupNode,
        tableMinWidth: '',
        clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined ? scrollerClientWidths[sectionKey] : null,
        clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
        expandRows: sectionConfig.expandRows,
        syncRowHeights: false,
        rowSyncHeights: [],
        reportRowHeightChange: function reportRowHeightChange() {}
      }, isHeader);
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(isHeader ? 'th' : 'td', {
        ref: chunkConfig.elRef,
        role: 'presentation'
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "fc-scroller-harness".concat(isLiquid ? ' fc-scroller-harness-liquid' : '')
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Scroller, {
        ref: this.scrollerRefs.createRef(sectionKey),
        elRef: this.scrollerElRefs.createRef(sectionKey),
        overflowY: overflowY,
        overflowX: !props.liquid ? 'visible' : 'hidden' /* natural height? */,
        maxHeight: sectionConfig.maxHeight,
        liquid: isLiquid,
        liquidIsAbsolute // because its within a harness
        : true
      }, content)));
    }
  }, {
    key: "_handleScrollerEl",
    value: function _handleScrollerEl(scrollerEl, key) {
      var section = getSectionByKey(this.props.sections, key);
      if (section) {
        setRef(section.chunk.scrollerElRef, scrollerEl);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleSizing();
      this.context.addResizeHandler(this.handleSizing);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // TODO: need better solution when state contains non-sizing things
      this.handleSizing();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing);
    }
  }, {
    key: "computeShrinkWidth",
    value: function computeShrinkWidth() {
      return hasShrinkWidth(this.props.cols) ? _computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
    }
  }, {
    key: "computeScrollerDims",
    value: function computeScrollerDims() {
      var scrollbarWidth = getScrollbarWidths();
      var scrollerRefs = this.scrollerRefs,
        scrollerElRefs = this.scrollerElRefs;
      var forceYScrollbars = false;
      var scrollerClientWidths = {};
      var scrollerClientHeights = {};
      for (var sectionKey in scrollerRefs.currentMap) {
        var scroller = scrollerRefs.currentMap[sectionKey];
        if (scroller && scroller.needsYScrolling()) {
          forceYScrollbars = true;
          break;
        }
      }
      var _iterator36 = _createForOfIteratorHelper(this.props.sections),
        _step36;
      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var section = _step36.value;
          var _sectionKey = section.key;
          var scrollerEl = scrollerElRefs.currentMap[_sectionKey];
          if (scrollerEl) {
            var harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders
            scrollerClientWidths[_sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
            : 0));
            scrollerClientHeights[_sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
          }
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
      return {
        forceYScrollbars: forceYScrollbars,
        scrollerClientWidths: scrollerClientWidths,
        scrollerClientHeights: scrollerClientHeights
      };
    }
  }]);
  return SimpleScrollGrid;
}(BaseComponent);
SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});
function getSectionByKey(sections, key) {
  var _iterator37 = _createForOfIteratorHelper(sections),
    _step37;
  try {
    for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
      var section = _step37.value;
      if (section.key === key) {
        return section;
      }
    }
  } catch (err) {
    _iterator37.e(err);
  } finally {
    _iterator37.f();
  }
  return null;
}
var EventContainer = /*#__PURE__*/function (_BaseComponent10) {
  _inherits(EventContainer, _BaseComponent10);
  function EventContainer() {
    var _this23;
    _classCallCheck(this, EventContainer);
    _this23 = _callSuper(this, EventContainer, arguments);
    _this23.handleEl = function (el) {
      _this23.el = el;
      if (el) {
        setElSeg(el, _this23.props.seg);
      }
    };
    return _this23;
  }
  _createClass(EventContainer, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var seg = props.seg;
      var eventRange = seg.eventRange;
      var ui = eventRange.ui;
      var renderProps = {
        event: new EventImpl(context, eventRange.def, eventRange.instance),
        view: context.viewApi,
        timeText: props.timeText,
        textColor: ui.textColor,
        backgroundColor: ui.backgroundColor,
        borderColor: ui.borderColor,
        isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
        isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
        isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
        isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
        isStart: Boolean(seg.isStart),
        isEnd: Boolean(seg.isEnd),
        isPast: Boolean(props.isPast),
        isFuture: Boolean(props.isFuture),
        isToday: Boolean(props.isToday),
        isSelected: Boolean(props.isSelected),
        isDragging: Boolean(props.isDragging),
        isResizing: Boolean(props.isResizing)
      };
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props /* contains children */, {
        elRef: this.handleEl,
        elClasses: [].concat(_toConsumableArray(getEventClassNames(renderProps)), _toConsumableArray(seg.eventRange.ui.classNames), _toConsumableArray(props.elClasses || [])),
        renderProps: renderProps,
        generatorName: "eventContent",
        customGenerator: options.eventContent,
        defaultGenerator: props.defaultGenerator,
        classNameGenerator: options.eventClassNames,
        didMount: options.eventDidMount,
        willUnmount: options.eventWillUnmount
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.el && this.props.seg !== prevProps.seg) {
        setElSeg(this.el, this.props.seg);
      }
    }
  }]);
  return EventContainer;
}(BaseComponent); // should not be a purecomponent
var StandardEvent = /*#__PURE__*/function (_BaseComponent11) {
  _inherits(StandardEvent, _BaseComponent11);
  function StandardEvent() {
    _classCallCheck(this, StandardEvent);
    return _callSuper(this, StandardEvent, arguments);
  }
  _createClass(StandardEvent, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var seg = props.seg;
      var ui = seg.eventRange.ui;
      var timeFormat = options.eventTimeFormat || props.defaultTimeFormat;
      var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventContainer, Object.assign({}, props /* includes elRef */, {
        elTag: "a",
        elStyle: {
          borderColor: ui.borderColor,
          backgroundColor: ui.backgroundColor
        },
        elAttrs: getSegAnchorAttrs(seg, context),
        defaultGenerator: renderInnerContent$1,
        timeText: timeText
      }), function (InnerContent, eventContentArg) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContent, {
          elTag: "div",
          elClasses: ['fc-event-main'],
          elStyle: {
            color: eventContentArg.textColor
          }
        }), Boolean(eventContentArg.isStartResizable) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-event-resizer fc-event-resizer-start"
        }), Boolean(eventContentArg.isEndResizable) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-event-resizer fc-event-resizer-end"
        }));
      });
    }
  }]);
  return StandardEvent;
}(BaseComponent);
function renderInnerContent$1(innerProps) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-main-frame"
  }, innerProps.timeText && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-time"
  }, innerProps.timeText), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title-container"
  }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title fc-sticky"
  }, innerProps.event.title || (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\xA0"))));
}
var NowIndicatorContainer = function NowIndicatorContainer(props) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, function (context) {
    var options = context.options;
    var renderProps = {
      isAxis: props.isAxis,
      date: context.dateEnv.toDate(props.date),
      view: context.viewApi
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props /* includes children */, {
      elTag: props.elTag || 'div',
      renderProps: renderProps,
      generatorName: "nowIndicatorContent",
      customGenerator: options.nowIndicatorContent,
      classNameGenerator: options.nowIndicatorClassNames,
      didMount: options.nowIndicatorDidMount,
      willUnmount: options.nowIndicatorWillUnmount
    }));
  });
};
var DAY_NUM_FORMAT = createFormatter({
  day: 'numeric'
});
var DayCellContainer = /*#__PURE__*/function (_BaseComponent12) {
  _inherits(DayCellContainer, _BaseComponent12);
  function DayCellContainer() {
    var _this24;
    _classCallCheck(this, DayCellContainer);
    _this24 = _callSuper(this, DayCellContainer, arguments);
    _this24.refineRenderProps = memoizeObjArg(refineRenderProps);
    return _this24;
  }
  _createClass(DayCellContainer, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var renderProps = this.refineRenderProps({
        date: props.date,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        isMonthStart: props.isMonthStart || false,
        showDayNumber: props.showDayNumber,
        extraRenderProps: props.extraRenderProps,
        viewApi: context.viewApi,
        dateEnv: context.dateEnv,
        monthStartFormat: options.monthStartFormat
      });
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, Object.assign({}, props /* includes children */, {
        elClasses: [].concat(_toConsumableArray(getDayClassNames(renderProps, context.theme)), _toConsumableArray(props.elClasses || [])),
        elAttrs: Object.assign(Object.assign({}, props.elAttrs), renderProps.isDisabled ? {} : {
          'data-date': formatDayString(props.date)
        }),
        renderProps: renderProps,
        generatorName: "dayCellContent",
        customGenerator: options.dayCellContent,
        defaultGenerator: props.defaultGenerator,
        classNameGenerator:
        // don't use custom classNames if disabled
        renderProps.isDisabled ? undefined : options.dayCellClassNames,
        didMount: options.dayCellDidMount,
        willUnmount: options.dayCellWillUnmount
      }));
    }
  }]);
  return DayCellContainer;
}(BaseComponent);
function hasCustomDayCellContent(options) {
  return Boolean(options.dayCellContent || hasCustomRenderingHandler('dayCellContent', options));
}
function refineRenderProps(raw) {
  var date = raw.date,
    dateEnv = raw.dateEnv,
    dateProfile = raw.dateProfile,
    isMonthStart = raw.isMonthStart;
  var dayMeta = getDateMeta(date, raw.todayRange, null, dateProfile);
  var dayNumberText = raw.showDayNumber ? dateEnv.format(date, isMonthStart ? raw.monthStartFormat : DAY_NUM_FORMAT) : '';
  return Object.assign(Object.assign(Object.assign({
    date: dateEnv.toDate(date),
    view: raw.viewApi
  }, dayMeta), {
    isMonthStart: isMonthStart,
    dayNumberText: dayNumberText
  }), raw.extraRenderProps);
}
var BgEvent = /*#__PURE__*/function (_BaseComponent13) {
  _inherits(BgEvent, _BaseComponent13);
  function BgEvent() {
    _classCallCheck(this, BgEvent);
    return _callSuper(this, BgEvent, arguments);
  }
  _createClass(BgEvent, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var seg = props.seg;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(EventContainer, {
        elTag: "div",
        elClasses: ['fc-bg-event'],
        elStyle: {
          backgroundColor: seg.eventRange.ui.backgroundColor
        },
        defaultGenerator: renderInnerContent,
        seg: seg,
        timeText: "",
        isDragging: false,
        isResizing: false,
        isDateSelecting: false,
        isSelected: false,
        isPast: props.isPast,
        isFuture: props.isFuture,
        isToday: props.isToday,
        disableDragging: true,
        disableResizing: true
      });
    }
  }]);
  return BgEvent;
}(BaseComponent);
function renderInnerContent(props) {
  var title = props.event.title;
  return title && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title"
  }, props.event.title);
}
function renderFill(fillType) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-".concat(fillType)
  });
}
var WeekNumberContainer = function WeekNumberContainer(props) {
  return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, function (context) {
    var dateEnv = context.dateEnv,
      options = context.options;
    var date = props.date;
    var format = options.weekNumberFormat || props.defaultFormat;
    var num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
    var text = dateEnv.format(date, format);
    var renderProps = {
      num: num,
      text: text,
      date: date
    };
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer // why isn't WeekNumberContentArg being auto-detected?
    , Object.assign({}, props /* includes children */, {
      renderProps: renderProps,
      generatorName: "weekNumberContent",
      customGenerator: options.weekNumberContent,
      defaultGenerator: renderInner,
      classNameGenerator: options.weekNumberClassNames,
      didMount: options.weekNumberDidMount,
      willUnmount: options.weekNumberWillUnmount
    }));
  });
};
function renderInner(innerProps) {
  return innerProps.text;
}
var PADDING_FROM_VIEWPORT = 10;
var Popover = /*#__PURE__*/function (_BaseComponent14) {
  _inherits(Popover, _BaseComponent14);
  function Popover() {
    var _this25;
    _classCallCheck(this, Popover);
    _this25 = _callSuper(this, Popover, arguments);
    _this25.state = {
      titleId: getUniqueDomId()
    };
    _this25.handleRootEl = function (el) {
      _this25.rootEl = el;
      if (_this25.props.elRef) {
        setRef(_this25.props.elRef, el);
      }
    };
    // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
    _this25.handleDocumentMouseDown = function (ev) {
      // only hide the popover if the click happened outside the popover
      var target = getEventTargetViaRoot(ev);
      if (!_this25.rootEl.contains(target)) {
        _this25.handleCloseClick();
      }
    };
    _this25.handleDocumentKeyDown = function (ev) {
      if (ev.key === 'Escape') {
        _this25.handleCloseClick();
      }
    };
    _this25.handleCloseClick = function () {
      var onClose = _this25.props.onClose;
      if (onClose) {
        onClose();
      }
    };
    return _this25;
  }
  _createClass(Popover, [{
    key: "render",
    value: function render() {
      var _this$context3 = this.context,
        theme = _this$context3.theme,
        options = _this$context3.options;
      var props = this.props,
        state = this.state;
      var classNames = ['fc-popover', theme.getClass('popover')].concat(props.extraClassNames || []);
      return (0,preact_compat__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", Object.assign({}, props.extraAttrs, {
        id: props.id,
        className: classNames.join(' '),
        "aria-labelledby": state.titleId,
        ref: this.handleRootEl
      }), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: 'fc-popover-header ' + theme.getClass('popoverHeader')
      }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "fc-popover-title",
        id: state.titleId
      }, props.title), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: 'fc-popover-close ' + theme.getIconClass('close'),
        title: options.closeHint,
        onClick: this.handleCloseClick
      })), (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: 'fc-popover-body ' + theme.getClass('popoverContent')
      }, props.children)), props.parentEl);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleDocumentMouseDown);
      document.addEventListener('keydown', this.handleDocumentKeyDown);
      this.updateSize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleDocumentMouseDown);
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var isRtl = this.context.isRtl;
      var _this$props5 = this.props,
        alignmentEl = _this$props5.alignmentEl,
        alignGridTop = _this$props5.alignGridTop;
      var rootEl = this.rootEl;
      var alignmentRect = computeClippedClientRect(alignmentEl);
      if (alignmentRect) {
        var popoverDims = rootEl.getBoundingClientRect();
        // position relative to viewport
        var popoverTop = alignGridTop ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top : alignmentRect.top;
        var popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
        // constrain
        popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
        popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
        popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
        var origin = rootEl.offsetParent.getBoundingClientRect();
        applyStyle(rootEl, {
          top: popoverTop - origin.top,
          left: popoverLeft - origin.left
        });
      }
    }
  }]);
  return Popover;
}(BaseComponent);
var MorePopover = /*#__PURE__*/function (_DateComponent) {
  _inherits(MorePopover, _DateComponent);
  function MorePopover() {
    var _this26;
    _classCallCheck(this, MorePopover);
    _this26 = _callSuper(this, MorePopover, arguments);
    _this26.handleRootEl = function (rootEl) {
      _this26.rootEl = rootEl;
      if (rootEl) {
        _this26.context.registerInteractiveComponent(_assertThisInitialized(_this26), {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        _this26.context.unregisterInteractiveComponent(_assertThisInitialized(_this26));
      }
    };
    return _this26;
  }
  _createClass(MorePopover, [{
    key: "render",
    value: function render() {
      var _this$context4 = this.context,
        options = _this$context4.options,
        dateEnv = _this$context4.dateEnv;
      var props = this.props;
      var startDate = props.startDate,
        todayRange = props.todayRange,
        dateProfile = props.dateProfile;
      var title = dateEnv.format(startDate, options.dayPopoverFormat);
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(DayCellContainer, {
        elRef: this.handleRootEl,
        date: startDate,
        dateProfile: dateProfile,
        todayRange: todayRange
      }, function (InnerContent, renderProps, elAttrs) {
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Popover, {
          elRef: elAttrs.ref,
          id: props.id,
          title: title,
          extraClassNames: ['fc-more-popover'].concat(elAttrs.className || []),
          extraAttrs: elAttrs /* TODO: make these time-based when not whole-day? */,
          parentEl: props.parentEl,
          alignmentEl: props.alignmentEl,
          alignGridTop: props.alignGridTop,
          onClose: props.onClose
        }, hasCustomDayCellContent(options) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContent, {
          elTag: "div",
          elClasses: ['fc-more-popover-misc']
        }), props.children);
      });
    }
  }, {
    key: "queryHit",
    value: function queryHit(positionLeft, positionTop, elWidth, elHeight) {
      var rootEl = this.rootEl,
        props = this.props;
      if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
        return {
          dateProfile: props.dateProfile,
          dateSpan: Object.assign({
            allDay: !props.forceTimed,
            range: {
              start: props.startDate,
              end: props.endDate
            }
          }, props.extraDateSpan),
          dayEl: rootEl,
          rect: {
            left: 0,
            top: 0,
            right: elWidth,
            bottom: elHeight
          },
          layer: 1 // important when comparing with hits from other components
        };
      }
      return null;
    }
  }]);
  return MorePopover;
}(DateComponent);
var MoreLinkContainer = /*#__PURE__*/function (_BaseComponent15) {
  _inherits(MoreLinkContainer, _BaseComponent15);
  function MoreLinkContainer() {
    var _this27;
    _classCallCheck(this, MoreLinkContainer);
    _this27 = _callSuper(this, MoreLinkContainer, arguments);
    _this27.state = {
      isPopoverOpen: false,
      popoverId: getUniqueDomId()
    };
    _this27.handleLinkEl = function (linkEl) {
      _this27.linkEl = linkEl;
      if (_this27.props.elRef) {
        setRef(_this27.props.elRef, linkEl);
      }
    };
    _this27.handleClick = function (ev) {
      var _assertThisInitialize = _assertThisInitialized(_this27),
        props = _assertThisInitialize.props,
        context = _assertThisInitialize.context;
      var moreLinkClick = context.options.moreLinkClick;
      var date = computeRange(props).start;
      function buildPublicSeg(seg) {
        var _seg$eventRange3 = seg.eventRange,
          def = _seg$eventRange3.def,
          instance = _seg$eventRange3.instance,
          range = _seg$eventRange3.range;
        return {
          event: new EventImpl(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }
      if (typeof moreLinkClick === 'function') {
        moreLinkClick = moreLinkClick({
          date: date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }
      if (!moreLinkClick || moreLinkClick === 'popover') {
        _this27.setState({
          isPopoverOpen: true
        });
      } else if (typeof moreLinkClick === 'string') {
        // a view name
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };
    _this27.handlePopoverClose = function () {
      _this27.setState({
        isPopoverOpen: false
      });
    };
    return _this27;
  }
  _createClass(MoreLinkContainer, [{
    key: "render",
    value: function render() {
      var _this28 = this;
      var props = this.props,
        state = this.state;
      return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewContextType.Consumer, null, function (context) {
        var viewApi = context.viewApi,
          options = context.options,
          calendarApi = context.calendarApi;
        var moreLinkText = options.moreLinkText;
        var moreCnt = props.moreCnt;
        var range = computeRange(props);
        var text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
        ? moreLinkText.call(calendarApi, moreCnt) : "+".concat(moreCnt, " ").concat(moreLinkText);
        var hint = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
        var renderProps = {
          num: moreCnt,
          shortText: "+".concat(moreCnt),
          text: text,
          view: viewApi
        };
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Boolean(props.moreCnt) && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContentContainer, {
          elTag: props.elTag || 'a',
          elRef: _this28.handleLinkEl,
          elClasses: [].concat(_toConsumableArray(props.elClasses || []), ['fc-more-link']),
          elStyle: props.elStyle,
          elAttrs: Object.assign(Object.assign(Object.assign({}, props.elAttrs), createAriaClickAttrs(_this28.handleClick)), {
            title: hint,
            'aria-expanded': state.isPopoverOpen,
            'aria-controls': state.isPopoverOpen ? state.popoverId : ''
          }),
          renderProps: renderProps,
          generatorName: "moreLinkContent",
          customGenerator: options.moreLinkContent,
          defaultGenerator: props.defaultGenerator || renderMoreLinkInner,
          classNameGenerator: options.moreLinkClassNames,
          didMount: options.moreLinkDidMount,
          willUnmount: options.moreLinkWillUnmount
        }, props.children), state.isPopoverOpen && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(MorePopover, {
          id: state.popoverId,
          startDate: range.start,
          endDate: range.end,
          dateProfile: props.dateProfile,
          todayRange: props.todayRange,
          extraDateSpan: props.extraDateSpan,
          parentEl: _this28.parentEl,
          alignmentEl: props.alignmentElRef ? props.alignmentElRef.current : _this28.linkEl,
          alignGridTop: props.alignGridTop,
          forceTimed: props.forceTimed,
          onClose: _this28.handlePopoverClose
        }, props.popoverContent()));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateParentEl();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateParentEl();
    }
  }, {
    key: "updateParentEl",
    value: function updateParentEl() {
      if (this.linkEl) {
        this.parentEl = elementClosest(this.linkEl, '.fc-view-harness');
      }
    }
  }]);
  return MoreLinkContainer;
}(BaseComponent);
function renderMoreLinkInner(props) {
  return props.text;
}
function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }
  var hiddenSegs = props.hiddenSegs;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}
function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
    this.handlers = [];
  }
  _createClass(Store, [{
    key: "set",
    value: function set(value) {
      this.currentValue = value;
      var _iterator38 = _createForOfIteratorHelper(this.handlers),
        _step38;
      try {
        for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
          var handler = _step38.value;
          handler(value);
        }
      } catch (err) {
        _iterator38.e(err);
      } finally {
        _iterator38.f();
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(handler) {
      this.handlers.push(handler);
      if (this.currentValue !== undefined) {
        handler(this.currentValue);
      }
    }
  }]);
  return Store;
}();
/*
Subscribers will get a LIST of CustomRenderings
*/
var CustomRenderingStore = /*#__PURE__*/function (_Store) {
  _inherits(CustomRenderingStore, _Store);
  function CustomRenderingStore() {
    var _this29;
    _classCallCheck(this, CustomRenderingStore);
    _this29 = _callSuper(this, CustomRenderingStore, arguments);
    _this29.map = new Map();
    return _this29;
  }
  // for consistent order
  _createClass(CustomRenderingStore, [{
    key: "handle",
    value: function handle(customRendering) {
      var map = this.map;
      var updated = false;
      if (customRendering.isActive) {
        map.set(customRendering.id, customRendering);
        updated = true;
      } else if (map.has(customRendering.id)) {
        map["delete"](customRendering.id);
        updated = true;
      }
      if (updated) {
        this.set(map);
      }
    }
  }]);
  return CustomRenderingStore;
}(Store);


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales-all.js":
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales-all.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ localesAll; }
/* harmony export */ });
/* harmony import */ var _locales_af_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/af.js */ "./node_modules/@fullcalendar/core/locales/af.js");
/* harmony import */ var _locales_ar_dz_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales/ar-dz.js */ "./node_modules/@fullcalendar/core/locales/ar-dz.js");
/* harmony import */ var _locales_ar_kw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/ar-kw.js */ "./node_modules/@fullcalendar/core/locales/ar-kw.js");
/* harmony import */ var _locales_ar_ly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/ar-ly.js */ "./node_modules/@fullcalendar/core/locales/ar-ly.js");
/* harmony import */ var _locales_ar_ma_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/ar-ma.js */ "./node_modules/@fullcalendar/core/locales/ar-ma.js");
/* harmony import */ var _locales_ar_sa_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/ar-sa.js */ "./node_modules/@fullcalendar/core/locales/ar-sa.js");
/* harmony import */ var _locales_ar_tn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/ar-tn.js */ "./node_modules/@fullcalendar/core/locales/ar-tn.js");
/* harmony import */ var _locales_ar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locales/ar.js */ "./node_modules/@fullcalendar/core/locales/ar.js");
/* harmony import */ var _locales_az_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locales/az.js */ "./node_modules/@fullcalendar/core/locales/az.js");
/* harmony import */ var _locales_bg_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locales/bg.js */ "./node_modules/@fullcalendar/core/locales/bg.js");
/* harmony import */ var _locales_bn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locales/bn.js */ "./node_modules/@fullcalendar/core/locales/bn.js");
/* harmony import */ var _locales_bs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locales/bs.js */ "./node_modules/@fullcalendar/core/locales/bs.js");
/* harmony import */ var _locales_ca_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locales/ca.js */ "./node_modules/@fullcalendar/core/locales/ca.js");
/* harmony import */ var _locales_cs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./locales/cs.js */ "./node_modules/@fullcalendar/core/locales/cs.js");
/* harmony import */ var _locales_cy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./locales/cy.js */ "./node_modules/@fullcalendar/core/locales/cy.js");
/* harmony import */ var _locales_da_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locales/da.js */ "./node_modules/@fullcalendar/core/locales/da.js");
/* harmony import */ var _locales_de_at_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./locales/de-at.js */ "./node_modules/@fullcalendar/core/locales/de-at.js");
/* harmony import */ var _locales_de_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./locales/de.js */ "./node_modules/@fullcalendar/core/locales/de.js");
/* harmony import */ var _locales_el_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./locales/el.js */ "./node_modules/@fullcalendar/core/locales/el.js");
/* harmony import */ var _locales_en_au_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./locales/en-au.js */ "./node_modules/@fullcalendar/core/locales/en-au.js");
/* harmony import */ var _locales_en_gb_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./locales/en-gb.js */ "./node_modules/@fullcalendar/core/locales/en-gb.js");
/* harmony import */ var _locales_en_nz_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./locales/en-nz.js */ "./node_modules/@fullcalendar/core/locales/en-nz.js");
/* harmony import */ var _locales_eo_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./locales/eo.js */ "./node_modules/@fullcalendar/core/locales/eo.js");
/* harmony import */ var _locales_es_us_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./locales/es-us.js */ "./node_modules/@fullcalendar/core/locales/es-us.js");
/* harmony import */ var _locales_es_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./locales/es.js */ "./node_modules/@fullcalendar/core/locales/es.js");
/* harmony import */ var _locales_et_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./locales/et.js */ "./node_modules/@fullcalendar/core/locales/et.js");
/* harmony import */ var _locales_eu_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./locales/eu.js */ "./node_modules/@fullcalendar/core/locales/eu.js");
/* harmony import */ var _locales_fa_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./locales/fa.js */ "./node_modules/@fullcalendar/core/locales/fa.js");
/* harmony import */ var _locales_fi_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./locales/fi.js */ "./node_modules/@fullcalendar/core/locales/fi.js");
/* harmony import */ var _locales_fr_ca_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./locales/fr-ca.js */ "./node_modules/@fullcalendar/core/locales/fr-ca.js");
/* harmony import */ var _locales_fr_ch_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./locales/fr-ch.js */ "./node_modules/@fullcalendar/core/locales/fr-ch.js");
/* harmony import */ var _locales_fr_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./locales/fr.js */ "./node_modules/@fullcalendar/core/locales/fr.js");
/* harmony import */ var _locales_gl_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./locales/gl.js */ "./node_modules/@fullcalendar/core/locales/gl.js");
/* harmony import */ var _locales_he_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./locales/he.js */ "./node_modules/@fullcalendar/core/locales/he.js");
/* harmony import */ var _locales_hi_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./locales/hi.js */ "./node_modules/@fullcalendar/core/locales/hi.js");
/* harmony import */ var _locales_hr_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./locales/hr.js */ "./node_modules/@fullcalendar/core/locales/hr.js");
/* harmony import */ var _locales_hu_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./locales/hu.js */ "./node_modules/@fullcalendar/core/locales/hu.js");
/* harmony import */ var _locales_hy_am_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./locales/hy-am.js */ "./node_modules/@fullcalendar/core/locales/hy-am.js");
/* harmony import */ var _locales_id_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./locales/id.js */ "./node_modules/@fullcalendar/core/locales/id.js");
/* harmony import */ var _locales_is_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./locales/is.js */ "./node_modules/@fullcalendar/core/locales/is.js");
/* harmony import */ var _locales_it_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./locales/it.js */ "./node_modules/@fullcalendar/core/locales/it.js");
/* harmony import */ var _locales_ja_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./locales/ja.js */ "./node_modules/@fullcalendar/core/locales/ja.js");
/* harmony import */ var _locales_ka_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./locales/ka.js */ "./node_modules/@fullcalendar/core/locales/ka.js");
/* harmony import */ var _locales_kk_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./locales/kk.js */ "./node_modules/@fullcalendar/core/locales/kk.js");
/* harmony import */ var _locales_km_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./locales/km.js */ "./node_modules/@fullcalendar/core/locales/km.js");
/* harmony import */ var _locales_ko_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./locales/ko.js */ "./node_modules/@fullcalendar/core/locales/ko.js");
/* harmony import */ var _locales_ku_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./locales/ku.js */ "./node_modules/@fullcalendar/core/locales/ku.js");
/* harmony import */ var _locales_lb_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./locales/lb.js */ "./node_modules/@fullcalendar/core/locales/lb.js");
/* harmony import */ var _locales_lt_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./locales/lt.js */ "./node_modules/@fullcalendar/core/locales/lt.js");
/* harmony import */ var _locales_lv_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./locales/lv.js */ "./node_modules/@fullcalendar/core/locales/lv.js");
/* harmony import */ var _locales_mk_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./locales/mk.js */ "./node_modules/@fullcalendar/core/locales/mk.js");
/* harmony import */ var _locales_ms_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./locales/ms.js */ "./node_modules/@fullcalendar/core/locales/ms.js");
/* harmony import */ var _locales_nb_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./locales/nb.js */ "./node_modules/@fullcalendar/core/locales/nb.js");
/* harmony import */ var _locales_ne_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./locales/ne.js */ "./node_modules/@fullcalendar/core/locales/ne.js");
/* harmony import */ var _locales_nl_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./locales/nl.js */ "./node_modules/@fullcalendar/core/locales/nl.js");
/* harmony import */ var _locales_nn_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./locales/nn.js */ "./node_modules/@fullcalendar/core/locales/nn.js");
/* harmony import */ var _locales_pl_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./locales/pl.js */ "./node_modules/@fullcalendar/core/locales/pl.js");
/* harmony import */ var _locales_pt_br_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./locales/pt-br.js */ "./node_modules/@fullcalendar/core/locales/pt-br.js");
/* harmony import */ var _locales_pt_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./locales/pt.js */ "./node_modules/@fullcalendar/core/locales/pt.js");
/* harmony import */ var _locales_ro_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./locales/ro.js */ "./node_modules/@fullcalendar/core/locales/ro.js");
/* harmony import */ var _locales_ru_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./locales/ru.js */ "./node_modules/@fullcalendar/core/locales/ru.js");
/* harmony import */ var _locales_si_lk_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./locales/si-lk.js */ "./node_modules/@fullcalendar/core/locales/si-lk.js");
/* harmony import */ var _locales_sk_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./locales/sk.js */ "./node_modules/@fullcalendar/core/locales/sk.js");
/* harmony import */ var _locales_sl_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./locales/sl.js */ "./node_modules/@fullcalendar/core/locales/sl.js");
/* harmony import */ var _locales_sm_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./locales/sm.js */ "./node_modules/@fullcalendar/core/locales/sm.js");
/* harmony import */ var _locales_sq_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./locales/sq.js */ "./node_modules/@fullcalendar/core/locales/sq.js");
/* harmony import */ var _locales_sr_cyrl_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./locales/sr-cyrl.js */ "./node_modules/@fullcalendar/core/locales/sr-cyrl.js");
/* harmony import */ var _locales_sr_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./locales/sr.js */ "./node_modules/@fullcalendar/core/locales/sr.js");
/* harmony import */ var _locales_sv_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./locales/sv.js */ "./node_modules/@fullcalendar/core/locales/sv.js");
/* harmony import */ var _locales_ta_in_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./locales/ta-in.js */ "./node_modules/@fullcalendar/core/locales/ta-in.js");
/* harmony import */ var _locales_th_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./locales/th.js */ "./node_modules/@fullcalendar/core/locales/th.js");
/* harmony import */ var _locales_tr_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./locales/tr.js */ "./node_modules/@fullcalendar/core/locales/tr.js");
/* harmony import */ var _locales_ug_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./locales/ug.js */ "./node_modules/@fullcalendar/core/locales/ug.js");
/* harmony import */ var _locales_uk_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./locales/uk.js */ "./node_modules/@fullcalendar/core/locales/uk.js");
/* harmony import */ var _locales_uz_cy_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./locales/uz-cy.js */ "./node_modules/@fullcalendar/core/locales/uz-cy.js");
/* harmony import */ var _locales_uz_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./locales/uz.js */ "./node_modules/@fullcalendar/core/locales/uz.js");
/* harmony import */ var _locales_vi_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./locales/vi.js */ "./node_modules/@fullcalendar/core/locales/vi.js");
/* harmony import */ var _locales_zh_cn_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./locales/zh-cn.js */ "./node_modules/@fullcalendar/core/locales/zh-cn.js");
/* harmony import */ var _locales_zh_tw_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./locales/zh-tw.js */ "./node_modules/@fullcalendar/core/locales/zh-tw.js");















































































var localesAll = [_locales_af_js__WEBPACK_IMPORTED_MODULE_0__["default"], _locales_ar_dz_js__WEBPACK_IMPORTED_MODULE_1__["default"], _locales_ar_kw_js__WEBPACK_IMPORTED_MODULE_2__["default"], _locales_ar_ly_js__WEBPACK_IMPORTED_MODULE_3__["default"], _locales_ar_ma_js__WEBPACK_IMPORTED_MODULE_4__["default"], _locales_ar_sa_js__WEBPACK_IMPORTED_MODULE_5__["default"], _locales_ar_tn_js__WEBPACK_IMPORTED_MODULE_6__["default"], _locales_ar_js__WEBPACK_IMPORTED_MODULE_7__["default"], _locales_az_js__WEBPACK_IMPORTED_MODULE_8__["default"], _locales_bg_js__WEBPACK_IMPORTED_MODULE_9__["default"], _locales_bn_js__WEBPACK_IMPORTED_MODULE_10__["default"], _locales_bs_js__WEBPACK_IMPORTED_MODULE_11__["default"], _locales_ca_js__WEBPACK_IMPORTED_MODULE_12__["default"], _locales_cs_js__WEBPACK_IMPORTED_MODULE_13__["default"], _locales_cy_js__WEBPACK_IMPORTED_MODULE_14__["default"], _locales_da_js__WEBPACK_IMPORTED_MODULE_15__["default"], _locales_de_at_js__WEBPACK_IMPORTED_MODULE_16__["default"], _locales_de_js__WEBPACK_IMPORTED_MODULE_17__["default"], _locales_el_js__WEBPACK_IMPORTED_MODULE_18__["default"], _locales_en_au_js__WEBPACK_IMPORTED_MODULE_19__["default"], _locales_en_gb_js__WEBPACK_IMPORTED_MODULE_20__["default"], _locales_en_nz_js__WEBPACK_IMPORTED_MODULE_21__["default"], _locales_eo_js__WEBPACK_IMPORTED_MODULE_22__["default"], _locales_es_us_js__WEBPACK_IMPORTED_MODULE_23__["default"], _locales_es_js__WEBPACK_IMPORTED_MODULE_24__["default"], _locales_et_js__WEBPACK_IMPORTED_MODULE_25__["default"], _locales_eu_js__WEBPACK_IMPORTED_MODULE_26__["default"], _locales_fa_js__WEBPACK_IMPORTED_MODULE_27__["default"], _locales_fi_js__WEBPACK_IMPORTED_MODULE_28__["default"], _locales_fr_ca_js__WEBPACK_IMPORTED_MODULE_29__["default"], _locales_fr_ch_js__WEBPACK_IMPORTED_MODULE_30__["default"], _locales_fr_js__WEBPACK_IMPORTED_MODULE_31__["default"], _locales_gl_js__WEBPACK_IMPORTED_MODULE_32__["default"], _locales_he_js__WEBPACK_IMPORTED_MODULE_33__["default"], _locales_hi_js__WEBPACK_IMPORTED_MODULE_34__["default"], _locales_hr_js__WEBPACK_IMPORTED_MODULE_35__["default"], _locales_hu_js__WEBPACK_IMPORTED_MODULE_36__["default"], _locales_hy_am_js__WEBPACK_IMPORTED_MODULE_37__["default"], _locales_id_js__WEBPACK_IMPORTED_MODULE_38__["default"], _locales_is_js__WEBPACK_IMPORTED_MODULE_39__["default"], _locales_it_js__WEBPACK_IMPORTED_MODULE_40__["default"], _locales_ja_js__WEBPACK_IMPORTED_MODULE_41__["default"], _locales_ka_js__WEBPACK_IMPORTED_MODULE_42__["default"], _locales_kk_js__WEBPACK_IMPORTED_MODULE_43__["default"], _locales_km_js__WEBPACK_IMPORTED_MODULE_44__["default"], _locales_ko_js__WEBPACK_IMPORTED_MODULE_45__["default"], _locales_ku_js__WEBPACK_IMPORTED_MODULE_46__["default"], _locales_lb_js__WEBPACK_IMPORTED_MODULE_47__["default"], _locales_lt_js__WEBPACK_IMPORTED_MODULE_48__["default"], _locales_lv_js__WEBPACK_IMPORTED_MODULE_49__["default"], _locales_mk_js__WEBPACK_IMPORTED_MODULE_50__["default"], _locales_ms_js__WEBPACK_IMPORTED_MODULE_51__["default"], _locales_nb_js__WEBPACK_IMPORTED_MODULE_52__["default"], _locales_ne_js__WEBPACK_IMPORTED_MODULE_53__["default"], _locales_nl_js__WEBPACK_IMPORTED_MODULE_54__["default"], _locales_nn_js__WEBPACK_IMPORTED_MODULE_55__["default"], _locales_pl_js__WEBPACK_IMPORTED_MODULE_56__["default"], _locales_pt_br_js__WEBPACK_IMPORTED_MODULE_57__["default"], _locales_pt_js__WEBPACK_IMPORTED_MODULE_58__["default"], _locales_ro_js__WEBPACK_IMPORTED_MODULE_59__["default"], _locales_ru_js__WEBPACK_IMPORTED_MODULE_60__["default"], _locales_si_lk_js__WEBPACK_IMPORTED_MODULE_61__["default"], _locales_sk_js__WEBPACK_IMPORTED_MODULE_62__["default"], _locales_sl_js__WEBPACK_IMPORTED_MODULE_63__["default"], _locales_sm_js__WEBPACK_IMPORTED_MODULE_64__["default"], _locales_sq_js__WEBPACK_IMPORTED_MODULE_65__["default"], _locales_sr_cyrl_js__WEBPACK_IMPORTED_MODULE_66__["default"], _locales_sr_js__WEBPACK_IMPORTED_MODULE_67__["default"], _locales_sv_js__WEBPACK_IMPORTED_MODULE_68__["default"], _locales_ta_in_js__WEBPACK_IMPORTED_MODULE_69__["default"], _locales_th_js__WEBPACK_IMPORTED_MODULE_70__["default"], _locales_tr_js__WEBPACK_IMPORTED_MODULE_71__["default"], _locales_ug_js__WEBPACK_IMPORTED_MODULE_72__["default"], _locales_uk_js__WEBPACK_IMPORTED_MODULE_73__["default"], _locales_uz_cy_js__WEBPACK_IMPORTED_MODULE_74__["default"], _locales_uz_js__WEBPACK_IMPORTED_MODULE_75__["default"], _locales_vi_js__WEBPACK_IMPORTED_MODULE_76__["default"], _locales_zh_cn_js__WEBPACK_IMPORTED_MODULE_77__["default"], _locales_zh_tw_js__WEBPACK_IMPORTED_MODULE_78__["default"]];


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/af.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/af.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l0; }
/* harmony export */ });
var l0 = {
  code: 'af',
  week: {
    dow: 1,
    doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
  },
  buttonText: {
    prev: 'Vorige',
    next: 'Volgende',
    today: 'Vandag',
    year: 'Jaar',
    month: 'Maand',
    week: 'Week',
    day: 'Dag',
    list: 'Agenda'
  },
  allDayText: 'Heeldag',
  moreLinkText: 'Addisionele',
  noEventsText: 'Daar is geen gebeurtenisse nie'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ar-dz.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ar-dz.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l1; }
/* harmony export */ });
var l1 = {
  code: 'ar-dz',
  week: {
    dow: 0,
    doy: 4 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'السابق',
    next: 'التالي',
    today: 'اليوم',
    year: 'سنة',
    month: 'شهر',
    week: 'أسبوع',
    day: 'يوم',
    list: 'أجندة'
  },
  weekText: 'أسبوع',
  allDayText: 'اليوم كله',
  moreLinkText: 'أخرى',
  noEventsText: 'أي أحداث لعرض'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ar-kw.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ar-kw.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l2; }
/* harmony export */ });
var l2 = {
  code: 'ar-kw',
  week: {
    dow: 0,
    doy: 12 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'السابق',
    next: 'التالي',
    today: 'اليوم',
    year: 'سنة',
    month: 'شهر',
    week: 'أسبوع',
    day: 'يوم',
    list: 'أجندة'
  },
  weekText: 'أسبوع',
  allDayText: 'اليوم كله',
  moreLinkText: 'أخرى',
  noEventsText: 'أي أحداث لعرض'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ar-ly.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ar-ly.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l3; }
/* harmony export */ });
var l3 = {
  code: 'ar-ly',
  week: {
    dow: 6,
    doy: 12 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'السابق',
    next: 'التالي',
    today: 'اليوم',
    year: 'سنة',
    month: 'شهر',
    week: 'أسبوع',
    day: 'يوم',
    list: 'أجندة'
  },
  weekText: 'أسبوع',
  allDayText: 'اليوم كله',
  moreLinkText: 'أخرى',
  noEventsText: 'أي أحداث لعرض'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ar-ma.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ar-ma.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l4; }
/* harmony export */ });
var l4 = {
  code: 'ar-ma',
  week: {
    dow: 6,
    doy: 12 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'السابق',
    next: 'التالي',
    today: 'اليوم',
    year: 'سنة',
    month: 'شهر',
    week: 'أسبوع',
    day: 'يوم',
    list: 'أجندة'
  },
  weekText: 'أسبوع',
  allDayText: 'اليوم كله',
  moreLinkText: 'أخرى',
  noEventsText: 'أي أحداث لعرض'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ar-sa.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ar-sa.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l5; }
/* harmony export */ });
var l5 = {
  code: 'ar-sa',
  week: {
    dow: 0,
    doy: 6 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'السابق',
    next: 'التالي',
    today: 'اليوم',
    year: 'سنة',
    month: 'شهر',
    week: 'أسبوع',
    day: 'يوم',
    list: 'أجندة'
  },
  weekText: 'أسبوع',
  allDayText: 'اليوم كله',
  moreLinkText: 'أخرى',
  noEventsText: 'أي أحداث لعرض'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ar-tn.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ar-tn.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l6; }
/* harmony export */ });
var l6 = {
  code: 'ar-tn',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'السابق',
    next: 'التالي',
    today: 'اليوم',
    year: 'سنة',
    month: 'شهر',
    week: 'أسبوع',
    day: 'يوم',
    list: 'أجندة'
  },
  weekText: 'أسبوع',
  allDayText: 'اليوم كله',
  moreLinkText: 'أخرى',
  noEventsText: 'أي أحداث لعرض'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ar.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ar.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l7; }
/* harmony export */ });
var l7 = {
  code: 'ar',
  week: {
    dow: 6,
    doy: 12 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'السابق',
    next: 'التالي',
    today: 'اليوم',
    year: 'سنة',
    month: 'شهر',
    week: 'أسبوع',
    day: 'يوم',
    list: 'أجندة'
  },
  weekText: 'أسبوع',
  allDayText: 'اليوم كله',
  moreLinkText: 'أخرى',
  noEventsText: 'أي أحداث لعرض'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/az.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/az.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l8; }
/* harmony export */ });
var l8 = {
  code: 'az',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Əvvəl',
    next: 'Sonra',
    today: 'Bu Gün',
    year: 'Il',
    month: 'Ay',
    week: 'Həftə',
    day: 'Gün',
    list: 'Gündəm'
  },
  weekText: 'Həftə',
  allDayText: 'Bütün Gün',
  moreLinkText: function moreLinkText(n) {
    return '+ daha çox ' + n;
  },
  noEventsText: 'Göstərmək üçün hadisə yoxdur'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/bg.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/bg.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l9; }
/* harmony export */ });
var l9 = {
  code: 'bg',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'назад',
    next: 'напред',
    today: 'днес',
    year: 'година',
    month: 'Месец',
    week: 'Седмица',
    day: 'Ден',
    list: 'График'
  },
  allDayText: 'Цял ден',
  moreLinkText: function moreLinkText(n) {
    return '+още ' + n;
  },
  noEventsText: 'Няма събития за показване'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/bn.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/bn.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l10; }
/* harmony export */ });
var l10 = {
  code: 'bn',
  week: {
    dow: 0,
    doy: 6 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'পেছনে',
    next: 'সামনে',
    today: 'আজ',
    year: 'বছর',
    month: 'মাস',
    week: 'সপ্তাহ',
    day: 'দিন',
    list: 'তালিকা'
  },
  weekText: 'সপ্তাহ',
  allDayText: 'সারাদিন',
  moreLinkText: function moreLinkText(n) {
    return '+অন্যান্য ' + n;
  },
  noEventsText: 'কোনো ইভেন্ট নেই'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/bs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/bs.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l11; }
/* harmony export */ });
var l11 = {
  code: 'bs',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Prošli',
    next: 'Sljedeći',
    today: 'Danas',
    year: 'Godina',
    month: 'Mjesec',
    week: 'Sedmica',
    day: 'Dan',
    list: 'Raspored'
  },
  weekText: 'Sed',
  allDayText: 'Cijeli dan',
  moreLinkText: function moreLinkText(n) {
    return '+ još ' + n;
  },
  noEventsText: 'Nema događaja za prikazivanje'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ca.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ca.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l12; }
/* harmony export */ });
var l12 = {
  code: 'ca',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Anterior',
    next: 'Següent',
    today: 'Avui',
    year: 'Any',
    month: 'Mes',
    week: 'Setmana',
    day: 'Dia',
    list: 'Agenda'
  },
  weekText: 'Set',
  allDayText: 'Tot el dia',
  moreLinkText: 'més',
  noEventsText: 'No hi ha esdeveniments per mostrar'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/cs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/cs.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l13; }
/* harmony export */ });
var l13 = {
  code: 'cs',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Dříve',
    next: 'Později',
    today: 'Nyní',
    year: 'Rok',
    month: 'Měsíc',
    week: 'Týden',
    day: 'Den',
    list: 'Agenda'
  },
  weekText: 'Týd',
  allDayText: 'Celý den',
  moreLinkText: function moreLinkText(n) {
    return '+další: ' + n;
  },
  noEventsText: 'Žádné akce k zobrazení'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/cy.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/cy.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l14; }
/* harmony export */ });
var l14 = {
  code: 'cy',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Blaenorol',
    next: 'Nesaf',
    today: 'Heddiw',
    year: 'Blwyddyn',
    month: 'Mis',
    week: 'Wythnos',
    day: 'Dydd',
    list: 'Rhestr'
  },
  weekText: 'Wythnos',
  allDayText: 'Trwy\'r dydd',
  moreLinkText: 'Mwy',
  noEventsText: 'Dim digwyddiadau'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/da.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/da.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l15; }
/* harmony export */ });
var l15 = {
  code: 'da',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Forrige',
    next: 'Næste',
    today: 'I dag',
    year: 'År',
    month: 'Måned',
    week: 'Uge',
    day: 'Dag',
    list: 'Agenda'
  },
  weekText: 'Uge',
  allDayText: 'Hele dagen',
  moreLinkText: 'flere',
  noEventsText: 'Ingen arrangementer at vise'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/de-at.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/de-at.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l16; }
/* harmony export */ });
function affix(buttonText) {
  return buttonText === 'Tag' || buttonText === 'Monat' ? 'r' : buttonText === 'Jahr' ? 's' : '';
}
var l16 = {
  code: 'de-at',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Zurück',
    next: 'Vor',
    today: 'Heute',
    year: 'Jahr',
    month: 'Monat',
    week: 'Woche',
    day: 'Tag',
    list: 'Terminübersicht'
  },
  weekText: 'KW',
  weekTextLong: 'Woche',
  allDayText: 'Ganztägig',
  moreLinkText: function moreLinkText(n) {
    return '+ weitere ' + n;
  },
  noEventsText: 'Keine Ereignisse anzuzeigen',
  buttonHints: {
    prev: function prev(buttonText) {
      return "Vorherige".concat(affix(buttonText), " ").concat(buttonText);
    },
    next: function next(buttonText) {
      return "N\xE4chste".concat(affix(buttonText), " ").concat(buttonText);
    },
    today: function today(buttonText) {
      // → Heute, Diese Woche, Dieser Monat, Dieses Jahr
      if (buttonText === 'Tag') {
        return 'Heute';
      }
      return "Diese".concat(affix(buttonText), " ").concat(buttonText);
    }
  },
  viewHint: function viewHint(buttonText) {
    // → Tagesansicht, Wochenansicht, Monatsansicht, Jahresansicht
    var glue = buttonText === 'Woche' ? 'n' : buttonText === 'Monat' ? 's' : 'es';
    return buttonText + glue + 'ansicht';
  },
  navLinkHint: 'Gehe zu $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return 'Zeige ' + (eventCnt === 1 ? 'ein weiteres Ereignis' : eventCnt + ' weitere Ereignisse');
  },
  closeHint: 'Schließen',
  timeHint: 'Uhrzeit',
  eventHint: 'Ereignis'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/de.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/de.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l17; }
/* harmony export */ });
function affix(buttonText) {
  return buttonText === 'Tag' || buttonText === 'Monat' ? 'r' : buttonText === 'Jahr' ? 's' : '';
}
var l17 = {
  code: 'de',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Zurück',
    next: 'Vor',
    today: 'Heute',
    year: 'Jahr',
    month: 'Monat',
    week: 'Woche',
    day: 'Tag',
    list: 'Terminübersicht'
  },
  weekText: 'KW',
  weekTextLong: 'Woche',
  allDayText: 'Ganztägig',
  moreLinkText: function moreLinkText(n) {
    return '+ weitere ' + n;
  },
  noEventsText: 'Keine Ereignisse anzuzeigen',
  buttonHints: {
    prev: function prev(buttonText) {
      return "Vorherige".concat(affix(buttonText), " ").concat(buttonText);
    },
    next: function next(buttonText) {
      return "N\xE4chste".concat(affix(buttonText), " ").concat(buttonText);
    },
    today: function today(buttonText) {
      // → Heute, Diese Woche, Dieser Monat, Dieses Jahr
      if (buttonText === 'Tag') {
        return 'Heute';
      }
      return "Diese".concat(affix(buttonText), " ").concat(buttonText);
    }
  },
  viewHint: function viewHint(buttonText) {
    // → Tagesansicht, Wochenansicht, Monatsansicht, Jahresansicht
    var glue = buttonText === 'Woche' ? 'n' : buttonText === 'Monat' ? 's' : 'es';
    return buttonText + glue + 'ansicht';
  },
  navLinkHint: 'Gehe zu $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return 'Zeige ' + (eventCnt === 1 ? 'ein weiteres Ereignis' : eventCnt + ' weitere Ereignisse');
  },
  closeHint: 'Schließen',
  timeHint: 'Uhrzeit',
  eventHint: 'Ereignis'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/el.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/el.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l18; }
/* harmony export */ });
var l18 = {
  code: 'el',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4st is the first week of the year.
  },
  buttonText: {
    prev: 'Προηγούμενος',
    next: 'Επόμενος',
    today: 'Σήμερα',
    year: 'Ετος',
    month: 'Μήνας',
    week: 'Εβδομάδα',
    day: 'Ημέρα',
    list: 'Ατζέντα'
  },
  weekText: 'Εβδ',
  allDayText: 'Ολοήμερο',
  moreLinkText: 'περισσότερα',
  noEventsText: 'Δεν υπάρχουν γεγονότα προς εμφάνιση'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/en-au.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/en-au.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l19; }
/* harmony export */ });
var l19 = {
  code: 'en-au',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonHints: {
    prev: 'Previous $0',
    next: 'Next $0',
    today: 'This $0'
  },
  viewHint: '$0 view',
  navLinkHint: 'Go to $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Show ".concat(eventCnt, " more event").concat(eventCnt === 1 ? '' : 's');
  }
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/en-gb.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/en-gb.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l20; }
/* harmony export */ });
var l20 = {
  code: 'en-gb',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonHints: {
    prev: 'Previous $0',
    next: 'Next $0',
    today: 'This $0'
  },
  viewHint: '$0 view',
  navLinkHint: 'Go to $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Show ".concat(eventCnt, " more event").concat(eventCnt === 1 ? '' : 's');
  }
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/en-nz.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/en-nz.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l21; }
/* harmony export */ });
var l21 = {
  code: 'en-nz',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonHints: {
    prev: 'Previous $0',
    next: 'Next $0',
    today: 'This $0'
  },
  viewHint: '$0 view',
  navLinkHint: 'Go to $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Show ".concat(eventCnt, " more event").concat(eventCnt === 1 ? '' : 's');
  }
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/eo.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/eo.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l22; }
/* harmony export */ });
var l22 = {
  code: 'eo',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Antaŭa',
    next: 'Sekva',
    today: 'Hodiaŭ',
    year: 'Jaro',
    month: 'Monato',
    week: 'Semajno',
    day: 'Tago',
    list: 'Tagordo'
  },
  weekText: 'Sm',
  allDayText: 'Tuta tago',
  moreLinkText: 'pli',
  noEventsText: 'Neniuj eventoj por montri'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/es-us.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/es-us.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l23; }
/* harmony export */ });
var l23 = {
  code: 'es',
  week: {
    dow: 0,
    doy: 6 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Ant',
    next: 'Sig',
    today: 'Hoy',
    year: 'Año',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    list: 'Agenda'
  },
  weekText: 'Sm',
  allDayText: 'Todo el día',
  moreLinkText: 'más',
  noEventsText: 'No hay eventos para mostrar'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/es.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/es.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l24; }
/* harmony export */ });
var l24 = {
  code: 'es',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Ant',
    next: 'Sig',
    today: 'Hoy',
    year: 'Año',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    list: 'Agenda'
  },
  buttonHints: {
    prev: '$0 antes',
    next: '$0 siguiente',
    today: function today(buttonText) {
      return buttonText === 'Día' ? 'Hoy' : (buttonText === 'Semana' ? 'Esta' : 'Este') + ' ' + buttonText.toLocaleLowerCase();
    }
  },
  viewHint: function viewHint(buttonText) {
    return 'Vista ' + (buttonText === 'Semana' ? 'de la' : 'del') + ' ' + buttonText.toLocaleLowerCase();
  },
  weekText: 'Sm',
  weekTextLong: 'Semana',
  allDayText: 'Todo el día',
  moreLinkText: 'más',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Mostrar ".concat(eventCnt, " eventos m\xE1s");
  },
  noEventsText: 'No hay eventos para mostrar',
  navLinkHint: 'Ir al $0',
  closeHint: 'Cerrar',
  timeHint: 'La hora',
  eventHint: 'Evento'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/et.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/et.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l25; }
/* harmony export */ });
var l25 = {
  code: 'et',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Eelnev',
    next: 'Järgnev',
    today: 'Täna',
    year: 'Aasta',
    month: 'Kuu',
    week: 'Nädal',
    day: 'Päev',
    list: 'Päevakord'
  },
  weekText: 'näd',
  allDayText: 'Kogu päev',
  moreLinkText: function moreLinkText(n) {
    return '+ veel ' + n;
  },
  noEventsText: 'Kuvamiseks puuduvad sündmused'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/eu.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/eu.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l26; }
/* harmony export */ });
var l26 = {
  code: 'eu',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Aur',
    next: 'Hur',
    today: 'Gaur',
    year: 'Urtea',
    month: 'Hilabetea',
    week: 'Astea',
    day: 'Eguna',
    list: 'Agenda'
  },
  weekText: 'As',
  allDayText: 'Egun osoa',
  moreLinkText: 'gehiago',
  noEventsText: 'Ez dago ekitaldirik erakusteko'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/fa.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/fa.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l27; }
/* harmony export */ });
var l27 = {
  code: 'fa',
  week: {
    dow: 6,
    doy: 12 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'قبلی',
    next: 'بعدی',
    today: 'امروز',
    year: 'سال',
    month: 'ماه',
    week: 'هفته',
    day: 'روز',
    list: 'برنامه'
  },
  weekText: 'هف',
  allDayText: 'تمام روز',
  moreLinkText: function moreLinkText(n) {
    return 'بیش از ' + n;
  },
  noEventsText: 'هیچ رویدادی به نمایش'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/fi.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/fi.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l28; }
/* harmony export */ });
var l28 = {
  code: 'fi',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Edellinen',
    next: 'Seuraava',
    today: 'Tänään',
    year: 'Vuosi',
    month: 'Kuukausi',
    week: 'Viikko',
    day: 'Päivä',
    list: 'Tapahtumat'
  },
  weekText: 'Vk',
  allDayText: 'Koko päivä',
  moreLinkText: 'lisää',
  noEventsText: 'Ei näytettäviä tapahtumia'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/fr-ca.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/fr-ca.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l29; }
/* harmony export */ });
var l29 = {
  code: 'fr',
  buttonText: {
    prev: 'Précédent',
    next: 'Suivant',
    today: 'Aujourd\'hui',
    year: 'Année',
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    list: 'Mon planning'
  },
  weekText: 'Sem.',
  allDayText: 'Toute la journée',
  moreLinkText: 'en plus',
  noEventsText: 'Aucun évènement à afficher'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/fr-ch.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/fr-ch.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l30; }
/* harmony export */ });
var l30 = {
  code: 'fr-ch',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Précédent',
    next: 'Suivant',
    today: 'Courant',
    year: 'Année',
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    list: 'Mon planning'
  },
  weekText: 'Sm',
  allDayText: 'Toute la journée',
  moreLinkText: 'en plus',
  noEventsText: 'Aucun évènement à afficher'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/fr.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/fr.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l31; }
/* harmony export */ });
var l31 = {
  code: 'fr',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Précédent',
    next: 'Suivant',
    today: 'Aujourd\'hui',
    year: 'Année',
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    list: 'Planning'
  },
  weekText: 'Sem.',
  weekTextLong: 'Semaine',
  allDayText: 'Toute la journée',
  moreLinkText: 'en plus',
  noEventsText: 'Aucun évènement à afficher'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/gl.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/gl.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l32; }
/* harmony export */ });
var l32 = {
  code: 'gl',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Ant',
    next: 'Seg',
    today: 'Hoxe',
    year: 'Ano',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    list: 'Axenda'
  },
  buttonHints: {
    prev: '$0 antes',
    next: '$0 seguinte',
    today: function today(buttonText) {
      return buttonText === 'Día' ? 'Hoxe' : (buttonText === 'Semana' ? 'Esta' : 'Este') + ' ' + buttonText.toLocaleLowerCase();
    }
  },
  viewHint: function viewHint(buttonText) {
    return 'Vista ' + (buttonText === 'Semana' ? 'da' : 'do') + ' ' + buttonText.toLocaleLowerCase();
  },
  weekText: 'Sm',
  weekTextLong: 'Semana',
  allDayText: 'Todo o día',
  moreLinkText: 'máis',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Amosar ".concat(eventCnt, " eventos m\xE1is");
  },
  noEventsText: 'Non hai eventos para amosar',
  navLinkHint: 'Ir ao $0',
  closeHint: 'Pechar',
  timeHint: 'A hora',
  eventHint: 'Evento'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/he.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/he.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l33; }
/* harmony export */ });
var l33 = {
  code: 'he',
  direction: 'rtl',
  buttonText: {
    prev: 'הקודם',
    next: 'הבא',
    today: 'היום',
    year: 'שנה',
    month: 'חודש',
    week: 'שבוע',
    day: 'יום',
    list: 'סדר יום'
  },
  allDayText: 'כל היום',
  moreLinkText: 'נוספים',
  noEventsText: 'אין אירועים להצגה',
  weekText: 'שבוע'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/hi.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/hi.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l34; }
/* harmony export */ });
var l34 = {
  code: 'hi',
  week: {
    dow: 0,
    doy: 6 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'पिछला',
    next: 'अगला',
    today: 'आज',
    year: 'वर्ष',
    month: 'महीना',
    week: 'सप्ताह',
    day: 'दिन',
    list: 'कार्यसूची'
  },
  weekText: 'हफ्ता',
  allDayText: 'सभी दिन',
  moreLinkText: function moreLinkText(n) {
    return '+अधिक ' + n;
  },
  noEventsText: 'कोई घटनाओं को प्रदर्शित करने के लिए'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/hr.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/hr.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l35; }
/* harmony export */ });
var l35 = {
  code: 'hr',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Prijašnji',
    next: 'Sljedeći',
    today: 'Danas',
    year: 'Godina',
    month: 'Mjesec',
    week: 'Tjedan',
    day: 'Dan',
    list: 'Raspored'
  },
  weekText: 'Tje',
  allDayText: 'Cijeli dan',
  moreLinkText: function moreLinkText(n) {
    return '+ još ' + n;
  },
  noEventsText: 'Nema događaja za prikaz'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/hu.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/hu.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l36; }
/* harmony export */ });
var l36 = {
  code: 'hu',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'vissza',
    next: 'előre',
    today: 'ma',
    year: 'Év',
    month: 'Hónap',
    week: 'Hét',
    day: 'Nap',
    list: 'Lista'
  },
  weekText: 'Hét',
  allDayText: 'Egész nap',
  moreLinkText: 'további',
  noEventsText: 'Nincs megjeleníthető esemény'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/hy-am.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/hy-am.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l37; }
/* harmony export */ });
var l37 = {
  code: 'hy-am',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Նախորդ',
    next: 'Հաջորդ',
    today: 'Այսօր',
    year: 'Տարի',
    month: 'Ամիս',
    week: 'Շաբաթ',
    day: 'Օր',
    list: 'Օրվա ցուցակ'
  },
  weekText: 'Շաբ',
  allDayText: 'Ամբողջ օր',
  moreLinkText: function moreLinkText(n) {
    return '+ ևս ' + n;
  },
  noEventsText: 'Բացակայում է իրադարձությունը ցուցադրելու'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/id.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/id.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l38; }
/* harmony export */ });
var l38 = {
  code: 'id',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'mundur',
    next: 'maju',
    today: 'hari ini',
    year: 'Tahun',
    month: 'Bulan',
    week: 'Minggu',
    day: 'Hari',
    list: 'Agenda'
  },
  weekText: 'Mg',
  allDayText: 'Sehari penuh',
  moreLinkText: 'lebih',
  noEventsText: 'Tidak ada acara untuk ditampilkan'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/is.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/is.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l39; }
/* harmony export */ });
var l39 = {
  code: 'is',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Fyrri',
    next: 'Næsti',
    today: 'Í dag',
    year: 'Ár',
    month: 'Mánuður',
    week: 'Vika',
    day: 'Dagur',
    list: 'Dagskrá'
  },
  weekText: 'Vika',
  allDayText: 'Allan daginn',
  moreLinkText: 'meira',
  noEventsText: 'Engir viðburðir til að sýna'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/it.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/it.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l40; }
/* harmony export */ });
var l40 = {
  code: 'it',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Prec',
    next: 'Succ',
    today: 'Oggi',
    year: 'Anno',
    month: 'Mese',
    week: 'Settimana',
    day: 'Giorno',
    list: 'Agenda'
  },
  weekText: 'Sm',
  allDayText: 'Tutto il giorno',
  moreLinkText: function moreLinkText(n) {
    return '+altri ' + n;
  },
  noEventsText: 'Non ci sono eventi da visualizzare'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ja.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ja.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l41; }
/* harmony export */ });
var l41 = {
  code: 'ja',
  buttonText: {
    prev: '前',
    next: '次',
    today: '今日',
    year: '年',
    month: '月',
    week: '週',
    day: '日',
    list: '予定リスト'
  },
  weekText: '週',
  allDayText: '終日',
  moreLinkText: function moreLinkText(n) {
    return '他 ' + n + ' 件';
  },
  noEventsText: '表示する予定はありません'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ka.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ka.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l42; }
/* harmony export */ });
var l42 = {
  code: 'ka',
  week: {
    dow: 1,
    doy: 7
  },
  buttonText: {
    prev: 'წინა',
    next: 'შემდეგი',
    today: 'დღეს',
    year: 'წელიწადი',
    month: 'თვე',
    week: 'კვირა',
    day: 'დღე',
    list: 'დღის წესრიგი'
  },
  weekText: 'კვ',
  allDayText: 'მთელი დღე',
  moreLinkText: function moreLinkText(n) {
    return '+ კიდევ ' + n;
  },
  noEventsText: 'ღონისძიებები არ არის'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/kk.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/kk.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l43; }
/* harmony export */ });
var l43 = {
  code: 'kk',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Алдыңғы',
    next: 'Келесі',
    today: 'Бүгін',
    year: 'Жыл',
    month: 'Ай',
    week: 'Апта',
    day: 'Күн',
    list: 'Күн тәртібі'
  },
  weekText: 'Не',
  allDayText: 'Күні бойы',
  moreLinkText: function moreLinkText(n) {
    return '+ тағы ' + n;
  },
  noEventsText: 'Көрсету үшін оқиғалар жоқ'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/km.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/km.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l44; }
/* harmony export */ });
var l44 = {
  code: 'km',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'មុន',
    next: 'បន្ទាប់',
    today: 'ថ្ងៃនេះ',
    year: 'ឆ្នាំ',
    month: 'ខែ',
    week: 'សប្តាហ៍',
    day: 'ថ្ងៃ',
    list: 'បញ្ជី'
  },
  weekText: 'សប្តាហ៍',
  allDayText: 'ពេញមួយថ្ងៃ',
  moreLinkText: 'ច្រើនទៀត',
  noEventsText: 'គ្មានព្រឹត្តិការណ៍ត្រូវបង្ហាញ'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ko.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ko.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l45; }
/* harmony export */ });
var l45 = {
  code: 'ko',
  buttonText: {
    prev: '이전달',
    next: '다음달',
    today: '오늘',
    year: '년도',
    month: '월',
    week: '주',
    day: '일',
    list: '일정목록'
  },
  weekText: '주',
  allDayText: '종일',
  moreLinkText: '개',
  noEventsText: '일정이 없습니다'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ku.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ku.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l46; }
/* harmony export */ });
var l46 = {
  code: 'ku',
  week: {
    dow: 6,
    doy: 12 // The week that contains Jan 1st is the first week of the year.
  },
  direction: 'rtl',
  buttonText: {
    prev: 'پێشتر',
    next: 'دواتر',
    today: 'ئەمڕو',
    year: 'ساڵ',
    month: 'مانگ',
    week: 'هەفتە',
    day: 'ڕۆژ',
    list: 'بەرنامە'
  },
  weekText: 'هەفتە',
  allDayText: 'هەموو ڕۆژەکە',
  moreLinkText: 'زیاتر',
  noEventsText: 'هیچ ڕووداوێك نیە'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/lb.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/lb.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l47; }
/* harmony export */ });
var l47 = {
  code: 'lb',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Zréck',
    next: 'Weider',
    today: 'Haut',
    year: 'Joer',
    month: 'Mount',
    week: 'Woch',
    day: 'Dag',
    list: 'Terminiwwersiicht'
  },
  weekText: 'W',
  allDayText: 'Ganzen Dag',
  moreLinkText: 'méi',
  noEventsText: 'Nee Evenementer ze affichéieren'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/lt.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/lt.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l48; }
/* harmony export */ });
var l48 = {
  code: 'lt',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Atgal',
    next: 'Pirmyn',
    today: 'Šiandien',
    year: 'Metai',
    month: 'Mėnuo',
    week: 'Savaitė',
    day: 'Diena',
    list: 'Darbotvarkė'
  },
  weekText: 'SAV',
  allDayText: 'Visą dieną',
  moreLinkText: 'daugiau',
  noEventsText: 'Nėra įvykių rodyti'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/lv.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/lv.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l49; }
/* harmony export */ });
var l49 = {
  code: 'lv',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Iepr.',
    next: 'Nāk.',
    today: 'Šodien',
    year: 'Gads',
    month: 'Mēnesis',
    week: 'Nedēļa',
    day: 'Diena',
    list: 'Dienas kārtība'
  },
  weekText: 'Ned.',
  allDayText: 'Visu dienu',
  moreLinkText: function moreLinkText(n) {
    return '+vēl ' + n;
  },
  noEventsText: 'Nav notikumu'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/mk.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/mk.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l50; }
/* harmony export */ });
var l50 = {
  code: 'mk',
  buttonText: {
    prev: 'претходно',
    next: 'следно',
    today: 'Денес',
    year: 'година',
    month: 'Месец',
    week: 'Недела',
    day: 'Ден',
    list: 'График'
  },
  weekText: 'Сед',
  allDayText: 'Цел ден',
  moreLinkText: function moreLinkText(n) {
    return '+повеќе ' + n;
  },
  noEventsText: 'Нема настани за прикажување'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ms.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ms.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l51; }
/* harmony export */ });
var l51 = {
  code: 'ms',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Sebelum',
    next: 'Selepas',
    today: 'hari ini',
    year: 'Tahun',
    month: 'Bulan',
    week: 'Minggu',
    day: 'Hari',
    list: 'Agenda'
  },
  weekText: 'Mg',
  allDayText: 'Sepanjang hari',
  moreLinkText: function moreLinkText(n) {
    return 'masih ada ' + n + ' acara';
  },
  noEventsText: 'Tiada peristiwa untuk dipaparkan'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/nb.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/nb.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l52; }
/* harmony export */ });
var l52 = {
  code: 'nb',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Forrige',
    next: 'Neste',
    today: 'I dag',
    year: 'År',
    month: 'Måned',
    week: 'Uke',
    day: 'Dag',
    list: 'Agenda'
  },
  weekText: 'Uke',
  weekTextLong: 'Uke',
  allDayText: 'Hele dagen',
  moreLinkText: 'til',
  noEventsText: 'Ingen hendelser å vise',
  buttonHints: {
    prev: 'Forrige $0',
    next: 'Neste $0',
    today: 'Nåværende $0'
  },
  viewHint: '$0 visning',
  navLinkHint: 'Gå til $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Vis ".concat(eventCnt, " flere hendelse").concat(eventCnt === 1 ? '' : 'r');
  }
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ne.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ne.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l53; }
/* harmony export */ });
var l53 = {
  code: 'ne',
  week: {
    dow: 7,
    doy: 1 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'अघिल्लो',
    next: 'अर्को',
    today: 'आज',
    year: 'वर्ष',
    month: 'महिना',
    week: 'हप्ता',
    day: 'दिन',
    list: 'सूची'
  },
  weekText: 'हप्ता',
  allDayText: 'दिनभरि',
  moreLinkText: 'थप लिंक',
  noEventsText: 'देखाउनको लागि कुनै घटनाहरू छैनन्'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/nl.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/nl.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l54; }
/* harmony export */ });
var l54 = {
  code: 'nl',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Vorige',
    next: 'Volgende',
    today: 'Vandaag',
    year: 'Jaar',
    month: 'Maand',
    week: 'Week',
    day: 'Dag',
    list: 'Lijst'
  },
  allDayText: 'Hele dag',
  moreLinkText: 'extra',
  noEventsText: 'Geen evenementen om te laten zien'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/nn.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/nn.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l55; }
/* harmony export */ });
var l55 = {
  code: 'nn',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Førre',
    next: 'Neste',
    today: 'I dag',
    year: 'År',
    month: 'Månad',
    week: 'Veke',
    day: 'Dag',
    list: 'Agenda'
  },
  weekText: 'Veke',
  allDayText: 'Heile dagen',
  moreLinkText: 'til',
  noEventsText: 'Ingen hendelser å vise'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/pl.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/pl.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l56; }
/* harmony export */ });
var l56 = {
  code: 'pl',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Poprzedni',
    next: 'Następny',
    today: 'Dziś',
    year: 'Rok',
    month: 'Miesiąc',
    week: 'Tydzień',
    day: 'Dzień',
    list: 'Plan dnia'
  },
  weekText: 'Tydz',
  allDayText: 'Cały dzień',
  moreLinkText: 'więcej',
  noEventsText: 'Brak wydarzeń do wyświetlenia'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/pt-br.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/pt-br.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l57; }
/* harmony export */ });
var l57 = {
  code: 'pt-br',
  buttonText: {
    prev: 'Anterior',
    next: 'Próximo',
    prevYear: 'Ano anterior',
    nextYear: 'Próximo ano',
    year: 'Ano',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    list: 'Lista'
  },
  buttonHints: {
    prev: '$0 Anterior',
    next: 'Próximo $0',
    today: function today(buttonText) {
      return buttonText === 'Dia' ? 'Hoje' : (buttonText === 'Semana' ? 'Esta' : 'Este') + ' ' + buttonText.toLocaleLowerCase();
    }
  },
  viewHint: function viewHint(buttonText) {
    return 'Visualizar ' + (buttonText === 'Semana' ? 'a' : 'o') + ' ' + buttonText.toLocaleLowerCase();
  },
  weekText: 'Sm',
  weekTextLong: 'Semana',
  allDayText: 'dia inteiro',
  moreLinkText: function moreLinkText(n) {
    return 'mais +' + n;
  },
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Mostrar mais ".concat(eventCnt, " eventos");
  },
  noEventsText: 'Não há eventos para mostrar',
  navLinkHint: 'Ir para $0',
  closeHint: 'Fechar',
  timeHint: 'A hora',
  eventHint: 'Evento'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/pt.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/pt.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l58; }
/* harmony export */ });
var l58 = {
  code: 'pt',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Anterior',
    next: 'Seguinte',
    today: 'Hoje',
    year: 'Ano',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    list: 'Agenda'
  },
  weekText: 'Sem',
  allDayText: 'Todo o dia',
  moreLinkText: 'mais',
  noEventsText: 'Não há eventos para mostrar'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ro.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ro.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l59; }
/* harmony export */ });
var l59 = {
  code: 'ro',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'precedentă',
    next: 'următoare',
    today: 'Azi',
    year: 'An',
    month: 'Lună',
    week: 'Săptămână',
    day: 'Zi',
    list: 'Agendă'
  },
  weekText: 'Săpt',
  allDayText: 'Toată ziua',
  moreLinkText: function moreLinkText(n) {
    return '+alte ' + n;
  },
  noEventsText: 'Nu există evenimente de afișat'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ru.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ru.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l60; }
/* harmony export */ });
var l60 = {
  code: 'ru',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Пред',
    next: 'След',
    today: 'Сегодня',
    year: 'Год',
    month: 'Месяц',
    week: 'Неделя',
    day: 'День',
    list: 'Повестка дня'
  },
  weekText: 'Нед',
  allDayText: 'Весь день',
  moreLinkText: function moreLinkText(n) {
    return '+ ещё ' + n;
  },
  noEventsText: 'Нет событий для отображения'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/si-lk.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/si-lk.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l61; }
/* harmony export */ });
var l61 = {
  code: 'si-lk',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'පෙර',
    next: 'පසු',
    today: 'අද',
    year: 'අවුරුදු',
    month: 'මාසය',
    week: 'සතිය',
    day: 'දවස',
    list: 'ලැයිස්තුව'
  },
  weekText: 'සති',
  allDayText: 'සියලු',
  moreLinkText: 'තවත්',
  noEventsText: 'මුකුත් නැත'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/sk.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/sk.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l62; }
/* harmony export */ });
var l62 = {
  code: 'sk',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Predchádzajúci',
    next: 'Nasledujúci',
    today: 'Dnes',
    year: 'Rok',
    month: 'Mesiac',
    week: 'Týždeň',
    day: 'Deň',
    list: 'Rozvrh'
  },
  weekText: 'Ty',
  allDayText: 'Celý deň',
  moreLinkText: function moreLinkText(n) {
    return '+ďalšie: ' + n;
  },
  noEventsText: 'Žiadne akcie na zobrazenie'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/sl.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/sl.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l63; }
/* harmony export */ });
var l63 = {
  code: 'sl',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Prejšnji',
    next: 'Naslednji',
    today: 'Trenutni',
    year: 'Leto',
    month: 'Mesec',
    week: 'Teden',
    day: 'Dan',
    list: 'Dnevni red'
  },
  weekText: 'Teden',
  allDayText: 'Ves dan',
  moreLinkText: 'več',
  noEventsText: 'Ni dogodkov za prikaz'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/sm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/sm.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l64; }
/* harmony export */ });
var l64 = {
  code: 'sm',
  buttonText: {
    prev: 'Talu ai',
    next: 'Mulimuli atu',
    today: 'Aso nei',
    year: 'Tausaga',
    month: 'Masina',
    week: 'Vaiaso',
    day: 'Aso',
    list: 'Faasologa'
  },
  weekText: 'Vaiaso',
  allDayText: 'Aso atoa',
  moreLinkText: 'sili atu',
  noEventsText: 'Leai ni mea na tutupu'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/sq.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/sq.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l65; }
/* harmony export */ });
var l65 = {
  code: 'sq',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'mbrapa',
    next: 'Përpara',
    today: 'Sot',
    year: 'Viti',
    month: 'Muaj',
    week: 'Javë',
    day: 'Ditë',
    list: 'Listë'
  },
  weekText: 'Ja',
  allDayText: 'Gjithë ditën',
  moreLinkText: function moreLinkText(n) {
    return '+më tepër ' + n;
  },
  noEventsText: 'Nuk ka evente për të shfaqur'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/sr-cyrl.js":
/*!************************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/sr-cyrl.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l66; }
/* harmony export */ });
var l66 = {
  code: 'sr-cyrl',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Претходна',
    next: 'следећи',
    today: 'Данас',
    year: 'Година',
    month: 'Месец',
    week: 'Недеља',
    day: 'Дан',
    list: 'Планер'
  },
  weekText: 'Сед',
  allDayText: 'Цео дан',
  moreLinkText: function moreLinkText(n) {
    return '+ још ' + n;
  },
  noEventsText: 'Нема догађаја за приказ'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/sr.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/sr.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l67; }
/* harmony export */ });
var l67 = {
  code: 'sr',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Prethodna',
    next: 'Sledeći',
    today: 'Danas',
    year: 'Godina',
    month: 'Mеsеc',
    week: 'Nеdеlja',
    day: 'Dan',
    list: 'Planеr'
  },
  weekText: 'Sed',
  allDayText: 'Cеo dan',
  moreLinkText: function moreLinkText(n) {
    return '+ još ' + n;
  },
  noEventsText: 'Nеma događaja za prikaz'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/sv.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/sv.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l68; }
/* harmony export */ });
var l68 = {
  code: 'sv',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Förra',
    next: 'Nästa',
    today: 'Idag',
    year: 'År',
    month: 'Månad',
    week: 'Vecka',
    day: 'Dag',
    list: 'Program'
  },
  buttonHints: {
    prev: function prev(buttonText) {
      return "F\xF6reg\xE5ende ".concat(buttonText.toLocaleLowerCase());
    },
    next: function next(buttonText) {
      return "N\xE4sta ".concat(buttonText.toLocaleLowerCase());
    },
    today: function today(buttonText) {
      return (buttonText === 'Program' ? 'Detta' : 'Denna') + ' ' + buttonText.toLocaleLowerCase();
    }
  },
  viewHint: '$0 vy',
  navLinkHint: 'Gå till $0',
  moreLinkHint: function moreLinkHint(eventCnt) {
    return "Visa ytterligare ".concat(eventCnt, " h\xE4ndelse").concat(eventCnt === 1 ? '' : 'r');
  },
  weekText: 'v.',
  weekTextLong: 'Vecka',
  allDayText: 'Heldag',
  moreLinkText: 'till',
  noEventsText: 'Inga händelser att visa',
  closeHint: 'Stäng',
  timeHint: 'Klockan',
  eventHint: 'Händelse'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ta-in.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ta-in.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l69; }
/* harmony export */ });
var l69 = {
  code: 'ta-in',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'முந்தைய',
    next: 'அடுத்தது',
    today: 'இன்று',
    year: 'ஆண்டு',
    month: 'மாதம்',
    week: 'வாரம்',
    day: 'நாள்',
    list: 'தினசரி அட்டவணை'
  },
  weekText: 'வாரம்',
  allDayText: 'நாள் முழுவதும்',
  moreLinkText: function moreLinkText(n) {
    return '+ மேலும் ' + n;
  },
  noEventsText: 'காண்பிக்க நிகழ்வுகள் இல்லை'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/th.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/th.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l70; }
/* harmony export */ });
var l70 = {
  code: 'th',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'ก่อนหน้า',
    next: 'ถัดไป',
    prevYear: 'ปีก่อนหน้า',
    nextYear: 'ปีถัดไป',
    year: 'ปี',
    today: 'วันนี้',
    month: 'เดือน',
    week: 'สัปดาห์',
    day: 'วัน',
    list: 'กำหนดการ'
  },
  weekText: 'สัปดาห์',
  allDayText: 'ตลอดวัน',
  moreLinkText: 'เพิ่มเติม',
  noEventsText: 'ไม่มีกิจกรรมที่จะแสดง'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/tr.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/tr.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l71; }
/* harmony export */ });
var l71 = {
  code: 'tr',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'geri',
    next: 'ileri',
    today: 'bugün',
    year: 'Yıl',
    month: 'Ay',
    week: 'Hafta',
    day: 'Gün',
    list: 'Ajanda'
  },
  weekText: 'Hf',
  allDayText: 'Tüm gün',
  moreLinkText: 'daha fazla',
  noEventsText: 'Gösterilecek etkinlik yok'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/ug.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/ug.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l72; }
/* harmony export */ });
var l72 = {
  code: 'ug',
  buttonText: {
    prev: 'ئالدىنقى',
    next: 'كېيىنكى',
    today: 'بۈگۈن',
    year: 'يىل',
    month: 'ئاي',
    week: 'ھەپتە',
    day: 'كۈن',
    list: 'كۈنتەرتىپ'
  },
  allDayText: 'پۈتۈن كۈن'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/uk.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/uk.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l73; }
/* harmony export */ });
var l73 = {
  code: 'uk',
  week: {
    dow: 1,
    doy: 7 // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Попередній',
    next: 'далі',
    today: 'Сьогодні',
    year: 'рік',
    month: 'Місяць',
    week: 'Тиждень',
    day: 'День',
    list: 'Порядок денний'
  },
  weekText: 'Тиж',
  allDayText: 'Увесь день',
  moreLinkText: function moreLinkText(n) {
    return '+ще ' + n + '...';
  },
  noEventsText: 'Немає подій для відображення'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/uz-cy.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/uz-cy.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l74; }
/* harmony export */ });
var l74 = {
  code: 'uz-cy',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Олин',
    next: 'Кейин',
    today: 'Бугун',
    month: 'Ой',
    week: 'Ҳафта',
    day: 'Кун',
    list: 'Кун тартиби'
  },
  weekText: 'Ҳафта',
  allDayText: 'Кун бўйича',
  moreLinkText: function moreLinkText(n) {
    return '+ яна ' + n;
  },
  noEventsText: 'Кўрсатиш учун воқеалар йўқ'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/uz.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/uz.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l75; }
/* harmony export */ });
var l75 = {
  code: 'uz',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Oldingi',
    next: 'Keyingi',
    today: 'Bugun',
    year: 'Yil',
    month: 'Oy',
    week: 'Xafta',
    day: 'Kun',
    list: 'Kun tartibi'
  },
  allDayText: 'Kun bo\'yi',
  moreLinkText: function moreLinkText(n) {
    return '+ yana ' + n;
  },
  noEventsText: 'Ko\'rsatish uchun voqealar yo\'q'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/vi.js":
/*!*******************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/vi.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l76; }
/* harmony export */ });
var l76 = {
  code: 'vi',
  week: {
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Trước',
    next: 'Tiếp',
    today: 'Hôm nay',
    year: 'Năm',
    month: 'Tháng',
    week: 'Tuần',
    day: 'Ngày',
    list: 'Lịch biểu'
  },
  weekText: 'Tu',
  allDayText: 'Cả ngày',
  moreLinkText: function moreLinkText(n) {
    return '+ thêm ' + n;
  },
  noEventsText: 'Không có sự kiện để hiển thị'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/zh-cn.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/zh-cn.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l77; }
/* harmony export */ });
var l77 = {
  code: 'zh-cn',
  week: {
    // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
    dow: 1,
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: '上月',
    next: '下月',
    today: '今天',
    year: '年',
    month: '月',
    week: '周',
    day: '日',
    list: '日程'
  },
  weekText: '周',
  allDayText: '全天',
  moreLinkText: function moreLinkText(n) {
    return '另外 ' + n + ' 个';
  },
  noEventsText: '没有事件显示'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/core/locales/zh-tw.js":
/*!**********************************************************!*\
  !*** ./node_modules/@fullcalendar/core/locales/zh-tw.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l78; }
/* harmony export */ });
var l78 = {
  code: 'zh-tw',
  buttonText: {
    prev: '上個',
    next: '下個',
    today: '今天',
    year: '年',
    month: '月',
    week: '週',
    day: '天',
    list: '活動列表'
  },
  weekText: '週',
  allDayText: '整天',
  moreLinkText: '顯示更多',
  noEventsText: '沒有任何活動'
};


/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ "./node_modules/@fullcalendar/daygrid/internal.js");




var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/daygrid',
  initialView: 'dayGridMonth',
  views: {
    dayGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayGridView,
      dateProfileGeneratorClass: _internal_js__WEBPACK_IMPORTED_MODULE_1__.TableDateProfileGenerator
    },
    dayGridDay: {
      type: 'dayGrid',
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: 'dayGrid',
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: 'dayGrid',
      duration: {
        months: 1
      },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: 'dayGrid',
      duration: {
        years: 1
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/@fullcalendar/daygrid/internal.js":
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/internal.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayGridView: function() { return /* binding */ DayTableView; },
/* harmony export */   DayTable: function() { return /* binding */ DayTable; },
/* harmony export */   DayTableSlicer: function() { return /* binding */ DayTableSlicer; },
/* harmony export */   Table: function() { return /* binding */ Table; },
/* harmony export */   TableDateProfileGenerator: function() { return /* binding */ TableDateProfileGenerator; },
/* harmony export */   TableRows: function() { return /* binding */ TableRows; },
/* harmony export */   TableView: function() { return /* binding */ TableView; },
/* harmony export */   buildDayTableModel: function() { return /* binding */ buildDayTableModel; },
/* harmony export */   buildDayTableRenderRange: function() { return /* binding */ buildDayTableRenderRange; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ "./node_modules/@fullcalendar/core/internal-common.js");
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ "./node_modules/preact/dist/preact.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var TableView = /*#__PURE__*/function (_DateComponent) {
  _inherits(TableView, _DateComponent);
  function TableView() {
    var _this;
    _classCallCheck(this, TableView);
    _this = _callSuper(this, TableView, arguments);
    _this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    return _this;
  }
  _createClass(TableView, [{
    key: "renderSimpleLayout",
    value: function renderSimpleLayout(headerRowContent, bodyContent) {
      var props = this.props,
        context = this.context;
      var sections = [];
      var stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cc)(context.options);
      if (headerRowContent) {
        sections.push({
          type: 'header',
          key: 'header',
          isSticky: stickyHeaderDates,
          chunk: {
            elRef: this.headerElRef,
            tableClassName: 'fc-col-header',
            rowContent: headerRowContent
          }
        });
      }
      sections.push({
        type: 'body',
        key: 'body',
        liquid: true,
        chunk: {
          content: bodyContent
        }
      });
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ct, {
        elClasses: ['fc-daygrid'],
        viewSpec: context.viewSpec
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b$, {
        liquid: !props.isHeightAuto && !props.forPrint,
        collapsibleWidth: props.forPrint,
        cols: [] /* TODO: make optional? */,
        sections: sections
      }));
    }
  }, {
    key: "renderHScrollLayout",
    value: function renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
      var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
      if (!ScrollGrid) {
        throw new Error('No ScrollGrid implementation');
      }
      var props = this.props,
        context = this.context;
      var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cc)(context.options);
      var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cb)(context.options);
      var sections = [];
      if (headerRowContent) {
        sections.push({
          type: 'header',
          key: 'header',
          isSticky: stickyHeaderDates,
          chunks: [{
            key: 'main',
            elRef: this.headerElRef,
            tableClassName: 'fc-col-header',
            rowContent: headerRowContent
          }]
        });
      }
      sections.push({
        type: 'body',
        key: 'body',
        liquid: true,
        chunks: [{
          key: 'main',
          content: bodyContent
        }]
      });
      if (stickyFooterScrollbar) {
        sections.push({
          type: 'footer',
          key: 'footer',
          isSticky: true,
          chunks: [{
            key: 'main',
            content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ca
          }]
        });
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ct, {
        elClasses: ['fc-daygrid'],
        viewSpec: context.viewSpec
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(ScrollGrid, {
        liquid: !props.isHeightAuto && !props.forPrint,
        forPrint: props.forPrint,
        collapsibleWidth: props.forPrint,
        colGroups: [{
          cols: [{
            span: colCnt,
            minWidth: dayMinWidth
          }]
        }],
        sections: sections
      }));
    }
  }]);
  return TableView;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.be);
function splitSegsByRow(segs, rowCnt) {
  var byRow = [];
  for (var i = 0; i < rowCnt; i += 1) {
    byRow[i] = [];
  }
  var _iterator = _createForOfIteratorHelper(segs),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var seg = _step.value;
      byRow[seg.row].push(seg);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
  var byCol = [];
  for (var i = 0; i < colCnt; i += 1) {
    byCol[i] = [];
  }
  var _iterator2 = _createForOfIteratorHelper(segs),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var seg = _step2.value;
      byCol[seg.firstCol].push(seg);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
  var byRow = [];
  if (!ui) {
    for (var i = 0; i < rowCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (var _i = 0; _i < rowCnt; _i += 1) {
      byRow[_i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    var _iterator3 = _createForOfIteratorHelper(ui.segs),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var seg = _step3.value;
        byRow[seg.row].segs.push(seg);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  return byRow;
}
var DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.x)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'narrow'
});
function hasListItemDisplay(seg) {
  var display = seg.eventRange.ui.display;
  return display === 'list-item' || display === 'auto' && !seg.eventRange.def.allDay && seg.firstCol === seg.lastCol &&
  // can't be multi-day
  seg.isStart &&
  // "
  seg.isEnd // "
  ;
}
var TableBlockEvent = /*#__PURE__*/function (_BaseComponent) {
  _inherits(TableBlockEvent, _BaseComponent);
  function TableBlockEvent() {
    _classCallCheck(this, TableBlockEvent);
    return _callSuper(this, TableBlockEvent, arguments);
  }
  _createClass(TableBlockEvent, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cj, Object.assign({}, props, {
        elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
        defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT,
        defaultDisplayEventEnd: props.defaultDisplayEventEnd,
        disableResizing: !props.seg.eventRange.def.allDay
      }));
    }
  }]);
  return TableBlockEvent;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.B);
var TableListItemEvent = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(TableListItemEvent, _BaseComponent2);
  function TableListItemEvent() {
    _classCallCheck(this, TableListItemEvent);
    return _callSuper(this, TableListItemEvent, arguments);
  }
  _createClass(TableListItemEvent, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var seg = props.seg;
      var timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
      var timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bQ)(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cn, Object.assign({}, props, {
        elTag: "a",
        elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'],
        elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bU)(props.seg, context),
        defaultGenerator: renderInnerContent,
        timeText: timeText,
        isResizing: false,
        isDateSelecting: false
      }));
    }
  }]);
  return TableListItemEvent;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.B);
function renderInnerContent(renderProps) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-daygrid-event-dot",
    style: {
      borderColor: renderProps.borderColor || renderProps.backgroundColor
    }
  }), renderProps.timeText && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-time"
  }, renderProps.timeText), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fc-event-title"
  }, renderProps.event.title || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\xA0")));
}
var TableCellMoreLink = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(TableCellMoreLink, _BaseComponent3);
  function TableCellMoreLink() {
    var _this2;
    _classCallCheck(this, TableCellMoreLink);
    _this2 = _callSuper(this, TableCellMoreLink, arguments);
    _this2.compileSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(compileSegs);
    return _this2;
  }
  _createClass(TableCellMoreLink, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var _this$compileSegs = this.compileSegs(props.singlePlacements),
        allSegs = _this$compileSegs.allSegs,
        invisibleSegs = _this$compileSegs.invisibleSegs;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cr, {
        elClasses: ['fc-daygrid-more-link'],
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        allDayDate: props.allDayDate,
        moreCnt: props.moreCnt,
        allSegs: allSegs,
        hiddenSegs: invisibleSegs,
        alignmentElRef: props.alignmentElRef,
        alignGridTop: props.alignGridTop,
        extraDateSpan: props.extraDateSpan,
        popoverContent: function popoverContent() {
          var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) || (props.eventResize ? props.eventResize.affectedInstances : null) || {};
          return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, allSegs.map(function (seg) {
            var instanceId = seg.eventRange.instance.instanceId;
            return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
              className: "fc-daygrid-event-harness",
              key: instanceId,
              style: {
                visibility: isForcedInvisible[instanceId] ? 'hidden' : ''
              }
            }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableListItemEvent, Object.assign({
              seg: seg,
              isDragging: false,
              isSelected: instanceId === props.eventSelection,
              defaultDisplayEventEnd: false
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bS)(seg, props.todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableBlockEvent, Object.assign({
              seg: seg,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: instanceId === props.eventSelection,
              defaultDisplayEventEnd: false
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bS)(seg, props.todayRange))));
          }));
        }
      });
    }
  }]);
  return TableCellMoreLink;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.B);
function compileSegs(singlePlacements) {
  var allSegs = [];
  var invisibleSegs = [];
  var _iterator4 = _createForOfIteratorHelper(singlePlacements),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var placement = _step4.value;
      allSegs.push(placement.seg);
      if (!placement.isVisible) {
        invisibleSegs.push(placement.seg);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return {
    allSegs: allSegs,
    invisibleSegs: invisibleSegs
  };
}
var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.x)({
  week: 'narrow'
});
var TableCell = /*#__PURE__*/function (_DateComponent2) {
  _inherits(TableCell, _DateComponent2);
  function TableCell() {
    var _this3;
    _classCallCheck(this, TableCell);
    _this3 = _callSuper(this, TableCell, arguments);
    _this3.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this3.state = {
      dayNumberId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.a5)()
    };
    _this3.handleRootEl = function (el) {
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Y)(_this3.rootElRef, el);
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.Y)(_this3.props.elRef, el);
    };
    return _this3;
  }
  _createClass(TableCell, [{
    key: "render",
    value: function render() {
      var context = this.context,
        props = this.props,
        state = this.state,
        rootElRef = this.rootElRef;
      var options = context.options,
        dateEnv = context.dateEnv;
      var date = props.date,
        dateProfile = props.dateProfile;
      // TODO: memoize this?
      var isMonthStart = props.showDayNumber && shouldDisplayMonthStart(date, dateProfile.currentRange, dateEnv);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cl, {
        elTag: "td",
        elRef: this.handleRootEl,
        elClasses: ['fc-daygrid-day'].concat(_toConsumableArray(props.extraClassNames || [])),
        elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), props.showDayNumber ? {
          'aria-labelledby': state.dayNumberId
        } : {}), {
          role: 'gridcell'
        }),
        defaultGenerator: renderTopInner,
        date: date,
        dateProfile: dateProfile,
        todayRange: props.todayRange,
        showDayNumber: props.showDayNumber,
        isMonthStart: isMonthStart,
        extraRenderProps: props.extraRenderProps
      }, function (InnerContent, renderProps) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          ref: props.innerElRef,
          className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
          style: {
            minHeight: props.minHeight
          }
        }, props.showWeekNumber && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cq, {
          elTag: "a",
          elClasses: ['fc-daygrid-week-number'],
          elAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b0)(context, date, 'week'),
          date: date,
          defaultFormat: DEFAULT_WEEK_NUM_FORMAT
        }), !renderProps.isDisabled && (props.showDayNumber || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cm)(options) || props.forceDayTop) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-daygrid-day-top"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerContent, {
          elTag: "a",
          elClasses: ['fc-daygrid-day-number', isMonthStart && 'fc-daygrid-month-start'],
          elAttrs: Object.assign(Object.assign({}, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.b0)(context, date)), {
            id: state.dayNumberId
          })
        })) : props.showDayNumber ?
        // for creating correct amount of space (see issue #7162)
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-daygrid-day-top",
          style: {
            visibility: 'hidden'
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          className: "fc-daygrid-day-number"
        }, "\xA0")) : undefined, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-daygrid-day-events",
          ref: props.fgContentElRef
        }, props.fgContent, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-daygrid-day-bottom",
          style: {
            marginTop: props.moreMarginTop
          }
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableCellMoreLink, {
          allDayDate: date,
          singlePlacements: props.singlePlacements,
          moreCnt: props.moreCnt,
          alignmentElRef: rootElRef,
          alignGridTop: !props.showDayNumber,
          extraDateSpan: props.extraDateSpan,
          dateProfile: props.dateProfile,
          eventSelection: props.eventSelection,
          eventDrag: props.eventDrag,
          eventResize: props.eventResize,
          todayRange: props.todayRange
        }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "fc-daygrid-day-bg"
        }, props.bgContent));
      });
    }
  }]);
  return TableCell;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.be);
function renderTopInner(props) {
  return props.dayNumberText || (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "\xA0");
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
  var currentStart = currentRange.start,
    currentEnd = currentRange.end;
  var currentEndIncl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bg)(currentEnd, -1);
  var currentFirstYear = dateEnv.getYear(currentStart);
  var currentFirstMonth = dateEnv.getMonth(currentStart);
  var currentLastYear = dateEnv.getYear(currentEndIncl);
  var currentLastMonth = dateEnv.getMonth(currentEndIncl);
  // spans more than one month?
  return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) && Boolean(
  // first date in current view?
  date.valueOf() === currentStart.valueOf() ||
  // a month-start that's within the current range?
  dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf());
}
function generateSegKey(seg) {
  return seg.eventRange.instance.instanceId + ':' + seg.firstCol;
}
function generateSegUid(seg) {
  return generateSegKey(seg) + ':' + seg.lastCol;
}
function computeFgSegPlacement(segs,
// assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, segHeights, maxContentHeight, cells) {
  var hierarchy = new DayGridSegHierarchy(function (segEntry) {
    // TODO: more DRY with generateSegUid
    var segUid = segs[segEntry.index].eventRange.instance.instanceId + ':' + segEntry.span.start + ':' + (segEntry.span.end - 1);
    // if no thickness known, assume 1 (if 0, so small it always fits)
    return segHeights[segUid] || 1;
  });
  hierarchy.allowReslicing = true;
  hierarchy.strictOrder = strictOrder;
  if (dayMaxEvents === true || dayMaxEventRows === true) {
    hierarchy.maxCoord = maxContentHeight;
    hierarchy.hiddenConsumes = true;
  } else if (typeof dayMaxEvents === 'number') {
    hierarchy.maxStackCnt = dayMaxEvents;
  } else if (typeof dayMaxEventRows === 'number') {
    hierarchy.maxStackCnt = dayMaxEventRows;
    hierarchy.hiddenConsumes = true;
  }
  // create segInputs only for segs with known heights
  var segInputs = [];
  var unknownHeightSegs = [];
  for (var i = 0; i < segs.length; i += 1) {
    var seg = segs[i];
    var segUid = generateSegUid(seg);
    var eventHeight = segHeights[segUid];
    if (eventHeight != null) {
      segInputs.push({
        index: i,
        span: {
          start: seg.firstCol,
          end: seg.lastCol + 1
        }
      });
    } else {
      unknownHeightSegs.push(seg);
    }
  }
  var hiddenEntries = hierarchy.addSegs(segInputs);
  var segRects = hierarchy.toRects();
  var _placeRects = placeRects(segRects, segs, cells),
    singleColPlacements = _placeRects.singleColPlacements,
    multiColPlacements = _placeRects.multiColPlacements,
    leftoverMargins = _placeRects.leftoverMargins;
  var moreCnts = [];
  var moreMarginTops = [];
  // add segs with unknown heights
  for (var _i2 = 0, _unknownHeightSegs = unknownHeightSegs; _i2 < _unknownHeightSegs.length; _i2++) {
    var _seg = _unknownHeightSegs[_i2];
    multiColPlacements[_seg.firstCol].push({
      seg: _seg,
      isVisible: false,
      isAbsolute: true,
      absoluteTop: 0,
      marginTop: 0
    });
    for (var col = _seg.firstCol; col <= _seg.lastCol; col += 1) {
      singleColPlacements[col].push({
        seg: resliceSeg(_seg, col, col + 1, cells),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
  }
  // add the hidden entries
  for (var _col = 0; _col < cells.length; _col += 1) {
    moreCnts.push(0);
  }
  var _iterator5 = _createForOfIteratorHelper(hiddenEntries),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var hiddenEntry = _step5.value;
      var _seg2 = segs[hiddenEntry.index];
      var hiddenSpan = hiddenEntry.span;
      multiColPlacements[hiddenSpan.start].push({
        seg: resliceSeg(_seg2, hiddenSpan.start, hiddenSpan.end, cells),
        isVisible: false,
        isAbsolute: true,
        absoluteTop: 0,
        marginTop: 0
      });
      for (var _col3 = hiddenSpan.start; _col3 < hiddenSpan.end; _col3 += 1) {
        moreCnts[_col3] += 1;
        singleColPlacements[_col3].push({
          seg: resliceSeg(_seg2, _col3, _col3 + 1, cells),
          isVisible: false,
          isAbsolute: false,
          absoluteTop: 0,
          marginTop: 0
        });
      }
    }
    // deal with leftover margins
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  for (var _col2 = 0; _col2 < cells.length; _col2 += 1) {
    moreMarginTops.push(leftoverMargins[_col2]);
  }
  return {
    singleColPlacements: singleColPlacements,
    multiColPlacements: multiColPlacements,
    moreCnts: moreCnts,
    moreMarginTops: moreMarginTops
  };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
  var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
  var singleColPlacements = [];
  var multiColPlacements = [];
  var leftoverMargins = [];
  for (var col = 0; col < cells.length; col += 1) {
    var rects = rectsByEachCol[col];
    // compute all static segs in singlePlacements
    var singlePlacements = [];
    var currentHeight = 0;
    var currentMarginTop = 0;
    var _iterator6 = _createForOfIteratorHelper(rects),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var rect = _step6.value;
        var seg = segs[rect.index];
        singlePlacements.push({
          seg: resliceSeg(seg, col, col + 1, cells),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: rect.levelCoord,
          marginTop: rect.levelCoord - currentHeight
        });
        currentHeight = rect.levelCoord + rect.thickness;
      }
      // compute mixed static/absolute segs in multiPlacements
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var multiPlacements = [];
    currentHeight = 0;
    currentMarginTop = 0;
    var _iterator7 = _createForOfIteratorHelper(rects),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _rect = _step7.value;
        var _seg3 = segs[_rect.index];
        var isAbsolute = _rect.span.end - _rect.span.start > 1; // multi-column?
        var isFirstCol = _rect.span.start === col;
        currentMarginTop += _rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
        currentHeight = _rect.levelCoord + _rect.thickness; // height will now be bottom of current seg
        if (isAbsolute) {
          currentMarginTop += _rect.thickness;
          if (isFirstCol) {
            multiPlacements.push({
              seg: resliceSeg(_seg3, _rect.span.start, _rect.span.end, cells),
              isVisible: true,
              isAbsolute: true,
              absoluteTop: _rect.levelCoord,
              marginTop: 0
            });
          }
        } else if (isFirstCol) {
          multiPlacements.push({
            seg: resliceSeg(_seg3, _rect.span.start, _rect.span.end, cells),
            isVisible: true,
            isAbsolute: false,
            absoluteTop: _rect.levelCoord,
            marginTop: currentMarginTop // claim the margin
          });
          currentMarginTop = 0;
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    singleColPlacements.push(singlePlacements);
    multiColPlacements.push(multiPlacements);
    leftoverMargins.push(currentMarginTop);
  }
  return {
    singleColPlacements: singleColPlacements,
    multiColPlacements: multiColPlacements,
    leftoverMargins: leftoverMargins
  };
}
function groupRectsByEachCol(rects, colCnt) {
  var rectsByEachCol = [];
  for (var col = 0; col < colCnt; col += 1) {
    rectsByEachCol.push([]);
  }
  var _iterator8 = _createForOfIteratorHelper(rects),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var rect = _step8.value;
      for (var _col4 = rect.span.start; _col4 < rect.span.end; _col4 += 1) {
        rectsByEachCol[_col4].push(rect);
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
  if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
    return seg;
  }
  var eventRange = seg.eventRange;
  var origRange = eventRange.range;
  var slicedRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.o)(origRange, {
    start: cells[spanStart].date,
    end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.t)(cells[spanEnd - 1].date, 1)
  });
  return Object.assign(Object.assign({}, seg), {
    firstCol: spanStart,
    lastCol: spanEnd - 1,
    eventRange: {
      def: eventRange.def,
      ui: Object.assign(Object.assign({}, eventRange.ui), {
        durationEditable: false
      }),
      instance: eventRange.instance,
      range: slicedRange
    },
    isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(),
    isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf()
  });
}
var DayGridSegHierarchy = /*#__PURE__*/function (_SegHierarchy) {
  _inherits(DayGridSegHierarchy, _SegHierarchy);
  function DayGridSegHierarchy() {
    var _this4;
    _classCallCheck(this, DayGridSegHierarchy);
    _this4 = _callSuper(this, DayGridSegHierarchy, arguments);
    // config
    _this4.hiddenConsumes = false;
    // allows us to keep hidden entries in the hierarchy so they take up space
    _this4.forceHidden = {};
    return _this4;
  }
  _createClass(DayGridSegHierarchy, [{
    key: "addSegs",
    value: function addSegs(segInputs) {
      var _this5 = this;
      var hiddenSegs = _get(_getPrototypeOf(DayGridSegHierarchy.prototype), "addSegs", this).call(this, segInputs);
      var entriesByLevel = this.entriesByLevel;
      var excludeHidden = function excludeHidden(entry) {
        return !_this5.forceHidden[(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bB)(entry)];
      };
      // remove the forced-hidden segs
      for (var level = 0; level < entriesByLevel.length; level += 1) {
        entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
      }
      return hiddenSegs;
    }
  }, {
    key: "handleInvalidInsertion",
    value: function handleInvalidInsertion(insertion, entry, hiddenEntries) {
      var entriesByLevel = this.entriesByLevel,
        forceHidden = this.forceHidden;
      var touchingEntry = insertion.touchingEntry,
        touchingLevel = insertion.touchingLevel,
        touchingLateral = insertion.touchingLateral;
      // the entry that the new insertion is touching must be hidden
      if (this.hiddenConsumes && touchingEntry) {
        var touchingEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bB)(touchingEntry);
        if (!forceHidden[touchingEntryId]) {
          if (this.allowReslicing) {
            // split up the touchingEntry, reinsert it
            var hiddenEntry = Object.assign(Object.assign({}, touchingEntry), {
              span: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bF)(touchingEntry.span, entry.span)
            });
            // reinsert the area that turned into a "more" link (so no other entries try to
            // occupy the space) but mark it forced-hidden
            var hiddenEntryId = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bB)(hiddenEntry);
            forceHidden[hiddenEntryId] = true;
            entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
            hiddenEntries.push(hiddenEntry);
            this.splitEntry(touchingEntry, entry, hiddenEntries);
          } else {
            forceHidden[touchingEntryId] = true;
            hiddenEntries.push(touchingEntry);
          }
        }
      }
      // will try to reslice...
      _get(_getPrototypeOf(DayGridSegHierarchy.prototype), "handleInvalidInsertion", this).call(this, insertion, entry, hiddenEntries);
    }
  }]);
  return DayGridSegHierarchy;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bA);
var TableRow = /*#__PURE__*/function (_DateComponent3) {
  _inherits(TableRow, _DateComponent3);
  function TableRow() {
    var _this6;
    _classCallCheck(this, TableRow);
    _this6 = _callSuper(this, TableRow, arguments);
    _this6.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cf(); // the <td>
    _this6.frameElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cf(); // the fc-daygrid-day-frame
    _this6.fgElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cf(); // the fc-daygrid-day-events
    _this6.segHarnessRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cf(); // indexed by "instanceId:firstCol"
    _this6.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this6.state = {
      framePositions: null,
      maxContentHeight: null,
      segHeights: {}
    };
    _this6.handleResize = function (isForced) {
      if (isForced) {
        _this6.updateSizing(true); // isExternal=true
      }
    };
    return _this6;
  }
  _createClass(TableRow, [{
    key: "render",
    value: function render() {
      var _this7 = this;
      var props = this.props,
        state = this.state,
        context = this.context;
      var options = context.options;
      var colCnt = props.cells.length;
      var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
      var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
      var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
      var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
      var _computeFgSegPlacemen = computeFgSegPlacement((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bR)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.segHeights, state.maxContentHeight, props.cells),
        singleColPlacements = _computeFgSegPlacemen.singleColPlacements,
        multiColPlacements = _computeFgSegPlacemen.multiColPlacements,
        moreCnts = _computeFgSegPlacemen.moreCnts,
        moreMarginTops = _computeFgSegPlacemen.moreMarginTops;
      var isForcedInvisible =
      // TODO: messy way to compute this
      props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
        ref: this.rootElRef,
        role: "row"
      }, props.renderIntro && props.renderIntro(), props.cells.map(function (cell, col) {
        var normalFgNodes = _this7.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
        var mirrorFgNodes = _this7.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableCell, {
          key: cell.key,
          elRef: _this7.cellElRefs.createRef(cell.key),
          innerElRef: _this7.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */,
          dateProfile: props.dateProfile,
          date: cell.date,
          showDayNumber: props.showDayNumbers,
          showWeekNumber: props.showWeekNumbers && col === 0,
          forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */,
          todayRange: props.todayRange,
          eventSelection: props.eventSelection,
          eventDrag: props.eventDrag,
          eventResize: props.eventResize,
          extraRenderProps: cell.extraRenderProps,
          extraDataAttrs: cell.extraDataAttrs,
          extraClassNames: cell.extraClassNames,
          extraDateSpan: cell.extraDateSpan,
          moreCnt: moreCnts[col],
          moreMarginTop: moreMarginTops[col],
          singlePlacements: singleColPlacements[col],
          fgContentElRef: _this7.fgElRefs.createRef(cell.key),
          fgContent:
          // Fragment scopes the keys
          (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, normalFgNodes), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, mirrorFgNodes)),
          bgContent:
          // Fragment scopes the keys
          (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _this7.renderFillSegs(highlightSegsByCol[col], 'highlight'), _this7.renderFillSegs(businessHoursByCol[col], 'non-business'), _this7.renderFillSegs(bgEventSegsByCol[col], 'bg-event')),
          minHeight: props.cellMinHeight
        });
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSizing(true);
      this.context.addResizeHandler(this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var currentProps = this.props;
      this.updateSizing(!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.E)(prevProps, currentProps));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
  }, {
    key: "getHighlightSegs",
    value: function getHighlightSegs() {
      var props = this.props;
      if (props.eventDrag && props.eventDrag.segs.length) {
        // messy check
        return props.eventDrag.segs;
      }
      if (props.eventResize && props.eventResize.segs.length) {
        // messy check
        return props.eventResize.segs;
      }
      return props.dateSelectionSegs;
    }
  }, {
    key: "getMirrorSegs",
    value: function getMirrorSegs() {
      var props = this.props;
      if (props.eventResize && props.eventResize.segs.length) {
        // messy check
        return props.eventResize.segs;
      }
      return [];
    }
  }, {
    key: "renderFgSegs",
    value: function renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
      var context = this.context;
      var eventSelection = this.props.eventSelection;
      var framePositions = this.state.framePositions;
      var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
      var isMirror = isDragging || isResizing || isDateSelecting;
      var nodes = [];
      if (framePositions) {
        var _iterator9 = _createForOfIteratorHelper(segPlacements),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var placement = _step9.value;
            var seg = placement.seg;
            var instanceId = seg.eventRange.instance.instanceId;
            var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
            var isAbsolute = placement.isAbsolute;
            var left = '';
            var right = '';
            if (isAbsolute) {
              if (context.isRtl) {
                right = 0;
                left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
              } else {
                left = 0;
                right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
              }
            }
            /*
            known bug: events that are force to be list-item but span multiple days still take up space in later columns
            todo: in print view, for multi-day events, don't display title within non-start/end segs
            */
            nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
              className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''),
              key: generateSegKey(seg),
              ref: isMirror ? null : this.segHarnessRefs.createRef(generateSegUid(seg)),
              style: {
                visibility: isVisible ? '' : 'hidden',
                marginTop: isAbsolute ? '' : placement.marginTop,
                top: isAbsolute ? placement.absoluteTop : '',
                left: left,
                right: right
              }
            }, hasListItemDisplay(seg) ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableListItemEvent, Object.assign({
              seg: seg,
              isDragging: isDragging,
              isSelected: instanceId === eventSelection,
              defaultDisplayEventEnd: defaultDisplayEventEnd
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bS)(seg, todayRange))) : (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableBlockEvent, Object.assign({
              seg: seg,
              isDragging: isDragging,
              isResizing: isResizing,
              isDateSelecting: isDateSelecting,
              isSelected: instanceId === eventSelection,
              defaultDisplayEventEnd: defaultDisplayEventEnd
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bS)(seg, todayRange)))));
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
      return nodes;
    }
  }, {
    key: "renderFillSegs",
    value: function renderFillSegs(segs, fillType) {
      var isRtl = this.context.isRtl;
      var todayRange = this.props.todayRange;
      var framePositions = this.state.framePositions;
      var nodes = [];
      if (framePositions) {
        var _iterator10 = _createForOfIteratorHelper(segs),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var seg = _step10.value;
            var leftRightCss = isRtl ? {
              right: 0,
              left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol]
            } : {
              left: 0,
              right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol]
            };
            nodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
              key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bT)(seg.eventRange),
              className: "fc-daygrid-bg-harness",
              style: leftRightCss
            }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cp, Object.assign({
              seg: seg
            }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bS)(seg, todayRange))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.co)(fillType)));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
      return _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(void 0, [_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}].concat(nodes));
    }
  }, {
    key: "updateSizing",
    value: function updateSizing(isExternalSizingChange) {
      var props = this.props,
        state = this.state,
        frameElRefs = this.frameElRefs;
      if (!props.forPrint && props.clientWidth !== null // positioning ready?
      ) {
        if (isExternalSizingChange) {
          var frameEls = props.cells.map(function (cell) {
            return frameElRefs.currentMap[cell.key];
          });
          if (frameEls.length) {
            var originEl = this.rootElRef.current;
            var newPositionCache = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ba(originEl, frameEls, true,
            // isHorizontal
            false);
            if (!state.framePositions || !state.framePositions.similarTo(newPositionCache)) {
              this.setState({
                framePositions: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ba(originEl, frameEls, true,
                // isHorizontal
                false)
              });
            }
          }
        }
        var oldSegHeights = this.state.segHeights;
        var newSegHeights = this.querySegHeights();
        var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
        this.safeSetState({
          // HACK to prevent oscillations of events being shown/hidden from max-event-rows
          // Essentially, once you compute an element's height, never null-out.
          // TODO: always display all events, as visibility:hidden?
          segHeights: Object.assign(Object.assign({}, oldSegHeights), newSegHeights),
          maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null
        });
      }
    }
  }, {
    key: "querySegHeights",
    value: function querySegHeights() {
      var segElMap = this.segHarnessRefs.currentMap;
      var segHeights = {};
      // get the max height amongst instance segs
      for (var segUid in segElMap) {
        var height = Math.round(segElMap[segUid].getBoundingClientRect().height);
        segHeights[segUid] = Math.max(segHeights[segUid] || 0, height);
      }
      return segHeights;
    }
  }, {
    key: "computeMaxContentHeight",
    value: function computeMaxContentHeight() {
      var firstKey = this.props.cells[0].key;
      var cellEl = this.cellElRefs.currentMap[firstKey];
      var fcContainerEl = this.fgElRefs.currentMap[firstKey];
      return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
    }
  }, {
    key: "getCellEls",
    value: function getCellEls() {
      var elMap = this.cellElRefs.currentMap;
      return this.props.cells.map(function (cell) {
        return elMap[cell.key];
      });
    }
  }]);
  return TableRow;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.be);
TableRow.addStateEquality({
  segHeights: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.E
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
  if (!mirrorSegs.length) {
    return [];
  }
  var topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
  return mirrorSegs.map(function (seg) {
    return {
      seg: seg,
      isVisible: true,
      isAbsolute: true,
      absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
      marginTop: 0
    };
  });
}
function buildAbsoluteTopHash(colPlacements) {
  var topsByInstanceId = {};
  var _iterator11 = _createForOfIteratorHelper(colPlacements),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var placements = _step11.value;
      var _iterator12 = _createForOfIteratorHelper(placements),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var placement = _step12.value;
          topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  return topsByInstanceId;
}
var TableRows = /*#__PURE__*/function (_DateComponent4) {
  _inherits(TableRows, _DateComponent4);
  function TableRows() {
    var _this8;
    _classCallCheck(this, TableRows);
    _this8 = _callSuper(this, TableRows, arguments);
    _this8.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(splitSegsByRow);
    _this8.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(splitSegsByRow);
    _this8.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(splitSegsByRow);
    _this8.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(splitSegsByRow);
    _this8.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(splitInteractionByRow);
    _this8.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(splitInteractionByRow);
    _this8.rowRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cf();
    return _this8;
  }
  _createClass(TableRows, [{
    key: "render",
    value: function render() {
      var _this9 = this;
      var props = this.props,
        context = this.context;
      var rowCnt = props.cells.length;
      var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
      var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
      var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
      var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
      var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
      var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
      // for DayGrid view with many rows, force a min-height on cells so doesn't appear squished
      // choose 7 because a month view will have max 6 rows
      var cellMinHeight = rowCnt >= 7 && props.clientWidth ? props.clientWidth / context.options.aspectRatio / 6 : null;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ch, {
        unit: "day"
      }, function (nowDate, todayRange) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.cells.map(function (cells, row) {
          return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableRow, {
            ref: _this9.rowRefs.createRef(row),
            key: cells.length ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */ : row // in case there are no cells (like when resource view is loading)
            ,
            showDayNumbers: rowCnt > 1,
            showWeekNumbers: props.showWeekNumbers,
            todayRange: todayRange,
            dateProfile: props.dateProfile,
            cells: cells,
            renderIntro: props.renderRowIntro,
            businessHourSegs: businessHourSegsByRow[row],
            eventSelection: props.eventSelection,
            bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */,
            fgEventSegs: fgEventSegsByRow[row],
            dateSelectionSegs: dateSelectionSegsByRow[row],
            eventDrag: eventDragByRow[row],
            eventResize: eventResizeByRow[row],
            dayMaxEvents: props.dayMaxEvents,
            dayMaxEventRows: props.dayMaxEventRows,
            clientWidth: props.clientWidth,
            clientHeight: props.clientHeight,
            cellMinHeight: cellMinHeight,
            forPrint: props.forPrint
          });
        }));
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.registerInteractiveComponent();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // for if started with zero cells
      this.registerInteractiveComponent();
    }
  }, {
    key: "registerInteractiveComponent",
    value: function registerInteractiveComponent() {
      if (!this.rootEl) {
        // HACK: need a daygrid wrapper parent to do positioning
        // NOTE: a daygrid resource view w/o resources can have zero cells
        var firstCellEl = this.rowRefs.currentMap[0].getCellEls()[0];
        var rootEl = firstCellEl ? firstCellEl.closest('.fc-daygrid-body') : null;
        if (rootEl) {
          this.rootEl = rootEl;
          this.context.registerInteractiveComponent(this, {
            el: rootEl,
            isHitComboAllowed: this.props.isHitComboAllowed
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rootEl) {
        this.context.unregisterInteractiveComponent(this);
        this.rootEl = null;
      }
    }
    // Hit System
    // ----------------------------------------------------------------------------------------------------
  }, {
    key: "prepareHits",
    value: function prepareHits() {
      this.rowPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ba(this.rootEl, this.rowRefs.collect().map(function (rowObj) {
        return rowObj.getCellEls()[0];
      }),
      // first cell el in each row. TODO: not optimal
      false, true);
      this.colPositions = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.ba(this.rootEl, this.rowRefs.currentMap[0].getCellEls(),
      // cell els in first row
      true,
      // horizontal
      false);
    }
  }, {
    key: "queryHit",
    value: function queryHit(positionLeft, positionTop) {
      var colPositions = this.colPositions,
        rowPositions = this.rowPositions;
      var col = colPositions.leftToIndex(positionLeft);
      var row = rowPositions.topToIndex(positionTop);
      if (row != null && col != null) {
        var cell = this.props.cells[row][col];
        return {
          dateProfile: this.props.dateProfile,
          dateSpan: Object.assign({
            range: this.getCellRange(row, col),
            allDay: true
          }, cell.extraDateSpan),
          dayEl: this.getCellEl(row, col),
          rect: {
            left: colPositions.lefts[col],
            right: colPositions.rights[col],
            top: rowPositions.tops[row],
            bottom: rowPositions.bottoms[row]
          },
          layer: 0
        };
      }
      return null;
    }
  }, {
    key: "getCellEl",
    value: function getCellEl(row, col) {
      return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
    }
  }, {
    key: "getCellRange",
    value: function getCellRange(row, col) {
      var start = this.props.cells[row][col].date;
      var end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.t)(start, 1);
      return {
        start: start,
        end: end
      };
    }
  }]);
  return TableRows;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.be);
function isSegAllDay(seg) {
  return seg.eventRange.def.allDay;
}
var Table = /*#__PURE__*/function (_DateComponent5) {
  _inherits(Table, _DateComponent5);
  function Table() {
    var _this10;
    _classCallCheck(this, Table);
    _this10 = _callSuper(this, Table, arguments);
    _this10.elRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this10.needsScrollReset = false;
    return _this10;
  }
  _createClass(Table, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var dayMaxEventRows = props.dayMaxEventRows,
        dayMaxEvents = props.dayMaxEvents,
        expandRows = props.expandRows;
      var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
      // if rows can't expand to fill fixed height, can't do balanced-height event limit
      // TODO: best place to normalize these options?
      if (limitViaBalanced && !expandRows) {
        limitViaBalanced = false;
        dayMaxEventRows = null;
        dayMaxEvents = null;
      }
      var classNames = ['fc-daygrid-body', limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced', expandRows ? '' : 'fc-daygrid-body-natural' // will height of one row depend on the others?
      ];
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        ref: this.elRef,
        className: classNames.join(' '),
        style: {
          // these props are important to give this wrapper correct dimensions for interactions
          // TODO: if we set it here, can we avoid giving to inner tables?
          width: props.clientWidth,
          minWidth: props.tableMinWidth
        }
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
        role: "presentation",
        className: "fc-scrollgrid-sync-table",
        style: {
          width: props.clientWidth,
          minWidth: props.tableMinWidth,
          height: expandRows ? props.clientHeight : ''
        }
      }, props.colGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", {
        role: "presentation"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(TableRows, {
        dateProfile: props.dateProfile,
        cells: props.cells,
        renderRowIntro: props.renderRowIntro,
        showWeekNumbers: props.showWeekNumbers,
        clientWidth: props.clientWidth,
        clientHeight: props.clientHeight,
        businessHourSegs: props.businessHourSegs,
        bgEventSegs: props.bgEventSegs,
        fgEventSegs: props.fgEventSegs,
        dateSelectionSegs: props.dateSelectionSegs,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        dayMaxEvents: dayMaxEvents,
        dayMaxEventRows: dayMaxEventRows,
        forPrint: props.forPrint,
        isHitComboAllowed: props.isHitComboAllowed
      }))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.requestScrollReset();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.dateProfile !== this.props.dateProfile) {
        this.requestScrollReset();
      } else {
        this.flushScrollReset();
      }
    }
  }, {
    key: "requestScrollReset",
    value: function requestScrollReset() {
      this.needsScrollReset = true;
      this.flushScrollReset();
    }
  }, {
    key: "flushScrollReset",
    value: function flushScrollReset() {
      if (this.needsScrollReset && this.props.clientWidth // sizes computed?
      ) {
        var subjectEl = getScrollSubjectEl(this.elRef.current, this.props.dateProfile);
        if (subjectEl) {
          var originEl = subjectEl.closest('.fc-daygrid-body');
          var scrollEl = originEl.closest('.fc-scroller');
          var scrollTop = subjectEl.getBoundingClientRect().top - originEl.getBoundingClientRect().top;
          scrollEl.scrollTop = scrollTop ? scrollTop + 1 : 0; // overcome border
        }
        this.needsScrollReset = false;
      }
    }
  }]);
  return Table;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.be);
function getScrollSubjectEl(containerEl, dateProfile) {
  var el;
  if (dateProfile.currentRangeUnit.match(/year|month/)) {
    el = containerEl.querySelector("[data-date=\"".concat((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bx)(dateProfile.currentDate), "-01\"]"));
    // even if view is month-based, first-of-month might be hidden...
  }
  if (!el) {
    el = containerEl.querySelector("[data-date=\"".concat((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bv)(dateProfile.currentDate), "\"]"));
    // could still be hidden if an interior-view hidden day
  }
  return el;
}
var DayTableSlicer = /*#__PURE__*/function (_Slicer) {
  _inherits(DayTableSlicer, _Slicer);
  function DayTableSlicer() {
    var _this11;
    _classCallCheck(this, DayTableSlicer);
    _this11 = _callSuper(this, DayTableSlicer, arguments);
    _this11.forceDayIfListItem = true;
    return _this11;
  }
  _createClass(DayTableSlicer, [{
    key: "sliceRange",
    value: function sliceRange(dateRange, dayTableModel) {
      return dayTableModel.sliceRange(dateRange);
    }
  }]);
  return DayTableSlicer;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bW);
var DayTable = /*#__PURE__*/function (_DateComponent6) {
  _inherits(DayTable, _DateComponent6);
  function DayTable() {
    var _this12;
    _classCallCheck(this, DayTable);
    _this12 = _callSuper(this, DayTable, arguments);
    _this12.slicer = new DayTableSlicer();
    _this12.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    return _this12;
  }
  _createClass(DayTable, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(Table, Object.assign({
        ref: this.tableRef
      }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), {
        dateProfile: props.dateProfile,
        cells: props.dayTableModel.cells,
        colGroupNode: props.colGroupNode,
        tableMinWidth: props.tableMinWidth,
        renderRowIntro: props.renderRowIntro,
        dayMaxEvents: props.dayMaxEvents,
        dayMaxEventRows: props.dayMaxEventRows,
        showWeekNumbers: props.showWeekNumbers,
        expandRows: props.expandRows,
        headerAlignElRef: props.headerAlignElRef,
        clientWidth: props.clientWidth,
        clientHeight: props.clientHeight,
        forPrint: props.forPrint
      }));
    }
  }]);
  return DayTable;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.be);
var DayTableView = /*#__PURE__*/function (_TableView) {
  _inherits(DayTableView, _TableView);
  function DayTableView() {
    var _this13;
    _classCallCheck(this, DayTableView);
    _this13 = _callSuper(this, DayTableView, arguments);
    _this13.buildDayTableModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.z)(buildDayTableModel);
    _this13.headerRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this13.tableRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    // can't override any lifecycle methods from parent
    return _this13;
  }
  _createClass(DayTableView, [{
    key: "render",
    value: function render() {
      var _this14 = this;
      var _this$context = this.context,
        options = _this$context.options,
        dateProfileGenerator = _this$context.dateProfileGenerator;
      var props = this.props;
      var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
      var headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bK, {
        ref: this.headerRef,
        dateProfile: props.dateProfile,
        dates: dayTableModel.headerDates,
        datesRepDistinctDays: dayTableModel.rowCnt === 1
      });
      var bodyContent = function bodyContent(contentArg) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(DayTable, {
          ref: _this14.tableRef,
          dateProfile: props.dateProfile,
          dayTableModel: dayTableModel,
          businessHours: props.businessHours,
          dateSelection: props.dateSelection,
          eventStore: props.eventStore,
          eventUiBases: props.eventUiBases,
          eventSelection: props.eventSelection,
          eventDrag: props.eventDrag,
          eventResize: props.eventResize,
          nextDayThreshold: options.nextDayThreshold,
          colGroupNode: contentArg.tableColGroupNode,
          tableMinWidth: contentArg.tableMinWidth,
          dayMaxEvents: options.dayMaxEvents,
          dayMaxEventRows: options.dayMaxEventRows,
          showWeekNumbers: options.weekNumbers,
          expandRows: !props.isHeightAuto,
          headerAlignElRef: _this14.headerElRef,
          clientWidth: contentArg.clientWidth,
          clientHeight: contentArg.clientHeight,
          forPrint: props.forPrint
        });
      };
      return options.dayMinWidth ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth) : this.renderSimpleLayout(headerContent, bodyContent);
    }
  }]);
  return DayTableView;
}(TableView);
function buildDayTableModel(dateProfile, dateProfileGenerator) {
  var daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bO(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bV(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}
var TableDateProfileGenerator = /*#__PURE__*/function (_DateProfileGenerator) {
  _inherits(TableDateProfileGenerator, _DateProfileGenerator);
  function TableDateProfileGenerator() {
    _classCallCheck(this, TableDateProfileGenerator);
    return _callSuper(this, TableDateProfileGenerator, arguments);
  }
  _createClass(TableDateProfileGenerator, [{
    key: "buildRenderRange",
    value:
    // Computes the date range that will be rendered
    function buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
      var renderRange = _get(_getPrototypeOf(TableDateProfileGenerator.prototype), "buildRenderRange", this).call(this, currentRange, currentRangeUnit, isRangeAllDay);
      var props = this.props;
      return buildDayTableRenderRange({
        currentRange: renderRange,
        snapToWeek: /^(year|month)$/.test(currentRangeUnit),
        fixedWeekCount: props.fixedWeekCount,
        dateEnv: props.dateEnv
      });
    }
  }]);
  return TableDateProfileGenerator;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.U);
function buildDayTableRenderRange(props) {
  var dateEnv = props.dateEnv,
    currentRange = props.currentRange;
  var start = currentRange.start,
    end = currentRange.end;
  var endOfWeek;
  // year and month views should be aligned with weeks. this is already done for week
  if (props.snapToWeek) {
    start = dateEnv.startOfWeek(start);
    // make end-of-week if not already
    endOfWeek = dateEnv.startOfWeek(end);
    if (endOfWeek.valueOf() !== end.valueOf()) {
      end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bh)(endOfWeek, 1);
    }
  }
  // ensure 6 weeks
  if (props.fixedWeekCount) {
    // TODO: instead of these date-math gymnastics (for multimonth view),
    // compute dateprofiles of all months, then use start of first and end of last.
    var lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.t)(currentRange.end, -1)));
    var rowCnt = Math.ceil(
    // could be partial weeks due to hiddenDays
    (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bi)(lastMonthRenderStart, end));
    end = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.bh)(end, 6 - rowCnt);
  }
  return {
    start: start,
    end: end
  };
}
var css_248z = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_1__.cw)(css_248z);


/***/ }),

/***/ "./node_modules/@fullcalendar/interaction/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Draggable: function() { return /* binding */ ExternalDraggable; },
/* harmony export */   ThirdPartyDraggable: function() { return /* binding */ ThirdPartyDraggable; },
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/index.js */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ "./node_modules/@fullcalendar/core/internal-common.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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


_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/
var PointerDragging = /*#__PURE__*/function () {
  function PointerDragging(containerEl) {
    var _this = this;
    _classCallCheck(this, PointerDragging);
    this.subjectEl = null;
    // options that can be directly assigned by caller
    this.selector = ''; // will cause subjectEl in all emitted events to be this element
    this.handleSelector = '';
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true; // for simulating pointermove on scroll
    // internal states
    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false;
    // Mouse
    // ----------------------------------------------------------------------------------------------------
    this.handleMouseDown = function (ev) {
      if (!_this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && _this.tryStart(ev)) {
        var pev = _this.createEventFromMouse(ev, true);
        _this.emitter.trigger('pointerdown', pev);
        _this.initScrollWatch(pev);
        if (!_this.shouldIgnoreMove) {
          document.addEventListener('mousemove', _this.handleMouseMove);
        }
        document.addEventListener('mouseup', _this.handleMouseUp);
      }
    };
    this.handleMouseMove = function (ev) {
      var pev = _this.createEventFromMouse(ev);
      _this.recordCoords(pev);
      _this.emitter.trigger('pointermove', pev);
    };
    this.handleMouseUp = function (ev) {
      document.removeEventListener('mousemove', _this.handleMouseMove);
      document.removeEventListener('mouseup', _this.handleMouseUp);
      _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));
      _this.cleanup(); // call last so that pointerup has access to props
    };
    // Touch
    // ----------------------------------------------------------------------------------------------------
    this.handleTouchStart = function (ev) {
      if (_this.tryStart(ev)) {
        _this.isTouchDragging = true;
        var pev = _this.createEventFromTouch(ev, true);
        _this.emitter.trigger('pointerdown', pev);
        _this.initScrollWatch(pev);
        // unlike mouse, need to attach to target, not document
        // https://stackoverflow.com/a/45760014
        var targetEl = ev.target;
        if (!_this.shouldIgnoreMove) {
          targetEl.addEventListener('touchmove', _this.handleTouchMove);
        }
        targetEl.addEventListener('touchend', _this.handleTouchEnd);
        targetEl.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342
        window.addEventListener('scroll', _this.handleTouchScroll, true);
      }
    };
    this.handleTouchMove = function (ev) {
      var pev = _this.createEventFromTouch(ev);
      _this.recordCoords(pev);
      _this.emitter.trigger('pointermove', pev);
    };
    this.handleTouchEnd = function (ev) {
      if (_this.isDragging) {
        // done to guard against touchend followed by touchcancel
        var targetEl = ev.target;
        targetEl.removeEventListener('touchmove', _this.handleTouchMove);
        targetEl.removeEventListener('touchend', _this.handleTouchEnd);
        targetEl.removeEventListener('touchcancel', _this.handleTouchEnd);
        window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true
        _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));
        _this.cleanup(); // call last so that pointerup has access to props
        _this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };
    this.handleTouchScroll = function () {
      _this.wasTouchScroll = true;
    };
    this.handleScroll = function (ev) {
      if (!_this.shouldIgnoreMove) {
        var pageX = window.pageXOffset - _this.prevScrollX + _this.prevPageX;
        var pageY = window.pageYOffset - _this.prevScrollY + _this.prevPageY;
        _this.emitter.trigger('pointermove', {
          origEvent: ev,
          isTouch: _this.isTouchDragging,
          subjectEl: _this.subjectEl,
          pageX: pageX,
          pageY: pageY,
          deltaX: pageX - _this.origPageX,
          deltaY: pageY - _this.origPageY
        });
      }
    };
    this.containerEl = containerEl;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.F();
    containerEl.addEventListener('mousedown', this.handleMouseDown);
    containerEl.addEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }
  _createClass(PointerDragging, [{
    key: "destroy",
    value: function destroy() {
      this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
      this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
        passive: true
      });
      listenerDestroyed();
    }
  }, {
    key: "tryStart",
    value: function tryStart(ev) {
      var subjectEl = this.querySubjectEl(ev);
      var downEl = ev.target;
      if (subjectEl && (!this.handleSelector || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, this.handleSelector))) {
        this.subjectEl = subjectEl;
        this.isDragging = true; // do this first so cancelTouchScroll will work
        this.wasTouchScroll = false;
        return true;
      }
      return false;
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      isWindowTouchMoveCancelled = false;
      this.isDragging = false;
      this.subjectEl = null;
      // keep wasTouchScroll around for later access
      this.destroyScrollWatch();
    }
  }, {
    key: "querySubjectEl",
    value: function querySubjectEl(ev) {
      if (this.selector) {
        return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(ev.target, this.selector);
      }
      return this.containerEl;
    }
  }, {
    key: "shouldIgnoreMouse",
    value: function shouldIgnoreMouse() {
      return ignoreMouseDepth || this.isTouchDragging;
    }
    // can be called by user of this class, to cancel touch-based scrolling for the current drag
  }, {
    key: "cancelTouchScroll",
    value: function cancelTouchScroll() {
      if (this.isDragging) {
        isWindowTouchMoveCancelled = true;
      }
    }
    // Scrolling that simulates pointermoves
    // ----------------------------------------------------------------------------------------------------
  }, {
    key: "initScrollWatch",
    value: function initScrollWatch(ev) {
      if (this.shouldWatchScroll) {
        this.recordCoords(ev);
        window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
      }
    }
  }, {
    key: "recordCoords",
    value: function recordCoords(ev) {
      if (this.shouldWatchScroll) {
        this.prevPageX = ev.pageX;
        this.prevPageY = ev.pageY;
        this.prevScrollX = window.pageXOffset;
        this.prevScrollY = window.pageYOffset;
      }
    }
  }, {
    key: "destroyScrollWatch",
    value: function destroyScrollWatch() {
      if (this.shouldWatchScroll) {
        window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
      }
    }
    // Event Normalization
    // ----------------------------------------------------------------------------------------------------
  }, {
    key: "createEventFromMouse",
    value: function createEventFromMouse(ev, isFirst) {
      var deltaX = 0;
      var deltaY = 0;
      // TODO: repeat code
      if (isFirst) {
        this.origPageX = ev.pageX;
        this.origPageY = ev.pageY;
      } else {
        deltaX = ev.pageX - this.origPageX;
        deltaY = ev.pageY - this.origPageY;
      }
      return {
        origEvent: ev,
        isTouch: false,
        subjectEl: this.subjectEl,
        pageX: ev.pageX,
        pageY: ev.pageY,
        deltaX: deltaX,
        deltaY: deltaY
      };
    }
  }, {
    key: "createEventFromTouch",
    value: function createEventFromTouch(ev, isFirst) {
      var touches = ev.touches;
      var pageX;
      var pageY;
      var deltaX = 0;
      var deltaY = 0;
      // if touch coords available, prefer,
      // because FF would give bad ev.pageX ev.pageY
      if (touches && touches.length) {
        pageX = touches[0].pageX;
        pageY = touches[0].pageY;
      } else {
        pageX = ev.pageX;
        pageY = ev.pageY;
      }
      // TODO: repeat code
      if (isFirst) {
        this.origPageX = pageX;
        this.origPageY = pageY;
      } else {
        deltaX = pageX - this.origPageX;
        deltaY = pageY - this.origPageY;
      }
      return {
        origEvent: ev,
        isTouch: true,
        subjectEl: this.subjectEl,
        pageX: pageX,
        pageY: pageY,
        deltaX: deltaX,
        deltaY: deltaY
      };
    }
  }]);
  return PointerDragging;
}(); // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
}
// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(function () {
    ignoreMouseDepth -= 1;
  }, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.touchMouseIgnoreWait);
}
// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated() {
  listenerCnt += 1;
  if (listenerCnt === 1) {
    window.addEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function listenerDestroyed() {
  listenerCnt -= 1;
  if (!listenerCnt) {
    window.removeEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}
function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}

/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/
var ElementMirror = /*#__PURE__*/function () {
  function ElementMirror() {
    _classCallCheck(this, ElementMirror);
    this.isVisible = false; // must be explicitly enabled
    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null; // screen coords relative to viewport
    // options that can be set directly by caller
    this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
    this.zIndex = 9999;
    this.revertDuration = 0;
  }
  _createClass(ElementMirror, [{
    key: "start",
    value: function start(sourceEl, pageX, pageY) {
      this.sourceEl = sourceEl;
      this.sourceElRect = this.sourceEl.getBoundingClientRect();
      this.origScreenX = pageX - window.pageXOffset;
      this.origScreenY = pageY - window.pageYOffset;
      this.deltaX = 0;
      this.deltaY = 0;
      this.updateElPosition();
    }
  }, {
    key: "handleMove",
    value: function handleMove(pageX, pageY) {
      this.deltaX = pageX - window.pageXOffset - this.origScreenX;
      this.deltaY = pageY - window.pageYOffset - this.origScreenY;
      this.updateElPosition();
    }
    // can be called before start
  }, {
    key: "setIsVisible",
    value: function setIsVisible(bool) {
      if (bool) {
        if (!this.isVisible) {
          if (this.mirrorEl) {
            this.mirrorEl.style.display = '';
          }
          this.isVisible = bool; // needs to happen before updateElPosition
          this.updateElPosition(); // because was not updating the position while invisible
        }
      } else if (this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = 'none';
        }
        this.isVisible = bool;
      }
    }
    // always async
  }, {
    key: "stop",
    value: function stop(needsRevertAnimation, callback) {
      var _this2 = this;
      var done = function done() {
        _this2.cleanup();
        callback();
      };
      if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && (
      // if 0, transition won't work
      this.deltaX || this.deltaY) // if same coords, transition won't work
      ) {
        this.doRevertAnimation(done, this.revertDuration);
      } else {
        setTimeout(done, 0);
      }
    }
  }, {
    key: "doRevertAnimation",
    value: function doRevertAnimation(callback, revertDuration) {
      var mirrorEl = this.mirrorEl;
      var finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
      mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(mirrorEl, {
        left: finalSourceElRect.left,
        top: finalSourceElRect.top
      });
      (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b2)(mirrorEl, function () {
        mirrorEl.style.transition = '';
        callback();
      });
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      if (this.mirrorEl) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aO)(this.mirrorEl);
        this.mirrorEl = null;
      }
      this.sourceEl = null;
    }
  }, {
    key: "updateElPosition",
    value: function updateElPosition() {
      if (this.sourceEl && this.isVisible) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(this.getMirrorEl(), {
          left: this.sourceElRect.left + this.deltaX,
          top: this.sourceElRect.top + this.deltaY
        });
      }
    }
  }, {
    key: "getMirrorEl",
    value: function getMirrorEl() {
      var sourceElRect = this.sourceElRect;
      var mirrorEl = this.mirrorEl;
      if (!mirrorEl) {
        mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
        // we don't want long taps or any mouse interaction causing selection/menus.
        // would use preventSelection(), but that prevents selectstart, causing problems.
        mirrorEl.style.userSelect = 'none';
        mirrorEl.style.webkitUserSelect = 'none';
        mirrorEl.classList.add('fc-event-dragging');
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aP)(mirrorEl, {
          position: 'fixed',
          zIndex: this.zIndex,
          visibility: '',
          boxSizing: 'border-box',
          width: sourceElRect.right - sourceElRect.left,
          height: sourceElRect.bottom - sourceElRect.top,
          right: 'auto',
          bottom: 'auto',
          margin: 0
        });
        this.parentNode.appendChild(mirrorEl);
      }
      return mirrorEl;
    }
  }]);
  return ElementMirror;
}();
/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/
var ScrollGeomCache = /*#__PURE__*/function (_ScrollController) {
  _inherits(ScrollGeomCache, _ScrollController);
  function ScrollGeomCache(scrollController, doesListening) {
    var _this3;
    _classCallCheck(this, ScrollGeomCache);
    _this3 = _callSuper(this, ScrollGeomCache);
    _this3.handleScroll = function () {
      _this3.scrollTop = _this3.scrollController.getScrollTop();
      _this3.scrollLeft = _this3.scrollController.getScrollLeft();
      _this3.handleScrollChange();
    };
    _this3.scrollController = scrollController;
    _this3.doesListening = doesListening;
    _this3.scrollTop = _this3.origScrollTop = scrollController.getScrollTop();
    _this3.scrollLeft = _this3.origScrollLeft = scrollController.getScrollLeft();
    _this3.scrollWidth = scrollController.getScrollWidth();
    _this3.scrollHeight = scrollController.getScrollHeight();
    _this3.clientWidth = scrollController.getClientWidth();
    _this3.clientHeight = scrollController.getClientHeight();
    _this3.clientRect = _this3.computeClientRect(); // do last in case it needs cached values
    if (_this3.doesListening) {
      _this3.getEventTarget().addEventListener('scroll', _this3.handleScroll);
    }
    return _this3;
  }
  _createClass(ScrollGeomCache, [{
    key: "destroy",
    value: function destroy() {
      if (this.doesListening) {
        this.getEventTarget().removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      return this.scrollTop;
    }
  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return this.scrollLeft;
    }
  }, {
    key: "setScrollTop",
    value: function setScrollTop(top) {
      this.scrollController.setScrollTop(top);
      if (!this.doesListening) {
        // we are not relying on the element to normalize out-of-bounds scroll values
        // so we need to sanitize ourselves
        this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
        this.handleScrollChange();
      }
    }
  }, {
    key: "setScrollLeft",
    value: function setScrollLeft(top) {
      this.scrollController.setScrollLeft(top);
      if (!this.doesListening) {
        // we are not relying on the element to normalize out-of-bounds scroll values
        // so we need to sanitize ourselves
        this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
        this.handleScrollChange();
      }
    }
  }, {
    key: "getClientWidth",
    value: function getClientWidth() {
      return this.clientWidth;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight() {
      return this.clientHeight;
    }
  }, {
    key: "getScrollWidth",
    value: function getScrollWidth() {
      return this.scrollWidth;
    }
  }, {
    key: "getScrollHeight",
    value: function getScrollHeight() {
      return this.scrollHeight;
    }
  }, {
    key: "handleScrollChange",
    value: function handleScrollChange() {}
  }]);
  return ScrollGeomCache;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bb);
var ElementScrollGeomCache = /*#__PURE__*/function (_ScrollGeomCache) {
  _inherits(ElementScrollGeomCache, _ScrollGeomCache);
  function ElementScrollGeomCache(el, doesListening) {
    _classCallCheck(this, ElementScrollGeomCache);
    return _callSuper(this, ElementScrollGeomCache, [new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bc(el), doesListening]);
  }
  _createClass(ElementScrollGeomCache, [{
    key: "getEventTarget",
    value: function getEventTarget() {
      return this.scrollController.el;
    }
  }, {
    key: "computeClientRect",
    value: function computeClientRect() {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b3)(this.scrollController.el);
    }
  }]);
  return ElementScrollGeomCache;
}(ScrollGeomCache);
var WindowScrollGeomCache = /*#__PURE__*/function (_ScrollGeomCache2) {
  _inherits(WindowScrollGeomCache, _ScrollGeomCache2);
  function WindowScrollGeomCache(doesListening) {
    _classCallCheck(this, WindowScrollGeomCache);
    return _callSuper(this, WindowScrollGeomCache, [new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bd(), doesListening]);
  }
  _createClass(WindowScrollGeomCache, [{
    key: "getEventTarget",
    value: function getEventTarget() {
      return window;
    }
  }, {
    key: "computeClientRect",
    value: function computeClientRect() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight
      };
    }
    // the window is the only scroll object that changes it's rectangle relative
    // to the document's topleft as it scrolls
  }, {
    key: "handleScrollChange",
    value: function handleScrollChange() {
      this.clientRect = this.computeClientRect();
    }
  }]);
  return WindowScrollGeomCache;
}(ScrollGeomCache); // If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
var getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/
var AutoScroller = /*#__PURE__*/function () {
  function AutoScroller() {
    var _this4 = this;
    _classCallCheck(this, AutoScroller);
    // options that can be set by caller
    this.isEnabled = true;
    this.scrollQuery = [window, '.fc-scroller'];
    this.edgeThreshold = 50; // pixels
    this.maxVelocity = 300; // pixels per second
    // internal state
    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null;
    // protect against the initial pointerdown being too close to an edge and starting the scroll
    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;
    this.animate = function () {
      if (_this4.isAnimating) {
        // wasn't cancelled between animation calls
        var edge = _this4.computeBestEdge(_this4.pointerScreenX + window.pageXOffset, _this4.pointerScreenY + window.pageYOffset);
        if (edge) {
          var now = getTime();
          _this4.handleSide(edge, (now - _this4.msSinceRequest) / 1000);
          _this4.requestAnimation(now);
        } else {
          _this4.isAnimating = false; // will stop animation
        }
      }
    };
  }
  _createClass(AutoScroller, [{
    key: "start",
    value: function start(pageX, pageY, scrollStartEl) {
      if (this.isEnabled) {
        this.scrollCaches = this.buildCaches(scrollStartEl);
        this.pointerScreenX = null;
        this.pointerScreenY = null;
        this.everMovedUp = false;
        this.everMovedDown = false;
        this.everMovedLeft = false;
        this.everMovedRight = false;
        this.handleMove(pageX, pageY);
      }
    }
  }, {
    key: "handleMove",
    value: function handleMove(pageX, pageY) {
      if (this.isEnabled) {
        var pointerScreenX = pageX - window.pageXOffset;
        var pointerScreenY = pageY - window.pageYOffset;
        var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
        var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
        if (yDelta < 0) {
          this.everMovedUp = true;
        } else if (yDelta > 0) {
          this.everMovedDown = true;
        }
        if (xDelta < 0) {
          this.everMovedLeft = true;
        } else if (xDelta > 0) {
          this.everMovedRight = true;
        }
        this.pointerScreenX = pointerScreenX;
        this.pointerScreenY = pointerScreenY;
        if (!this.isAnimating) {
          this.isAnimating = true;
          this.requestAnimation(getTime());
        }
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isEnabled) {
        this.isAnimating = false; // will stop animation
        var _iterator = _createForOfIteratorHelper(this.scrollCaches),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var scrollCache = _step.value;
            scrollCache.destroy();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.scrollCaches = null;
      }
    }
  }, {
    key: "requestAnimation",
    value: function requestAnimation(now) {
      this.msSinceRequest = now;
      requestAnimationFrame(this.animate);
    }
  }, {
    key: "handleSide",
    value: function handleSide(edge, seconds) {
      var scrollCache = edge.scrollCache;
      var edgeThreshold = this.edgeThreshold;
      var invDistance = edgeThreshold - edge.distance;
      var velocity =
      // the closer to the edge, the faster we scroll
      invDistance * invDistance / (edgeThreshold * edgeThreshold) *
      // quadratic
      this.maxVelocity * seconds;
      var sign = 1;
      switch (edge.name) {
        case 'left':
          sign = -1;
        // falls through
        case 'right':
          scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
          break;
        case 'top':
          sign = -1;
        // falls through
        case 'bottom':
          scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
          break;
      }
    }
    // left/top are relative to document topleft
  }, {
    key: "computeBestEdge",
    value: function computeBestEdge(left, top) {
      var edgeThreshold = this.edgeThreshold;
      var bestSide = null;
      var scrollCaches = this.scrollCaches || [];
      var _iterator2 = _createForOfIteratorHelper(scrollCaches),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var scrollCache = _step2.value;
          var rect = scrollCache.clientRect;
          var leftDist = left - rect.left;
          var rightDist = rect.right - left;
          var topDist = top - rect.top;
          var bottomDist = rect.bottom - top;
          // completely within the rect?
          if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
            if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
              bestSide = {
                scrollCache: scrollCache,
                name: 'top',
                distance: topDist
              };
            }
            if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
              bestSide = {
                scrollCache: scrollCache,
                name: 'bottom',
                distance: bottomDist
              };
            }
            if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
              bestSide = {
                scrollCache: scrollCache,
                name: 'left',
                distance: leftDist
              };
            }
            if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
              bestSide = {
                scrollCache: scrollCache,
                name: 'right',
                distance: rightDist
              };
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return bestSide;
    }
  }, {
    key: "buildCaches",
    value: function buildCaches(scrollStartEl) {
      return this.queryScrollEls(scrollStartEl).map(function (el) {
        if (el === window) {
          return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
        }
        return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
      });
    }
  }, {
    key: "queryScrollEls",
    value: function queryScrollEls(scrollStartEl) {
      var els = [];
      var _iterator3 = _createForOfIteratorHelper(this.scrollQuery),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var query = _step3.value;
          if (_typeof(query) === 'object') {
            els.push(query);
          } else {
            els.push.apply(els, _toConsumableArray(Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query))));
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return els;
    }
  }]);
  return AutoScroller;
}();
/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/
var FeaturefulElementDragging = /*#__PURE__*/function (_ElementDragging) {
  _inherits(FeaturefulElementDragging, _ElementDragging);
  function FeaturefulElementDragging(containerEl, selector) {
    var _this5;
    _classCallCheck(this, FeaturefulElementDragging);
    _this5 = _callSuper(this, FeaturefulElementDragging, [containerEl]);
    _this5.containerEl = containerEl;
    // options that can be directly set by caller
    // the caller can also set the PointerDragging's options as well
    _this5.delay = null;
    _this5.minDistance = 0;
    _this5.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
    _this5.mirrorNeedsRevert = false;
    _this5.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
    _this5.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
    _this5.isDelayEnded = false;
    _this5.isDistanceSurpassed = false;
    _this5.delayTimeoutId = null;
    _this5.onPointerDown = function (ev) {
      if (!_this5.isDragging) {
        // so new drag doesn't happen while revert animation is going
        _this5.isInteracting = true;
        _this5.isDelayEnded = false;
        _this5.isDistanceSurpassed = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ar)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.at)(document.body);
        // prevent links from being visited if there's an eventual drag.
        // also prevents selection in older browsers (maybe?).
        // not necessary for touch, besides, browser would complain about passiveness.
        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }
        _this5.emitter.trigger('pointerdown', ev);
        if (_this5.isInteracting &&
        // not destroyed via pointerdown handler
        !_this5.pointer.shouldIgnoreMove) {
          // actions related to initiating dragstart+dragmove+dragend...
          _this5.mirror.setIsVisible(false); // reset. caller must set-visible
          _this5.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
          _this5.startDelay(ev);
          if (!_this5.minDistance) {
            _this5.handleDistanceSurpassed(ev);
          }
        }
      }
    };
    _this5.onPointerMove = function (ev) {
      if (_this5.isInteracting) {
        _this5.emitter.trigger('pointermove', ev);
        if (!_this5.isDistanceSurpassed) {
          var minDistance = _this5.minDistance;
          var distanceSq; // current distance from the origin, squared
          var deltaX = ev.deltaX,
            deltaY = ev.deltaY;
          distanceSq = deltaX * deltaX + deltaY * deltaY;
          if (distanceSq >= minDistance * minDistance) {
            // use pythagorean theorem
            _this5.handleDistanceSurpassed(ev);
          }
        }
        if (_this5.isDragging) {
          // a real pointer move? (not one simulated by scrolling)
          if (ev.origEvent.type !== 'scroll') {
            _this5.mirror.handleMove(ev.pageX, ev.pageY);
            _this5.autoScroller.handleMove(ev.pageX, ev.pageY);
          }
          _this5.emitter.trigger('dragmove', ev);
        }
      }
    };
    _this5.onPointerUp = function (ev) {
      if (_this5.isInteracting) {
        _this5.isInteracting = false;
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.as)(document.body);
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.au)(document.body);
        _this5.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
        if (_this5.isDragging) {
          _this5.autoScroller.stop();
          _this5.tryStopDrag(ev); // which will stop the mirror
        }
        if (_this5.delayTimeoutId) {
          clearTimeout(_this5.delayTimeoutId);
          _this5.delayTimeoutId = null;
        }
      }
    };
    var pointer = _this5.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', _this5.onPointerDown);
    pointer.emitter.on('pointermove', _this5.onPointerMove);
    pointer.emitter.on('pointerup', _this5.onPointerUp);
    if (selector) {
      pointer.selector = selector;
    }
    _this5.mirror = new ElementMirror();
    _this5.autoScroller = new AutoScroller();
    return _this5;
  }
  _createClass(FeaturefulElementDragging, [{
    key: "destroy",
    value: function destroy() {
      this.pointer.destroy();
      // HACK: simulate a pointer-up to end the current drag
      // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
      this.onPointerUp({});
    }
  }, {
    key: "startDelay",
    value: function startDelay(ev) {
      var _this6 = this;
      if (typeof this.delay === 'number') {
        this.delayTimeoutId = setTimeout(function () {
          _this6.delayTimeoutId = null;
          _this6.handleDelayEnd(ev);
        }, this.delay); // not assignable to number!
      } else {
        this.handleDelayEnd(ev);
      }
    }
  }, {
    key: "handleDelayEnd",
    value: function handleDelayEnd(ev) {
      this.isDelayEnded = true;
      this.tryStartDrag(ev);
    }
  }, {
    key: "handleDistanceSurpassed",
    value: function handleDistanceSurpassed(ev) {
      this.isDistanceSurpassed = true;
      this.tryStartDrag(ev);
    }
  }, {
    key: "tryStartDrag",
    value: function tryStartDrag(ev) {
      if (this.isDelayEnded && this.isDistanceSurpassed) {
        if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
          this.isDragging = true;
          this.mirrorNeedsRevert = false;
          this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
          this.emitter.trigger('dragstart', ev);
          if (this.touchScrollAllowed === false) {
            this.pointer.cancelTouchScroll();
          }
        }
      }
    }
  }, {
    key: "tryStopDrag",
    value: function tryStopDrag(ev) {
      // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
      // that come from the document to fire beforehand. much more convenient this way.
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
    }
  }, {
    key: "stopDrag",
    value: function stopDrag(ev) {
      this.isDragging = false;
      this.emitter.trigger('dragend', ev);
    }
    // fill in the implementations...
  }, {
    key: "setIgnoreMove",
    value: function setIgnoreMove(bool) {
      this.pointer.shouldIgnoreMove = bool;
    }
  }, {
    key: "setMirrorIsVisible",
    value: function setMirrorIsVisible(bool) {
      this.mirror.setIsVisible(bool);
    }
  }, {
    key: "setMirrorNeedsRevert",
    value: function setMirrorNeedsRevert(bool) {
      this.mirrorNeedsRevert = bool;
    }
  }, {
    key: "setAutoScrollEnabled",
    value: function setAutoScrollEnabled(bool) {
      this.autoScroller.isEnabled = bool;
    }
  }]);
  return FeaturefulElementDragging;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bH);
/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/
var OffsetTracker = /*#__PURE__*/function () {
  function OffsetTracker(el) {
    _classCallCheck(this, OffsetTracker);
    this.origRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b6)(el);
    // will work fine for divs that have overflow:hidden
    this.scrollCaches = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b5)(el).map(function (scrollEl) {
      return new ElementScrollGeomCache(scrollEl, true);
    });
  }
  _createClass(OffsetTracker, [{
    key: "destroy",
    value: function destroy() {
      var _iterator4 = _createForOfIteratorHelper(this.scrollCaches),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var scrollCache = _step4.value;
          scrollCache.destroy();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "computeLeft",
    value: function computeLeft() {
      var left = this.origRect.left;
      var _iterator5 = _createForOfIteratorHelper(this.scrollCaches),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var scrollCache = _step5.value;
          left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return left;
    }
  }, {
    key: "computeTop",
    value: function computeTop() {
      var top = this.origRect.top;
      var _iterator6 = _createForOfIteratorHelper(this.scrollCaches),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var scrollCache = _step6.value;
          top += scrollCache.origScrollTop - scrollCache.getScrollTop();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return top;
    }
  }, {
    key: "isWithinClipping",
    value: function isWithinClipping(pageX, pageY) {
      var point = {
        left: pageX,
        top: pageY
      };
      var _iterator7 = _createForOfIteratorHelper(this.scrollCaches),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var scrollCache = _step7.value;
          if (!isIgnoredClipping(scrollCache.getEventTarget()) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aF)(point, scrollCache.clientRect)) {
            return false;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return true;
    }
  }]);
  return OffsetTracker;
}(); // certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node) {
  var tagName = node.tagName;
  return tagName === 'HTML' || tagName === 'BODY';
}

/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/
var HitDragging = /*#__PURE__*/function () {
  function HitDragging(dragging, droppableStore) {
    var _this7 = this;
    _classCallCheck(this, HitDragging);
    // options that can be set by caller
    this.useSubjectCenter = false;
    this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null; // won't ever be populated if shouldIgnoreMove
    this.handlePointerDown = function (ev) {
      var dragging = _this7.dragging;
      _this7.initialHit = null;
      _this7.movingHit = null;
      _this7.finalHit = null;
      _this7.prepareHits();
      _this7.processFirstCoord(ev);
      if (_this7.initialHit || !_this7.requireInitial) {
        dragging.setIgnoreMove(false);
        // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
        _this7.emitter.trigger('pointerdown', ev);
      } else {
        dragging.setIgnoreMove(true);
      }
    };
    this.handleDragStart = function (ev) {
      _this7.emitter.trigger('dragstart', ev);
      _this7.handleMove(ev, true); // force = fire even if initially null
    };
    this.handleDragMove = function (ev) {
      _this7.emitter.trigger('dragmove', ev);
      _this7.handleMove(ev);
    };
    this.handlePointerUp = function (ev) {
      _this7.releaseHits();
      _this7.emitter.trigger('pointerup', ev);
    };
    this.handleDragEnd = function (ev) {
      if (_this7.movingHit) {
        _this7.emitter.trigger('hitupdate', null, true, ev);
      }
      _this7.finalHit = _this7.movingHit;
      _this7.movingHit = null;
      _this7.emitter.trigger('dragend', ev);
    };
    this.droppableStore = droppableStore;
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    dragging.emitter.on('dragmove', this.handleDragMove);
    dragging.emitter.on('pointerup', this.handlePointerUp);
    dragging.emitter.on('dragend', this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.F();
  }
  // sets initialHit
  // sets coordAdjust
  _createClass(HitDragging, [{
    key: "processFirstCoord",
    value: function processFirstCoord(ev) {
      var origPoint = {
        left: ev.pageX,
        top: ev.pageY
      };
      var adjustedPoint = origPoint;
      var subjectEl = ev.subjectEl;
      var subjectRect;
      if (subjectEl instanceof HTMLElement) {
        // i.e. not a Document/ShadowRoot
        subjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b6)(subjectEl);
        adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aG)(adjustedPoint, subjectRect);
      }
      var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
      if (initialHit) {
        if (this.useSubjectCenter && subjectRect) {
          var slicedSubjectRect = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aE)(subjectRect, initialHit.rect);
          if (slicedSubjectRect) {
            adjustedPoint = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aH)(slicedSubjectRect);
          }
        }
        this.coordAdjust = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aI)(adjustedPoint, origPoint);
      } else {
        this.coordAdjust = {
          left: 0,
          top: 0
        };
      }
    }
  }, {
    key: "handleMove",
    value: function handleMove(ev, forceHandle) {
      var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
      if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
        this.movingHit = hit;
        this.emitter.trigger('hitupdate', hit, false, ev);
      }
    }
  }, {
    key: "prepareHits",
    value: function prepareHits() {
      this.offsetTrackers = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a)(this.droppableStore, function (interactionSettings) {
        interactionSettings.component.prepareHits();
        return new OffsetTracker(interactionSettings.el);
      });
    }
  }, {
    key: "releaseHits",
    value: function releaseHits() {
      var offsetTrackers = this.offsetTrackers;
      for (var id in offsetTrackers) {
        offsetTrackers[id].destroy();
      }
      this.offsetTrackers = {};
    }
  }, {
    key: "queryHitForOffset",
    value: function queryHitForOffset(offsetLeft, offsetTop) {
      var droppableStore = this.droppableStore,
        offsetTrackers = this.offsetTrackers;
      var bestHit = null;
      for (var id in droppableStore) {
        var component = droppableStore[id].component;
        var offsetTracker = offsetTrackers[id];
        if (offsetTracker &&
        // wasn't destroyed mid-drag
        offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
          var originLeft = offsetTracker.computeLeft();
          var originTop = offsetTracker.computeTop();
          var positionLeft = offsetLeft - originLeft;
          var positionTop = offsetTop - originTop;
          var origRect = offsetTracker.origRect;
          var width = origRect.right - origRect.left;
          var height = origRect.bottom - origRect.top;
          if (
          // must be within the element's bounds
          positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
            var hit = component.queryHit(positionLeft, positionTop, width, height);
            if (hit &&
            // make sure the hit is within activeRange, meaning it's not a dead cell
            (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b9)(hit.dateProfile.activeRange, hit.dateSpan.range) && (!bestHit || hit.layer > bestHit.layer)) {
              hit.componentId = id;
              hit.context = component.context;
              // TODO: better way to re-orient rectangle
              hit.rect.left += originLeft;
              hit.rect.right += originLeft;
              hit.rect.top += originTop;
              hit.rect.bottom += originTop;
              bestHit = hit;
            }
          }
        }
      }
      return bestHit;
    }
  }]);
  return HitDragging;
}();
function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }
  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bf)(hit0.dateSpan, hit1.dateSpan);
}
function buildDatePointApiWithContext(dateSpan, context) {
  var props = {};
  var _iterator8 = _createForOfIteratorHelper(context.pluginHooks.datePointTransforms),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var transform = _step8.value;
      Object.assign(props, transform(dateSpan, context));
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
  return props;
}
function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}

/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/
var DateClicking = /*#__PURE__*/function (_Interaction) {
  _inherits(DateClicking, _Interaction);
  function DateClicking(settings) {
    var _this8;
    _classCallCheck(this, DateClicking);
    _this8 = _callSuper(this, DateClicking, [settings]);
    _this8.handlePointerDown = function (pev) {
      var _assertThisInitialize = _assertThisInitialized(_this8),
        dragging = _assertThisInitialize.dragging;
      var downEl = pev.origEvent.target;
      // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
      dragging.setIgnoreMove(!_this8.component.isValidDateDownEl(downEl));
    };
    // won't even fire if moving was ignored
    _this8.handleDragEnd = function (ev) {
      var _assertThisInitialize2 = _assertThisInitialized(_this8),
        component = _assertThisInitialize2.component;
      var pointer = _this8.dragging.pointer;
      if (!pointer.wasTouchScroll) {
        var _this8$hitDragging = _this8.hitDragging,
          initialHit = _this8$hitDragging.initialHit,
          finalHit = _this8$hitDragging.finalHit;
        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          var context = component.context;
          var arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });
          context.emitter.trigger('dateClick', arg);
        }
      }
    };
    // we DO want to watch pointer moves because otherwise finalHit won't get populated
    _this8.dragging = new FeaturefulElementDragging(settings.el);
    _this8.dragging.autoScroller.isEnabled = false;
    var hitDragging = _this8.hitDragging = new HitDragging(_this8.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', _this8.handlePointerDown);
    hitDragging.emitter.on('dragend', _this8.handleDragEnd);
    return _this8;
  }
  _createClass(DateClicking, [{
    key: "destroy",
    value: function destroy() {
      this.dragging.destroy();
    }
  }]);
  return DateClicking;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z);
/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/
var DateSelecting = /*#__PURE__*/function (_Interaction2) {
  _inherits(DateSelecting, _Interaction2);
  function DateSelecting(settings) {
    var _this9;
    _classCallCheck(this, DateSelecting);
    _this9 = _callSuper(this, DateSelecting, [settings]);
    _this9.dragSelection = null;
    _this9.handlePointerDown = function (ev) {
      var _assertThisInitialize3 = _assertThisInitialized(_this9),
        component = _assertThisInitialize3.component,
        dragging = _assertThisInitialize3.dragging;
      var options = component.context.options;
      var canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target);
      // don't bother to watch expensive moves if component won't do selection
      dragging.setIgnoreMove(!canSelect);
      // if touch, require user to hold down
      dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
    };
    _this9.handleDragStart = function (ev) {
      _this9.component.context.calendarApi.unselect(ev); // unselect previous selections
    };
    _this9.handleHitUpdate = function (hit, isFinal) {
      var context = _this9.component.context;
      var dragSelection = null;
      var isInvalid = false;
      if (hit) {
        var initialHit = _this9.hitDragging.initialHit;
        var disallowed = hit.componentId === initialHit.componentId && _this9.isHitComboAllowed && !_this9.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }
        if (!dragSelection || !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b_)(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }
      if (dragSelection) {
        context.dispatch({
          type: 'SELECT_DATES',
          selection: dragSelection
        });
      } else if (!isFinal) {
        // only unselect if moved away while dragging
        context.dispatch({
          type: 'UNSELECT_DATES'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        _this9.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
      }
    };
    _this9.handlePointerUp = function (pev) {
      if (_this9.dragSelection) {
        // selection is already rendered, so just need to report selection
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cu)(_this9.dragSelection, pev, _this9.component.context);
        _this9.dragSelection = null;
      }
    };
    var component = settings.component;
    var options = component.context.options;
    var dragging = _this9.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this9.hitDragging = new HitDragging(_this9.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', _this9.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this9.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this9.handleHitUpdate);
    hitDragging.emitter.on('pointerup', _this9.handlePointerUp);
    return _this9;
  }
  _createClass(DateSelecting, [{
    key: "destroy",
    value: function destroy() {
      this.dragging.destroy();
    }
  }]);
  return DateSelecting;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z);
function getComponentTouchDelay$1(component) {
  var options = component.context.options;
  var delay = options.selectLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.av);
  var props = {};
  var _iterator9 = _createForOfIteratorHelper(dateSelectionTransformers),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var transformer = _step9.value;
      var res = transformer(hit0, hit1);
      if (res === false) {
        return null;
      }
      if (res) {
        Object.assign(props, res);
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}
var EventDragging = /*#__PURE__*/function (_Interaction3) {
  _inherits(EventDragging, _Interaction3);
  function EventDragging(settings) {
    var _this10;
    _classCallCheck(this, EventDragging);
    _this10 = _callSuper(this, EventDragging, [settings]);
    // internal state
    _this10.subjectEl = null;
    _this10.subjectSeg = null; // the seg being selected/dragged
    _this10.isDragging = false;
    _this10.eventRange = null;
    _this10.relevantEvents = null; // the events being dragged
    _this10.receivingContext = null;
    _this10.validMutation = null;
    _this10.mutatedRelevantEvents = null;
    _this10.handlePointerDown = function (ev) {
      var origTarget = ev.origEvent.target;
      var _assertThisInitialize4 = _assertThisInitialized(_this10),
        component = _assertThisInitialize4.component,
        dragging = _assertThisInitialize4.dragging;
      var mirror = dragging.mirror;
      var options = component.context.options;
      var initialContext = component.context;
      _this10.subjectEl = ev.subjectEl;
      var subjectSeg = _this10.subjectSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(ev.subjectEl);
      var eventRange = _this10.eventRange = subjectSeg.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;
      _this10.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aV)(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
      dragging.delay =
      // only do a touch delay if touch and this event hasn't been selected yet
      ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay(component) : null;
      if (options.fixedMirrorParent) {
        mirror.parentNode = options.fixedMirrorParent;
      } else {
        mirror.parentNode = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(origTarget, '.fc');
      }
      mirror.revertDuration = options.dragRevertDuration;
      var isValid = component.isValidSegDownEl(origTarget) && !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(origTarget, '.fc-event-resizer'); // NOT on a resizer
      dragging.setIgnoreMove(!isValid);
      // disable dragging for elements that are resizable (ie, selectable)
      // but are not draggable
      _this10.isDragging = isValid && ev.subjectEl.classList.contains('fc-event-draggable');
    };
    _this10.handleDragStart = function (ev) {
      var initialContext = _this10.component.context;
      var eventRange = _this10.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;
      if (ev.isTouch) {
        // need to select a different event?
        if (eventInstanceId !== _this10.component.props.eventSelection) {
          initialContext.dispatch({
            type: 'SELECT_EVENT',
            eventInstanceId: eventInstanceId
          });
        }
      } else {
        // if now using mouse, but was previous touch interaction, clear selected event
        initialContext.dispatch({
          type: 'UNSELECT_EVENT'
        });
      }
      if (_this10.isDragging) {
        initialContext.calendarApi.unselect(ev); // unselect *date* selection
        initialContext.emitter.trigger('eventDragStart', {
          el: _this10.subjectEl,
          event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };
    _this10.handleHitUpdate = function (hit, isFinal) {
      if (!_this10.isDragging) {
        return;
      }
      var relevantEvents = _this10.relevantEvents;
      var initialHit = _this10.hitDragging.initialHit;
      var initialContext = _this10.component.context;
      // states based on new hit
      var receivingContext = null;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: true
      };
      if (hit) {
        receivingContext = hit.context;
        var receivingOptions = receivingContext.options;
        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
          if (mutation) {
            mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bX)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;
            if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, receivingContext)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)();
            }
          }
        } else {
          receivingContext = null;
        }
      }
      _this10.displayDrag(receivingContext, interaction);
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        if (initialContext === receivingContext &&
        // TODO: write test for this
        isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        _this10.dragging.setMirrorNeedsRevert(!mutation);
        // render the mirror if no already-rendered mirror
        // TODO: wish we could somehow wait for dispatch to guarantee render
        _this10.dragging.setMirrorIsVisible(!hit || !_this10.subjectEl.getRootNode().querySelector('.fc-event-mirror'));
        // assign states based on new hit
        _this10.receivingContext = receivingContext;
        _this10.validMutation = mutation;
        _this10.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    _this10.handlePointerUp = function () {
      if (!_this10.isDragging) {
        _this10.cleanup(); // because handleDragEnd won't fire
      }
    };
    _this10.handleDragEnd = function (ev) {
      if (_this10.isDragging) {
        var initialContext = _this10.component.context;
        var initialView = initialContext.viewApi;
        var _assertThisInitialize5 = _assertThisInitialized(_this10),
          receivingContext = _assertThisInitialize5.receivingContext,
          validMutation = _assertThisInitialize5.validMutation;
        var eventDef = _this10.eventRange.def;
        var eventInstance = _this10.eventRange.instance;
        var eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, eventDef, eventInstance);
        var relevantEvents = _this10.relevantEvents;
        var mutatedRelevantEvents = _this10.mutatedRelevantEvents;
        var finalHit = _this10.hitDragging.finalHit;
        _this10.clearDrag(); // must happen after revert animation
        initialContext.emitter.trigger('eventDragStop', {
          el: _this10.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });
        if (validMutation) {
          // dropped within same calendar
          if (receivingContext === initialContext) {
            var updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
            initialContext.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents
            });
            var eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, initialContext, eventInstance),
              revert: function revert() {
                initialContext.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents // the pre-change data
                });
              }
            };
            var transformed = {};
            var _iterator10 = _createForOfIteratorHelper(initialContext.getCurrentData().pluginHooks.eventDropTransformers),
              _step10;
            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var transformer = _step10.value;
                Object.assign(transformed, transformer(validMutation, initialContext));
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
            initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), {
              el: ev.subjectEl,
              delta: validMutation.datesDelta,
              jsEvent: ev.origEvent,
              view: initialView
            }));
            initialContext.emitter.trigger('eventChange', eventChangeArg);
            // dropped in different calendar
          } else if (receivingContext) {
            var eventRemoveArg = {
              event: eventApi,
              relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(relevantEvents, initialContext, eventInstance),
              revert: function revert() {
                initialContext.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents
                });
              }
            };
            initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), {
              draggedEl: ev.subjectEl,
              view: initialView
            }));
            initialContext.dispatch({
              type: 'REMOVE_EVENTS',
              eventStore: relevantEvents
            });
            initialContext.emitter.trigger('eventRemove', eventRemoveArg);
            var addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
            var addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
            var addedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(receivingContext, addedEventDef, addedEventInstance);
            receivingContext.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents
            });
            var eventAddArg = {
              event: addedEventApi,
              relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, receivingContext, addedEventInstance),
              revert: function revert() {
                receivingContext.dispatch({
                  type: 'REMOVE_EVENTS',
                  eventStore: mutatedRelevantEvents
                });
              }
            };
            receivingContext.emitter.trigger('eventAdd', eventAddArg);
            if (ev.isTouch) {
              receivingContext.dispatch({
                type: 'SELECT_EVENT',
                eventInstanceId: eventInstance.instanceId
              });
            }
            receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
              draggedEl: ev.subjectEl,
              jsEvent: ev.origEvent,
              view: finalHit.context.viewApi
            }));
            receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), {
              draggedEl: ev.subjectEl,
              view: finalHit.context.viewApi
            }));
          }
        } else {
          initialContext.emitter.trigger('_noEventDrop');
        }
      }
      _this10.cleanup();
    };
    var _assertThisInitialize6 = _assertThisInitialized(_this10),
      component = _assertThisInitialize6.component;
    var options = component.context.options;
    var dragging = _this10.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = EventDragging.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this10.hitDragging = new HitDragging(_this10.dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a7);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on('pointerdown', _this10.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this10.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this10.handleHitUpdate);
    hitDragging.emitter.on('pointerup', _this10.handlePointerUp);
    hitDragging.emitter.on('dragend', _this10.handleDragEnd);
    return _this10;
  }
  _createClass(EventDragging, [{
    key: "destroy",
    value: function destroy() {
      this.dragging.destroy();
    }
    // render a drag state on the next receivingCalendar
  }, {
    key: "displayDrag",
    value: function displayDrag(nextContext, state) {
      var initialContext = this.component.context;
      var prevContext = this.receivingContext;
      // does the previous calendar need to be cleared?
      if (prevContext && prevContext !== nextContext) {
        // does the initial calendar need to be cleared?
        // if so, don't clear all the way. we still need to to hide the affectedEvents
        if (prevContext === initialContext) {
          prevContext.dispatch({
            type: 'SET_EVENT_DRAG',
            state: {
              affectedEvents: state.affectedEvents,
              mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
              isEvent: true
            }
          });
          // completely clear the old calendar if it wasn't the initial
        } else {
          prevContext.dispatch({
            type: 'UNSET_EVENT_DRAG'
          });
        }
      }
      if (nextContext) {
        nextContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state: state
        });
      }
    }
  }, {
    key: "clearDrag",
    value: function clearDrag() {
      var initialCalendar = this.component.context;
      var receivingContext = this.receivingContext;
      if (receivingContext) {
        receivingContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
      // the initial calendar might have an dummy drag state from displayDrag
      if (initialCalendar !== receivingContext) {
        initialCalendar.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      this.subjectSeg = null;
      this.isDragging = false;
      this.eventRange = null;
      this.relevantEvents = null;
      this.receivingContext = null;
      this.validMutation = null;
      this.mutatedRelevantEvents = null;
    }
  }]);
  return EventDragging;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z); // TODO: test this in IE11
// QUESTION: why do we need it on the resizable???
EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
function computeEventMutation(hit0, hit1, massagers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var date0 = dateSpan0.range.start;
  var date1 = dateSpan1.range.start;
  var standardProps = {};
  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
    if (dateSpan1.allDay) {
      // means date1 is already start-of-day,
      // but date0 needs to be converted
      date0 = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(date0);
    }
  }
  var delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);
  if (delta.milliseconds) {
    // has hours/minutes/seconds
    standardProps.allDay = false;
  }
  var mutation = {
    datesDelta: delta,
    standardProps: standardProps
  };
  var _iterator11 = _createForOfIteratorHelper(massagers),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var massager = _step11.value;
      massager(mutation, hit0, hit1);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  return mutation;
}
function getComponentTouchDelay(component) {
  var options = component.context.options;
  var delay = options.eventLongPressDelay;
  if (delay == null) {
    delay = options.longPressDelay;
  }
  return delay;
}
var EventResizing = /*#__PURE__*/function (_Interaction4) {
  _inherits(EventResizing, _Interaction4);
  function EventResizing(settings) {
    var _this11;
    _classCallCheck(this, EventResizing);
    _this11 = _callSuper(this, EventResizing, [settings]);
    // internal state
    _this11.draggingSegEl = null;
    _this11.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?
    _this11.eventRange = null;
    _this11.relevantEvents = null;
    _this11.validMutation = null;
    _this11.mutatedRelevantEvents = null;
    _this11.handlePointerDown = function (ev) {
      var _assertThisInitialize7 = _assertThisInitialized(_this11),
        component = _assertThisInitialize7.component;
      var segEl = _this11.querySegEl(ev);
      var seg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      var eventRange = _this11.eventRange = seg.eventRange;
      _this11.dragging.minDistance = component.context.options.eventDragMinDistance;
      // if touch, need to be working with a selected event
      _this11.dragging.setIgnoreMove(!_this11.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && _this11.component.props.eventSelection !== eventRange.instance.instanceId);
    };
    _this11.handleDragStart = function (ev) {
      var context = _this11.component.context;
      var eventRange = _this11.eventRange;
      _this11.relevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aV)(context.getCurrentData().eventStore, _this11.eventRange.instance.instanceId);
      var segEl = _this11.querySegEl(ev);
      _this11.draggingSegEl = segEl;
      _this11.draggingSeg = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__._)(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger('eventResizeStart', {
        el: segEl,
        event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };
    _this11.handleHitUpdate = function (hit, isFinal, ev) {
      var context = _this11.component.context;
      var relevantEvents = _this11.relevantEvents;
      var initialHit = _this11.hitDragging.initialHit;
      var eventInstance = _this11.eventRange.instance;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: true
      };
      if (hit) {
        var disallowed = hit.componentId === initialHit.componentId && _this11.isHitComboAllowed && !_this11.isHitComboAllowed(initialHit, hit);
        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
        }
      }
      if (mutation) {
        mutatedRelevantEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bX)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;
        if (!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }
      if (mutatedRelevantEvents) {
        context.dispatch({
          type: 'SET_EVENT_RESIZE',
          state: interaction
        });
      } else {
        context.dispatch({
          type: 'UNSET_EVENT_RESIZE'
        });
      }
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }
        _this11.validMutation = mutation;
        _this11.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };
    _this11.handleDragEnd = function (ev) {
      var context = _this11.component.context;
      var eventDef = _this11.eventRange.def;
      var eventInstance = _this11.eventRange.instance;
      var eventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, eventDef, eventInstance);
      var relevantEvents = _this11.relevantEvents;
      var mutatedRelevantEvents = _this11.mutatedRelevantEvents;
      context.emitter.trigger('eventResizeStop', {
        el: _this11.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
      if (_this11.validMutation) {
        var updatedEventApi = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: mutatedRelevantEvents
        });
        var eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.w)(mutatedRelevantEvents, context, eventInstance),
          revert: function revert() {
            context.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: relevantEvents // the pre-change events
            });
          }
        };
        context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), {
          el: _this11.draggingSegEl,
          startDelta: _this11.validMutation.startDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0),
          endDelta: _this11.validMutation.endDelta || (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger('eventChange', eventChangeArg);
      } else {
        context.emitter.trigger('_noEventResize');
      }
      // reset all internal state
      _this11.draggingSeg = null;
      _this11.relevantEvents = null;
      _this11.validMutation = null;
      // okay to keep eventInstance around. useful to set it in handlePointerDown
    };
    var component = settings.component;
    var dragging = _this11.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = '.fc-event-resizer';
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    var hitDragging = _this11.hitDragging = new HitDragging(_this11.dragging, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bG)(settings));
    hitDragging.emitter.on('pointerdown', _this11.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this11.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this11.handleHitUpdate);
    hitDragging.emitter.on('dragend', _this11.handleDragEnd);
    return _this11;
  }
  _createClass(EventResizing, [{
    key: "destroy",
    value: function destroy() {
      this.dragging.destroy();
    }
  }, {
    key: "querySegEl",
    value: function querySegEl(ev) {
      return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(ev.subjectEl, '.fc-event');
    }
  }]);
  return EventResizing;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.Z);
function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  var dateEnv = hit0.context.dateEnv;
  var date0 = hit0.dateSpan.range.start;
  var date1 = hit1.dateSpan.range.start;
  var delta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aA)(date0, date1, dateEnv, hit0.largeUnit);
  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return {
        startDelta: delta
      };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return {
      endDelta: delta
    };
  }
  return null;
}
var UnselectAuto = /*#__PURE__*/function () {
  function UnselectAuto(context) {
    var _this12 = this;
    _classCallCheck(this, UnselectAuto);
    this.context = context;
    this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
    this.matchesCancel = false;
    this.matchesEvent = false;
    this.onSelect = function (selectInfo) {
      if (selectInfo.jsEvent) {
        _this12.isRecentPointerDateSelect = true;
      }
    };
    this.onDocumentPointerDown = function (pev) {
      var unselectCancel = _this12.context.options.unselectCancel;
      var downEl = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aR)(pev.origEvent);
      _this12.matchesCancel = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, unselectCancel);
      _this12.matchesEvent = !!(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.$)(downEl, EventDragging.SELECTOR); // interaction started on an event?
    };
    this.onDocumentPointerUp = function (pev) {
      var context = _this12.context;
      var documentPointer = _this12.documentPointer;
      var calendarState = context.getCurrentData();
      // touch-scrolling should never unfocus any type of selection
      if (!documentPointer.wasTouchScroll) {
        if (calendarState.dateSelection &&
        // an existing date selection?
        !_this12.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
        ) {
          var unselectAuto = context.options.unselectAuto;
          if (unselectAuto && (!unselectAuto || !_this12.matchesCancel)) {
            context.calendarApi.unselect(pev);
          }
        }
        if (calendarState.eventSelection &&
        // an existing event selected?
        !_this12.matchesEvent // interaction DIDN'T start on an event
        ) {
          context.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
      }
      _this12.isRecentPointerDateSelect = false;
    };
    var documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
    documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
    /*
    TODO: better way to know about whether there was a selection with the pointer
    */
    context.emitter.on('select', this.onSelect);
  }
  _createClass(UnselectAuto, [{
    key: "destroy",
    value: function destroy() {
      this.context.emitter.off('select', this.onSelect);
      this.documentPointer.destroy();
    }
  }]);
  return UnselectAuto;
}();
var OPTION_REFINERS = {
  fixedMirrorParent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
};
var LISTENER_REFINERS = {
  dateClick: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDragStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDragStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventDrop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResizeStart: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResizeStop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventResize: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  drop: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventReceive: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  eventLeave: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
};

/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/
var ExternalElementDragging = /*#__PURE__*/function () {
  function ExternalElementDragging(dragging, suppliedDragMeta) {
    var _this13 = this;
    _classCallCheck(this, ExternalElementDragging);
    this.receivingContext = null;
    this.droppableEvent = null; // will exist for all drags, even if create:false
    this.suppliedDragMeta = null;
    this.dragMeta = null;
    this.handleDragStart = function (ev) {
      _this13.dragMeta = _this13.buildDragMeta(ev.subjectEl);
    };
    this.handleHitUpdate = function (hit, isFinal, ev) {
      var dragging = _this13.hitDragging.dragging;
      var receivingContext = null;
      var droppableEvent = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        mutatedEvents: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)(),
        isEvent: _this13.dragMeta.create
      };
      if (hit) {
        receivingContext = hit.context;
        if (_this13.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
          droppableEvent = computeEventForDateSpan(hit.dateSpan, _this13.dragMeta, receivingContext);
          interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW)(droppableEvent);
          isInvalid = !(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bZ)(interaction, hit.dateProfile, receivingContext);
          if (isInvalid) {
            interaction.mutatedEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.I)();
            droppableEvent = null;
          }
        }
      }
      _this13.displayDrag(receivingContext, interaction);
      // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
      // TODO: wish we could somehow wait for dispatch to guarantee render
      dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
      if (!isInvalid) {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aw)();
      } else {
        (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ax)();
      }
      if (!isFinal) {
        dragging.setMirrorNeedsRevert(!droppableEvent);
        _this13.receivingContext = receivingContext;
        _this13.droppableEvent = droppableEvent;
      }
    };
    this.handleDragEnd = function (pev) {
      var receivingContext = _this13.receivingContext,
        droppableEvent = _this13.droppableEvent;
      _this13.clearDrag();
      if (receivingContext && droppableEvent) {
        var finalHit = _this13.hitDragging.finalHit;
        var finalView = finalHit.context.viewApi;
        var dragMeta = _this13.dragMeta;
        receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
          draggedEl: pev.subjectEl,
          jsEvent: pev.origEvent,
          view: finalView
        }));
        if (dragMeta.create) {
          var addingEvents = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aW)(droppableEvent);
          receivingContext.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: addingEvents
          });
          if (pev.isTouch) {
            receivingContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId: droppableEvent.instance.instanceId
            });
          }
          // signal that an external event landed
          receivingContext.emitter.trigger('eventReceive', {
            event: new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a0(receivingContext, droppableEvent.def, droppableEvent.instance),
            relatedEvents: [],
            revert: function revert() {
              receivingContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: addingEvents
              });
            },
            draggedEl: pev.subjectEl,
            view: finalView
          });
        }
      }
      _this13.receivingContext = null;
      _this13.droppableEvent = null;
    };
    var hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a7);
    hitDragging.requireInitial = false; // will start outside of a component
    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
    this.suppliedDragMeta = suppliedDragMeta;
  }
  _createClass(ExternalElementDragging, [{
    key: "buildDragMeta",
    value: function buildDragMeta(subjectEl) {
      if (_typeof(this.suppliedDragMeta) === 'object') {
        return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(this.suppliedDragMeta);
      }
      if (typeof this.suppliedDragMeta === 'function') {
        return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(this.suppliedDragMeta(subjectEl));
      }
      return getDragMetaFromEl(subjectEl);
    }
  }, {
    key: "displayDrag",
    value: function displayDrag(nextContext, state) {
      var prevContext = this.receivingContext;
      if (prevContext && prevContext !== nextContext) {
        prevContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
      if (nextContext) {
        nextContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state: state
        });
      }
    }
  }, {
    key: "clearDrag",
    value: function clearDrag() {
      if (this.receivingContext) {
        this.receivingContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }
  }, {
    key: "canDropElOnCalendar",
    value: function canDropElOnCalendar(el, receivingContext) {
      var dropAccept = receivingContext.options.dropAccept;
      if (typeof dropAccept === 'function') {
        return dropAccept.call(receivingContext.calendarApi, el);
      }
      if (typeof dropAccept === 'string' && dropAccept) {
        return Boolean((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aQ)(el, dropAccept));
      }
      return true;
    }
  }]);
  return ExternalElementDragging;
}(); // Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------
function computeEventForDateSpan(dateSpan, dragMeta, context) {
  var defProps = Object.assign({}, dragMeta.leftoverProps);
  var _iterator12 = _createForOfIteratorHelper(context.pluginHooks.externalDefTransforms),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var transform = _step12.value;
      Object.assign(defProps, transform(dateSpan, dragMeta));
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  var _refineEventDef = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.al)(defProps, context),
    refined = _refineEventDef.refined,
    extra = _refineEventDef.extra;
  var def = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ak)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration),
  // hasEnd
  context);
  var start = dateSpan.range.start;
  // only rely on time info if drop zone is all-day,
  // otherwise, we already know the time
  if (dateSpan.allDay && dragMeta.startTime) {
    start = context.dateEnv.add(start, dragMeta.startTime);
  }
  var end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cv)(dateSpan.allDay, start, context);
  var instance = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aj)(def.defId, {
    start: start,
    end: end
  });
  return {
    def: def,
    instance: instance
  };
}
// Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------
function getDragMetaFromEl(el) {
  var str = getEmbeddedElData(el, 'event');
  var obj = str ? JSON.parse(str) : {
    create: false
  }; // if no embedded data, assume no event creation
  return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bJ)(obj);
}
_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.dataAttrPrefix = '';
function getEmbeddedElData(el, name) {
  var prefix = _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bI.dataAttrPrefix;
  var prefixedName = (prefix ? prefix + '-' : '') + name;
  return el.getAttribute('data-' + prefixedName) || '';
}

/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/
var ExternalDraggable = /*#__PURE__*/function () {
  function ExternalDraggable(el) {
    var _this14 = this;
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, ExternalDraggable);
    this.handlePointerDown = function (ev) {
      var dragging = _this14.dragging;
      var _this14$settings = _this14.settings,
        minDistance = _this14$settings.minDistance,
        longPressDelay = _this14$settings.longPressDelay;
      dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.e.eventDragMinDistance;
      dragging.delay = ev.isTouch ?
      // TODO: eventually read eventLongPressDelay instead vvv
      longPressDelay != null ? longPressDelay : _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.e.longPressDelay : 0;
    };
    this.handleDragStart = function (ev) {
      if (ev.isTouch && _this14.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
        _this14.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
      }
    };
    this.settings = settings;
    var dragging = this.dragging = new FeaturefulElementDragging(el);
    dragging.touchScrollAllowed = false;
    if (settings.itemSelector != null) {
      dragging.pointer.selector = settings.itemSelector;
    }
    if (settings.appendTo != null) {
      dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
    }
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }
  _createClass(ExternalDraggable, [{
    key: "destroy",
    value: function destroy() {
      this.dragging.destroy();
    }
  }]);
  return ExternalDraggable;
}();
/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/
var InferredElementDragging = /*#__PURE__*/function (_ElementDragging2) {
  _inherits(InferredElementDragging, _ElementDragging2);
  function InferredElementDragging(containerEl) {
    var _this15;
    _classCallCheck(this, InferredElementDragging);
    _this15 = _callSuper(this, InferredElementDragging, [containerEl]);
    _this15.shouldIgnoreMove = false;
    _this15.mirrorSelector = '';
    _this15.currentMirrorEl = null;
    _this15.handlePointerDown = function (ev) {
      _this15.emitter.trigger('pointerdown', ev);
      if (!_this15.shouldIgnoreMove) {
        // fire dragstart right away. does not support delay or min-distance
        _this15.emitter.trigger('dragstart', ev);
      }
    };
    _this15.handlePointerMove = function (ev) {
      if (!_this15.shouldIgnoreMove) {
        _this15.emitter.trigger('dragmove', ev);
      }
    };
    _this15.handlePointerUp = function (ev) {
      _this15.emitter.trigger('pointerup', ev);
      if (!_this15.shouldIgnoreMove) {
        // fire dragend right away. does not support a revert animation
        _this15.emitter.trigger('dragend', ev);
      }
    };
    var pointer = _this15.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', _this15.handlePointerDown);
    pointer.emitter.on('pointermove', _this15.handlePointerMove);
    pointer.emitter.on('pointerup', _this15.handlePointerUp);
    return _this15;
  }
  _createClass(InferredElementDragging, [{
    key: "destroy",
    value: function destroy() {
      this.pointer.destroy();
    }
  }, {
    key: "setIgnoreMove",
    value: function setIgnoreMove(bool) {
      this.shouldIgnoreMove = bool;
    }
  }, {
    key: "setMirrorIsVisible",
    value: function setMirrorIsVisible(bool) {
      if (bool) {
        // restore a previously hidden element.
        // use the reference in case the selector class has already been removed.
        if (this.currentMirrorEl) {
          this.currentMirrorEl.style.visibility = '';
          this.currentMirrorEl = null;
        }
      } else {
        var mirrorEl = this.mirrorSelector
        // TODO: somehow query FullCalendars WITHIN shadow-roots
        ? document.querySelector(this.mirrorSelector) : null;
        if (mirrorEl) {
          this.currentMirrorEl = mirrorEl;
          mirrorEl.style.visibility = 'hidden';
        }
      }
    }
  }]);
  return InferredElementDragging;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bH);
/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/
var ThirdPartyDraggable = /*#__PURE__*/function () {
  function ThirdPartyDraggable(containerOrSettings, settings) {
    _classCallCheck(this, ThirdPartyDraggable);
    var containerEl = document;
    if (
    // wish we could just test instanceof EventTarget, but doesn't work in IE11
    containerOrSettings === document || containerOrSettings instanceof Element) {
      containerEl = containerOrSettings;
      settings = settings || {};
    } else {
      settings = containerOrSettings || {};
    }
    var dragging = this.dragging = new InferredElementDragging(containerEl);
    if (typeof settings.itemSelector === 'string') {
      dragging.pointer.selector = settings.itemSelector;
    } else if (containerEl === document) {
      dragging.pointer.selector = '[data-event]';
    }
    if (typeof settings.mirrorSelector === 'string') {
      dragging.mirrorSelector = settings.mirrorSelector;
    }
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }
  _createClass(ThirdPartyDraggable, [{
    key: "destroy",
    value: function destroy() {
      this.dragging.destroy();
    }
  }]);
  return ThirdPartyDraggable;
}();
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
  name: '@fullcalendar/interaction',
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});


/***/ }),

/***/ "./node_modules/@fullcalendar/list/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/index.js */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal.js */ "./node_modules/@fullcalendar/list/internal.js");
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ "./node_modules/@fullcalendar/core/internal-common.js");




var OPTION_REFINERS = {
  listDayFormat: createFalsableFormatter,
  listDaySideFormat: createFalsableFormatter,
  noEventsClassNames: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsContent: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsDidMount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n,
  noEventsWillUnmount: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.n
  // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
  return input === false ? null : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(input);
}
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
  name: '@fullcalendar/list',
  optionRefiners: OPTION_REFINERS,
  views: {
    list: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_2__.ListView,
      buttonTextKey: 'list',
      listDayFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      } // like "January 1, 2016"
    },
    listDay: {
      type: 'list',
      duration: {
        days: 1
      },
      listDayFormat: {
        weekday: 'long'
      } // day-of-week is all we need. full date is probably in headerToolbar
    },
    listWeek: {
      type: 'list',
      duration: {
        weeks: 1
      },
      listDayFormat: {
        weekday: 'long'
      },
      listDaySideFormat: {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }
    },
    listMonth: {
      type: 'list',
      duration: {
        month: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    },
    listYear: {
      type: 'list',
      duration: {
        year: 1
      },
      listDaySideFormat: {
        weekday: 'long'
      } // day-of-week is nice-to-have
    }
  }
});


/***/ }),

/***/ "./node_modules/@fullcalendar/list/internal.js":
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/list/internal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListView: function() { return /* binding */ ListView; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ "./node_modules/@fullcalendar/core/internal-common.js");
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ "./node_modules/preact/dist/preact.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ListViewHeaderRow = /*#__PURE__*/function (_BaseComponent) {
  _inherits(ListViewHeaderRow, _BaseComponent);
  function ListViewHeaderRow() {
    var _this;
    _classCallCheck(this, ListViewHeaderRow);
    _this = _callSuper(this, ListViewHeaderRow, arguments);
    _this.state = {
      textId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
    return _this;
  }
  _createClass(ListViewHeaderRow, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
        theme = _this$context.theme,
        dateEnv = _this$context.dateEnv,
        options = _this$context.options,
        viewApi = _this$context.viewApi;
      var _this$props = this.props,
        cellId = _this$props.cellId,
        dayDate = _this$props.dayDate,
        todayRange = _this$props.todayRange;
      var textId = this.state.textId;
      var dayMeta = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a_)(dayDate, todayRange);
      // will ever be falsy?
      var text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
      // will ever be falsy? also, BAD NAME "alt"
      var sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
      var renderProps = Object.assign({
        date: dateEnv.toDate(dayDate),
        view: viewApi,
        textId: textId,
        text: text,
        sideText: sideText,
        navLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, dayDate),
        sideNavLinkAttrs: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(this.context, dayDate, 'day', false)
      }, dayMeta);
      // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "tr",
        elClasses: ['fc-list-day'].concat(_toConsumableArray((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aZ)(dayMeta, theme))),
        elAttrs: {
          'data-date': (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dayDate)
        },
        renderProps: renderProps,
        generatorName: "dayHeaderContent",
        customGenerator: options.dayHeaderContent,
        defaultGenerator: renderInnerContent,
        classNameGenerator: options.dayHeaderClassNames,
        didMount: options.dayHeaderDidMount,
        willUnmount: options.dayHeaderWillUnmount
      }, function (InnerContent) {
        return (
          // TODO: force-hide top border based on :first-child
          (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
            scope: "colgroup",
            colSpan: 3,
            id: cellId,
            "aria-labelledby": textId
          }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
            elTag: "div",
            elClasses: ['fc-list-day-cushion', theme.getClass('tableCellShaded')]
          }))
        );
      });
    }
  }]);
  return ListViewHeaderRow;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
function renderInnerContent(props) {
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, props.text && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    id: props.textId,
    className: "fc-list-day-text"
  }, props.navLinkAttrs), props.text), props.sideText && ( /* not keyboard tabbable */(0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({
    "aria-hidden": true,
    className: "fc-list-day-side-text"
  }, props.sideNavLinkAttrs), props.sideText)));
}
var DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: 'short'
});
var ListViewEventRow = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(ListViewEventRow, _BaseComponent2);
  function ListViewEventRow() {
    _classCallCheck(this, ListViewEventRow);
    return _callSuper(this, ListViewEventRow, arguments);
  }
  _createClass(ListViewEventRow, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var seg = props.seg,
        timeHeaderId = props.timeHeaderId,
        eventHeaderId = props.eventHeaderId,
        dateHeaderId = props.dateHeaderId;
      var timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cn, Object.assign({}, props, {
        elTag: "tr",
        elClasses: ['fc-list-event', seg.eventRange.def.url && 'fc-event-forced-url'],
        defaultGenerator: function defaultGenerator() {
          return renderEventInnerContent(seg, context);
        } /* weird */,
        seg: seg,
        timeText: "",
        disableDragging: true,
        disableResizing: true
      }), function (InnerContent, eventContentArg) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
          "aria-hidden": true,
          className: "fc-list-event-graphic"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
          className: "fc-list-event-dot",
          style: {
            borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor
          }
        })), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "td",
          elClasses: ['fc-list-event-title'],
          elAttrs: {
            headers: "".concat(eventHeaderId, " ").concat(dateHeaderId)
          }
        }));
      });
    }
  }]);
  return ListViewEventRow;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
function renderEventInnerContent(seg, context) {
  var interactiveAttrs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bU)(seg, context);
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title);
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
  var options = context.options;
  if (options.displayEventTime !== false) {
    var eventDef = seg.eventRange.def;
    var eventInstance = seg.eventRange.instance;
    var doAllDay = false;
    var timeText;
    if (eventDef.allDay) {
      doAllDay = true;
    } else if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.az)(seg.eventRange.range)) {
      // TODO: use (!isStart || !isEnd) instead?
      if (seg.isStart) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
      } else if (seg.isEnd) {
        timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
      } else {
        doAllDay = true;
      }
    } else {
      timeText = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bQ)(seg, timeFormat, context);
    }
    if (doAllDay) {
      var renderProps = {
        text: context.options.allDayText,
        view: context.viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "td",
        elClasses: ['fc-list-event-time'],
        elAttrs: {
          headers: "".concat(timeHeaderId, " ").concat(dateHeaderId)
        },
        renderProps: renderProps,
        generatorName: "allDayContent",
        customGenerator: options.allDayContent,
        defaultGenerator: renderAllDayInner,
        classNameGenerator: options.allDayClassNames,
        didMount: options.allDayDidMount,
        willUnmount: options.allDayWillUnmount
      });
    }
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
      className: "fc-list-event-time"
    }, timeText);
  }
  return null;
}
function renderAllDayInner(renderProps) {
  return renderProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /*#__PURE__*/function (_DateComponent) {
  _inherits(ListView, _DateComponent);
  function ListView() {
    var _this2;
    _classCallCheck(this, ListView);
    _this2 = _callSuper(this, ListView, arguments);
    _this2.computeDateVars = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(computeDateVars);
    _this2.eventStoreToSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_this2._eventStoreToSegs);
    _this2.state = {
      timeHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)(),
      eventHeaderId: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)(),
      dateHeaderIdRoot: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.a5)()
    };
    _this2.setRootEl = function (rootEl) {
      if (rootEl) {
        _this2.context.registerInteractiveComponent(_assertThisInitialized(_this2), {
          el: rootEl
        });
      } else {
        _this2.context.unregisterInteractiveComponent(_assertThisInitialized(_this2));
      }
    };
    return _this2;
  }
  _createClass(ListView, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var _this$computeDateVars = this.computeDateVars(props.dateProfile),
        dayDates = _this$computeDateVars.dayDates,
        dayRanges = _this$computeDateVars.dayRanges;
      var eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
        elRef: this.setRootEl,
        elClasses: ['fc-list', context.theme.getClass('table'), context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : ''],
        viewSpec: context.viewSpec
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cd, {
        liquid: !props.isHeightAuto,
        overflowX: props.isHeightAuto ? 'visible' : 'hidden',
        overflowY: props.isHeightAuto ? 'visible' : 'auto'
      }, eventSegs.length > 0 ? this.renderSegList(eventSegs, dayDates) : this.renderEmptyMessage()));
    }
  }, {
    key: "renderEmptyMessage",
    value: function renderEmptyMessage() {
      var _this$context2 = this.context,
        options = _this$context2.options,
        viewApi = _this$context2.viewApi;
      var renderProps = {
        text: options.noEventsText,
        view: viewApi
      };
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
        elTag: "div",
        elClasses: ['fc-list-empty'],
        renderProps: renderProps,
        generatorName: "noEventsContent",
        customGenerator: options.noEventsContent,
        defaultGenerator: renderNoEventsInner,
        classNameGenerator: options.noEventsClassNames,
        didMount: options.noEventsDidMount,
        willUnmount: options.noEventsWillUnmount
      }, function (InnerContent) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "div",
          elClasses: ['fc-list-empty-cushion']
        });
      });
    }
  }, {
    key: "renderSegList",
    value: function renderSegList(allSegs, dayDates) {
      var _this$context3 = this.context,
        theme = _this$context3.theme,
        options = _this$context3.options;
      var _this$state = this.state,
        timeHeaderId = _this$state.timeHeaderId,
        eventHeaderId = _this$state.eventHeaderId,
        dateHeaderIdRoot = _this$state.dateHeaderIdRoot;
      var segsByDay = groupSegsByDay(allSegs); // sparse array
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
        unit: "day"
      }, function (nowDate, todayRange) {
        var innerNodes = [];
        for (var dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
          var daySegs = segsByDay[dayIndex];
          if (daySegs) {
            // sparse array, so might be undefined
            var dayStr = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bv)(dayDates[dayIndex]);
            var dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
            // append a day header
            innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, {
              key: dayStr,
              cellId: dateHeaderId,
              dayDate: dayDates[dayIndex],
              todayRange: todayRange
            }));
            daySegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR)(daySegs, options.eventOrder);
            var _iterator = _createForOfIteratorHelper(daySegs),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var seg = _step.value;
                innerNodes.push((0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, Object.assign({
                  key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */,
                  seg: seg,
                  isDragging: false,
                  isResizing: false,
                  isDateSelecting: false,
                  isSelected: false,
                  timeHeaderId: timeHeaderId,
                  eventHeaderId: eventHeaderId,
                  dateHeaderId: dateHeaderId
                }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
          className: 'fc-list-table ' + theme.getClass('table')
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
          scope: "col",
          id: timeHeaderId
        }, options.timeHint), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
          scope: "col",
          "aria-hidden": true
        }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
          scope: "col",
          id: eventHeaderId
        }, options.eventHint))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes));
      });
    }
  }, {
    key: "_eventStoreToSegs",
    value: function _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
      return this.eventRangesToSegs((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.af)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
    }
  }, {
    key: "eventRangesToSegs",
    value: function eventRangesToSegs(eventRanges, dayRanges) {
      var segs = [];
      var _iterator2 = _createForOfIteratorHelper(eventRanges),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var eventRange = _step2.value;
          segs.push.apply(segs, _toConsumableArray(this.eventRangeToSegs(eventRange, dayRanges)));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return segs;
    }
  }, {
    key: "eventRangeToSegs",
    value: function eventRangeToSegs(eventRange, dayRanges) {
      var dateEnv = this.context.dateEnv;
      var nextDayThreshold = this.context.options.nextDayThreshold;
      var range = eventRange.range;
      var allDay = eventRange.def.allDay;
      var dayIndex;
      var segRange;
      var seg;
      var segs = [];
      for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
        segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[dayIndex]);
        if (segRange) {
          seg = {
            component: this,
            eventRange: eventRange,
            start: segRange.start,
            end: segRange.end,
            isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
            isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
            dayIndex: dayIndex
          };
          segs.push(seg);
          // detect when range won't go fully into the next day,
          // and mutate the latest seg to the be the end.
          if (!seg.isEnd && !allDay && dayIndex + 1 < dayRanges.length && range.end < dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
            seg.end = range.end;
            seg.isEnd = true;
            break;
          }
        }
      }
      return segs;
    }
  }]);
  return ListView;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be);
function renderNoEventsInner(renderProps) {
  return renderProps.text;
}
function computeDateVars(dateProfile) {
  var dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(dateProfile.renderRange.start);
  var viewEnd = dateProfile.renderRange.end;
  var dayDates = [];
  var dayRanges = [];
  while (dayStart < viewEnd) {
    dayDates.push(dayStart);
    dayRanges.push({
      start: dayStart,
      end: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1)
    });
    dayStart = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.t)(dayStart, 1);
  }
  return {
    dayDates: dayDates,
    dayRanges: dayRanges
  };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
  var segsByDay = []; // sparse array
  var i;
  var seg;
  for (i = 0; i < segs.length; i += 1) {
    seg = segs[i];
    (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
  }
  return segsByDay;
}
var css_248z = ":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);


/***/ }),

/***/ "./node_modules/@fullcalendar/timegrid/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/index.js */ "./node_modules/@fullcalendar/core/index.js");
/* harmony import */ var _internal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.js */ "./node_modules/@fullcalendar/timegrid/internal.js");





var OPTION_REFINERS = {
  allDaySlot: Boolean
};
var index = (0,_fullcalendar_core_index_js__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  name: '@fullcalendar/timegrid',
  initialView: 'timeGridWeek',
  optionRefiners: OPTION_REFINERS,
  views: {
    timeGrid: {
      component: _internal_js__WEBPACK_IMPORTED_MODULE_1__.DayTimeColsView,
      usesMinMaxTime: true,
      allDaySlot: true,
      slotDuration: '00:30:00',
      slotEventOverlap: true // a bad name. confused with overlap/constraint system
    },
    timeGridDay: {
      type: 'timeGrid',
      duration: {
        days: 1
      }
    },
    timeGridWeek: {
      type: 'timeGrid',
      duration: {
        weeks: 1
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/@fullcalendar/timegrid/internal.js":
/*!*********************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/internal.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayTimeCols: function() { return /* binding */ DayTimeCols; },
/* harmony export */   DayTimeColsSlicer: function() { return /* binding */ DayTimeColsSlicer; },
/* harmony export */   DayTimeColsView: function() { return /* binding */ DayTimeColsView; },
/* harmony export */   TimeCols: function() { return /* binding */ TimeCols; },
/* harmony export */   TimeColsSlatsCoords: function() { return /* binding */ TimeColsSlatsCoords; },
/* harmony export */   TimeColsView: function() { return /* binding */ TimeColsView; },
/* harmony export */   buildDayRanges: function() { return /* binding */ buildDayRanges; },
/* harmony export */   buildSlatMetas: function() { return /* binding */ buildSlatMetas; },
/* harmony export */   buildTimeColsModel: function() { return /* binding */ buildTimeColsModel; }
/* harmony export */ });
/* harmony import */ var _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/internal.js */ "./node_modules/@fullcalendar/core/internal-common.js");
/* harmony import */ var _fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core/preact.js */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid/internal.js */ "./node_modules/@fullcalendar/daygrid/internal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AllDaySplitter = /*#__PURE__*/function (_Splitter) {
  _inherits(AllDaySplitter, _Splitter);
  function AllDaySplitter() {
    _classCallCheck(this, AllDaySplitter);
    return _callSuper(this, AllDaySplitter, arguments);
  }
  _createClass(AllDaySplitter, [{
    key: "getKeyInfo",
    value: function getKeyInfo() {
      return {
        allDay: {},
        timed: {}
      };
    }
  }, {
    key: "getKeysForDateSpan",
    value: function getKeysForDateSpan(dateSpan) {
      if (dateSpan.allDay) {
        return ['allDay'];
      }
      return ['timed'];
    }
  }, {
    key: "getKeysForEventDef",
    value: function getKeysForEventDef(eventDef) {
      if (!eventDef.allDay) {
        return ['timed'];
      }
      if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bP)(eventDef)) {
        return ['timed', 'allDay'];
      }
      return ['allDay'];
    }
  }]);
  return AllDaySplitter;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.aY);
var DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  omitZeroMinute: true,
  meridiem: 'short'
});
function TimeColsAxisCell(props) {
  var classNames = ['fc-timegrid-slot', 'fc-timegrid-slot-label', props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor'];
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.V.Consumer, null, function (context) {
    if (!props.isLabeled) {
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
        className: classNames.join(' '),
        "data-time": props.isoTimeStr
      });
    }
    var dateEnv = context.dateEnv,
      options = context.options,
      viewApi = context.viewApi;
    var labelFormat =
    // TODO: fully pre-parse
    options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT : Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat[0]) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)(options.slotLabelFormat);
    var renderProps = {
      level: 0,
      time: props.time,
      date: dateEnv.toDate(props.date),
      view: viewApi,
      text: dateEnv.format(props.date, labelFormat)
    };
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
      elTag: "td",
      elClasses: classNames,
      elAttrs: {
        'data-time': props.isoTimeStr
      },
      renderProps: renderProps,
      generatorName: "slotLabelContent",
      customGenerator: options.slotLabelContent,
      defaultGenerator: renderInnerContent,
      classNameGenerator: options.slotLabelClassNames,
      didMount: options.slotLabelDidMount,
      willUnmount: options.slotLabelWillUnmount
    }, function (InnerContent) {
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
        elTag: "div",
        elClasses: ['fc-timegrid-slot-label-cushion', 'fc-scrollgrid-shrink-cushion']
      }));
    });
  });
}
function renderInnerContent(props) {
  return props.text;
}
var TimeBodyAxis = /*#__PURE__*/function (_BaseComponent) {
  _inherits(TimeBodyAxis, _BaseComponent);
  function TimeBodyAxis() {
    _classCallCheck(this, TimeBodyAxis);
    return _callSuper(this, TimeBodyAxis, arguments);
  }
  _createClass(TimeBodyAxis, [{
    key: "render",
    value: function render() {
      return this.props.slatMetas.map(function (slatMeta) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          key: slatMeta.key
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta)));
      });
    }
  }]);
  return TimeBodyAxis;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  week: 'short'
});
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
var TimeColsView = /*#__PURE__*/function (_DateComponent) {
  _inherits(TimeColsView, _DateComponent);
  function TimeColsView() {
    var _this;
    _classCallCheck(this, TimeColsView);
    _this = _callSuper(this, TimeColsView, arguments);
    _this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
    _this.headerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this.scrollerElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this.state = {
      slatCoords: null
    };
    _this.handleScrollTopRequest = function (scrollTop) {
      var scrollerEl = _this.scrollerElRef.current;
      if (scrollerEl) {
        // TODO: not sure how this could ever be null. weirdness with the reducer
        scrollerEl.scrollTop = scrollTop;
      }
    };
    /* Header Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    _this.renderHeadAxis = function (rowKey) {
      var frameHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var options = _this.context.options;
      var dateProfile = _this.props.dateProfile;
      var range = dateProfile.renderRange;
      var dayCnt = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bl)(range.start, range.end);
      // only do in day views (to avoid doing in week views that dont need it)
      var navLinkAttrs = dayCnt === 1 ? (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b0)(_this.context, range.start, 'week') : {};
      if (options.weekNumbers && rowKey === 'day') {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cq, {
          elTag: "th",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          date: range.start,
          defaultFormat: DEFAULT_WEEK_NUM_FORMAT
        }, function (InnerContent) {
          return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
            className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', 'fc-timegrid-axis-frame-liquid'].join(' '),
            style: {
              height: frameHeight
            }
          }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
            elTag: "a",
            elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner'],
            elAttrs: navLinkAttrs
          }));
        });
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
        "aria-hidden": true,
        className: "fc-timegrid-axis"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-axis-frame",
        style: {
          height: frameHeight
        }
      }));
    };
    /* Table Component Render Methods
    ------------------------------------------------------------------------------------------------------------------*/
    // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
    // but DayGrid still needs to have classNames on inner elements in order to measure.
    _this.renderTableRowAxis = function (rowHeight) {
      var _this$context = _this.context,
        options = _this$context.options,
        viewApi = _this$context.viewApi;
      var renderProps = {
        text: options.allDayText,
        view: viewApi
      };
      return (
        // TODO: make reusable hook. used in list view too
        (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
          elTag: "td",
          elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
          elAttrs: {
            'aria-hidden': true
          },
          renderProps: renderProps,
          generatorName: "allDayContent",
          customGenerator: options.allDayContent,
          defaultGenerator: renderAllDayInner,
          classNameGenerator: options.allDayClassNames,
          didMount: options.allDayDidMount,
          willUnmount: options.allDayWillUnmount
        }, function (InnerContent) {
          return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
            className: ['fc-timegrid-axis-frame', 'fc-scrollgrid-shrink-frame', rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''].join(' '),
            style: {
              height: rowHeight
            }
          }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
            elTag: "span",
            elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner']
          }));
        })
      );
    };
    _this.handleSlatCoords = function (slatCoords) {
      _this.setState({
        slatCoords: slatCoords
      });
    };
    return _this;
  }
  // rendering
  // ----------------------------------------------------------------------------------------------------
  _createClass(TimeColsView, [{
    key: "renderSimpleLayout",
    value: function renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
      var context = this.context,
        props = this.props;
      var sections = [];
      var stickyHeaderDates = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
      if (headerRowContent) {
        sections.push({
          type: 'header',
          key: 'header',
          isSticky: stickyHeaderDates,
          chunk: {
            elRef: this.headerElRef,
            tableClassName: 'fc-col-header',
            rowContent: headerRowContent
          }
        });
      }
      if (allDayContent) {
        sections.push({
          type: 'body',
          key: 'all-day',
          chunk: {
            content: allDayContent
          }
        });
        sections.push({
          type: 'body',
          key: 'all-day-divider',
          outerContent:
          // TODO: rename to cellContent so don't need to define <tr>?
          (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
            className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
          }))
        });
      }
      sections.push({
        type: 'body',
        key: 'body',
        liquid: true,
        expandRows: Boolean(context.options.expandRows),
        chunk: {
          scrollerElRef: this.scrollerElRef,
          content: timeContent
        }
      });
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
        elRef: this.rootElRef,
        elClasses: ['fc-timegrid'],
        viewSpec: context.viewSpec
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.b$, {
        liquid: !props.isHeightAuto && !props.forPrint,
        collapsibleWidth: props.forPrint,
        cols: [{
          width: 'shrink'
        }],
        sections: sections
      }));
    }
  }, {
    key: "renderHScrollLayout",
    value: function renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
      var _this2 = this;
      var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
      if (!ScrollGrid) {
        throw new Error('No ScrollGrid implementation');
      }
      var context = this.context,
        props = this.props;
      var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cc)(context.options);
      var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cb)(context.options);
      var sections = [];
      if (headerRowContent) {
        sections.push({
          type: 'header',
          key: 'header',
          isSticky: stickyHeaderDates,
          syncRowHeights: true,
          chunks: [{
            key: 'axis',
            rowContent: function rowContent(arg) {
              return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
                role: "presentation"
              }, _this2.renderHeadAxis('day', arg.rowSyncHeights[0]));
            }
          }, {
            key: 'cols',
            elRef: this.headerElRef,
            tableClassName: 'fc-col-header',
            rowContent: headerRowContent
          }]
        });
      }
      if (allDayContent) {
        sections.push({
          type: 'body',
          key: 'all-day',
          syncRowHeights: true,
          chunks: [{
            key: 'axis',
            rowContent: function rowContent(contentArg) {
              return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
                role: "presentation"
              }, _this2.renderTableRowAxis(contentArg.rowSyncHeights[0]));
            }
          }, {
            key: 'cols',
            content: allDayContent
          }]
        });
        sections.push({
          key: 'all-day-divider',
          type: 'body',
          outerContent:
          // TODO: rename to cellContent so don't need to define <tr>?
          (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
            colSpan: 2,
            className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded')
          }))
        });
      }
      var isNowIndicator = context.options.nowIndicator;
      sections.push({
        type: 'body',
        key: 'body',
        liquid: true,
        expandRows: Boolean(context.options.expandRows),
        chunks: [{
          key: 'axis',
          content: function content(arg) {
            return (
              // TODO: make this now-indicator arrow more DRY with TimeColsContent
              (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
                className: "fc-timegrid-axis-chunk"
              }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
                "aria-hidden": true,
                style: {
                  height: arg.expandRows ? arg.clientHeight : ''
                }
              }, arg.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, {
                slatMetas: slatMetas
              }))), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
                className: "fc-timegrid-now-indicator-container"
              }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
                unit: isNowIndicator ? 'minute' : 'day' /* hacky */
              }, function (nowDate) {
                var nowIndicatorTop = isNowIndicator && slatCoords && slatCoords.safeComputeTop(nowDate); // might return void
                if (typeof nowIndicatorTop === 'number') {
                  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, {
                    elClasses: ['fc-timegrid-now-indicator-arrow'],
                    elStyle: {
                      top: nowIndicatorTop
                    },
                    isAxis: true,
                    date: nowDate
                  });
                }
                return null;
              })))
            );
          }
        }, {
          key: 'cols',
          scrollerElRef: this.scrollerElRef,
          content: timeContent
        }]
      });
      if (stickyFooterScrollbar) {
        sections.push({
          key: 'footer',
          type: 'footer',
          isSticky: true,
          chunks: [{
            key: 'axis',
            content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
          }, {
            key: 'cols',
            content: _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ca
          }]
        });
      }
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ct, {
        elRef: this.rootElRef,
        elClasses: ['fc-timegrid'],
        viewSpec: context.viewSpec
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, {
        liquid: !props.isHeightAuto && !props.forPrint,
        forPrint: props.forPrint,
        collapsibleWidth: false,
        colGroups: [{
          width: 'shrink',
          cols: [{
            width: 'shrink'
          }]
        }, {
          cols: [{
            span: colCnt,
            minWidth: dayMinWidth
          }]
        }],
        sections: sections
      }));
    }
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
  }, {
    key: "getAllDayMaxEventProps",
    value: function getAllDayMaxEventProps() {
      var _this$context$options = this.context.options,
        dayMaxEvents = _this$context$options.dayMaxEvents,
        dayMaxEventRows = _this$context$options.dayMaxEventRows;
      if (dayMaxEvents === true || dayMaxEventRows === true) {
        // is auto?
        dayMaxEvents = undefined;
        dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
      }
      return {
        dayMaxEvents: dayMaxEvents,
        dayMaxEventRows: dayMaxEventRows
      };
    }
  }]);
  return TimeColsView;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be);
function renderAllDayInner(renderProps) {
  return renderProps.text;
}
var TimeColsSlatsCoords = /*#__PURE__*/function () {
  function TimeColsSlatsCoords(positions, dateProfile, slotDuration) {
    _classCallCheck(this, TimeColsSlatsCoords);
    this.positions = positions;
    this.dateProfile = dateProfile;
    this.slotDuration = slotDuration;
  }
  _createClass(TimeColsSlatsCoords, [{
    key: "safeComputeTop",
    value: function safeComputeTop(date) {
      var dateProfile = this.dateProfile;
      if ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.H)(dateProfile.currentRange, date)) {
        var startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(date);
        var timeMs = date.valueOf() - startOfDayDate.valueOf();
        if (timeMs >= (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMinTime) && timeMs < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMaxTime)) {
          return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(timeMs));
        }
      }
      return null;
    }
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  }, {
    key: "computeDateTop",
    value: function computeDateTop(when, startOfDayDate) {
      if (!startOfDayDate) {
        startOfDayDate = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.q)(when);
      }
      return this.computeTimeTop((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(when.valueOf() - startOfDayDate.valueOf()));
    }
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
    // Eventually allow computation with arbirary slat dates.
  }, {
    key: "computeTimeTop",
    value: function computeTimeTop(duration) {
      var positions = this.positions,
        dateProfile = this.dateProfile;
      var len = positions.els.length;
      // floating-point value of # of slots covered
      var slatCoverage = (duration.milliseconds - (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(dateProfile.slotMinTime)) / (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(this.slotDuration);
      var slatIndex;
      var slatRemainder;
      // compute a floating-point number for how many slats should be progressed through.
      // from 0 to number of slats (inclusive)
      // constrained because slotMinTime/slotMaxTime might be customized.
      slatCoverage = Math.max(0, slatCoverage);
      slatCoverage = Math.min(len, slatCoverage);
      // an integer index of the furthest whole slat
      // from 0 to number slats (*exclusive*, so len-1)
      slatIndex = Math.floor(slatCoverage);
      slatIndex = Math.min(slatIndex, len - 1);
      // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
      // could be 1.0 if slatCoverage is covering *all* the slots
      slatRemainder = slatCoverage - slatIndex;
      return positions.tops[slatIndex] + positions.getHeight(slatIndex) * slatRemainder;
    }
  }]);
  return TimeColsSlatsCoords;
}();
var TimeColsSlatsBody = /*#__PURE__*/function (_BaseComponent2) {
  _inherits(TimeColsSlatsBody, _BaseComponent2);
  function TimeColsSlatsBody() {
    _classCallCheck(this, TimeColsSlatsBody);
    return _callSuper(this, TimeColsSlatsBody, arguments);
  }
  _createClass(TimeColsSlatsBody, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      var options = context.options;
      var slatElRefs = props.slatElRefs;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map(function (slatMeta, i) {
        var renderProps = {
          time: slatMeta.time,
          date: context.dateEnv.toDate(slatMeta.date),
          view: context.viewApi
        };
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
          key: slatMeta.key,
          ref: slatElRefs.createRef(slatMeta.key)
        }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, Object.assign({}, slatMeta)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.C, {
          elTag: "td",
          elClasses: ['fc-timegrid-slot', 'fc-timegrid-slot-lane', !slatMeta.isLabeled && 'fc-timegrid-slot-minor'],
          elAttrs: {
            'data-time': slatMeta.isoTimeStr
          },
          renderProps: renderProps,
          generatorName: "slotLaneContent",
          customGenerator: options.slotLaneContent,
          classNameGenerator: options.slotLaneClassNames,
          didMount: options.slotLaneDidMount,
          willUnmount: options.slotLaneWillUnmount
        }));
      }));
    }
  }]);
  return TimeColsSlatsBody;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
var TimeColsSlats = /*#__PURE__*/function (_BaseComponent3) {
  _inherits(TimeColsSlats, _BaseComponent3);
  function TimeColsSlats() {
    var _this3;
    _classCallCheck(this, TimeColsSlats);
    _this3 = _callSuper(this, TimeColsSlats, arguments);
    _this3.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this3.slatElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
    return _this3;
  }
  _createClass(TimeColsSlats, [{
    key: "render",
    value: function render() {
      var props = this.props,
        context = this.context;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        ref: this.rootElRef,
        className: "fc-timegrid-slots"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
        "aria-hidden": true,
        className: context.theme.getClass('table'),
        style: {
          minWidth: props.tableMinWidth,
          width: props.clientWidth,
          height: props.minHeight
        }
      }, props.tableColGroupNode /* relies on there only being a single <col> for the axis */, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, {
        slatElRefs: this.slatElRefs,
        axis: props.axis,
        slatMetas: props.slatMetas
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSizing();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateSizing();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onCoords) {
        this.props.onCoords(null);
      }
    }
  }, {
    key: "updateSizing",
    value: function updateSizing() {
      var context = this.context,
        props = this.props;
      if (props.onCoords && props.clientWidth !== null // means sizing has stabilized
      ) {
        var rootEl = this.rootElRef.current;
        if (rootEl.offsetHeight) {
          // not hidden by css
          props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
        }
      }
    }
  }]);
  return TimeColsSlats;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
function collectSlatEls(elMap, slatMetas) {
  return slatMetas.map(function (slatMeta) {
    return elMap[slatMeta.key];
  });
}
function splitSegsByCol(segs, colCnt) {
  var segsByCol = [];
  var i;
  for (i = 0; i < colCnt; i += 1) {
    segsByCol.push([]);
  }
  if (segs) {
    for (i = 0; i < segs.length; i += 1) {
      segsByCol[segs[i].col].push(segs[i]);
    }
  }
  return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
  var byRow = [];
  if (!ui) {
    for (var i = 0; i < colCnt; i += 1) {
      byRow[i] = null;
    }
  } else {
    for (var _i = 0; _i < colCnt; _i += 1) {
      byRow[_i] = {
        affectedInstances: ui.affectedInstances,
        isEvent: ui.isEvent,
        segs: []
      };
    }
    var _iterator = _createForOfIteratorHelper(ui.segs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var seg = _step.value;
        byRow[seg.col].segs.push(seg);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return byRow;
}
var TimeColMoreLink = /*#__PURE__*/function (_BaseComponent4) {
  _inherits(TimeColMoreLink, _BaseComponent4);
  function TimeColMoreLink() {
    _classCallCheck(this, TimeColMoreLink);
    return _callSuper(this, TimeColMoreLink, arguments);
  }
  _createClass(TimeColMoreLink, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cr, {
        elClasses: ['fc-timegrid-more-link'],
        elStyle: {
          top: props.top,
          bottom: props.bottom
        },
        allDayDate: null,
        moreCnt: props.hiddenSegs.length,
        allSegs: props.hiddenSegs,
        hiddenSegs: props.hiddenSegs,
        extraDateSpan: props.extraDateSpan,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        popoverContent: function popoverContent() {
          return renderPlainFgSegs(props.hiddenSegs, props);
        },
        defaultGenerator: renderMoreLinkInner,
        forceTimed: true
      }, function (InnerContent) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "div",
          elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky']
        });
      });
    }
  }]);
  return TimeColMoreLink;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
function renderMoreLinkInner(props) {
  return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
  var hierarchy = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bA();
  if (strictOrder != null) {
    hierarchy.strictOrder = strictOrder;
  }
  if (maxStackCnt != null) {
    hierarchy.maxStackCnt = maxStackCnt;
  }
  var hiddenEntries = hierarchy.addSegs(segInputs);
  var hiddenGroups = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bE)(hiddenEntries);
  var web = buildWeb(hierarchy);
  web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
  var segRects = webToRects(web);
  return {
    segRects: segRects,
    hiddenGroups: hiddenGroups
  };
}
function buildWeb(hierarchy) {
  var entriesByLevel = hierarchy.entriesByLevel;
  var buildNode = cacheable(function (level, lateral) {
    return level + ':' + lateral;
  }, function (level, lateral) {
    var siblingRange = findNextLevelSegs(hierarchy, level, lateral);
    var nextLevelRes = buildNodes(siblingRange, buildNode);
    var entry = entriesByLevel[level][lateral];
    return [Object.assign(Object.assign({}, entry), {
      nextLevelNodes: nextLevelRes[0]
    }), entry.thickness + nextLevelRes[1] // the pressure builds
    ];
  });
  return buildNodes(entriesByLevel.length ? {
    level: 0,
    lateralStart: 0,
    lateralEnd: entriesByLevel[0].length
  } : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
  if (!siblingRange) {
    return [[], 0];
  }
  var level = siblingRange.level,
    lateralStart = siblingRange.lateralStart,
    lateralEnd = siblingRange.lateralEnd;
  var lateral = lateralStart;
  var pairs = [];
  while (lateral < lateralEnd) {
    pairs.push(buildNode(level, lateral));
    lateral += 1;
  }
  pairs.sort(cmpDescPressures);
  return [pairs.map(extractNode), pairs[0][1] // first item's pressure
  ];
}
function cmpDescPressures(a, b) {
  return b[1] - a[1];
}
function extractNode(a) {
  return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
  var levelCoords = hierarchy.levelCoords,
    entriesByLevel = hierarchy.entriesByLevel;
  var subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
  var afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
  var levelCnt = levelCoords.length;
  var level = subjectLevel;
  // skip past levels that are too high up
  for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1); // do nothing
  for (; level < levelCnt; level += 1) {
    var entries = entriesByLevel[level];
    var entry = void 0;
    var searchIndex = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bD)(entries, subjectEntry.span.start, _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bC);
    var lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
    var lateralEnd = lateralStart;
    while (
    // loop through entries that horizontally intersect
    (entry = entries[lateralEnd]) &&
    // but not past the whole seg list
    entry.span.start < subjectEntry.span.end) {
      lateralEnd += 1;
    }
    if (lateralStart < lateralEnd) {
      return {
        level: level,
        lateralStart: lateralStart,
        lateralEnd: lateralEnd
      };
    }
  }
  return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
  var stretchNode = cacheable(function (node, startCoord, prevThickness) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(node);
  }, function (node, startCoord, prevThickness) {
    var nextLevelNodes = node.nextLevelNodes,
      thickness = node.thickness;
    var allThickness = thickness + prevThickness;
    var thicknessFraction = thickness / allThickness;
    var endCoord;
    var newChildren = [];
    if (!nextLevelNodes.length) {
      endCoord = totalThickness;
    } else {
      var _iterator2 = _createForOfIteratorHelper(nextLevelNodes),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var childNode = _step2.value;
          if (endCoord === undefined) {
            var res = stretchNode(childNode, startCoord, allThickness);
            endCoord = res[0];
            newChildren.push(res[1]);
          } else {
            var _res = stretchNode(childNode, endCoord, 0);
            newChildren.push(_res[1]);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    var newThickness = (endCoord - startCoord) * thicknessFraction;
    return [endCoord - newThickness, Object.assign(Object.assign({}, node), {
      thickness: newThickness,
      nextLevelNodes: newChildren
    })];
  });
  return topLevelNodes.map(function (node) {
    return stretchNode(node, 0, 0)[1];
  });
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
  var rects = [];
  var processNode = cacheable(function (node, levelCoord, stackDepth) {
    return (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bB)(node);
  }, function (node, levelCoord, stackDepth) {
    var rect = Object.assign(Object.assign({}, node), {
      levelCoord: levelCoord,
      stackDepth: stackDepth,
      stackForward: 0
    });
    rects.push(rect);
    return rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1;
  });
  function processNodes(nodes, levelCoord, stackDepth) {
    var stackForward = 0;
    var _iterator3 = _createForOfIteratorHelper(nodes),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var node = _step3.value;
        stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return stackForward;
  }
  processNodes(topLevelNodes, 0, 0);
  return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
  var cache = {};
  return function () {
    var key = keyFunc.apply(void 0, arguments);
    return key in cache ? cache[key] : cache[key] = workFunc.apply(void 0, arguments);
  };
}
function computeSegVCoords(segs, colDate) {
  var slatCoords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var eventMinHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var vcoords = [];
  if (slatCoords) {
    for (var i = 0; i < segs.length; i += 1) {
      var seg = segs[i];
      var spanStart = slatCoords.computeDateTop(seg.start, colDate);
      var spanEnd = Math.max(spanStart + (eventMinHeight || 0),
      // :(
      slatCoords.computeDateTop(seg.end, colDate));
      vcoords.push({
        start: Math.round(spanStart),
        end: Math.round(spanEnd) //
      });
    }
  }
  return vcoords;
}
function computeFgSegPlacements(segs, segVCoords,
// might not have for every seg
eventOrderStrict, eventMaxStack) {
  var segInputs = [];
  var dumbSegs = []; // segs without coords
  for (var i = 0; i < segs.length; i += 1) {
    var vcoords = segVCoords[i];
    if (vcoords) {
      segInputs.push({
        index: i,
        thickness: 1,
        span: vcoords
      });
    } else {
      dumbSegs.push(segs[i]);
    }
  }
  var _buildPositioning = buildPositioning(segInputs, eventOrderStrict, eventMaxStack),
    segRects = _buildPositioning.segRects,
    hiddenGroups = _buildPositioning.hiddenGroups;
  var segPlacements = [];
  var _iterator4 = _createForOfIteratorHelper(segRects),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var segRect = _step4.value;
      segPlacements.push({
        seg: segs[segRect.index],
        rect: segRect
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  for (var _i2 = 0, _dumbSegs = dumbSegs; _i2 < _dumbSegs.length; _i2++) {
    var dumbSeg = _dumbSegs[_i2];
    segPlacements.push({
      seg: dumbSeg,
      rect: null
    });
  }
  return {
    segPlacements: segPlacements,
    hiddenGroups: hiddenGroups
  };
}
var DEFAULT_TIME_FORMAT = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.x)({
  hour: 'numeric',
  minute: '2-digit',
  meridiem: false
});
var TimeColEvent = /*#__PURE__*/function (_BaseComponent5) {
  _inherits(TimeColEvent, _BaseComponent5);
  function TimeColEvent() {
    _classCallCheck(this, TimeColEvent);
    return _callSuper(this, TimeColEvent, arguments);
  }
  _createClass(TimeColEvent, [{
    key: "render",
    value: function render() {
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cj, Object.assign({}, this.props, {
        elClasses: ['fc-timegrid-event', 'fc-v-event', this.props.isShort && 'fc-timegrid-event-short'],
        defaultTimeFormat: DEFAULT_TIME_FORMAT
      }));
    }
  }]);
  return TimeColEvent;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
var TimeCol = /*#__PURE__*/function (_BaseComponent6) {
  _inherits(TimeCol, _BaseComponent6);
  function TimeCol() {
    var _this4;
    _classCallCheck(this, TimeCol);
    _this4 = _callSuper(this, TimeCol, arguments);
    _this4.sortEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bR);
    return _this4;
  }
  // TODO: memoize event-placement?
  _createClass(TimeCol, [{
    key: "render",
    value: function render() {
      var _this5 = this;
      var props = this.props,
        context = this.context;
      var options = context.options;
      var isSelectMirror = options.selectMirror;
      var mirrorSegs =
      // yuck
      props.eventDrag && props.eventDrag.segs || props.eventResize && props.eventResize.segs || isSelectMirror && props.dateSelectionSegs || [];
      var interactionAffectedInstances =
      // TODO: messy way to compute this
      props.eventDrag && props.eventDrag.affectedInstances || props.eventResize && props.eventResize.affectedInstances || {};
      var sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cl, {
        elTag: "td",
        elRef: props.elRef,
        elClasses: ['fc-timegrid-col'].concat(_toConsumableArray(props.extraClassNames || [])),
        elAttrs: Object.assign({
          role: 'gridcell'
        }, props.extraDataAttrs),
        date: props.date,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        extraRenderProps: props.extraRenderProps
      }, function (InnerContent) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-col-frame"
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-col-bg"
        }, _this5.renderFillSegs(props.businessHourSegs, 'non-business'), _this5.renderFillSegs(props.bgEventSegs, 'bg-event'), _this5.renderFillSegs(props.dateSelectionSegs, 'highlight')), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-col-events"
        }, _this5.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-col-events"
        }, _this5.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), 'mirror')), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-timegrid-now-indicator-container"
        }, _this5.renderNowIndicator(props.nowIndicatorSegs)), (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cm)(options) && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(InnerContent, {
          elTag: "div",
          elClasses: ['fc-timegrid-col-misc']
        }));
      });
    }
  }, {
    key: "renderFgSegs",
    value: function renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
      var props = this.props;
      if (props.forPrint) {
        return renderPlainFgSegs(sortedFgSegs, props);
      }
      return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
    }
  }, {
    key: "renderPositionedFgSegs",
    value: function renderPositionedFgSegs(segs,
    // if not mirror, needs to be sorted
    segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
      var _this6 = this;
      var _this$context$options2 = this.context.options,
        eventMaxStack = _this$context$options2.eventMaxStack,
        eventShortHeight = _this$context$options2.eventShortHeight,
        eventOrderStrict = _this$context$options2.eventOrderStrict,
        eventMinHeight = _this$context$options2.eventMinHeight;
      var _this$props = this.props,
        date = _this$props.date,
        slatCoords = _this$props.slatCoords,
        eventSelection = _this$props.eventSelection,
        todayRange = _this$props.todayRange,
        nowDate = _this$props.nowDate;
      var isMirror = isDragging || isResizing || isDateSelecting;
      var segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
      var _computeFgSegPlacemen = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack),
        segPlacements = _computeFgSegPlacemen.segPlacements,
        hiddenGroups = _computeFgSegPlacemen.hiddenGroups;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, this.renderHiddenGroups(hiddenGroups, segs), segPlacements.map(function (segPlacement) {
        var seg = segPlacement.seg,
          rect = segPlacement.rect;
        var instanceId = seg.eventRange.instance.instanceId;
        var isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
        var vStyle = computeSegVStyle(rect && rect.span);
        var hStyle = !isMirror && rect ? _this6.computeSegHStyle(rect) : {
          left: 0,
          right: 0
        };
        var isInset = Boolean(rect) && rect.stackForward > 0;
        var isShort = Boolean(rect) && rect.span.end - rect.span.start < eventShortHeight; // look at other places for this problem
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: 'fc-timegrid-event-harness' + (isInset ? ' fc-timegrid-event-harness-inset' : ''),
          key: forcedKey || instanceId,
          style: Object.assign(Object.assign({
            visibility: isVisible ? '' : 'hidden'
          }, vStyle), hStyle)
        }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
          seg: seg,
          isDragging: isDragging,
          isResizing: isResizing,
          isDateSelecting: isDateSelecting,
          isSelected: instanceId === eventSelection,
          isShort: isShort
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
      }));
    }
    // will already have eventMinHeight applied because segInputs already had it
  }, {
    key: "renderHiddenGroups",
    value: function renderHiddenGroups(hiddenGroups, segs) {
      var _this$props2 = this.props,
        extraDateSpan = _this$props2.extraDateSpan,
        dateProfile = _this$props2.dateProfile,
        todayRange = _this$props2.todayRange,
        nowDate = _this$props2.nowDate,
        eventSelection = _this$props2.eventSelection,
        eventDrag = _this$props2.eventDrag,
        eventResize = _this$props2.eventResize;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map(function (hiddenGroup) {
        var positionCss = computeSegVStyle(hiddenGroup.span);
        var hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, {
          key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bw)((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cs)(hiddenSegs)),
          hiddenSegs: hiddenSegs,
          top: positionCss.top,
          bottom: positionCss.bottom,
          extraDateSpan: extraDateSpan,
          dateProfile: dateProfile,
          todayRange: todayRange,
          nowDate: nowDate,
          eventSelection: eventSelection,
          eventDrag: eventDrag,
          eventResize: eventResize
        });
      }));
    }
  }, {
    key: "renderFillSegs",
    value: function renderFillSegs(segs, fillType) {
      var props = this.props,
        context = this.context;
      var segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
      var children = segVCoords.map(function (vcoords, i) {
        var seg = segs[i];
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          key: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bT)(seg.eventRange),
          className: "fc-timegrid-bg-harness",
          style: computeSegVStyle(vcoords)
        }, fillType === 'bg-event' ? (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cp, Object.assign({
          seg: seg
        }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, props.todayRange, props.nowDate))) : (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.co)(fillType));
      });
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
    }
  }, {
    key: "renderNowIndicator",
    value: function renderNowIndicator(segs) {
      var _this$props3 = this.props,
        slatCoords = _this$props3.slatCoords,
        date = _this$props3.date;
      if (!slatCoords) {
        return null;
      }
      return segs.map(function (seg, i) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck
        // key doesn't matter. will only ever be one
        , {
          // key doesn't matter. will only ever be one
          key: i,
          elClasses: ['fc-timegrid-now-indicator-line'],
          elStyle: {
            top: slatCoords.computeDateTop(seg.start, date)
          },
          isAxis: false,
          date: date
        });
      });
    }
  }, {
    key: "computeSegHStyle",
    value: function computeSegHStyle(segHCoords) {
      var _this$context2 = this.context,
        isRtl = _this$context2.isRtl,
        options = _this$context2.options;
      var shouldOverlap = options.slotEventOverlap;
      var nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
      var farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
      var left; // amount of space from left edge, a fraction of the total width
      var right; // amount of space from right edge, a fraction of the total width
      if (shouldOverlap) {
        // double the width, but don't go beyond the maximum forward coordinate (1.0)
        farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
      }
      if (isRtl) {
        left = 1 - farCoord;
        right = nearCoord;
      } else {
        left = nearCoord;
        right = 1 - farCoord;
      }
      var props = {
        zIndex: segHCoords.stackDepth + 1,
        left: left * 100 + '%',
        right: right * 100 + '%'
      };
      if (shouldOverlap && !segHCoords.stackForward) {
        // add padding to the edge so that forward stacked events don't cover the resizer's icon
        props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
      }
      return props;
    }
  }]);
  return TimeCol;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
function renderPlainFgSegs(sortedFgSegs, _ref) {
  var todayRange = _ref.todayRange,
    nowDate = _ref.nowDate,
    eventSelection = _ref.eventSelection,
    eventDrag = _ref.eventDrag,
    eventResize = _ref.eventResize;
  var hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) || (eventResize ? eventResize.affectedInstances : null) || {};
  return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map(function (seg) {
    var instanceId = seg.eventRange.instance.instanceId;
    return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      key: instanceId,
      style: {
        visibility: hiddenInstances[instanceId] ? 'hidden' : ''
      }
    }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, Object.assign({
      seg: seg,
      isDragging: false,
      isResizing: false,
      isDateSelecting: false,
      isSelected: instanceId === eventSelection,
      isShort: false
    }, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bS)(seg, todayRange, nowDate))));
  }));
}
function computeSegVStyle(segVCoords) {
  if (!segVCoords) {
    return {
      top: '',
      bottom: ''
    };
  }
  return {
    top: segVCoords.start,
    bottom: -segVCoords.end
  };
}
function compileSegsFromEntries(segEntries, allSegs) {
  return segEntries.map(function (segEntry) {
    return allSegs[segEntry.index];
  });
}
var TimeColsContent = /*#__PURE__*/function (_BaseComponent7) {
  _inherits(TimeColsContent, _BaseComponent7);
  function TimeColsContent() {
    var _this7;
    _classCallCheck(this, TimeColsContent);
    _this7 = _callSuper(this, TimeColsContent, arguments);
    _this7.splitFgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    _this7.splitBgEventSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    _this7.splitBusinessHourSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    _this7.splitNowIndicatorSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    _this7.splitDateSelectionSegs = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitSegsByCol);
    _this7.splitEventDrag = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
    _this7.splitEventResize = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(splitInteractionByCol);
    _this7.rootElRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this7.cellElRefs = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cf();
    return _this7;
  }
  _createClass(TimeColsContent, [{
    key: "render",
    value: function render() {
      var _this8 = this;
      var props = this.props,
        context = this.context;
      var nowIndicatorTop = context.options.nowIndicator && props.slatCoords && props.slatCoords.safeComputeTop(props.nowDate); // might return void
      var colCnt = props.cells.length;
      var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
      var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
      var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
      var nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
      var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
      var eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
      var eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-cols",
        ref: this.rootElRef
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
        role: "presentation",
        style: {
          minWidth: props.tableMinWidth,
          width: props.clientWidth
        }
      }, props.tableColGroupNode, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
        role: "presentation"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
        role: "row"
      }, props.axis && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
        "aria-hidden": true,
        className: "fc-timegrid-col fc-timegrid-axis"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-col-frame"
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-now-indicator-container"
      }, typeof nowIndicatorTop === 'number' && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ck, {
        elClasses: ['fc-timegrid-now-indicator-arrow'],
        elStyle: {
          top: nowIndicatorTop
        },
        isAxis: true,
        date: props.nowDate
      })))), props.cells.map(function (cell, i) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, {
          key: cell.key,
          elRef: _this8.cellElRefs.createRef(cell.key),
          dateProfile: props.dateProfile,
          date: cell.date,
          nowDate: props.nowDate,
          todayRange: props.todayRange,
          extraRenderProps: cell.extraRenderProps,
          extraDataAttrs: cell.extraDataAttrs,
          extraClassNames: cell.extraClassNames,
          extraDateSpan: cell.extraDateSpan,
          fgEventSegs: fgEventSegsByRow[i],
          bgEventSegs: bgEventSegsByRow[i],
          businessHourSegs: businessHourSegsByRow[i],
          nowIndicatorSegs: nowIndicatorSegsByRow[i],
          dateSelectionSegs: dateSelectionSegsByRow[i],
          eventDrag: eventDragByRow[i],
          eventResize: eventResizeByRow[i],
          slatCoords: props.slatCoords,
          eventSelection: props.eventSelection,
          forPrint: props.forPrint
        });
      })))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateCoords();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateCoords();
    }
  }, {
    key: "updateCoords",
    value: function updateCoords() {
      var props = this.props;
      if (props.onColCoords && props.clientWidth !== null // means sizing has stabilized
      ) {
        props.onColCoords(new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ba(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true,
        // horizontal
        false));
      }
    }
  }]);
  return TimeColsContent;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.B);
function collectCellEls(elMap, cells) {
  return cells.map(function (cell) {
    return elMap[cell.key];
  });
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
var TimeCols = /*#__PURE__*/function (_DateComponent2) {
  _inherits(TimeCols, _DateComponent2);
  function TimeCols() {
    var _this9;
    _classCallCheck(this, TimeCols);
    _this9 = _callSuper(this, TimeCols, arguments);
    _this9.processSlotOptions = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(processSlotOptions);
    _this9.state = {
      slatCoords: null
    };
    _this9.handleRootEl = function (el) {
      if (el) {
        _this9.context.registerInteractiveComponent(_assertThisInitialized(_this9), {
          el: el,
          isHitComboAllowed: _this9.props.isHitComboAllowed
        });
      } else {
        _this9.context.unregisterInteractiveComponent(_assertThisInitialized(_this9));
      }
    };
    _this9.handleScrollRequest = function (request) {
      var onScrollTopRequest = _this9.props.onScrollTopRequest;
      var slatCoords = _this9.state.slatCoords;
      if (onScrollTopRequest && slatCoords) {
        if (request.time) {
          var top = slatCoords.computeTimeTop(request.time);
          top = Math.ceil(top); // zoom can give weird floating-point values. rather scroll a little bit further
          if (top) {
            top += 1; // to overcome top border that slots beyond the first have. looks better
          }
          onScrollTopRequest(top);
        }
        return true;
      }
      return false;
    };
    _this9.handleColCoords = function (colCoords) {
      _this9.colCoords = colCoords;
    };
    _this9.handleSlatCoords = function (slatCoords) {
      _this9.setState({
        slatCoords: slatCoords
      });
      if (_this9.props.onSlatCoords) {
        _this9.props.onSlatCoords(slatCoords);
      }
    };
    return _this9;
  }
  _createClass(TimeCols, [{
    key: "render",
    value: function render() {
      var props = this.props,
        state = this.state;
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-timegrid-body",
        ref: this.handleRootEl,
        style: {
          // these props are important to give this wrapper correct dimensions for interactions
          // TODO: if we set it here, can we avoid giving to inner tables?
          width: props.clientWidth,
          minWidth: props.tableMinWidth
        }
      }, (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, {
        axis: props.axis,
        dateProfile: props.dateProfile,
        slatMetas: props.slatMetas,
        clientWidth: props.clientWidth,
        minHeight: props.expandRows ? props.clientHeight : '',
        tableMinWidth: props.tableMinWidth,
        tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */,
        onCoords: this.handleSlatCoords
      }), (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, {
        cells: props.cells,
        axis: props.axis,
        dateProfile: props.dateProfile,
        businessHourSegs: props.businessHourSegs,
        bgEventSegs: props.bgEventSegs,
        fgEventSegs: props.fgEventSegs,
        dateSelectionSegs: props.dateSelectionSegs,
        eventSelection: props.eventSelection,
        eventDrag: props.eventDrag,
        eventResize: props.eventResize,
        todayRange: props.todayRange,
        nowDate: props.nowDate,
        nowIndicatorSegs: props.nowIndicatorSegs,
        clientWidth: props.clientWidth,
        tableMinWidth: props.tableMinWidth,
        tableColGroupNode: props.tableColGroupNode,
        slatCoords: state.slatCoords,
        onColCoords: this.handleColCoords,
        forPrint: props.forPrint
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scrollResponder.detach();
    }
  }, {
    key: "queryHit",
    value: function queryHit(positionLeft, positionTop) {
      var _this$context3 = this.context,
        dateEnv = _this$context3.dateEnv,
        options = _this$context3.options;
      var colCoords = this.colCoords;
      var dateProfile = this.props.dateProfile;
      var slatCoords = this.state.slatCoords;
      var _this$processSlotOpti = this.processSlotOptions(this.props.slotDuration, options.snapDuration),
        snapDuration = _this$processSlotOpti.snapDuration,
        snapsPerSlot = _this$processSlotOpti.snapsPerSlot;
      var colIndex = colCoords.leftToIndex(positionLeft);
      var slatIndex = slatCoords.positions.topToIndex(positionTop);
      if (colIndex != null && slatIndex != null) {
        var cell = this.props.cells[colIndex];
        var slatTop = slatCoords.positions.tops[slatIndex];
        var slatHeight = slatCoords.positions.getHeight(slatIndex);
        var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
        var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
        var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
        var dayDate = this.props.cells[colIndex].date;
        var time = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(dateProfile.slotMinTime, (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bo)(snapDuration, snapIndex));
        var start = dateEnv.add(dayDate, time);
        var end = dateEnv.add(start, snapDuration);
        return {
          dateProfile: dateProfile,
          dateSpan: Object.assign({
            range: {
              start: start,
              end: end
            },
            allDay: false
          }, cell.extraDateSpan),
          dayEl: colCoords.els[colIndex],
          rect: {
            left: colCoords.lefts[colIndex],
            right: colCoords.rights[colIndex],
            top: slatTop,
            bottom: slatTop + slatHeight
          },
          layer: 0
        };
      }
      return null;
    }
  }]);
  return TimeCols;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be);
function processSlotOptions(slotDuration, snapDurationOverride) {
  var snapDuration = snapDurationOverride || slotDuration;
  var snapsPerSlot = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(slotDuration, snapDuration);
  if (snapsPerSlot === null) {
    snapDuration = slotDuration;
    snapsPerSlot = 1;
    // TODO: say warning?
  }
  return {
    snapDuration: snapDuration,
    snapsPerSlot: snapsPerSlot
  };
}
var DayTimeColsSlicer = /*#__PURE__*/function (_Slicer) {
  _inherits(DayTimeColsSlicer, _Slicer);
  function DayTimeColsSlicer() {
    _classCallCheck(this, DayTimeColsSlicer);
    return _callSuper(this, DayTimeColsSlicer, arguments);
  }
  _createClass(DayTimeColsSlicer, [{
    key: "sliceRange",
    value: function sliceRange(range, dayRanges) {
      var segs = [];
      for (var col = 0; col < dayRanges.length; col += 1) {
        var segRange = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.o)(range, dayRanges[col]);
        if (segRange) {
          segs.push({
            start: segRange.start,
            end: segRange.end,
            isStart: segRange.start.valueOf() === range.start.valueOf(),
            isEnd: segRange.end.valueOf() === range.end.valueOf(),
            col: col
          });
        }
      }
      return segs;
    }
  }]);
  return DayTimeColsSlicer;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bW);
var DayTimeCols = /*#__PURE__*/function (_DateComponent3) {
  _inherits(DayTimeCols, _DateComponent3);
  function DayTimeCols() {
    var _this10;
    _classCallCheck(this, DayTimeCols);
    _this10 = _callSuper(this, DayTimeCols, arguments);
    _this10.buildDayRanges = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildDayRanges);
    _this10.slicer = new DayTimeColsSlicer();
    _this10.timeColsRef = (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    return _this10;
  }
  _createClass(DayTimeCols, [{
    key: "render",
    value: function render() {
      var _this11 = this;
      var props = this.props,
        context = this.context;
      var dateProfile = props.dateProfile,
        dayTableModel = props.dayTableModel;
      var _context$options = context.options,
        nowIndicator = _context$options.nowIndicator,
        nextDayThreshold = _context$options.nextDayThreshold;
      var dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
      // give it the first row of cells
      // TODO: would move this further down hierarchy, but sliceNowDate needs it
      return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.ch, {
        unit: nowIndicator ? 'minute' : 'day'
      }, function (nowDate, todayRange) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, Object.assign({
          ref: _this11.timeColsRef
        }, _this11.slicer.sliceProps(props, dateProfile, null, context, dayRanges), {
          forPrint: props.forPrint,
          axis: props.axis,
          dateProfile: dateProfile,
          slatMetas: props.slatMetas,
          slotDuration: props.slotDuration,
          cells: dayTableModel.cells[0],
          tableColGroupNode: props.tableColGroupNode,
          tableMinWidth: props.tableMinWidth,
          clientWidth: props.clientWidth,
          clientHeight: props.clientHeight,
          expandRows: props.expandRows,
          nowDate: nowDate,
          nowIndicatorSegs: nowIndicator && _this11.slicer.sliceNowDate(nowDate, dateProfile, nextDayThreshold, context, dayRanges),
          todayRange: todayRange,
          onScrollTopRequest: props.onScrollTopRequest,
          onSlatCoords: props.onSlatCoords
        }));
      });
    }
  }]);
  return DayTimeCols;
}(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.be);
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
  var ranges = [];
  var _iterator5 = _createForOfIteratorHelper(dayTableModel.headerDates),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var date = _step5.value;
      ranges.push({
        start: dateEnv.add(date, dateProfile.slotMinTime),
        end: dateEnv.add(date, dateProfile.slotMaxTime)
      });
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var STOCK_SUB_DURATIONS = [{
  hours: 1
}, {
  minutes: 30
}, {
  minutes: 15
}, {
  seconds: 30
}, {
  seconds: 15
}];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
  var dayStart = new Date(0);
  var slatTime = slotMinTime;
  var slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(0);
  var labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
  var metas = [];
  while ((0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(slatTime) < (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bs)(slotMaxTime)) {
    var date = dateEnv.add(dayStart, slatTime);
    var isLabeled = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(slatIterator, labelInterval) !== null;
    metas.push({
      date: date,
      time: slatTime,
      key: date.toISOString(),
      isoTimeStr: (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bu)(date),
      isLabeled: isLabeled
    });
    slatTime = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(slatTime, slotDuration);
    slatIterator = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bp)(slatIterator, slotDuration);
  }
  return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
  var i;
  var labelInterval;
  var slotsPerLabel;
  // find the smallest stock label interval that results in more than one slots-per-label
  for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
    labelInterval = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.d)(STOCK_SUB_DURATIONS[i]);
    slotsPerLabel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bt)(labelInterval, slotDuration);
    if (slotsPerLabel !== null && slotsPerLabel > 1) {
      return labelInterval;
    }
  }
  return slotDuration; // fall back
}
var DayTimeColsView = /*#__PURE__*/function (_TimeColsView) {
  _inherits(DayTimeColsView, _TimeColsView);
  function DayTimeColsView() {
    var _this12;
    _classCallCheck(this, DayTimeColsView);
    _this12 = _callSuper(this, DayTimeColsView, arguments);
    _this12.buildTimeColsModel = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildTimeColsModel);
    _this12.buildSlatMetas = (0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.z)(buildSlatMetas);
    return _this12;
  }
  _createClass(DayTimeColsView, [{
    key: "render",
    value: function render() {
      var _this13 = this;
      var _this$context4 = this.context,
        options = _this$context4.options,
        dateEnv = _this$context4.dateEnv,
        dateProfileGenerator = _this$context4.dateProfileGenerator;
      var props = this.props;
      var dateProfile = props.dateProfile;
      var dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
      var splitProps = this.allDaySplitter.splitProps(props);
      var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
      var dayMinWidth = options.dayMinWidth;
      var hasAttachedAxis = !dayMinWidth;
      var hasDetachedAxis = dayMinWidth;
      var headerContent = options.dayHeaders && (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bK, {
        dates: dayTableModel.headerDates,
        dateProfile: dateProfile,
        datesRepDistinctDays: true,
        renderIntro: hasAttachedAxis ? this.renderHeadAxis : null
      });
      var allDayContent = options.allDaySlot !== false && function (contentArg) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid_internal_js__WEBPACK_IMPORTED_MODULE_2__.DayTable, Object.assign({}, splitProps.allDay, {
          dateProfile: dateProfile,
          dayTableModel: dayTableModel,
          nextDayThreshold: options.nextDayThreshold,
          tableMinWidth: contentArg.tableMinWidth,
          colGroupNode: contentArg.tableColGroupNode,
          renderRowIntro: hasAttachedAxis ? _this13.renderTableRowAxis : null,
          showWeekNumbers: false,
          expandRows: false,
          headerAlignElRef: _this13.headerElRef,
          clientWidth: contentArg.clientWidth,
          clientHeight: contentArg.clientHeight,
          forPrint: props.forPrint
        }, _this13.getAllDayMaxEventProps()));
      };
      var timeGridContent = function timeGridContent(contentArg) {
        return (0,_fullcalendar_core_preact_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, Object.assign({}, splitProps.timed, {
          dayTableModel: dayTableModel,
          dateProfile: dateProfile,
          axis: hasAttachedAxis,
          slotDuration: options.slotDuration,
          slatMetas: slatMetas,
          forPrint: props.forPrint,
          tableColGroupNode: contentArg.tableColGroupNode,
          tableMinWidth: contentArg.tableMinWidth,
          clientWidth: contentArg.clientWidth,
          clientHeight: contentArg.clientHeight,
          onSlatCoords: _this13.handleSlatCoords,
          expandRows: contentArg.expandRows,
          onScrollTopRequest: _this13.handleScrollTopRequest
        }));
      };
      return hasDetachedAxis ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords) : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
    }
  }]);
  return DayTimeColsView;
}(TimeColsView);
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
  var daySeries = new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bO(dateProfile.renderRange, dateProfileGenerator);
  return new _fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.bV(daySeries, false);
}
var css_248z = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
(0,_fullcalendar_core_internal_js__WEBPACK_IMPORTED_MODULE_0__.cw)(css_248z);


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
/*!********************************************************************************!*\
  !*** ./gems/decidim-module-calendar/app/packs/entrypoints/decidim_calendar.js ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/calendar/calendar */ "./gems/decidim-module-calendar/app/packs/src/decidim/calendar/calendar.js");
/* harmony import */ var entrypoints_decidim_calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entrypoints/decidim_calendar.scss */ "./gems/decidim-module-calendar/app/packs/entrypoints/decidim_calendar.scss");


// CSS


// Images
__webpack_require__("./gems/decidim-module-calendar/app/packs/images sync recursive ^\\.\\/.*$");
}();
/******/ })()
;
//# sourceMappingURL=decidim_calendar.js.map