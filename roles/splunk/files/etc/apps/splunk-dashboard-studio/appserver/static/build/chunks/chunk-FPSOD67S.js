function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,f){return o.__proto__=f,o},r(t,e)}function c(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},p.apply(this,arguments)}export{c as a,p as b};