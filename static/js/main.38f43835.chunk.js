(this.webpackJsonppaymentpage=this.webpackJsonppaymentpage||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),r=n(3),s=n.n(r),o=(n(11),n(12),n(5)),u=n(4),d=n.n(u);window.$=window.jQuery=d.a;var j=window.IMP;j.init("imp10942072");var b=function(){var e=Object(i.useState)({success:!0,errorMSG:"Error"}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("p",{children:"\uacb0\uc81c \ud398\uc774\uc9c0"}),Object(c.jsx)("label",{children:"\uc785\ub825\ud544\ub4dc 1"}),Object(c.jsx)("input",{type:"text",name:"name"}),Object(c.jsx)("label",{children:"\uc785\ub825\ud544\ub4dc 2"}),Object(c.jsx)("input",{type:"text",name:"name"}),Object(c.jsx)("button",{onClick:function(){j.request_pay({pg:"html5_inicis",pay_method:"card",merchant_uid:"ORD20180131-0011",name:"\ud734\uac00 1\uc77c\uad8c",amount:100,buyer_email:"naver@gmail.com",buyer_name:"\ubc1b\ub294 \ud398\uc774\uc9c0",buyer_tel:"010-4242-4242",buyer_addr:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \uac15\ub0a8\uad6c",buyer_postcode:"01181"},(function(e){return a(e)}))},children:"\uacb0\uc81c"}),Object(c.jsx)("button",{onClick:function(e){window.ReactNativeWebView.postMessage(JSON.stringify(n))},children:"\uc571\uc73c\ub85c \uba54\uc2dc\uc9c0 \uc804\uc1a1"}),Object(c.jsx)("p",{children:n.success?"\uacb0\uc81c \uc131\uacf5":"\uacb0\uc81c \uc2e4\ud328"})]})})};var l=function(){var e=function(e){var t=JSON.parse(e.data);window.ReactNativeWebView.postMessage(JSON.stringify({event:t})),t.name};return Object(i.useEffect)((function(){console.log("Init Page");var t=window;return t.addEventListener("message",e),function(){t.removeEventListener("message",e)}}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)(b,{})})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.38f43835.chunk.js.map