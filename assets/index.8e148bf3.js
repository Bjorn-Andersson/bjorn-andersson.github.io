import{r as _,o as r,c as l,a as e,b as h,w as y,t as m,F as k,d,e as S,v as $,f as w,g as v,n as b,p as N,h as P,i as C,j as x,k as R,l as A,m as H,q as D,s as U,u as B}from"./vendor.c02c1b55.js";const M=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function p(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=p(o);fetch(o.href,n)}};M();var O="/images/logo.png",g=(t,s)=>{const p=t.__vccOpts||t;for(const[c,o]of s)p[c]=o;return p};const T={},W={class:"containerHead"},j=e("div",null,[e("img",{src:O})],-1),V={class:"nav"},K=d("Home"),E=d("Pok\xE9mon challenge"),q=d("Pok\xE9mon fight!"),z={span:"",class:"points"};function G(t,s){const p=_("RouterLink"),c=_("RouterView");return r(),l(k,null,[e("header",null,[e("div",W,[j,e("div",null,[e("nav",null,[e("ul",V,[e("li",null,[h(p,{to:"/"},{default:y(()=>[K]),_:1})]),e("li",null,[h(p,{to:"/challenge"},{default:y(()=>[E]),_:1})]),e("li",null,[h(p,{to:"/fight"},{default:y(()=>[q]),_:1})])])])]),e("p",z,"Total Points: "+m(this.$store.state.points),1)])]),e("main",null,[h(c)])],64)}var J=g(T,[["render",G]]);const Q={data(){return{spriteList:[],picture:this.id}},props:{id:{default:null,type:Number}},created(){this.axios.get("https://pokeapi.co/api/v2/pokemon/"+(this.id+1)).then(t=>{this.spriteList.push(t.data.sprites.other.home.front_default)})}},X=["alt","src"];function Y(t,s,p,c,o,n){return r(),l("img",{alt:this.id+1,class:"sprite",src:o.spriteList[0]},null,8,X)}var Z=g(Q,[["render",Y],["__scopeId","data-v-72c06b98"]]);const ee={components:{FetchSprite:Z},data(){return{pokemonUrl:null,pokemonName:[],pokemonNameFiltered:[],pokeSearch:null,pokeDisplay:null,previousPokeSearch:null,displayList:"inline",displayListFiletered:"none",spriteList:[],errorMessage:null}},methods:{searchList(){this.displayList="none",this.pokeSearch=this.pokeSearch.toLowerCase(),this.pokemonName.includes(this.pokeSearch)?(this.pokeSearch!==this.previousPokeSearch&&(this.pokeDisplay=this.pokeSearch.charAt(0).toUpperCase()+this.pokeSearch.slice(1),this.pokemonNameFiltered.push(this.pokeDisplay)),this.previousPokeSearch=this.pokeSearch,this.displayListFiletered="inline",this.axios.get("https://pokeapi.co/api/v2/pokemon/"+this.pokeSearch.toLowerCase()).then(t=>{this.spriteList.push(t.data.sprites.other.home.front_default)})):(this.errorMessage="That's not a generation 1 Pok\xE9mon, try again!",this.pokemonNameFiltered=[],this.spriteList=[])},resetList(){this.displayList="inline",this.displayListFiletered="none",this.pokeSearch=null,this.pokemonNameFiltered=[],this.spriteList=[],this.errorMessage=null},clearList(){this.pokemonNameFiltered=[],this.spriteList=[],this.displayList="inline",this.displayListFiletered="none",this.previousPokeSearch=null}},computed:{pokeNameCap(){let t=[];for(let s=0;s<this.pokemonName.length;s++)t.push(this.pokemonName[s].charAt(0).toUpperCase()+this.pokemonName[s].slice(1));return t}},created(){this.axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0").then(t=>{this.pokemonUrl=t.data.results.map(({url:s})=>s),this.pokemonData=this.pokemonUrl;for(let s=0;s<t.data.results.length;s++)this.pokemonName.push(t.data.results[s].name);this.$emit("pokemon-data",this.pokemonData),this.$emit("pokemon-name",this.pokemonName)})},emits:["pokemon-data","pokemon-name"]},I=t=>(N("data-v-79d41eae"),t=t(),P(),t),te={class:"container"},se=I(()=>e("h1",null," Welcome to your online Pok\xE9mon adventure! Learn about Pok\xE9mons, complete challenges, collect points and brag to your friends! ",-1)),oe=I(()=>e("h2",null,"Let's learn about the generation 1 Pok\xE9mons!",-1)),ne={class:"resetButton"},ie={class:"name"},ae={class:"link"},re={class:"errorMessage"},le=["src"],pe={class:"name"},ce={class:"link"};function ue(t,s,p,c,o,n){const i=_("FetchSprite"),u=_("RouterLink");return r(),l("div",te,[se,oe,S(e("input",{class:"inputField form-control",placeholder:"Search Pok\xE9mon list","onUpdate:modelValue":s[0]||(s[0]=a=>o.pokeSearch=a),onKeyup:s[1]||(s[1]=w((...a)=>n.searchList&&n.searchList(...a),["enter"])),onKeydown:s[2]||(s[2]=w((...a)=>n.clearList&&n.clearList(...a),["delete"]))},null,544),[[$,o.pokeSearch]]),e("input",{type:"button",class:"inputButton btn btn-primary",value:"Submit",onClick:s[3]||(s[3]=(...a)=>n.searchList&&n.searchList(...a))}),e("div",ne,[e("input",{type:"button",class:"inputButton btn btn-primary",value:"Reset list",onClick:s[4]||(s[4]=(...a)=>n.resetList&&n.resetList(...a))})]),e("ol",null,[(r(!0),l(k,null,v(n.pokeNameCap,(a,F)=>(r(),l("li",{style:b({display:o.displayList}),key:a},[h(i,{id:F},null,8,["id"]),e("p",ie,m(a)+" -",1),e("span",ae,[h(u,{to:`/${a.toLowerCase()}`,text:"Pok\xE9mon Page"},null,8,["to"])])],4))),128))]),e("p",re,m(o.errorMessage),1),e("ol",null,[(r(!0),l(k,null,v(o.pokemonNameFiltered,a=>(r(),l("li",{style:b({display:o.displayListFiletered}),key:a},[e("img",{class:"sprite",src:o.spriteList[0]},null,8,le),e("p",pe,m(a)+" -",1),e("span",ce,[h(u,{to:`/${a.toLowerCase()}`,text:"Pok\xE9mon Page"},null,8,["to"])])],4))),128))])])}var me=g(ee,[["render",ue],["__scopeId","data-v-79d41eae"]]);const he={data(){return{pokemonData:null,pokemonName:null,visibility:"none"}},components:{PokemonHome:me},computed:{pokemonNameCap(){let t=[];for(let s=0;s<this.pokemonName.length;s++)t.push(this.pokemonName[s].charAt(0).toUpperCase()+this.pokemonName[s].slice(1));return t}},methods:{getPokemonData(t){this.pokemonData=t},getPokemonName(t){this.pokemonName=t},showOrHideList(){this.visibility!=="flex"?this.visibility="flex":this.visibility="none"}}},de={class:"container"},_e=["href","text"];function ke(t,s,p,c,o,n){const i=_("PokemonHome");return r(),l(k,null,[h(i,{onPokemonData:n.getPokemonData,onPokemonName:n.getPokemonName},null,8,["onPokemonData","onPokemonName"]),e("div",de,[e("input",{type:"button",class:"button btn btn-primary",value:"Pok\xE9mon Raw Data",onClick:s[0]||(s[0]=(...u)=>n.showOrHideList&&n.showOrHideList(...u))}),e("ol",{style:b({display:o.visibility})},[(r(!0),l(k,null,v(o.pokemonData,(u,a)=>(r(),l("li",{class:"dataList",key:u},[e("a",{href:o.pokemonData[a],text:n.pokemonNameCap[a]},null,8,_e)]))),128))],4)])],64)}var ge=g(he,[["render",ke],["__scopeId","data-v-1c4e87a0"]]);const fe={},ve={components:{PokemonFight:fe}},ye=e("p",null,"f\xF6r eget bruk senare, ska testa skapa en pokemon 1v1 text adventure!",-1);function be(t,s,p,c,o,n){const i=_("PokemonFight");return r(),l(k,null,[ye,h(i)],64)}var Le=g(ve,[["render",be]]);const we={data(){return{imageObject:{bulbasaur:"/images/1b.png",charizard:"/images/2b.png",rattata:"/images/3b.png",vileplume:"/images/4b.png",machamp:"/images/5b.png",magneton:"/images/6b.png",exeggcute:"/images/7b.png",staryu:"/images/8b.png",gyarados:"/images/9b.png",mewtwo:"/images/10b.png"},answer:"",score:0,randomImage:"",input:"",message:"",divClass:"",randomNumber:"",previousRandomNumber:99,loss:!1,win:!1,prevAnswer:null,bColor:"rgba(255, 255, 255, 0.9)"}},created(){this.createImage()},methods:{newImage(){this.createImage(),this.input="",this.loss=!1,this.win=!1,this.bColor="rgba(255, 255, 255, 0.9)"},createImage(){do this.randomNumber=Math.floor(Math.random()*10);while(this.randomNumber===this.previousRandomNumber);this.previousRandomNumber=this.randomNumber,this.randomImage="/images/"+this.randomNumber+"b.png";let t=Object.keys(this.imageObject);this.answer=t[this.randomNumber]},onSubmit(){this.input.toLowerCase()===this.answer?this.answer!==this.prevAnswer&&(this.loss=!1,this.win=!0,this.bColor="green",this.prevAnswer=this.answer,this.randomImage="/images/"+this.randomNumber+".png",this.$store.commit("increase"),this.score++):(this.loss=!0,this.bColor="rgba(255, 51, 0, 0.9)")}}},L=t=>(N("data-v-c15ecec4"),t=t(),P(),t),Ne=L(()=>e("h1",null,"Guess the Pok\xE9mon!",-1)),Pe=["src"],Se={key:0,class:"text"},$e=L(()=>e("p",null,"Unfortunately that's not correct, try again!",-1)),Ce=[$e],xe={key:1,class:"text"},Ie=L(()=>e("p",null,"That's correct! Well done!",-1)),Fe=[Ie],Re={key:2,class:"text"},Ae=L(()=>e("p",null,"Give it your best try!",-1)),He=[Ae],De={class:"score"};function Ue(t,s,p,c,o,n){return r(),l("div",{class:"mainBody",style:b({backgroundColor:o.bColor})},[Ne,e("div",null,[e("img",{src:o.randomImage},null,8,Pe)]),e("div",null,[o.loss?(r(),l("div",Se,Ce)):o.win?(r(),l("div",xe,Fe)):(r(),l("div",Re,He)),S(e("input",{class:"inputField form-control","onUpdate:modelValue":s[0]||(s[0]=i=>o.input=i),placeholder:"Type your guess here!",onKeyup:s[1]||(s[1]=w((...i)=>n.onSubmit&&n.onSubmit(...i),["enter"]))},null,544),[[$,o.input]]),e("input",{class:"inputButton btn btn-primary",type:"button",onClick:s[2]||(s[2]=(...i)=>n.onSubmit&&n.onSubmit(...i)),value:"Submit"})]),e("div",De,[e("p",null,"Score: "+m(this.score),1)]),e("input",{class:"inputButton btn btn-primary",type:"button",onClick:s[3]||(s[3]=(...i)=>n.newImage&&n.newImage(...i)),value:"New Picture"})],4)}var Be=g(we,[["render",Ue],["__scopeId","data-v-c15ecec4"]]);const Me={components:{PokemonChallenge:Be}};function Oe(t,s,p,c,o,n){const i=_("PokemonChallenge");return r(),C(i)}var Te=g(Me,[["render",Oe]]);const We={data(){return{pokeName:null,pokeIndex:null,pokeType:[],pokeHeight:null,pokeWeight:null,pokeStats:[],pokeMoves:[],officialArtwork:null,spriteFront:null,spriteBack:null,score:null,message:null}},watch:{score(){this.message=`Well done reading about ${this.upperCaseParam}, you have earned a point!`}},computed:{pokeMovesAlphabetical(){return JSON.parse(JSON.stringify(this.pokeMoves)).sort()},pokeTypeString(){return this.pokeType.map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" / ")},upperCaseParam(){let t=this.$route.params.name;return t.charAt(0).toUpperCase()+t.slice(1)}},methods:{toUpper(t){return t.charAt(0).toUpperCase()+t.slice(1)}},created(){setTimeout(()=>(this.$store.commit("increase"),this.score++),5e3),x.get("https://pokeapi.co/api/v2/pokemon/"+this.$route.params.name).then(t=>{this.pokeName=this.toUpper(t.data.name),this.pokeIndex=t.data.id,this.pokeHeight=t.data.height,this.pokeWeight=t.data.weight;for(let s=0;s<t.data.types.length;s++)this.pokeType.push(t.data.types[s].type.name);for(let s=0;s<t.data.moves.length;s++)this.pokeMoves.push(this.toUpper(t.data.moves[s].move.name));for(let s=0;s<t.data.stats.length;s++)this.pokeStats.push(t.data.stats[s]);this.officialArtwork=t.data.sprites.other["official-artwork"].front_default,this.spriteFront=t.data.sprites.front_default,this.spriteBack=t.data.sprites.back_default})}},f=t=>(N("data-v-58150288"),t=t(),P(),t),je={class:"pointHeader"},Ve={class:"container"},Ke={class:"list"},Ee={class:"link"},qe=d("Back to home page"),ze=f(()=>e("b",null,"Name:",-1)),Ge=f(()=>e("b",null,"Pok\xE9dex Index:",-1)),Je=f(()=>e("b",null,"Type:",-1)),Qe=f(()=>e("b",null,"Height:",-1)),Xe=f(()=>e("b",null,"Weight:",-1)),Ye=f(()=>e("b",null,"Base Stats:",-1)),Ze=f(()=>e("b",null,"Possible Moves:",-1)),et=f(()=>e("p",null,"Official artwork:",-1)),tt=["src"],st=f(()=>e("p",{class:"spriteText"},"In-game model:",-1)),ot=["src"],nt=["src"];function it(t,s,p,c,o,n){const i=_("RouterLink");return r(),l(k,null,[e("h1",null,"Welcome to "+m(n.upperCaseParam)+"'s page!",1),e("h3",je,m(o.message),1),e("div",Ve,[e("div",Ke,[e("div",Ee,[h(i,{to:"/"},{default:y(()=>[qe]),_:1})]),e("ul",null,[e("li",null,[ze,d(" "+m(o.pokeName),1)]),e("li",null,[Ge,d(" "+m(o.pokeIndex),1)]),e("li",null,[Je,d(" "+m(n.pokeTypeString),1)]),e("li",null,[Qe,d(" "+m(o.pokeHeight),1)]),e("li",null,[Xe,d(" "+m(o.pokeWeight),1)]),e("li",null,[Ye,e("ul",null,[(r(!0),l(k,null,v(o.pokeStats,u=>(r(),l("li",{class:"sublist",key:u},[e("b",null,m(u.stat.name)+":",1),d(" "+m(u.base_stat),1)]))),128))])]),e("li",null,[Ze,e("ul",null,[(r(!0),l(k,null,v(n.pokeMovesAlphabetical,u=>(r(),l("li",{class:"sublist",key:u.move},m(u),1))),128))])])])]),e("div",null,[e("div",null,[et,e("img",{src:o.officialArtwork},null,8,tt)]),e("div",null,[st,e("img",{class:"spriteImage",src:o.spriteFront},null,8,ot),e("img",{class:"spriteImage",src:o.spriteBack},null,8,nt)])])])],64)}var at=g(We,[["render",it],["__scopeId","data-v-58150288"]]);const rt={components:{PokemonInformation:at}};function lt(t,s,p,c,o,n){const i=_("PokemonInformation");return r(),C(i)}var pt=g(rt,[["render",lt]]),ct=R({history:A(),routes:[{component:ge,path:"/"},{component:Le,path:"/fight"},{component:Te,path:"/challenge"},{component:pt,path:"/:name"}]});const ut={increase(t){t.points++}},mt={points:0};var ht=H({mutations:ut,state:mt,strict:!0});function dt(t={}){const{immediate:s=!1,onNeedRefresh:p,onOfflineReady:c,onRegistered:o,onRegisterError:n}=t;let i;const u=async(a=!0)=>{};return"serviceWorker"in navigator&&(i=new D("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",a=>{a.isUpdate?window.location.reload():c==null||c()}),i.register({immediate:s}).then(a=>{o==null||o(a)}).catch(a=>{n==null||n(a)})),u}dt();U(J).use(ct).use(ht).use(B,x).mount("#app");
