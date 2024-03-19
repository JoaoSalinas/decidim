/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js ***!
  \****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var e, t;
e = this, t = function t() {
  "use strict";

  function e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }
    return n;
  }
  function t(t) {
    for (var n = 1; n < arguments.length; n++) {
      var i = null != arguments[n] ? arguments[n] : {};
      n % 2 ? e(Object(i), !0).forEach(function (e) {
        r(t, e, i[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
      });
    }
    return t;
  }
  function n(e) {
    return n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, n(e);
  }
  function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  function i(e) {
    return function (e) {
      if (Array.isArray(e)) return s(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || o(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function o(e, t) {
    if (e) {
      if ("string" == typeof e) return s(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
    }
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var u = function u(e) {
      return "string" == typeof e ? document.querySelector(e) : e();
    },
    a = function a(e, t) {
      var n = "string" == typeof e ? document.createElement(e) : e;
      for (var r in t) {
        var i = t[r];
        if ("inside" === r) i.append(n);else if ("dest" === r) u(i[0]).insertAdjacentElement(i[1], n);else if ("around" === r) {
          var o = i;
          o.parentNode.insertBefore(n, o), n.append(o), null != o.getAttribute("autofocus") && o.focus();
        } else r in n ? n[r] = i : n.setAttribute(r, i);
      }
      return n;
    },
    c = function c(e, t) {
      return e = String(e).toLowerCase(), t ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : e;
    },
    l = function l(e, n) {
      return a("mark", t({
        innerHTML: e
      }, "string" == typeof n && {
        "class": n
      })).outerHTML;
    },
    f = function f(e, t) {
      t.input.dispatchEvent(new CustomEvent(e, {
        bubbles: !0,
        detail: t.feedback,
        cancelable: !0
      }));
    },
    p = function p(e, t, n) {
      var r = n || {},
        i = r.mode,
        o = r.diacritics,
        s = r.highlight,
        u = c(t, o);
      if (t = String(t), e = c(e, o), "loose" === i) {
        var a = (e = e.replace(/ /g, "")).length,
          f = 0,
          p = Array.from(t).map(function (t, n) {
            return f < a && u[n] === e[f] && (t = s ? l(t, s) : t, f++), t;
          }).join("");
        if (f === a) return p;
      } else {
        var d = u.indexOf(e);
        if (~d) return e = t.substring(d, d + e.length), d = s ? t.replace(e, l(e, s)) : t;
      }
    },
    d = function d(e, t) {
      return new Promise(function (n, r) {
        var i;
        return (i = e.data).cache && i.store ? n() : new Promise(function (e, n) {
          return "function" == typeof i.src ? i.src(t).then(e, n) : e(i.src);
        }).then(function (t) {
          try {
            return e.feedback = i.store = t, f("response", e), n();
          } catch (e) {
            return r(e);
          }
        }, r);
      });
    },
    h = function h(e, t) {
      var n = t.data,
        r = t.searchEngine,
        i = [];
      n.store.forEach(function (s, u) {
        var a = function a(n) {
          var o = n ? s[n] : s,
            u = "function" == typeof r ? r(e, o) : p(e, o, {
              mode: r,
              diacritics: t.diacritics,
              highlight: t.resultItem.highlight
            });
          if (u) {
            var a = {
              match: u,
              value: s
            };
            n && (a.key = n), i.push(a);
          }
        };
        if (n.keys) {
          var c,
            l = function (e, t) {
              var _n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
              if (!_n) {
                if (Array.isArray(e) || (_n = o(e)) || t && e && "number" == typeof e.length) {
                  _n && (e = _n);
                  var r = 0,
                    i = function i() {};
                  return {
                    s: i,
                    n: function n() {
                      return r >= e.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: e[r++]
                      };
                    },
                    e: function e(_e) {
                      throw _e;
                    },
                    f: i
                  };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var s,
                u = !0,
                a = !1;
              return {
                s: function s() {
                  _n = _n.call(e);
                },
                n: function n() {
                  var e = _n.next();
                  return u = e.done, e;
                },
                e: function e(_e2) {
                  a = !0, s = _e2;
                },
                f: function f() {
                  try {
                    u || null == _n["return"] || _n["return"]();
                  } finally {
                    if (a) throw s;
                  }
                }
              };
            }(n.keys);
          try {
            for (l.s(); !(c = l.n()).done;) a(c.value);
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        } else a();
      }), n.filter && (i = n.filter(i));
      var s = i.slice(0, t.resultsList.maxResults);
      t.feedback = {
        query: e,
        matches: i,
        results: s
      }, f("results", t);
    },
    m = "aria-expanded",
    b = "aria-activedescendant",
    y = "aria-selected",
    v = function v(e, n) {
      e.feedback.selection = t({
        index: n
      }, e.feedback.results[n]);
    },
    g = function g(e) {
      e.isOpen || ((e.wrapper || e.input).setAttribute(m, !0), e.list.removeAttribute("hidden"), e.isOpen = !0, f("open", e));
    },
    w = function w(e) {
      e.isOpen && ((e.wrapper || e.input).setAttribute(m, !1), e.input.setAttribute(b, ""), e.list.setAttribute("hidden", ""), e.isOpen = !1, f("close", e));
    },
    O = function O(e, t) {
      var n = t.resultItem,
        r = t.list.getElementsByTagName(n.tag),
        o = !!n.selected && n.selected.split(" ");
      if (t.isOpen && r.length) {
        var s,
          u,
          a = t.cursor;
        e >= r.length && (e = 0), e < 0 && (e = r.length - 1), t.cursor = e, a > -1 && (r[a].removeAttribute(y), o && (u = r[a].classList).remove.apply(u, i(o))), r[e].setAttribute(y, !0), o && (s = r[e].classList).add.apply(s, i(o)), t.input.setAttribute(b, r[t.cursor].id), t.list.scrollTop = r[e].offsetTop - t.list.clientHeight + r[e].clientHeight + 5, t.feedback.cursor = t.cursor, v(t, e), f("navigate", t);
      }
    },
    A = function A(e) {
      O(e.cursor + 1, e);
    },
    k = function k(e) {
      O(e.cursor - 1, e);
    },
    L = function L(e, t, n) {
      (n = n >= 0 ? n : e.cursor) < 0 || (e.feedback.event = t, v(e, n), f("selection", e), w(e));
    };
  function j(e, n) {
    var r = this;
    return new Promise(function (i, o) {
      var s, u;
      return s = n || ((u = e.input) instanceof HTMLInputElement || u instanceof HTMLTextAreaElement ? u.value : u.innerHTML), function (e, t, n) {
        return t ? t(e) : e.length >= n;
      }(s = e.query ? e.query(s) : s, e.trigger, e.threshold) ? d(e, s).then(function (n) {
        try {
          return e.feedback instanceof Error ? i() : (h(s, e), e.resultsList && function (e) {
            var n = e.resultsList,
              r = e.list,
              i = e.resultItem,
              o = e.feedback,
              s = o.matches,
              u = o.results;
            if (e.cursor = -1, r.innerHTML = "", s.length || n.noResults) {
              var c = new DocumentFragment();
              u.forEach(function (e, n) {
                var r = a(i.tag, t({
                  id: "".concat(i.id, "_").concat(n),
                  role: "option",
                  innerHTML: e.match,
                  inside: c
                }, i["class"] && {
                  "class": i["class"]
                }));
                i.element && i.element(r, e);
              }), r.append(c), n.element && n.element(r, o), g(e);
            } else w(e);
          }(e), c.call(r));
        } catch (e) {
          return o(e);
        }
      }, o) : (w(e), c.call(r));
      function c() {
        return i();
      }
    });
  }
  var S = function S(e, t) {
      for (var n in e) for (var r in e[n]) t(n, r);
    },
    T = function T(e) {
      var n,
        r,
        i,
        o = e.events,
        s = (n = function n() {
          return j(e);
        }, r = e.debounce, function () {
          clearTimeout(i), i = setTimeout(function () {
            return n();
          }, r);
        }),
        u = e.events = t({
          input: t({}, o && o.input)
        }, e.resultsList && {
          list: o ? t({}, o.list) : {}
        }),
        a = {
          input: {
            input: function input() {
              s();
            },
            keydown: function keydown(t) {
              !function (e, t) {
                switch (e.keyCode) {
                  case 40:
                  case 38:
                    e.preventDefault(), 40 === e.keyCode ? A(t) : k(t);
                    break;
                  case 13:
                    t.submit || e.preventDefault(), t.cursor >= 0 && L(t, e);
                    break;
                  case 9:
                    t.resultsList.tabSelect && t.cursor >= 0 && L(t, e);
                    break;
                  case 27:
                    t.input.value = "", w(t);
                }
              }(t, e);
            },
            blur: function blur() {
              w(e);
            }
          },
          list: {
            mousedown: function mousedown(e) {
              e.preventDefault();
            },
            click: function click(t) {
              !function (e, t) {
                var n = t.resultItem.tag.toUpperCase(),
                  r = Array.from(t.list.querySelectorAll(n)),
                  i = e.target.closest(n);
                i && i.nodeName === n && L(t, e, r.indexOf(i));
              }(t, e);
            }
          }
        };
      S(a, function (t, n) {
        (e.resultsList || "input" === n) && (u[t][n] || (u[t][n] = a[t][n]));
      }), S(u, function (t, n) {
        e[t].addEventListener(n, u[t][n]);
      });
    };
  function E(e) {
    var n = this;
    return new Promise(function (r, i) {
      var o, s, u;
      if (o = e.placeHolder, u = {
        role: "combobox",
        "aria-owns": (s = e.resultsList).id,
        "aria-haspopup": !0,
        "aria-expanded": !1
      }, a(e.input, t(t({
        "aria-controls": s.id,
        "aria-autocomplete": "both"
      }, o && {
        placeholder: o
      }), !e.wrapper && t({}, u))), e.wrapper && (e.wrapper = a("div", t({
        around: e.input,
        "class": e.name + "_wrapper"
      }, u))), s && (e.list = a(s.tag, t({
        dest: [s.destination, s.position],
        id: s.id,
        role: "listbox",
        hidden: "hidden"
      }, s["class"] && {
        "class": s["class"]
      }))), T(e), e.data.cache) return d(e).then(function (e) {
        try {
          return c.call(n);
        } catch (e) {
          return i(e);
        }
      }, i);
      function c() {
        return f("init", e), r();
      }
      return c.call(n);
    });
  }
  function x(e) {
    var t = e.prototype;
    t.init = function () {
      E(this);
    }, t.start = function (e) {
      j(this, e);
    }, t.unInit = function () {
      if (this.wrapper) {
        var e = this.wrapper.parentNode;
        e.insertBefore(this.input, this.wrapper), e.removeChild(this.wrapper);
      }
      var t;
      S((t = this).events, function (e, n) {
        t[e].removeEventListener(n, t.events[e][n]);
      });
    }, t.open = function () {
      g(this);
    }, t.close = function () {
      w(this);
    }, t.goTo = function (e) {
      O(e, this);
    }, t.next = function () {
      A(this);
    }, t.previous = function () {
      k(this);
    }, t.select = function (e) {
      L(this, null, e);
    }, t.search = function (e, t, n) {
      return p(e, t, n);
    };
  }
  return function e(t) {
    this.options = t, this.id = e.instances = (e.instances || 0) + 1, this.name = "autoComplete", this.wrapper = 1, this.threshold = 1, this.debounce = 0, this.resultsList = {
      position: "afterend",
      tag: "ul",
      maxResults: 5
    }, this.resultItem = {
      tag: "li"
    }, function (e) {
      var t = e.name,
        r = e.options,
        i = e.resultsList,
        o = e.resultItem;
      for (var s in r) if ("object" === n(r[s])) for (var a in e[s] || (e[s] = {}), r[s]) e[s][a] = r[s][a];else e[s] = r[s];
      e.selector = e.selector || "#" + t, i.destination = i.destination || e.selector, i.id = i.id || t + "_list_" + e.id, o.id = o.id || t + "_result", e.input = u(e.selector);
    }(this), x.call(this, e), E(this);
  };
}, "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/admin_autocomplete.js":
/*!********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/admin_autocomplete.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/autocomplete */ "./gems/decidim-module-core/app/packs/src/decidim/autocomplete.js");
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


/**
 * This function can be used to create an autocomplete input automatically
 * from the following kind of div:
 *   <div data-autocomplete="{...}"></div>
 *
 * The data-autocomplete attribute should contain the following configuration
 * as an encoded JSON, which is used to generate the AutoComplete options:
 * - name: assembly_member[user_id],
 * - options: [],
 * - placeholder: "Select a participant",
 * - searchURL: "http://..."
 * - selected: "",
 *
 * @param {HTMLElement} el The element to generate the autocomplete for.
 * @returns {AutoComplete} An instance of the AutoComplete class.
 */
var autoConfigure = function autoConfigure(el) {
  var config = JSON.parse(el.dataset.autocomplete);
  var searchUrl = new URL(config.searchURL);
  var textInput = document.createElement("input");
  textInput.type = "text";
  textInput.className = "autocomplete-input";
  el.appendChild(textInput);
  var mode = config.mode || "sticky";
  var selected = null;
  if (config.selected) {
    switch (mode) {
      case "multi":
        selected = config.selected.map(function (item) {
          return {
            key: "label",
            value: {
              value: item.value,
              label: item.label
            }
          };
        });
        break;
      case "sticky":
        selected = {
          key: "label",
          value: config.options[config.options.length - 1]
        };
        break;
      default:
        selected = config.selected;
    }
  }
  var dataSource = function dataSource(query, callback) {
    var params = new URLSearchParams(_objectSpread(_objectSpread({}, Object.fromEntries(searchUrl.searchParams)), {}, {
      term: query
    }));
    fetch("".concat(searchUrl.origin).concat(searchUrl.pathname, "?").concat(params.toString()), {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      callback(data);
    });
  };
  var ac = new src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"](textInput, {
    name: config.name,
    placeholder: config.placeholder,
    selected: selected,
    mode: mode,
    searchPrompt: true,
    searchPromptText: config.searchPromptText,
    threshold: 3,
    dataMatchKeys: ["label"],
    dataSource: dataSource
  });
  return ac;
};
$(function () {
  var $autocompleteDiv = $("[data-autocomplete]");
  if ($autocompleteDiv.length < 1) {
    return;
  }
  $autocompleteDiv.each(function (_index, element) {
    autoConfigure(element);
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/application.js":
/*!*************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/application.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_toggle_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/toggle_nav */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/toggle_nav.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js");
/* harmony import */ var src_decidim_form_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/form_filter */ "./gems/decidim-module-core/app/packs/src/decidim/form_filter.js");
/* harmony import */ var src_decidim_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/configuration */ "./gems/decidim-module-core/app/packs/src/decidim/configuration.js");
/* harmony import */ var src_decidim_input_character_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/input_character_counter */ "./gems/decidim-module-core/app/packs/src/decidim/input_character_counter.js");
/* harmony import */ var src_decidim_admin_managed_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/admin/managed_users */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/managed_users.js");
/* eslint-disable no-invalid-this */







window.Decidim = window.Decidim || {};
window.Decidim.managedUsersForm = src_decidim_admin_managed_users__WEBPACK_IMPORTED_MODULE_5__["default"];
window.Decidim.config = new src_decidim_configuration__WEBPACK_IMPORTED_MODULE_3__["default"]();
window.Decidim.InputCharacterCounter = src_decidim_input_character_counter__WEBPACK_IMPORTED_MODULE_4__["default"];
$(function () {
  $(document).foundation();
  (0,src_decidim_admin_toggle_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_1__["default"])("#steps tbody", {
    placeholder: $('<tr style="border-style: dashed; border-color: #000"><td colspan="4">&nbsp;</td></tr>')[0],
    onSortUpdate: function onSortUpdate($children) {
      var sortUrl = $("#steps tbody").data("sort-url");
      var order = $children.map(function (index, child) {
        return $(child).data("id");
      }).toArray();
      $.ajax({
        method: "POST",
        url: sortUrl,
        contentType: "application/json",
        data: JSON.stringify({
          items_ids: order
        })
      } // eslint-disable-line camelcase
      );
    }
  });
  $("form.new_filter").each(function () {
    var formFilter = new src_decidim_form_filter__WEBPACK_IMPORTED_MODULE_2__["default"]($(this));
    formFilter.mountComponent();
  });
});

/***/ }),

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

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/budget_rule_toggler.component.js":
/*!*******************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/budget_rule_toggler.component.js ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BudgetRuleTogglerComponent; }
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
var BudgetRuleTogglerComponent = /*#__PURE__*/function () {
  function BudgetRuleTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, BudgetRuleTogglerComponent);
    this.ruleCheckboxes = options.ruleCheckboxes;
    this._runAll();
  }
  _createClass(BudgetRuleTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;
      this.ruleCheckboxes.each(function (_i, checkbox) {
        _this._bindEvent(checkbox);
        _this.run(checkbox);
      });
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent(target) {
      var _this2 = this;
      $(target).on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var _this3 = this;
      this.toggleTextInput(target);
      if ($(target).prop("checked")) {
        this.ruleCheckboxes.filter(function (_i, checkbox) {
          return checkbox !== target;
        }).prop("checked", false).each(function (_i, checkbox) {
          _this3.toggleTextInput(checkbox);
        });
      }
    }
  }, {
    key: "toggleTextInput",
    value: function toggleTextInput(target) {
      var container = $(target).closest("div");
      if (container.length < 1) {
        return;
      }
      var containerClassPrefix = container.attr("class").replace(/^vote_rule_/, "vote_").replace(/_enabled_container$/, "");
      var input = $("[class^=\"".concat(containerClassPrefix, "\"][class$=\"_container\"]"));
      if ($(target).prop("checked")) {
        input.slideDown();
      } else {
        input.slideUp();
      }
    }
  }]);
  return BudgetRuleTogglerComponent;
}();


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/choose_language.js":
/*!*****************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/choose_language.js ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ initLanguageChangeSelect; }
/* harmony export */ });
/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */

