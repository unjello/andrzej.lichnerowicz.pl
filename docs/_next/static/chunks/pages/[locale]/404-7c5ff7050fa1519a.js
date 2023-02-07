(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{5156:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/404",function(){return t(2756)}])},7211:function(n,e,t){"use strict";t.d(e,{Z:function(){return Z}});var r=t(1527);t(959);var i=t(2010),o=t.n(i),a=t(6035),c=t(6722),l=t.n(c),s=t(2195),u=t.n(s),$=t(1258),f=t(6476),d=t.n(f),m=function(n){var e=n.locale,t=n.url,i=(0,a.useRouter)(),o=t||i.asPath,c=i.pathname;return Object.keys(i.query).forEach(function(n){if("locale"===n){c=c.replace("[".concat(n,"]"),e);return}c=c.replace("[".concat(n,"]"),i.query[n])}),e&&(o=t?"/".concat(e).concat(o):c),(0,r.jsx)(d(),{href:o,legacyBehavior:!1,role:"button",className:"btn btn-outline-light btn-sm",onClick:function(){return $.Z.cache&&$.Z.cache(e)},children:e})},h=function(){var n=(0,a.useRouter)().query.locale||u().i18n.defaultLocale;return(0,r.jsx)("div",{className:l().container,children:u().i18n.locales.map(function(e){return e===n?null:(0,r.jsx)(m,{locale:e},e)})})},x=t(2361),v=t.n(x),_={social_media:[{name:"linkedin",url:"https://www.linkedin.com/in/andrzejlichnerowicz/"},{name:"mastodon",url:"https://mastodon.gamedev.place/@unjello"},{name:"github",url:"https://github.com/unjello"},{name:"email",url:"mailto:andrzej@lichnerowicz.pl"}]},j=function(){return(0,r.jsx)("ul",{className:"list-inline ".concat(v().container),children:_.social_media.map(function(n){var e=n.name,t=n.url;return t.startsWith("http")||t.startsWith("mailto")?(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:t,children:e})},e):(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)(d(),{href:t,children:e})},e)})})},p=t(7411),g=t.n(p),b=t(3689),w=function(){var n=(0,b.$G)(["header"]).t;return(0,r.jsxs)("ul",{className:"list-inline ".concat(g().container),children:[(0,r.jsx)("li",{className:"list-inline-item",children:n("he")}),(0,r.jsx)("li",{className:"list-inline-item",children:n("him")}),(0,r.jsx)("li",{className:"list-inline-item",children:n("activist")}),(0,r.jsx)("li",{className:"list-inline-item",children:n("trees_lover")})]})},y=t(8004),N=t.n(y),C=function(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(h,{}),(0,r.jsx)("section",{className:N().container,children:(0,r.jsx)("h1",{children:(0,r.jsx)(d(),{href:"/",children:"Andrzej unjello Lichnerowicz"})})}),(0,r.jsx)(w,{}),(0,r.jsx)(j,{})]})},z=t(5537),k=t(2242),A=t.n(k),L=function(){var n=(0,b.$G)(["footer"]).t;return(0,r.jsx)("footer",{className:"fs-6 text-muted mt-5 ".concat(A().container),children:(0,r.jsxs)("p",{children:["CC0. ",n("powered_by")," ",(0,r.jsx)("a",{href:"https://nextjs.org/",children:"next.js"}),". ",n("inspired_by")," ",(0,r.jsx)("a",{href:"https://www.mattdesl.com/",children:"@mattdesl"})," ",n("and")," ",(0,r.jsx)("a",{href:"https://ozafoto.com/digital/",children:"Oza"}),"."]})})},P=t(4460),S=t.n(P),Z=function(n){var e=n.children,t=n.title;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:void 0===t?"@unjello":t}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(z.W2,{fluid:!0,className:S().container,children:[(0,r.jsx)(C,{}),e,(0,r.jsx)(L,{})]})]})}},1258:function(n,e,t){"use strict";var r=t(8071),i=t(2195),o=t.n(i);e.Z=(0,r.Z)({supportedLngs:o().i18n.locales,fallbackLng:o().i18n.defaultLocale})},2195:function(n){"use strict";n.exports={debug:!1,i18n:{defaultLocale:"pl",locales:["pl","en"]},reloadOnPrerender:!1}},2756:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return h},default:function(){return x}});var r=t(564),i=t(1527),o=t(3689),a=t(7211),c=t(959),l=t(618),s=t(4771),u=t(5554),$=t(8907);function f(){var n=(0,c.useRef)(null),e=(0,u.z)(function(n){return n.size}),t=(0,c.useMemo)(function(){return{u_resolution:{value:new s.Vector2(e.width,e.height)},u_time:{value:0}}},[]);return(0,u.A)(function(e){n.current.uniforms&&(n.current.uniforms.u_time.value=e.clock.elapsedTime,n.current.needsUpdate=!0)}),(0,c.useEffect)(function(){n.current.uniforms&&(n.current.uniforms.u_resolution.value.x=2*e.width,n.current.uniforms.u_resolution.value.y=2*e.height)},[e]),(0,i.jsx)($.x,{children:(0,i.jsx)("shaderMaterial",{ref:n,uniforms:t,fragmentShader:"\n// shader by fb39ca4\n// https://www.shadertoy.com/view/XsXXDH\n#ifdef GL_ES\nprecision mediump float;\n#endif\nuniform vec2 u_resolution;\nuniform float u_time;\n\nconst float PI = 3.14159265;\n\nvec2 rotate(vec2 v, float a) {\n	float sinA = sin(a);\n	float cosA = cos(a);\n	return vec2(v.x * cosA - v.y * sinA, v.y * cosA + v.x * sinA); 	\n}\n\nfloat square(vec2 uv, float d) {\n	return max(abs(uv.x), abs(uv.y)) - d;	\n}\n\nfloat smootheststep(float edge0, float edge1, float x)\n{\n    x = clamp((x - edge0)/(edge1 - edge0), 0.0, 1.0) * 3.14159265;\n    return 0.5 - (cos(x) * 0.5);\n}\n\n\nvoid main() {\nvec2 fragCoord = gl_FragCoord.xy;\nvec4 fragColor = vec4(0.);\n	vec2 uv = fragCoord.xy / u_resolution.xy;\n	uv = uv * 2.0 - 1.0;\n	uv.x *= u_resolution.x / u_resolution.y;\n	uv *= 1.5;\n	\n    float blurAmount = -0.005 * 1080.0 / u_resolution.y;\n    \n	float period = 2.0;\n	float time = u_time / period;\n	time = mod(time, 1.0);\n	time = smootheststep(0.0, 1.0, time);\n	\n	fragColor = vec4(1.0, 1.0, 1.0, 1.0);\n	for (int i = 0; i < 9; i++) {\n		float n = float(i);\n		float size = 1.0 - n / 9.0;\n		float rotateAmount = (n * 0.5 + 0.25) * PI * 2.0; \n		fragColor.rgb = mix(fragColor.rgb, vec3(1.0), smoothstep(0.0, blurAmount, square(rotate(uv, -rotateAmount * time), size)));\n		float blackOffset = mix(1.0 / 4.0, 1.0 / 2.0, n / 9.0) / 9.0;\n		fragColor.rgb = mix(fragColor.rgb, vec3(0.0), smoothstep(0.0, blurAmount, square(rotate(uv, -(rotateAmount + PI / 2.0) * time), size - blackOffset)));\n    }\n    \n    gl_FragColor = vec4(fragColor);\n}",vertexShader:"\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position, 1.0);\n}\n"})})}var d=t(5029),m=t.n(d),h=!0,x=function(n){var n=null!==n?n:(0,r.Z)(TypeError("Cannot destructure undefined")),e=(0,o.$G)(["404","common","footer"]).t;return(0,i.jsx)(a.Z,{title:e("404:title"),children:(0,i.jsx)("div",{className:m().container,children:(0,i.jsx)(l.Xz,{children:(0,i.jsx)(f,{})})})})}},5029:function(n){n.exports={container:"Page404_container__BLZHz"}},2242:function(n){n.exports={container:"Footer_container__j1zF1"}},8004:function(n){n.exports={container:"Header_container__7xLax"}},6722:function(n){n.exports={container:"LanguageSwitcher_container__n_8ky"}},4460:function(n){n.exports={container:"Layout_container__HxK9n"}},2361:function(n){n.exports={container:"SocialMediaList_container__THnHQ"}},7411:function(n){n.exports={container:"Tagline_container__9rkLj"}}},function(n){n.O(0,[987,511,956,803,774,888,179],function(){return n(n.s=5156)}),_N_E=n.O()}]);