(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(22),i=n.n(s),r=(n(73),n(74),n(25)),l=n.n(r),o=n(34),d=n(7),j=(n(76),n(109)),u=n(110),b=n(114),p=n(112),m=n(115),h=n(111),O=n(116),x=n(118),v=n(119),g=n(120),f=n(106),N=n(108),y=n(53),k=n.n(y),S=(n(77),function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("entry.923575230",t.name),n.append("entry.959771919",t.address),n.append("entry.1470857061",t.phone),n.append("entry.766642417",t.time),n.append("entry.210369612",t.about),e.next=8,fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScWUyeUYn_LuegxlH5SkFfGwXnZ4fW8u2cbFV_Kr4FRS3tTmw/formResponse",{method:"POST",mode:"no-cors",body:n}).then((function(e){return e.text()})).then((function(e){return!0})).catch((function(e){return!1}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=n(1);var F=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],s=t[1],i=function(){return s(!0)},r=Object(a.useState)(),y=Object(d.a)(r,2),F=y[0],w=y[1],P=function(){w(),s(!1)},T=Object(a.useState)(!1),D=Object(d.a)(T,2),W=D[0],I=D[1],A=Object(a.useState)(!1),E=Object(d.a)(A,2),R=E[0],_=E[1],B=Object(a.useState)(""),G=Object(d.a)(B,2),L=G[0],M=G[1],q=Object(a.useState)(""),z=Object(d.a)(q,2),H=z[0],J=z[1],U=Object(a.useState)(""),V=Object(d.a)(U,2),Y=V[0],K=V[1],Q=Object(a.useState)(""),X=Object(d.a)(Q,2),Z=X[0],$=X[1],ee=Object(a.useState)(""),te=Object(d.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!1),se=Object(d.a)(ce,2),ie=se[0],re=se[1],le=function(){M(""),J(""),K(""),$(""),ae(""),s(!1),I(!1)},oe=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=[],a=!1,""===L.trim()&&(a=!0,n.push("Name")),""===H.trim()&&(a=!0,n.push("Address")),""===Y.trim()&&(a=!0,n.push("Phone Number")),""===Z.trim()&&(a=!0,n.push("Demo Time")),!a){e.next=10;break}return w({title:"Input Warning!",message:"".concat(n.join(", ")," are not provided! \nPlease provide all the required field!"),ok:"ok",cancel:"cancel",action:P}),e.abrupt("return",i());case 10:return c={name:L,address:H,phone:Y,time:Z,about:ne},_(!0),e.next=14,S(c);case 14:s=e.sent,_(!1),s?(w({title:"Successfull!",message:"Hi, ".concat(L,",\nYour information has been submited successfully as google form custome REST Response."),ok:"ok",cancel:"cancel",action:le}),i()):(w({title:"Fail to submit!",message:"Sorry, we are unable to send your response! Try again later!",ok:"ok",cancel:"cancel",action:P}),i());case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsxs)(c.a.Fragment,{children:[Object(C.jsx)(j.a,{variant:"contained",onClick:function(){return I(!0)},endIcon:Object(C.jsx)(f.a,{}),children:"Click here"}),Object(C.jsx)(u.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:W,onClose:function(){R?(w({title:"Please Wait!",message:"Please wait while system is processing some important data!",ok:"ok",cancel:"cancel",action:P}),i()):I(!1)},closeAfterTransition:!0,BackdropComponent:b.a,BackdropProps:{timeout:500},children:Object(C.jsx)(p.a,{in:W,children:Object(C.jsxs)(m.a,{className:"modal-box",children:[Object(C.jsxs)(h.a,{open:n,onClose:P,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(C.jsx)(O.a,{id:"alert-dialog-title",children:F?F.title:"Warning"}),Object(C.jsx)(x.a,{children:Object(C.jsx)(v.a,{id:"alert-dialog-description",children:F?F.message:"Please wait!"})}),Object(C.jsxs)(g.a,{children:[Object(C.jsxs)(j.a,{onClick:P,children:[" ",F?F.cancel:"cancel"]}),Object(C.jsx)(j.a,{onClick:F?F.action:P,autoFocus:!0,children:F?F.ok:"ok"})]})]}),Object(C.jsxs)("div",{className:"logo-div",children:[Object(C.jsx)("img",{src:"/logo192.png",alt:"logo",className:"side-logo"}),Object(C.jsx)("div",{className:" logo-title",children:"PolyMatic"}),Object(C.jsx)("div",{className:"logo-desc",children:"Redesign Everything"})]}),Object(C.jsxs)("div",{className:"form-div",children:[Object(C.jsx)("div",{className:"close-btn",onClick:function(){R?(w({title:"Please Wait!",message:"Please wait while system is processing some important data!",ok:"ok",cancel:"cancel",action:P}),i()):(w({title:"Data Remove Warning!",message:"Do you want to remove your data?",ok:"remove",cancel:"cancel",action:le}),i())},children:Object(C.jsx)(N.a,{fontSize:"small"})}),Object(C.jsxs)("div",{className:"form-sec",children:[Object(C.jsxs)("div",{className:"title-div",children:[Object(C.jsx)("span",{children:"Get a Free Demo."})," ",Object(C.jsx)("br",{}),Object(C.jsx)("span",{children:"It's Completely "}),Object(C.jsx)("span",{style:{color:"#3584A7"},children:"Free!"})]}),Object(C.jsxs)("form",{onSubmit:oe,className:"inputform",children:[Object(C.jsxs)("div",{className:"input-group",children:[Object(C.jsxs)("div",{className:"input-label",children:["Name ",Object(C.jsx)("span",{className:"star",children:"*"})]}),Object(C.jsx)("div",{className:"input-box",children:Object(C.jsx)("input",{type:"text",value:L,onChange:function(e){var t;t=e.target.value,M(t)},placeholder:"Enter your name here"})})]}),Object(C.jsxs)("div",{className:"input-group",children:[Object(C.jsxs)("div",{className:"input-label",children:["Address ",Object(C.jsx)("span",{className:"star",children:"*"})]}),Object(C.jsx)("div",{className:"input-box",children:Object(C.jsx)("input",{type:"text",value:H,onChange:function(e){var t;t=e.target.value,J(t)},placeholder:"Enter your Address here"})})]}),Object(C.jsxs)("div",{className:"input-group",children:[Object(C.jsxs)("div",{className:"input-label",children:["Phone Number ",Object(C.jsx)("span",{className:"star",children:"*"})]}),Object(C.jsx)("div",{className:"input-box",children:Object(C.jsx)(k.a,{inputStyle:{padding:"5px 10px 5px 55px",width:"100%",fontSize:"14px"},inputClass:"ph-input",enableSearch:!0,country:"in",required:!0,countryCodeEditable:!0,value:Y,onChange:function(e){K(e)}})})]}),Object(C.jsxs)("div",{className:"input-group",children:[Object(C.jsxs)("div",{className:"input-label",children:["Select Demo Time ",Object(C.jsx)("span",{className:"star",children:"*"})]}),Object(C.jsx)("div",{className:"demo-time-div",children:["1 - 2","3 - 4","5 - 6","7 - 8"].map((function(e,t){return Object(C.jsx)("div",{className:Z===e?"demo-time-box-active":"demo-time-box",onClick:function(){$(e)},children:e},t)}))})]}),Object(C.jsxs)("div",{className:"input-group",children:[Object(C.jsx)("div",{className:"input-label",children:"Where did you hear about us?"}),Object(C.jsx)("div",{className:"input-box",children:Object(C.jsxs)("select",{defaultValue:"",onChange:function(e){var t;"_Other_Text"===(t=e.target.value)?(re(!0),ae("")):(re(!1),ae(t))},children:[Object(C.jsx)("option",{disabled:!0,value:"",children:"Select"}),Object(C.jsx)("option",{value:"Google",children:"Google"}),Object(C.jsx)("option",{value:"Facebook",children:"Facebook"}),Object(C.jsx)("option",{value:"Friends & Families",children:"Friends & Families"}),Object(C.jsx)("option",{value:"_Other_Text",children:"Other"})]})}),ie?Object(C.jsx)("div",{className:"input-box",children:Object(C.jsx)("input",{type:"text",value:ne,onChange:function(e){var t;t=e.target.value,ie&&ae(t)},placeholder:"Other"})}):""]}),Object(C.jsx)("div",{className:"input-group ",children:Object(C.jsx)("center",{children:Object(C.jsx)("button",{type:"submit",disabled:R,className:"submit-btn",children:R?"Please wait...":"Continue"})})}),Object(C.jsxs)("div",{className:"tc",children:["By registering here, I agree to PolyMatic\u2019s ",Object(C.jsx)("span",{className:"tc-link",children:" Terms & Conditions "})," and ",Object(C.jsx)("span",{className:"tc-link",children:" Privacy Policy "})]})]})]})]})]})})})]})};function w(){return Object(C.jsx)("div",{className:"center",children:Object(C.jsx)(F,{})})}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(w,{})}),document.getElementById("root")),P()}},[[83,1,2]]]);
//# sourceMappingURL=main.324950e3.chunk.js.map