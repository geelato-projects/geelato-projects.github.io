import{V as r,p as s}from"../app.e6158a67.js";const a={components:{VueJsonPretty:r},props:{parentId:{type:[String,Number]},glElement:{type:Object,default(){return{}}},glChildren:{type:Array,default(){return[]}}},data(){return{titles:{setter:"组件设置面板",instance:"组件实例信息",result:"组件设置结果",meta:"组件协议信息"},componentMeta:{},componentInstance:{},refreshFlag:!0}},methods:{getInstance(e){for(let t in this.demoProps)if(t===e){let n={};return n[e]=this.demoProps[t],n}},setInstance(e){let t=this;console.log("set instance:",e),this.componentInstance=e,t.refreshFlag=!1,s(()=>{t.refreshFlag=!0})}}};export{a as e};