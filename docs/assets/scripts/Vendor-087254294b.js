!function(n){var r={};function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(i,d,p){var o=[],e={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},c=function(){};c.prototype=e,c=new c;var l=[];function m(e,t){return(void 0===e?"undefined":z(e))===t}var h=d.documentElement,g="svg"===h.nodeName.toLowerCase(),u=e._config.usePrefixes?"Moz O ms Webkit".split(" "):[];function A(){return"function"!=typeof d.createElement?d.createElement(arguments[0]):g?d.createElementNS.call(d,"http://www.w3.org/2000/svg",arguments[0]):d.createElement.apply(d,arguments)}e._cssomPrefixes=u;var t={elem:A("modernizr")};c._q.push(function(){delete t.elem});var v={style:t.elem.style};function s(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(e,t){var n=e.length;if("CSS"in i&&"supports"in i.CSS){for(;n--;)if(i.CSS.supports(s(e[n]),t))return!0;return!1}if("CSSSupportsRule"in i){for(var r=[];n--;)r.push("("+s(e[n])+":"+t+")");return function(e,t,n,r){var s,i,a,o,c,l="modernizr",u=A("div"),f=((c=d.body)||((c=A(g?"svg":"body")).fake=!0),c);if(parseInt(n,10))for(;n--;)(a=A("div")).id=r?r[n]:l+(n+1),u.appendChild(a);return(s=A("style")).type="text/css",s.id="s"+l,(f.fake?f:u).appendChild(s),f.appendChild(u),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(d.createTextNode(e)),u.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",o=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),i=t(u,e),f.fake?(f.parentNode.removeChild(f),h.style.overflow=o,h.offsetHeight):u.parentNode.removeChild(u),!!i}("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==function(e,t,n){var r;if("getComputedStyle"in i){r=getComputedStyle.call(i,e,null);var s=i.console;null!==r?r=r.getPropertyValue(n):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=e.currentStyle&&e.currentStyle[n];return r}(e,0,"position")})}return p}c._q.unshift(function(){delete v.style});var f=e._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];function b(e,t){return function(){return e.apply(t,arguments)}}function r(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+u.join(i+" ")+i).split(" ");return m(t,"string")||m(t,"undefined")?function(e,t,n,r){if(r=!m(r,"undefined")&&r,!m(n,"undefined")){var s=y(e,n);if(!m(s,"undefined"))return s}for(var i,a,o,c,l,u=["modernizr","tspan","samp"];!v.style&&u.length;)i=!0,v.modElem=A(u.shift()),v.style=v.modElem.style;function f(){i&&(delete v.style,delete v.modElem)}for(o=e.length,a=0;a<o;a++)if(c=e[a],l=v.style[c],!!~(""+c).indexOf("-")&&(c=c.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),v.style[c]!==p){if(r||m(n,"undefined"))return f(),"pfx"!=t||c;try{v.style[c]=n}catch(e){}if(v.style[c]!=l)return f(),"pfx"!=t||c}return f(),!1}(a,t,r,s):function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:m(r=t[e[s]],"function")?b(r,n||t):r;return!1}(a=(e+" "+f.join(i+" ")+i).split(" "),t,n)}function n(e,t,n){return r(e,p,p,t,n)}e._domPrefixes=f,e.testAllProps=r,e.testAllProps=n,c.addTest("flexbox",n("flexBasis","1px",!0)),c.addTest("svg",!!d.createElementNS&&!!d.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,i;for(var a in o)if(o.hasOwnProperty(a)){if(e=[],(t=o[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=m(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?c[i[0]]=r:(!c[i[0]]||c[i[0]]instanceof Boolean||(c[i[0]]=new Boolean(c[i[0]])),c[i[0]][i[1]]=r),l.push((r?"":"no-")+i.join("-"))}}(),function(e){var t=h.className,n=c._config.classPrefix||"";if(g&&(t=t.baseVal),c._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}c._config.enableClasses&&(t+=" "+n+e.join(" "+n),g?h.className.baseVal=t:h.className=t)}(l),delete e.addTest,delete e.addAsyncTest;for(var a=0;a<c._q.length;a++)c._q[a]();i.Modernizr=c}(window,document)},function(ae,oe,ce){var le,e,t,s,n,r,i,a,o,c;e=window,c=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(s=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=s.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)},s.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i)),function(t,i,e){"use strict";var s,l,c;i.createElement("picture");var S={},a=!1,n=function(){},r=i.createElement("img"),u=r.getAttribute,f=r.setAttribute,d=r.removeAttribute,o=i.documentElement,p={},C={algorithm:""},m=navigator.userAgent,E=/rident/.test(m)||/ecko/.test(m)&&m.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",h=/\s+\+?\d+(e\d+)?w/,g=/(\([^)]+\))?\s*(.+)/,A=t.picturefillCFG,v="font-size:100%!important;",y=!0,b={},z={},w=t.devicePixelRatio,T={px:1,in:96},M=i.createElement("a"),P=!1,L=/^[ \t\n\r\u000c]+/,_=/^[, \t\n\r\u000c]+/,R=/^[^ \t\n\r\u000c]+/,N=/[,]+$/,k=/^\d+$/,B=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,W=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},$=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function O(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var D,j,I,U,F,H,q,Q,G,V,J,K,X,Z,Y,ee,te=(D=/^([\d\.]+)(em|vw|px)$/,j=$(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in b))if(b[e]=!1,t&&(n=e.match(D)))b[e]=n[1]*T[n[2]];else try{b[e]=new Function("e",j(e))(T)}catch(e){}return b[e]}),ne=function(e,t){return e.w?(e.cWidth=S.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},re=function(e){if(a){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=(t=s.elements||S.qsa(s.context||i,s.reevaluate||s.reselect?S.sel:S.selShort)).length){for(S.setupRun(s),P=!0,n=0;n<r;n++)S.fillImg(t[n],s);S.teardownRun(s)}}};function se(e,t){return e.res-t.res}function ie(e,t){var n,r,s;if(e&&t)for(s=S.parseSet(t),e=S.makeUrl(e),n=0;n<s.length;n++)if(e===S.makeUrl(s[n].url)){r=s[n];break}return r}t.console&&console.warn,x in r||(x="src"),p["image/jpeg"]=!0,p["image/gif"]=!0,p["image/png"]=!0,p["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),S.ns=("pf"+(new Date).getTime()).substr(0,9),S.supSrcset="srcset"in r,S.supSizes="sizes"in r,S.supPicture=!!t.HTMLPictureElement,S.supSrcset&&S.supPicture&&!S.supSizes&&(Z=i.createElement("img"),r.srcset="data:,a",Z.src="data:,a",S.supSrcset=r.complete===Z.complete,S.supPicture=S.supSrcset&&S.supPicture),S.supSrcset&&!S.supSizes?(J="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",K=i.createElement("img"),X=function(){2===K.width&&(S.supSizes=!0),l=S.supSrcset&&!S.supSizes,a=!0,setTimeout(re)},K.onload=X,K.onerror=X,K.setAttribute("sizes","9px"),K.srcset=J+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",K.src=J):a=!0,S.selShort="picture>img,img[srcset]",S.sel=S.selShort,S.cfg=C,S.DPR=w||1,S.u=T,S.types=p,S.setSize=n,S.makeUrl=$(function(e){return M.href=e,M.href}),S.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},S.matchesMedia=function(){return t.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?S.matchesMedia=function(e){return!e||matchMedia(e).matches}:S.matchesMedia=S.mMQ,S.matchesMedia.apply(this,arguments)},S.mMQ=function(e){return!e||te(e)},S.calcLength=function(e){var t=te(e,!0)||!1;return t<0&&(t=!1),t},S.supportsType=function(e){return!e||p[e]},S.parseSize=$(function(e){var t=(e||"").match(g);return{media:t&&t[1],length:t&&t[2]}}),S.parseSet=function(e){return e.cands||(e.cands=function(r,f){function e(e){var t,n=e.exec(r.substring(a));if(n)return t=n[0],a+=t.length,t}var d,p,t,n,s,i=r.length,a=0,m=[];function o(){var e,t,n,r,s,i,a,o,c,l=!1,u={};for(r=0;r<p.length;r++)i=(s=p[r])[s.length-1],a=s.substring(0,s.length-1),o=parseInt(a,10),c=parseFloat(a),k.test(a)&&"w"===i?((e||t)&&(l=!0),0===o?l=!0:e=o):B.test(a)&&"x"===i?((e||t||n)&&(l=!0),c<0?l=!0:t=c):k.test(a)&&"h"===i?((n||t)&&(l=!0),0===o?l=!0:n=o):l=!0;l||(u.url=d,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(f.has1x=!0),u.set=f,m.push(u))}function c(){for(e(L),t="",n="in descriptor";;){if(s=r.charAt(a),"in descriptor"===n)if(O(s))t&&(p.push(t),t="",n="after descriptor");else{if(","===s)return a+=1,t&&p.push(t),void o();if("("===s)t+=s,n="in parens";else{if(""===s)return t&&p.push(t),void o();t+=s}}else if("in parens"===n)if(")"===s)t+=s,n="in descriptor";else{if(""===s)return p.push(t),void o();t+=s}else if("after descriptor"===n)if(O(s));else{if(""===s)return void o();n="in descriptor",a-=1}a+=1}}for(;;){if(e(_),i<=a)return m;d=e(R),p=[],","===d.slice(-1)?(d=d.replace(N,""),o()):c()}}(e.srcset,e)),e.cands},S.getEmValue=function(){var e;if(!s&&(e=i.body)){var t=i.createElement("div"),n=o.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",o.style.cssText=v,e.style.cssText=v,e.appendChild(t),s=t.offsetWidth,e.removeChild(t),s=parseFloat(s,10),o.style.cssText=n,e.style.cssText=r}return s||16},S.calcListLength=function(u){if(!(u in z)||C.uT){var e=S.calcLength(function(e){var t,n,r,s,i,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],s=[],i=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(s.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),s;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(O(t)){if(e.charAt(a-1)&&O(e.charAt(a-1))||!n){a+=1;continue}if(0===i){c(),a+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(u)).length,t=0;t<r;t++)if(o=i=(s=n[t])[s.length-1],c.test(o)&&0<=parseFloat(o)||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),S.matchesMedia(s))return a}return"100vw"}());z[u]=e||T.width}return z[u]},S.setRes=function(e){var t;if(e)for(var n=0,r=(t=S.parseSet(e)).length;n<r;n++)ne(t[n],e.sizes);return t},S.setRes.res=ne,S.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,u,f=t[S.ns],d=S.DPR;if(o=f.curSrc||t[x],(c=f.curCan||(y=t,b=o,!(z=e[0].set)&&b&&(z=(z=y[S.ns].sets)&&z[z.length-1]),(w=ie(b,z))&&(b=S.makeUrl(b),y[S.ns].curSrc=b,(y[S.ns].curCan=w).res||ne(w,w.set.sizes)),w))&&c.set===e[0].set&&((u=E&&!t.complete&&c.res-.1>d)||(c.cached=!0,c.res>=d&&(a=c))),!a)for(e.sort(se),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=d){a=e[s=r-1]&&(u||o!==S.makeUrl(n.url))&&(p=e[s].res,m=n.res,h=d,g=e[s].cached,v=A=void 0,h<("saveData"===C.algorithm?2.7<p?h+1:(v=(m-h)*(A=Math.pow(p-.6,1.5)),g&&(v+=.1*A),p+v):1<h?Math.sqrt(p*m):p))?e[s]:n;break}a&&(l=S.makeUrl(a.url),f.curSrc=l,f.curCan=a,l!==o&&S.setSrc(t,a),S.setSize(t))}var p,m,h,g,A,v,y,b,z,w},S.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},S.getSet=function(e){var t,n,r,s=!1,i=e[S.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&S.matchesMedia(n.media)&&(r=S.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},S.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[S.ns];(void 0===c.src||n.src)&&(c.src=u.call(e,"src"),c.src?f.call(e,"data-pfsrc",c.src):d.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!S.supSrcset||e.srcset)&&(r=u.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[S.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:u.call(e,"sizes")},c.sets.push(s),(i=(l||c.src)&&h.test(c.srcset||""))||!c.src||ie(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!S.supSrcset||i&&!S.supSizes),a&&S.supSrcset&&!c.supported&&(r?(f.call(e,"data-pfsrcset",r),e.srcset=""):d.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==S.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},S.fillImg=function(e,t){var n,r,s,i,a,o=t.reselect||t.reevaluate;e[S.ns]||(e[S.ns]={}),n=e[S.ns],(o||n.evaled!==c)&&(n.parsed&&!t.reevaluate||S.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:(r=e,i=S.getSet(r),a=!1,"pending"!==i&&(a=c,i&&(s=S.setRes(i),S.applySetCandidate(s,r))),r[S.ns].evaled=a))},S.setupRun=function(){P&&!y&&w===t.devicePixelRatio||(y=!1,w=t.devicePixelRatio,b={},z={},S.DPR=w||1,T.width=Math.max(t.innerWidth||0,o.clientWidth),T.height=Math.max(t.innerHeight||0,o.clientHeight),T.vw=T.width/100,T.vh=T.height/100,c=[T.height,T.width,w].join("-"),T.em=S.getEmValue(),T.rem=T.em)},S.supPicture?(re=n,S.fillImg=n):(q=t.attachEvent?/d$|^c/:/d$|^c|^i/,Q=function(){var e=i.readyState||"";G=setTimeout(Q,"loading"===e?200:999),i.body&&(S.fillImgs(),(I=I||q.test(e))&&clearTimeout(G))},G=setTimeout(Q,i.body?9:99),V=o.clientHeight,W(t,"resize",(H=function(){var e=new Date-F;e<99?U=setTimeout(H,99-e):(U=null,y=Math.max(t.innerWidth||0,o.clientWidth)!==T.width||o.clientHeight!==V,V=o.clientHeight,y&&S.fillImgs())},function(){F=new Date,U||(U=setTimeout(H,99))})),W(i,"readystatechange",Q)),S.picturefill=re,S.fillImgs=re,S.teardownRun=n,re._=S,t.picturefillCFG={pf:S,push:function(e){var t=e.shift();"function"==typeof S[t]?S[t].apply(S,e):(C[t]=e[0],P&&S.fillImgs({reselect:!0}))}};for(;A&&A.length;)t.picturefillCFG.push(A.shift());t.picturefill=re,"object"==typeof ae&&"object"==typeof ae.exports?ae.exports=re:void 0===(le=function(){return re}.call(oe,ce,oe,ae))||(ae.exports=le),S.supPicture||(p["image/webp"]=(Y="image/webp",(ee=new t.Image).onerror=function(){p[Y]=!1,re()},ee.onload=function(){p[Y]=1===ee.width,re()},ee.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"))}(window,document)},function(e,t){var n,r;n=window,r=function(r,u){"use strict";if(u.getElementsByClassName){var f,d,n,s,t,i,a,o,e,p=u.documentElement,c=r.Date,l=r.HTMLPictureElement,m=r.addEventListener,h=r.setTimeout,g=r.requestAnimationFrame||h,A=r.requestIdleCallback,v=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],b={},z=Array.prototype.forEach,w=function(e,t){return b[t]||(b[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),b[t].test(e.getAttribute("class")||"")&&b[t]},S=function(e,t){w(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},C=function(e,t){var n;(n=w(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},E=function(t,n,e){var r=e?"addEventListener":"removeEventListener";e&&E(t,n),y.forEach(function(e){t[r](e,n)})},x=function(e,t,n,r,s){var i=u.createEvent("CustomEvent");return n||(n={}),n.instance=f,i.initCustomEvent(t,!r,!s,n),e.dispatchEvent(i),i},T=function(e,t){var n;!l&&(n=r.picturefill||d.pf)?n({reevaluate:!0,elements:[e]}):t&&t.src&&(e.src=t.src)},M=function(e,t){return(getComputedStyle(e,null)||{})[t]},P=function(e,t,n){for(n=n||e.offsetWidth;n<d.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},L=(i=[],a=t=[],(e=function(e,t){n&&!t?e.apply(this,arguments):(a.push(e),s||(s=!0,(u.hidden?h:g)(o)))})._lsFlush=o=function(){var e=a;for(a=t.length?i:t,s=!(n=!0);e.length;)e.shift()();n=!1},e),_=function(n,e){return e?function(){L(n)}:function(){var e=this,t=arguments;L(function(){n.apply(e,t)})}},R=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=c.now()-n;e<99?h(s,99-e):(A||r)(r)};return function(){n=c.now(),t||(t=h(s,99))}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(e in d=r.lazySizesConfig||r.lazysizesConfig||{},t)e in d||(d[e]=t[e]);r.lazySizesConfig=d,h(function(){d.init&&we()})}();var N,k,B,W,$,O,D,j,I,U,F,H,q,Q,G,V,J,K,X,Z,Y,ee,te,ne,re,se,ie,ae,oe,ce,le,ue,fe,de,pe,me,he,ge,Ae,ve,ye,be=(re=/^img$/i,se=/^iframe$/i,ie="onscroll"in r&&!/glebot/.test(navigator.userAgent),ce=-1,le=function(e){oe--,e&&e.target&&E(e.target,le),(!e||oe<0||!e.target)&&(oe=0)},ue=function(e,t){var n,r=e,s="hidden"==M(u.body,"visibility")||"hidden"!=M(e,"visibility");for(H-=t,G+=t,q-=t,Q+=t;s&&(r=r.offsetParent)&&r!=u.body&&r!=p;)(s=0<(M(r,"opacity")||1))&&"visible"!=M(r,"overflow")&&(n=r.getBoundingClientRect(),s=Q>n.left&&q<n.right&&G>n.top-1&&H<n.bottom+1);return s},X=fe=function(){var e,t,n,r,s,i,a,o,c,l=f.elements;if((j=d.loadMode)&&oe<8&&(e=l.length)){t=0,ce++,null==J&&("expand"in d||(d.expand=500<p.clientHeight&&500<p.clientWidth?500:370),V=d.expand,J=V*d.expFactor),ae<J&&oe<1&&2<ce&&2<j&&!u.hidden?(ae=J,ce=0):ae=1<j&&1<ce&&oe<6?V:0;for(;t<e;t++)if(l[t]&&!l[t]._lazyRace)if(ie)if((o=l[t].getAttribute("data-expand"))&&(i=1*o)||(i=ae),c!==i&&(U=innerWidth+i*K,F=innerHeight+i,a=-1*i,c=i),n=l[t].getBoundingClientRect(),(G=n.bottom)>=a&&(H=n.top)<=F&&(Q=n.right)>=a*K&&(q=n.left)<=U&&(G||Q||q||H)&&(d.loadHidden||"hidden"!=M(l[t],"visibility"))&&(O&&oe<3&&!o&&(j<3||ce<4)||ue(l[t],i))){if(ve(l[t]),s=!0,9<oe)break}else!s&&O&&!r&&oe<4&&ce<4&&2<j&&($[0]||d.preloadAfterLoad)&&($[0]||!o&&(G||Q||q||H||"auto"!=l[t].getAttribute(d.sizesAttr)))&&(r=$[0]||l[t]);else ve(l[t]);r&&!s&&ve(r)}},Y=oe=ae=0,ee=d.ricTimeout,te=function(){Z=!1,Y=c.now(),X()},ne=A&&d.ricTimeout?function(){A(te,{timeout:ee}),ee!==d.ricTimeout&&(ee=d.ricTimeout)}:_(function(){h(te)},!0),de=function(e){var t;(e=!0===e)&&(ee=33),Z||(Z=!0,(t=125-(c.now()-Y))<0&&(t=0),e||t<9&&A?ne():h(ne,t))},me=_(pe=function(e){S(e.target,d.loadedClass),C(e.target,d.loadingClass),E(e.target,he),x(e.target,"lazyloaded")}),he=function(e){me({target:e.target})},ge=function(e){var t,n=e.getAttribute(d.srcsetAttr);(t=d.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Ae=_(function(e,t,n,r,s){var i,a,o,c,l,u;(l=x(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?S(e,d.autosizesClass):e.setAttribute("sizes",r)),a=e.getAttribute(d.srcsetAttr),i=e.getAttribute(d.srcAttr),s&&(c=(o=e.parentNode)&&v.test(o.nodeName||"")),u=t.firesLoad||"src"in e&&(a||i||c),l={target:e},u&&(E(e,le,!0),clearTimeout(D),D=h(le,2500),S(e,d.loadingClass),E(e,he,!0)),c&&z.call(o.getElementsByTagName("source"),ge),a?e.setAttribute("srcset",a):i&&!c&&(se.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,i):e.src=i),s&&(a||c)&&T(e,{src:i})),e._lazyRace&&delete e._lazyRace,C(e,d.lazyClass),L(function(){(!u||e.complete&&1<e.naturalWidth)&&(u?le(l):oe--,pe(l))},!0)}),ye=function(){if(!O)if(c.now()-I<999)h(ye,999);else{var e=R(function(){d.loadMode=3,de()});O=!0,d.loadMode=3,de(),m("scroll",function(){3==d.loadMode&&(d.loadMode=2),e()},!0)}},{_:function(){I=c.now(),f.elements=u.getElementsByClassName(d.lazyClass),$=u.getElementsByClassName(d.lazyClass+" "+d.preloadClass),K=d.hFac,m("scroll",de,!0),m("resize",de,!0),r.MutationObserver?new MutationObserver(de).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p.addEventListener("DOMNodeInserted",de,!0),p.addEventListener("DOMAttrModified",de,!0),setInterval(de,999)),m("hashchange",de,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){u.addEventListener(e,de,!0)}),/d$|^c/.test(u.readyState)?ye():(m("load",ye),u.addEventListener("DOMContentLoaded",de),h(ye,2e4)),f.elements.length?(fe(),L._lsFlush()):de()},checkElems:de,unveil:ve=function(e){var t,n=re.test(e.nodeName),r=n&&(e.getAttribute(d.sizesAttr)||e.getAttribute("sizes")),s="auto"==r;(!s&&O||!n||!e.getAttribute("src")&&!e.srcset||e.complete||w(e,d.errorClass)||!w(e,d.lazyClass))&&(t=x(e,"lazyunveilread").detail,s&&ze.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,oe++,Ae(e,t,s,r,n))}}),ze=(k=_(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),v.test(t.nodeName||""))for(i=0,a=(s=t.getElementsByTagName("source")).length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||T(e,n.detail)}),B=function(e,t,n){var r,s=e.parentNode;s&&(n=P(e,s,n),(r=x(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&k(e,s,r,n))},{_:function(){N=u.getElementsByClassName(d.autosizesClass),m("resize",W)},checkElems:W=R(function(){var e,t=N.length;if(t)for(e=0;e<t;e++)B(N[e])}),updateElem:B}),we=function(){we.i||(we.i=!0,ze._(),be._())};return f={cfg:d,autoSizer:ze,loader:be,init:we,uP:T,aC:S,rC:C,hC:w,fire:x,gW:P,rAF:L}}}(n,n.document),n.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}]);