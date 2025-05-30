"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[71],{4893:function(n,t,i){i.d(t,{Z:function(){return p}});var e=i(20890),a=i(36314),r=(i(29104),i(58008)),o=i(1413),s=i(4942),l=i(66934),d=i(12065),c=i(63402),u=(0,l.ZP)("main")((function(){return{height:"100%",display:"flex",position:"relative"}})),g=(0,l.ZP)("div")((function(n){var t=n.theme;return(0,s.Z)({display:"none",position:"relative"},t.breakpoints.up("md"),{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"})})),f=(0,l.ZP)("div")((function(n){var t=n.theme;return(0,o.Z)((0,o.Z)({},(0,c.v3)({color:(0,d.Fq)(t.palette.background.default,"light"===t.palette.mode?.9:.94),imgUrl:"/assets/background/overlay_2.jpg"})),{},{top:0,left:0,zIndex:-1,width:"100%",height:"100%",position:"absolute",transform:"scaleX(-1)"})})),m=(0,l.ZP)("div")((function(n){var t=n.theme;return(0,s.Z)({width:480,margin:"auto",display:"flex",minHeight:"100vh",justifyContent:"center",padding:t.spacing(15,2)},t.breakpoints.up("md"),{flexShrink:0,padding:t.spacing(20,8,0,8)})})),h=i(76087),v=i(80184);function p(n){var t=n.children,i=n.illustration,o=n.title;return(0,v.jsxs)(u,{children:[(0,v.jsx)("img",{src:h.Z,alt:"Logo",height:"100px",className:"logo",style:{padding:5}}),(0,v.jsxs)(g,{children:[(0,v.jsx)(e.Z,{variant:"h3",sx:{mb:0,maxWidth:480,textAlign:"center"},children:o||"Hi, Welcome back"}),(0,v.jsx)(r.Z,{disabledEffect:!0,visibleByDefault:!0,alt:"auth",src:i||"/assets/illustrations/illustration_dashboard.png",sx:{maxWidth:720}}),(0,v.jsx)(f,{})]}),(0,v.jsx)(m,{children:(0,v.jsxs)(a.Z,{sx:{width:1},children:[" ",t," "]})})]})}},84009:function(n,t,i){i.r(t),i.d(t,{default:function(){return _}});var e=i(6907),a=i(11087),r=i(36314),o=i(20890),s=i(50533),l=i(4893),d=i(38072),c=i(74165),u=i(1413),g=i(15861),f=i(29439),m=i(72791),h=i(81724),v=i(94420),p=i(57689),x=i(61134),Z=i(44695),y=i(94070),b=i(63466),j=i(13400),I=i(39709),w=i(78316),P=i(73609),S=i(5324),L=i(8176),E=i(80184);function k(){var n=(0,w.E)().register,t=(0,v.I0)(),i=(0,p.s0)(),e=(0,m.useState)(!1),a=(0,f.Z)(e,2),o=a[0],s=a[1],l=h.Ry().shape({firstName:h.Z_().required("First name required"),lastName:h.Z_().required("Last name required"),email:h.Z_().required("Email is required").email("Email must be a valid email address"),password:h.Z_().required("Password is required")}),d=(0,x.cI)({resolver:(0,Z.X)(l),defaultValues:{firstName:"",lastName:"",email:"",password:""}}),k=d.reset,N=d.setError,_=d.handleSubmit,q=d.formState,A=q.errors,V=q.isSubmitting,C=q.isSubmitSuccessful,F=function(){var e=(0,g.Z)((0,c.Z)().mark((function e(a){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n&&(r={name:"".concat(a.firstName).concat(a.lastName),email:a.email,password:a.password},t((0,L.z)(r,i)))}catch(o){console.error(o),k(),N("afterSubmit",(0,u.Z)((0,u.Z)({},o),{},{message:o.message}))}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,E.jsx)(S.ZP,{methods:d,onSubmit:_(F),children:(0,E.jsxs)(r.Z,{spacing:2.5,children:[!!A.afterSubmit&&(0,E.jsx)(y.Z,{severity:"error",children:A.afterSubmit.message}),(0,E.jsxs)(r.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,E.jsx)(S.au,{name:"firstName",label:"First name"}),(0,E.jsx)(S.au,{name:"lastName",label:"Last name"})]}),(0,E.jsx)(S.au,{name:"email",label:"Email address"}),(0,E.jsx)(S.au,{name:"password",label:"Password",type:o?"text":"password",InputProps:{endAdornment:(0,E.jsx)(b.Z,{position:"end",children:(0,E.jsx)(j.Z,{onClick:function(){return s(!o)},edge:"end",children:(0,E.jsx)(P.Z,{icon:o?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,E.jsx)(I.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:V||C,sx:{bgcolor:"text.primary",color:function(n){return"light"===n.palette.mode?"common.white":"grey.800"},"&:hover":{bgcolor:"text.primary",color:function(n){return"light"===n.palette.mode?"common.white":"grey.800"}}},children:"Create account"})]})})}function N(){return(0,E.jsxs)(l.Z,{title:"Manage the job more effectively with Minimal",children:[(0,E.jsxs)(r.Z,{spacing:2,sx:{mb:5,position:"relative"},children:[(0,E.jsx)(o.Z,{variant:"h4",children:"Get started absolutely free."}),(0,E.jsxs)(r.Z,{direction:"row",spacing:.5,children:[(0,E.jsx)(o.Z,{variant:"body2",children:" Already have an account? "}),(0,E.jsx)(s.Z,{component:a.rU,to:d.EE.login,variant:"subtitle2",children:"Sign in"})]})]}),(0,E.jsx)(k,{}),(0,E.jsxs)(o.Z,{component:"div",sx:{color:"text.secondary",mt:3,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",(0,E.jsx)(s.Z,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",(0,E.jsx)(s.Z,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]})]})}function _(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(e.ql,{children:(0,E.jsx)("title",{children:" Register | The Prosperity Pioneers"})}),(0,E.jsx)(N,{})]})}},8176:function(n,t,i){i.d(t,{y:function(){return r},z:function(){return o}});var e=i(52068),a=i(40957),r=function(n,t){return function(i){(0,e.Es)(n).then((function(n){var e,r,o,s;localStorage.setItem("Token",null===n||void 0===n?void 0:n.data.token),localStorage.setItem("role",null===n||void 0===n||null===(e=n.data)||void 0===e||null===(r=e.user)||void 0===r?void 0:r.role);var l=null===n||void 0===n||null===(o=n.data)||void 0===o||null===(s=o.user)||void 0===s?void 0:s.role;"Admin"===l?t("/dashboard"):"FinancialAdviser"===l&&t("/FinancialAdviserDashboard/FinancialAdviser/Appointments"),i((0,a.om)(n))})).catch((function(n){i((0,a.ZY)({message:"Invalid email or password",error:n}))}))}},o=function(n,t){return function(i){(0,e.Nu)(n).then((function(n){t("/admin/login")})).catch((function(n){console.log("error",n)}))}}},52068:function(n,t,i){i.d(t,{Es:function(){return s},IO:function(){return l},Nu:function(){return o}});var e=i(88307),a=i(75601),r="".concat(a.T,"auth/"),o=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e.Z.post("".concat(r,"signup"),n,t)},s=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e.Z.post("".concat(r,"login"),n,t)},l=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e.Z.post("".concat(r,"forgot-password"),n,t)}},39709:function(n,t,i){i.d(t,{Z:function(){return b}});var e=i(4942),a=i(63366),r=i(87462),o=i(72791),s=i(14036),l=i(67384),d=i(94419),c=i(66934),u=i(31402),g=i(94294),f=i(13239),m=i(21217);function h(n){return(0,m.ZP)("MuiLoadingButton",n)}var v=(0,i(75878).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),p=i(80184),x=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Z=(0,c.ZP)(g.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,e.Z)({},"& .".concat(v.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,e.Z)({},"& .".concat(v.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,i=n.theme;return(0,r.Z)((0,e.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,e.Z)({transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short})},"&.".concat(v.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,e.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,e.Z)({},"& .".concat(v.startIconLoadingStart,", & .").concat(v.endIconLoadingEnd),{transition:i.transitions.create(["opacity"],{duration:i.transitions.duration.short}),opacity:0,marginLeft:-8}))})),y=(0,c.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var i=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,s.Z)(i.loadingPosition))]]}})((function(n){var t=n.theme,i=n.ownerState;return(0,r.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{left:"small"===i.size?10:14},"start"===i.loadingPosition&&"text"===i.variant&&{left:6},"center"===i.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===i.loadingPosition&&("outlined"===i.variant||"contained"===i.variant)&&{right:"small"===i.size?10:14},"end"===i.loadingPosition&&"text"===i.variant&&{right:6},"start"===i.loadingPosition&&i.fullWidth&&{position:"relative",left:-10},"end"===i.loadingPosition&&i.fullWidth&&{position:"relative",right:-10})})),b=o.forwardRef((function(n,t){var i=(0,u.Z)({props:n,name:"MuiLoadingButton"}),e=i.children,o=i.disabled,c=void 0!==o&&o,g=i.id,m=i.loading,v=void 0!==m&&m,b=i.loadingIndicator,j=i.loadingPosition,I=void 0===j?"center":j,w=i.variant,P=void 0===w?"text":w,S=(0,a.Z)(i,x),L=(0,l.Z)(g),E=null!=b?b:(0,p.jsx)(f.Z,{"aria-labelledby":L,color:"inherit",size:16}),k=(0,r.Z)({},i,{disabled:c,loading:v,loadingIndicator:E,loadingPosition:I,variant:P}),N=function(n){var t=n.loading,i=n.loadingPosition,e=n.classes,a={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,s.Z)(i))],endIcon:[t&&"endIconLoading".concat((0,s.Z)(i))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,s.Z)(i))]},o=(0,d.Z)(a,h,e);return(0,r.Z)({},e,o)}(k),_=v?(0,p.jsx)(y,{className:N.loadingIndicator,ownerState:k,children:E}):null;return(0,p.jsxs)(Z,(0,r.Z)({disabled:c||v,id:L,ref:t},S,{variant:P,classes:N,ownerState:k,children:["end"===k.loadingPosition?e:_,"end"===k.loadingPosition?_:e]}))}))},44695:function(n,t,i){i.d(t,{X:function(){return s}});var e=i(61134),a=function(n,t,i){if(n&&"reportValidity"in n){var a=(0,e.U2)(i,t);n.setCustomValidity(a&&a.message||""),n.reportValidity()}},r=function(n,t){var i=function(i){var e=t.fields[i];e&&e.ref&&"reportValidity"in e.ref?a(e.ref,i,n):e.refs&&e.refs.forEach((function(t){return a(t,i,n)}))};for(var e in t.fields)i(e)},o=function(n,t){t.shouldUseNativeValidation&&r(n,t);var i={};for(var a in n){var o=(0,e.U2)(t.fields,a);(0,e.t8)(i,a,Object.assign(n[a],{ref:o&&o.ref}))}return i},s=function(n,t,i){return void 0===t&&(t={}),void 0===i&&(i={}),function(s,l,d){try{return Promise.resolve(function(e,o){try{var c=(t.context,Promise.resolve(n["sync"===i.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},t,{context:l}))).then((function(n){return d.shouldUseNativeValidation&&r({},d),{values:i.rawValues?s:n,errors:{}}})))}catch(a){return o(a)}return c&&c.then?c.then(void 0,o):c}(0,(function(n){if(!n.inner)throw n;return{values:{},errors:o((t=n,i=!d.shouldUseNativeValidation&&"all"===d.criteriaMode,(t.inner||[]).reduce((function(n,t){if(n[t.path]||(n[t.path]={message:t.message,type:t.type}),i){var a=n[t.path].types,r=a&&a[t.type];n[t.path]=(0,e.KN)(t.path,i,n,t.type,r?[].concat(r,t.message):t.message)}return n}),{})),d)};var t,i})))}catch(a){return Promise.reject(a)}}}}}]);
//# sourceMappingURL=71.50eb7771.chunk.js.map