function initLanguageChangeSelect(elements) {
  elements.forEach(function (select) {
    select.addEventListener("change", function () {
      var targetTabPaneSelector = select.value;
      var tabsContent = select.parentElement.parentElement.nextElementSibling;
      tabsContent.querySelector(".is-active").classList.remove("is-active");
      tabsContent.querySelector(targetTabPaneSelector).classList.add("is-active");
    });
  });
}

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/draggable-list.js":
/*!****************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/draggable-list.js ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createSortableList; }
/* harmony export */ });
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
/* eslint-disable require-jsdoc */

function createSortableList(lists) {
  (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__["default"])(lists, {
    handle: "li",
    forcePlaceholderSize: true,
    acceptFrom: ".js-connect"
  });
}

// Once in DOM
$(function () {
  var $draggables = $(".draggable-list");
  var draggablesClassNames = [];
  $draggables.each(function (index, elem) {
    draggablesClassNames = [].concat(_toConsumableArray(draggablesClassNames), [".".concat(elem.className.split(" ").filter(function (name) {
      return /js-list.*/.test(name);
    })[0])]);
  });
  document.addEventListener("drag", function (event) {
    $draggables.not(event.target.parentElement).addClass("dragging");
  });
  document.addEventListener("dragend", function () {
    $draggables.removeClass("dragging");
  });
  createSortableList(draggablesClassNames.join(", "));
});

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

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/external_domain_whitelist.js":
/*!***************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/external_domain_whitelist.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/auto_buttons_by_position.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_buttons_by_position.component.js");
/* harmony import */ var src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/auto_label_by_position.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/auto_label_by_position.component.js");
/* harmony import */ var src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/dynamic_fields.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/dynamic_fields.component.js");
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js");




