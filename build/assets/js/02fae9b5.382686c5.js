"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(a),g=n,m=s["".concat(p,".").concat(g)]||s[g]||y[g]||l;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6647:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},o="DataStoreLight is very very light DataModule!",i={type:"mdx",permalink:"/DataStorePro/",source:"@site/pages/index.md",title:"DataStoreLight is very very light DataModule!",description:"\ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\ub77c\uc774\ud2b8\ub294 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560\ub54c \ubc84\ud37c\ub85c \ubcc0\ud658\uc744 \ud558\uace0 \uadf8 \ubcc0\ud658\ud55c \ub370\uc774\ud130\ub97c \uc555\ucd95\uae4c\uc9c0 \ud558\uc5ec \uc800\uc7a5\ud558\uae30\uc5d0 \uc800\uc7a5 \uc18d\ub3c4 , \ub85c\ub4dc \uc18d\ub3c4\uac00 \ube60\ub978 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4!",frontMatter:{}},p=[],c={toc:p},u="wrapper";function s(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datastorelight-is-very-very-light-datamodule"},"DataStoreLight is very very light DataModule!"),(0,n.kt)("p",null,"\ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\ub77c\uc774\ud2b8\ub294 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560\ub54c \ubc84\ud37c\ub85c \ubcc0\ud658\uc744 \ud558\uace0 \uadf8 \ubcc0\ud658\ud55c \ub370\uc774\ud130\ub97c \uc555\ucd95\uae4c\uc9c0 \ud558\uc5ec \uc800\uc7a5\ud558\uae30\uc5d0 \uc800\uc7a5 \uc18d\ub3c4 , \ub85c\ub4dc \uc18d\ub3c4\uac00 \ube60\ub978 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4!"),(0,n.kt)("p",null,"\uac00\uc7a5 \ucd5c\uadfc \uc5c5\ub370\uc774\ud2b8 : Client \ucef4\ud504\ub808\uc2a4"),(0,n.kt)("h1",{id:"how-to-use"},"How To Use?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local Players = game:GetService(\"Players\")\nlocal DataStoreLight = require(script.Parent:WaitForChild('DataStoreLight'))\nPlayers.PlayerAdded:Connect(function(player)\n    DataStoreLight.Load(player)\n    print(DataStoreLight.Get(player , 'eee'))\n    local th = {}\n    for i=1 , 50 do\n        th[i] = {'arr \uc778\ub300 string \uc73c\ub85c \ub370\uc774\ud130\ub97c \ubfd4\ub9ac\uae30'}\n    end\n    DataStoreLight.Set(player , 'eee' , th)\n    print(DataStoreLight.Get(player , 'eee'))\n    DataStoreLight.DiscardChanges(player)\n    print(DataStoreLight.Get(player , 'eee'))\n    DataStoreLight.Save(player)\nend)\n")),(0,n.kt)("p",null,"Load"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"DataStoreLight.Load(Player:Player)\n")),(0,n.kt)("p",null,"Save"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"DataStoreLight.Save(Player:Player)\n")),(0,n.kt)("p",null,"Get"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"DataStoreLight.Get(Player:Player , DataName:string) : any\n")),(0,n.kt)("p",null,"Set"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"DataStoreLight.Set<T>(Player:Player , DataName:string , Value:T)\n")),(0,n.kt)("p",null,"ClearData"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"--// DataName \uc774 \uc5c6\ub2e4\uba74 \ubaa8\ub4e0\uac12\uc744 \ucd08\uae30\ud654\nDataStoreLight.ClearData(Player:Player , DataName:string)\n")),(0,n.kt)("p",null,"DiscardChanges"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"--// DataName \uc774 \uc5c6\ub2e4\uba74 \ubaa8\ub4e0\uac12\uc744 \uc774\uc804\uc73c\ub85c\nDataStoreLight.DiscardChanges(Player:Player , DataName:string)\n")))}s.isMDXComponent=!0}}]);