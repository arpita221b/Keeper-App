(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),i=n.n(a),j=(n(41),n(14)),o=n(11),s=(n(42),n(2));var u=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"Keeper"})})},l=n(31),b=n.n(l);var O=function(e){return Object(s.jsxs)("div",{className:"note",children:[Object(s.jsx)("h3",{children:e.title}),Object(s.jsx)("p",{children:e.content}),Object(s.jsxs)("button",{onClick:function(){e.onDelete(e.id)},children:[" ",Object(s.jsx)(b.a,{})," "]})]})},d=new Date;var f=function(){return Object(s.jsxs)("footer",{children:[" \xa9 ",d.getFullYear()," "]})},h=n(8),x=n(27),p=n(33),v=n.n(p),m=n(67),k=n(68);var g=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)({title:"",content:""}),j=Object(o.a)(i,2),u=j[0],l=j[1];function b(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},n,c))}))}return Object(s.jsx)("div",{className:"addNote",children:Object(s.jsxs)("form",{children:[r&&Object(s.jsx)("input",{name:"title",onChange:b,value:u.title,placeholder:"Title"}),Object(s.jsx)("textarea",{name:"content",onClick:function(){a(!0)},onChange:b,value:u.content,placeholder:"Take a note...",rows:r?3:1}),Object(s.jsx)(k.a,{in:r,children:Object(s.jsxs)(m.a,{className:"btn-form",onClick:function(t){e.onAdd(u),l({title:"",content:""}),t.preventDefault()},children:[" ",Object(s.jsx)(v.a,{}),"  "]})})]})})};var C=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];function a(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{}),Object(s.jsx)(g,{onAdd:function(e){r((function(t){return[].concat(Object(j.a)(t),[e])}))}}),n.map((function(e,t){return Object(s.jsx)(O,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(s.jsx)(f,{})]})};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.4a9def88.chunk.js.map