$(function () {
  var dynamicFieldDefinitions = [{
    placeHolderId: "external-domain-id",
    wrapperSelector: ".external-domains",
    fieldSelector: ".external-domain",
    addFieldSelector: ".add-external-domain"
  }];
  dynamicFieldDefinitions.forEach(function (section) {
    var fieldSelectorSuffix = section.fieldSelector.replace(".", "");
    var autoButtonsByPosition = new src_decidim_admin_auto_buttons_by_position_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
      listSelector: "".concat(section.fieldSelector, ":not(.hidden)"),
      hideOnFirstSelector: ".move-up-question",
      hideOnLastSelector: ".move-down-question"
    });
    var autoLabelByPosition = new src_decidim_admin_auto_label_by_position_component__WEBPACK_IMPORTED_MODULE_1__["default"]({
      listSelector: "".concat(section.fieldSelector, ":not(.hidden)"),
      labelSelector: ".card-title span:first",
      onPositionComputed: function onPositionComputed(el, idx) {
        $(el).find("input[name$=\\[position\\]]").val(idx);
      }
    });
    var createSortableList = function createSortableList() {
      (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_3__["default"])(".external-domains-list:not(.published)", {
        handle: ".external-domain-divider",
        placeholder: '<div style="border-style: dashed; border-color: #000"></div>',
        forcePlaceholderSize: true,
        onSortUpdate: function onSortUpdate() {
          autoLabelByPosition.run();
          autoButtonsByPosition.run();
        }
      });
    };
    var hideDeletedItem = function hideDeletedItem($target) {
      var inputDeleted = $target.find("input[name$=\\[deleted\\]]").val();
      if (inputDeleted === "true") {
        $target.addClass("hidden");
        $target.hide();

        // Allows re-submitting of the form
        $("input", $target).removeAttr("required");
      }
    };
    (0,src_decidim_admin_dynamic_fields_component__WEBPACK_IMPORTED_MODULE_2__["default"])({
      placeholderId: section.placeHolderId,
      wrapperSelector: section.wrapperSelector,
      containerSelector: "".concat(section.wrapperSelector, "-list"),
      fieldSelector: section.fieldSelector,
      addFieldButtonSelector: section.addFieldSelector,
      removeFieldButtonSelector: ".remove-".concat(fieldSelectorSuffix),
      moveUpFieldButtonSelector: ".move-up-question",
      moveDownFieldButtonSelector: ".move-down-question",
      onAddField: function onAddField() {
        createSortableList();
        autoLabelByPosition.run();
        autoButtonsByPosition.run();
      },
      onRemoveField: function onRemoveField($field) {
        autoLabelByPosition.run();
        autoButtonsByPosition.run();

        // Allows re-submitting of the form
        $("input", $field).removeAttr("required");
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
    $(section.fieldSelector).each(function (_idx, el) {
      var $target = $(el);
      hideDeletedItem($target);
    });
    autoLabelByPosition.run();
    autoButtonsByPosition.run();
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/form.js":
/*!******************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/form.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/scope_picker_enabler.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/scope_picker_enabler.component.js");
/* harmony import */ var src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_scope_picker_enabler_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/proposal_infinite_edit */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/proposal_infinite_edit.js");
/* harmony import */ var src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_proposal_infinite_edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_decidim_admin_budget_rule_toggler_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/budget_rule_toggler.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/budget_rule_toggler.component.js");




// Checks if the form contains fields with special CSS classes added in
// Decidim::Admin::SettingsHelper and acts accordingly.
$(function () {
  var budgetRuleToggler = new src_decidim_admin_budget_rule_toggler_component__WEBPACK_IMPORTED_MODULE_2__["default"]({
    ruleCheckboxes: $("input[id^='component_settings_vote_rule_']")
  });
  budgetRuleToggler.run();

  // Prevents readonly containers from being modified.
  var $readonlyContainer = $(".readonly_container input");
  $readonlyContainer.click(function (event) {
    event.preventDefault();
    return false;
  });

  // Target fields:
  // - amendments_wizard_help_text
  // - amendments_visibility
  // - amendment_creation_enabled
  // - amendment_reaction_enabled
  // - amendment_promotion_enabled

  // (1) Hides target fields if amendments_enabled component setting is NOT checked.
  // (2) Toggles visibilty of target fields when amendments_enabled component setting is clicked.
  var $amendmentsEnabled = $("input#component_settings_amendments_enabled");
  if ($amendmentsEnabled.length > 0) {
    var $amendmentStepSettings = $(".amendments_wizard_help_text_container, .amendments_visibility_container, .amendment_creation_enabled_container, .amendment_reaction_enabled_container, .amendment_promotion_enabled_container");
    if ($amendmentsEnabled.is(":not(:checked)")) {
      $amendmentStepSettings.hide();
    }
    $amendmentsEnabled.click(function () {
      $amendmentStepSettings.toggle();
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/managed_users.js":
/*!***************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/managed_users.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ managedUsersForm; }
/* harmony export */ });
/* harmony import */ var src_decidim_admin_subform_toggler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/subform_toggler.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/subform_toggler.component.js");
/* eslint-disable require-jsdoc */


function managedUsersForm() {
  var subformToggler = new src_decidim_admin_subform_toggler_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
    controllerSelect: $("select#impersonate_user_authorization_handler_name"),
    subformWrapperClass: "authorization-handler",
    globalWrapperSelector: "form"
  });
  subformToggler.run();
}

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/moderations.js":
/*!*************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/moderations.js ***!
  \*************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $moderationDetails = $(".moderation-details");
  var $toggleContentButton = $moderationDetails.find(".toggle-content");
  var $reportedContent = $moderationDetails.find(".reported-content");
  var $currentContent = $reportedContent.find(".current");
  var $originalContent = $reportedContent.find(".original");
  $originalContent.hide();
  $toggleContentButton.on("click", function () {
    $currentContent.toggle();
    $originalContent.toggle();
    if ($currentContent.is(":hidden")) {
      $toggleContentButton.html($toggleContentButton.data("see-current-button-label"));
    } else {
      $toggleContentButton.html($toggleContentButton.data("see-original-button-label"));
    }
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/newsletters.js":
/*!*************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/newsletters.js ***!
  \*************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $form = $(".form.newsletter_deliver");
  if ($form.length > 0) {
    var $sendNewsletterToAllUsers = $form.find("#send_newsletter_to_all_users");
    var $sendNewsletterToFollowers = $form.find("#send_newsletter_to_followers");
    var $sendNewsletterToParticipants = $form.find("#send_newsletter_to_participants");
    var $participatorySpacesForSelect = $form.find("#participatory_spaces_for_select");
    var checkSelectiveNewsletterFollowers = $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked");
    var checkSelectiveNewsletterParticipants = $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked");
    $sendNewsletterToAllUsers.on("change", function (event) {
      var checked = event.target.checked;
      if (checked) {
        $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked", !checked);
        $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.hide();
      } else {
        $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked", !checked);
        $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      }
    });
    $sendNewsletterToFollowers.on("change", function (event) {
      var checked = event.target.checked;
      var selectiveNewsletterParticipants = $sendNewsletterToParticipants.find("input[type='checkbox']").prop("checked");
      if (checked) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      } else if (!selectiveNewsletterParticipants) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", true);
        $participatorySpacesForSelect.hide();
      }
    });
    $sendNewsletterToParticipants.on("change", function (event) {
      var checked = event.target.checked;
      var selectiveNewsletterFollowers = $sendNewsletterToFollowers.find("input[type='checkbox']").prop("checked");
      if (checked) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", !checked);
        $participatorySpacesForSelect.show();
      } else if (!selectiveNewsletterFollowers) {
        $sendNewsletterToAllUsers.find("input[type='checkbox']").prop("checked", true);
        $participatorySpacesForSelect.hide();
      }
    });
    if (checkSelectiveNewsletterFollowers || checkSelectiveNewsletterParticipants) {
      $participatorySpacesForSelect.show();
    } else {
      $participatorySpacesForSelect.hide();
    }
    $(".form .spaces-block-tag").each(function (_i, blockTag) {
      var selectTag = $(blockTag).find(".chosen-select");
      selectTag.change(function () {
        var optionSelected = selectTag.find("option:selected").val();
        if (optionSelected === "all") {
          selectTag.find("option").not(":first").prop("selected", true);
          selectTag.find("option[value='all']").prop("selected", false);
        } else if (optionSelected === "") {
          selectTag.find("option").not(":first").prop("selected", false);
        }
      });
    });
    $form.on("change", function () {
      var $data = $form.serializeJSON().newsletter;
      var $url = $form.data("recipients-count-newsletter-path");
      var $modal = $("#recipients_count_spinner");
      $modal.removeClass("hide");
      $.get($url, {
        data: $data
      }, function (recipientsCount) {
        $("#recipients_count").text(recipientsCount);
      }).always(function () {
        $modal.addClass("hide");
      });
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/officializations.js":
/*!******************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/officializations.js ***!
  \******************************************************************************************************************************/
/***/ (function() {

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
$(function () {
  var $modal = $("#show-email-modal");
  if ($modal.length === 0) {
    return;
  }
  var $button = $("[data-open=user_email]", $modal);
  var $email = $("#user_email", $modal);
  var $fullName = $("#user_full_name", $modal);
  $("[data-dialog-open=show-email-modal]").on("click", function (event) {
    event.preventDefault();
    $button.show();
    $button.attr("data-remote-url", event.currentTarget.href);
    $fullName.text($(event.currentTarget).data("full-name"));
    $email.html("");
  });

  /* eslint-disable */
  function getUserEmail(_x) {
    return _getUserEmail.apply(this, arguments);
  }
  /* eslint-enable */
  function _getUserEmail() {
    _getUserEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      var response, userEmail;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);
          case 2:
            response = _context.sent;
            if (!response.ok) {
              _context.next = 11;
              break;
            }
            _context.next = 6;
            return response.text();
          case 6:
            userEmail = _context.sent;
            $("#user_email").html(userEmail);
            $button.hide();
            _context.next = 12;
            break;
          case 11:
            console.log("Error-HTTP: \" + ".concat(response.status));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getUserEmail.apply(this, arguments);
  }
  $("[data-open=user_email]").on("click", function (event) {
    getUserEmail(event.currentTarget.dataset.remoteUrl);
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/participatory_space_search.js":
/*!****************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/participatory_space_search.js ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/autocomplete */ "./gems/decidim-module-core/app/packs/src/decidim/autocomplete.js");
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
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


/**
 * Sends a query to the API and resolves the resulting data in the returned
 * promise object.
 *
 * @param {String} query The root query to be sent to the API e.g.
 *   "decidim { version }".
 * @returns {Promise} Promise resolving the data returned by the API.
 */
var apiRequest = function apiRequest(query) {
  return new Promise(function (resolve) {
    fetch("/api", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: "{ ".concat(query, " }")
      })
    }).then(function (response) {
      return response.json();
    }).then(function (queryResponse) {
      resolve(queryResponse.data);
    });
  });
};

/**
 * Resolves the different root fields for listing different participatory spaces
 * available in the instance. Returns all LIST kind root fields that list
 * records implemeting the ParticipatorySpaceInterface.
 *
 * @returns {Promise} A promise resolving the root fields for querying different
 *   participatory spaces.
 */
var resolveParticipatorySpaceTypes = function resolveParticipatorySpaceTypes() {
  var schemaQuery = "\n    __schema {\n      queryType {\n        fields {\n          name\n          type {\n            kind\n            ofType {\n              ofType {\n                interfaces {\n                  name\n                }\n                kind\n              }\n            }\n          }\n        }\n      }\n    }\n  ";

  /**
   * Resolves whether the provided field returned by the API is a participatory
   * space root field or not.
   *
   * @param {Object} field The field object returned by the API.
   * @returns {Boolean} True if the provided field is a participatory space
   *   field or false when it is not.
   */
  var isParticipatorySpaceField = function isParticipatorySpaceField(field) {
    if (field.type.kind !== "LIST") {
      return false;
    }
    if (!field.type.ofType || !field.type.ofType.ofType || !field.type.ofType.ofType.interfaces) {
      return false;
    }
    if (!field.type.ofType.ofType.interfaces.some(function (interf) {
      return interf.name === "ParticipatorySpaceInterface";
    })) {
      return false;
    }
    return true;
  };
  return new Promise(function (resolve) {
    apiRequest(schemaQuery).then(function (result) {
      var types = [];
      var _iterator = _createForOfIteratorHelper(result.__schema.queryType.fields),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          if (isParticipatorySpaceField(field)) {
            types.push(field.name);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      resolve(types);
    });
  });
};

/**
 * Resolves the different participatory space root queries and sends an API
 * request for each of them to resolve the list of available spaces of each
 * type.
 *
 * An example array resolved by the promise object looks as follows:
 * [
 *   {
 *     type: "participatory_processes",
 *     name: "Participatory processes",
 *     list: [
 *       { id: 1, title: "Foo" },
 *       { id: 2, title: "Bar" },
 *     ]
 *   },
 *   {
 *     type: "assemblies",
 *     name: "Assemblies",
 *     list: [
 *       { id: 1, title: "Foo" },
 *       { id: 2, title: "Bar" },
 *     ]
 *   }
 * ]
 *
 * @returns {Promise} A promise resolving the different participatory spaces as
 *   explained above.
 */
var getParticipatorySpaces = function getParticipatorySpaces() {
  var currentLocale = document.documentElement.lang;
  var spaceQuery = "\n    id\n    title { translation(locale: \"".concat(currentLocale, "\") }\n    manifest {\n      name\n      humanName {\n        plural { translation(locale: \"").concat(currentLocale, "\") }\n      }\n    }\n  ");
  return new Promise(function (resolve) {
    resolveParticipatorySpaceTypes().then(function (types) {
      // To make the request faster, combine all spaces into the same query
      var spaceQueries = types.map(function (type) {
        return "".concat(type, " { ").concat(spaceQuery, " }");
      });
      apiRequest(spaceQueries.join("\n\n")).then(function (spacesData) {
        var spacesList = [];
        var _iterator2 = _createForOfIteratorHelper(types),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var type = _step2.value;
            if (spacesData[type].length > 0) {
              spacesList.push({
                type: spacesData[type][0].manifest.name,
                name: spacesData[type][0].manifest.humanName.plural.translation,
                list: spacesData[type].map(function (space) {
                  return {
                    id: parseInt(space.id, 10),
                    title: space.title.translation
                  };
                })
              });
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        resolve(spacesList);
      });
    });
  });
};

/**
 * Creates an autocomplete input for the given search input element.
 *
 * @param {HTMLElement} searchInput The element to create the autocomplete for.
 * @param {Array} spaces An array of the available spaces as resolved by the
 *   `getParticipatorySpaces` method.
 * @param {Number} inputIndex The index of the autocomplete input on the page.
 * @returns {AutoComplete} The initiated AutoComplete instance.
 */
var createAutocomplete = function createAutocomplete(searchInput, spaces, inputIndex) {
  /**
   * Data source method which provides the results for the autocomplete element.
   *
   * @param {String} query The query which is used to find the matching records.
   * @param {Function} callback A callback function that is called with the
   *   matching results array.
   * @returns {void}
   */
  var dataSource = function dataSource(query, callback) {
    var regexp = new RegExp(query, "i");
    var results = [];
    var _iterator3 = _createForOfIteratorHelper(spaces),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var currentSpace = _step3.value;
        var _iterator4 = _createForOfIteratorHelper(currentSpace.list),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var space = _step4.value;
            if (regexp.test(space.title)) {
              results.push({
                value: "".concat(currentSpace.type, "(").concat(space.id, ")"),
                label: "".concat(currentSpace.name, " - ").concat(space.title)
              });
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    callback(results);
  };

  /**
   * Resolves the correct selected value for the autocomplete based on the query
   * argument which consists of the participatory space type and its ID.
   *
   * @param {String} originalValue The original value provided in the query
   *   arguments.
   * @returns {Object|null} Returns the matching value object or null in case
   *   no matching object was found.
   */
  var resolveSelectedValue = function resolveSelectedValue(originalValue) {
    if (!originalValue) {
      return null;
    }
    var valueMatches = originalValue.match(/([a-z_]+)\(([0-9]+)\)/);
    if (!valueMatches) {
      return null;
    }
    var valueType = valueMatches[1];
    var valueId = parseInt(valueMatches[2], 10);
    var _iterator5 = _createForOfIteratorHelper(spaces),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var currentSpace = _step5.value;
        if (currentSpace.type === valueType) {
          var space = currentSpace.list.find(function (item) {
            return item.id === valueId;
          });
          if (space) {
            return {
              value: "".concat(currentSpace.type, "(").concat(space.id, ")"),
              label: "".concat(currentSpace.name, " - ").concat(space.title)
            };
          }
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return null;
  };
  var selected = null;
  var selectedValue = resolveSelectedValue(searchInput.dataset.selected);
  if (selectedValue) {
    selected = {
      key: "label",
      value: selectedValue
    };
  }
  var ac = new src_decidim_autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"](searchInput, {
    name: searchInput.getAttribute("name"),
    placeholder: searchInput.getAttribute("placeholder"),
    mode: "sticky",
    threshold: 3,
    dataMatchKeys: ["label"],
    selected: selected,
    dataSource: dataSource
  });
  searchInput.name = "participatory_space_search_".concat(inputIndex);
  return ac;
};
document.addEventListener("DOMContentLoaded", function () {
  var searchElements = document.querySelectorAll("input.participatory-space-search");
  if (searchElements.length < 1) {
    return;
  }
  getParticipatorySpaces().then(function (spaces) {
    var index = 0;
    var _iterator6 = _createForOfIteratorHelper(searchElements),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var searchInput = _step6.value;
        createAutocomplete(searchInput, spaces, index);
        index += 1;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/proposal_infinite_edit.js":
/*!************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/proposal_infinite_edit.js ***!
  \************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $limitiedTimeLabel = $("label[for='component_settings_proposal_edit_time_limited']");
  var $limitedTimeRadioButton = $("#component_settings_proposal_edit_time_limited");
  var $infiniteTimeRadioButton = $("#component_settings_proposal_edit_time_infinite");
  var $editTimeContainer = $(".proposal_edit_before_minutes_container");
  $editTimeContainer.detach().appendTo($limitiedTimeLabel);
  if ($infiniteTimeRadioButton.is(":checked")) {
    $editTimeContainer.hide();
  }
  $limitedTimeRadioButton.on("click", function () {
    $editTimeContainer.show();
  });
  $infiniteTimeRadioButton.on("click", function () {
    $editTimeContainer.hide();
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/resources_permissions.js":
/*!***********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/resources_permissions.js ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_subform_multi_toggler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/subform_multi_toggler.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/subform_multi_toggler.component.js");

$(function () {
  var subformMultiToggler = new src_decidim_admin_subform_multi_toggler_component__WEBPACK_IMPORTED_MODULE_0__["default"]({
    controllerSelect: $("input[name$=\\[authorization_handlers\\]\\[\\]]"),
    subformWrapperClass: "authorization-handler",
    globalWrapperSelector: "fieldset"
  });
  subformMultiToggler.run();
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/scope_picker_enabler.component.js":
/*!********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/scope_picker_enabler.component.js ***!
  \********************************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $ComponentScopeEnabled = $("#component_settings_scopes_enabled");
  var $ComponentScopeId = $("#component_settings_scope_id");
  if ($(".edit_component, .new_component").length > 0) {
    $ComponentScopeEnabled.on("change", function (event) {
      var checked = event.target.checked;
      $ComponentScopeId.attr("disabled", !checked);
    });
    $ComponentScopeId.attr("disabled", !$ComponentScopeEnabled.prop("checked"));
  }
});

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

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sortable.js":
/*!**********************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sortable.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/sort_list.component */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sort_list.component.js");


// Once in DOM
$(function () {
  var selector = ".js-sortable";
  var $sortable = $(selector);
  $sortable.each(function (index, elem) {
    var item = elem.id ? "#".concat(elem.id) : selector;
    (0,src_decidim_admin_sort_list_component__WEBPACK_IMPORTED_MODULE_0__["default"])(item, {
      handle: "li",
      forcePlaceholderSize: true,
      placeholderClass: "sort-placeholder"
    });
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/subform_multi_toggler.component.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/subform_multi_toggler.component.js ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubformMultiTogglerComponent; }
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
var SubformMultiTogglerComponent = /*#__PURE__*/function () {
  function SubformMultiTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SubformMultiTogglerComponent);
    this.controllerSelect = options.controllerSelect;
    this.subformWrapperClass = options.subformWrapperClass;
    this.globalWrapperSelector = options.globalWrapperSelector;
    this._bindEvent();
    this._runAll();
  }
  _createClass(SubformMultiTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;
      this.controllerSelect.each(function (idx, el) {
        _this.run(el);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var $target = $(target);
      var subformWrapperClass = this.subformWrapperClass;
      var value = $target.val();
      var $form = $target.parents(this.globalWrapperSelector);
      var $selectedSubform = $form.find("#".concat(subformWrapperClass, "-").concat(value));
      if ($target.prop("checked")) {
        $selectedSubform.find("input,textarea,select").prop("disabled", false);
        $selectedSubform.show();
      } else {
        $selectedSubform.find("input,textarea,select").prop("disabled", true);
        $selectedSubform.hide();
      }
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      this.controllerSelect.on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }]);
  return SubformMultiTogglerComponent;
}();


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/subform_toggler.component.js":
/*!***************************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/subform_toggler.component.js ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubformTogglerComponent; }
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
var SubformTogglerComponent = /*#__PURE__*/function () {
  function SubformTogglerComponent() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SubformTogglerComponent);
    this.controllerSelect = options.controllerSelect;
    this.subformWrapperClass = options.subformWrapperClass;
    this.globalWrapperSelector = options.globalWrapperSelector;
    this._bindEvent();
    this._runAll();
  }
  _createClass(SubformTogglerComponent, [{
    key: "_runAll",
    value: function _runAll() {
      var _this = this;
      this.controllerSelect.each(function (idx, el) {
        _this.run(el);
      });
    }
  }, {
    key: "run",
    value: function run(target) {
      var $target = $(target);
      var subformWrapperClass = this.subformWrapperClass;
      var value = $target.val();
      var $form = $target.parents(this.globalWrapperSelector);
      var $subforms = $form.find(".".concat(subformWrapperClass));
      var $selectedSubform = $subforms.filter("#".concat(subformWrapperClass, "-").concat(value));
      $subforms.find("input,textarea,select").prop("disabled", true);
      $subforms.hide();
      $selectedSubform.find("input,textarea,select").prop("disabled", false);
      $selectedSubform.show();
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var _this2 = this;
      this.controllerSelect.on("change", function (event) {
        _this2.run(event.target);
      });
    }
  }]);
  return SubformTogglerComponent;
}();


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/tab_focus.js":
/*!***********************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/tab_focus.js ***!
  \***********************************************************************************************************************/
/***/ (function() {

/**
 * When switching tabs in i18n fields, autofocus on the input to save clicks #212
 */
$(function () {
  // Event launched by foundation
  $("[data-tabs]").on("change.zf.tabs", function (event) {
    var $container = $(event.target).parent().next(".tabs-content").find(".tabs-panel.is-active");
    // Detect rich text editor inside the tabs-panel
    var $content = $container.find(".editor .ProseMirror");
    if ($content.length > 0) {
      $content.focus();
      // Detect if inside the tabs-panel have an input
    } else {
      $content = $container.find("input:first");
      if ($content.length > 0) {
        $content.focus();
      }
    }
  });
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/toggle_nav.js":
/*!************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/toggle_nav.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toggleNav; }
/* harmony export */ });
/* eslint-disable require-jsdoc */
var showHideNav = function showHideNav(evt) {
  var navMenu = document.querySelector(".layout-wrapper");
  evt.preventDefault();
  navMenu.classList.toggle("is-nav-open");
};
function toggleNav() {
  var navTrigger = document.querySelector(".menu-trigger");
  if (navTrigger) {
    navTrigger.addEventListener("click", showHideNav);
  }
}

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/triadic_color_picker.js":
/*!**********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/triadic_color_picker.js ***!
  \**********************************************************************************************************************************/
/***/ (function() {

// This script is used to generate the triadic colors for the primary color
// picker. It is used in the organization settings page.
//
// It is based on the following article:
// https://css-tricks.com/converting-color-spaces-in-javascript/
//

var hslToHex = function hslToHex(hue, saturation, light) {
  var lightness = light / 100;
  var adjustmentFactor = saturation * Math.min(lightness, 1 - lightness) / 100;
  var getColorComponent = function getColorComponent(colorIndex) {
    var colorWheelPosition = (colorIndex + hue / 30) % 12;
    var color = lightness - adjustmentFactor * Math.max(Math.min(colorWheelPosition - 3, 9 - colorWheelPosition, 1), -1);
    // convert to Hex and prefix "0" if needed
    return Math.round(255 * color).toString(16).padStart(2, "0");
  };
  return "#".concat(getColorComponent(0)).concat(getColorComponent(8)).concat(getColorComponent(4));
};
var hexToHsl = function hexToHsl(hexColor) {
  // Convert hex to RGB first
  var red = 0;
  var green = 0;
  var blue = 0;
  if (hexColor.length === 4) {
    red = "0x".concat(hexColor[1]).concat(hexColor[1]);
    green = "0x".concat(hexColor[2]).concat(hexColor[2]);
    blue = "0x".concat(hexColor[3]).concat(hexColor[3]);
  } else if (hexColor.length === 7) {
    red = "0x".concat(hexColor[1]).concat(hexColor[2]);
    green = "0x".concat(hexColor[3]).concat(hexColor[4]);
    blue = "0x".concat(hexColor[5]).concat(hexColor[6]);
  }
  // Then to HSL
  red /= 255;
  green /= 255;
  blue /= 255;
  var cmin = Math.min(red, green, blue);
  var cmax = Math.max(red, green, blue);
  var delta = cmax - cmin;
  var hue = 0;
  var saturation = 0;
  var lightness = 0;
  if (delta === 0) {
    hue = 0;
  } else if (cmax === red) {
    hue = (green - blue) / delta % 6;
  } else if (cmax === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }
  hue = Math.round(hue * 60);
  if (hue < 0) {
    hue += 360;
  }
  lightness = (cmax + cmin) / 2;
  if (delta === 0) {
    saturation = 0;
  } else {
    saturation = delta / (1 - Math.abs(2 * lightness - 1));
  }
  ;
  saturation = Number((saturation * 100).toFixed(1));
  lightness = Number((lightness * 100).toFixed(1));
  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
};
var generateHslaColors = function generateHslaColors(saturation, lightness) {
  var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 360;
  var huedelta = Math.trunc(360 / amount);
  return Array.from({
    length: amount
  }, function (_array, index) {
    return {
      hue: index * huedelta,
      saturation: saturation,
      lightness: lightness
    };
  });
};
var setTheme = function setTheme(primary, saturation) {
  // Lightness parameter is not used, the default is auto-calculated
  var _hexToHsl = hexToHsl(primary),
    hue = _hexToHsl.hue,
    defaultS = _hexToHsl.saturation,
    lightness = _hexToHsl.lightness;
  var secondary = hslToHex(hue + 120, saturation || defaultS, lightness);
  var tertiary = hslToHex(hue - 120, saturation || defaultS, lightness);
  document.documentElement.style.setProperty("--primary", primary);
  document.documentElement.style.setProperty("--secondary", secondary);
  document.documentElement.style.setProperty("--tertiary", tertiary);
  document.getElementById("preview-primary").value = primary;
  document.getElementById("preview-secondary").value = secondary;
  (document.getElementById("preview-tertiary") || {}).value = tertiary;
};
document.addEventListener("DOMContentLoaded", function () {
  var selector = document.querySelector("#primary-selector");
  if (selector) {
    var primary = document.querySelector("#preview-primary");
    var primarySaturation = document.querySelector("#primary-saturation");
    var updateButton = document.querySelector("#set-colors");
    generateHslaColors(50, 50).forEach(function (color) {
      var div = document.createElement("div");
      var hex = hslToHex(color.hue, color.saturation, color.lightness);
      div.style.backgroundColor = hex;
      div.dataset.value = hex;
      div.style.flex = 1;
      selector.appendChild(div);
    });

    // Use the previous primary and secondary colors as the default selection
    document.documentElement.style.setProperty("--primary", document.querySelector("#organization_primary_color").value);
    document.documentElement.style.setProperty("--secondary", document.querySelector("#organization_secondary_color").value);
    document.documentElement.style.setProperty("--tertiary", document.querySelector("#organization_tertiary_color").value);
    selector.addEventListener("click", function (_ref) {
      var value = _ref.target.dataset.value;
      return setTheme(value, Number(primarySaturation.value));
    });
    primarySaturation.addEventListener("input", function (_ref2) {
      var value = _ref2.target.value;
      return setTheme(primary.value, Number(value));
    });
    updateButton.addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("#organization_primary_color").value = document.querySelector("#preview-primary").value;
      document.querySelector("#organization_secondary_color").value = document.querySelector("#preview-secondary").value;
      document.querySelector("#organization_tertiary_color").value = document.querySelector("#preview-tertiary").value;
    });
  }
});

/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/welcome_notification.js":
/*!**********************************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/welcome_notification.js ***!
  \**********************************************************************************************************************************/
/***/ (function() {

$(function () {
  var $scope = $("#welcome-notification-details");
  var $sendNotificationCheckbox = $("#organization_send_welcome_notification", $scope);
  var $customizeCheckbox = $("#organization_customize_welcome_notification", $scope);
  var toggleVisibility = function toggleVisibility() {
    if ($sendNotificationCheckbox.is(":checked")) {
      $(".send-welcome-notification-details", $scope).show();
    } else {
      $(".send-welcome-notification-details", $scope).hide();
    }
    if ($customizeCheckbox.is(":checked")) {
      $(".customize-welcome-notification-details", $scope).show();
    } else {
      $(".customize-welcome-notification-details", $scope).hide();
    }
  };
  $($sendNotificationCheckbox).click(function () {
    return toggleVisibility();
  });
  $($customizeCheckbox).click(function () {
    return toggleVisibility();
  });
  toggleVisibility();
});

/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/autocomplete.js":
/*!************************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/autocomplete.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoComplete; }
/* harmony export */ });
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarekraafat_autocomplete_js_dist_css_autoComplete_02_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarekraafat/autocomplete.js/dist/css/autoComplete.02.css */ "./node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
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
/* eslint max-lines: ["error", 350] */


// Styles from node_modules/@tarekraafat/autocomplete.js
// It needs to be done in JS because postcss-import does not find files in node_modules/

var AutoComplete = /*#__PURE__*/function () {
  function AutoComplete(el) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, AutoComplete);
    this.element = el;
    this.stickySelectedSpan = null;
    this.clearStickySelectionSpan = null;
    this.stickyHiddenInput = null;
    this.promptDiv = null;
    var thresholdTemp = options.threshold || 2;
    this.options = Object.assign({
      // Defines name of the hidden input (e.g. assembly_member[user_id])
      name: null,
      // Placeholder of the visible input field
      placeholder: "",
      // Defines what happens after user has selected value from suggestions
      // sticky - Allows selecting a single value and not editing the value after selected (e.g. as the admin autocomplete fields)
      // single - Allows selecting a single value and editing the selected text after the selection (e.g. geocoding field)
      // multi - Allows selecting multiple values
      // null (default) - Disable selection event handling in this class
      mode: null,
      // Defines if we show input help (e.g. "Type at least three characters to search") or not.
      searchPrompt: false,
      // Defines search prompt message, only shown if showPrompt is enabled!
      searchPromptText: "Type at least ".concat(thresholdTemp, " characters to search"),
      // Defines items that are selected already when page is loaded before user selects them. (e.g. when form submit fails)
      selected: null,
      // Defines how many characters input has to have before we start searching
      threshold: thresholdTemp,
      // Defines how many results to show in the autocomplete selection list
      // by maximum.
      maxResults: 10,
      // Defines the data keys against which to match the user input when
      // searching through the results. For example, when the following
      // data is returned by the API:
      //   { id: 123, name: "John", nickname: "john", __typename: "User" }
      //
      // You can define the data keys array as ["name", "nickname"] in
      // which case the results shown to user would be only those that
      // have matching text in these defined fields.
      dataMatchKeys: null,
      // The data source is a method that gets the callback parameter as
      // its first argument which should be called with the results array
      // once they are returned by the API.
      // For example:
      //   (query, callback) => {
      //     (async () => {
      //       const results = await callAjax(`/api/url?query=${query}`);
      //       callback(results);
      //     })();
      //   }
      //
      // Signature: (callback: Function)
      dataSource: function dataSource() {
        return [];
      },
      // Filters the data list returned by the data source before it is shown
      // to the user. Can be used e.g. to hide already selected values from
      // the list.
      dataFilter: null,
      // Delay in milliseconds how long to wait after user action before
      // doing a backend request.
      delay: 200,
      // Allows modifying the suggested list before they are displayed
      // Signature: (element: HTMLElement, value: Object)
      modifyList: null,
      // Allows modifying the suggested items before they are displayed in the list
      // Signature: (element: HTMLElement, value: Object)
      modifyResult: null
    }, options);
    this.autocomplete = new (_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_0___default())({
      selector: function selector() {
        return _this.element;
      },
      diacritics: true,
      placeHolder: options.placeholder,
      // Delay (milliseconds) before autocomplete engine starts. It is preventing many queries when user is typing fast.
      debounce: 200,
      threshold: this.options.threshold,
      data: {
        keys: this.options.dataMatchKeys,
        src: function () {
          var _src = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
            var fetchResults;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  fetchResults = function fetchResults() {
                    return new Promise(function (resolve) {
                      _this.options.dataSource(query, resolve);
                    });
                  };
                  _context.prev = 1;
                  _context.next = 4;
                  return fetchResults();
                case 4:
                  return _context.abrupt("return", _context.sent);
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](1);
                  return _context.abrupt("return", _context.t0);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[1, 7]]);
          }));
          function src(_x) {
            return _src.apply(this, arguments);
          }
          return src;
        }(),
        filter: function filter(list) {
          var results = list.filter(function (item, idx, arr) {
            return arr.findIndex(function (val) {
              return val.value === item.value;
            }) === idx;
          });
          if (_this.options.dataFilter) {
            return _this.options.dataFilter(results);
          }
          return results;
        }
      },
      resultsList: {
        maxResults: this.options.maxResults,
        element: function element(item, data) {
          if (!_this.options.modifyList) {
            return;
          }
          _this.options.modifyList(item, data);
        }
      },
      resultItem: {
        element: function element(item, data) {
          if (!_this.options.modifyResult) {
            return;
          }
          _this.options.modifyResult(item, data.value);
        }
      },
      events: {
        input: {
          blur: function blur() {
            _this.promptDiv.style.display = "none";
          }
        }
      }
    });
    this.acWrapper = this.element.closest(".autoComplete_wrapper");
    this.element.ac = this.autocomplete;

    // Stop input field from bubbling open and close events to parent elements,
    // because foundation closes modal from these events.
    var stopPropagation = function stopPropagation(event) {
      event.stopPropagation();
    };
    this.element.addEventListener("close", stopPropagation);
    this.element.addEventListener("open", stopPropagation);
    this.createPromptDiv();
    switch (this.options.mode) {
      case "sticky":
        this.createStickySelect(this.options.name);
        break;
      case "multi":
        this.createMultiSelect(this.options.name);
        break;
      default:
    }
  }
  _createClass(AutoComplete, [{
    key: "setInput",
    value: function setInput(value) {
      this.autocomplete.input.value = value;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      switch (this.options.mode) {
        case "single":
          this.setInput(event.detail.selection.value[event.detail.selection.key]);
          break;
        case "sticky":
          this.handleStickyEvents(event);
          break;
        case "multi":
          this.handleMultiEvents(event);
          break;
        default:
      }
    }
  }, {
    key: "handleMultiEvents",
    value: function handleMultiEvents(event) {
      switch (event.type) {
        case "selection":
          this.addMultiSelectItem(event.detail.selection);
          break;
        default:
      }
    }
  }, {
    key: "handleStickyEvents",
    value: function handleStickyEvents(event) {
      switch (event.type) {
        case "selection":
          this.addStickySelectItem(event.detail.selection);
          break;
        case "click":
          if (event.target === this.clearStickySelectionSpan) {
            this.removeStickySelection();
          }
          break;
        case "keyup":
          if (this.stickyHiddenInput.value !== "" && event.target === this.element && (["Escape", "Backspace", "Delete"].includes(event.key) || /^[a-z0-9]$/i.test(event.key))) {
            this.removeStickySelection();
          } else if (this.options.searchPrompt) {
            if (this.stickyHiddenInput.value === "" && this.element.value.length < this.options.threshold) {
              this.promptDiv.style.display = "block";
            } else {
              this.promptDiv.style.display = "none";
            }
          }
          break;
        default:
      }
    }
  }, {
    key: "createHiddenInput",
    value: function createHiddenInput(value) {
      var hiddenInput = document.createElement("input");
      hiddenInput.name = this.options.name;
      hiddenInput.type = "hidden";
      if (value) {
        hiddenInput.value = value;
      }
      this.acWrapper.prepend(hiddenInput);
      return hiddenInput;
    }
  }, {
    key: "removeStickySelection",
    value: function removeStickySelection() {
      this.stickyHiddenInput.value = "";
      this.element.placeholder = this.options.placeholder;
      this.clearStickySelectionSpan.style.display = "none";
      this.stickySelectedSpan.style.display = "none";
    }
  }, {
    key: "addStickySelectItem",
    value: function addStickySelectItem(selection) {
      this.stickyHiddenInput.value = selection.value.value;
      this.element.placeholder = "";
      this.stickySelectedSpan.innerHTML = selection.value[selection.key];
      this.stickySelectedSpan.style.display = "block";
      this.clearStickySelectionSpan.style.display = "block";
      this.setInput("");
    }
  }, {
    key: "addMultiSelectItem",
    value: function addMultiSelectItem(selection) {
      var _this2 = this;
      this.setInput("");
      var chosen = document.createElement("span");
      chosen.classList.add("label", "primary", "autocomplete__selected-item", "multi");
      chosen.innerHTML = selection.value[selection.key];
      var clearSelection = document.createElement("span");
      clearSelection.classList.add("clear-multi-selection");
      clearSelection.innerHTML = "&times;";
      clearSelection.setAttribute("data-remove", selection.value.value);
      clearSelection.addEventListener("click", function (evt) {
        var hiddenInput = _this2.acWrapper.querySelector("input[type='hidden'][value='".concat(selection.value.value, "']"));
        if (hiddenInput) {
          hiddenInput.remove();
          evt.target.parentElement.remove();
        }
      });
      chosen.appendChild(clearSelection);
      var multiSelectWrapper = this.acWrapper.querySelector(".multiselect");
      var inputContainer = multiSelectWrapper.querySelector("span.input-container");
      multiSelectWrapper.insertBefore(chosen, inputContainer);
      this.createHiddenInput(selection.value.value);
    }
  }, {
    key: "createStickySelect",
    value: function createStickySelect() {
      var _this3 = this;
      this.stickySelectedSpan = document.createElement("span");
      this.stickySelectedSpan.classList.add("autocomplete__selected-item", "sticky");
      this.stickySelectedSpan.style.display = "none";
      this.stickySelectedSpan.addEventListener("click", function () {
        return _this3.element.focus();
      });
      this.stickyHiddenInput = this.createHiddenInput();
      this.clearStickySelectionSpan = document.createElement("span");
      this.clearStickySelectionSpan.className = "clear-sticky-selection";
      this.clearStickySelectionSpan.innerHTML = "&times;";
      this.clearStickySelectionSpan.style.display = "none";
      this.clearStickySelectionSpan.addEventListener("click", this);
      this.element.addEventListener("selection", this);
      this.element.addEventListener("keyup", this);
      this.acWrapper.insertBefore(this.clearStickySelectionSpan, this.element);
      this.acWrapper.insertBefore(this.stickySelectedSpan, this.element);
      if (this.options.selected) {
        this.addStickySelectItem(this.options.selected);
      }
    }
  }, {
    key: "createMultiSelect",
    value: function createMultiSelect() {
      var _this4 = this;
      var multiSelectWrapper = document.createElement("div");
      multiSelectWrapper.classList.add("multiselect");
      var inputContainer = document.createElement("span");
      inputContainer.classList.add("input-container");
      multiSelectWrapper.appendChild(inputContainer);
      this.acWrapper.prepend(multiSelectWrapper);
      inputContainer.appendChild(this.element);
      this.element.addEventListener("selection", this);
      multiSelectWrapper.addEventListener("click", function () {
        _this4.element.focus();
      });
      if (this.options.selected) {
        this.options.selected.forEach(function (selection) {
          _this4.addMultiSelectItem(selection);
        });
      }
    }
  }, {
    key: "createPromptDiv",
    value: function createPromptDiv() {
      this.promptDiv = document.createElement("div");
      this.promptDiv.classList.add("search-prompt");
      this.promptDiv.style.display = "none";
      this.promptDiv.innerHTML = this.options.searchPromptText;
      this.acWrapper.appendChild(this.promptDiv);
    }
  }]);
  return AutoComplete;
}();


/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/check_boxes_tree.js":
/*!****************************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/check_boxes_tree.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CheckBoxesTree; }
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
/**
 * CheckBoxesTree component.
 */
var CheckBoxesTree = /*#__PURE__*/function () {
  function CheckBoxesTree() {
    var _this = this;
    _classCallCheck(this, CheckBoxesTree);
    this.checkboxesTree = Array.from(document.querySelectorAll("[data-checkboxes-tree]"));
    if (!this.checkboxesTree.length) {
      return;
    }
    this.checkboxesLeaf = Array.from(document.querySelectorAll("[data-children-checkbox] input"));

    // handles the click in a tree, what means to mark/unmark every children
    this.checkboxesTree.forEach(function (input) {
      return input.addEventListener("click", function (event) {
        return _this.checkTheCheckBoxes(event.target);
      });
    });
    // handles the click in a leaf, what means to update the parent possibly
    this.checkboxesLeaf.forEach(function (input) {
      return input.addEventListener("change", function (event) {
        return _this.checkTheCheckParent(event.target);
      });
    });
    // Review parent checkboxes on initial load
    this.checkboxesLeaf.forEach(function (input) {
      return _this.checkTheCheckParent(input);
    });
  }

  /**
   * Set checkboxes as checked if included in given values
   * @public
   * @param {Array} checkboxes - array of checkboxs to check
   * @param {Array} values - values of checkboxes that should be checked
   * @returns {Void} - Returns nothing.
   */
  _createClass(CheckBoxesTree, [{
    key: "updateChecked",
    value: function updateChecked(checkboxes, values) {
      var _this2 = this;
      checkboxes.each(function (_idx, checkbox) {
        if (checkbox.value === "" && values.length === 1 || checkbox.value !== "" && values.includes(checkbox.value)) {
          checkbox.checked = true;
          _this2.checkTheCheckBoxes(checkbox);
          _this2.checkTheCheckParent(checkbox);
        }
      });
    }

    /**
     * Set the container form(s) for the component, to disable ignored filters before submitting them
     * @public
     * @param {query} theForm - form or forms where the component will be used
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "setContainerForm",
    value: function setContainerForm(theForm) {
      theForm.on("submit ajax:before", function () {
        theForm.find(".ignore-filters input, input.ignore-filter").each(function (_idx, elem) {
          elem.disabled = true;
        });
      });
      theForm.on("ajax:send", function () {
        theForm.find(".ignore-filters input, input.ignore-filter").each(function (_idx, elem) {
          elem.disabled = false;
        });
      });
    }

    /**
     * Handles the click action on any checkbox.
     * @private
     * @param {Input} target - the input that has been checked
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "checkTheCheckBoxes",
    value: function checkTheCheckBoxes(target) {
      var _this3 = this;
      var targetChecks = target.dataset.checkboxesTree;
      var checkStatus = target.checked;
      // NOTE: Note the regex CSS query, it selects those [data-children-checkbox] ended with the target id
      var allChecks = document.querySelectorAll("[data-children-checkbox$=\"".concat(targetChecks, "\"] input"));
      allChecks.forEach(function (input) {
        input.checked = checkStatus;
        input.indeterminate = false;
        input.classList.add("ignore-filter");

        // recursive call if the input it is also a tree
        if (input.dataset.checkboxesTree) {
          _this3.checkTheCheckBoxes(input);
        }
      });
    }

    /**
     * Update children checkboxes state when the current selection changes
     * @private
     * @param {Input} input - the checkbox to check its parent
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "checkTheCheckParent",
    value: function checkTheCheckParent(input) {
      var key = input.parentNode.dataset.childrenCheckbox;
      // search in the checkboxes array if some id ends with the childrenCheckbox key, what means it is the parent
      var parentCheck = this.checkboxesTree.find(function (_ref) {
        var id = _ref.id;
        return new RegExp("".concat(key, "$"), "i").test(id);
      });
      if (typeof parentCheck === "undefined") {
        return;
      }

      // search for leaves with the same parent, what means they are siblings
      var totalCheckSiblings = this.checkboxesLeaf.filter(function (node) {
        return node.parentNode.dataset.childrenCheckbox === key;
      });
      var checkedSiblings = totalCheckSiblings.filter(function (checkbox) {
        return checkbox.checked;
      });
      var indeterminateSiblings = totalCheckSiblings.filter(function (checkbox) {
        return checkbox.indeterminate;
      });
      if (checkedSiblings.length === 0 && indeterminateSiblings.length === 0) {
        parentCheck.checked = false;
        parentCheck.indeterminate = false;
      } else if (checkedSiblings.length === totalCheckSiblings.length && indeterminateSiblings.length === 0) {
        parentCheck.checked = true;
        parentCheck.indeterminate = false;
      } else {
        parentCheck.checked = false;
        parentCheck.indeterminate = true;
      }
      totalCheckSiblings.forEach(function (sibling) {
        if (parentCheck.indeterminate && !sibling.indeterminate) {
          sibling.classList.remove("ignore-filter");
        } else {
          sibling.classList.add("ignore-filter");
        }
      });

      // recursive call if there are more children
      if ("childrenCheckbox" in parentCheck.parentNode.dataset) {
        this.checkTheCheckParent(parentCheck);
      }
    }
  }]);
  return CheckBoxesTree;
}();


/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/configuration.js":
/*!*************************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/configuration.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Configuration; }
/* harmony export */ });
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
var Configuration = /*#__PURE__*/function () {
  function Configuration() {
    _classCallCheck(this, Configuration);
    this.config = {};
  }
  _createClass(Configuration, [{
    key: "set",
    value: function set(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (_typeof(key) === "object") {
        this.config = _objectSpread(_objectSpread({}, this.config), key);
      } else {
        this.config[key] = value;
      }
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.config[key];
    }
  }]);
  return Configuration;
}();


/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/delayed.js":
/*!*******************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/delayed.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ delayed; }
/* harmony export */ });
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 * @param {Object} context - the context for the called function.
 * @param {Function} func - the function to be executed.
 * @param {int} wait - number of milliseconds to wait before executing the function.
 * @private
 * @returns {Void} - Returns nothing.
 */
function delayed(context, func, wait) {
  var timeout = null;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      timeout = null;
      Reflect.apply(func, context, args);
    }, wait);
  };
}

/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/form_filter.js":
/*!***********************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/form_filter.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormFilterComponent; }
/* harmony export */ });
/* harmony import */ var src_decidim_delayed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/delayed */ "./gems/decidim-module-core/app/packs/src/decidim/delayed.js");
/* harmony import */ var src_decidim_check_boxes_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/check_boxes_tree */ "./gems/decidim-module-core/app/packs/src/decidim/check_boxes_tree.js");
/* harmony import */ var src_decidim_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/history */ "./gems/decidim-module-core/app/packs/src/decidim/history.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
/* eslint-disable no-div-regex, no-useless-escape, no-param-reassign, id-length */
/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true}] */

