(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{4849:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return o(6865)}])},1258:function(e,t,o){"use strict";var n=o(8071),r=o(2195),a=o.n(r);t.Z=(0,n.Z)({supportedLngs:a().i18n.locales,fallbackLng:a().i18n.defaultLocale})},152:function(e,t,o){"use strict";o.d(t,{l_:function(){return s}});var n=o(1527),r=o(959),a=o(6035),i=o(1258),u=function(e){var t=(0,a.useRouter)();return e=e||t.asPath,(0,r.useEffect)(function(){var o=i.Z.detect();if(e.startsWith("/"+o)&&"/404"===t.route){t.replace("/"+o+t.route);return}i.Z.cache(o),t.replace("/"+o+e)}),(0,n.jsx)(n.Fragment,{})},s=function(){return u(),(0,n.jsx)(n.Fragment,{})}},2195:function(e){"use strict";e.exports={debug:!1,i18n:{defaultLocale:"pl",locales:["pl","en"]},reloadOnPrerender:!1}},6865:function(e,t,o){"use strict";o.r(t);var n=o(152);t.default=n.l_},6035:function(e,t,o){e.exports=o(790)},8071:function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,{Z:function(){return I}});var r=o(2804),a=o(8096),i=[],u=i.forEach,s=i.slice,c=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,l=function(e,t,o){var n=o||{};n.path=n.path||"/";var r=e+"="+encodeURIComponent(t);if(n.maxAge>0){var a=n.maxAge-0;if(isNaN(a))throw Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(a)}if(n.domain){if(!c.test(n.domain))throw TypeError("option domain is invalid");r+="; Domain="+n.domain}if(n.path){if(!c.test(n.path))throw TypeError("option path is invalid");r+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite){var i="string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite;switch(i){case!0:case"strict":r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"none":r+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}}return r},f={create:function(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};o&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+6e4*o)),n&&(r.domain=n),document.cookie=l(e,encodeURIComponent(t),r)},read:function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var r=o[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},remove:function(e){this.create(e,"",-1)}},p={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!=typeof document){var o=f.read(e.lookupCookie);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!=typeof document&&f.create(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},g={name:"querystring",lookup:function(e){var t;if("undefined"!=typeof window)for(var o=window.location.search.substring(1).split("&"),n=0;n<o.length;n++){var r=o[n].indexOf("=");r>0&&o[n].substring(0,r)===e.lookupQuerystring&&(t=o[n].substring(r+1))}return t}},h=null,d=function(){if(null!==h)return h;try{h="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(t){h=!1}return h},v={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&d()){var o=window.localStorage.getItem(e.lookupLocalStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&d()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},m=null,$=function(){if(null!==m)return m;try{m="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(t){m=!1}return m},k={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&$()){var o=window.sessionStorage.getItem(e.lookupSessionStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&$()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},S={name:"navigator",lookup:function(e){var t=[];if("undefined"!=typeof navigator){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)t.push(navigator.languages[o]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},_={name:"htmlTag",lookup:function(e){var t,o=e.htmlTag||("undefined"!=typeof document?document.documentElement:null);return o&&"function"==typeof o.getAttribute&&(t=o.getAttribute("lang")),t}},y={name:"path",lookup:function(e){var t;if("undefined"!=typeof window){var o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(o instanceof Array){if("number"==typeof e.lookupFromPathIndex){if("string"!=typeof o[e.lookupFromPathIndex])return;t=o[e.lookupFromPathIndex].replace("/","")}else t=o[0].replace("/","")}}return t}},x={name:"subdomain",lookup:function(e){var t;if("undefined"!=typeof window){var o=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);o instanceof Array&&(t="number"==typeof e.lookupFromSubdomainIndex?o[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):o[0].replace("http://","").replace("https://","").replace(".",""))}return t}},b=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,r.Z)(this,e),this.type="languageDetector",this.detectors={},this.init(t,o)}return(0,a.Z)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=function(e){return u.call(s.call(arguments,1),function(t){if(t)for(var o in t)void 0===e[o]&&(e[o]=t[o])}),e}(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(p),this.addDetector(g),this.addDetector(v),this.addDetector(k),this.addDetector(S),this.addDetector(_),this.addDetector(y),this.addDetector(x)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var o=[];return(e.forEach(function(e){if(t.detectors[e]){var n=t.detectors[e].lookup(t.options);n&&"string"==typeof n&&(n=[n]),n&&(o=o.concat(n))}}),this.services.languageUtils.getBestMatchFromCodes)?o:o.length>0?o[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var o=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(function(t){o.detectors[t]&&o.detectors[t].cacheUserLanguage(e,o.options)}))}}]),e}();b.type="languageDetector";var L=b,w=["supportedLngs","fallbackLng","order"];function C(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}var O=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},P=function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],o=e.split("-");return 2===o.length?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=O(o[1].toLowerCase()))):3===o.length&&(o[0]=o[0].toLowerCase(),2===o[1].length&&(o[1]=o[1].toUpperCase()),"sgn"!==o[0]&&2===o[2].length&&(o[2]=o[2].toUpperCase()),t.indexOf(o[1].toLowerCase())>-1&&(o[1]=O(o[1].toLowerCase())),t.indexOf(o[2].toLowerCase())>-1&&(o[2]=O(o[2].toLowerCase()))),o.join("-")}return e},D=function(e){var t=e.supportedLngs,o=e.fallbackLng;return function(e){if(!e)return null;var n,r=function(e){return!t||!t.length||t.indexOf(e)>-1};return e.forEach(function(e){if(!n){var o=P(e);(!t||r(o))&&(n=o)}}),!n&&t&&e.forEach(function(e){if(!n){var o,a=(o=e,!o||0>o.indexOf("-")?o:P(o.split("-")[0]));if(r(a)){n=a;return}n=t.find(function(e){if(0===e.indexOf(a))return e})}}),n||(n=o),n}};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.supportedLngs,o=e.fallbackLng,r=e.order,a=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,w),i=D({supportedLngs:t,fallbackLng:o}),u=new L({languageUtils:{getBestMatchFromCodes:i}},function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?C(Object(o),!0).forEach(function(t){n(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):C(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({order:void 0===r?["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"]:r},a));return{detect:function(e){return i(u.detect(e))},cache:function(e,t){return u.cacheUserLanguage(e,t)}}}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4849)}),_N_E=e.O()}]);