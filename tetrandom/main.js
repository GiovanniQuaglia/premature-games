!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(n,t,e){},function(n,t,e){"use strict";e.r(t);e(0);function r(n,t){return n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n}var i=function n(){var t=[{},{},{},{}];return t.forEach(function(n){n.x=r(3,6),n.y=r(0,-5)}),function(n){var t=n.map(function(n){return JSON.stringify(n)});return 4!==t.filter(function(n,e){return t.indexOf(n)===e}).length}(t)&&(t=n()),t},o=i(),u=[],a=20;var c=function(){var n=document.getElementById("canvas");if(n){var t=n.getContext("2d");n.height=400,n.width=200,n.style.background="#d3d3d3",t.clearRect(0,0,n.width,n.height),o.map(function(n){!function(n,t,e){e.fillStyle="#000",e.fillRect(a*n,a*t,20,20)}(n.x,n.y,t)}),u.map(function(n){!function(n,t,e){e.fillStyle="#696969",e.fillRect(a*n,a*t,20,20)}(n.x,n.y,t)})}},f=0;function l(n){!function(n){for(var t=u.length-1;t>=0;t--)u[t].y===n&&u.splice(t,1);f++}(n),function(n){u.forEach(function(t){return t.y<n&&t.y++})}(n)}function d(){var n,t={};0!==u.length&&(!function(n){var t=!0,e=!1,r=void 0;try{for(var i,o=u[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;void 0===n[a.y]?n[a.y]=1:n[a.y]++}}catch(n){e=!0,r=n}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}}(t),(n=function(n){return Object.keys(n).find(function(t){return n[t]>=10})}(t))<=0||n&&l(parseInt(n)))}var y=document.getElementById("table");function m(){var n,t,e;h(),(e=document.createElement("div")).id="container",y.appendChild(e),(t=document.createElement("canvas")).id="canvas",e.appendChild(t),(n=document.createElement("div")).id="counter",y.appendChild(n),u.length=0,f=0,O||(O=!0,A=!0,S=k(function(n){!0,v=n,E=n,x=0,S=k(T)}))}function h(){for(;y.firstChild;)y.removeChild(y.firstChild)}function s(){var n,t,e;(n=document.createElement("h1")).id="title",y.appendChild(n),n.innerHTML="GAME OVER",(t=document.createElement("h3")).id="commands",y.appendChild(t),t.innerHTML="SCORE: ".concat(f),(e=document.createElement("button")).id="startButton",y.appendChild(e),e.innerHTML="play again",e.onclick=m}var v=0,p=60,b=0,g=1e3/60,w=60,x=0,E=0,O=!1,S=0,M=0,A=!1;function C(){M>100&&(_(o),M=0),d(),c(),function(n){var t=document.getElementById("counter");t&&(t.innerHTML="Lines: ".concat(n))}(f)}var k=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var R=window.cancelAnimationFrame||window.mozCancelAnimationFrame;function T(n){if(M++,n<v+1e3/p)S=k(T);else{b+=n-v,v=n,n>E+1e3&&(w=.25*x+.75*w,E=n,x=0),x++;for(var t=0;b>=g;)if(C(),b-=g,++t>=240){b=0;break}if(!A)return!1,O=!1,R(S),h(),void s();S=k(T)}}function N(){o.map(function(n){return u.push(JSON.parse(JSON.stringify(n)))})}function j(){var n=i();o.forEach(function(t,e){t.x=n[e].x,t.y=n[e].y})}function J(n){return 19===n.y}function L(n){return n.y<=0}function H(n,t){var e=!0,r=!1,i=void 0;try{for(var a,c=o[Symbol.iterator]();!(e=(a=c.next()).done);e=!0){var f=a.value,l=JSON.parse(JSON.stringify(f));l[n]=l[n]+t;for(var d=JSON.stringify(l),y=0;y<u.length;y++)if(d===JSON.stringify(u[y]))return!0}}catch(n){r=!0,i=n}finally{try{e||null==c.return||c.return()}finally{if(r)throw i}}}function F(){return u.some(L)&&(A=!1),o.some(J)?(N(),j(),!0):H("y",1)?(N(),j(),!0):void 0}function _(n){if(!F())return n.forEach(function(n){n.y++}),n}function B(n){return n.x===this.border}function I(n,t,e){return!o.some(B,n)&&!H(t,e)}function P(n,t){return 0===n&&I({border:n},"x",-1)?(t.forEach(function(n){n.x--}),t):9===n&&I({border:n},"x",1)?(t.forEach(function(n){n.x++}),t):void 0}function q(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function D(n,t){return(Math.min.apply(Math,q(t.map(function(t){return t[n]})))+Math.max.apply(Math,q(t.map(function(t){return t[n]}))))/2}function z(n,t,e,r){return function(n,t,e){return n%1==0&&t%1!=0?e<=2?n+=.5:n-=.5:n}(D(n,r),D(t,r),e)}function G(n){return n.y>19}function K(n,t,e){n.forEach(function(n){n[t]=n[t]+e})}function V(n){return function n(t){var e=function(n){return n.some(function(n){return n.x<0})?1:!!n.some(function(n){return n.x>9})&&-1}(t);e&&(K(t,"x",e),n(t))}(function n(t){return t.some(G)&&(K(t,"y",-1),n(t)),t}(n)),n}function W(n,t){if(function(n){var t=!0,e=!1,r=void 0;try{for(var i,o=n[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)for(var a=i.value,c=0;c<u.length;c++)if(JSON.stringify(a)===JSON.stringify(u[c]))return!0}catch(n){e=!0,r=n}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}}(n))return n.forEach(function(n,e){n.x=t[e].x,n.y=t[e].y}),n}var Y,Q=(Y=1,function(n,t){var e=JSON.parse(JSON.stringify(n)),r=z("x","y",Y,n),i=z("y","x",Y,n);return Y=function(n){return n<4?n+=1:1}(Y),W(V(function(n,t,e,r){return e.forEach(function(e){var i=n-(e.y-t)*r,o=t+(e.x-n)*r;e.x=i,e.y=o}),e}(r,i,n,t)),e),n});var U,X,Z,$=function(n){if(A)switch(n.key){case"ArrowLeft":P(0,o);break;case"ArrowRight":P(9,o);break;case"ArrowDown":_(o);break;case"a":Q(o,-1);break;case"d":Q(o,1)}};window.onkeydown=$,(U=document.createElement("h1")).id="title",y.appendChild(U),U.innerHTML="TETRANDOM",(X=document.createElement("h3")).id="commands",y.appendChild(X),X.innerHTML="Move the TETRANDOMS with the ARROW KEYS<br>Rotate them with the keys 'A' and 'D'<br>Good luck!",(Z=document.createElement("button")).id="startButton",y.appendChild(Z),Z.innerHTML="start",Z.onclick=m}]);