/**
 * A plain Javascript component that handles the form filter.
 * @class
 * @augments Component
 */




var FormFilterComponent = /*#__PURE__*/function () {
  function FormFilterComponent($form) {
    _classCallCheck(this, FormFilterComponent);
    this.$form = $form;
    this.id = this.$form.attr("id") || this._getUID();
    this.mounted = false;
    this.changeEvents = true;
    this.theCheckBoxesTree = new src_decidim_check_boxes_tree__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this._updateInitialState();
    this._onFormChange = (0,src_decidim_delayed__WEBPACK_IMPORTED_MODULE_0__["default"])(this, this._onFormChange.bind(this));
    this._onPopState = this._onPopState.bind(this);
    if (window.Decidim.PopStateHandler) {
      this.popStateSubmiter = false;
    } else {
      this.popStateSubmiter = true;
      window.Decidim.PopStateHandler = this.id;
    }
  }

  /**
   * Handles the logic for unmounting the component
   * @public
   * @returns {Void} - Returns nothing
   */
  _createClass(FormFilterComponent, [{
    key: "unmountComponent",
    value: function unmountComponent() {
      if (this.mounted) {
        this.mounted = false;
        this.$form.off("change", "input, select", this._onFormChange);
        (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.unregisterCallback)("filters-".concat(this.id));
      }
    }

    /**
     * Handles the logic for mounting the component
     * @public
     * @returns {Void} - Returns nothing
     */
  }, {
    key: "mountComponent",
    value: function mountComponent() {
      var _this = this;
      if (this.$form.length > 0 && !this.mounted) {
        this.mounted = true;
        var queue = 0;
        var contentContainer = $("main");
        if (contentContainer.length === 0 && this.$form.data("remoteFill")) {
          contentContainer = this.$form.data("remoteFill");
        }
        this.$form.on("change", "input:not([data-disable-dynamic-change]), select:not([data-disable-dynamic-change])", this._onFormChange);
        this.currentFormRequest = null;
        this.$form.on("ajax:beforeSend", function (e) {
          if (_this.currentFormRequest) {
            _this.currentFormRequest.abort();
          }
          _this.currentFormRequest = e.originalEvent.detail[0];
          queue += 1;
          if (queue > 0 && contentContainer.length > 0 && !contentContainer.hasClass("spinner-container")) {
            contentContainer.addClass("spinner-container");
          }
        });
        $(document).on("ajax:success", function () {
          queue -= 1;
          if (queue <= 0 && contentContainer.length > 0) {
            contentContainer.removeClass("spinner-container");
          }
        });
        $(document).on("ajax:error", function () {
          queue -= 1;
          if (queue <= 0 && contentContainer.length > 0) {
            contentContainer.removeClass("spinner-container");
          }
          _this.$form.find(".spinner-container").addClass("hide");
        });
        this.theCheckBoxesTree.setContainerForm(this.$form);
        (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.registerCallback)("filters-".concat(this.id), function (currentState) {
          _this._onPopState(currentState);
        });
      }
    }

    /**
     * Sets path in the browser history with the initial filters state, to allow to restoring it when using browser history.
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_updateInitialState",
    value: function _updateInitialState() {
      var _this$_currentStateAn = this._currentStateAndPath(),
        _this$_currentStateAn2 = _slicedToArray(_this$_currentStateAn, 2),
        initialPath = _this$_currentStateAn2[0],
        initialState = _this$_currentStateAn2[1];
      initialState._path = initialPath;
      (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.replaceState)(null, initialState);
    }

    /**
     * Finds the current location.
     * @param {boolean} withHost - include the host part in the returned location
     * @private
     * @returns {String} - Returns the current location.
     */
  }, {
    key: "_getLocation",
    value: function _getLocation() {
      var withHost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var currentState = (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.state)();
      var path = "";
      if (currentState && currentState._path) {
        path = currentState._path;
      } else {
        path = window.location.pathname + window.location.search + window.location.hash;
      }
      if (withHost) {
        return window.location.origin + path;
      }
      return path;
    }

    /**
     * Parse current location and get filter values.
     * @private
     * @returns {Object} - An object where a key correspond to a filter field
     *                     and the value is the current value for the filter.
     */
  }, {
    key: "_parseLocationFilterValues",
    value: function _parseLocationFilterValues() {
      // Every location param is constructed like this: filter[key]=value
      var regexpResult = decodeURIComponent(this._getLocation()).match(/filter\[([^\]]*)\](?:\[\])?=([^&]*)/g);

      // The RegExp g flag returns null or an array of coincidences. It does not return the match groups
      if (regexpResult) {
        var filterParams = regexpResult.reduce(function (acc, result) {
          var _result$match = result.match(/filter\[([^\]]*)\](\[\])?=([^&]*)/),
            _result$match2 = _slicedToArray(_result$match, 4),
            key = _result$match2[1],
            array = _result$match2[2],
            value = _result$match2[3];
          if (array) {
            if (!acc[key]) {
              acc[key] = [];
            }
            acc[key].push(value);
          } else {
            acc[key] = value;
          }
          return acc;
        }, {});
        return filterParams;
      }
      return null;
    }

    /**
     * Parse current location and get the current order.
     * @private
     * @returns {string} - The current order
     */
  }, {
    key: "_parseLocationOrderValue",
    value: function _parseLocationOrderValue() {
      var url = this._getLocation();
      var match = url.match(/order=([^&]*)/);
      var $orderMenu = this.$form.find(".order-by .menu");
      var order = $orderMenu.find(".menu a:first").data("order");
      if (match) {
        order = match[1];
      }
      return order;
    }

    /**
     * Clears the form to start with a clean state.
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_clearForm",
    value: function _clearForm() {
      this.$form.find("input[type=checkbox]").each(function (index, element) {
        element.checked = element.indeterminate = false;
      });
      this.$form.find("input[type=radio]").attr("checked", false);

      // This ensure the form is reset in a valid state where a fieldset of
      // radio buttons has the first selected.
      this.$form.find("fieldset input[type=radio]:first").each(function () {
        // I need the this to iterate a jQuery collection
        $(this)[0].checked = true; // eslint-disable-line no-invalid-this
      });
    }

    /**
     * Handles the logic when going back to a previous state in the filter form.
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_onPopState",
    value: function _onPopState() {
      var _this2 = this;
      this.changeEvents = false;
      this._clearForm();
      var filterParams = this._parseLocationFilterValues();
      var currentOrder = this._parseLocationOrderValue();
      this.$form.find("input.order_filter").val(currentOrder);
      if (filterParams) {
        var fieldIds = Object.keys(filterParams);

        // Iterate the filter params and set the correct form values
        fieldIds.forEach(function (fieldName) {
          var value = filterParams[fieldName];
          if (Array.isArray(value)) {
            var checkboxes = _this2.$form.find("input[type=checkbox][name=\"filter[".concat(fieldName, "][]\"]"));
            _this2.theCheckBoxesTree.updateChecked(checkboxes, value);
          } else {
            _this2.$form.find("*[name=\"filter[".concat(fieldName, "]\"]")).each(function (index, element) {
              switch (element.type) {
                case "hidden":
                  break;
                case "radio":
                case "checkbox":
                  element.checked = value === element.value;
                  break;
                default:
                  element.value = value;
              }
            });
          }
        });
      }

      // Only one instance should submit the form on browser history navigation
      if (this.popStateSubmiter) {
        Rails.fire(this.$form[0], "submit");
      }
      this.changeEvents = true;
    }

    /**
     * Handles the logic to update the current location after a form change event.
     * @private
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_onFormChange",
    value: function _onFormChange() {
      if (!this.changeEvents) {
        return;
      }
      var _this$_currentStateAn3 = this._currentStateAndPath(),
        _this$_currentStateAn4 = _slicedToArray(_this$_currentStateAn3, 2),
        newPath = _this$_currentStateAn4[0],
        newState = _this$_currentStateAn4[1];
      var path = this._getLocation(false);
      if (newPath === path) {
        return;
      }
      Rails.fire(this.$form[0], "submit");
      (0,src_decidim_history__WEBPACK_IMPORTED_MODULE_2__.pushState)(newPath, newState);
      this._saveFilters(newPath);
    }

    /**
     * Calculates the path and the state associated to the filters inputs.
     * @private
     * @returns {Array} - Returns an array with the path and the state for the current filters state.
     */
  }, {
    key: "_currentStateAndPath",
    value: function _currentStateAndPath() {
      var formAction = this.$form.attr("action");
      var params = this.$form.find("input:not(.ignore-filter)").serialize();
      var path = "";
      var currentState = {};
      if (formAction.indexOf("?") < 0) {
        path = "".concat(formAction, "?").concat(params);
      } else {
        path = "".concat(formAction, "&").concat(params);
      }
      return [path, currentState];
    }

    /**
     * Generates a unique identifier for the form.
     * @private
     * @returns {String} - Returns a unique identifier
     */
  }, {
    key: "_getUID",
    value: function _getUID() {
      return "filter-form-".concat(new Date().getUTCMilliseconds(), "-").concat(Math.floor(Math.random() * 10000000));
    }

    /**
     * Saves the changed filters on sessionStorage API.
     * @private
     * @param {string} pathWithQueryStrings - path with all the query strings for filter. To be used with backToListLink().
     * @returns {Void} - Returns nothing.
     */
  }, {
    key: "_saveFilters",
    value: function _saveFilters(pathWithQueryStrings) {
      if (!window.sessionStorage) {
        return;
      }
      var pathName = this.$form.attr("action");
      sessionStorage.setItem("filteredParams", JSON.stringify(_defineProperty({}, pathName, pathWithQueryStrings)));
    }
  }]);
  return FormFilterComponent;
}();


