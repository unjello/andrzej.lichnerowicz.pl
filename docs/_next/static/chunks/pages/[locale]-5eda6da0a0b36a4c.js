(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{9221:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]",function(){return t(3856)}])},4394:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i=t(1527);t(959);var r=t(2010),s=t.n(r),c=t(6035),a=t(6722),l=t.n(a),o=t(2195),d=t.n(o),u=t(1258),x=t(6476),h=t.n(x),$=t(5537),j=function(e){var n=e.locale,t=e.url,r=(0,c.useRouter)(),s=t||r.asPath,a=r.pathname;return Object.keys(r.query).forEach(function(e){if("locale"===e){a=a.replace("[".concat(e,"]"),n);return}a=a.replace("[".concat(e,"]"),r.query[e])}),n&&(s=t?"/".concat(n).concat(s):a),(0,i.jsx)(h(),{href:s,children:(0,i.jsx)($.zx,{outline:!0,size:"sm",onClick:function(){return u.Z.cache&&u.Z.cache(n)},children:n})})},m=function(){var e=(0,c.useRouter)().query.locale||d().i18n.defaultLocale;return(0,i.jsx)("div",{className:l().container,children:d().i18n.locales.map(function(n){return n===e?null:(0,i.jsx)(j,{locale:n},n)})})},f=t(2361),p=t.n(f),v={social_media:[{name:"linkedin",url:"https://www.linkedin.com/in/andrzejlichnerowicz/"},{name:"mastodon",url:"https://mastodon.gamedev.place/@unjello"},{name:"github",url:"https://github.com/unjello"},{name:"email",url:"mailto:andrzej@lichnerowicz.pl"}]},g=function(){return(0,i.jsx)("ul",{className:"list-inline ".concat(p().container),children:v.social_media.map(function(e){var n=e.name,t=e.url;return t.startsWith("http")||t.startsWith("mailto")?(0,i.jsx)("li",{className:"list-inline-item",children:(0,i.jsx)("a",{href:t,children:n})},n):(0,i.jsx)("li",{className:"list-inline-item",children:(0,i.jsx)(h(),{href:t,children:n})},n)})})},N=t(7411),_=t.n(N),L=t(3689),k=function(){var e=(0,L.$G)(["header"]).t;return(0,i.jsxs)("ul",{className:"list-inline ".concat(_().container),children:[(0,i.jsx)("li",{className:"list-inline-item",children:e("he")}),(0,i.jsx)("li",{className:"list-inline-item",children:e("him")}),(0,i.jsx)("li",{className:"list-inline-item",children:e("activist")}),(0,i.jsx)("li",{className:"list-inline-item",children:e("trees_lover")})]})},A=t(8004),w=t.n(A),T=function(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)("section",{className:w().container,children:(0,i.jsx)("h1",{children:(0,i.jsx)(h(),{href:"/",children:"Andrzej unjello Lichnerowicz"})})}),(0,i.jsx)(k,{}),(0,i.jsx)(g,{})]})},z=t(2242),S=t.n(z),W=function(){var e=(0,L.$G)(["footer"]).t;return(0,i.jsx)("footer",{className:"fs-6 text-muted mt-5 ".concat(S().container),children:(0,i.jsxs)("p",{children:["CC0. ",e("powered_by")," ",(0,i.jsx)("a",{href:"https://nextjs.org/",children:"next.js"}),". ",e("inspired_by")," ",(0,i.jsx)("a",{href:"https://www.mattdesl.com/",children:"@mattdesl"})," ",e("and")," ",(0,i.jsx)("a",{href:"https://ozafoto.com/digital/",children:"Oza"}),"."]})})},y=t(4460),O=t.n(y),b=function(e){var n=e.children,t=e.title;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:void 0===t?"@unjello":t}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsxs)($.W2,{fluid:!0,className:O().container,children:[(0,i.jsx)(T,{}),n,(0,i.jsx)(W,{})]})]})}},1258:function(e,n,t){"use strict";var i=t(8071),r=t(2195),s=t.n(r);n.Z=(0,i.Z)({supportedLngs:s().i18n.locales,fallbackLng:s().i18n.defaultLocale})},2195:function(e){"use strict";e.exports={debug:!1,i18n:{defaultLocale:"pl",locales:["pl","en"]},reloadOnPrerender:!1}},3856:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return W},default:function(){return y}});var i=t(1527),r=t(3689);t(959);var s=t(4394),c=t(5537),a=t(6476),l=t.n(a),o=t(1849),d=t.n(o),u=t(8244),x=t.n(u);function h(e){return x().sanitize(e,{ALLOWED_TAGS:["#text"]})}var $=function(e){var n=e.items,t=e.index,r=h(t.content),s=n.map(function(e){var n=new Date(e.date);return(0,i.jsxs)(c.WI,{className:d().blogpost,children:[(0,i.jsx)(l(),{href:"/blog/".concat(e.id),children:e.title}),(0,i.jsxs)("div",{className:d().date,children:["/*",n.toISOString().split("T")[0],"*/"]})]},e.id)});return(0,i.jsxs)("section",{className:d().container,children:[(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("div",{className:d().tag,children:r}),(0,i.jsx)(c.NX,{children:s})]})},j=t(8536),m=t.n(j),f=function(e){var n=e.items,t=e.index,r=x().sanitize(t.content,{ALLOWED_TAGS:["#text"]}),s=n.reverse().map(function(e){var n=x().sanitize(e.content,{ALLOWED_TAGS:["#text"]});return(0,i.jsxs)(c.WI,{children:[(0,i.jsx)("img",{src:e.card}),(0,i.jsxs)(c.aq,{tag:"div",children:[(0,i.jsx)(l(),{href:e.url,children:e.title}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})]})]},e.id)});return(0,i.jsxs)("section",{className:m().container,children:[(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("div",{className:m().tag,children:r}),(0,i.jsx)(c.NX,{children:s})]})},p=t(5439),v=t.n(p),g=function(e){var n=e.items,t=e.index,r=x().sanitize(t.content,{ALLOWED_TAGS:["#text"]}),s=n.map(function(e){var n=x().sanitize(e.where,{ALLOWED_TAGS:["#text"]}),t=e.date.split(".")[0],r=e.type.toLowerCase();return e.url?(0,i.jsxs)(c.WI,{className:v()[r],children:[(0,i.jsx)(l(),{href:e.url,children:e.title}),(0,i.jsxs)("div",{children:[t,", ",n]})]},e.id):(0,i.jsxs)(c.WI,{className:v()[r],children:[e.title,(0,i.jsxs)("div",{children:[t,", ",n]})]},e.id)});return(0,i.jsxs)("section",{className:v().container,children:[(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("div",{className:v().tag,children:r}),(0,i.jsx)(c.NX,{children:s})]})},N=t(3204),_=t.n(N),L=function(e){var n=e.items,t=e.index,r=x().sanitize(t.content,{ALLOWED_TAGS:["#text"]}),s=n.reverse().map(function(e){var n=x().sanitize(e.content,{ALLOWED_TAGS:["#text"]});return(0,i.jsxs)(c.WI,{children:[(0,i.jsx)(l(),{href:e.url,children:e.title}),(0,i.jsx)("div",{children:n})]},e.id)});return(0,i.jsxs)("section",{className:_().container,children:[(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("div",{className:_().tag,children:r}),(0,i.jsx)(c.NX,{children:s})]})},k=t(8883),A=t.n(k),w=function(e){var n=e.title,t=e.url;return(0,i.jsx)("a",{href:t,children:(0,i.jsx)(c.IU,{className:A().overlay,children:(0,i.jsx)(c.SK,{className:A().text,children:n})})})},T=function(e){var n=e.title;return(0,i.jsx)(c.IU,{className:A().overlay,children:(0,i.jsx)(c.SK,{className:A().text,children:n})})},z=function(e){var n=e.image_src,t=e.url,r=e.title;return(0,i.jsxs)(c.Zb,{children:[(0,i.jsx)(c.Mo,{alt:"Card image cap",src:n}),t?(0,i.jsx)(w,{title:r,url:t}):(0,i.jsx)(T,{title:r})]})},S=function(e){var n=e.items,t=e.index,r=h(t.content),s=n.map(function(e){return(0,i.jsx)(z,{image_src:e.card,title:e.title,url:e.url},e.id)});return(0,i.jsxs)("section",{className:A().container,children:[(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("div",{className:A().tag,children:r}),(0,i.jsx)(c.um,{className:A().grid,children:s})]})},W=!0,y=function(e){var n=e.posts,t=e.art,c=e.talks,a=e.projects,l=e.oss,o=(0,r.$G)(["common","home"]).t;return(0,i.jsxs)(s.Z,{title:o("home:title"),children:[(0,i.jsx)($,{items:n.items,index:n.index}),(0,i.jsx)(f,{items:a.items,index:a.index}),(0,i.jsx)(S,{items:t.items,index:t.index}),(0,i.jsx)(g,{items:c.items,index:c.index}),(0,i.jsx)(L,{items:l.items,index:l.index})]})}},8883:function(e){e.exports={container:"Art_container__t1pdL",grid:"Art_grid__DKAuW",overlay:"Art_overlay__3tWRp",text:"Art_text__o1TJ8"}},1849:function(e){e.exports={container:"Blog_container__SO8k1",date:"Blog_date__m2ABA",tag:"Blog_tag__RW5VK",blogpost:"Blog_blogpost__TFdHA"}},3204:function(e){e.exports={container:"Opensource_container__7svPi"}},8536:function(e){e.exports={container:"Projects_container__zYPdt",tag:"Projects_tag__AZMxV"}},5439:function(e){e.exports={container:"Talks_container__QplSc",tag:"Talks_tag__wpiBR",keynote:"Talks_keynote__BA9vJ",talk:"Talks_talk__4XwUK",workshop:"Talks_workshop__vtjJ6",panel:"Talks_panel__rPo3Q",podcast:"Talks_podcast__opTQm"}},2242:function(e){e.exports={container:"Footer_container__j1zF1"}},8004:function(e){e.exports={container:"Header_container__7xLax"}},6722:function(e){e.exports={container:"LanguageSwitcher_container__n_8ky"}},4460:function(e){e.exports={container:"Layout_container__HxK9n"}},2361:function(e){e.exports={container:"SocialMediaList_container__THnHQ"}},7411:function(e){e.exports={container:"Tagline_container__9rkLj"}}},function(e){e.O(0,[987,956,244,774,888,179],function(){return e(e.s=9221)}),_N_E=e.O()}]);