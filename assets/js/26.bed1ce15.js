(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{327:function(t,e,i){"use strict";i.r(e);var s=i(257),a=i.n(s),n={props:{id:{type:String,default:"#code-example"},height:{type:String,default:"300px"}},computed:{style(){return"height: "+this.height}},mounted:function(){var t=new a.a.Shape({parent:"#"+this.id,shape:"circle",stroke:"#FC46AD",strokeDasharray:"125, 125",strokeDashoffset:{0:"-125"},strokeWidth:4,fill:"none",left:"50%",top:"50%",rotate:{"-90":"270"},radius:20,isShowStart:!0,duration:2e3,easing:"back.in"}).then({rotate:{"-90":"270"},strokeDashoffset:{"-125":"-250"},duration:3e3,easing:"cubic.out",onComplete(){t.replay(0)}}).play()}},r=i(13),o=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"interactive-code"},[this._t("default"),this._v(" "),t("div",{staticClass:"example-anim",style:this.style,attrs:{id:this.id}})],2)}),[],!1,null,null,null);e.default=o.exports}}]);