(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8402:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(2122),o=r(9756),i=(r(7294),r(3905));"undefined"!=typeof window&&Promise.all([r.e(248),r.e(986)]).then(r.bind(r,2986));var s=["components"],a={title:"Browser testing",sidebar_label:"Browser testing"},c="Testing in a real browser",l={unversionedId:"browser-testing",id:"browser-testing",isDocsHomePage:!1,title:"Browser testing",description:"ReScript Test has a very simple API that can easily run in a real browser.",source:"@site/docs/browser-testing.md",sourceDirName:".",slug:"/browser-testing",permalink:"/rescript-test/browser-testing",editUrl:"https://github.com/bloodyowl/rescript-test/edit/master/website/docs/browser-testing.md",version:"current",frontMatter:{title:"Browser testing",sidebar_label:"Browser testing"},sidebar:"docs",previous:{title:"Environment file",permalink:"/rescript-test/environment-file"},next:{title:"API",permalink:"/rescript-test/api"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing-in-a-real-browser"},"Testing in a real browser"),(0,i.kt)("p",null,"ReScript Test has a very simple API that can easily run in a real browser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="BrowserTests.res"',title:'"BrowserTests.res"'},"include MyComponent__Test\ninclude MyOtherComponent__Test\n")),(0,i.kt)("p",null,"Import the compiled file in an HTML page and you'll see your test output in the console!"),(0,i.kt)("p",null,"If you want to see for yourself, check out your console! \ud83d\ude00"))}f.isMDXComponent=!0}}]);