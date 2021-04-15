(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(6),u=a(115),i=a(119),s=a(116),m=a(120);function f(e){var t=e.onIdSubmit,a=Object(n.useRef)();return r.a.createElement(u.a,{className:"align-items-center d-flex",style:{height:"100vh"}},r.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),t(a.current.value)},className:"w-100"},r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Label,null,"Enter Your Id"),r.a.createElement(i.a.Control,{type:"text",ref:a,required:!0})),r.a.createElement(s.a,{type:"submit",className:"mr-2"},"Login"),r.a.createElement(s.a,{onClick:function(){t(Object(m.a)())},variant:"secondary"},"Create A New Id")))}function d(e,t){var a="whatsapp-clone-"+e,r=Object(n.useState)((function(){var e=localStorage.getItem(a);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),c=Object(o.a)(r,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){localStorage.setItem(a,JSON.stringify(l))}),[a,l]),[l,u]}var v=a(122),E=a(121),b=a(118),p=a(123),j=a(19),g=a(17),O=r.a.createContext();function x(){return Object(n.useContext)(O)}function C(e){var t=e.children,a=d("contacts",[]),n=Object(o.a)(a,2),c=n[0],l=n[1];return r.a.createElement(O.Provider,{value:{contacts:c,createContact:function(e,t){l((function(a){return[].concat(Object(g.a)(a),[{id:e,name:t}])}))}}},t)}var y=a(63),h=a.n(y),N=r.a.createContext();function S(e){var t=e.id,a=e.children,c=Object(n.useState)(),l=Object(o.a)(c,2),u=l[0],i=l[1];return Object(n.useEffect)((function(){var e=h()("http://localhost:5000",{query:{id:t}});return i(e),function(){return e.close()}}),[t]),r.a.createElement(N.Provider,{value:u},a)}var I=r.a.createContext();function k(){return Object(n.useContext)(I)}function w(e){var t=e.id,a=e.children,c=d("conversations",[]),l=Object(o.a)(c,2),u=l[0],i=l[1],s=Object(n.useState)(0),m=Object(o.a)(s,2),f=m[0],v=m[1],E=x().contacts,b=Object(n.useContext)(N);var p=Object(n.useCallback)((function(e){var t=e.recipients,a=e.text,n=e.sender;i((function(e){var r=!1,c={sender:n,text:a},l=e.map((function(e){return a=e.recipients,n=t,a.length===n.length&&(a.sort(),n.sort(),a.every((function(e,t){return e===n[t]})))?(r=!0,Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(g.a)(e.messages),[c])})):e;var a,n}));return r?l:[].concat(Object(g.a)(e),[{recipients:t,messages:[c]}])}))}),[i]);Object(n.useEffect)((function(){if(null!=b)return b.on("receive-message",p),function(){return b.off("receive-message")}}),[b,p]);var O=u.map((function(e,a){var n=e.recipients.map((function(e){var t=E.find((function(t){return t.id===e})),a=t&&t.name||e;return{id:e,name:a}})),r=e.messages.map((function(e){var a=E.find((function(t){return t.id===e.sender})),n=a&&a.name||e.sender,r=t===e.sender;return Object(j.a)(Object(j.a)({},e),{},{senderName:n,fromMe:r})})),c=a===f;return Object(j.a)(Object(j.a)({},e),{},{messages:r,recipients:n,selected:c})})),C={conversations:O,selectedConversation:O[f],sendMessage:function(e,a){b.emit("send-message",{recipients:e,text:a}),p({recipients:e,text:a,sender:t})},selectConversationIndex:v,createConversation:function(e){i((function(t){return[].concat(Object(g.a)(t),[{recipients:e,messages:[]}])}))}};return r.a.createElement(I.Provider,{value:C},a)}function M(){var e=k(),t=e.conversations,a=e.selectConversationIndex;return r.a.createElement(p.a,{variant:"flush"},t.map((function(e,t){return r.a.createElement(p.a.Item,{key:t,action:!0,onClick:function(){return a(t)},active:e.selected},e.recipients.map((function(e){return e.name})).join(", "))})))}function L(){var e=x().contacts;return r.a.createElement(p.a,{variant:"flush"},e.map((function(e){return r.a.createElement(p.a.Item,{key:e.id},e.name)})))}function q(e){var t=e.closeModal,a=Object(n.useRef)(),c=Object(n.useRef)(),l=x().createContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Header,{closeButton:!0},"Create Contact"),r.a.createElement(b.a.Body,null,r.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),l(a.current.value,c.current.value),t()}},r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Label,null,"Id"),r.a.createElement(i.a.Control,{type:"text",ref:a,required:!0})),r.a.createElement(i.a.Group,null,r.a.createElement(i.a.Label,null,"Name"),r.a.createElement(i.a.Control,{type:"text",ref:c,required:!0})),r.a.createElement(s.a,{type:"submit"},"Create"))))}function B(e){var t=e.closeModal,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],u=c[1],m=x().contacts,f=k().createConversation;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Header,{closeButton:!0},"Create Conversation"),r.a.createElement(b.a.Body,null,r.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),f(l),t()}},m.map((function(e){return r.a.createElement(i.a.Group,{controlId:e.id,key:e.id},r.a.createElement(i.a.Check,{type:"checkbox",value:l.includes(e.id),label:e.name,onChange:function(){return t=e.id,void u((function(e){return e.includes(t)?e.filter((function(e){return t!==e})):[].concat(Object(g.a)(e),[t])}));var t}}))})),r.a.createElement(s.a,{type:"submit"},"Create"))))}function G(e){var t=e.id,a=Object(n.useState)("conversations"),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),f=m[0],d=m[1],p="conversations"===l;function j(){d(!1)}return r.a.createElement("div",{style:{width:"250px"},className:"d-flex flex-column"},r.a.createElement(v.a.Container,{activeKey:l,onSelect:u},r.a.createElement(E.a,{variant:"tabs",className:"justify-content-center"},r.a.createElement(E.a.Item,null,r.a.createElement(E.a.Link,{eventKey:"conversations"},"Conversations")),r.a.createElement(E.a.Item,null,r.a.createElement(E.a.Link,{eventKey:"contacts"},"Contacts"))),r.a.createElement(v.a.Content,{className:"border-right overflow-auto flex-grow-1"},r.a.createElement(v.a.Pane,{eventKey:"conversations"},r.a.createElement(M,null)),r.a.createElement(v.a.Pane,{eventKey:"contacts"},r.a.createElement(L,null))),r.a.createElement("div",{className:"p-2 border-top border-right small"},"Your Id: ",r.a.createElement("span",{className:"text-muted"},t)),r.a.createElement(s.a,{onClick:function(){return d(!0)},className:"rounded-0"},"New ",p?"Conversation":"Contact")),r.a.createElement(b.a,{show:f,onHide:j},p?r.a.createElement(B,{closeModal:j}):r.a.createElement(q,{closeModal:j})))}var K=a(117);function P(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]),u=k(),m=u.sendMessage,f=u.selectedConversation;return r.a.createElement("div",{className:"d-flex flex-column flex-grow-1"},r.a.createElement("div",{className:"flex-grow-1 overflow-auto"},r.a.createElement("div",{className:"d-flex flex-column align-items-start justify-content-end px-3"},f.messages.map((function(e,t){var a=f.messages.length-1===t;return r.a.createElement("div",{ref:a?l:null,key:t,className:"my-1 d-flex flex-column ".concat(e.fromMe?"align-self-end align-items-end":"align-items-start")},r.a.createElement("div",{className:"rounded px-2 py-1 ".concat(e.fromMe?"bg-primary text-white":"border")},e.text),r.a.createElement("div",{className:"text-muted small ".concat(e.fromMe?"text-right":"")},e.fromMe?"You":e.senderName))})))),r.a.createElement(i.a,{onSubmit:function(e){e.preventDefault(),m(f.recipients.map((function(e){return e.id})),a),c("")}},r.a.createElement(i.a.Group,{className:"m-2"},r.a.createElement(K.a,null,r.a.createElement(i.a.Control,{as:"textarea",required:!0,value:a,onChange:function(e){return c(e.target.value)},style:{height:"75px",resize:"none"}}),r.a.createElement(K.a.Append,null,r.a.createElement(s.a,{type:"submit"},"Send"))))))}function D(e){var t=e.id,a=k().selectedConversation;return r.a.createElement("div",{className:"d-flex",style:{height:"100vh"}},r.a.createElement(G,{id:t}),a&&r.a.createElement(P,null))}var J=function(){var e=d("id"),t=Object(o.a)(e,2),a=t[0],n=t[1];return a?r.a.createElement(S,{id:a},r.a.createElement(C,null,r.a.createElement(w,{id:a},r.a.createElement(D,{id:a})))):r.a.createElement(f,{onIdSubmit:n})};a(111);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a(112)}},[[70,1,2]]]);
//# sourceMappingURL=main.c0bba669.chunk.js.map