(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{185:function(e,t,s){},390:function(e,t){},425:function(e,t,s){},426:function(e,t,s){},427:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),r=s(30),n=s.n(r),i=(s(185),s(38)),o=(s(102),s(5)),l=(s(429),s(430),s(2)),j=(s(72),s(99),s(13)),d=s.n(j),u=s(25),p=s(73),b=s.n(p),m=s(37),h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(o.a)(r,2),i=n[0],j=n[1],p=Object(c.useState)(""),h=Object(o.a)(p,2),O=(h[0],h[1]),x=function(){var e=Object(u.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={"PRIVATE-KEY":"2d159bb9-72da-4ec9-8353-b847a21980fb"},e.prev=2,e.next=5,b.a.get("https://api.chatengine.io/chats",{headers:c}).then((function(e){return console.log(e)}));case 5:localStorage.setItem("userName",s),localStorage.setItem("Password",i),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),O("Oops, incorrect credentials.");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("h1",{className:"title",children:"Chat Application"}),Object(l.jsxs)("form",{onSubmit:x,children:[Object(l.jsx)("input",{type:"text",placeholder:"userName",onChange:function(e){a(e.target.value)},className:"input",required:!0}),Object(l.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){j(e.target.value)},className:"input",required:!0}),Object(l.jsx)("div",{align:"center",children:Object(l.jsx)("button",{type:"submit",className:"button",children:Object(l.jsx)("span",{children:"Login"})})}),Object(l.jsx)("div",{align:"center",className:"con",children:Object(l.jsxs)("p",{className:"sign",children:["or ",Object(l.jsx)(m.b,{to:"/signUp",className:"sig",children:"Sign Up"})]})})]})]})})},O=s(8),x=(s(425),s(426),s.p+"static/media/form-v7.5163c038.jpg"),f=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(o.a)(r,2),i=n[0],j=n[1],p=Object(c.useState)(""),h=Object(o.a)(p,2),f=h[0],g=h[1],v=Object(c.useState)(""),w=Object(o.a)(v,2),S=(w[0],w[1],Object(O.e)()),y=function(){var e=Object(u.a)(d.a.mark((function e(t){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),{username:"mo",secret:"1234",email:"".concat(s,"@gmail.com"),first_name:"Bob",last_name:"Baker"},(c=new FormData).append("username",s),c.append("secret",i),c.append("email",f),c.append("first_name",s),a={method:"post",url:"https://api.chatengine.io/users/",headers:{"PRIVATE-KEY":"{{2d159bb9-72da-4ec9-8353-b847a21980fb}}","Content-Type":"multipart/form-data"},data:c},{method:"get",url:"https://api.chatengine.io/chats/62920/people",headers:{"Project-ID":"{{711d16d2-9550-434c-b51f-8991543d73ce}}","User-Name":"{{Ahmed}}","User-Secret":"{{1234}}"}};try{b()(a).then((function(e){console.log(e)})),S.push("/")}catch(r){console.log(r)}case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("body",{className:"form-v7",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsxs)("div",{className:"form-v7-content",children:[Object(l.jsxs)("div",{class:"form-left",children:[Object(l.jsx)("img",{src:x,alt:"form"}),Object(l.jsx)("p",{class:"text-1",children:"Sign Up"}),Object(l.jsx)("p",{class:"text-2",children:"Privaci policy & Term of service"})]}),Object(l.jsxs)("form",{class:"form-detail",id:"myform",onSubmit:y,children:[Object(l.jsxs)("div",{class:"form-row",children:[Object(l.jsx)("label",{for:"username",children:"USERNAME"}),Object(l.jsx)("input",{type:"text",name:"username",id:"username",class:"input-text",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{class:"form-row",children:[Object(l.jsx)("label",{for:"your_email",children:"E-MAIL"}),Object(l.jsx)("input",{type:"text",name:"your_email",id:"your_email",class:"input-text",onChange:function(e){return g(e.target.value)},required:!0,pattern:"[^@]+@[^@]+.[a-zA-Z]{2,6}"})]}),Object(l.jsxs)("div",{class:"form-row",children:[Object(l.jsx)("label",{for:"password",children:"PASSWORD"}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",class:"input-text",onChange:function(e){return j(e.target.value)},required:!0})]}),Object(l.jsxs)("div",{class:"form-row",children:[Object(l.jsx)("label",{for:"comfirm_password",children:"CONFIRM PASSWORD"}),Object(l.jsx)("input",{type:"password",name:"comfirm_password",id:"comfirm_password",class:"input-text",required:!0})]}),Object(l.jsxs)("div",{class:"form-row-last",children:[Object(l.jsx)("input",{type:"submit",name:"register",class:"register",onSubmit:y,value:"Sign Up"}),Object(l.jsxs)("p",{children:["Or",Object(l.jsx)(m.b,{to:"/",children:"Sign in"})]})]})]})]})}),Object(l.jsx)("script",{src:"https://code.jquery.com/jquery-1.11.1.min.js"}),Object(l.jsx)("script",{src:"https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"}),Object(l.jsx)("script",{src:"https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"}),Object(l.jsx)("script",{})]})};var g=function(){return localStorage.getItem("userName")?Object(l.jsx)(i.d,{height:"100vh",userName:localStorage.getItem("userName"),userSecret:localStorage.getItem("Password"),projectID:"711d16d2-9550-434c-b51f-8991543d73ce"}):Object(l.jsxs)(m.a,{children:[Object(l.jsx)(O.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(O.a,{path:"/signUp",component:f})]})};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[427,1,2]]]);
//# sourceMappingURL=main.d3086958.chunk.js.map