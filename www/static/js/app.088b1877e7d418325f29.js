webpackJsonp([1],{"1DRc":function(t,e){},"1vjS":function(t,e){},"7zck":function(t,e){},ID16:function(t,e){},"Ih1/":function(t,e,s){t.exports=s.p+"static/img/beetle.de5b274.png"},IsLa:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("u7Vc");var a=s("7+uW"),i=s("3EgV"),n=s.n(i);s("7zck"),s("s6ZO");a.default.use(n.a);var c=s("/ocq"),o=s("Xxa5"),r=s.n(o),d=s("exGp"),u=s.n(d),l=s("Dd8w"),v=s.n(l),h={name:"outline-label",props:{label:String}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border center",staticStyle:{"background-color":"#1867c0 !important"}},[e("div",{staticClass:"label",staticStyle:{color:"azure"}},[this._v(" \n        "+this._s(this.label)+"\n    ")])])},staticRenderFns:[]};var f=s("VU/8")(h,p,!1,function(t){s("ID16")},null,null).exports,m=s("NYxO"),_={name:"mainMenu",methods:v()({},Object(m.b)(["setMenu","setStep"]),{nextTolist:function(){this.setMenu("list")},nextToOpen:function(){this.setMenu("open")}}),beforeMount:function(){var t=this;return u()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("menu",!0);case 2:case"end":return e.stop()}},e,t)}))()},beforeDestroy:function(){var t=this;return u()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("menu",!1);case 2:case"end":return e.stop()}},e,t)}))()},computed:v()({},Object(m.c)(["isMenu"]))},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container center content",attrs:{id:"menu"}},[e("div",[e("v-btn",{staticClass:"menu-btn",on:{click:this.nextTolist}},[this._v("Rent a box")])],1),this._v(" "),e("div",[e("v-btn",{staticClass:"menu-btn",on:{click:this.nextToOpen}},[this._v("Open a box")])],1)])},staticRenderFns:[]};var x=s("VU/8")(_,g,!1,function(t){s("YdFF")},"data-v-73a0ef70",null).exports,C={name:"boxrenting",data:function(){return{id:this.$route.params.id,tel:""}},mounted:function(){},methods:v()({},Object(m.b)(["setMenu","setStep","setData"]),{rent:function(){0!=this.tel.length&&(this.setMenu("faceReg"),this.setStep("3"))},goback:function(){this.setMenu("list"),this.setStep("1")},goto3:function(){this.$router.push({path:"/box/3"})},next:function(){this.tel.length>=8?(this.setMenu("faceReg"),this.setStep("3")):console.log("Tel min > 8")}}),computed:v()({},Object(m.c)(["isMenu","isStep","getData"]),{faceid:function(){var t=this.$refs.cam.faceid;return t}}),watch:{state:function(t){}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"center"},[s("div",{staticStyle:{color:"#3B5998","font-size":"72px"}},[t._v("Box "+t._s(t.id))]),t._v(" "),s("div",{staticStyle:{"font-size":"64px","margin-bottom":"25px"}},[t._v("10 Baht/hr")]),t._v(" "),s("div",{staticStyle:{"font-size":"18px",color:"#FF0000","margin-bottom":"35px"}},[t._v("Input your to telephone number in case of forgot your box")]),t._v(" "),s("div",{staticStyle:{"margin-top":"25px","margin-bottom":"10px","margin-left":"20%"}},[s("v-text-field",{staticStyle:{width:"95%"},attrs:{label:"Solo",placeholder:"Telephone No.",solo:""},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),t._v(" "),s("div",{staticStyle:{"margin-bottom":"25px"}},[s("v-btn",{staticStyle:{width:"330px",height:"100px","background-color":"#3B5998",color:"#FFFFFF","font-size":"28px"},on:{click:this.next}},[t._v("Rent a box")])],1),t._v(" "),s("div",[s("v-btn",{staticStyle:{width:"330px",height:"100px","font-size":"28px"},on:{click:this.goback}},[t._v("Back to box select")])],1)])])},staticRenderFns:[]};var S=s("VU/8")(C,b,!1,function(t){s("1vjS")},null,null).exports,w={name:"box",props:{name:String,status:String,uuid:String},data:function(){return{id:this.uuid}},methods:v()({},Object(m.b)(["setMenu","setStep","setData"]),{next:function(){this.setMenu("renting"),this.setStep("2")}}),mounted:function(){},computed:v()({},Object(m.c)(["isMenu","isStep","data"]))},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{staticClass:"h-center",staticStyle:{"text-align":"center",margin:"0px",width:"18vw",height:"21vh","background-color":"#33c0ca"},attrs:{flat:"",tile:""}},[s("v-btn",{on:{click:function(e){t.next()}}},[t._v("click")])],1)],1)},staticRenderFns:[]},k=s("VU/8")(w,M,!1,null,null,null).exports,y={name:"boxlist",data:function(){return{boxs:[{name:"1",status:"1",uuid:"1"},{name:"2",status:"0",uuid:"2"},{name:"3",status:"1",uuid:"3"},{name:"4",status:"0",uuid:"4"},{name:"5",status:"1",uuid:"5"},{name:"6",status:"0",uuid:"6"},{name:"7",status:"0",uuid:"7"},{name:"8",status:"0",uuid:"8"},{name:"9",status:"1",uuid:"9"},{name:"10",status:"0",uuid:"10"},{name:"11",status:"1",uuid:"11"},{name:"12",status:"0",uuid:"12"},{name:"13",status:"0",uuid:"13"},{name:"14",status:"0",uuid:"14"},{name:"15",status:"0",uuid:"15"},{name:"16",status:"0",uuid:"16"},{name:"17",status:"0",uuid:"17"},{name:"18",status:"0",uuid:"18"},{name:"19",status:"0",uuid:"19"},{name:"20",status:"0",uuid:"20"},{name:"21",status:"0",uuid:"21"}]}},methods:v()({},Object(m.b)(["setMenu","setStep","setData"]),{onScroll:function(t){this.offsetTop=t.target.scrollTop}}),created:function(){this.axios.post("https://beetledump.herokuapp.com/getdevices",{user_id:0}).then(function(t){t.data.data})},components:{Box:k},mounted:function(){this.setStep("1")}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroll-y",staticStyle:{"max-height":"86vh","min-height":"86vh","background-color":"#DBD8D8"},attrs:{id:"scroll-target"}},[e("v-card",{staticStyle:{border:"0px","background-color":"#DBD8D8"}},[e("v-layout",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:this.onScroll,expression:"onScroll",arg:"#scroll-target"}],attrs:{row:"",wrap:""}},this._l(this.boxs,function(t){return e("v-flex",{key:t.name,staticClass:"flex-padding",attrs:{xs4:""}},[e("box",{staticStyle:{margin:"5% 5% 5% 5%"},attrs:{name:t.name,status:t.status,uuid:t.uuid}})],1)}))],1)],1)},staticRenderFns:[]};var P=s("VU/8")(y,E,!1,function(t){s("qemj")},null,null).exports,R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"h-center"},[this._v("\n    THIS IS RECIEPT\n")])},staticRenderFns:[]};var T=s("VU/8")({name:"receipt"},R,!1,function(t){s("na82")},"data-v-2b2b2fde",null).exports,O={name:"rentingstep",data:function(){return{}},methods:v()({},Object(m.b)(["setMenu","setStep","setData"]),{backToMenu:function(){this.setMenu("hello"),this.setStep("0")}}),watch:{isStep:function(){var t=u()(r.a.mark(function t(e,s){var a,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=parseInt(e)-1,s=parseInt(s)-1,a=this.$refs.step.children[e],i=this.$refs.step.children[s],s<0?a.classList.add("inActive"):(a.classList.add("inActive"),i.classList.remove("inActive"));case 5:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}()},computed:v()({},Object(m.c)(["isMenu","isStep","data"])),mounted:function(){this.setStep("1")}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"step"},[s("div",{ref:"1",staticClass:"inActive",attrs:{id:"0"}},[t._v("1. Select a Beetle box")]),t._v(" "),s("div",{ref:"2",attrs:{id:"1"}},[t._v("2. Comfirm renting")]),t._v(" "),s("div",{ref:"3",attrs:{id:"2"}},[t._v("3. Face Recognition")]),t._v(" "),s("div",{ref:"4",attrs:{id:"3"}},[t._v("4. Set passcode")]),t._v(" "),s("div",{ref:"5",attrs:{id:"4"}},[t._v("5. Confirm passcode")]),t._v(" "),s("div",{ref:"6",attrs:{id:"5"}},[t._v("6. Success")]),t._v(" "),s("div",{staticStyle:{position:"absolute",bottom:"0",width:"85%"}},[s("v-btn",{staticClass:"menu-btn",staticStyle:{width:"100%",height:"6vh","background-color":"#3B5998",margin:"8% 0% 8% 0%","font-size":"100%",color:"#FFFFFF"},on:{click:t.backToMenu}},[t._v("Back to menu")])],1)])},staticRenderFns:[]},D=s("VU/8")(O,F,!1,null,null,null).exports,j=s("162o"),B={name:"faceReg",data:function(){return{faceid:""}},methods:v()({},Object(m.b)(["setMenu","setStep","setData"]),{startCameraAbove:function(){CameraPreview.startCamera({x:50,y:50,width:819,height:614,toBack:!1,previewDrag:!1,tapPhoto:!0})},startCameraBelow:function(){CameraPreview.startCamera({x:50,y:50,width:300,height:300,camera:"front",tapPhoto:!0,previewDrag:!1,toBack:!0})},stopCamera:function(){CameraPreview.stopCamera()},takePicture:function(){CameraPreview.takePicture(function(t){console.log(t)})},switchCamera:function(){CameraPreview.switchCamera()},show:function(){CameraPreview.show()},hide:function(){CameraPreview.hide()},changeColorEffect:function(){var t=document.getElementById("selectColorEffect").value;CameraPreview.setColorEffect(t)},changeFlashMode:function(){var t=document.getElementById("selectFlashMode").value;CameraPreview.setFlashMode(t)},changeZoom:function(){var t=document.getElementById("zoomSlider").value;document.getElementById("zoomValue").innerHTML=t,CameraPreview.setZoom(t)},changePreviewSize:function(){window.smallPreview=!window.smallPreview,window.smallPreview?CameraPreview.setPreviewSize({width:100,height:100}):CameraPreview.setPreviewSize({width:window.screen.width,height:window.screen.height})},showSupportedPictureSizes:function(){CameraPreview.getSupportedPictureSizes(function(t){t.forEach(function(t){console.log(t.width+"x"+t.height)})})}}),computed:v()({},Object(m.c)(["isMenu","isStep","getData"])),watch:{},mounted:function(){var t=this;this.startCameraAbove(),Object(j.setTimeout)(function(){t.stopCamera(),t.setMenu("passcode"),t.setStep("4")},3e3)}},$={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var z=s("VU/8")(B,$,!1,function(t){s("w8Vs")},"data-v-5cd81715",null).exports,A={name:"passcodepad",data:function(){return{code:[]}},methods:v()({},Object(m.b)(["setMenu","setStep","setData","setPasscode","setRepasscode"]),{addCode:function(t){this.code.push(t)}}),watch:{passcode:function(t){var e=this;6==this.code.length&&("passcode"==this.isMenu?(this.setPasscode(this.passcode),this.setMenu("setpasscode"),setTimeout(function(){e.code=[]},500)):"repasscode"==this.isMenu&&(this.setRepasscode(this.passcode),this.setMenu("checkpasscode"),setTimeout(function(){e.code=[]},500)))}},computed:v()({},Object(m.c)(["isMenu","isStep","getData","getPasscode","getRepasscode"]),{passcode:function(){var t="";return this.code.forEach(function(e){t+=e.toString()}),t}})},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"background"},[s("div",{staticClass:"center"},[s("v-layout",{attrs:{row:"",wrap:""}},[0==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),1==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),2==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),3==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),4==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),5==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),6==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")])]):t._e(),t._v(" "),t._l(9,function(e){return s("v-flex",{key:e,staticClass:"flex-padding circle",attrs:{xs4:""}},[s("div",{staticClass:"circleNo ripple",on:{click:function(s){t.addCode(e)}}},[t._v("\n                        "+t._s(e)+"\n                    ")])])}),t._v(" "),s("v-flex",{staticClass:"circle",attrs:{row:""}},[s("div",{staticClass:"circleNo ripple",on:{click:function(e){t.addCode(0)}}},[t._v("\n                        0\n                    ")])])],2)],1)])])},staticRenderFns:[]};var U=s("VU/8")(A,I,!1,function(t){s("IsLa")},"data-v-9ecb35ee",null).exports,V={name:"mainpage",components:{hello:x,renting:S,list:P,RentingStep:D,OutlineLabel:f,faceReg:z,passcode:U,repasscode:U,checkpasscode:U,receipt:T},data:function(){return{dialog:!1,boxs:[],passcode:{passcode:"",repasscode:""}}},computed:v()({},Object(m.c)(["isMenu","isStep","getData","getPasscode","getRepasscode"]),{currentPage:function(){return this.$route.path.split("/")[1]},state:function(){var t=this.$stror.state;return t}}),watch:{isMenu:function(t){var e=this;if(console.log(t),"setpasscode"==t)""!=this.getPasscode&&(this.passcode.passcode=this.getPasscode,console.log(this.passcode.passcode),this.setMenu("repasscode"),this.setStep("5"));else if("checkpasscode"==t&&""!=this.getRepasscode){this.dialog=!0,this.passcode.repasscode,this.getRepasscode;var s=this.checkPasscode(this.passcode.passcode,this.getRepasscode);1==s?(console.log(s),Object(j.setTimeout)(function(){e.dialog=!1,console.log("save passcode to back-end"),e.setMenu("receipt"),e.setStep("6")},1e3)):(console.log(s),Object(j.setTimeout)(function(){console.log("not match"),e.setMenu("passcode"),e.setStep("4"),e.dialog=!1},1e3))}}},methods:v()({},Object(m.b)(["setMenu","setStep","setData","setPasscode","setRepasscode"]),{checkPasscode:function(t,e){return t==e}}),beforeMount:function(){var t=this;return u()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.dialog=!0,Object(j.setTimeout)(function(){t.dialog=!1},3200);case 2:case"end":return e.stop()}},e,t)}))()},mounted:function(){}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"fullscreen fontcolor"},[a("v-layout",{staticClass:"background-img",attrs:{row:"",wrap:""}},[a("v-flex",{staticStyle:{padding:"0px","padding-top":"0px","padding-left":"0px","border-shadow":"0px"},attrs:{xs4:""}},[a("div",{staticStyle:{"max-height":"100vh","min-height":"100vh",border:"0px"},attrs:{id:"scroll-target"}},[a("v-card",{staticClass:"sidebar"},[a("div",{staticClass:"sidebarheader"},[a("div",{staticStyle:{"margin-top":"4%"}},[a("img",{staticClass:"sidebar-logo",attrs:{src:s("X8zv")}})]),t._v(" "),a("div",{staticClass:"sidebar-text"},[t._v("\n                            SMART MOBILE LOCKER\n                        ")])]),t._v(" "),a("div",{staticClass:"sidebartitle center"},[t._v("Instruction")]),t._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"sidebarcontent sidebarcontentText"},[a("transition",{attrs:{name:"slide-y-transition"}},["hello"==t.isMenu?a("div",[a("div",{staticClass:"inActive"},[t._v("1. Select Menu")])]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade"}},["list"==t.isMenu||"renting"==t.isMenu||"faceReg"==t.isMenu||"passcode"==t.isMenu||"repasscode"==t.isMenu||"receipt"==t.isMenu||"checkpasscode"==t.isMenu?a("div",{ref:"boxview"},[a("renting-step")],1):t._e()])],1)])])],1)]),t._v(" "),a("v-flex",{staticStyle:{padding:"0px","padding-left":"0px","padding-top":"0px"},attrs:{xs8:""}},[a("div",{staticClass:"navbar"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}},[a("div",{staticClass:"h-center",staticStyle:{"min-height":"14vh","max-height":"14vh"}},[a("img",{staticClass:"navBeetle",attrs:{src:s("Ih1/"),alt:""}})])]),t._v(" "),a("v-flex",{attrs:{xs10:""}},[a("div",{staticClass:"h-center",staticStyle:{"min-height":"14vh","max-height":"14vh",padding:"4% 4% 4% 0%"}},["hello"==t.isMenu?a("div",{staticClass:"navHeader h-center"},[t._v("\n                      Welcome\n                    ")]):t._e(),t._v(" "),"list"==t.isMenu||"renting"==t.isMenu||"faceReg"==t.isMenu||"passcode"==t.isMenu||"repasscode"==t.isMenu||"receipt"==t.isMenu||"checkpasscode"==t.isMenu?a("div",{staticClass:"navHeader h-center"},[a("transition",{attrs:{name:"fade"}},[1==t.isStep?a("div",[t._v("Select a Beetle box")]):2==t.isStep?a("div",[t._v("Comfirm renting")]):3==t.isStep?a("div",[t._v("Face Recognitio")]):4==t.isStep?a("div",[t._v("Set passcode")]):5==t.isStep?a("div",[t._v("Confirm passcode")]):6==t.isStep?a("div",[t._v("Success")]):t._e()])],1):t._e()])])],1)],1),t._v(" "),a("div",{staticClass:"content"},[a("transition",{attrs:{name:"fade"}},[a(t.isMenu,{tag:"component"})],1)],1)])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"300",lazy:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"indigo",dark:""}},[a("v-card-text",[t._v("\n          Loading...\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)},staticRenderFns:[]};var N=s("VU/8")(V,L,!1,function(t){s("TcUk"),s("1DRc")},"data-v-1b4bb550",null).exports;a.default.use(c.a);var H=new c.a({routes:[{path:"/",name:"MainPage",component:N}]});a.default.use(m.a);var q=new m.a.Store({state:{boxview:!1,menu:!1,status:{menu:"hello",step:"",data:{passcode:"",repasscode:""}}},getters:{isMenu:function(t){return t.status.menu},isStep:function(t){return t.status.step},getData:function(t){return t.status.data},getPasscode:function(t){return t.status.data.passcode},getRepasscode:function(t){return t.status.data.repasscode}},mutations:{boxview:function(t,e){t.boxview=e},menu:function(t,e){t.menu=e},SET_MENU:function(t,e){t.status.menu=e},SET_STEP:function(t,e){t.status.step=e},SET_DATA:function(t,e){t.status.data=e},SET_PASSCODE:function(t,e){t.status.data.passcode=e},SET_REPASSCODE:function(t,e){t.status.data.repasscode=e}},actions:{setMenu:function(t,e){return(0,t.commit)("SET_MENU",e)},setStep:function(t,e){return(0,t.commit)("SET_STEP",e)},setData:function(t,e){return(0,t.commit)("SET_DATA",e)},setPasscode:function(t,e){return(0,t.commit)("SET_PASSCODE",e)},setRepasscode:function(t,e){return(0,t.commit)("SET_REPASSCODE",e)}}}),X={name:"app",beforeMount:function(){var t=this;return u()(r.a.mark(function e(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}},Z={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var W=s("VU/8")(X,Z,!1,function(t){s("XqmO")},"data-v-5b917161",null).exports,Y=s("mtWM"),G=s.n(Y),J=s("Rf8U"),K=s.n(J);a.default.use(K.a,G.a),a.default.config.productionTip=!1;var Q=new a.default({el:"#app",router:H,store:q,template:"<App/>",components:{App:W},methods:{init:function(){}}});document.addEventListener("deviceready",Q.init,function(t){console.log(t)})},TcUk:function(t,e){},X8zv:function(t,e,s){t.exports=s.p+"static/img/logo.51d5292.png"},XqmO:function(t,e){},YdFF:function(t,e){},na82:function(t,e){},qemj:function(t,e){},s6ZO:function(t,e){},w8Vs:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.088b1877e7d418325f29.js.map