(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,n){e.exports={main:"Layout_main__1j2i1"}},148:function(e,t,n){},150:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(49),s=n.n(r),c=(n(148),n(14)),i=n.n(c),o=n(18),l=n(12),d=(n(150),n(246)),u=n(232),j=n(248),h=n(233),f=n(234),b=n(59),x=n.n(b),p=n(224),m=n(122),O=n(46),g=n(1);var v=function(e){var t=a.useState(!1),n=Object(l.a)(t,2),r=(n[0],n[1],a.useState(null)),s=Object(l.a)(r,2),c=s[0],i=s[1];console.log("Our login status: "+e.loggedIn);var o=function(e){i(e.currentTarget)};return Object(g.jsx)(u.a,{sx:{flexGrow:1},children:Object(g.jsx)(d.a,{position:"static",children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(h.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Laundry Connect 2.0"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{style:{cursor:"pointer"},onClick:o,children:[" ","Account Details"," "]}),Object(g.jsx)(f.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:o,color:"inherit",children:Object(g.jsx)(x.a,{})}),Object(g.jsxs)(m.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(c),onClose:function(){i(null)},children:[!e.loggedIn&&Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{onClick:function(){e.handleRegister(),i(null)},children:"Register"}),Object(g.jsx)(p.a,{onClick:function(){e.handleLogin(),i(null)},children:"Sign In"})]}),e.loggedIn&&Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{component:O.b,to:"/myAccount",children:"My Account"}),Object(g.jsx)(p.a,{component:O.b,to:"/",onClick:function(){e.handleLogout(),i(null)},children:"Sign Out"})]})]})]})]})})})},y=n(116),w=n.n(y);var C=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(v,{handleRegister:e.handleRegister,handleLogin:e.handleLogin,loggedIn:e.loggedIn,handleLogout:e.handleLogout})}),Object(g.jsx)("main",{className:w.a.main,children:e.children})]})},S=n(121),k=n(231),I=n(21),P=n(225),T=n(250),W=n(251),D=n(228),F=n(118),R=n.n(F),A=n(119),L=n.n(A),H=n(27),z=n.n(H),E=n(5),_=n(117),B=n.n(_),G=n(236),J=n(249),M=n(96),N=n.n(M),q="#fdec96",U="#fc647d",V="#000000";var K=function(e){var t,n,a=(t=e.item.minutes_left,n=e.item.status,null===t&&"Ready For Pickup"===n?q:"Available"===n?"#90ee90":"Offline"===n?V:null===t&&"Ready To Start"===n||t>=35?U:t>=15?"fdb996":t>=0?q:V);return Object(g.jsx)(G.a,{sx:{height:"100%",display:"flex",flexDirection:"column",boxShadow:3},children:Object(g.jsxs)(J.a,{sx:{flexGrow:1},children:[Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(g.jsxs)(h.a,{gutterBottom:!0,variant:"h6",children:["Dryer - #",e.item.machinenumber]}),Object(g.jsx)(N.a,{style:{minWidth:"120px"},paddingfontsize:"large"})]}),Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(g.jsx)(z.a,{paddingfontsize:"small",style:{minWidth:"40px",color:a}}),Object(g.jsxs)("span",{children:[" ",e.item.status," "]}),null!==e.item.minutes_left&&Object(g.jsxs)("span",{children:[" : ",e.item.minutes_left," Minutes"]})]})]})})},Q=n(97),X=n.n(Q),Y="#fdec96",Z="#fc647d",$="#000000";var ee=function(e){var t,n,a=(t=e.item.minutes_left,n=e.item.status,null===t&&"Ready For Pickup"===n?Y:"Available"===n?"#90ee90":"Offline"===n?$:null===t&&"Ready To Start"===n||t>=20?Z:t>=10?"fdb996":t>=0?Y:$);return Object(g.jsx)(G.a,{sx:{height:"100%",display:"flex",flexDirection:"column",boxShadow:3},children:Object(g.jsxs)(J.a,{sx:{flexGrow:1},children:[Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(g.jsxs)(h.a,{gutterBottom:!0,variant:"h6",children:["Washer - #",e.item.machinenumber]}),Object(g.jsx)(X.a,{style:{minWidth:"100px"},paddingfontsize:"small"})]}),Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(g.jsx)(z.a,{paddingfontsize:"small",style:{minWidth:"40px",color:a}}),Object(g.jsxs)("span",{children:[" ",e.item.status," "]}),null!==e.item.minutes_left&&Object(g.jsxs)("span",{children:["  : ",e.item.minutes_left,"  Minutes"]})]})]})})},te=n(237);var ne=function(e){return Object(g.jsx)(te.a,{sx:{py:4},maxWidth:"lg",children:Object(g.jsxs)(D.a,{container:!0,spacing:3,children:[e.washerInfo.map((function(t,n){return Object(g.jsx)(D.a,{item:!0,md:3,sm:6,xs:12,children:Object(g.jsx)(ee,{show:e.show,hide:e.onHide,index:n+1,item:t},n+1)},n)})),e.dryerInfo.map((function(t,n){return Object(g.jsx)(D.a,{item:!0,md:3,sm:6,xs:12,children:Object(g.jsx)(K,{show:e.show,hide:e.onHide,index:n+1,item:t},n+1)},n)}))]})})},ae=Object(a.createContext)({contacts:[],addContactHandler:function(e){},removeContactHandler:function(e){},getContactHandler:function(e){},editContactHandler:function(e){}});function re(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1];Object(a.useEffect)((function(){fetch("/favBuildings",{method:"GET"}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var c={contacts:r,addContactHandler:function(e){s((function(t){return t.concat(e)}))},removeContactHandler:function(e){s((function(t){return t.filter((function(t){return t!==e}))}))},getContactHandler:function(e){return r.find((function(t){return t._id===e}))},editContactHandler:function(e){s((function(t){return t.map((function(t){return t._id===e._id?e:t}))}))},removeAll:function(){s([])}};return Object(g.jsx)(ae.Provider,{value:c,children:e.children})}var se=ae,ce=Object(E.a)((function(e){return Object(g.jsx)(P.a,Object(I.a)({disableGutters:!0,elevation:0,square:!0},e))}))((function(e){var t=e.theme;return{border:"1px solid ".concat(t.palette.divider),"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}}})),ie=Object(E.a)((function(e){return Object(g.jsx)(T.a,Object(I.a)({expandIcon:Object(g.jsx)(B.a,{sx:{fontSize:"0.9rem"}})},e))}))((function(e){var t=e.theme;return{backgroundColor:"dark"===t.palette.mode?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}})),oe=Object(E.a)(W.a)((function(e){return{padding:e.theme.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}}));function le(e){return de.apply(this,arguments)}function de(){return(de=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/addFavorite",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){return je.apply(this,arguments)}function je(){return(je=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/delFavorite",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e){return e>=75?"#90ee90":e>=50?"#fdec96":e>=25?"#fdb996":e>=0?"#fc647d":"#000000"}var fe=function(e){var t=he(e.item.washeravailable_percent),n=he(e.item.dryeravailable_percent);console.log("favorite: "+e.favorite);var r=a.useState(e.favorite),s=Object(l.a)(r,2),c=(s[0],s[1]),d=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),n.stopPropagation(),a={fav:e.item.humanname},t.next=5,le(a);case 5:r=t.sent,console.log(r.failed),"false"===r.failed&&(c(!0),e.addContactHandler(e.item.humanname));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),n.stopPropagation(),a={fav:e.item.humanname},t.next=5,ue(a);case 5:r=t.sent,console.log(r.failed),"false"===r.failed&&e.removeContactHandler(e.item.humanname);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{children:Object(g.jsxs)(ce,{expanded:e.expanded==="panel"+e.index,onChange:e.handleChange("panel"+e.index),children:[Object(g.jsxs)(ie,{"aria-controls":"panel1d-content",id:"panel1d-header",children:[Object(g.jsxs)(D.a,{container:!0,direction:"row",spacing:2,children:[Object(g.jsxs)(D.a,{item:!0,xs:3,sm:3,children:[Object(g.jsx)(h.a,{children:e.item.humanname})," "]}),Object(g.jsx)(D.a,{item:!0,xs:4,children:Object(g.jsxs)("div",{style:{display:"inline-flex"},children:[Object(g.jsx)(z.a,{fontSize:"small",style:{color:t}}),"\xa0",Object(g.jsx)(h.a,{children:Object(g.jsxs)("span",{children:[e.item.washeravailable_percent,"% Washers Available"]})})]})}),Object(g.jsx)(D.a,{item:!0,xs:3,sm:4,children:Object(g.jsxs)("div",{style:{display:"inline-flex"},children:[Object(g.jsx)(z.a,{fontSize:"small",style:{color:n}}),"\xa0",Object(g.jsx)(h.a,{children:Object(g.jsxs)("span",{children:[e.item.dryeravailable_percent,"% Dryers Available"]})})]})})]}),Object(g.jsxs)(D.a,{item:!0,children:[!e.favorite&&Object(g.jsx)(R.a,{onClick:d,fontSize:"small"}),e.favorite&&Object(g.jsx)(L.a,{onClick:u,fontSize:"small"})]})]}),Object(g.jsx)(oe,{children:Object(g.jsx)(ne,{washerInfo:e.item.washers,dryerInfo:e.item.dryers})})]})})};var be=function(e){var t=Object(a.useContext)(se),n=Object(a.useState)(""),r=Object(l.a)(n,2),s=r[0],c=r[1],i=function(e){return function(t,n){c(!!n&&e)}};if(e.showFavorites){var o=e.data.filter((function(e){return t.contacts.includes(e.humanname)}));return Object(g.jsx)("div",{children:o.map((function(n,a){return console.log(t.contacts),Object(g.jsx)(fe,{expanded:s,handleChange:i,show:e.show,hide:e.onHide,index:a+1,item:n,favorite:t.contacts.includes(n.humanname),removeContactHandler:t.removeContactHandler,addContactHandler:t.addContactHandler},a+1)}))})}return Object(g.jsx)("div",{children:e.data.map((function(n,a){return Object(g.jsx)(fe,{expanded:s,handleChange:i,show:e.show,hide:e.onHide,index:a+1,item:n,favorite:t.contacts.includes(n.humanname),removeContactHandler:t.removeContactHandler,addContactHandler:t.addContactHandler},a+1)}))})},xe=n(17),pe=n(230),me=n(252),Oe=n(235),ge=n(223);var ve=function(e){var t;console.log(e.timestamp);try{var n=new Date(1e3*e.timestamp[0].timestamp);t=n.toLocaleString(navigator.language,{year:"numeric",month:"long",day:"numeric"})+" at "+n.toLocaleString(navigator.language,{hour:"numeric",minute:"numeric"})}catch(a){t="Loading..."}return Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{m:1}},children:[Object(g.jsx)(h.a,{variant:"h4",children:Object(g.jsx)("b",{children:"Welcome to LaundryConnect 2.0! "})}),Object(g.jsx)(h.a,{variant:"h6",children:"Because Laundry Connect sucks at web design, and WPI deserves a better how-busy-is-the-laundry-room experience."}),Object(g.jsx)(G.a,{sx:{boxShadow:3},children:Object(g.jsxs)(Oe.a,{children:[Object(g.jsx)("div",{style:{display:"inline-flex"},children:Object(g.jsxs)(ge.a,{children:[Object(g.jsx)(z.a,{fontSize:"small",style:{color:"#90ee90"}}),"\xa0",Object(g.jsx)(h.a,{children:"Available"})]})}),Object(g.jsx)("div",{style:{display:"inline-flex"},children:Object(g.jsxs)(ge.a,{children:[Object(g.jsx)(z.a,{fontSize:"small",style:{color:"#fdec96"}}),"\xa0",Object(g.jsx)(h.a,{children:"Almost Done"})]})}),Object(g.jsx)("div",{style:{display:"inline-flex"},children:Object(g.jsxs)(ge.a,{children:[Object(g.jsx)(z.a,{fontSize:"small",style:{color:"#fdb996"}}),"\xa0",Object(g.jsx)(h.a,{children:"In Use"})]})}),Object(g.jsx)("div",{style:{display:"inline-flex"},children:Object(g.jsxs)(ge.a,{children:[Object(g.jsx)(z.a,{fontSize:"small",style:{color:"#fc647d"}}),"\xa0",Object(g.jsx)(h.a,{children:"Just Started"})]})}),Object(g.jsx)("div",{style:{display:"inline-flex"},children:Object(g.jsxs)(ge.a,{children:[Object(g.jsx)(z.a,{fontSize:"small",style:{color:"#000000"}}),"\xa0",Object(g.jsx)(h.a,{children:"Out of Order"})]})})]})}),Object(g.jsxs)(h.a,{variant:"small",children:["Last updated: ",t]}),Object(g.jsxs)(pe.a,{color:"primary",value:e.alignment,exclusive:!0,onChange:function(t,n){null!==n&&e.setAlignment(n)},children:[Object(g.jsx)(me.a,{onClick:function(){e.setFavorites(!1)},value:"All",children:"All Locations"}),Object(g.jsx)(me.a,{onClick:function(){e.setFavorites(!0)},value:"Selected",children:"Favorite Locations"})]})]})})},ye=n(4),we=n(88),Ce=n(245),Se=n(239),ke=n(238),Ie=n(240),Pe=n(244),Te=n(86),We=n.n(Te),De=n(219),Fe=n(243),Re=n(69),Ae=n.n(Re),Le=n(68),He=n.n(Le),ze=n(242),Ee=n(241),_e=n(226),Be=n(87),Ge=n.n(Be),Je=n(220),Me=["children","onClose"],Ne=function(e){var t=e.children,n=e.onClose,a=Object(we.a)(e,Me);return Object(g.jsxs)(ke.a,Object(I.a)(Object(I.a)({sx:{m:0,p:2}},a),{},{children:[t,n?Object(g.jsx)(f.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(g.jsx)(We.a,{})}):null]}))},qe=Object(De.a)({root:{color:"#DC143C"}})(h.a);function Ue(e){return Ve.apply(this,arguments)}function Ve(){return(Ve=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ke=function(e){var t,n=a.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),r=Object(l.a)(n,2),s=r[0],c=r[1],d=a.useState(!1),j=Object(l.a)(d,2),b=j[0],p=j[1],m=a.useRef(),O=a.useRef(),v=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,r,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=m.current.value,r=O.current.value,s={u:a,p:r},t.next=6,Ue(s);case 6:c=t.sent,console.log(c.failed),"false"===c.failed?(e.setToken(c),e.handleClose(),p(!1),e.handleFavorite(!0),e.favoriteButton("Selected")):p(!0);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsx)(u.a,{children:Object(g.jsxs)(Se.a,{fullWidth:!0,maxWidth:"xs",onClose:e.handleClose,open:e.loginOpen,children:[Object(g.jsx)(Ne,{onClose:e.handleClose,children:"Sign In"}),Object(g.jsxs)(Ie.a,{dividers:!0,children:[Object(g.jsx)(h.a,{gutterBottom:!0,children:Object(g.jsx)("b",{children:"Login Credentials:"})}),Object(g.jsxs)(u.a,{sx:{display:"flex",alignItems:"flex-end"},children:[Object(g.jsx)(x.a,{sx:{color:"action.active",mr:1,my:.5}}),Object(g.jsx)(Je.a,{autoFocus:!0,inputRef:m,margin:"dense",id:"username standard-required input-with-icon-textfield",label:"Username",type:"text",fullWidth:!0,variant:"standard"})]}),Object(g.jsxs)(u.a,{sx:{display:"flex",alignItems:"flex-end",my:1.5},children:[Object(g.jsx)(Ge.a,{sx:{color:"action.active",mr:1,my:.5}}),Object(g.jsxs)(ze.a,{fullWidth:!0,variant:"standard",children:[Object(g.jsx)(_e.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(g.jsx)(Ee.a,{autoFocus:!0,required:!0,inputRef:O,margin:"dense",id:"password standard-required standard-adornment-password",type:s.showPassword?"text":"password",value:s.password,onChange:(t="password",function(e){c(Object(I.a)(Object(I.a)({},s),{},Object(ye.a)({},t,e.target.value)))}),endAdornment:Object(g.jsx)(Fe.a,{position:"end",children:Object(g.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(I.a)(Object(I.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:s.showPassword?Object(g.jsx)(He.a,{}):Object(g.jsx)(Ae.a,{})})}),variant:"standard",fullWidth:!0})]})]}),b&&Object(g.jsx)(qe,{variant:"h7",children:"The inputted username and password is incorrect."})]}),Object(g.jsx)(Pe.a,{children:Object(g.jsx)(Ce.a,{autoFocus:!0,onClick:v,children:"Sign In"})})]})})},Qe=n(120),Xe=n.n(Qe),Ye=["children","onClose"],Ze=Object(De.a)({root:{color:"#DC143C"}})(h.a);function $e(e){return et.apply(this,arguments)}function et(){return(et=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(e){return nt.apply(this,arguments)}function nt(){return(nt=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var at=function(e){var t=e.children,n=e.onClose,a=Object(we.a)(e,Ye);return Object(g.jsxs)(ke.a,Object(I.a)(Object(I.a)({sx:{m:0,p:2}},a),{},{children:[t,n?Object(g.jsx)(f.a,{"aria-label":"close",onClick:n,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(g.jsx)(We.a,{})}):null]}))},rt=function(e){var t,n=a.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),r=Object(l.a)(n,2),s=r[0],c=r[1],d=a.useState(!1),j=Object(l.a)(d,2),b=j[0],p=j[1],m=a.useState(!1),O=Object(l.a)(m,2),v=O[0],y=O[1],w=a.useRef(),C=a.useRef(),S=a.useRef(),k=function(){var t=Object(o.a)(i.a.mark((function t(n){var a,r,s,c,o,l,d;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=w.current.value,r=C.current.value,s=S.current.value,c={u:a,p:r,e:s},t.next=7,$e(c);case 7:if(o=t.sent,console.log(o.failed),"exists"!==o.failed){t.next=14;break}p(!0),console.log("This user already exists!"),t.next=25;break;case 14:if("empty"!==o.failed){t.next=18;break}y(!0),t.next=25;break;case 18:return console.log("Registration success!"),l={u:a,p:r},t.next=22,tt(l);case 22:d=t.sent,console.log(d.failed),"false"===d.failed?(e.setToken(d),e.handleClose()):console.log("Error logging in after registration");case 25:console.log(c);case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(g.jsx)(u.a,{children:Object(g.jsxs)(Se.a,{fullWidth:!0,maxWidth:"xs",onClose:e.handleClose,open:e.registerOpen,children:[Object(g.jsx)(at,{onClose:e.handleClose,children:"Register"}),Object(g.jsxs)(Ie.a,{dividers:!0,children:[Object(g.jsx)(h.a,{gutterBottom:!0,children:Object(g.jsx)("b",{children:"Account Credentials:"})}),Object(g.jsxs)(u.a,{sx:{display:"flex",alignItems:"flex-end"},children:[Object(g.jsx)(x.a,{sx:{color:"action.active",mr:1,my:.5}}),Object(g.jsxs)(ze.a,{fullWidth:!0,variant:"standard",children:[Object(g.jsx)(_e.a,{htmlFor:"standard-adornment-password",children:"Username"}),Object(g.jsx)(Ee.a,{autoFocus:!0,inputRef:w,margin:"dense",id:"username standard-required input-with-icon-textfield",label:"Username",type:"text",fullWidth:!0,variant:"standard"})]})]}),b&&!v&&Object(g.jsx)(Ze,{variant:"h7",children:"The inputted username is taken."}),Object(g.jsxs)(u.a,{sx:{display:"flex",alignItems:"flex-end",mt:1.5},children:[Object(g.jsx)(Xe.a,{sx:{color:"action.active",mr:1,my:.5}}),Object(g.jsxs)(ze.a,{fullWidth:!0,variant:"standard",children:[Object(g.jsx)(_e.a,{htmlFor:"standard-adornment-email",children:"Email"}),Object(g.jsx)(Ee.a,{inputRef:S,autoFocus:!0,margin:"dense",id:"email standard-required input-with-icon-textfield",label:"Email",type:"email",fullWidth:!0,variant:"standard"})]})]}),Object(g.jsxs)(u.a,{sx:{display:"flex",alignItems:"flex-end",my:1.5},children:[Object(g.jsx)(Ge.a,{sx:{color:"action.active",mr:1,my:.5}}),Object(g.jsxs)(ze.a,{fullWidth:!0,variant:"standard",children:[Object(g.jsx)(_e.a,{htmlFor:"standard-adornment-password",children:"Password"}),Object(g.jsx)(Ee.a,{autoFocus:!0,required:!0,inputRef:C,margin:"dense",id:"password standard-required standard-adornment-password",type:s.showPassword?"text":"password",value:s.password,onChange:(t="password",function(e){c(Object(I.a)(Object(I.a)({},s),{},Object(ye.a)({},t,e.target.value)))}),endAdornment:Object(g.jsx)(Fe.a,{position:"end",children:Object(g.jsx)(f.a,{"aria-label":"toggle password visibility",onClick:function(){c(Object(I.a)(Object(I.a)({},s),{},{showPassword:!s.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:s.showPassword?Object(g.jsx)(He.a,{}):Object(g.jsx)(Ae.a,{})})}),variant:"standard",fullWidth:!0})]})]}),v&&Object(g.jsx)(Ze,{variant:"h7",children:"The inputted username and password cannot be blank."})]}),Object(g.jsx)(Pe.a,{children:Object(g.jsx)(Ce.a,{autoFocus:!0,onClick:k,children:"Register"})})]})})};var st=n(82),ct=n(83),it=n(124),ot=n(123);function lt(){return dt.apply(this,arguments)}function dt(){return(dt=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Within getUsername!"),e.abrupt("return",fetch("/username",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return console.log(e.username+" is our username!"),"false"===e.failed&&e.username?e.username:"N/A"})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ut=function(e){var t=Object(a.useState)(null),n=Object(l.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(!0),d=Object(l.a)(c,2),u=d[0],j=d[1];return Object(a.useEffect)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,lt();case 4:t=e.sent,s(t),j(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),j(!1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]),e.updateUsername,u?Object(g.jsx)(h.a,{variant:"h4",children:"Loading username..."}):r?Object(g.jsxs)(h.a,{variant:"h4",children:["Welcome, ",r,"!"]}):Object(g.jsx)(h.a,{variant:"h4",children:"Welcome user!"})},jt=Object(S.a)({palette:{primary:{main:"#DC143C"}}}),ht=Object(De.a)({root:{color:"#DC143C"}})(h.a);function ft(){return(ft=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/changePassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var bt=function(e){Object(it.a)(n,e);var t=Object(ot.a)(n);function n(e){var r;return Object(st.a)(this,n),(r=t.call(this,e)).changePassword=function(e){e.preventDefault(),console.log("Changing password in changePassword!");var t=new FormData(e.currentTarget).get("newPassword");""===t.trim()?r.setState({success:!1,emptyPassword:!0}):(!function(e){ft.apply(this,arguments)}({newPassword:t}),r.passwordInput.current.value=null,r.setState({success:!0,emptyPassword:!1}))},r.passwordInput=a.createRef(""),r}return Object(ct.a)(n,[{key:"render",value:function(){return Object(g.jsx)(k.a,{theme:jt,children:Object(g.jsxs)(te.a,{component:"main",children:[Object(g.jsx)(D.a,{container:!0,spacing:0,sx:{my:2},direction:"column",alignItems:"center",justifyContent:"center",children:Object(g.jsx)(ut,{})}),Object(g.jsx)(D.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",children:Object(g.jsx)(G.a,{sx:{height:"100%",display:"flex",flexDirection:"row",boxShadow:3},children:Object(g.jsx)(J.a,{sx:{flexGrow:1},children:Object(g.jsxs)(u.a,{component:"form",noValidate:!0,onSubmit:this.changePassword,sx:{mx:12,my:4},children:[Object(g.jsx)(h.a,{variant:"h5",mb:2,textAlign:"center",children:"Change Password"}),Object(g.jsx)(D.a,{container:!0,spacing:2,direction:"column",children:Object(g.jsx)(D.a,{item:!0,children:Object(g.jsx)(Je.a,{name:"newPassword",required:!0,type:"password",fullWidth:!0,id:"newPassword",label:"Enter your new password",autoFocus:!0,inputRef:this.passwordInput})})}),this.state&&this.state.success&&Object(g.jsx)(D.a,{container:!0,spacing:0,sx:{mt:2},direction:"column",alignItems:"center",justifyContent:"center",children:Object(g.jsx)(ht,{variant:"h8",children:"Password changed!"})}),this.state&&this.state.emptyPassword&&Object(g.jsx)(D.a,{container:!0,spacing:0,sx:{mt:2},direction:"column",alignItems:"center",justifyContent:"center",children:Object(g.jsx)(ht,{variant:"h8",children:"Password cannot be blank!"})}),Object(g.jsx)(Ce.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Change Password"})]})})})}),Object(g.jsx)(D.a,{container:!0,spacing:0,sx:{my:2},direction:"column",alignItems:"center",justifyContent:"center",children:Object(g.jsx)(Ce.a,{component:O.b,to:"/",children:"Return To Main Page"})})]})})}}]),n}(a.Component),xt=bt,pt=Object(S.a)({palette:{primary:{main:"#DC143C"}}});var mt=function(){var e=a.useState("All"),t=Object(l.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(a.useState)(function(){var e=sessionStorage.getItem("token"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.failed}()),t=Object(l.a)(e,2),n=t[0],r=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),r(e)},token:n}}(),c=s.token,d=s.setToken,u=a.useState([]),j=Object(l.a)(u,2),h=j[0],f=j[1],b=a.useState([]),x=Object(l.a)(b,2),p=x[0],m=x[1],O=a.useState(!1),v=Object(l.a)(O,2),y=v[0],w=v[1],S=a.useState(!1),I=Object(l.a)(S,2),P=I[0],T=I[1],W=a.useState(!1),D=Object(l.a)(W,2),F=D[0],R=D[1],A=a.useState(Date.now()),L=Object(l.a)(A,2),H=L[0],z=L[1];function E(){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Within logout..."),e.abrupt("return",fetch("/logout",{method:"GET"}).then((function(e){console.log("Logged out successfully!"),console.log(n),r("All"),R(!1),d(null)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.useEffect((function(){var e=setInterval((function(){return z(Date.now())}),12e4);return function(){clearInterval(e)}}),[]),a.useEffect((function(){fetch("/laundry",{method:"GET"}).then((function(e){return e.json()})).then((function(e){e.splice(e.length-1),f(e),console.log(e)}))}),[H]),a.useEffect((function(){fetch("/timestamp",{method:"GET"}).then((function(e){return e.json()})).then((function(e){m(e),console.log(e)}))}),[H]);var B=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,console.log("Logging out user!"+t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){w(!1),T(!1)};return Object(g.jsx)(k.a,{theme:pt,children:Object(g.jsxs)(C,{handleRegister:function(){T(!0)},handleLogin:function(){w(!0)},handleLogout:B,loggedIn:c,children:[y&&Object(g.jsx)(Ke,{loginOpen:y,setToken:d,handleClose:G,handleFavorite:R,favoriteButton:r}),P&&Object(g.jsx)(rt,{registerOpen:P,setToken:d,handleClose:G}),Object(g.jsxs)(xe.c,{children:[Object(g.jsxs)(xe.a,{path:"/",exact:!0,children:[c&&Object(g.jsxs)(re,{children:[Object(g.jsx)(ve,{setFavorites:R,timestamp:p,loggedIn:c,alignment:n,setAlignment:r}),Object(g.jsx)(be,{data:h,showFavorites:F})]}),!c&&Object(g.jsxs)("div",{children:[Object(g.jsx)(ve,{setFavorites:R,timestamp:p,loggedIn:c,alignment:n,setAlignment:r}),Object(g.jsx)(be,{data:h,showFavorites:F})]})]}),Object(g.jsx)(xe.a,{path:"/myAccount",children:c&&Object(g.jsx)(xt,{username:c.username})})]})]})})};s.a.render(Object(g.jsx)(O.a,{children:Object(g.jsx)(mt,{})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.a377c739.chunk.js.map