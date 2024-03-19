"use strict";(self.webpackChunkdecidim_base=self.webpackChunkdecidim_base||[]).push([[760],{760:function(e,t,n){n.r(t);var r=n(9312),a=n(8275),l=n(3238),u=(n(5471),n(5442),Object.defineProperty),i=function(e,t){return u(e,"name",{value:t,configurable:!0})};function o(e,t){var n,r,a=e.levels;return((a&&0!==a.length?a[a.length-1]-((null===(n=this.electricInput)||void 0===n?void 0:n.test(t))?1:0):e.indentLevel)||0)*((null===(r=this.config)||void 0===r?void 0:r.indentUnit)||0)}r.C.defineMode("graphql-variables",(function(e){var t=(0,l.o)({eatWhitespace:function(e){return e.eatSpace()},lexRules:s,parseRules:c,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:o,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}})),i(o,"indent");var s={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},c={Document:[(0,a.p)("{"),(0,a.l)("Variable",(0,a.o)((0,a.p)(","))),(0,a.p)("}")],Variable:[p("variable"),(0,a.p)(":"),"Value"],Value:function(e){switch(e.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(e.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,a.t)("Number","number")],StringValue:[(0,a.t)("String","string")],BooleanValue:[(0,a.t)("Keyword","builtin")],NullValue:[(0,a.t)("Keyword","keyword")],ListValue:[(0,a.p)("["),(0,a.l)("Value",(0,a.o)((0,a.p)(","))),(0,a.p)("]")],ObjectValue:[(0,a.p)("{"),(0,a.l)("ObjectField",(0,a.o)((0,a.p)(","))),(0,a.p)("}")],ObjectField:[p("attribute"),(0,a.p)(":"),"Value"]};function p(e){return{style:e,match:function(e){return"String"===e.kind},update:function(e,t){e.name=t.value.slice(1,-1)}}}i(p,"namedKey")},3238:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(8275),a=n(845),l=Object.defineProperty,u=function(e,t){return l(e,"name",{value:t,configurable:!0})};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eatWhitespace:function(e){return e.eatWhile(r.i)},lexRules:r.L,parseRules:r.P,editorConfig:{}};return{startState:function(){var t={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeparator:!1,prevState:null};return p(e.parseRules,t,a.h.DOCUMENT),t},token:function(t,n){return o(t,n,e)}}}function o(e,t,n){var r;if(t.inBlockstring)return e.match(/.*"""/)?(t.inBlockstring=!1,"string"):(e.skipToEnd(),"string");var a=n.lexRules,l=n.parseRules,u=n.eatWhitespace,i=n.editorConfig;if(t.rule&&0===t.rule.length?d(t):t.needsAdvance&&(t.needsAdvance=!1,v(t,!0)),e.sol()){var o=(null===i||void 0===i?void 0:i.tabSize)||2;t.indentLevel=Math.floor(e.indentation()/o)}if(u(e))return"ws";var f=h(a,e);if(!f)return e.match(/\S+/)||e.match(/\s/),p(c,t,"Invalid"),"invalidchar";if("Comment"===f.kind)return p(c,t,"Comment"),"comment";var g=s({},t);if("Punctuation"===f.kind)if(/^[{([]/.test(f.value))void 0!==t.indentLevel&&(t.levels=(t.levels||[]).concat(t.indentLevel+1));else if(/^[})\]]/.test(f.value)){var b=t.levels=(t.levels||[]).slice(0,-1);t.indentLevel&&b.length>0&&b[b.length-1]<t.indentLevel&&(t.indentLevel=b[b.length-1])}for(;t.rule;){var m="function"===typeof t.rule?0===t.step?t.rule(f,e):null:t.rule[t.step];if(t.needsSeparator&&(m=null===m||void 0===m?void 0:m.separator),m){if(m.ofRule&&(m=m.ofRule),"string"===typeof m){p(l,t,m);continue}if(null===(r=m.match)||void 0===r?void 0:r.call(m,f))return m.update&&m.update(t,f),"Punctuation"===f.kind?v(t,!0):t.needsAdvance=!0,m.style}S(t)}return s(t,g),p(c,t,"Invalid"),"invalidchar"}function s(e,t){for(var n=Object.keys(t),r=0;r<n.length;r++)e[n[r]]=t[n[r]];return e}u(i,"onlineParser"),u(o,"getToken"),u(s,"assign");var c={Invalid:[],Comment:[]};function p(e,t,n){if(!e[n])throw new TypeError("Unknown rule: "+n);t.prevState=Object.assign({},t),t.kind=n,t.name=null,t.type=null,t.rule=e[n],t.step=0,t.needsSeparator=!1}function d(e){e.prevState&&(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeparator=e.prevState.needsSeparator,e.prevState=e.prevState.prevState)}function v(e,t){var n;if(f(e)&&e.rule){var r=e.rule[e.step];if(r.separator){var a=r.separator;if(e.needsSeparator=!e.needsSeparator,!e.needsSeparator&&a.ofRule)return}if(t)return}for(e.needsSeparator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)d(e),e.rule&&(f(e)?(null===(n=e.rule)||void 0===n?void 0:n[e.step].separator)&&(e.needsSeparator=!e.needsSeparator):(e.needsSeparator=!1,e.step++))}function f(e){var t=Array.isArray(e.rule)&&"string"!==typeof e.rule[e.step]&&e.rule[e.step];return t&&t.isList}function S(e){for(;e.rule&&(!Array.isArray(e.rule)||!e.rule[e.step].ofRule);)d(e);e.rule&&v(e,!1)}function h(e,t){for(var n=Object.keys(e),r=0;r<n.length;r++){var a=t.match(e[n[r]]);if(a&&a instanceof Array)return{kind:n[r],value:a[0]}}}u(p,"pushRule"),u(d,"popRule"),u(v,"advanceRule"),u(f,"isList"),u(S,"unsuccessful"),u(h,"lex")}}]);
//# sourceMappingURL=760-f062cfbbdaf1d9787824.chunk.js.map