/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/history.js":
/*!*******************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/history.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ registerCallback; },
/* harmony export */   pushState: function() { return /* binding */ pushState; },
/* harmony export */   registerCallback: function() { return /* binding */ registerCallback; },
/* harmony export */   replaceState: function() { return /* binding */ replaceState; },
/* harmony export */   state: function() { return /* binding */ state; },
/* harmony export */   unregisterCallback: function() { return /* binding */ unregisterCallback; }
/* harmony export */ });
/* eslint-disable require-jsdoc */
/* eslint-disable no-prototype-builtins, no-restricted-syntax, no-param-reassign */

var callbacks = {};
function registerCallback(callbackId, callback) {
  callbacks[callbackId] = callback;
}
var unregisterCallback = function unregisterCallback(callbackId) {
  callbacks[callbackId] = null;
};
var pushState = function pushState(url) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (window.history) {
    window.history.pushState(state, null, url);
  }
};
var replaceState = function replaceState(url) {
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (window.history) {
    window.history.replaceState(state, null, url);
  }
};
var state = function state() {
  if (window.history) {
    return window.history.state;
  }
  return null;
};
window.onpopstate = function (event) {
  // Ensure the event is caused by user action
  if (event.isTrusted) {
    for (var callbackId in callbacks) {
      if (callbacks.hasOwnProperty(callbackId)) {
        callbacks[callbackId](event.state);
      }
    }
  }
};


