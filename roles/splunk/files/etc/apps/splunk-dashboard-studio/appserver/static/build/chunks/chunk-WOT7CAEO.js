import{$ as we,Qa as be,Ra as Fe,Ta as qe,U as We,Y as Ze,_ as Ve,da as ve,e as ze,fa as Xe,r as Ue}from"./chunk-DHWZTE6I.js";import{Fa as He,a as Ge}from"./chunk-25ZUMQES.js";import{b as fe,c as Ne,o as he,qa as Me,r as me,v as Be}from"./chunk-FQXD4G67.js";import{b as de,c as ge,g as Pe,i as $}from"./chunk-VV54FNKQ.js";var Ee=Pe((ut,ke)=>{ke.exports=function(v){var E={};function m(u){if(E[u])return E[u].exports;var c=E[u]={i:u,l:!1,exports:{}};return v[u].call(c.exports,c,c.exports,m),c.l=!0,c.exports}return m.m=v,m.c=E,m.d=function(u,c,C){m.o(u,c)||Object.defineProperty(u,c,{enumerable:!0,get:C})},m.r=function(u){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},m.t=function(u,c){if(c&1&&(u=m(u)),c&8||c&4&&typeof u=="object"&&u&&u.__esModule)return u;var C=Object.create(null);if(m.r(C),Object.defineProperty(C,"default",{enumerable:!0,value:u}),c&2&&typeof u!="string")for(var a in u)m.d(C,a,function(n){return u[n]}.bind(null,a));return C},m.n=function(u){var c=u&&u.__esModule?function(){return u.default}:function(){return u};return m.d(c,"a",c),c},m.o=function(u,c){return Object.prototype.hasOwnProperty.call(u,c)},m.p="",m(m.s=151)}({0:function(v,E){v.exports=Xe()},1:function(v,E){v.exports=me()},151:function(v,E,m){"use strict";m.r(E),m.d(E,"default",function(){return I});var u=m(2),c=m.n(u),C=m(1),a=m.n(C),n=m(4),f=m(79),h=m.n(f),S=m(3),o=m.n(S),l=m(0),k=o.a.pre.withConfig({displayName:"CodeStyles__Styled",componentId:"sc-1eq4k68-0"})(["",";"," line-height:",";text-align:left;tab-size:4;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;hyphens:none;overflow-x:auto;margin-bottom:1.3em;&:focus-visible{outline:solid ",";}"],l.mixins.reset("block"),Object(l.pick)({enterprise:{dark:Object(S.css)(["color:",";"],l.variables.gray92)}}),Object(l.pick)({enterprise:"17px",prisma:l.variables.lineHeight}),l.variables.focusColor),W=o.a.code.withConfig({displayName:"CodeStyles__StyledCode",componentId:"sc-1eq4k68-1"})(["font-family:",";"],l.variables.monoFontFamily),b=o.a.span.withConfig({displayName:"CodeStyles__StyledIndent",componentId:"sc-1eq4k68-2"})(["&:not(:last-child){background-image:linear-gradient( to left,rgba(0,0,0,0.15) 1px,transparent 1px,transparent );}"]),x=Object(l.pick)({prisma:l.variables.syntaxGray,enterprise:{dark:l.variables.gray60,light:l.variables.syntaxGray}}),F=Object(l.pick)({prisma:l.variables.syntaxPurple,enterprise:{dark:l.variables.syntaxPurpleLight,light:l.variables.syntaxPurple}}),w=Object(l.pick)({prisma:l.variables.syntaxGreen,enterprise:{dark:l.variables.syntaxGreenLight,light:l.variables.syntaxGreen}}),P=Object(l.pick)({prisma:l.variables.syntaxBlue,enterprise:{dark:l.variables.syntaxBlueLight,light:l.variables.syntaxBlue}}),H=Object(l.pick)({prisma:l.variables.syntaxRed,enterprise:{dark:l.variables.syntaxRedLight,light:l.variables.syntaxRed}}),se={comment:x,prolog:x,doctype:x,cdata:x,punctuation:x,property:F,tag:F,boolean:F,number:F,constant:F,symbol:F,deleted:F,key:F,selector:w,"attr-name":w,string:w,char:w,builtin:w,inserted:w,operator:l.variables.syntaxBrown,entity:l.variables.syntaxBrown,url:l.variables.syntaxBrown,atrule:P,"attr-value":P,keyword:P,function:H,regex:l.variables.syntaxOrange,important:l.variables.syntaxOrange,variable:l.variables.syntaxOrange},t=o.a.span.withConfig({displayName:"CodeStyles__StyledToken",componentId:"sc-1eq4k68-3"})(["color:",";cursor:",";opacity:",";font-style:",";font-weight:",";"],function(d){var y=d.partType;return se[y]},function(d){var y=d.partType;return y==="entity"?"help":null},function(d){var y=d.partType;return y==="namespace"?.7:null},function(d){var y=d.partType;return y==="italic"?"italic":null},function(d){var y=d.partType;return y==="important"||y==="bold"?"bold":null});function e(){return e=Object.assign||function(d){for(var y=1;y<arguments.length;y++){var _=arguments[y];for(var O in _)Object.prototype.hasOwnProperty.call(_,O)&&(d[O]=_[O])}return d},e.apply(this,arguments)}function r(d,y){if(d==null)return{};var _=i(d,y),O,D;if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(d);for(D=0;D<N.length;D++)O=N[D],!(y.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,O)||(_[O]=d[O]))}return _}function i(d,y){if(d==null)return{};var _={},O=Object.keys(d),D,N;for(N=0;N<O.length;N++)D=O[N],!(y.indexOf(D)>=0)&&(_[D]=d[D]);return _}var s=["bash","clike","css","html","json","javascript","js","jsx","typescript","ts","tsx","markup","mathml","svg","xml","yaml","yml"];function p(d,y){return h.a.tokenize(d,h.a.languages[y])}var A={elementRef:a.a.oneOfType([a.a.func,a.a.object]),indentChars:a.a.number,language:a.a.oneOf(s),showIndentGuide:a.a.bool,value:a.a.string};function g(d){var y=d.elementRef,_=d.indentChars,O=_===void 0?4:_,D=d.language,N=D===void 0?"javascript":D,ne=d.showIndentGuide,R=ne===void 0?!0:ne,j=d.value,V=j===void 0?"":j,K=r(d,["elementRef","indentChars","language","showIndentGuide","value"]),G=Object(n.repeat)(" ",O),ue=function(X){var L=Math.floor(X/O),Z=X%O,U=Object(n.times)(L,function(ae){return c.a.createElement(b,{key:ae.toString()},G)});return Z&&U.push(Object(n.repeat)(" ",Z)),U},z=p(V,N),q=function Y(X){return Object(n.castArray)(X).map(function(L,Z){if(typeof L=="string"){if(!R)return L;var U=L.split(`
`);return U.length===1?L:Object(n.flatten)(U.map(function(Q,Ae){var ce=Ae===0?[]:[`
`],pe=Q.match(/^(\s+)(.*)/);return pe?ce.push(c.a.createElement("span",{key:"".concat(Z.toString(),":").concat(Ae.toString())},ue(pe[1].length)),pe[2]):ce.push(Q),ce}))}var ae=typeof L.content=="string"?L.content:Y(L.content);return c.a.createElement(t,{partType:L.type,key:Z.toString()},ae)})},J=q(z);return c.a.createElement(k,e({"data-test":"code",ref:y,tabIndex:0},K),c.a.createElement(W,{className:"language-".concat(N)},J))}g.propTypes=A;var I=g},2:function(v,E){v.exports=fe()},3:function(v,E){v.exports=he()},4:function(v,E){v.exports=Ne()},79:function(v,E,m){(function(){var u=void 0,c=void 0,C=typeof u!="undefined"?u:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(n){var f=/\blang(?:uage)?-([\w-]+)\b/i,h=0,S={},o={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof l?new l(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++h}),t.__id},clone:function t(e,r){r=r||{};var i,s;switch(o.util.type(e)){case"Object":if(s=o.util.objId(e),r[s])return r[s];i={},r[s]=i;for(var p in e)e.hasOwnProperty(p)&&(i[p]=t(e[p],r));return i;case"Array":return s=o.util.objId(e),r[s]?r[s]:(i=[],r[s]=i,e.forEach(function(A,g){i[g]=t(A,r)}),i);default:return e}},getLanguage:function(t){for(;t&&!f.test(t.className);)t=t.parentElement;return t?(t.className.match(f)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var i="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(i))return!1;t=t.parentElement}return!!r}},languages:{plain:S,plaintext:S,text:S,txt:S,extend:function(t,e){var r=o.util.clone(o.languages[t]);for(var i in e)r[i]=e[i];return r},insertBefore:function(t,e,r,i){i=i||o.languages;var s=i[t],p={};for(var A in s)if(s.hasOwnProperty(A)){if(A==e)for(var g in r)r.hasOwnProperty(g)&&(p[g]=r[g]);r.hasOwnProperty(A)||(p[A]=s[A])}var I=i[t];return i[t]=p,o.languages.DFS(o.languages,function(d,y){y===I&&d!=t&&(this[d]=p)}),p},DFS:function t(e,r,i,s){s=s||{};var p=o.util.objId;for(var A in e)if(e.hasOwnProperty(A)){r.call(e,A,e[A],i||A);var g=e[A],I=o.util.type(g);I==="Object"&&!s[p(g)]?(s[p(g)]=!0,t(g,r,null,s)):I==="Array"&&!s[p(g)]&&(s[p(g)]=!0,t(g,r,A,s))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var i={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(var s=0,p;p=i.elements[s++];)o.highlightElement(p,e===!0,i.callback)},highlightElement:function(t,e,r){var i=o.util.getLanguage(t),s=o.languages[i];t.className=t.className.replace(f,"").replace(/\s+/g," ")+" language-"+i;var p=t.parentElement;p&&p.nodeName.toLowerCase()==="pre"&&(p.className=p.className.replace(f,"").replace(/\s+/g," ")+" language-"+i);var A=t.textContent,g={element:t,language:i,grammar:s,code:A};function I(y){g.highlightedCode=y,o.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,o.hooks.run("after-highlight",g),o.hooks.run("complete",g),r&&r.call(g.element)}if(o.hooks.run("before-sanity-check",g),p=g.element.parentElement,p&&p.nodeName.toLowerCase()==="pre"&&!p.hasAttribute("tabindex")&&p.setAttribute("tabindex","0"),!g.code){o.hooks.run("complete",g),r&&r.call(g.element);return}if(o.hooks.run("before-highlight",g),!g.grammar){I(o.util.encode(g.code));return}if(e&&n.Worker){var d=new Worker(o.filename);d.onmessage=function(y){I(y.data)},d.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else I(o.highlight(g.code,g.grammar,g.language))},highlight:function(t,e,r){var i={code:t,grammar:e,language:r};return o.hooks.run("before-tokenize",i),i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),l.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var i in r)e[i]=r[i];delete e.rest}var s=new b;return x(s,s.head,t),W(t,s,e,s.head,0),w(s)},hooks:{all:{},add:function(t,e){var r=o.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=o.hooks.all[t];if(!(!r||!r.length))for(var i=0,s;s=r[i++];)s(e)}},Token:l};n.Prism=o;function l(t,e,r,i){this.type=t,this.content=e,this.alias=r,this.length=(i||"").length|0}l.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(I){i+=t(I,r)}),i}var s={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},p=e.alias;p&&(Array.isArray(p)?Array.prototype.push.apply(s.classes,p):s.classes.push(p)),o.hooks.run("wrap",s);var A="";for(var g in s.attributes)A+=" "+g+'="'+(s.attributes[g]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+A+">"+s.content+"</"+s.tag+">"};function k(t,e,r,i){t.lastIndex=e;var s=t.exec(r);if(s&&i&&s[1]){var p=s[1].length;s.index+=p,s[0]=s[0].slice(p)}return s}function W(t,e,r,i,s,p){for(var A in r)if(!(!r.hasOwnProperty(A)||!r[A])){var g=r[A];g=Array.isArray(g)?g:[g];for(var I=0;I<g.length;++I){if(p&&p.cause==A+","+I)return;var d=g[I],y=d.inside,_=!!d.lookbehind,O=!!d.greedy,D=d.alias;if(O&&!d.pattern.global){var N=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,N+"g")}for(var ne=d.pattern||d,R=i.next,j=s;R!==e.tail&&!(p&&j>=p.reach);j+=R.value.length,R=R.next){var V=R.value;if(e.length>t.length)return;if(!(V instanceof l)){var K=1,G;if(O){if(G=k(ne,j,t,_),!G)break;var J=G.index,ue=G.index+G[0].length,z=j;for(z+=R.value.length;J>=z;)R=R.next,z+=R.value.length;if(z-=R.value.length,j=z,R.value instanceof l)continue;for(var q=R;q!==e.tail&&(z<ue||typeof q.value=="string");q=q.next)K++,z+=q.value.length;K--,V=t.slice(j,z),G.index-=j}else if(G=k(ne,0,V,_),!G)continue;var J=G.index,Y=G[0],X=V.slice(0,J),L=V.slice(J+Y.length),Z=j+V.length;p&&Z>p.reach&&(p.reach=Z);var U=R.prev;X&&(U=x(e,U,X),j+=X.length),F(e,U,K);var ae=new l(A,y?o.tokenize(Y,y):Y,D,Y);if(R=x(e,U,ae),L&&x(e,R,L),K>1){var Q={cause:A+","+I,reach:Z};W(t,e,r,R.prev,j,Q),p&&Q.reach>p.reach&&(p.reach=Q.reach)}}}}}}function b(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function x(t,e,r){var i=e.next,s={value:r,prev:e,next:i};return e.next=s,i.prev=s,t.length++,s}function F(t,e,r){for(var i=e.next,s=0;s<r&&i!==t.tail;s++)i=i.next;e.next=i,i.prev=e,t.length-=s}function w(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!n.document)return n.addEventListener&&(o.disableWorkerMessageHandler||n.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,i=e.code,s=e.immediateClose;n.postMessage(o.highlight(i,o.languages[r],r)),s&&n.close()},!1)),o;var P=o.util.currentScript();P&&(o.filename=P.src,P.hasAttribute("data-manual")&&(o.manual=!0));function H(){o.manual||o.highlightAll()}if(!o.manual){var se=document.readyState;se==="loading"||se==="interactive"&&P&&P.defer?document.addEventListener("DOMContentLoaded",H):u.requestAnimationFrame?u.requestAnimationFrame(H):u.setTimeout(H,16)}return o}(C);v.exports&&(v.exports=a),typeof c!="undefined"&&(c.Prism=a),a.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},a.languages.webmanifest=a.languages.json,a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(f,h){var S={};S["language-"+h]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[h]},S.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:S}};o["language-"+h]={pattern:/[\s\S]+/,inside:a.languages[h]};var l={};l[f]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return f}),"i"),lookbehind:!0,greedy:!0,inside:o},a.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(n,f){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[f,"language-"+f],inside:a.languages[f]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(n){var f=n.util.clone(n.languages.javascript),h=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,S=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function l(b,x){return b=b.replace(/<S>/g,function(){return h}).replace(/<BRACES>/g,function(){return S}).replace(/<SPREAD>/g,function(){return o}),RegExp(b,x)}o=l(o).source,n.languages.jsx=n.languages.extend("markup",f),n.languages.jsx.tag.pattern=l(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=f.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:l(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:l(/=<BRACES>/.source),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx},alias:"language-javascript"}},n.languages.jsx.tag);var k=function(b){return b?typeof b=="string"?b:typeof b.content=="string"?b.content:b.content.map(k).join(""):""},W=function(b){for(var x=[],F=0;F<b.length;F++){var w=b[F],P=!1;if(typeof w!="string"&&(w.type==="tag"&&w.content[0]&&w.content[0].type==="tag"?w.content[0].content[0].content==="</"?x.length>0&&x[x.length-1].tagName===k(w.content[0].content[1])&&x.pop():w.content[w.content.length-1].content==="/>"||x.push({tagName:k(w.content[0].content[1]),openedBraces:0}):x.length>0&&w.type==="punctuation"&&w.content==="{"?x[x.length-1].openedBraces++:x.length>0&&x[x.length-1].openedBraces>0&&w.type==="punctuation"&&w.content==="}"?x[x.length-1].openedBraces--:P=!0),(P||typeof w=="string")&&x.length>0&&x[x.length-1].openedBraces===0){var H=k(w);F<b.length-1&&(typeof b[F+1]=="string"||b[F+1].type==="plain-text")&&(H+=k(b[F+1]),b.splice(F+1,1)),F>0&&(typeof b[F-1]=="string"||b[F-1].type==="plain-text")&&(H=k(b[F-1])+H,b.splice(F-1,1),F--),b[F]=new n.Token("plain-text",H,null,H)}w.content&&typeof w.content!="string"&&W(w.content)}};n.hooks.add("after-tokenize",function(b){b.language!=="jsx"&&b.language!=="tsx"||W(b.tokens)})}(a),function(n){n.languages.typescript=n.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),n.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete n.languages.typescript.parameter;var f=n.languages.extend("typescript",{});delete f["class-name"],n.languages.typescript["class-name"].inside=f,n.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:f}}}}),n.languages.ts=n.languages.typescript}(a),function(n){var f=n.util.clone(n.languages.typescript);n.languages.tsx=n.languages.extend("jsx",f);var h=n.languages.tsx.tag;h.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+h.pattern.source+")",h.pattern.flags),h.lookbehind=!0}(a),function(n){var f=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+f.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+f.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+f.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:f,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},n.languages.css.atrule.inside.rest=n.languages.css;var h=n.languages.markup;h&&(h.tag.addInlined("style","css"),h.tag.addAttribute("style","css"))}(a),function(n){var f="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",h={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},S={bash:h,environment:{pattern:RegExp("\\$"+f),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+f),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};n.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+f),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:S},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:h}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:S},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:S.entity}}],environment:{pattern:RegExp("\\$?"+f),alias:"constant"},variable:S.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},h.inside=n.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],l=S.variable[1].inside,k=0;k<o.length;k++)l[o[k]]=n.languages.bash[o[k]];n.languages.shell=n.languages.bash}(a),function(n){var f=/[*&][^\s[\]{},]+/,h=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,S="(?:"+h.source+"(?:[ 	]+"+f.source+")?|"+f.source+"(?:[ 	]+"+h.source+")?)",o=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),l=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function k(W,b){b=(b||"").replace(/m/g,"")+"m";var x=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return S}).replace(/<<value>>/g,function(){return W});return RegExp(x,b)}n.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return S})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return S}).replace(/<<key>>/g,function(){return"(?:"+o+"|"+l+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:k(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:k(/true|false/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:k(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:k(l),lookbehind:!0,greedy:!0},number:{pattern:k(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:h,important:f,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},n.languages.yml=n.languages.yaml}(a)})()}})});var T=$(fe()),xe=$(me()),ee=$(he()),Ie=$(Ge()),Re=$(Be()),$e=$(Ze()),ie=$(Ve()),M=$(Ue()),_e=$(ze());var te=$(We()),De=$(He());var B=$(fe()),re=$(me()),ye=$(he()),Ce=$(Ee()),Oe=$(Me()),Ye=["bash","clike","css","html","json","javascript","js","jsx","typescript","ts","tsx","markup","mathml","svg","xml"],Ke={content:"",language:"json"},Je=ye.default.div`
    background-color: ${(0,Oe.pick)({enterprise:{light:"#121316",dark:"#121316"},prisma:"#121316"})};
    overflow: hidden;
    height: ${v=>v.height?v.height:200}px;
    color: #9cdcfe;
`,Qe=ye.default.div`
    padding: 12px 24px;
    overflow: auto;
    height: 100%;
`,oe=({height:v,options:{content:E,language:m}=Ke})=>{let u=(0,B.useRef)(null),[c,C]=(0,B.useState)(!1),a=(0,B.useCallback)(()=>{if(!(!u.current||!document.createRange||!window.getSelection))if(c){let h=window.getSelection();h==null||h.removeAllRanges(),C(!1)}else{let h=document.createRange();h.selectNodeContents(u.current);let S=window.getSelection();S==null||S.removeAllRanges(),S==null||S.addRange(h),C(!0)}},[c]),n=(0,B.useCallback)(()=>{if(!(!u.current||!document.createRange||!window.getSelection)&&c){let h=window.getSelection();h==null||h.removeAllRanges(),C(!1)}},[c]),f=(0,B.useCallback)(h=>{u.current=h},[]);return B.default.createElement(Je,{height:v},B.default.createElement(Qe,null,B.default.createElement(Ce.default,{value:E,language:m,onDoubleClick:a,onClick:n,elementRef:f})))};oe.propTypes={options:re.default.shape({content:re.default.string,language:re.default.oneOf(Ye)}),height:re.default.number.isRequired};oe.defaultProps={options:{content:"",language:"json"}};oe.showTitleAndDescription=!0;var Te=oe;var je=$(qe());var et=ge(de({},be),{visualizations:ge(de({},be.visualizations),{"viz.code":Te})}),tt=ee.default.div`
    display: flex;
    flex-direction: row;
    ${v=>(0,De.toDimension)({width:v.width,height:v.height})};
`,nt=ee.default.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    min-width: 0;
`,at=(0,ee.default)("div")`
    display: flex;
    flex-grow: 1;
    overflow: auto;
    padding: 0px 16px 8px 16px;
    background-color: ${te.customThemeVariables.dashboardBackgroundColor};
`,rt=ee.default.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    z-index: 5;
`,it=(0,ee.default)(je.default)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,Le=M.GeoRegistry.create();Le.addDefaultProvider(new M.GeoJsonProvider);var Se=M.IconRegistry.create();Se.addDefaultProvider(new M.LocalIconProvider);Se.addProvider(new M.StandardIconProvider);var st=new _e.SWACollector,le=v=>(v!=null?v:"")[0]==="/",ot=v=>{var E,m,u;if(le((u=(m=(E=v==null?void 0:v.layout)==null?void 0:E.options)==null?void 0:m.backgroundImage)==null?void 0:u.src)){let{backgroundImage:c}=v.layout.options;c.src=(0,ie.createURL)(c.src)}return Object.values(v.visualizations).forEach(c=>{var a,n;le((a=c.options)==null?void 0:a.src)&&(c.options.src=(0,ie.createURL)(c.options.src)),le((n=c.options)==null?void 0:n.icon)&&(c.options.icon=(0,ie.createURL)(c.options.icon));let{eventHandlers:C=[]}=c;C.forEach(f=>{var h;le((h=f==null?void 0:f.options)==null?void 0:h.url)&&(f.options.url=(0,ie.createURL)(f.options.url))})}),v},lt=({definition:v,webFeatureFlags:E})=>{let[m,u]=(0,T.useState)(E),c=(0,T.useMemo)(()=>ot(v),[v]),C=(0,T.useCallback)(({width:a,height:n})=>T.default.createElement($e.default,{width:a,height:n,definition:c}),[c]);return(0,T.useEffect)(()=>{m===void 0&&we().then(a=>{u(ve(a))}).catch(()=>{u(ve())})},[m]),m===void 0?T.default.createElement(it,null):T.default.createElement(M.DashboardContextProvider,{featureFlags:m,geoRegistry:Le,iconRegistry:Se,mapTileConfig:Fe,metricsCollectors:st,preset:et},T.default.createElement(Re.default,{family:"enterprise",colorScheme:"dark",density:"comfortable"},T.default.createElement(tt,{width:"100%",height:"calc(100vh - 78px)"},T.default.createElement(nt,null,T.default.createElement(rt,null,T.default.createElement(te.Header,{mode:"view",definition:c,onDefinitionChange:Ie.default}),T.default.createElement(at,null,T.default.createElement(te.SizeAwareWrapper,null,C)))))))};lt.propTypes={definition:xe.default.object.isRequired,webFeatureFlags:xe.default.object};export{lt as a};