(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[299],{4714:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(1087),a=n(2007),c=n(184);function u(e){var t=e.moviesData,n=e.location;return(0,c.jsx)("ul",{children:t.map((function(e){var t=e.title,a=e.id,u=e.original_name;return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(a),state:{from:n},children:null!==t&&void 0!==t?t:u})},a)}))})}u.propsType={moviesData:a.PropTypes.shape({title:a.PropTypes.string.isRequired,id:a.PropTypes.number.isRequired,original_name:a.PropTypes.string.isRequired}).isRequired,location:a.PropTypes.shape({pathname:a.PropTypes.string,search:a.PropTypes.string,hash:a.PropTypes.string,state:null,key:a.PropTypes.string}).isRequired}},6288:function(e,t,n){"use strict";n.d(t,{$0:function(){return p},W2:function(){return o},xu:function(){return s}});var r,a,c=n(168),u=n(407),i=n(6444),s=i.ZP.div(u.Dh,u.$_,u.bK,u.GQ),o=i.ZP.div(r||(r=(0,c.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),p=i.ZP.section(a||(a=(0,c.Z)(["\n  padding: ","px;\n"])),(function(e){return e.theme.space[4]}))},7299:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),i=n(2791),s=n(1087),o=n(7689),p=n(6288),f=n(4714),l=n(6214),d=n(184),v="query";function h(){var e=(0,s.lr)(),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,i.useState)(null),y=(0,a.Z)(h,2),m=y[0],x=y[1],b=(0,o.TH)();(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=x,e.next=3,(0,l.IR)(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=n.get(v);t?function(){e.apply(this,arguments)}():x(null)}),[n]);return(0,d.jsx)(p.W2,{children:(0,d.jsxs)("main",{children:[(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,n,r,a=e.target.searchQuery.value;a?(c((r=a,(n=v)in(t={})?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t)),e.target.reset()):c({})},children:[(0,d.jsx)("input",{type:"text",name:"searchQuery",placeholder:"Movie name"}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),m&&(0,d.jsx)(f.O,{moviesData:m,location:b})]})})}},6214:function(e,t,n){"use strict";n.d(t,{Df:function(){return o},IR:function(){return f},Xm:function(){return h},in:function(){return m},uE:function(){return d}});var r=n(7762),a=n(5861),c=n(7757),u=n.n(c),i=n(2388),s="a7cdca3ac9a73d688c9dec2c3c2e067b";function o(){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("trending/all/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["movie/".concat(t,"?api_key=").concat(s),"tv/".concat(t,"?api_key=").concat(s)],e.next=3,b(n);case 3:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=["movie/".concat(t,"/reviews?api_key=").concat(s),"tv/".concat(t,"/reviews?api_key=").concat(s)],e.next=3,b(r);case 3:return a=e.sent,e.abrupt("return",null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=["movie/".concat(t,"/credits?api_key=").concat(s),"tv/".concat(t,"/credits?api_key=").concat(s)],e.next=3,b(r);case 3:return a=e.sent,e.abrupt("return",null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(u().mark((function e(t){var n,a,c,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null,a=(0,r.Z)(t),e.prev=2,a.s();case 4:if((c=a.n()).done){e.next=13;break}return i=c.value,e.next=8,g(i);case 8:if(!(n=e.sent)){e.next=11;break}return e.abrupt("break",13);case 11:e.next=4;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:return e.abrupt("return",n);case 22:case"end":return e.stop()}}),e,null,[[2,15,18,21]])})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,(0,i.Z)(t);case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("Error! Server responded with status: ".concat(e.t0.code,". \n    Error message: ").concat(e.t0.message)),e.abrupt("return",null);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org/3"},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,c,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=299.cc6b22c2.chunk.js.map