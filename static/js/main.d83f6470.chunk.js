(this["webpackJsonpreact-pages"]=this["webpackJsonpreact-pages"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),i=(n(12),n(2)),o=n.n(i),u=n(3),l=n(5),p=n(7),m=n.n(p),d=(n(15),n(0));var j=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(l.a)(s,2),i=r[0],p=r[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments?_page=2&_limit=".concat(9));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=t.headers.get("x-total-count"),p(Math.ceil(a/9)),c(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/comments?_page=".concat(t,"&_limit=").concat(9));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.selected),n=t.selected+1,e.next=4,j(n);case 4:a=e.sent,c(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"row m-2",children:n.map((function(e){return Object(d.jsx)("div",{className:"col-sm-8 col-md-4 v my-2",children:Object(d.jsx)("div",{className:"card shadow-sm w-100",style:{minHeight:225},children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{className:"card-title text-center h2",children:["Id: ",e.id," "]}),Object(d.jsxs)("h6",{className:"card-subtitle mb-2 text-muted text-center",children:["Email: ",e.email," "]}),Object(d.jsxs)("p",{className:"card-text",children:["Comments:  ",e.body]})]})})},e.id)}))}),Object(d.jsx)(m.a,{previousLable:"previous",nextLabel:"next",pageCount:i,marginPagesDisplayed:3,pageRangeDisplayed:5,onPageChange:h,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.d83f6470.chunk.js.map