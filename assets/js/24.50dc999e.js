(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{325:function(e,t,s){"use strict";s.r(t);var n={mounted:function(){s.e(0).then(s.t.bind(null,257,7)).then(e=>{s.e(1).then(s.t.bind(null,314,7)).then(e=>{const t="cyan",s="#FFE202",n="deeppink",a=-35,o={parent:"#demo-triangles",shape:"polygon",fill:t,isShowEnd:!1,duration:465,radius:65,rotate:{[-120]:-40},x:{[-200]:20},y:{15:-55},scaleX:{0:1.3}},l={x:0,y:a,duration:175,rotate:-60,scaleX:1},r=new mojs.Shape({...o}).then(l);r.el.style["mix-blend-mode"]="screen";const i=new mojs.Shape({...o,fill:n,rotate:{[-180]:-20},y:{[-5]:-65},scaleX:{0:1.46},delay:45}).then(l);i.el.style["mix-blend-mode"]="screen";const d=new mojs.Shape({...o,fill:s,rotate:{[-220]:-10},y:{25:-85},scaleX:{0:1.3},delay:90}).then(l);d.el.style["mix-blend-mode"]="screen";const c={parent:"#demo-triangles",shape:"polygon",duration:700,radius:{150:100},rotate:{"-70":"-60"},fill:"none",stroke:t,strokeWidth:3,strokeDasharray:{"50% 100%":"0% 100%"},strokeDashoffset:{"50%":"-66%"},y:a};let m=new mojs.Transit(c);m.el.style["mix-blend-mode"]="screen";let h=new mojs.Transit({...c,stroke:n,strokeDasharray:{"30% 120%":"0% 120%"},strokeDashoffset:{"42%":"-76%"},rotate:{[-80]:-60},delay:45});h.el.style["mix-blend-mode"]="screen";let u=new mojs.Transit({...c,stroke:s,strokeDasharray:{"30% 120%":"0% 120%"},strokeDashoffset:{"42%":"-86%"},rotate:{[-90]:-60},delay:90});u.el.style["mix-blend-mode"]="screen";const y=new mojs.Timeline({speed:.75});y.add(r,i,d).add(m,h,u);const p=document.getElementById("demo-triangles_controller");new MojsPlayer({add:y,isPlaying:!1,isRepeat:!0,parent:p,name:"demo-triangles_controller",className:"controller",isSaveState:!1})})})}},a=s(13),o=Object(a.a)(n,(function(){return(0,this._self._c)("div",{staticClass:"mojs-interactive"},[this._t("default"),this._v(" "),this._m(0)],2)}),[function(){var e=this._self._c;return e("div",{staticClass:"mojs-interactive__result mojs-interactive__result--dark",attrs:{id:"demo-triangles"}},[e("div",{staticClass:"mojs-interactive__controller",attrs:{id:"demo-triangles_controller"}})])}],!1,null,null,null);t.default=o.exports}}]);