(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{1708:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/blog/[id]",function(){return t(1284)}])},3304:function(n,e,t){"use strict";t.d(e,{Z:function(){return E}});var r=t(1527);t(959);var i=t(2010),s=t.n(i),a=t(6035),c=t(6722),o=t.n(c),l=t(2195),u=t.n(l),d=t(1258),$=t(6476),m=t.n($),h=function(n){var e=n.locale,t=n.url,i=(0,a.useRouter)(),s=t||i.asPath,c=i.pathname;return Object.keys(i.query).forEach(function(n){if("locale"===n){c=c.replace("[".concat(n,"]"),e);return}c=c.replace("[".concat(n,"]"),i.query[n])}),e&&(s=t?"/".concat(e).concat(s):c),(0,r.jsx)(m(),{href:s,legacyBehavior:!1,role:"button",className:"btn btn-outline-light btn-sm",onClick:function(){return d.Z.cache&&d.Z.cache(e)},children:e})},x=function(){var n=(0,a.useRouter)().query.locale||u().i18n.defaultLocale;return(0,r.jsx)("div",{className:o().container,children:u().i18n.locales.map(function(e){return e===n?null:(0,r.jsx)(h,{locale:e},e)})})},j=t(2361),f=t.n(j),p={social_media:[{name:"mastodon",url:"https://mastodon.gamedev.place/@unjello"},{name:"github",url:"https://github.com/unjello"},{name:"email",url:"mailto:andrzej@lichnerowicz.pl"}]},v=function(){return(0,r.jsx)("ul",{className:"list-inline ".concat(f().container),children:p.social_media.map(function(n){var e=n.name,t=n.url;return t.startsWith("http")||t.startsWith("mailto")?(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:t,children:e})},e):(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)(m(),{href:t,children:e})},e)})})},_=t(7411),g=t.n(_),N=t(3689),b=function(){var n=(0,N.$G)(["header"]).t;return(0,r.jsxs)("ul",{className:"list-inline ".concat(g().container),children:[(0,r.jsx)("li",{className:"list-inline-item",children:n("he")}),(0,r.jsx)("li",{className:"list-inline-item",children:n("him")}),(0,r.jsx)("li",{className:"list-inline-item",children:n("activist")}),(0,r.jsx)("li",{className:"list-inline-item",children:n("trees_lover")})]})},C=t(8004),w=t.n(C),y=function(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(x,{}),(0,r.jsx)("section",{className:w().container,children:(0,r.jsx)("h1",{children:(0,r.jsx)(m(),{href:"/",children:"Andrzej unjello Lichnerowicz"})})}),(0,r.jsx)(b,{}),(0,r.jsx)(v,{})]})},L=t(5537),k=t(2242),S=t.n(k),Z=function(){var n=(0,N.$G)(["footer"]).t;return(0,r.jsx)("footer",{className:"fs-6 text-muted mt-5 ".concat(S().container),children:(0,r.jsxs)("p",{children:["CC0. ",n("powered_by")," ",(0,r.jsx)("a",{href:"https://nextjs.org/",children:"next.js"}),". ",n("inspired_by")," ",(0,r.jsx)("a",{href:"https://www.mattdesl.com/",children:"@mattdesl"})," ",n("and")," ",(0,r.jsx)("a",{href:"https://ozafoto.com/digital/",children:"Oza"}),"."]})})},F=t(4460),z=t.n(F),E=function(n){var e=n.children,t=n.title;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:void 0===t?"@unjello":t}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsxs)(L.W2,{fluid:!0,className:z().container,children:[(0,r.jsx)(y,{}),e,(0,r.jsx)(Z,{})]})]})}},1258:function(n,e,t){"use strict";var r=t(8071),i=t(2195),s=t.n(i);e.Z=(0,r.Z)({supportedLngs:s().i18n.locales,fallbackLng:s().i18n.defaultLocale})},2195:function(n){"use strict";n.exports={debug:!1,i18n:{defaultLocale:"en",locales:["en"]},reloadOnPrerender:!1}},1284:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return S},default:function(){return Z}});var r=t(1527),i=t(3304),s=t(3689),a=t(6035),c=t(959),o=t(5537),l=function(){return(0,r.jsx)(o.$j,{animation:"border",size:"sm",color:"secondary"})},u=t(2690),d=t.n(u),$=t(1744),m=t(4989),h=function(n){var e=n.comment;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.eW,{className:d().container,children:(0,r.jsxs)("div",{className:"d-flex flex-start",children:[(0,r.jsx)("img",{className:"rounded-circle shadow-1-strong me-3",src:e.account.avatarStatic,alt:"avatar",width:"60",height:"60"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{className:d().author,children:(0,r.jsx)("a",{href:e.account.url,children:e.account.displayName})}),(0,r.jsx)("div",{className:"d-flex align-items-center mb-3",children:(0,r.jsxs)("p",{className:d().date,children:[e.createdAt,e.favourited&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)($.Z,{}),(0,r.jsx)(o.Ct,{pill:!0,color:"light",className:d().dark,children:e.favouritesCount})]}),e.reblogged&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{}),(0,r.jsx)(o.Ct,{pill:!0,color:"light",className:d().dark,children:e.reblogsCount})]})]})}),(0,r.jsx)("div",{className:d().comment,dangerouslySetInnerHTML:{__html:e.content}})]})]})})})},x=t(4905),j=t.n(x),f=function(n){var e=n.comments;return(0,r.jsx)(o.W2,{children:e.map(function(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{comment:n}),(0,r.jsx)("hr",{className:j().verticalBar})]})})})},p=t(7046),v=t.n(p),_=t(7135),g=t(677),N=t(2466),b=function(n){var e=(0,c.useState)(null),t=e[0],r=e[1],i=(0,c.useState)(null),s=i[0],a=i[1],o=(0,c.useState)(!0),l=o[0],u=o[1],d=(0,c.useState)(!1),$=d[0],m=d[1];return(0,c.useEffect)(function(){function e(){return(e=(0,_.Z)(function(){var e,t,i,s,c;return(0,g.__generator)(this,function(o){switch(o.label){case 0:if(o.trys.push([0,5,,6]),u(!0),!n)return[3,4];return t={},[4,(0,N.x4)((t.url="https://mastodon.gamedev.place",t))];case 1:return[4,(e=o.sent()).v1.statuses.fetch(n)];case 2:return i=o.sent(),[4,e.v1.statuses.fetchContext(n)];case 3:s=o.sent(),i&&s&&(a(i),r(s),u(!1)),o.label=4;case 4:return[3,6];case 5:return c=o.sent(),u(!1),m(!0),[3,6];case 6:return[2]}})})).apply(this,arguments)}!function(){return e.apply(this,arguments)}()},[n]),{error:$,loading:l,status:s,comments:t}},C=function(n){var e=n.postId,t=(0,s.$G)(["comments"]).t,i=b(e),a=i.error,c=i.loading,o=i.status,u=i.comments;return e?(0,r.jsxs)("section",{className:v().container,children:[(0,r.jsx)("h2",{children:t("header")}),e?c?(0,r.jsx)(l,{}):a?(0,r.jsx)("div",{children:t("error")}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:["(",t("discussion_is_at"),(0,r.jsx)("a",{href:null==o?void 0:o.url,children:"mastodon"}),". ",t("welcome"),")"]}),c?(0,r.jsx)(l,{}):a?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(f,{comments:null==u?void 0:u.descendants})]}):(0,r.jsx)("div",{children:"No comments"})]}):(0,r.jsx)(r.Fragment,{})},w=t(5330),y=t.n(w),L=t(2903),k=function(n){var e=n.postData;return(0,c.useEffect)(function(){L.Z.initHighlighting()},[]),(0,r.jsxs)("section",{className:y().container,children:[(0,r.jsx)("h1",{children:null==e?void 0:e.title}),(0,r.jsx)("div",{className:y().date,children:null==e?void 0:e.date}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:null==e?void 0:e.content}}),(0,r.jsx)(C,{postId:null==e?void 0:e.mastodonId})]})},S=!0,Z=function(n){var e=n.posts,t=(0,s.$G)(["common","blog"]).t,c=null==e?void 0:e.items,o=(0,a.useRouter)().query.id,l=c.find(function(n){return n.id==o}),u=t("blog:title"),d="".concat(null==l?void 0:l.title," | ").concat(u);return(0,r.jsx)(i.Z,{title:d,children:(0,r.jsx)(k,{postData:l})})}},2690:function(n){n.exports={container:"Comment_container__DSTLw",author:"Comment_author__PIj1i",date:"Comment_date__hGzjc",comment:"Comment_comment___3Zck",dark:"Comment_dark__pE6R1"}},7046:function(n){n.exports={container:"Comments_container__LnG2x"}},4905:function(n){n.exports={verticalBar:"CommentsList_verticalBar__pFlcC"}},5330:function(n){n.exports={container:"Post_container__qv178",date:"Post_date__MxHpb"}},2242:function(n){n.exports={container:"Footer_container__j1zF1"}},8004:function(n){n.exports={container:"Header_container__7xLax"}},6722:function(n){n.exports={container:"LanguageSwitcher_container__n_8ky"}},4460:function(n){n.exports={container:"Layout_container__HxK9n"}},2361:function(n){n.exports={container:"SocialMediaList_container__THnHQ"}},7411:function(n){n.exports={container:"Tagline_container__9rkLj"}},7002:function(){}},function(n){n.O(0,[987,956,352,774,888,179],function(){return n(n.s=1708)}),_N_E=n.O()}]);