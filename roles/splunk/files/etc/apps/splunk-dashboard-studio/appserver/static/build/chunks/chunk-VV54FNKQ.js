var q=Object.create;var g=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,v=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var w=Math.pow,k=(a,b,c)=>b in a?g(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,x=(a,b)=>{for(var c in b||(b={}))l.call(b,c)&&k(a,c,b[c]);if(h)for(var c of h(b))m.call(b,c)&&k(a,c,b[c]);return a},y=(a,b)=>r(a,t(b));var z=(a=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(a,{get:(b,c)=>(typeof require!="undefined"?require:b)[c]}):a)(function(a){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+a+'" is not supported')});var A=(a,b)=>{var c={};for(var d in a)l.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&h)for(var d of h(a))b.indexOf(d)<0&&m.call(a,d)&&(c[d]=a[d]);return c};var B=(a,b)=>()=>(a&&(b=a(a=0)),b);var C=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),D=(a,b)=>{for(var c in b)g(a,c,{get:b[c],enumerable:!0})},n=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of u(b))!l.call(a,e)&&e!==c&&g(a,e,{get:()=>b[e],enumerable:!(d=s(b,e))||d.enumerable});return a};var E=(a,b,c)=>(c=a!=null?q(v(a)):{},n(b||!a||!a.__esModule?g(c,"default",{value:a,enumerable:!0}):c,a)),F=a=>n(g({},"__esModule",{value:!0}),a);var G=(a,b,c)=>(k(a,typeof b!="symbol"?b+"":b,c),c);var H=(a,b,c)=>new Promise((d,e)=>{var o=f=>{try{i(c.next(f))}catch(j){e(j)}},p=f=>{try{i(c.throw(f))}catch(j){e(j)}},i=f=>f.done?d(f.value):Promise.resolve(f.value).then(o,p);i((c=c.apply(a,b)).next())});export{w as a,x as b,y as c,z as d,A as e,B as f,C as g,D as h,E as i,F as j,G as k,H as l};