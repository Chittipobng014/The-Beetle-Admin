webpackJsonp([1],{"0GIX":function(t,e){},"1FLU":function(t,e){},"3Eyc":function(t,e){},"7zck":function(t,e){},EbXW:function(t,e){},FF3x:function(t,e){},ID16:function(t,e){},"Ih1/":function(t,e,s){t.exports=s.p+"static/img/beetle.de5b274.png"},IsLa:function(t,e){},MJSz:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),n=s.n(a),i=(s("u7Vc"),s("7+uW")),c=s("3EgV"),o=s.n(c);s("7zck"),s("s6ZO");i.default.use(o.a);var r=s("/ocq");i.default.use(r.a);var d=new r.a({}),l=s("Xxa5"),u=s.n(l),p=s("exGp"),v=s.n(p),h=s("NYxO"),f=this;i.default.use(h.a);var m,g=new h.a.Store({state:{status:{menu:"hello",step:"",isOpen:!1,data:{passcode:"",repasscode:""}},selectedBox:[],peripheral:null,faceID:null,tel:null,boxs:[],transactions:[],updateBoxs:!1,updateTransactions:!1},getters:{isMenu:function(t){return t.status.menu},isStep:function(t){return t.status.step},isOpen:function(t){return t.status.isOpen},getData:function(t){return t.status.data},getPasscode:function(t){return t.status.data.passcode},getRepasscode:function(t){return t.status.data.repasscode},getSelectedBox:function(t){return t.selectedBox[0]},getPeripheral:function(t){return t.peripheral},getFaceID:function(t){return t.faceID},getTel:function(t){return t.tel},getBoxs:function(t){return t.boxs},getTransactions:function(t){return t.transactions},updateBoxs:function(t){return t.updateBoxs},updateTransactions:function(t){return t.updateTransactions}},mutations:{SET_UPDATEBOXS:function(t,e){t.updateBoxs=e},SET_UPDATETRANSACTIONS:function(t,e){t.updateTransactions=e},CLEAR_DETAILS:function(t){t.status.menu="",t.status.data.passcode="",t.status.data.repasscode="",t.peripheral=null,t.faceID=null,t.tel=null,t.selectedBox=[]},SET_BOXS:function(t,e){t.boxs=e},SET_TEL:function(t,e){t.tel=e},SET_FACEID:function(t,e){t.faceID=e},SET_PERIPHERAL:function(t,e){t.peripheral=e},CLEAR_PERIPHERAL:function(t){t.peripheral=[]},ADDSELECTED_BOX:function(t,e){t.selectedBox.push(e)},CLEAR_SELECTEDBOX:function(t){t.selectedBox=[]},boxview:function(t,e){t.boxview=e},menu:function(t,e){t.menu=e},SET_MENU:function(t,e){t.status.menu=e},SET_STEP:function(t,e){t.status.step=e},SET_DATA:function(t,e){t.status.data=e},SET_PASSCODE:function(t,e){t.status.data.passcode=e},SET_REPASSCODE:function(t,e){t.status.data.repasscode=e},SET_ISOPEN:function(t,e){t.status.isOpen=e},SET_TRANSACTIONS:function(t,e){t.transactions=e}},actions:{setUpdateBoxs:function(t,e){return(0,t.commit)("SET_UPDATEBOXS",e)},setUpdateTransactions:function(t,e){return(0,t.commit)("SET_UPDATETRANSACTIONS",e)},clearDetails:function(t){return(0,t.commit)("CLEAR_DETAILS")},setMenu:function(t,e){return(0,t.commit)("SET_MENU",e)},setStep:function(t,e){return(0,t.commit)("SET_STEP",e)},setData:function(t,e){return(0,t.commit)("SET_DATA",e)},setPasscode:function(t,e){return(0,t.commit)("SET_PASSCODE",e)},setRepasscode:function(t,e){return(0,t.commit)("SET_REPASSCODE",e)},setSelectedBox:function(t,e){return(0,t.commit)("ADDSELECTED_BOX",e)},setPeripheral:function(t,e){return(0,t.commit)("SET_PERIPHERAL",e)},clearPeripheral:function(t,e){return(0,t.commit)("CLEAR_PERIPHERAL")},setFaceID:function(t,e){return(0,t.commit)("SET_FACEID",e)},setTel:function(t,e){return(0,t.commit)("SET_TEL",e)},setBoxs:(m=v()(u.a.mark(function t(e,s){var a=e.commit;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a("SET_BOXS",s),console.log("BOX_FETCHED");case 2:case"end":return t.stop()}},t,f)})),function(t,e){return m.apply(this,arguments)}),setIsOpen:function(t,e){return(0,t.commit)("SET_ISOPEN",e)},clearSelectedBox:function(t){return(0,t.commit)("CLEAR_SELECTEDBOX")},setTransactions:function(t,e){return(0,t.commit)("SET_TRANSACTIONS",e)}}}),x=s("Dd8w"),_=s.n(x),S={name:"outline-label",props:{label:String}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border center",staticStyle:{"background-color":"#1867c0 !important"}},[e("div",{staticClass:"label",staticStyle:{color:"azure"}},[this._v(" \n        "+this._s(this.label)+"\n    ")])])},staticRenderFns:[]};var C=s("VU/8")(S,b,!1,function(t){s("ID16")},null,null).exports,w={name:"mainMenu",methods:_()({},Object(h.b)(["setMenu","setStep","setIsOpen"]),{nextTolist:function(){this.setMenu("list"),this.setStep("1")},nextToOpen:function(){this.setIsOpen(!0),this.setMenu("faceReg")}})},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container center content"},[e("div",[e("v-btn",{staticClass:"menu-btn",on:{click:this.nextTolist}},[this._v("Rent a box")])],1),this._v(" "),e("div",[e("v-btn",{staticClass:"menu-btn",on:{click:this.nextToOpen}},[this._v("Open a box")])],1)])},staticRenderFns:[]};var E=s("VU/8")(w,T,!1,function(t){s("3Eyc")},"data-v-01f6f925",null).exports,B=s("//Fk"),y=s.n(B),k=(s("o/zv"),s("/Luh"),{name:"boxrenting",props:["name","id"],data:function(){return{tel:""}},mounted:function(){},methods:_()({},Object(h.b)(["setMenu","setStep","setData","clearSelectedBox","setPeripheral"]),{bleConnect:function(t){var e=this;return new y.a(function(s,a){ble.connect(t,function(t){return console.log("PERIPHERAL"),console.log(t),e.setPeripheral(t),s(t)})})},rent:function(){var t=v()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=this.tel.length)try{console.log("CONNECT"),this.setMenu("faceReg"),this.setStep("3")}catch(t){console.log(t)}case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),goback:function(){this.clearSelectedBox(),this.setMenu("list"),this.setStep("1")},goto3:function(){this.$router.push({path:"/box/3"})},next:function(){this.tel.length>=8?(this.setMenu("faceReg"),this.setStep("3")):console.log("Tel min > 8")}}),computed:_()({},Object(h.c)(["isMenu","isStep","getData","getSelectedBox"]),{faceid:function(){var t=this.$refs.cam.faceid;return t}}),watch:{state:function(t){}}}),O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"center"},[s("div",{staticStyle:{color:"#3B5998","font-size":"72px"}},[t._v(t._s(t.getSelectedBox.name))]),t._v(" "),s("div",{staticStyle:{"font-size":"64px","margin-bottom":"25px"}},[t._v(t._s(t.getSelectedBox.price)+" Baht/hr")]),t._v(" "),s("div",{staticStyle:{"font-size":"18px",color:"#FF0000","margin-bottom":"35px"}},[t._v("Input your to telephone number in case of forgot your box")]),t._v(" "),s("div",{staticStyle:{"margin-top":"25px","margin-bottom":"10px","margin-left":"20%"}},[s("v-text-field",{staticStyle:{width:"95%"},attrs:{label:"Solo",placeholder:"Telephone No.",solo:""},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),t._v(" "),s("div",{staticStyle:{"margin-bottom":"25px"}},[s("v-btn",{staticStyle:{width:"330px",height:"100px","background-color":"#3B5998",color:"#FFFFFF","font-size":"28px"},on:{click:this.rent}},[t._v("Rent a box")])],1),t._v(" "),s("div",[s("v-btn",{staticStyle:{width:"330px",height:"100px","font-size":"28px"},on:{click:this.goback}},[t._v("Back to box select")])],1)])])},staticRenderFns:[]};var P=s("VU/8")(k,O,!1,function(t){s("eMSt")},null,null).exports,M={name:"box",props:{name:String,status:String,uuid:String,price:Number,index:Number},data:function(){return{id:this.uuid}},methods:_()({},Object(h.b)(["setMenu","setStep","setData","setSelectedBox"]),{next:function(){var t={id:this.id,name:this.name,price:this.price,status:"1"};this.setSelectedBox(t),this.setMenu("faceReg"),this.setStep("3")}}),mounted:function(){},computed:_()({},Object(h.c)(["isMenu","isStep","data"]))},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-card",{staticClass:"h-center",staticStyle:{"text-align":"center",margin:"0px",height:"21vh","background-color":"#33c0ca"},attrs:{flat:"",tile:""}},[s("v-btn",{on:{click:function(e){t.next()}}},[t._v("click")])],1)],1)},staticRenderFns:[]},R=s("VU/8")(M,D,!1,null,null,null).exports,I={name:"boxlist",data:function(){return{boxs:[]}},methods:_()({},Object(h.b)(["setMenu","setStep","setData"]),{onScroll:function(t){this.offsetTop=t.target.scrollTop}}),created:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.boxs=t.getBoxs,console.log(t.boxs);case 2:case"end":return e.stop()}},e,t)}))()},components:{Box:R},mounted:function(){},computed:_()({},Object(h.c)(["getBoxs"]))},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroll-y",staticStyle:{"max-height":"86vh","min-height":"86vh","background-color":"#DBD8D8"},attrs:{id:"scroll-target"}},[e("v-card",{staticStyle:{border:"0px","background-color":"#DBD8D8"}},[e("v-layout",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:this.onScroll,expression:"onScroll",arg:"#scroll-target"}],attrs:{row:"",wrap:""}},this._l(this.boxs,function(t,s){return e("v-flex",{key:t.uuid,staticClass:"flex-padding",attrs:{xs4:""}},[e("box",{staticStyle:{margin:"5% 5% 5% 5%"},attrs:{index:s,price:t.price,name:t.name,status:t.status,uuid:t.uuid}})],1)}))],1)],1)},staticRenderFns:[]};var F=s("VU/8")(I,A,!1,function(t){s("EbXW")},null,null).exports,U=function(t,e){for(var s=0;s<t.characteristics.length;s++){var a=t.characteristics[s];if("Write"==a.properties){for(var n=new Uint8Array(e.length),i=0,c=e.length;i<c;i++)n[i]=e.charCodeAt(i);ble.write(t.id,a.service,a.characteristic,n.buffer,function(){console.log("k")},function(){console.log("f")})}}},L={name:"receipt",data:function(){return{time:3,alert:!1}},computed:_()({},Object(h.c)(["getSelectedBox","getPeripheral"])),mounted:function(){this.countdown()},methods:_()({},Object(h.b)(["setMenu","setStep","setData","clearDetails","setPeripheral"]),{countdown:function(){var t=this,e=setInterval(function(){t.time-=1,0==t.time&&(t.showAlert(),clearInterval(e))},1e3)},showAlert:function(){var t=v()(u.a.mark(function t(){var e=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.alert=!0,setTimeout(function(){e.setMenu("hello"),e.setStep("0"),e.alert=!1},2e3);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),openBox:function(){U(this.getPeripheral,"ON")},closeBox:function(){U(this.getPeripheral,"OFF")}})},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"center"},[t._m(0),t._v(" "),s("div",{staticStyle:{color:"green","font-size":"350%"}},[t._v("Successfully")]),t._v(" "),s("div",{staticClass:"margin",staticStyle:{"font-size":"250%"}},[t._v(t._s(t.getSelectedBox.name))]),t._v(" "),s("div",{staticStyle:{"font-size":"250%"}},[t._v("Box will open in "+t._s(t.time)+" second")]),t._v(" "),s("v-dialog",{attrs:{width:"500"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2 center",attrs:{"primary-title":""}},[t._v("\n                    Thank you\n                ")]),t._v(" "),s("v-card-text",{staticClass:"center"},[t._v("\n                    Thank you for choosing us. Your box is opened\n                ")])],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticStyle:{width:"35%",height:"35%"},attrs:{src:s("X8zv"),alt:""}})])}]};var $=s("VU/8")(L,z,!1,function(t){s("0GIX")},"data-v-4c10ca1c",null).exports,N={name:"rentingstep",data:function(){return{}},methods:_()({},Object(h.b)(["setMenu","setStep","setData","clearSelectedBox","isOpen"]),{backToMenu:function(){this.clearSelectedBox(),this.setMenu("hello"),this.setStep("0")}}),watch:{isStep:function(){var t=v()(u.a.mark(function t(e,s){var a,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=parseInt(e)-1,s=parseInt(s)-1,a=this.$refs.step.children[e],n=this.$refs.step.children[s],s<0?a.classList.add("inActive"):(a.classList.add("inActive"),n.classList.remove("inActive"));case 5:case"end":return t.stop()}},t,this)}));return function(e,s){return t.apply(this,arguments)}}()},computed:_()({},Object(h.c)(["isMenu","isStep","data"])),mounted:function(){this.setStep("1")}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"step"},[s("div",{ref:"1",staticClass:"inActive",attrs:{id:"0"}},[t._v("1. Select a Beetle box")]),t._v(" "),s("div",{ref:"2",attrs:{id:"1"}},[t._v("2. Comfirm renting")]),t._v(" "),s("div",{ref:"3",attrs:{id:"2"}},[t._v("3. Face Recognition")]),t._v(" "),s("div",{ref:"4",attrs:{id:"3"}},[t._v("4. Set passcode")]),t._v(" "),s("div",{ref:"5",attrs:{id:"4"}},[t._v("5. Confirm passcode")]),t._v(" "),s("div",{ref:"6",attrs:{id:"5"}},[t._v("6. Success")]),t._v(" "),1==t.isStep||2==t.isStep||3==t.isStep||4==t.isStep||5==t.isStep&&0==t.isOpen?s("div",{staticStyle:{position:"absolute",bottom:"0",width:"85%"}},[s("v-btn",{staticClass:"menu-btn",staticStyle:{width:"100%",height:"6vh","background-color":"#3B5998",margin:"8% 0% 8% 0%","font-size":"100%",color:"#FFFFFF"},on:{click:t.backToMenu}},[t._v("Back to menu")])],1):t._e()])},staticRenderFns:[]},X=s("VU/8")(N,j,!1,null,null,null).exports,H={name:"faceReg",data:function(){return{faceid:"",alert:!1,loading:!1}},methods:_()({},Object(h.b)(["setMenu","setStep","setData","setFaceID","setIsOpen","setUpdateBoxs","setUpdateTransactions"]),{startCameraAbove:function(){CameraPreview.startCamera({x:50,y:50,width:819,height:614,toBack:!1,previewDrag:!1,tapPhoto:!0})},startCameraBelow:function(){CameraPreview.startCamera({x:50,y:50,width:300,height:300,camera:"front",tapPhoto:!0,previewDrag:!1,toBack:!0})},stopCamera:function(){CameraPreview.stopCamera()},takePicture:function(){var t,e=this;CameraPreview.takePicture((t=v()(u.a.mark(function t(s){var a,n,i,c,o,r,d,l,p,v,h,f,m,g,x;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e.hide(),e.loading=!0,t.prev=2,a=s.toString(),n=atob(a.replace(/\s/g,"")),i=n.length,c=new ArrayBuffer(i),o=new Uint8Array(c),r=0;r<i;r++)o[r]=n.charCodeAt(r);return d=new Blob([o],{type:"image/jpeg"}),l=Number(new Date),p=e.$storage.child("photos/"+l+".jpeg"),t.next=14,p.put(d);case 14:return t.sent,t.next=17,p.getDownloadURL();case 17:return v=t.sent,h={url:"https://southeastasia.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false",data:{url:v},method:"POST",headers:{"Ocp-Apim-Subscription-Key":"863c391b338e49e7995d2fdeb9a4477c"}},t.next=21,e.axios(h);case 21:if(f=t.sent,m=f.data[0].faceId,1!=e.isOpen){t.next=39;break}return g=e.getTransactions[0].faceid,x={url:"https://southeastasia.api.cognitive.microsoft.com/face/v1.0/verify",method:"POST",headers:{"Ocp-Apim-Subscription-Key":"863c391b338e49e7995d2fdeb9a4477c"},data:{faceId1:g,faceId2:m}},t.prev=27,t.next=30,e.axios(x);case 30:1==t.sent.data.isIdentical&&(e.setUpdateBoxs(!0),e.setUpdateTransactions(!0),e.loading=!1,e.hide(),e.alert=!0,setTimeout(function(){e.alert=!1,e.setMenu("hello")},2e3)),t.next=37;break;case 34:t.prev=34,t.t0=t.catch(27),console.log(t.t0);case 37:t.next=40;break;case 39:null!=m&&(e.loading=!1,e.setFaceID(m),e.setMenu("passcode"),e.setStep("4"));case 40:t.next=46;break;case 42:t.prev=42,t.t1=t.catch(2),console.log("ERROR"),console.log(t.t1);case 46:case"end":return t.stop()}},t,e,[[2,42],[27,34]])})),function(e){return t.apply(this,arguments)}))},switchCamera:function(){CameraPreview.switchCamera()},show:function(){CameraPreview.show()},hide:function(){CameraPreview.hide()},changeColorEffect:function(){var t=document.getElementById("selectColorEffect").value;CameraPreview.setColorEffect(t)},changeFlashMode:function(){var t=document.getElementById("selectFlashMode").value;CameraPreview.setFlashMode(t)},changeZoom:function(){var t=document.getElementById("zoomSlider").value;document.getElementById("zoomValue").innerHTML=t,CameraPreview.setZoom(t)},changePreviewSize:function(){window.smallPreview=!window.smallPreview,window.smallPreview?CameraPreview.setPreviewSize({width:100,height:100}):CameraPreview.setPreviewSize({width:window.screen.width,height:window.screen.height})},showSupportedPictureSizes:function(){CameraPreview.getSupportedPictureSizes(function(t){t.forEach(function(t){console.log(t.width+"x"+t.height)})})}}),computed:_()({},Object(h.c)(["isMenu","isStep","getData","isOpen","getTransactions"])),mounted:function(){var t=this;this.show(),this.startCameraAbove(),setTimeout(function(){t.takePicture()},3e3)}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-dialog",{attrs:{width:"500"},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2 center",attrs:{"primary-title":""}},[t._v("\n                    Thank you\n                ")]),t._v(" "),s("v-card-text",{staticClass:"center"},[t._v("\n                    Thank you for choosing us. Your box is opened\n                ")])],1)],1),t._v(" "),s("v-dialog",{attrs:{persistent:"",width:"300",lazy:""},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[s("v-card",{attrs:{color:"indigo",dark:""}},[s("v-card-text",[t._v("\n          Loading...\n          "),s("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)},staticRenderFns:[]};var W=s("VU/8")(H,V,!1,function(t){s("MJSz")},"data-v-6ff5f1bc",null).exports,K={name:"passcodepad",data:function(){return{code:[]}},methods:_()({},Object(h.b)(["setMenu","setStep","setData","setPasscode","setRepasscode"]),{addCode:function(t){this.code.push(t)}}),watch:{passcode:function(t){var e=this;6==this.code.length&&("passcode"==this.isMenu?(this.setPasscode(this.passcode),this.setMenu("setpasscode"),setTimeout(function(){e.code=[]},500)):"repasscode"==this.isMenu&&(this.setRepasscode(this.passcode),this.setMenu("checkpasscode"),setTimeout(function(){e.code=[]},500)))}},computed:_()({},Object(h.c)(["isMenu","isStep","getData","getPasscode","getRepasscode"]),{passcode:function(){var t="";return this.code.forEach(function(e){t+=e.toString()}),t}})},G={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"background"},[s("div",{staticClass:"center"},[s("v-layout",{attrs:{row:"",wrap:""}},[0==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),1==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),2==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),3==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),4==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"}),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),5==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"})]):t._e(),t._v(" "),6==t.code.length?s("v-flex",{staticClass:"h-center",staticStyle:{"margin-bottom":"15px"},attrs:{xs12:""}},[s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")]),t._v(" "),s("div",{staticClass:"dashed"},[t._v("•")])]):t._e(),t._v(" "),t._l(9,function(e){return s("v-flex",{key:e,staticClass:"flex-padding circle",attrs:{xs4:""}},[s("div",{staticClass:"circleNo ripple",on:{click:function(s){t.addCode(e)}}},[t._v("\n                        "+t._s(e)+"\n                    ")])])}),t._v(" "),s("v-flex",{staticClass:"circle",attrs:{row:""}},[s("div",{staticClass:"circleNo ripple",on:{click:function(e){t.addCode(0)}}},[t._v("\n                        0\n                    ")])])],2)],1)])])},staticRenderFns:[]};var Z=s("VU/8")(K,G,!1,function(t){s("IsLa")},"data-v-9ecb35ee",null).exports,q={name:"mainpage",components:{hello:E,renting:P,list:F,RentingStep:X,OutlineLabel:C,faceReg:W,passcode:Z,repasscode:Z,checkpasscode:Z,receipt:$},data:function(){return{dialog:!1,boxs:[],passcode:{passcode:"",repasscode:""}}},computed:_()({},Object(h.c)(["isMenu","isStep","getData","getPasscode","getRepasscode","getSelectedBox","getTel","getBoxs","getTransactions","getFaceID","isOpen","updateTransactions","updateBoxs"]),{currentPage:function(){return this.$route.path.split("/")[1]},state:function(){var t=this.$stror.state;return t}}),watch:{isMenu:function(){var t=v()(u.a.mark(function t(e){var s=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"setpasscode"==e?""!=this.getPasscode&&(this.passcode.passcode=this.getPasscode,this.setMenu("repasscode"),this.setStep("5")):"checkpasscode"==e&&""!=this.getRepasscode&&(this.dialog=!0,this.passcode.repasscode,this.getRepasscode,1==this.checkPasscode(this.passcode.passcode,this.getRepasscode)?(this.setUpdateTransactions(!0),this.setUpdateBoxs(!0),setTimeout(function(){s.dialog=!1,s.setMenu("receipt"),s.setStep("6")},1e3)):setTimeout(function(){console.log("not match"),s.setMenu("passcode"),s.setStep("4"),s.dialog=!1},1e3));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),updateTransactions:function(t){if(console.log("THIS IS"),console.log(t),1==t&&0==this.isOpen){var e={checkin:Number(new Date),checkout:"",cost:this.getSelectedBox.price,faceid:this.getFaceID,name:this.getSelectedBox.name,password:this.getPasscode,telnumber:"0983439189",uuid:this.getSelectedBox.id},s=this.getTransactions;this.updateTransaction(s,e)}else if(1==t&&1==this.isOpen){var a=this.getTransactions[0],n=this.getTransactions.filter(function(t){return t.uuid!=a.uuid});console.log("THIS IS"),console.log(t),this.deleteTransaction(n)}},updateBoxs:function(t){if(1==t&&0==this.isOpen){var e=this.getBoxs;t=this.getSelectedBox;this.updateBoxChange(e,t)}else if(1==t&&1==this.isOpen){e=this.getBoxs,t={id:this.getTransactions[0].uuid,status:"0"};this.updateBoxChange(e,t)}}},methods:_()({},Object(h.b)(["setMenu","setStep","setData","setPasscode","setRepasscode","setBoxs","clearSelectedBox","updateBoxChange","setTransactions","setUpdateBoxs","setUpdateTransactions","setIsOpen"]),{checkPasscode:function(t,e){return t==e},updateBoxChange:function(){var t=v()(u.a.mark(function t(e,s){var a,n,i,c;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s,i=(a=e).map(function(t){return t.uuid}).indexOf(n.id),a[i].status=n.status,c=this.getBoxs,this.setBoxs(a),t.prev=6,t.next=9,this.$db.collection("boxs").doc("email").update({boxs:c});case 9:t.sent,this.setUpdateBoxs(!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),console.log(t.t0);case 16:case"end":return t.stop()}},t,this,[[6,13]])}));return function(e,s){return t.apply(this,arguments)}}(),updateTransaction:function(){var t=v()(u.a.mark(function t(e,s){var a,n,i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,0!=(a=e).length){t.next=12;break}return a.push(s),this.setTransactions(a),this.getTransactions,t.next=8,this.$db.collection("transactions").doc("email").set({transactions:a});case 8:t.sent,this.setUpdateTransactions(!1),t.next=22;break;case 12:return console.log(a),n=s,-1!=(i=a.map(function(t){return t.uuid}).indexOf(n.uuid))&&(a[i]=n),this.setTransactions(a),this.getTransactions,t.next=20,this.$db.collection("transactions").doc("email").set({transactions:a});case 20:t.sent,this.setUpdateTransactions(!1);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(0),console.log("error"),console.log(t.t0);case 28:case"end":return t.stop()}},t,this,[[0,24]])}));return function(e,s){return t.apply(this,arguments)}}(),deleteTransaction:function(){var t=v()(u.a.mark(function t(e){var s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e,t.next=3,this.$db.collection("transactions").doc("email").set({transactions:s});case 3:t.sent,this.setIsOpen(!1),this.setUpdateTransactions(!1);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}),beforeMount:function(){var t=this;return v()(u.a.mark(function e(){var s,a,n,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialog=!0,e.prev=1,e.next=4,t.$db.collection("boxs").doc("email").get();case 4:return s=e.sent,a=s.data().boxs,e.next=8,t.$db.collection("transactions").doc("email").get();case 8:n=e.sent,i=n.data().transactions,t.setTransactions(i),t.setBoxs(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:setTimeout(function(){t.dialog=!1},200);case 18:case"end":return e.stop()}},e,t,[[1,14]])}))()}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"fullscreen fontcolor"},[a("v-layout",{staticClass:"background-img",attrs:{row:"",wrap:""}},[a("v-flex",{staticStyle:{padding:"0px","padding-top":"0px","padding-left":"0px","border-shadow":"0px"},attrs:{xs4:""}},[a("div",{staticStyle:{"max-height":"100vh","min-height":"100vh",border:"0px"},attrs:{id:"scroll-target"}},[a("v-card",{staticClass:"sidebar"},[a("div",{staticClass:"sidebarheader"},[a("div",{staticStyle:{"margin-top":"4%"}},[a("img",{staticClass:"sidebar-logo",attrs:{src:s("X8zv")}})]),t._v(" "),a("div",{staticClass:"sidebar-text"},[t._v("\n                            SMART MOBILE LOCKER\n                        ")])]),t._v(" "),a("div",{staticClass:"sidebartitle center"},[t._v("Instruction")]),t._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"sidebarcontent sidebarcontentText"},[a("transition",{attrs:{name:"slide-y-transition"}},["hello"==t.isMenu?a("div",[a("div",{staticClass:"inActive"},[t._v("1. Select Menu")])]):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade"}},["list"==t.isMenu||"renting"==t.isMenu||"faceReg"==t.isMenu||"passcode"==t.isMenu||"repasscode"==t.isMenu||"receipt"==t.isMenu||"checkpasscode"==t.isMenu?a("div",{ref:"boxview"},[a("renting-step")],1):t._e()])],1)])])],1)]),t._v(" "),a("v-flex",{staticStyle:{padding:"0px","padding-left":"0px","padding-top":"0px"},attrs:{xs8:""}},[a("div",{staticClass:"navbar"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:""}},[a("div",{staticClass:"h-center",staticStyle:{"min-height":"14vh","max-height":"14vh"}},[a("img",{staticClass:"navBeetle",attrs:{src:s("Ih1/"),alt:""}})])]),t._v(" "),a("v-flex",{attrs:{xs10:""}},[a("div",{staticClass:"h-center",staticStyle:{"min-height":"14vh","max-height":"14vh",padding:"4% 4% 4% 0%"}},["hello"==t.isMenu?a("div",{staticClass:"navHeader h-center"},[t._v("\n                      Welcome\n                    ")]):t._e(),t._v(" "),"list"==t.isMenu||"renting"==t.isMenu||"faceReg"==t.isMenu||"passcode"==t.isMenu||"repasscode"==t.isMenu||"receipt"==t.isMenu||"checkpasscode"==t.isMenu&&0==t.isOpen?a("div",{staticClass:"navHeader h-center"},[a("transition",{attrs:{name:"fade"}},[1==t.isStep?a("div",[t._v("Select a Beetle box")]):2==t.isStep?a("div",[t._v("Comfirm renting")]):3==t.isStep?a("div",[t._v("Face Recognitio")]):4==t.isStep?a("div",[t._v("Set passcode")]):5==t.isStep?a("div",[t._v("Confirm passcode")]):6==t.isStep?a("div",[t._v("Success")]):t._e()])],1):t._e()])])],1)],1),t._v(" "),a("div",{staticClass:"content"},[a("transition",{attrs:{name:"fade"}},[a(t.isMenu,{tag:"component"})],1)],1)])],1),t._v(" "),a("v-dialog",{attrs:{persistent:"",width:"300",lazy:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{color:"indigo",dark:""}},[a("v-card-text",[t._v("\n          Loading...\n          "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)},staticRenderFns:[]};var Y={name:"app",beforeMount:function(){var t=this;return v()(u.a.mark(function e(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},components:{MainPage:s("VU/8")(q,J,!1,function(t){s("1FLU"),s("FF3x")},"data-v-65d9550a",null).exports}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",[e("main-page")],1)},staticRenderFns:[]};var tt=s("VU/8")(Y,Q,!1,function(t){s("pGE4")},"data-v-2320da63",null).exports,et=s("mtWM"),st=s.n(et),at=s("Rf8U"),nt=s.n(at),it=s("wmKo"),ct=s.n(it),ot=s("kxiW"),rt=s.n(ot);s("881v");i.default.use(ct.a);var dt=rt.a.initializeApp({apiKey:"AIzaSyDlxhs9sd8m_qWoqKXy1K-2XXfZxa6UUoQ",authDomain:"beetle-demo.firebaseapp.com",databaseURL:"https://beetle-demo.firebaseio.com",projectId:"beetle-demo",storageBucket:"beetle-demo.appspot.com",messagingSenderId:"68357144215"}),lt=dt.firestore(),ut=dt.storage().ref();lt.settings({timestampsInSnapshots:!0}),i.default.prototype.$db=lt,i.default.prototype.$storage=ut,i.default.use(nt.a,st.a),i.default.config.productionTip=!1;var pt=new i.default({el:"#app",router:d,store:g,template:"<App/>",components:{App:tt},methods:{init:function(){ble.startScan([],function(t){console.log(n()(t))},function(t){console.log(t)}),setTimeout(ble.stopScan,5e3,function(){},function(){})}}});document.addEventListener("deviceready",pt.init,function(t){console.log(t)})},X8zv:function(t,e,s){t.exports=s.p+"static/img/logo.51d5292.png"},eMSt:function(t,e){},pGE4:function(t,e){},s6ZO:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6a604932c410aaeacd02.js.map