import{_ as u,aD as c,r as o,L as b,c as t,V as h,a3 as V,R as $,S as v,U as S,X as w,f as p,aE as d,aF as y}from"./index.26e9a75d.js";import{Q as x}from"./QPage.5bf7d332.js";const B=c({data(){return{}},computed:{screenwidth:{get(){return this.$store.state.screenchange.screenwidth}},screenheight:{get(){return this.$store.state.screenchange.screenheight}}},setup(){o(""),o(""),o(""),o(""),o(0);const e=b(),a=t({get:()=>e.state.fabchange.fab1}),r=t({get:()=>e.state.fabchange.fab2}),l=t({get:()=>e.state.fabchange.fab3}),i=t({get:()=>e.state.fabchange.fab4}),g=t({get:()=>e.state.settings.apptitle,set:s=>{e.commit("settings/APPTitle",s)}}),n=t({get:()=>e.state.settings.server,set:s=>{e.commit("settings/Server",s)}}),f=t({get:()=>e.state.settings.openid,set:s=>{e.commit("settings/Openid",s)}}),m=t({get:()=>e.state.settings.slogan,set:s=>{e.commit("settings/Slogan",s)}});return{fab1:a,fab2:r,fab3:l,fab4:i,apptitle:g,server:n,openid:f,slogan:m}}});function P(e,a,r,l,i,g){return h(($(),v(x,{class:"flex flex-top"},{default:S(()=>[w("div",{style:y({width:e.screenwidth+"px",height:e.screenheight-160+"px",marginTop:"10px"})},[p(d,{dense:"",outlined:"",square:"",readonly:"",modelValue:e.apptitle,"onUpdate:modelValue":a[0]||(a[0]=n=>e.apptitle=n),label:e.$t("index.app_title"),style:{margin:"0 15px 0 15px"}},null,8,["modelValue","label"]),p(d,{dense:"",outlined:"",square:"",readonly:"",modelValue:e.slogan,"onUpdate:modelValue":a[1]||(a[1]=n=>e.slogan=n),label:e.$t("index.slogan"),style:{margin:"15px 15px 0 15px"}},null,8,["modelValue","label"])],4)]),_:1},512)),[[V,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])}var k=u(B,[["render",P]]);export{k as default};