/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/input_character_counter.js":
/*!***********************************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/input_character_counter.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputCharacterCounter: function() { return /* binding */ InputCharacterCounter; },
/* harmony export */   createCharacterCounter: function() { return /* binding */ createCharacterCounter; },
/* harmony export */   "default": function() { return /* binding */ InputCharacterCounter; }
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
/* eslint max-lines: ["error", {"max": 350, "skipBlankLines": true}] */

var COUNT_KEY = "%count%";
// How often SR announces the message in relation to maximum characters. E.g.
// if max characters is 1000, screen reader announces the remaining characters
// every 100 (= 0.1 * 1000) characters. This will be "floored" to the closest
// 100 if the maximum characters > 100. E.g. if max characters is 5500, the
// threshold is 500 (= Math.floor(550 / 100) * 100). With 100 or less
// characters, this ratio is omitted and the announce threshold is always set to
// 10.
var SR_ANNOUNCE_THRESHOLD_RATIO = 0.1;
// The number of characters left after which every keystroke will be announced.
var SR_ANNOUNCE_EVERY_THRESHOLD = 10;
var DEFAULT_MESSAGES = {
  charactersAtLeast: {
    one: "at least ".concat(COUNT_KEY, " character"),
    other: "at least ".concat(COUNT_KEY, " characters")
  },
  charactersLeft: {
    one: "".concat(COUNT_KEY, " character left"),
    other: "".concat(COUNT_KEY, " characters left")
  }
};
var MESSAGES = DEFAULT_MESSAGES;
var InputCharacterCounter = /*#__PURE__*/function () {
  function InputCharacterCounter(input) {
    var _this = this;
    _classCallCheck(this, InputCharacterCounter);
    this.$input = input;
    this.$target = $(this.$input.data("remaining-characters"));
    this.minCharacters = parseInt(this.$input.attr("minlength"), 10);
    this.maxCharacters = parseInt(this.$input.attr("maxlength"), 10);
    this.describeByCounter = this.$input.attr("type") !== "hidden" && typeof this.$input.attr("aria-describedby") === "undefined";

    // Define the closest length for the input "gaps" defined by the threshold.
    if (this.maxCharacters > 10) {
      if (this.maxCharacters > 100) {
        this.announceThreshold = Math.floor(this.maxCharacters * SR_ANNOUNCE_THRESHOLD_RATIO);
      } else {
        this.announceThreshold = 10;
      }

      // The number of characters left after which every keystroke will be announced.
      this.announceEveryThreshold = SR_ANNOUNCE_EVERY_THRESHOLD;
    } else {
      this.announceThreshold = 1;
      this.announceEveryThreshold = 1;
    }
    var targetId = this.$target.attr("id");
    if (typeof targetId === "undefined") {
      if (this.$input.attr("id") && this.$input.attr("id").length > 0) {
        targetId = "".concat(this.$input.attr("id"), "_characters");
      } else {
        targetId = "characters_".concat(Math.random().toString(36).substr(2, 9));
      }
    }
    if (this.$target.length > 0) {
      this.$target.attr("id", targetId);
    } else {
      var span = document.createElement("span");
      span.id = targetId;
      span.className = "input-character-counter__text";
      this.$target = $(span);
      var container = document.createElement("span");
      container.className = "input-character-counter__container";
      container.appendChild(span);

      // If input is a hidden for WYSIWYG editor add it at the end
      if (this.$input.parent().is(".editor")) {
        this.$input.parent().after(this.$target);
      } else {
        var wrapper = document.createElement("span");
        wrapper.className = "input-character-counter";

        // The form errors need to be in the same container with the field they
        // belong to for Foundation Abide to show them automatically.
        this.$input.next(".form-error").addBack().wrapAll(wrapper);
        this.$input.after(container);
      }
    }
    if (this.$target.length > 0 && (this.maxCharacters > 0 || this.minCharacters > 0)) {
      // Create the screen reader target element. We do not want to constantly
      // announce every change to screen reader, only occasionally.
      var screenReaderId = "".concat(targetId, "_sr");
      this.$srTarget = $("#".concat(screenReaderId));
      if (!this.$srTarget.length) {
        this.$srTarget = $("<span role=\"status\" id=\"".concat(screenReaderId, "\" class=\"sr-only remaining-character-count-sr\" />"));
        this.$target.before(this.$srTarget);
      }
      this.$target.attr("aria-hidden", "true");
      this.$userInput = this.$input;

      // In WYSIWYG editors (TipTap) we need to find the active editor from the
      // DOM node.
      if (this.$input.parent().is(".editor")) {
        // Wait until the next javascript loop so WYSIWYG editors are created
        setTimeout(function () {
          _this.editor = _this.$input.siblings(".editor-container")[0].querySelector(".ProseMirror").editor;
          _this.$userInput = $(_this.editor.view.dom);
          _this.initialize();
        });
      } else {
        this.initialize();
      }
    }
  }
  _createClass(InputCharacterCounter, [{
    key: "initialize",
    value: function initialize() {
      this.updateInputLength();
      this.previousInputLength = this.inputLength;
      this.bindEvents();
      this.setDescribedBy(true);
    }
  }, {
    key: "setDescribedBy",
    value: function setDescribedBy(active) {
      if (!this.describeByCounter) {
        return;
      }
      if (active) {
        this.$userInput.attr("aria-describedby", this.$srTarget.attr("id"));
      } else {
        this.$userInput.removeAttr("aria-describedby");
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;
      if (this.editor) {
        this.editor.on("update", function () {
          _this2.handleInput();
        });
      } else {
        this.$userInput.on("input", function () {
          _this2.handleInput();
        });
      }
      this.$userInput.on("keyup", function () {
        _this2.updateStatus();
      });
      this.$userInput.on("focus", function () {
        _this2.updateScreenReaderStatus();
      });
      this.$userInput.on("blur", function () {
        _this2.updateScreenReaderStatus();
        _this2.setDescribedBy(true);
      });
      if (this.$userInput.get(0) !== null) {
        this.$userInput.get(0).addEventListener("emoji.added", function () {
          _this2.updateStatus();
        });
      }
      this.updateStatus();
      this.updateScreenReaderStatus();
    }
  }, {
    key: "getInputLength",
    value: function getInputLength() {
      return this.inputLength;
    }
  }, {
    key: "updateInputLength",
    value: function updateInputLength() {
      this.previousInputLength = this.inputLength;
      if (this.editor) {
        this.inputLength = this.editor.storage.characterCount.characters();
      } else {
        this.inputLength = this.$input.val().length;
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput() {
      this.updateInputLength();
      this.checkScreenReaderUpdate();
      // If the input is "described by" the character counter, some screen
      // readers (NVDA) announce the status twice when it is updated. By
      // removing the aria-describedby attribute while the user is typing makes
      // the screen reader announce the status only once.
      this.setDescribedBy(false);
    }

    /**
     * This compares the current inputLength to the previous value and decides
     * whether the user is currently adding or deleting characters from the view.
     *
     * @returns {String} The input direction either "ins" for insert or "del" for
     *   delete.
     */
  }, {
    key: "getInputDirection",
    value: function getInputDirection() {
      if (this.inputLength < this.previousInputLength) {
        return "del";
      }
      return "ins";
    }
  }, {
    key: "getScreenReaderLength",
    value: function getScreenReaderLength() {
      var currentLength = this.getInputLength();
      if (this.maxCharacters < 10) {
        return currentLength;
      } else if (this.maxCharacters - currentLength <= this.announceEveryThreshold) {
        return currentLength;
      }
      var srLength = currentLength - currentLength % this.announceThreshold;

      // Prevent the screen reader telling too many characters left if the user
      // deletes a characters. This can cause confusing experience e.g. when the
      // user is closing the maximum amount of characters, so if the previous
      // announcement was "10 characters left" and the user removes one character,
      // the screen reader would announce "100 characters left" next time (when
      // they actually have only 11 characters left). Similar when they are
      // deleting a character at 900 characters, the screen reader would announce
      // "1000 characters left" even when they only have 901 characters left.
      if (this.getInputDirection() === "del") {
        // The first branch makes sure that if the SR length matches the actual
        // length, it will be always announced.
        if (srLength === currentLength) {
          return srLength;
          // The second branch checks that if we are at the final threshold, we
          // should not announce "0 characters left" when the user deletes more than
          // the "announce after every stroke" limit (this.announceEveryThreshold).
        } else if (this.maxCharacters - srLength === this.announceThreshold) {
          return this.announcedAt || currentLength;
          // The third branch checks that when deleting characters, we should
          // announce the next threshold to get accurate annoucement. E.g. when we
          // have 750 characters left and the user deletes 100 characters at once,
          // we should announce "700 characters left" after that deletion.
        } else if (srLength < currentLength) {
          return srLength + this.announceThreshold;
        }
        // This fixes an issue in the following situation:
        // 1. 750 characters left
        // 2. Delete 100 characters in a row
        // 3. SR: "800 characters left" (actual 850)
        // 4. Type one additional character
        // 5. Without this, SR would announce "900 characters left" = confusing
      } else if (srLength < this.announcedAt) {
        return this.announcedAt;
      }
      return srLength;
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      var currentLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var showMessages = [];
      var inputLength = currentLength;
      if (inputLength === null) {
        inputLength = this.getInputLength();
      }
      if (this.minCharacters > 0) {
        var message = MESSAGES.charactersAtLeast.other;
        if (this.minCharacters === 1) {
          message = MESSAGES.charactersAtLeast.one;
        }
        showMessages.push(message.replace(COUNT_KEY, this.minCharacters));
      }
      if (this.maxCharacters > 0) {
        var remaining = this.maxCharacters - inputLength;
        var _message = MESSAGES.charactersLeft.other;
        if (remaining === 1) {
          _message = MESSAGES.charactersLeft.one;
        }
        this.$userInput[0].dispatchEvent(new CustomEvent("characterCounter", {
          detail: {
            remaining: remaining
          }
        }));
        showMessages.push(_message.replace(COUNT_KEY, remaining));
      }
      return showMessages;
    }
  }, {
    key: "updateStatus",
    value: function updateStatus() {
      this.$target.text(this.getMessages().join(", "));
    }
  }, {
    key: "checkScreenReaderUpdate",
    value: function checkScreenReaderUpdate() {
      if (this.maxCharacters < 1) {
        return;
      }
      var currentLength = this.getScreenReaderLength();
      if (currentLength === this.announcedAt) {
        return;
      }
      this.announcedAt = currentLength;
      this.updateScreenReaderStatus(currentLength);
    }
  }, {
    key: "updateScreenReaderStatus",
    value: function updateScreenReaderStatus() {
      var currentLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.$srTarget.text(this.getMessages(currentLength).join(", "));
    }
  }], [{
    key: "configureMessages",
    value: function configureMessages(messages) {
      MESSAGES = $.extend(DEFAULT_MESSAGES, messages);
    }
  }]);
  return InputCharacterCounter;
}();

var createCharacterCounter = function createCharacterCounter($input) {
  if (typeof $input !== "undefined" && $input.length) {
    $input.data("remaining-characters-counter", new InputCharacterCounter($input));
  }
};


/***/ }),

/***/ "./gems/decidim-module-core/app/packs/src/decidim/slug_form.js":
/*!*********************************************************************!*\
  !*** ./gems/decidim-module-core/app/packs/src/decidim/slug_form.js ***!
  \*********************************************************************/
/***/ (function() {

$(function () {
  var $wrapper = $(".slug");
  var $input = $wrapper.find("input");
  var $target = $wrapper.find("span.slug-url-value");
  $input.on("keyup", function (event) {
    $target.html(event.target.value);
  });
});

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

/***/ }),

/***/ "./node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/entrypoints/decidim_admin.scss":
/*!***********************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/entrypoints/decidim_admin.scss ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/*!*********************************************************************************************************************!*\
  !*** ../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/entrypoints/decidim_admin.js ***!
  \*********************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/decidim/admin/tab_focus */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/tab_focus.js");
/* harmony import */ var src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_tab_focus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_decidim_admin_choose_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/decidim/admin/choose_language */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/choose_language.js");
/* harmony import */ var src_decidim_admin_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/decidim/admin/application */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/application.js");
/* harmony import */ var src_decidim_admin_resources_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/decidim/admin/resources_permissions */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/resources_permissions.js");
/* harmony import */ var src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/decidim/admin/welcome_notification */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/welcome_notification.js");
/* harmony import */ var src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_welcome_notification__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/decidim/admin/newsletters */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/newsletters.js");
/* harmony import */ var src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_newsletters__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_decidim_admin_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/decidim/admin/form */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/form.js");
/* harmony import */ var src_decidim_admin_external_domain_whitelist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/decidim/admin/external_domain_whitelist */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/external_domain_whitelist.js");
/* harmony import */ var src_decidim_admin_draggable_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/decidim/admin/draggable-list */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/draggable-list.js");
/* harmony import */ var src_decidim_admin_sortable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/decidim/admin/sortable */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/sortable.js");
/* harmony import */ var src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/decidim/admin/moderations */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/moderations.js");
/* harmony import */ var src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_moderations__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/decidim/admin/officializations */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/officializations.js");
/* harmony import */ var src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_officializations__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/decidim/slug_form */ "./gems/decidim-module-core/app/packs/src/decidim/slug_form.js");
/* harmony import */ var src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(src_decidim_slug_form__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_decidim_admin_admin_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/decidim/admin/admin_autocomplete */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/admin_autocomplete.js");
/* harmony import */ var src_decidim_admin_triadic_color_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/decidim/admin/triadic_color_picker */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/triadic_color_picker.js");
/* harmony import */ var src_decidim_admin_triadic_color_picker__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(src_decidim_admin_triadic_color_picker__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var src_decidim_admin_participatory_space_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/decidim/admin/participatory_space_search */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/src/decidim/admin/participatory_space_search.js");
/* harmony import */ var entrypoints_decidim_admin_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! entrypoints/decidim_admin.scss */ "../.rbenv/versions/3.1.1/lib/ruby/gems/3.1.0/gems/decidim-admin-0.28.0/app/packs/entrypoints/decidim_admin.scss");
/* eslint no-unused-vars: 0 */
/* eslint id-length: ["error", { "exceptions": ["$"] }] */


















// CSS

window.addEventListener("DOMContentLoaded", function () {
  (0,src_decidim_admin_choose_language__WEBPACK_IMPORTED_MODULE_1__["default"])(document.querySelectorAll("select.language-change"));
});
}();
/******/ })()
;
//# sourceMappingURL=decidim_admin.js.map