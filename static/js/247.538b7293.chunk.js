"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),i=e(2791),s=e(7689),o=e(6288),p=e(6214),f=e(184);function l(){var t=(0,s.UO)().movieId,n=(0,i.useState)(null),e=(0,a.Z)(n,2),c=e[0],l=e[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=l,n.next=3,(0,p.in)(t);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),c?(0,f.jsx)(o.$0,{children:(0,f.jsx)("ul",{children:c.length?c.map((function(t){var n=t.name,e=t.character,r=t.profile_path,a=t.id;return(0,f.jsxs)("li",{children:[r?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r),alt:"".concat(n),width:"150"}):(0,f.jsx)(o.xu,{width:"150px",height:"200px",bg:"grey"}),(0,f.jsx)("p",{children:n}),(0,f.jsxs)("p",{children:["Character: ",e]})]},a)})):"We don`t have any data about cast for this movie!"})}):null}},6288:function(t,n,e){e.d(n,{$0:function(){return p},W2:function(){return o},xu:function(){return s}});var r,a,c=e(168),u=e(407),i=e(6444),s=i.ZP.div(u.Dh,u.$_,u.bK,u.GQ),o=i.ZP.div(r||(r=(0,c.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),p=i.ZP.section(a||(a=(0,c.Z)(["\n  padding: ","px;\n"])),(function(t){return t.theme.space[4]}))},6214:function(t,n,e){e.d(n,{Df:function(){return o},IR:function(){return f},Xm:function(){return v},in:function(){return m},uE:function(){return d}});var r=e(7762),a=e(5861),c=e(7757),u=e.n(c),i=e(2388),s="a7cdca3ac9a73d688c9dec2c3c2e067b";function o(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("trending/all/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=["movie/".concat(n,"?api_key=").concat(s),"tv/".concat(n,"?api_key=").concat(s)],t.next=3,w(e);case 3:return r=t.sent,t.abrupt("return",null===r||void 0===r?void 0:r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=["movie/".concat(n,"/reviews?api_key=").concat(s),"tv/".concat(n,"/reviews?api_key=").concat(s)],t.next=3,w(r);case 3:return a=t.sent,t.abrupt("return",null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=["movie/".concat(n,"/credits?api_key=").concat(s),"tv/".concat(n,"/credits?api_key=").concat(s)],t.next=3,w(r);case 3:return a=t.sent,t.abrupt("return",null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(u().mark((function t(n){var e,a,c,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=null,a=(0,r.Z)(n),t.prev=2,a.s();case 4:if((c=a.n()).done){t.next=13;break}return i=c.value,t.next=8,b(i);case 8:if(!(e=t.sent)){t.next=11;break}return t.abrupt("break",13);case 11:t.next=4;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),a.e(t.t0);case 18:return t.prev=18,a.f(),t.finish(18);case 21:return t.abrupt("return",e);case 22:case"end":return t.stop()}}),t,null,[[2,15,18,21]])})))).apply(this,arguments)}function b(t){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=null,t.prev=1,t.next=4,(0,i.Z)(n);case 4:e=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),console.log("Error! Server responded with status: ".concat(t.t0.code,". \n    Error message: ").concat(t.t0.message)),t.abrupt("return",null);case 11:return t.abrupt("return",e);case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=247.538b7293.chunk.js.map