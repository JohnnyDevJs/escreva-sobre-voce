(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,l=e.src,c=e.sizes,m=e.unoptimized,g=void 0!==m&&m,b=e.priority,j=void 0!==b&&b,z=e.loading,S=e.lazyRoot,M=e.lazyBoundary,C=e.className,W=e.quality,_=e.width,R=e.height,O=e.style,V=e.objectFit,H=e.objectPosition,Z=e.onLoadingComplete,P=e.placeholder,I=void 0===P?"empty":P,F=e.blurDataURL,N=u(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=s.useContext(p.ImageConfigContext),B=s.useMemo(function(){var e=k||q||f.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[q]),T=c?"responsive":"intrinsic";"layout"in N&&(N.layout&&(T=N.layout),delete N.layout);var U=w;if("loader"in N){if(N.loader){var D=N.loader;U=function(e){e.config;var t=u(e,["config"]);return D(t)}}delete N.loader}var G="";if(function(e){var t;return"object"==typeof e&&(E(e)||void 0!==e.src)}(l)){var K=E(l)?l.default:l;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(F=F||K.blurDataURL,G=K.src,(!T||"fill"!==T)&&(R=R||K.height,_=_||K.width,!K.height||!K.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)))}l="string"==typeof l?l:G;var J=!j&&("lazy"===z||void 0===z);(l.startsWith("data:")||l.startsWith("blob:"))&&(g=!0,J=!1),y.has(l)&&(J=!1),B.unoptimized&&(g=!0);var Q=o(s.useState(!1),2),X=Q[0],Y=Q[1],$=o(h.useIntersection({rootRef:void 0===S?null:S,rootMargin:M||"200px",disabled:!J}),3),ee=$[0],et=$[1],en=$[2],er=!J||et,eo={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ei={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,el=x(_),ec=x(R),eu=x(W),es=Object.assign({},O,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:V,objectPosition:H}),ed="blur"!==I||X?{}:{backgroundSize:V||"cover",backgroundPosition:H||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(F,'")')};if("fill"===T)eo.display="block",eo.position="absolute",eo.top=0,eo.left=0,eo.bottom=0,eo.right=0;else if(void 0!==el&&void 0!==ec){var ef=ec/el,eh=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===T?(eo.display="block",eo.position="relative",ea=!0,ei.paddingTop=eh):"intrinsic"===T?(eo.display="inline-block",eo.position="relative",eo.maxWidth="100%",ea=!0,ei.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===T&&(eo.display="inline-block",eo.position="relative",eo.width=el,eo.height=ec)}var ep={src:v,srcSet:void 0,sizes:void 0};er&&(ep=L({config:B,src:l,unoptimized:g,layout:T,width:el,quality:eu,sizes:c,loader:U}));var em=l,eg="imagesizes";eg="imageSizes";var ek=(r(n={},"imageSrcSet",ep.srcSet),r(n,eg,ep.sizes),r(n,"crossOrigin",N.crossOrigin),n),ey=s.default.useLayoutEffect,ev=s.useRef(Z),eb=s.useRef(l);s.useEffect(function(){ev.current=Z},[Z]),ey(function(){eb.current!==l&&(en(),eb.current=l)},[en,l]);var eE=a({isLazy:J,imgAttributes:ep,heightInt:ec,widthInt:el,qualityInt:eu,layout:T,className:C,imgStyle:es,blurStyle:ed,loading:z,config:B,unoptimized:g,placeholder:I,loader:U,srcString:em,onLoadingCompleteRef:ev,setBlurComplete:Y,setIntersection:ee,isVisible:er,noscriptSizes:c},N);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:eo},ea?s.default.createElement("span",{style:ei},t?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,s.default.createElement(A,Object.assign({},eE))),j?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ep.src+ep.srcSet+ep.sizes,rel:"preload",as:"image",href:ep.srcSet?void 0:ep.src},ek))):null)};var a=n(6495).Z,l=n(2648).Z,c=n(1598).Z,u=n(7273).Z,s=c(n(7294)),d=l(n(5443)),f=n(9309),h=n(7190),p=n(9977);n(3794);var m=n(2392);function g(e){return"/"===e[0]?e.slice(1):e}var k={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},y=new Set,v="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",b=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(g(n))),a=i.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString()),i.href}],["cloudinary",function(e){var t,n=e.config,r=e.src,o=e.width,i=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(i).concat(g(r))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(g(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function E(e){return void 0!==e.default}function L(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,l=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l=/(^|\s)(1?\d?\d)vw/g,c=[];u=l.exec(r);u)c.push(parseInt(u[2]));if(c.length){var u,s,d=.01*(s=Math).min.apply(s,i(c));return{widths:a.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,c),d=s.widths,f=s.kind,h=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map(function(e,r){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)}).join(", "),src:u({config:t,src:n,quality:l,width:d[h]})}}function x(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function w(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=b.get(n);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e,t,n,r,o,i){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(y.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}}))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,i=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,h=e.loading,p=e.srcString,m=e.config,g=e.unoptimized,k=e.loader,y=e.onLoadingCompleteRef,v=e.setBlurComplete,b=e.setIntersection,E=e.onLoad,x=e.onError,w=(e.isVisible,e.noscriptSizes),A=u(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":o,className:i,style:a({},l,c),ref:s.useCallback(function(e){b(e),(null==e?void 0:e.complete)&&j(e,p,o,f,y,v)},[b,p,o,f,y,v,]),onLoad:function(e){j(e.currentTarget,p,o,f,y,v),E&&E(e)},onError:function(e){"blur"===f&&v(!0),x&&x(e)}})),(d||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},A,L({config:m,src:p,unoptimized:g,layout:o,width:n,quality:r,sizes:w,loader:k}),{decoding:"async","data-nimg":o,style:l,className:i,loading:h}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),l=n(6273),c=n(2725),u=n(3462),s=n(1018),d=n(7190),f=n(1210),h=n(8684),p={};function m(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var g=a.default.forwardRef(function(e,t){var n,o,g=e.href,k=e.as,y=e.children,v=e.prefetch,b=e.passHref,E=e.replace,L=e.shallow,x=e.scroll,w=e.locale,j=e.onClick,A=e.onMouseEnter,z=e.onTouchStart,S=e.legacyBehavior,M=void 0===S?!0!==Boolean(!1):S,C=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,M&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var W=!1!==v,_=a.default.useContext(u.RouterContext),R=a.default.useContext(s.AppRouterContext);R&&(_=R);var O=a.default.useMemo(function(){var e=r(l.resolveHref(_,g,!0),2),t=e[0],n=e[1];return{href:t,as:k?l.resolveHref(_,k):n||t}},[_,g,k]),V=O.href,H=O.as,Z=a.default.useRef(V),P=a.default.useRef(H);M&&(o=a.default.Children.only(n));var I=M?o&&"object"==typeof o&&o.ref:t,F=r(d.useIntersection({rootMargin:"200px"}),3),N=F[0],q=F[1],B=F[2],T=a.default.useCallback(function(e){(P.current!==H||Z.current!==V)&&(B(),P.current=H,Z.current=V),N(e),I&&("function"==typeof I?I(e):"object"==typeof I&&(I.current=e))},[H,I,V,B,N]);a.default.useEffect(function(){var e=q&&W&&l.isLocalURL(V),t=void 0!==w?w:_&&_.locale,n=p[V+"%"+H+(t?"%"+t:"")];e&&!n&&m(_,V,H,{locale:t})},[H,V,q,w,W,_]);var U={ref:T,onClick:function(e){M||"function"!=typeof j||j(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u,s,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(h=(f=e).currentTarget.target)||"_self"===h)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var f,h,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!d})};s?a.default.startTransition(p):p()}}(e,_,V,H,E,L,x,w,Boolean(R),W)},onMouseEnter:function(e){M||"function"!=typeof A||A(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!W&&R)&&l.isLocalURL(V)&&m(_,V,H,{priority:!0})},onTouchStart:function(e){M||"function"!=typeof z||z(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!W&&R)&&l.isLocalURL(V)&&m(_,V,H,{priority:!0})}};if(!M||b||"a"===o.type&&!("href"in o.props)){var D=void 0!==w?w:_&&_.locale,G=_&&_.isLocaleDomain&&f.getDomainLocale(H,D,_.locales,_.domainLocales);U.href=G||h.addBasePath(c.addLocale(H,D,_&&_.defaultLocale))}return M?a.default.cloneElement(o,U):a.default.createElement("a",Object.assign({},C,U),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,u=e.rootMargin,s=e.disabled||!a,d=r(o.useState(!1),2),f=d[0],h=d[1],p=r(o.useState(null),2),m=p[0],g=p[1];return o.useEffect(function(){if(a){if(!s&&!f&&m&&m.tagName){var e,t,r,o,d,p,g;return t=function(e){return e&&h(e)},d=(o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=l.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},c.push(n),l.set(n,t),t}(r={root:null==n?void 0:n.current,rootMargin:u})).id,p=o.observer,(g=o.elements).set(m,t),p.observe(m),function(){if(g.delete(m),p.unobserve(m),0===g.size){p.disconnect(),l.delete(d);var e=c.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var k=i.requestIdleCallback(function(){return h(!0)});return function(){return i.cancelIdleCallback(k)}}},[m,s,u,n,f]),[g,f,o.useCallback(function(){h(!1)},[])]};var o=n(7294),i=n(9311),a="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=r.default.createContext(null);t.TemplateContext=l},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},9353:function(e,t,n){"use strict";var r=n(7294),o=n(9818),i=n(7258),a=new Map;a.set("bold",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),a.set("duotone",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z",opacity:"0.2"}),r.createElement("path",{d:"M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),a.set("fill",function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H99.5l14.8,24.7a16,16,0,0,0,27.4,0L156.5,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z"}))}),a.set("light",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),a.set("thin",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),a.set("regular",function(e){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l=function(e,t){return(0,o._)(e,t,a)},c=(0,r.forwardRef)(function(e,t){return r.createElement(i.Z,Object.assign({ref:t},e,{renderPath:l}))});c.displayName="ChatCentered",t.Z=c},3773:function(e,t,n){"use strict";var r=n(7294),o=n(9818),i=n(7258),a=new Map;a.set("bold",function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"220 176 220 36 80 36",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("rect",{x:"40",y:"76",width:"140",height:"140",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),a.set("duotone",function(e){return r.createElement(r.Fragment,null,r.createElement("rect",{x:"40",y:"72",width:"144",height:"144",opacity:"0.2"}),r.createElement("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),a.set("fill",function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M216,32H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"}),r.createElement("rect",{x:"32",y:"64",width:"160",height:"160",rx:"8"}))}),a.set("light",function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),a.set("thin",function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),a.set("regular",function(e){return r.createElement(r.Fragment,null,r.createElement("polyline",{points:"216 184 216 40 72 40",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("rect",{x:"40",y:"72",width:"144",height:"144",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l=function(e,t){return(0,o._)(e,t,a)},c=(0,r.forwardRef)(function(e,t){return r.createElement(i.Z,Object.assign({ref:t},e,{renderPath:l}))});c.displayName="CopySimple",t.Z=c},342:function(e,t,n){"use strict";var r=n(7294),o=n(9818),i=n(7258),a=new Map;a.set("bold",function(e){return r.createElement(r.Fragment,null,r.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("circle",{cx:"128",cy:"152",r:"16"}))}),a.set("duotone",function(e){return r.createElement(r.Fragment,null,r.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),r.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("circle",{cx:"128",cy:"152",r:"12"}))}),a.set("fill",function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))}),a.set("light",function(e){return r.createElement(r.Fragment,null,r.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("circle",{cx:"128",cy:"152",r:"10"}))}),a.set("thin",function(e){return r.createElement(r.Fragment,null,r.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("circle",{cx:"128",cy:"152",r:"8"}))}),a.set("regular",function(e){return r.createElement(r.Fragment,null,r.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var l=function(e,t){return(0,o._)(e,t,a)},c=(0,r.forwardRef)(function(e,t){return r.createElement(i.Z,Object.assign({ref:t},e,{renderPath:l}))});c.displayName="Lock",t.Z=c},949:function(e,t,n){"use strict";var r=n(7294),o=n(9818),i=n(7258),a=new Map;a.set("bold",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r.createElement("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))}),a.set("duotone",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),r.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))}),a.set("fill",function(){return r.createElement(r.Fragment,null,r.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"}))}),a.set("light",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r.createElement("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))}),a.set("thin",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r.createElement("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))}),a.set("regular",function(e){return r.createElement(r.Fragment,null,r.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),r.createElement("line",{x1:"88",y1:"128",x2:"168",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r.createElement("line",{x1:"128",y1:"88",x2:"128",y2:"168",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l=function(e,t){return(0,o._)(e,t,a)},c=(0,r.forwardRef)(function(e,t){return r.createElement(i.Z,Object.assign({ref:t},e,{renderPath:l}))});c.displayName="PlusCircle",t.Z=c},7258:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(9818);function i(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var a=(0,r.forwardRef)(function(e,t){var n=e.alt,a=e.color,l=e.size,c=e.weight,u=e.mirrored,s=e.children,d=e.renderPath,f=i(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=(0,r.useContext)(o.P),p=h.color,m=void 0===p?"currentColor":p,g=h.size,k=h.weight,y=h.mirrored,v=i(h,["color","size","weight","mirrored"]);return r.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:null!=l?l:g,height:null!=l?l:g,fill:null!=a?a:m,viewBox:"0 0 256 256",transform:u||void 0!==y&&y?"scale(-1, 1)":void 0},v,f),!!n&&r.createElement("title",null,n),s,r.createElement("rect",{width:"256",height:"256",fill:"none"}),d(null!=c?c:void 0===k?"regular":k,null!=a?a:m))});a.displayName="IconBase";var l=a},9818:function(e,t,n){"use strict";n.d(t,{P:function(){return r},_:function(){return o}});var r=(0,n(7294).createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),o=function(e,t,n){var r=n.get(e);return r?r(t):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)}}}]);