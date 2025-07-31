import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_871ebafc.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/happy.968a7fb7.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/happy.968a7fb7.css"}],"routeData":{"route":"/cases/happy","type":"page","pattern":"^\\/cases\\/happy\\/?$","segments":[[{"content":"cases","dynamic":false,"spread":false}],[{"content":"happy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cases/happy.astro","pathname":"/cases/happy","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/happy.968a7fb7.css"}],"routeData":{"route":"/home","type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/baysamua/Downloads/website/musabaysan/src/pages/cases/happy.astro",{"propagation":"none","containsHead":true}],["/Users/baysamua/Downloads/website/musabaysan/src/pages/home.astro",{"propagation":"none","containsHead":true}],["/Users/baysamua/Downloads/website/musabaysan/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/home.astro":"chunks/pages/home_8aadd3b7.mjs","/src/pages/index.astro":"chunks/pages/index_7cd8b44b.mjs","\u0000@astrojs-manifest":"manifest_5b00b363.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_ff17efee.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_3edcd9c9.mjs","\u0000@astro-page:src/pages/cases/happy@_@astro":"chunks/happy_3f8d8b12.mjs","\u0000@astro-page:src/pages/home@_@astro":"chunks/home_fecd5da6.mjs","@astrojs/react/client.js":"_astro/client.dac1659e.js","/Users/baysamua/Downloads/website/musabaysan/src/components/ThemeToggleButton":"_astro/ThemeToggleButton.254cfb4c.js","/Users/baysamua/Downloads/website/musabaysan/src/components/Mobilenav":"_astro/Mobilenav.27d57228.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/musa.93cbef21.png","/_astro/case-happy.0b12b73d.png","/_astro/adidas-sam.630f0041.png","/_astro/musa-dark.c7ddd7f3.png","/_astro/musa-casual.2e690156.jpeg","/_astro/teko-latin-400-normal.352ad151.woff2","/_astro/open-sans-cyrillic-variable-wghtOnly-normal.59bd288e.woff2","/_astro/teko-latin-ext-400-normal.28af73fa.woff2","/_astro/open-sans-greek-ext-variable-wghtOnly-normal.910e0f31.woff2","/_astro/open-sans-greek-variable-wghtOnly-normal.0c018fe9.woff2","/_astro/open-sans-vietnamese-variable-wghtOnly-normal.84197a92.woff2","/_astro/open-sans-cyrillic-ext-variable-wghtOnly-normal.7608d58a.woff2","/_astro/open-sans-hebrew-variable-wghtOnly-normal.ea1b915d.woff2","/_astro/open-sans-latin-ext-variable-wghtOnly-normal.24c0e724.woff2","/_astro/open-sans-latin-variable-wghtOnly-normal.8778e9af.woff2","/_astro/teko-devanagari-400-normal.ff57bb43.woff2","/_astro/cormorant-cyrillic-variable-wghtOnly-normal.478d8080.woff2","/_astro/inconsolata-latin-variable-wghtOnly-normal.5d5476af.woff2","/_astro/cormorant-cyrillic-ext-variable-wghtOnly-normal.bd73e989.woff2","/_astro/cormorant-latin-variable-wghtOnly-normal.d7588aee.woff2","/_astro/cormorant-vietnamese-variable-wghtOnly-normal.f7fe19c9.woff2","/_astro/inconsolata-latin-ext-variable-wghtOnly-normal.50bd8168.woff2","/_astro/inconsolata-vietnamese-variable-wghtOnly-normal.38b604dc.woff2","/_astro/cormorant-latin-ext-variable-wghtOnly-normal.333282ae.woff2","/_astro/teko-all-400-normal.e3ba249a.woff","/_astro/happy.968a7fb7.css","/DE1E340A1E52ABE8.jpg","/DE1E340A1E52ABE8.png","/DE1E340A1E52ABEF.png","/favicon.svg","/musa-selfie.png","/_astro/Mobilenav.27d57228.js","/_astro/ThemeToggleButton.254cfb4c.js","/_astro/client.dac1659e.js","/_astro/index.7a169472.js","/_astro/index.893b9b60.js"]});

export { manifest };
