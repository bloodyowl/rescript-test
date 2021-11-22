(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[640],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,g=m["".concat(i,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6261:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],u={title:"Test output",sidebar_label:"Test output"},i="Test output",l={unversionedId:"test-output",id:"test-output",isDocsHomePage:!1,title:"Test output",description:"Tests output look like the following (it looks nicer with colors \u2728):",source:"@site/docs/test-output.md",sourceDirName:".",slug:"/test-output",permalink:"/rescript-test/test-output",editUrl:"https://github.com/bloodyowl/rescript-test/edit/main/docs/docs/test-output.md",version:"current",frontMatter:{title:"Test output",sidebar_label:"Test output"},sidebar:"docs",previous:{title:"Assertions",permalink:"/rescript-test/assertions"},next:{title:"React testing",permalink:"/rescript-test/react-testing"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-output"},"Test output"),(0,s.kt)("img",{width:"1166",height:"744",style:{maxWidth:"100%",height:"auto"},alt:"Test output screenshot",src:"https://user-images.githubusercontent.com/1688645/113517422-28ee7200-9580-11eb-9e84-4f9de3c75069.png"}),(0,s.kt)("p",null,"Tests output look like the following (it looks nicer with colors \u2728):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"1/11: Async\n  PASS - No message\n2/11: Equals\n  PASS - No message\n3/11: Custom comparator\n  PASS - Char code should match\n4/11: DeepEquals\n  PASS - No message\n  PASS - No message\n5/11: Setup\n  PASS - No message\n6/11: Setup\n  PASS - No message\n  PASS - No message\n7/11: Setup & teardown\n  PASS - No message\n8/11: Setup & teardown 2\n  PASS - No message\n  PASS - No message\n9/11: Async setup & teardown\n  PASS - No message\n10/11: Async setup & teardown 2\n  PASS - No message\n  PASS - No message\n11/11: Cutom operator Equals\n  PASS - No message\n\n# Ran 11 tests (15 assertions)\n# 11 passed\n# 0 failed\n")),(0,s.kt)("p",null,"Test failures look like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"1/3: Async\n  FAIL - No message\n    ---\n    operator: equal\n    left:  1\n    right: 2\n    ...\n2/3: Equals\n  FAIL - No message\n    ---\n    operator: equal\n    left:  1\n    right: 2\n    ...\n3/3: DeepEquals\n  FAIL - No message\n    ---\n    operator: equal\n    left:  user\n    right: user2\n    ...\n  FAIL - No message\n    ---\n    operator: deepEqual\n    left:  { username: 'user', id: 'a' }\n    right: { username: 'user2', id: 'a' }\n    ...\n\n# Ran 3 tests (4 assertions)\n# 0 passed\n# 3 failed\n")))}m.isMDXComponent=!0}}]);