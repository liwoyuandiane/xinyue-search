import{n as e,r as a,a as t,b as s,c as l,w as o,i as c,o as i,d as n,e as d,t as r,f as u,g,h as f,j as h,k as m,l as p,F as _,m as y,p as k,I as w}from"./index-CICgbd-2.js";import{_ as C,H as b,F as x,r as B,a as v}from"./footer.GjOAft6T.js";const H=C({components:{Header:b,Footer:x},data:()=>({keyword:"",tab:0,loading:!1,hot:[],loading2:!1,newList:[],category_id:"",category:[{value:"",text:"全部"}]}),onLoad(){this.getClass(),this.getHot(),this.getNew()},computed:{config(){return this.$store.state.config}},methods:{searchBtn(){e({url:"/pages/index/list?category_id="+this.category_id+"&keyword="+encodeURIComponent(this.keyword)}),this.keyword=""},goSearch(a){e({url:"/pages/index/list?keyword="+encodeURIComponent(a)})},getHot(){this.loading=!0,a({url:"https://pan.xinyuedh.com/api/search/getHot",success:e=>{let a=[],t=[];try{t=e.data.data}catch(s){}for(let l of t)a.push({title:l.title,hot:l.hots,ranking:l.ranking});this.hot=a},complete:()=>{this.loading=!1}})},getNew(){this.loading2=!0,a({url:baseURL+"api/search/getNew",success:e=>{let a=[],t=[];try{t=e.data.data.items}catch(s){}for(let l of t)a.push({title:l.title,num:l.times});this.newList=a},complete:()=>{this.loading2=!1}})},getClass(){let e=[{value:"",text:"全部"}];a({url:baseURL+"api/search/getCategory",success:a=>{let t=a.data.data||[];for(let s of t)e.push({value:s.source_category_id,text:s.name});this.category=e}})}}},[["render",function(e,a,C,b,x,H){const L=t("Header"),U=y,V=k,F=c,I=B(s("uni-data-select"),v),R=w,S=t("Footer");return i(),l(F,{class:"view"},{default:o((()=>[n(L),n(F,{class:"homeBox"},{default:o((()=>[n(F,{class:"logoBox"},{default:o((()=>[n(U,{class:"logo",src:H.config?H.config.logo:""},null,8,["src"]),n(V,{class:"title"},{default:o((()=>[d(r(H.config?H.config.app_name:""),1)])),_:1})])),_:1}),n(F,{class:"subTitle"},{default:o((()=>[d(r(H.config?H.config.app_description:""),1)])),_:1}),n(F,{class:u(["search",x.category.length>2?"":"noSelect"])},{default:o((()=>[n(I,{class:"selectBox",modelValue:x.category_id,"onUpdate:modelValue":a[0]||(a[0]=e=>x.category_id=e),localdata:x.category,clear:!1},null,8,["modelValue","localdata"]),g("i",{class:"iconfont icon-sousuo",onClick:a[1]||(a[1]=(...e)=>H.searchBtn&&H.searchBtn(...e))}),n(R,{type:"text",modelValue:x.keyword,"onUpdate:modelValue":a[2]||(a[2]=e=>x.keyword=e),placeholder:"输入关键字进行搜索",onKeyup:f(H.searchBtn,["enter"]),"confirm-type":"search",onConfirm:H.searchBtn},null,8,["modelValue","onKeyup","onConfirm"])])),_:1},8,["class"]),n(F,{class:"content"},{default:o((()=>[n(F,{class:"tabs"},{default:o((()=>[n(F,{class:u(["item",0===x.tab?"active":""]),onClick:a[3]||(a[3]=e=>x.tab=0)},{default:o((()=>[d("热门资源")])),_:1},8,["class"]),n(F,{class:u(["item",1===x.tab?"active":""]),onClick:a[4]||(a[4]=e=>x.tab=1)},{default:o((()=>[d("最新资源")])),_:1},8,["class"])])),_:1}),0===x.tab?(i(),l(F,{key:0,class:"list"},{default:o((()=>[x.loading?(i(),l(F,{key:0,class:"loading"},{default:o((()=>[d("正在努力加载中...")])),_:1})):h("",!0),(i(!0),m(_,null,p(x.hot,((e,a)=>(i(),l(F,{class:"item",key:a,onClick:a=>H.goSearch(e.title)},{default:o((()=>[n(F,{class:"name"},{default:o((()=>[d(r(e.ranking)+"、"+r(e.title),1)])),_:2},1024),n(F,{class:"num"},{default:o((()=>[d(r(e.hot),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):h("",!0),1===x.tab?(i(),l(F,{key:1,class:"list"},{default:o((()=>[x.loading2?(i(),l(F,{key:0,class:"loading"},{default:o((()=>[d("正在努力加载中...")])),_:1})):h("",!0),(i(!0),m(_,null,p(x.newList,((e,a)=>(i(),l(F,{class:"item",key:a,onClick:a=>H.goSearch(e.title)},{default:o((()=>[n(F,{class:"name"},{default:o((()=>[d(r(a+1)+"、"+r(e.title),1)])),_:2},1024),n(F,{class:"num"},{default:o((()=>[d(r(e.num),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})):h("",!0)])),_:1})])),_:1}),n(S)])),_:1})}],["__scopeId","data-v-df5dc4b2"]]);export{H as default};
