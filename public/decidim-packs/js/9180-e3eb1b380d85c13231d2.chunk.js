"use strict";(self.webpackChunkdecidim_base=self.webpackChunkdecidim_base||[]).push([[9180,3921,3091],{3921:function(e,t,n){n.r(t),n.d(t,{a:function(){return s},m:function(){return u}});var r=n(84215);function o(e,t,n){var r;return r=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==i(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var l=Object.defineProperty,a=function(e,t){return l(e,"name",{value:t,configurable:!0})};function c(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}a(c,"_mergeNamespaces");var s={exports:{}};!function(e){var t=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),n=e.Pos,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"};function o(e){return e&&e.bracketRegex||/[(){}[\]]/}function l(e,t,i){var l=e.getLineHandle(t.line),a=t.ch-1,s=i&&i.afterCursor;null==s&&(s=/(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className));var f=o(i),u=!s&&a>=0&&f.test(l.text.charAt(a))&&r[l.text.charAt(a)]||f.test(l.text.charAt(a+1))&&r[l.text.charAt(++a)];if(!u)return null;var h=">"==u.charAt(1)?1:-1;if(i&&i.strict&&h>0!=(a==t.ch))return null;var m=e.getTokenTypeAt(n(t.line,a+1)),d=c(e,n(t.line,a+(h>0?1:0)),h,m,i);return null==d?null:{from:n(t.line,a),to:d&&d.pos,match:d&&d.ch==u.charAt(0),forward:h>0}}function c(e,t,i,l,a){for(var c=a&&a.maxScanLineLength||1e4,s=a&&a.maxScanLines||1e3,f=[],u=o(a),h=i>0?Math.min(t.line+s,e.lastLine()+1):Math.max(e.firstLine()-1,t.line-s),m=t.line;m!=h;m+=i){var d=e.getLine(m);if(d){var g=i>0?0:d.length-1,p=i>0?d.length:-1;if(!(d.length>c))for(m==t.line&&(g=t.ch-(i<0?1:0));g!=p;g+=i){var v=d.charAt(g);if(u.test(v)&&(void 0===l||(e.getTokenTypeAt(n(m,g+1))||"")==(l||""))){var C=r[v];if(C&&">"==C.charAt(1)==i>0)f.push(v);else{if(!f.length)return{pos:n(m,g),ch:v};f.pop()}}}}}return m-i!=(i>0?e.lastLine():e.firstLine())&&null}function s(e,r,o){for(var i=e.state.matchBrackets.maxHighlightLineLength||1e3,c=o&&o.highlightNonMatching,s=[],f=e.listSelections(),u=0;u<f.length;u++){var h=f[u].empty()&&l(e,f[u].head,o);if(h&&(h.match||!1!==c)&&e.getLine(h.from.line).length<=i){var m=h.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";s.push(e.markText(h.from,n(h.from.line,h.from.ch+1),{className:m})),h.to&&e.getLine(h.to.line).length<=i&&s.push(e.markText(h.to,n(h.to.line,h.to.ch+1),{className:m}))}}if(s.length){t&&e.state.focused&&e.focus();var d=a((function(){e.operation((function(){for(var e=0;e<s.length;e++)s[e].clear()}))}),"clear");if(!r)return d;setTimeout(d,800)}}function f(e){e.operation((function(){e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null),e.state.matchBrackets.currentlyHighlighted=s(e,!1,e.state.matchBrackets)}))}function u(e){e.state.matchBrackets&&e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null)}a(o,"bracketRegex"),a(l,"findMatchingBracket"),a(c,"scanForBracket"),a(s,"matchBrackets"),a(f,"doMatchBrackets"),a(u,"clearHighlighted"),e.defineOption("matchBrackets",!1,(function(t,n,r){r&&r!=e.Init&&(t.off("cursorActivity",f),t.off("focus",f),t.off("blur",u),u(t)),n&&(t.state.matchBrackets="object"==i(n)?n:{},t.on("cursorActivity",f),t.on("focus",f),t.on("blur",u))})),e.defineExtension("matchBrackets",(function(){s(this,!0)})),e.defineExtension("findMatchingBracket",(function(e,t,n){return(n||"boolean"==typeof t)&&(n?(n.strict=t,t=n):t=t?{strict:!0}:null),l(this,e,t)})),e.defineExtension("scanForBracket",(function(e,t,n,r){return c(this,e,t,n,r)}))}(r.a.exports);var f=s.exports,u=Object.freeze(c(o(o({__proto__:null},Symbol.toStringTag,"Module"),"default",f),[s.exports]))},63091:function(e,t,n){n.r(t),n.d(t,{a:function(){return s},s:function(){return u}});var r=n(84215);function o(e,t,n){var r;return r=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==i(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var l=Object.defineProperty,a=function(e,t){return l(e,"name",{value:t,configurable:!0})};function c(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}a(c,"_mergeNamespaces");var s={exports:{}};!function(e){var t,n,r=e.Pos;function o(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function l(e,t){for(var n=o(e),r=n,i=0;i<t.length;i++)-1==r.indexOf(t.charAt(i))&&(r+=t.charAt(i));return n==r?e:new RegExp(e.source,r)}function c(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function s(e,t,n){t=l(t,"g");for(var o=n.line,i=n.ch,a=e.lastLine();o<=a;o++,i=0){t.lastIndex=i;var c=e.getLine(o),s=t.exec(c);if(s)return{from:r(o,s.index),to:r(o,s.index+s[0].length),match:s}}}function f(e,t,n){if(!c(t))return s(e,t,n);t=l(t,"gm");for(var o,i=1,a=n.line,f=e.lastLine();a<=f;){for(var u=0;u<i&&!(a>f);u++){var h=e.getLine(a++);o=null==o?h:o+"\n"+h}i*=2,t.lastIndex=n.ch;var m=t.exec(o);if(m){var d=o.slice(0,m.index).split("\n"),g=m[0].split("\n"),p=n.line+d.length-1,v=d[d.length-1].length;return{from:r(p,v),to:r(p+g.length-1,1==g.length?v+g[0].length:g[g.length-1].length),match:m}}}}function u(e,t,n){for(var r,o=0;o<=e.length;){t.lastIndex=o;var i=t.exec(e);if(!i)break;var l=i.index+i[0].length;if(l>e.length-n)break;(!r||l>r.index+r[0].length)&&(r=i),o=i.index+1}return r}function h(e,t,n){t=l(t,"g");for(var o=n.line,i=n.ch,a=e.firstLine();o>=a;o--,i=-1){var c=e.getLine(o),s=u(c,t,i<0?0:c.length-i);if(s)return{from:r(o,s.index),to:r(o,s.index+s[0].length),match:s}}}function m(e,t,n){if(!c(t))return h(e,t,n);t=l(t,"gm");for(var o,i=1,a=e.getLine(n.line).length-n.ch,s=n.line,f=e.firstLine();s>=f;){for(var m=0;m<i&&s>=f;m++){var d=e.getLine(s--);o=null==o?d:d+"\n"+o}i*=2;var g=u(o,t,a);if(g){var p=o.slice(0,g.index).split("\n"),v=g[0].split("\n"),C=s+p.length,S=p[p.length-1].length;return{from:r(C,S),to:r(C+v.length-1,1==v.length?S+v[0].length:v[v.length-1].length),match:g}}}}function d(e,t,n,r){if(e.length==t.length)return n;for(var o=0,i=n+Math.max(0,e.length-t.length);;){if(o==i)return o;var l=o+i>>1,a=r(e.slice(0,l)).length;if(a==n)return l;a>n?i=l:o=l+1}}function g(e,o,i,l){if(!o.length)return null;var a=l?t:n,c=a(o).split(/\r|\n\r?/);e:for(var s=i.line,f=i.ch,u=e.lastLine()+1-c.length;s<=u;s++,f=0){var h=e.getLine(s).slice(f),m=a(h);if(1==c.length){var g=m.indexOf(c[0]);if(-1==g)continue e;return i=d(h,m,g,a)+f,{from:r(s,d(h,m,g,a)+f),to:r(s,d(h,m,g+c[0].length,a)+f)}}var p=m.length-c[0].length;if(m.slice(p)==c[0]){for(var v=1;v<c.length-1;v++)if(a(e.getLine(s+v))!=c[v])continue e;var C=e.getLine(s+c.length-1),S=a(C),b=c[c.length-1];if(S.slice(0,b.length)==b)return{from:r(s,d(h,m,p,a)+f),to:r(s+c.length-1,d(C,S,b.length,a))}}}}function p(e,o,i,l){if(!o.length)return null;var a=l?t:n,c=a(o).split(/\r|\n\r?/);e:for(var s=i.line,f=i.ch,u=e.firstLine()-1+c.length;s>=u;s--,f=-1){var h=e.getLine(s);f>-1&&(h=h.slice(0,f));var m=a(h);if(1==c.length){var g=m.lastIndexOf(c[0]);if(-1==g)continue e;return{from:r(s,d(h,m,g,a)),to:r(s,d(h,m,g+c[0].length,a))}}var p=c[c.length-1];if(m.slice(0,p.length)==p){var v=1;for(i=s-c.length+1;v<c.length-1;v++)if(a(e.getLine(i+v))!=c[v])continue e;var C=e.getLine(s+1-c.length),S=a(C);if(S.slice(S.length-c[0].length)==c[0])return{from:r(s+1-c.length,d(C,S,C.length-c[0].length,a)),to:r(s,d(h,m,p.length,a))}}}}function v(e,t,n,o){var a;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==i(o)?a=o.caseFold:(a=o,o=null),"string"==typeof t?(null==a&&(a=!1),this.matches=function(n,r){return(n?p:g)(e,t,r,a)}):(t=l(t,"gm"),o&&!1===o.multiline?this.matches=function(n,r){return(n?h:s)(e,t,r)}:this.matches=function(n,r){return(n?m:f)(e,t,r)})}a(o,"regexpFlags"),a(l,"ensureFlags"),a(c,"maybeMultiline"),a(s,"searchRegexpForward"),a(f,"searchRegexpForwardMultiline"),a(u,"lastMatchIn"),a(h,"searchRegexpBackward"),a(m,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=a((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=a((function(e){return e.normalize("NFD")}),"noFold")):(t=a((function(e){return e.toLowerCase()}),"doFold"),n=a((function(e){return e}),"noFold")),a(d,"adjustPos"),a(g,"searchStringForward"),a(p,"searchStringBackward"),a(v,"SearchCursor"),v.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var o=this.matches(t,n);if(this.afterEmptyMatch=o&&0==e.cmpPos(o.from,o.to),o)return this.pos=o,this.atOccurrence=!0,this.pos.match||!0;var i=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:i,to:i},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var o=e.splitLines(t);this.doc.replaceRange(o,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+o.length-1,o[o.length-1].length+(1==o.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new v(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new v(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],o=this.getSearchCursor(t,this.getCursor("from"),n);o.findNext()&&!(e.cmpPos(o.to(),this.getCursor("to"))>0);)r.push({anchor:o.from(),head:o.to()});r.length&&this.setSelections(r,0)}))}(r.a.exports);var f=s.exports,u=Object.freeze(c(o(o({__proto__:null},Symbol.toStringTag,"Module"),"default",f),[s.exports]))},49180:function(e,t,n){n.r(t),n.d(t,{s:function(){return m}});var r=n(84215),o=n(63091),i=n(3921);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t,n){var r;return r=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=Object.defineProperty,s=function(e,t){return c(e,"name",{value:t,configurable:!0})};function f(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}s(f,"_mergeNamespaces");var u={exports:{}};!function(e){var t=e.commands,n=e.Pos;function r(t,r,o){if(o<0&&0==r.ch)return t.clipPos(n(r.line-1));var i=t.getLine(r.line);if(o>0&&r.ch>=i.length)return t.clipPos(n(r.line+1,0));for(var l,a="start",c=r.ch,s=c,f=o<0?0:i.length,u=0;s!=f;s+=o,u++){var h=i.charAt(o<0?s-1:s),m="_"!=h&&e.isWordChar(h)?"w":"o";if("w"==m&&h.toUpperCase()==h&&(m="W"),"start"==a)"o"!=m?(a="in",l=m):c=s+o;else if("in"==a&&l!=m){if("w"==l&&"W"==m&&o<0&&s--,"W"==l&&"w"==m&&o>0){if(s==c+1){l="w";continue}s--}break}}return n(r.line,s)}function o(e,t){e.extendSelectionsBy((function(n){return e.display.shift||e.doc.extend||n.empty()?r(e.doc,n.head,t):t<0?n.from():n.to()}))}function i(t,r){if(t.isReadOnly())return e.Pass;t.operation((function(){for(var e=t.listSelections().length,o=[],i=-1,l=0;l<e;l++){var a=t.listSelections()[l].head;if(!(a.line<=i)){var c=n(a.line+(r?0:1),0);t.replaceRange("\n",c,null,"+insertLine"),t.indentLine(c.line,null,!0),o.push({head:c,anchor:c}),i=a.line+1}}t.setSelections(o)})),t.execCommand("indentAuto")}function l(t,r){for(var o=r.ch,i=o,l=t.getLine(r.line);o&&e.isWordChar(l.charAt(o-1));)--o;for(;i<l.length&&e.isWordChar(l.charAt(i));)++i;return{from:n(r.line,o),to:n(r.line,i),word:l.slice(o,i)}}function a(e,t){for(var n=e.listSelections(),r=[],o=0;o<n.length;o++){var i=n[o],l=e.findPosV(i.anchor,t,"line",i.anchor.goalColumn),a=e.findPosV(i.head,t,"line",i.head.goalColumn);l.goalColumn=null!=i.anchor.goalColumn?i.anchor.goalColumn:e.cursorCoords(i.anchor,"div").left,a.goalColumn=null!=i.head.goalColumn?i.head.goalColumn:e.cursorCoords(i.head,"div").left;var c={anchor:l,head:a};r.push(i),r.push(c)}e.setSelections(r)}function c(t,n,r){for(var o=0;o<t.length;o++)if(0==e.cmpPos(t[o].from(),n)&&0==e.cmpPos(t[o].to(),r))return!0;return!1}s(r,"findPosSubword"),s(o,"moveSubword"),t.goSubwordLeft=function(e){o(e,-1)},t.goSubwordRight=function(e){o(e,1)},t.scrollLineUp=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top+t.clientHeight,"local");e.getCursor().line>=n&&e.execCommand("goLineUp")}e.scrollTo(null,t.top-e.defaultTextHeight())},t.scrollLineDown=function(e){var t=e.getScrollInfo();if(!e.somethingSelected()){var n=e.lineAtHeight(t.top,"local")+1;e.getCursor().line<=n&&e.execCommand("goLineDown")}e.scrollTo(null,t.top+e.defaultTextHeight())},t.splitSelectionByLine=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++)for(var i=t[o].from(),l=t[o].to(),a=i.line;a<=l.line;++a)l.line>i.line&&a==l.line&&0==l.ch||r.push({anchor:a==i.line?i:n(a,0),head:a==l.line?l:n(a)});e.setSelections(r,0)},t.singleSelectionTop=function(e){var t=e.listSelections()[0];e.setSelection(t.anchor,t.head,{scroll:!1})},t.selectLine=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++){var i=t[o];r.push({anchor:n(i.from().line,0),head:n(i.to().line+1,0)})}e.setSelections(r)},s(i,"insertLine"),t.insertLineAfter=function(e){return i(e,!1)},t.insertLineBefore=function(e){return i(e,!0)},s(l,"wordAt"),t.selectNextOccurrence=function(t){var r=t.getCursor("from"),o=t.getCursor("to"),i=t.state.sublimeFindFullWord==t.doc.sel;if(0==e.cmpPos(r,o)){var a=l(t,r);if(!a.word)return;t.setSelection(a.from,a.to),i=!0}else{var s=t.getRange(r,o),f=i?new RegExp("\\b"+s+"\\b"):s,u=t.getSearchCursor(f,o),h=u.findNext();if(h||(h=(u=t.getSearchCursor(f,n(t.firstLine(),0))).findNext()),!h||c(t.listSelections(),u.from(),u.to()))return;t.addSelection(u.from(),u.to())}i&&(t.state.sublimeFindFullWord=t.doc.sel)},t.skipAndSelectNextOccurrence=function(n){var r=n.getCursor("anchor"),o=n.getCursor("head");t.selectNextOccurrence(n),0!=e.cmpPos(r,o)&&n.doc.setSelections(n.doc.listSelections().filter((function(e){return e.anchor!=r||e.head!=o})))},s(a,"addCursorToSelection"),t.addCursorToPrevLine=function(e){a(e,-1)},t.addCursorToNextLine=function(e){a(e,1)},s(c,"isSelectedRange");var f="(){}[]";function u(t){for(var r=t.listSelections(),o=[],i=0;i<r.length;i++){var l=r[i],a=l.head,c=t.scanForBracket(a,-1);if(!c)return!1;for(;;){var s=t.scanForBracket(a,1);if(!s)return!1;if(s.ch==f.charAt(f.indexOf(c.ch)+1)){var u=n(c.pos.line,c.pos.ch+1);if(0!=e.cmpPos(u,l.from())||0!=e.cmpPos(s.pos,l.to())){o.push({anchor:u,head:s.pos});break}if(!(c=t.scanForBracket(c.pos,-1)))return!1}a=n(s.pos.line,s.pos.ch+1)}}return t.setSelections(o),!0}function h(e){return e?/\bpunctuation\b/.test(e)?e:void 0:null}function m(t,r,o){if(t.isReadOnly())return e.Pass;for(var i,l=t.listSelections(),a=[],c=0;c<l.length;c++){var s=l[c];if(!s.empty()){for(var f=s.from().line,u=s.to().line;c<l.length-1&&l[c+1].from().line==u;)u=l[++c].to().line;l[c].to().ch||u--,a.push(f,u)}}a.length?i=!0:a.push(t.firstLine(),t.lastLine()),t.operation((function(){for(var e=[],l=0;l<a.length;l+=2){var c=a[l],s=a[l+1],f=n(c,0),u=n(s),h=t.getRange(f,u,!1);r?h.sort((function(e,t){return e<t?-o:e==t?0:o})):h.sort((function(e,t){var n=e.toUpperCase(),r=t.toUpperCase();return n!=r&&(e=n,t=r),e<t?-o:e==t?0:o})),t.replaceRange(h,f,u),i&&e.push({anchor:f,head:n(s+1,0)})}i&&t.setSelections(e,0)}))}function d(t,n){t.operation((function(){for(var r=t.listSelections(),o=[],i=[],a=0;a<r.length;a++)(s=r[a]).empty()?(o.push(a),i.push("")):i.push(n(t.getRange(s.from(),s.to())));var c;for(t.replaceSelections(i,"around","case"),a=o.length-1;a>=0;a--){var s=r[o[a]];if(!(c&&e.cmpPos(s.head,c)>0)){var f=l(t,s.head);c=f.from,t.replaceRange(n(f.word),f.from,f.to)}}}))}function g(t){var n=t.getCursor("from"),r=t.getCursor("to");if(0==e.cmpPos(n,r)){var o=l(t,n);if(!o.word)return;n=o.from,r=o.to}return{from:n,to:r,query:t.getRange(n,r),word:o}}function p(e,t){var r=g(e);if(r){var o=r.query,i=e.getSearchCursor(o,t?r.to:r.from);(t?i.findNext():i.findPrevious())?e.setSelection(i.from(),i.to()):(i=e.getSearchCursor(o,t?n(e.firstLine(),0):e.clipPos(n(e.lastLine()))),(t?i.findNext():i.findPrevious())?e.setSelection(i.from(),i.to()):r.word&&e.setSelection(r.from,r.to))}}s(u,"selectBetweenBrackets"),t.selectScope=function(e){u(e)||e.execCommand("selectAll")},t.selectBetweenBrackets=function(t){if(!u(t))return e.Pass},s(h,"puncType"),t.goToBracket=function(t){t.extendSelectionsBy((function(r){var o=t.scanForBracket(r.head,1,h(t.getTokenTypeAt(r.head)));if(o&&0!=e.cmpPos(o.pos,r.head))return o.pos;var i=t.scanForBracket(r.head,-1,h(t.getTokenTypeAt(n(r.head.line,r.head.ch+1))));return i&&n(i.pos.line,i.pos.ch+1)||r.head}))},t.swapLineUp=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),o=[],i=t.firstLine()-1,l=[],a=0;a<r.length;a++){var c=r[a],s=c.from().line-1,f=c.to().line;l.push({anchor:n(c.anchor.line-1,c.anchor.ch),head:n(c.head.line-1,c.head.ch)}),0!=c.to().ch||c.empty()||--f,s>i?o.push(s,f):o.length&&(o[o.length-1]=f),i=f}t.operation((function(){for(var e=0;e<o.length;e+=2){var r=o[e],i=o[e+1],a=t.getLine(r);t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),i>t.lastLine()?t.replaceRange("\n"+a,n(t.lastLine()),null,"+swapLine"):t.replaceRange(a+"\n",n(i,0),null,"+swapLine")}t.setSelections(l),t.scrollIntoView()}))},t.swapLineDown=function(t){if(t.isReadOnly())return e.Pass;for(var r=t.listSelections(),o=[],i=t.lastLine()+1,l=r.length-1;l>=0;l--){var a=r[l],c=a.to().line+1,s=a.from().line;0!=a.to().ch||a.empty()||c--,c<i?o.push(c,s):o.length&&(o[o.length-1]=s),i=s}t.operation((function(){for(var e=o.length-2;e>=0;e-=2){var r=o[e],i=o[e+1],l=t.getLine(r);r==t.lastLine()?t.replaceRange("",n(r-1),n(r),"+swapLine"):t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),t.replaceRange(l+"\n",n(i,0),null,"+swapLine")}t.scrollIntoView()}))},t.toggleCommentIndented=function(e){e.toggleComment({indent:!0})},t.joinLines=function(e){for(var t=e.listSelections(),r=[],o=0;o<t.length;o++){for(var i=t[o],l=i.from(),a=l.line,c=i.to().line;o<t.length-1&&t[o+1].from().line==c;)c=t[++o].to().line;r.push({start:a,end:c,anchor:!i.empty()&&l})}e.operation((function(){for(var t=0,o=[],i=0;i<r.length;i++){for(var l,a=r[i],c=a.anchor&&n(a.anchor.line-t,a.anchor.ch),s=a.start;s<=a.end;s++){var f=s-t;s==a.end&&(l=n(f,e.getLine(f).length+1)),f<e.lastLine()&&(e.replaceRange(" ",n(f),n(f+1,/^\s*/.exec(e.getLine(f+1))[0].length)),++t)}o.push({anchor:c||l,head:l})}e.setSelections(o,0)}))},t.duplicateLine=function(e){e.operation((function(){for(var t=e.listSelections().length,r=0;r<t;r++){var o=e.listSelections()[r];o.empty()?e.replaceRange(e.getLine(o.head.line)+"\n",n(o.head.line,0)):e.replaceRange(e.getRange(o.from(),o.to()),o.from())}e.scrollIntoView()}))},s(m,"sortLines"),t.sortLines=function(e){m(e,!0,1)},t.reverseSortLines=function(e){m(e,!0,-1)},t.sortLinesInsensitive=function(e){m(e,!1,1)},t.reverseSortLinesInsensitive=function(e){m(e,!1,-1)},t.nextBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){var n=t.shift(),r=n.find();if(r)return t.push(n),e.setSelection(r.from,r.to)}},t.prevBookmark=function(e){var t=e.state.sublimeBookmarks;if(t)for(;t.length;){t.unshift(t.pop());var n=t[t.length-1].find();if(n)return e.setSelection(n.from,n.to);t.pop()}},t.toggleBookmark=function(e){for(var t=e.listSelections(),n=e.state.sublimeBookmarks||(e.state.sublimeBookmarks=[]),r=0;r<t.length;r++){for(var o=t[r].from(),i=t[r].to(),l=t[r].empty()?e.findMarksAt(o):e.findMarks(o,i),a=0;a<l.length;a++)if(l[a].sublimeBookmark){l[a].clear();for(var c=0;c<n.length;c++)n[c]==l[a]&&n.splice(c--,1);break}a==l.length&&n.push(e.markText(o,i,{sublimeBookmark:!0,clearWhenEmpty:!1}))}},t.clearBookmarks=function(e){var t=e.state.sublimeBookmarks;if(t)for(var n=0;n<t.length;n++)t[n].clear();t.length=0},t.selectBookmarks=function(e){var t=e.state.sublimeBookmarks,n=[];if(t)for(var r=0;r<t.length;r++){var o=t[r].find();o?n.push({anchor:o.from,head:o.to}):t.splice(r--,0)}n.length&&e.setSelections(n,0)},s(d,"modifyWordOrSelection"),t.smartBackspace=function(t){if(t.somethingSelected())return e.Pass;t.operation((function(){for(var r=t.listSelections(),o=t.getOption("indentUnit"),i=r.length-1;i>=0;i--){var l=r[i].head,a=t.getRange({line:l.line,ch:0},l),c=e.countColumn(a,null,t.getOption("tabSize")),s=t.findPosH(l,-1,"char",!1);if(a&&!/\S/.test(a)&&c%o==0){var f=new n(l.line,e.findColumn(a,c-o,o));f.ch!=l.ch&&(s=f)}t.replaceRange("",s,l,"+delete")}}))},t.delLineRight=function(e){e.operation((function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange("",t[r].anchor,n(t[r].to().line),"+delete");e.scrollIntoView()}))},t.upcaseAtCursor=function(e){d(e,(function(e){return e.toUpperCase()}))},t.downcaseAtCursor=function(e){d(e,(function(e){return e.toLowerCase()}))},t.setSublimeMark=function(e){e.state.sublimeMark&&e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor())},t.selectToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&e.setSelection(e.getCursor(),t)},t.deleteToSublimeMark=function(t){var n=t.state.sublimeMark&&t.state.sublimeMark.find();if(n){var r=t.getCursor(),o=n;if(e.cmpPos(r,o)>0){var i=o;o=r,r=i}t.state.sublimeKilled=t.getRange(r,o),t.replaceRange("",r,o)}},t.swapWithSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find();t&&(e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor()),e.setCursor(t))},t.sublimeYank=function(e){null!=e.state.sublimeKilled&&e.replaceSelection(e.state.sublimeKilled,null,"paste")},t.showInCenter=function(e){var t=e.cursorCoords(null,"local");e.scrollTo(null,(t.top+t.bottom)/2-e.getScrollInfo().clientHeight/2)},s(g,"getTarget"),s(p,"findAndGoTo"),t.findUnder=function(e){p(e,!0)},t.findUnderPrevious=function(e){p(e,!1)},t.findAllUnder=function(e){var t=g(e);if(t){for(var n=e.getSearchCursor(t.query),r=[],o=-1;n.findNext();)r.push({anchor:n.from(),head:n.to()}),n.from().line<=t.from.line&&n.from().ch<=t.from.ch&&o++;e.setSelections(r,o)}};var v=e.keyMap;v.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented","Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F5:"sortLines","Shift-F5":"reverseSortLines","Cmd-F5":"sortLinesInsensitive","Shift-Cmd-F5":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-D":"skipAndSelectNextOccurrence","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank","Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-1":"foldAll","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"},e.normalizeKeyMap(v.macSublime),v.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket","Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Shift-F9":"reverseSortLines","Ctrl-F9":"sortLinesInsensitive","Shift-Ctrl-F9":"reverseSortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-D":"skipAndSelectNextOccurrence","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark","Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-1":"foldAll","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse","Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"},e.normalizeKeyMap(v.pcSublime);var C=v.default==v.macDefault;v.sublime=C?v.macSublime:v.pcSublime}(r.a.exports,o.a.exports,i.a.exports);var h=u.exports,m=Object.freeze(f(a(a({__proto__:null},Symbol.toStringTag,"Module"),"default",h),[u.exports]))}}]);
//# sourceMappingURL=9180-e3eb1b380d85c13231d2.chunk.js.map