"use strict";(self.webpackChunkdecidim_base=self.webpackChunkdecidim_base||[]).push([[3617,3091,9069],{9069:function(e,t,n){n.r(t),n.d(t,{a:function(){return u},d:function(){return f}});var r=n(84215);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t,n){var r;return r=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==o(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=Object.defineProperty,c=function(e,t){return a(e,"name",{value:t,configurable:!0})};function l(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}c(l,"_mergeNamespaces");var u={exports:{}};!function(e){function t(t,n,r){var o,i=t.getWrapperElement();return(o=i.appendChild(document.createElement("div"))).className=r?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?o.innerHTML=n:o.appendChild(n),e.addClass(i,"dialog-opened"),o}function n(e,t){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=t}c(t,"dialogDiv"),c(n,"closeNotification"),e.defineExtension("openDialog",(function(r,o,i){i||(i={}),n(this,null);var a=t(this,r,i.bottom),l=!1,u=this;function s(t){if("string"==typeof t)p.value=t;else{if(l)return;l=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),u.focus(),i.onClose&&i.onClose(a)}}c(s,"close");var f,p=a.getElementsByTagName("input")[0];return p?(p.focus(),i.value&&(p.value=i.value,!1!==i.selectValueOnOpen&&p.select()),i.onInput&&e.on(p,"input",(function(e){i.onInput(e,p.value,s)})),i.onKeyUp&&e.on(p,"keyup",(function(e){i.onKeyUp(e,p.value,s)})),e.on(p,"keydown",(function(t){i&&i.onKeyDown&&i.onKeyDown(t,p.value,s)||((27==t.keyCode||!1!==i.closeOnEnter&&13==t.keyCode)&&(p.blur(),e.e_stop(t),s()),13==t.keyCode&&o(p.value,t))})),!1!==i.closeOnBlur&&e.on(a,"focusout",(function(e){null!==e.relatedTarget&&s()}))):(f=a.getElementsByTagName("button")[0])&&(e.on(f,"click",(function(){s(),u.focus()})),!1!==i.closeOnBlur&&e.on(f,"blur",s),f.focus()),s})),e.defineExtension("openConfirm",(function(r,o,i){n(this,null);var a=t(this,r,i&&i.bottom),l=a.getElementsByTagName("button"),u=!1,s=this,f=1;function p(){u||(u=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),s.focus())}c(p,"close"),l[0].focus();for(var h=0;h<l.length;++h){var g=l[h];!function(t){e.on(g,"click",(function(n){e.e_preventDefault(n),p(),t&&t(s)}))}(o[h]),e.on(g,"blur",(function(){--f,setTimeout((function(){f<=0&&p()}),200)})),e.on(g,"focus",(function(){++f}))}})),e.defineExtension("openNotification",(function(r,o){n(this,s);var i,a=t(this,r,o&&o.bottom),l=!1,u=o&&"undefined"!==typeof o.duration?o.duration:5e3;function s(){l||(l=!0,clearTimeout(i),e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a))}return c(s,"close"),e.on(a,"click",(function(t){e.e_preventDefault(t),s()})),u&&(i=setTimeout(s,u)),s}))}(r.a.exports);var s=u.exports,f=Object.freeze(l(i(i({__proto__:null},Symbol.toStringTag,"Module"),"default",s),[u.exports]))},63617:function(e,t,n){n.r(t),n.d(t,{s:function(){return h}});var r=n(84215),o=n(63091),i=n(9069);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t,n){var r;return r=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==a(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=Object.defineProperty,u=function(e,t){return l(e,"name",{value:t,configurable:!0})};function s(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}u(s,"_mergeNamespaces");var f={exports:{}};!function(e){function t(e,t){return"string"==typeof e?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(t){e.lastIndex=t.pos;var n=e.exec(t.string);if(n&&n.index==t.pos)return t.pos+=n[0].length||1,"searching";n?t.pos=n.index:t.skipToEnd()}}}function n(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function r(e){return e.state.search||(e.state.search=new n)}function o(e){return"string"==typeof e&&e==e.toLowerCase()}function i(e,t,n){return e.getSearchCursor(t,n,{caseFold:o(t),multiline:!0})}function a(e,t,n,r,o){e.openDialog(t,r,{value:n,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){m(e)},onKeyDown:o,bottom:e.options.search.bottom})}function c(e,t,n,r,o){e.openDialog?e.openDialog(t,o,{value:r,selectValueOnOpen:!0,bottom:e.options.search.bottom}):o(prompt(n,r))}function l(e,t,n,r){e.openConfirm?e.openConfirm(t,r):confirm(n)&&r[0]()}function s(e){return e.replace(/\\([nrt\\])/g,(function(e,t){return"n"==t?"\n":"r"==t?"\r":"t"==t?"\t":"\\"==t?"\\":e}))}function f(e){var t=e.match(/^\/(.*)\/([a-z]*)$/);if(t)try{e=new RegExp(t[1],-1==t[2].indexOf("i")?"":"i")}catch(n){}else e=s(e);return("string"==typeof e?""==e:e.test(""))&&(e=/x^/),e}function p(e,n,r){n.queryText=r,n.query=f(r),e.removeOverlay(n.overlay,o(n.query)),n.overlay=t(n.query,o(n.query)),e.addOverlay(n.overlay),e.showMatchesOnScrollbar&&(n.annotate&&(n.annotate.clear(),n.annotate=null),n.annotate=e.showMatchesOnScrollbar(n.query,o(n.query)))}function h(t,n,o,i){var l=r(t);if(l.query)return g(t,n);var s=t.getSelection()||l.lastQuery;if(s instanceof RegExp&&"x^"==s.source&&(s=null),o&&t.openDialog){var f=null,h=u((function(n,r){e.e_stop(r),n&&(n!=l.queryText&&(p(t,l,n),l.posFrom=l.posTo=t.getCursor()),f&&(f.style.opacity=1),g(t,r.shiftKey,(function(e,n){var r;n.line<3&&document.querySelector&&(r=t.display.wrapper.querySelector(".CodeMirror-dialog"))&&r.getBoundingClientRect().bottom-4>t.cursorCoords(n,"window").top&&((f=r).style.opacity=.4)})))}),"searchNext");a(t,y(t),s,h,(function(n,o){var i=e.keyName(n),a=t.getOption("extraKeys"),c=a&&a[i]||e.keyMap[t.getOption("keyMap")][i];"findNext"==c||"findPrev"==c||"findPersistentNext"==c||"findPersistentPrev"==c?(e.e_stop(n),p(t,r(t),o),t.execCommand(c)):"find"!=c&&"findPersistent"!=c||(e.e_stop(n),h(o,n))})),i&&s&&(p(t,l,s),g(t,n))}else c(t,y(t),"Search for:",s,(function(e){e&&!l.query&&t.operation((function(){p(t,l,e),l.posFrom=l.posTo=t.getCursor(),g(t,n)}))}))}function g(t,n,o){t.operation((function(){var a=r(t),c=i(t,a.query,n?a.posFrom:a.posTo);(c.find(n)||(c=i(t,a.query,n?e.Pos(t.lastLine()):e.Pos(t.firstLine(),0))).find(n))&&(t.setSelection(c.from(),c.to()),t.scrollIntoView({from:c.from(),to:c.to()},20),a.posFrom=c.from(),a.posTo=c.to(),o&&o(c.from(),c.to()))}))}function m(e){e.operation((function(){var t=r(e);t.lastQuery=t.query,t.query&&(t.query=t.queryText=null,e.removeOverlay(t.overlay),t.annotate&&(t.annotate.clear(),t.annotate=null))}))}function d(e,t){var n=e?document.createElement(e):document.createDocumentFragment();for(var r in t)n[r]=t[r];for(var o=2;o<arguments.length;o++){var i=arguments[o];n.appendChild("string"==typeof i?document.createTextNode(i):i)}return n}function y(e){return d("",null,d("span",{className:"CodeMirror-search-label"},e.phrase("Search:"))," ",d("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",d("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}function v(e){return d("",null," ",d("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",d("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}function b(e){return d("",null,d("span",{className:"CodeMirror-search-label"},e.phrase("With:"))," ",d("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"}))}function x(e){return d("",null,d("span",{className:"CodeMirror-search-label"},e.phrase("Replace?"))," ",d("button",{},e.phrase("Yes"))," ",d("button",{},e.phrase("No"))," ",d("button",{},e.phrase("All"))," ",d("button",{},e.phrase("Stop")))}function S(e,t,n){e.operation((function(){for(var r=i(e,t);r.findNext();)if("string"!=typeof t){var o=e.getRange(r.from(),r.to()).match(t);r.replace(n.replace(/\$(\d)/g,(function(e,t){return o[t]})))}else r.replace(n)}))}function C(e,t){if(!e.getOption("readOnly")){var n=e.getSelection()||r(e).lastQuery,o=t?e.phrase("Replace all:"):e.phrase("Replace:"),a=d("",null,d("span",{className:"CodeMirror-search-label"},o),v(e));c(e,a,o,n,(function(n){n&&(n=f(n),c(e,b(e),e.phrase("Replace with:"),"",(function(r){if(r=s(r),t)S(e,n,r);else{m(e);var o=i(e,n,e.getCursor("from")),a=u((function(){var t,u=o.from();!(t=o.findNext())&&(o=i(e,n),!(t=o.findNext())||u&&o.from().line==u.line&&o.from().ch==u.ch)||(e.setSelection(o.from(),o.to()),e.scrollIntoView({from:o.from(),to:o.to()}),l(e,x(e),e.phrase("Replace?"),[function(){c(t)},a,function(){S(e,n,r)}]))}),"advance"),c=u((function(e){o.replace("string"==typeof n?r:r.replace(/\$(\d)/g,(function(t,n){return e[n]}))),a()}),"doReplace");a()}})))}))}}e.defineOption("search",{bottom:!1}),u(t,"searchOverlay"),u(n,"SearchState"),u(r,"getSearchState"),u(o,"queryCaseInsensitive"),u(i,"getSearchCursor"),u(a,"persistentDialog"),u(c,"dialog"),u(l,"confirmDialog"),u(s,"parseString"),u(f,"parseQuery"),u(p,"startSearch"),u(h,"doSearch"),u(g,"findNext"),u(m,"clearSearch"),u(d,"el"),u(y,"getQueryDialog"),u(v,"getReplaceQueryDialog"),u(b,"getReplacementQueryDialog"),u(x,"getDoReplaceConfirm"),u(S,"replaceAll"),u(C,"replace"),e.commands.find=function(e){m(e),h(e)},e.commands.findPersistent=function(e){m(e),h(e,!1,!0)},e.commands.findPersistentNext=function(e){h(e,!1,!0,!0)},e.commands.findPersistentPrev=function(e){h(e,!0,!0,!0)},e.commands.findNext=h,e.commands.findPrev=function(e){h(e,!0)},e.commands.clearSearch=m,e.commands.replace=C,e.commands.replaceAll=function(e){C(e,!0)}}(r.a.exports,o.a.exports,i.a.exports);var p=f.exports,h=Object.freeze(s(c(c({__proto__:null},Symbol.toStringTag,"Module"),"default",p),[f.exports]))},63091:function(e,t,n){n.r(t),n.d(t,{a:function(){return u},s:function(){return f}});var r=n(84215);function o(e,t,n){var r;return r=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==i(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=Object.defineProperty,c=function(e,t){return a(e,"name",{value:t,configurable:!0})};function l(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}c(l,"_mergeNamespaces");var u={exports:{}};!function(e){var t,n,r=e.Pos;function o(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function a(e,t){for(var n=o(e),r=n,i=0;i<t.length;i++)-1==r.indexOf(t.charAt(i))&&(r+=t.charAt(i));return n==r?e:new RegExp(e.source,r)}function l(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function u(e,t,n){t=a(t,"g");for(var o=n.line,i=n.ch,c=e.lastLine();o<=c;o++,i=0){t.lastIndex=i;var l=e.getLine(o),u=t.exec(l);if(u)return{from:r(o,u.index),to:r(o,u.index+u[0].length),match:u}}}function s(e,t,n){if(!l(t))return u(e,t,n);t=a(t,"gm");for(var o,i=1,c=n.line,s=e.lastLine();c<=s;){for(var f=0;f<i&&!(c>s);f++){var p=e.getLine(c++);o=null==o?p:o+"\n"+p}i*=2,t.lastIndex=n.ch;var h=t.exec(o);if(h){var g=o.slice(0,h.index).split("\n"),m=h[0].split("\n"),d=n.line+g.length-1,y=g[g.length-1].length;return{from:r(d,y),to:r(d+m.length-1,1==m.length?y+m[0].length:m[m.length-1].length),match:h}}}}function f(e,t,n){for(var r,o=0;o<=e.length;){t.lastIndex=o;var i=t.exec(e);if(!i)break;var a=i.index+i[0].length;if(a>e.length-n)break;(!r||a>r.index+r[0].length)&&(r=i),o=i.index+1}return r}function p(e,t,n){t=a(t,"g");for(var o=n.line,i=n.ch,c=e.firstLine();o>=c;o--,i=-1){var l=e.getLine(o),u=f(l,t,i<0?0:l.length-i);if(u)return{from:r(o,u.index),to:r(o,u.index+u[0].length),match:u}}}function h(e,t,n){if(!l(t))return p(e,t,n);t=a(t,"gm");for(var o,i=1,c=e.getLine(n.line).length-n.ch,u=n.line,s=e.firstLine();u>=s;){for(var h=0;h<i&&u>=s;h++){var g=e.getLine(u--);o=null==o?g:g+"\n"+o}i*=2;var m=f(o,t,c);if(m){var d=o.slice(0,m.index).split("\n"),y=m[0].split("\n"),v=u+d.length,b=d[d.length-1].length;return{from:r(v,b),to:r(v+y.length-1,1==y.length?b+y[0].length:y[y.length-1].length),match:m}}}}function g(e,t,n,r){if(e.length==t.length)return n;for(var o=0,i=n+Math.max(0,e.length-t.length);;){if(o==i)return o;var a=o+i>>1,c=r(e.slice(0,a)).length;if(c==n)return a;c>n?i=a:o=a+1}}function m(e,o,i,a){if(!o.length)return null;var c=a?t:n,l=c(o).split(/\r|\n\r?/);e:for(var u=i.line,s=i.ch,f=e.lastLine()+1-l.length;u<=f;u++,s=0){var p=e.getLine(u).slice(s),h=c(p);if(1==l.length){var m=h.indexOf(l[0]);if(-1==m)continue e;return i=g(p,h,m,c)+s,{from:r(u,g(p,h,m,c)+s),to:r(u,g(p,h,m+l[0].length,c)+s)}}var d=h.length-l[0].length;if(h.slice(d)==l[0]){for(var y=1;y<l.length-1;y++)if(c(e.getLine(u+y))!=l[y])continue e;var v=e.getLine(u+l.length-1),b=c(v),x=l[l.length-1];if(b.slice(0,x.length)==x)return{from:r(u,g(p,h,d,c)+s),to:r(u+l.length-1,g(v,b,x.length,c))}}}}function d(e,o,i,a){if(!o.length)return null;var c=a?t:n,l=c(o).split(/\r|\n\r?/);e:for(var u=i.line,s=i.ch,f=e.firstLine()-1+l.length;u>=f;u--,s=-1){var p=e.getLine(u);s>-1&&(p=p.slice(0,s));var h=c(p);if(1==l.length){var m=h.lastIndexOf(l[0]);if(-1==m)continue e;return{from:r(u,g(p,h,m,c)),to:r(u,g(p,h,m+l[0].length,c))}}var d=l[l.length-1];if(h.slice(0,d.length)==d){var y=1;for(i=u-l.length+1;y<l.length-1;y++)if(c(e.getLine(i+y))!=l[y])continue e;var v=e.getLine(u+1-l.length),b=c(v);if(b.slice(b.length-l[0].length)==l[0])return{from:r(u+1-l.length,g(v,b,v.length-l[0].length,c)),to:r(u,g(p,h,d.length,c))}}}}function y(e,t,n,o){var c;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==i(o)?c=o.caseFold:(c=o,o=null),"string"==typeof t?(null==c&&(c=!1),this.matches=function(n,r){return(n?d:m)(e,t,r,c)}):(t=a(t,"gm"),o&&!1===o.multiline?this.matches=function(n,r){return(n?p:u)(e,t,r)}:this.matches=function(n,r){return(n?h:s)(e,t,r)})}c(o,"regexpFlags"),c(a,"ensureFlags"),c(l,"maybeMultiline"),c(u,"searchRegexpForward"),c(s,"searchRegexpForwardMultiline"),c(f,"lastMatchIn"),c(p,"searchRegexpBackward"),c(h,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=c((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=c((function(e){return e.normalize("NFD")}),"noFold")):(t=c((function(e){return e.toLowerCase()}),"doFold"),n=c((function(e){return e}),"noFold")),c(g,"adjustPos"),c(m,"searchStringForward"),c(d,"searchStringBackward"),c(y,"SearchCursor"),y.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var o=this.matches(t,n);if(this.afterEmptyMatch=o&&0==e.cmpPos(o.from,o.to),o)return this.pos=o,this.atOccurrence=!0,this.pos.match||!0;var i=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:i,to:i},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var o=e.splitLines(t);this.doc.replaceRange(o,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+o.length-1,o[o.length-1].length+(1==o.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new y(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new y(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],o=this.getSearchCursor(t,this.getCursor("from"),n);o.findNext()&&!(e.cmpPos(o.to(),this.getCursor("to"))>0);)r.push({anchor:o.from(),head:o.to()});r.length&&this.setSelections(r,0)}))}(r.a.exports);var s=u.exports,f=Object.freeze(l(o(o({__proto__:null},Symbol.toStringTag,"Module"),"default",s),[u.exports]))}}]);
//# sourceMappingURL=3617-537f7c591d443c5eafab.chunk.js.map