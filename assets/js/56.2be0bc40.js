(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{363:function(e,t,r){"use strict";r.r(t);var n=r(13),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),t("h2",{attrs:{id:"setup-mo-js-in-your-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-mo-js-in-your-project"}},[e._v("#")]),e._v(" Setup mo.js in your project")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Run "),t("code",[e._v("npm i @mojs/core")]),e._v(" OR "),t("code",[e._v("yarn add @mojs/core")])])]),e._v(" "),t("li",[t("p",[e._v("Import it "),t("code",[e._v("import mojs from '@mojs/core'")])]),e._v(" "),t("p",[e._v("Or use the minified CDN version:")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("script src"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://cdn.jsdelivr.net/npm/@mojs/core"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Create your animations. What about a bouncy circle?")])])]),e._v(" "),t("MojsInteractive",{attrs:{id:"bouncyCircle",autoplay:"",global:"bouncyCircle",code:"const bouncyCircle = new mojs.Shape({\n  parent:       '#bouncyCircle',\n  shape:        'circle',\n  fill:         {'#F64040': '#FC46AD'},\n  radius:       {20: 80},\n  duration:     2000,\n  isYoyo:       true,\n  isShowStart:  true,\n  easing:       'elastic.inout',\n  repeat:       1,\n});\n\nbouncyCircle.play()"}}),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Or maybe a loading animation?")]),e._v(" "),t("MojsInteractive",{attrs:{id:"spinner",autoplay:"",height:"200px",global:"spinner",code:"const spinner = new mojs.Shape({\n  parent:           '#spinner',\n  shape:            'circle',\n  stroke:           '#FC46AD',\n  strokeDasharray:  '125, 125',\n  strokeDashoffset: {'0': '-125'},\n  strokeWidth:      4,\n  fill:             'none',\n  left:             '50%',\n  top:              '50%',\n  rotate:            {'-90': '270'},\n  radius:           20,\n  isShowStart:      true,\n  duration:         2000,\n  easing:           'back.in',\n})\n.then({\n  rotate:            {'-90': '270'},\n  strokeDashoffset: {'-125': '-250'},\n  duration:         3000,\n  easing:           'cubic.out',\n});\n\nspinner.play();"}}),e._v(" "),t("p",[e._v("Go creative!")]),e._v(" "),t("p",[e._v("See the "),t("RouterLink",{attrs:{to:"/api/"}},[e._v("API")]),e._v(" for more info.")],1),e._v(" "),t("h2",{attrs:{id:"usage-with-server-side-rendering-ssr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-with-server-side-rendering-ssr"}},[e._v("#")]),e._v(" Usage with Server Side Rendering (SSR)")]),e._v(" "),t("p",[e._v("Note that this is a client-side library, and is not meant to be run on a server. So if you are using a library like Next.js, Gatsby, Nuxt.js  or Angular Universal, make sure not to run your MoJS code on the server, just on the client side. How to do that differs from the library you are using. In React based libraries you can use the "),t("code",[e._v("useEffect")]),e._v(" hook or a dynamic import ("),t("a",{attrs:{href:"https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97",target:"_blank",rel:"noopener noreferrer"}},[e._v("read more here"),t("OutboundLink")],1),e._v("). For Angular Universal you can use Guards ("),t("a",{attrs:{href:"https://github.com/angular/universal/blob/master/docs/gotchas.md#window-is-not-defined",target:"_blank",rel:"noopener noreferrer"}},[e._v("read more about it here"),t("OutboundLink")],1),e._v("). Lastly if you use Vue with Nuxt.js, you will find "),t("a",{attrs:{href:"https://nuxtjs.org/faq/window-document-undefined",target:"_blank",rel:"noopener noreferrer"}},[e._v("more info here"),t("OutboundLink")],1),e._v(", or info about using the "),t("code",[e._v("mounted")]),e._v(" hook "),t("a",{attrs:{href:"https://nuxtjs.org/guides/concepts/server-side-rendering",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Also see tutorial on how to use MoJS inside a "),t("RouterLink",{attrs:{to:"/tutorials/usage-with-react.html"}},[e._v("React app here")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);