(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[986],{2986:function(n,t,o){"use strict";o.r(t),o.d(t,{deepEqual:function(){return x},equal:function(){return U},isCharCode:function(){return M},stringMapEqual:function(){return P},testAsyncWithSetupAndTeardown:function(){return N},testWithSetup:function(){return O},testWithSetupAndTeardown:function(){return G}});var e=o(3680),c=o(7625),s=o(8644);function r(n){"undefined"!=typeof process?process.exit(n):console.log("# Exit code: "+n.toString())}function i(n){return"undefined"!=typeof process?"\x1b[31m"+n+"\x1b[0m":n}function u(n){return"undefined"!=typeof process?"\x1b[34m"+n+"\x1b[0m":n}function d(n){return"undefined"!=typeof process?"\x1b[2m"+n+"\x1b[0m":n}var f,a=(f="PASS","undefined"!=typeof process?"\x1b[32m"+f+"\x1b[0m":f),v=i("FAIL"),l=(function(n){}("TODO"),{contents:!1}),p={contents:0},g={contents:0},m={contents:0},h={contents:0};function S(n,t){var o=t.toString(),e=p.contents.toString();console.log(o+"/"+e+": "+n)}var _={contents:0},y={contents:0};var C={contents:0};function q(n){C.contents={hd:n,tl:C.contents}}function A(n){return void 0!==n?" - "+n:d(" - No message")}function w(n,t,o,c,s){e._2(o,c,s)?(_.contents=_.contents+1|0,console.log("  "+a+A(n))):(y.contents=y.contents+1|0,console.log("  "+v+A(n)),console.log("    ---"),void 0!==t&&console.log("    "+u("operator")+": "+t),console.log("    "+u("left")+": ",c),console.log("    "+u("right")+":",s),console.log("    ..."))}function E(n,t,o){var c=void 0!==t?t:5e3;if(l.contents)console.error(i('# Cannot add testAsync("'+n+'", ...), tests must be defined at the top level'));else{p.contents=p.contents+1|0;var u=p.contents;q((function(t){var i=y.contents,d=_.contents;S(n,u);try{var f=setTimeout((function(n){var o="Timed out after "+c.toString()+"ms";h.contents=h.contents+1|0,console.log("  "+v+A(o)),e._1(t,void 0)}),c);return e._1(o,(function(n,o){void 0!==n&&w("Correct assertion count","planned",(function(n,t){return n===t}),n,(_.contents+y.contents|0)-(d+i|0)|0),clearTimeout(f),y.contents>i?m.contents=m.contents+1|0:g.contents=g.contents+1|0,e._1(t,void 0)}))}catch(l){var a=s.UW(l);return console.error(a),r(1)}}))}}function T(n,t){if(l.contents)console.error(i('# Cannot add test("'+n+'", ...), tests must be defined at the top level'));else{p.contents=p.contents+1|0;var o=p.contents;q((function(c){var i=y.contents;S(n,o);try{e._1(t,void 0)}catch(d){var u=s.UW(d);console.error(u),r(1)}y.contents>i?m.contents=m.contents+1|0:g.contents=g.contents+1|0,e._1(c,void 0)}))}}function W(n,t,o,c){T(o,(function(o){var s=e._1(n,void 0);if(e._1(c,s),void 0!==t)return e._1(t,s)}))}var b=!0;function k(n){l.contents=!0;var t=function(n){return console.log(""),console.log(d("# Ran "+String(p.contents)+" tests ("+(_.contents+y.contents|0).toString()+" assertions)")),console.log(d("# "+String(g.contents)+" passed")),console.log(d("# "+String(m.contents+h.contents|0)+" failed"+(h.contents>0?" ("+String(h.contents)+" timed out)":""))),(m.contents+h.contents|0)>0?r(1):r(0)},o=c.GY(C.contents),s=function(n){if(n){var o=n.tl;return e._1(n.hd,(function(n){s(o)}))}e._1(t,void 0)};s(o)}setTimeout((function(n){if(b)return k()}),0);var D=o(2755),I=o(6764);function U(n,t,o){w(n,"equal",(function(n,t){return n===t}),t,o)}function x(n,t,o){w(n,"deepEqual",D.Dg,t,o)}function M(n,t){return n.charCodeAt(0)===t}function O(n,t,o){return W((function(n){return{contents:0}}),n,t,o)}E("Async",void 0,(function(n){setTimeout((function(t){var o;o=void 0,_.contents=_.contents+1|0,console.log("  "+a+A(o)),e._2(n,void 0,void 0)}),100)})),T("Equals",(function(n){U(void 0,1,1)})),T("Custom comparator",(function(n){w("Char code should match","isCharCode",M,"a",97)})),T("DeepEquals",(function(n){U(void 0,"user","user"),x(void 0,{username:"user",id:"a"},{username:"user",id:"a"})})),O(void 0,"Setup",(function(n){n.contents=n.contents+1|0,U(void 0,n.contents,1)})),O(void 0,"Setup",(function(n){U(void 0,n.contents,0),n.contents=n.contents+1|0,n.contents=n.contents+1|0,U(void 0,n.contents,2)}));var F=function(n){n.contents=0};function G(n,t){return W((function(n){return{contents:0}}),F,n,t)}G("Setup & teardown",(function(n){n.contents=n.contents+1|0,U(void 0,n.contents,1)})),G("Setup & teardown 2",(function(n){U(void 0,n.contents,0),n.contents=n.contents+1|0,n.contents=n.contents+1|0,U(void 0,n.contents,2)}));var L=function(n){n.contents=0};function N(n,t,o){return c=function(n){return{contents:0}},i=L,u=o,void E(n,t,(function(n){var t=e._1(c,void 0);e._2(u,t,(function(o,c){try{void 0!==i&&e._1(i,t)}catch(d){var u=s.UW(d);console.error(u),r(1)}e._2(n,o,void 0)}))}));var c,i,u}function P(n,t,o){w(n,"stringMapEqual",(function(n,t){return I.eq(n,t,(function(n,t){return n===t}))}),t,o)}N("Async setup & teardown",void 0,(function(n,t){n.contents=n.contents+1|0,U(void 0,n.contents,1),e._2(t,void 0,void 0)})),N("Async setup & teardown 2",void 0,(function(n,t){U(void 0,n.contents,0),n.contents=n.contents+1|0,n.contents=n.contents+1|0,U(void 0,n.contents,2),e._2(t,void 0,void 0)})),T("Cutom operator Equals",(function(n){P(void 0,I.nI([["a",1]]),I.nI([["a",1]]))}))}}]);