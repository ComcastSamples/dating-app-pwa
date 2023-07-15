/*! For license information please see 22.230ede12.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkdating_app_pwa=self.webpackChunkdating_app_pwa||[]).push([[22,909],{7909:function(t,e,n){n.r(e),n.d(e,{GESTURE_CONTROLLER:function(){return i.G},createGesture:function(){return c}});var r,i=n(2503),o=function(t,e,n,r){var i,o,a=u(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,n,a),function(){t[o](e,n,a)}},u=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(n){r=!1}return!!r},a=function(t){return t instanceof Document?t:t.ownerDocument},c=function(t){var e=!1,n=!1,r=!0,u=!1,c=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),f=c.canStart,l=c.onWillStart,p=c.onStart,m=c.onEnd,h=c.notCaptured,X=c.onMove,y=c.threshold,g=c.passive,Y=c.blurOnStart,_={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},b=function(t,e,n){var r=n*(Math.PI/180),i="x"===t,o=Math.cos(r),u=e*e,a=0,c=0,s=!1,v=0;return{start:function(t,e){a=t,c=e,v=0,s=!0},detect:function(t,e){if(!s)return!1;var n=t-a,r=e-c,d=n*n+r*r;if(d<u)return!1;var f=Math.sqrt(d),l=(i?n:r)/f;return v=l>o?1:l<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==v},getDirection:function(){return v}}}(c.direction,c.threshold,c.maxAngle),w=i.G.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=function(){e&&(u=!1,X&&X(_))},S=function(){return!!w.capture()&&(e=!0,r=!1,_.startX=_.currentX,_.startY=_.currentY,_.startTime=_.currentTime,l?l(_).then(T):T(),!0)},T=function(){Y&&function(){if("undefined"!==typeof document){var t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}}(),p&&p(_),r=!0},G=function(){e=!1,n=!1,u=!1,r=!0,w.release()},L=function(t){var n=e,i=r;G(),i&&(s(_,t),n?m&&m(_):h&&h(_))},D=function(t,e,n,r,i){var u,c,s,v,d,f,l,p=0,m=function(r){p=Date.now()+2e3,e(r)&&(!c&&n&&(c=o(t,"touchmove",n,i)),s||(s=o(r.target,"touchend",X,i)),v||(v=o(r.target,"touchcancel",X,i)))},h=function(r){p>Date.now()||e(r)&&(!f&&n&&(f=o(a(t),"mousemove",n,i)),l||(l=o(a(t),"mouseup",y,i)))},X=function(t){g(),r&&r(t)},y=function(t){Y(),r&&r(t)},g=function(){c&&c(),s&&s(),v&&v(),c=s=v=void 0},Y=function(){f&&f(),l&&l(),f=l=void 0},_=function(){g(),Y()},b=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(u&&u(),d&&d(),u=d=void 0,_()):(u||(u=o(t,"touchstart",m,i)),d||(d=o(t,"mousedown",h,i)))};return{enable:b,stop:_,destroy:function(){b(!1),r=n=e=void 0}}}(c.el,(function(t){var e=d(t);return!(n||!r)&&(v(t,_),_.startX=_.currentX,_.startY=_.currentY,_.startTime=_.currentTime=e,_.velocityX=_.velocityY=_.deltaX=_.deltaY=0,_.event=t,(!f||!1!==f(_))&&(w.release(),!!w.start()&&(n=!0,0===y?S():(b.start(_.startX,_.startY),!0))))}),(function(t){e?!u&&r&&(u=!0,s(_,t),requestAnimationFrame(E)):(s(_,t),b.detect(_.currentX,_.currentY)&&(b.isGesture()&&S()||M()))}),L,{capture:!1,passive:g}),M=function(){G(),D.stop(),h&&h(_)};return{enable:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t||(e&&L(void 0),G()),D.enable(t)},destroy:function(){w.destroy(),D.destroy()}}},s=function(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.currentTime;v(e,t);var o=t.currentX,u=t.currentY,a=(t.currentTime=d(e))-i;if(a>0&&a<100){var c=(o-n)/a,s=(u-r)/a;t.velocityX=.7*c+.3*t.velocityX,t.velocityY=.7*s+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=u-t.startY,t.event=e}},v=function(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r},d=function(t){return t.timeStamp||Date.now()}},5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return u}});var r=n(1811),i=n(9507),o=n(7909),u=function(t,e,n,u,a){var c=t.ownerDocument.defaultView,s=(0,i.i)(t),v=function(t){return s?-t.deltaX:t.deltaX};return(0,o.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return s=(0,i.i)(t),function(t){var e=t.startX;return s?e>=c.innerWidth-50:e<=50}(n)&&e()},onStart:n,onMove:function(t){var e=v(t)/c.innerWidth;u(e)},onEnd:function(t){var e=v(t),n=c.innerWidth,i=e/n,o=function(t){return s?-t.velocityX:t.velocityX}(t),u=o>=0&&(o>.2||e>n/2),d=(u?1-i:i)*n,f=0;if(d>5){var l=d/Math.abs(o);f=Math.min(l,540)}a(u,i<=0?.01:(0,r.m)(0,i,.9999),f)}})}}}]);
//# sourceMappingURL=22.230ede12.chunk.js.map