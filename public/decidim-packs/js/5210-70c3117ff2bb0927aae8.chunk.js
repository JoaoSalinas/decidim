"use strict";(self.webpackChunkdecidim_base=self.webpackChunkdecidim_base||[]).push([[5210],{85210:function(e,t,r){r.r(t),r.d(t,{c:function(){return f}});var n=r(84215);function i(e,t,r){var n;return n=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==o(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var a=Object.defineProperty,s=function(e,t){return a(e,"name",{value:t,configurable:!0})};function l(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(r){if("default"!==r&&!(r in e)){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}}))})),Object.freeze(e)}s(l,"_mergeNamespaces");var c={exports:{}};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},r=e.Pos;function n(e,r){return"pairs"==r&&"string"==typeof e?e:"object"==o(e)&&null!=e[r]?e[r]:t[r]}e.defineOption("autoCloseBrackets",!1,(function(t,r,o){o&&o!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),r&&(a(n(r,"pairs")),t.state.closeBrackets=r,t.addKeyMap(i))})),s(n,"getOption");var i={Backspace:u,Enter:f};function a(e){for(var t=0;t<e.length;t++){var r=e.charAt(t),n="'"+r+"'";i[n]||(i[n]=l(r))}}function l(e){return function(t){return d(t,e)}}function c(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function u(t){var i=c(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var o=n(i,"pairs"),a=t.listSelections(),s=0;s<a.length;s++){if(!a[s].empty())return e.Pass;var l=g(t,a[s].head);if(!l||o.indexOf(l)%2!=0)return e.Pass}for(s=a.length-1;s>=0;s--){var u=a[s].head;t.replaceRange("",r(u.line,u.ch-1),r(u.line,u.ch+1),"+delete")}}function f(t){var r=c(t),i=r&&n(r,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var o=t.listSelections(),a=0;a<o.length;a++){if(!o[a].empty())return e.Pass;var s=g(t,o[a].head);if(!s||i.indexOf(s)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),h(t,-1),o=t.listSelections();for(var r=0;r<o.length;r++){var n=o[r].head.line;t.indentLine(n,null,!0),t.indentLine(n+1,null,!0)}}))}function h(e,t){for(var r=[],n=e.listSelections(),i=0,o=0;o<n.length;o++){var a=n[o];a.head==e.getCursor()&&(i=o);var s=a.head.ch||t>0?{line:a.head.line,ch:a.head.ch+t}:{line:a.head.line-1};r.push({anchor:s,head:s})}e.setSelections(r,i)}function p(t){var n=e.cmpPos(t.anchor,t.head)>0;return{anchor:new r(t.anchor.line,t.anchor.ch+(n?-1:1)),head:new r(t.head.line,t.head.ch+(n?1:-1))}}function d(t,i){var o=c(t);if(!o||t.getOption("disableInput"))return e.Pass;var a=n(o,"pairs"),s=a.indexOf(i);if(-1==s)return e.Pass;for(var l,u=n(o,"closeBefore"),f=n(o,"triples"),d=a.charAt(s+1)==i,g=t.listSelections(),b=s%2==0,y=0;y<g.length;y++){var m,S=g[y],P=S.head,k=t.getRange(P,r(P.line,P.ch+1));if(b&&!S.empty())m="surround";else if(!d&&b||k!=i)if(d&&P.ch>1&&f.indexOf(i)>=0&&t.getRange(r(P.line,P.ch-2),P)==i+i){if(P.ch>2&&/\bstring/.test(t.getTokenTypeAt(r(P.line,P.ch-2))))return e.Pass;m="addFour"}else if(d){var O=0==P.ch?" ":t.getRange(r(P.line,P.ch-1),P);if(e.isWordChar(k)||O==i||e.isWordChar(O))return e.Pass;m="both"}else{if(!b||!(0===k.length||/\s/.test(k)||u.indexOf(k)>-1))return e.Pass;m="both"}else m=d&&v(t,P)?"both":f.indexOf(i)>=0&&t.getRange(P,r(P.line,P.ch+3))==i+i+i?"skipThree":"skip";if(l){if(l!=m)return e.Pass}else l=m}var x=s%2?a.charAt(s-1):i,A=s%2?i:a.charAt(s+1);t.operation((function(){if("skip"==l)h(t,1);else if("skipThree"==l)h(t,3);else if("surround"==l){for(var e=t.getSelections(),r=0;r<e.length;r++)e[r]=x+e[r]+A;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),r=0;r<e.length;r++)e[r]=p(e[r]);t.setSelections(e)}else"both"==l?(t.replaceSelection(x+A,null),t.triggerElectric(x+A),h(t,-1)):"addFour"==l&&(t.replaceSelection(x+x+x+x,"before"),h(t,1))}))}function g(e,t){var n=e.getRange(r(t.line,t.ch-1),r(t.line,t.ch+1));return 2==n.length?n:null}function v(e,t){var n=e.getTokenAt(r(t.line,t.ch+1));return/\bstring/.test(n.type)&&n.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}s(a,"ensureBound"),a(t.pairs+"`"),s(l,"handler"),s(c,"getConfig"),s(u,"handleBackspace"),s(f,"handleEnter"),s(h,"moveSel"),s(p,"contractSelection"),s(d,"handleChar"),s(g,"charsAround"),s(v,"stringStartsAfter")}(n.a.exports);var u=c.exports,f=Object.freeze(l(i(i({__proto__:null},Symbol.toStringTag,"Module"),"default",u),[c.exports]))}}]);
//# sourceMappingURL=5210-70c3117ff2bb0927aae8.chunk.js.map