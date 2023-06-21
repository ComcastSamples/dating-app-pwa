"use strict";(self.webpackChunkdating_app_pwa=self.webpackChunkdating_app_pwa||[]).push([[186],{1186:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return L}});var r=n(4165),o=n(5861),i=n(3743),a=n(1811),u=n(5573),c=new WeakMap,s=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];c.has(e)!==n&&(n?d(e,t,r,o):l(e,t))},d=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,r&&(i.disabled=!0),o.appendChild(i),c.set(e,i);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=c.get(e);n&&(c.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},f=function(e,t,n){if(!n||!t)return function(){};var r=function(n){var r;(r=t)===r.getRootNode().activeElement&&s(e,t,n)},o=function(){return s(e,t,!1)},i=function(){return r(!0)},u=function(){return r(!1)};return(0,a.a)(n,"ionScrollStart",i),(0,a.a)(n,"ionScrollEnd",u),t.addEventListener("blur",o),function(){(0,a.b)(n,"ionScrollStart",i),(0,a.b)(n,"ionScrollEnd",u),t.removeEventListener("blur",o)}},p="input, textarea, [no-blur], [contenteditable]",v=function(){var e=!0,t=!1,n=document,r=function(){t=!0},o=function(){e=!0},i=function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(p)){var i=r.target;i!==o&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}};return(0,a.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",i,!1),function(){(0,a.b)(n,"ionScrollStart",r,!0),n.removeEventListener("focusin",o,!0),n.removeEventListener("touchend",i,!1)}},m=function(e,t,n){var r,o=null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e;return h(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},h=function(e,t,n,r){var o=e.top,i=e.bottom,a=t.top,u=a+15,c=Math.min(t.bottom,r-n)-50-i,s=u-o,d=Math.round(c<0?-c:s>0?-s:0),l=Math.min(d,o-a),f=Math.abs(l)/.3;return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-u)}},w="$ionPaddingTimer",b=function(e,t,n){var r=e[w];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset","".concat(t,"px")):e[w]=setTimeout((function(){e.style.setProperty("--keyboard-offset","0px"),n&&n()}),120)},g=function(e,t,n){e.addEventListener("focusout",(function(){t&&b(t,0,n)}),{once:!0})},y=0,x="data-ionic-skip-scroll-assist",k=function(e,t,n,i,a,c,s){var d=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l=c&&(void 0===s||s.mode===u.a.None),f=function(){var u=(0,o.Z)((0,r.Z)().mark((function o(){return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.hasAttribute(x)){r.next=3;break}return t.removeAttribute(x),r.abrupt("return");case 3:S(e,t,n,i,a,l,d);case 4:case"end":return r.stop()}}),o)})));return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",f,!0),function(){e.removeEventListener("focusin",f,!0)}},E=function(e){document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},S=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n,u,c,d,l){var f,p,v,h,w,x,k,S=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=S.length>6&&void 0!==S[6]&&S[6],u||c){e.next=3;break}return e.abrupt("return");case 3:if(p=m(t,u||c,d),!(u&&Math.abs(p.scrollAmount)<4)){e.next=8;break}return E(n),l&&null!==u&&(b(u,y),g(n,u,(function(){return y=0}))),e.abrupt("return");case 8:if(s(t,n,!0,p.inputSafeY,f),E(n),(0,a.r)((function(){return t.click()})),l&&u&&(y=p.scrollPadding,b(u,y)),"undefined"===typeof window){e.next=25;break}if(h=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",w),window.removeEventListener("ionKeyboardDidShow",h),!u){e.next=6;break}return e.next=6,(0,i.c)(u,0,p.scrollAmount,p.scrollDuration);case 6:s(t,n,!1,p.inputSafeY),E(n),l&&g(n,u,(function(){return y=0}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",h)},!u){e.next=24;break}return e.next=18,(0,i.g)(u);case 18:if(x=e.sent,k=x.scrollHeight-x.clientHeight,!(p.scrollAmount>k-x.scrollTop)){e.next=24;break}return"password"===n.type?(p.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",w)):window.addEventListener("ionKeyboardDidShow",h),v=setTimeout(h,1e3),e.abrupt("return");case 24:h();case 25:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i,a){return e.apply(this,arguments)}}(),L=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n){var c,s,d,l,p,m,h,w,b,g,y,x,E,S,L,Z,D;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=document,s="ios"===n,d="android"===n,l=t.getNumber("keyboardHeight",290),p=t.getBoolean("scrollAssist",!0),m=t.getBoolean("hideCaretOnScroll",s),h=t.getBoolean("inputBlurring",s),w=t.getBoolean("scrollPadding",!0),b=Array.from(c.querySelectorAll("ion-input, ion-textarea")),g=new WeakMap,y=new WeakMap,e.next=13,u.K.getResizeMode();case 13:for(x=e.sent,E=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,u,c,s,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return(0,a.c)(t,e)}));case 2:if(n=t.shadowRoot||t,o=n.querySelector("input")||n.querySelector("textarea"),u=(0,i.a)(t),c=u?null:t.closest("ion-footer"),o){e.next=8;break}return e.abrupt("return");case 8:u&&m&&!g.has(t)&&(s=f(t,o,u),g.set(t,s)),"date"===o.type||"datetime-local"===o.type||!u&&!c||!p||y.has(t)||(v=k(t,o,u,c,l,w,x,d),y.set(t,v));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){if(m){var t=g.get(e);t&&t(),g.delete(e)}if(p){var n=y.get(e);n&&n(),y.delete(e)}},h&&v(),L=0,Z=b;L<Z.length;L++)D=Z[L],E(D);c.addEventListener("ionInputDidLoad",(function(e){E(e.detail)})),c.addEventListener("ionInputDidUnload",(function(e){S(e.detail)}));case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.fe17c349.chunk.js.map