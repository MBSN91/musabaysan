/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, s as spreadAttributes, u as unescapeHTML, F as Fragment } from '../astro_6201b302.mjs';
import 'clsx';
import { optimize } from 'svgo';
import React, { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import { jsx } from 'react/jsx-runtime';
import { IoSunny, IoMoon } from 'react-icons/io5/index.js';

const $$Astro$a = createAstro();
const $$Guides = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Guides;
  return renderTemplate`${maybeRenderHead()}<div class="fixed z-0 flex justify-center inset-0 items-start text-center px-8 pointer-events-none"><div class="flex relative justify-center w-full max-w-6xl items-start content-start"><div class="absolute h-screen w-5 border-dashed border-x border-y-0 border-grid -ml-5 left-0 dark:border-dark-200"></div><div class="absolute hidden h-screen w-5 border-dashed border-x border-y-0 border-grid dark:border-dark-200 ml-4 left-1/4 lg:block"></div><div class="absolute h-screen w-5 border-dashed border-x border-y-0 border-grid dark:border-dark-200"></div><div class="absolute hidden h-screen w-5 border-dashed border-x border-y-0 border-grid dark:border-dark-200 mr-4 right-1/4 lg:block"></div><div class="absolute h-screen w-5 border-dashed border-x border-y-0 border-grid dark:border-dark-200 -mr-5 right-0"></div></div></div>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/src/components/guides.astro", void 0);

const $$Astro$9 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/musa-selfie.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head><!-- Jooo, thanks voor het checken van de bron! Doe ik ook wel eens! Website is volledig zelfgemaakt in astro met een vleugje react en de styling in Tailwind. Gehost doormiddel van Netlify. Groetjes xoxo <3 --><body class="bg-background dark:bg-dark-100">${renderComponent($$result, "Guides", $$Guides, {})}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/src/layouts/Layout.astro", void 0);

const __vite_glob_1_0 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg viewBox=\"0 0 448 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z\"\n    fill=\"currentcolor\"\n  />\n</svg>";

const __vite_glob_1_1 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 26.3.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 261 102\" style=\"enable-background:new 0 0 261 102;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n</style>\n<g>\n\t<polygon\n\t\tpoints=\"26.1,44.1 26.1,44.1 15.9,34 5.2,44.7 11,50.4 11,85.4 11,85.4 11,85.4 21.1,95.5 31.8,84.8 26.1,79.1\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon \n\t\tpoints=\"54.3,44.1 54.3,44.1 44.1,34 33.4,44.7 39.2,50.4 39.2,85.4 39.2,85.4 39.2,85.4 49.3,95.5 60,84.8 54.3,79.1\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon \n\t\tpoints=\"82.5,44.1 82.5,44.1 72.3,34 61.6,44.7 67.4,50.4 67.4,85.4 77.5,95.5 88.2,84.8 82.5,79.1\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon  \n\t\tpoints=\"221.2,44.1 221.2,44.1 211,34 200.3,44.7 206,50.4 206,85.4 206,85.4 206,85.4 216.2,95.5 226.9,84.8 221.2,79.1\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon  \n\t\tpoints=\"249.4,79.1 249.4,44.1 249.4,44.1 239.2,34 228.5,44.7 234.2,50.4 234.2,85.4 244.4,95.5 255.1,84.8\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon  \n\t\tpoints=\"170.9,63.1 165.6,57.7 165.6,55.8 177,44.3 166.3,33.6 150.4,49.6 150.4,49.6 150.4,63.8 150.3,63.9 150.4,63.9 150.4,64 150.4,64 160.2,73.8\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon  \n\t\tpoints=\"195,64.7 194.9,64.7 194.9,64.6 194.9,64.6 185.1,54.9 174.4,65.6 179.7,70.9 179.7,72.8 168.3,84.3 179,95 194.9,79 194.9,79 194.9,64.8\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon  \n\t\tpoints=\"110.7,15.7 110.7,15.7 110.7,15.7 100.5,5.5 89.8,16.2 95.6,21.9 95.6,85.4 95.6,85.4 95.6,85.4 105.7,95.5 116.4,84.8 110.7,79.1\"\n\t\tfill=\"currentcolor\"\n\t/>\n\t<polygon  \n\t\tpoints=\"139.2,85.3 139.2,44.1 139.2,44.1 128.5,33.4 118.9,44.1 124,49.9 124,79.1 118.3,84.8 129,95.5 139.2,85.4\"\n\t\tfill=\"currentcolor\"\n\t/>\n</g>\n</svg>\n";

const __vite_glob_1_2 = "<svg version=\"1.2\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 211 211\">\n    <path  \n        d=\"m196.1 130.2c-3.1 19.2-14.3 35.3-30.3 46.2-32.2 21.9-75.5 26-113.4 25.2-5.4-0.1-5.4-8.4 0-8.3 30.9 0.7 64.3-2 92.9-15 17.1-7.8 33.5-20.1 39.9-38.6 7.7-22.4 2.4-46.5-14.1-63.5-36.1-37.3-93.5-39-138.8-18.7q22.9 3.1 45.7 6.1c5.3 0.7 5.3 9.1 0 8.4q-29.3-4-58.7-7.9c-1.8 0.9-3.5 0.4-4.6-0.8-2.8-1-3.9-4.1-1.7-6.8q19.6-24.2 39.3-48.5c3.4-4.2 9.3 1.7 5.9 5.9q-14.6 18-29.2 36c47.3-21.1 107.8-19.8 146.1 18.5 16.5 16.5 24.8 38.5 21 61.8z\"\n        fill=\"currentcolor\"\n        />\n</svg>";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({"/src/icons/arrow.svg": __vite_glob_1_0,"/src/icons/logo.svg": __vite_glob_1_1,"/src/icons/pointerArrow.svg": __vite_glob_1_2});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$8 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$7 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$6 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$5 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$4 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { title } = Astro2.props;
  const { link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}><button class="flex z-10 justify-center items-center space-x-2 p-2 border-solid border-3 text-background bg-secondary hover:bg-secondary-100 dark:hover:bg-secondary-100 border-secondary dark:hover:border-secondary-100 hover:border-secondary-100 rounded-md h-fit transition-width duration-350 ease-in-out group"><div class="font-button uppercase tracking-widest text-lg whitespace-nowrap">${title}</div>${renderComponent($$result, "Icon", $$Icon, { "name": "arrow", "class": "transition-width duration-500 ease-in-out w-0 overflow-hidden group-hover:w-4" })}</button></a>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/src/components/button.astro", void 0);

function Mobilenav() {
  return /* @__PURE__ */ React.createElement(Popover, { className: "relative flex z-50" }, /* @__PURE__ */ React.createElement(Popover.Button, { as: "div" }), /* @__PURE__ */ React.createElement(Popover.Panel, { className: "relative flex flex-col z-50" }, /* @__PURE__ */ React.createElement("div", { className: "fixed inset-x-0 flex flex-col top-24 -m-px ui-not-open:h-0 ui-not-open:hidden justify-center items-center overflow-hidden bg-background dark:bg-dark-100 mx-8 border border-solid border-primary dark:border-background" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col justify-center items-center my-4" }, /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2",
      href: "#"
    },
    "Home"
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2",
      href: "#"
    },
    "About"
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "font-button text-primary dark:text-background uppercase text-base tracking-wider font-medium my-2",
      href: "#"
    },
    "Contact"
  ), /* @__PURE__ */ React.createElement("a", { href: "#" }, /* @__PURE__ */ React.createElement("button", { class: "flex z-10 justify-center items-center space-x-2 p-2 border-solid border-3 text-background bg-primary border-primary rounded-md h-fit transition-width duration-350 ease-in-out group hover:bg-primary-100 dark:hover:bg-orange hover:border-primary-100 dark:hover:border-orange dark:text-primary dark:bg-background dark:border-background" }, /* @__PURE__ */ React.createElement("div", { class: "font-button uppercase tracking-widest text-lg whitespace-nowrap" }, "Download resume")))))));
}

const themes = ["light", "dark"];
function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    {
      return void 0;
    }
  });
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted ? /* @__PURE__ */ jsx("div", { className: "transition group ease-in-out duration-300 inline-flex items-center p-[3px] rounded-3xl bg-orange dark:bg-orange-reverse border-solid border-2 border-primary hover:border-secondary dark:hover:border-secondary dark:border-grey-100 text-primary dark:text-background", children: themes.map((t) => {
    const checked = t === theme;
    return /* @__PURE__ */ jsx(
      "button",
      {
        className: `${checked ? "transition ease-in-out duration-300 bg-primary group-hover:bg-secondary text-background dark:bg-dark-100 dark:text-background" : ""} cursor-pointer rounded-3xl p-1`,
        onClick: toggleTheme,
        "aria-label": "Toggle theme",
        children: t === "light" ? /* @__PURE__ */ jsx(IoSunny, {}) : /* @__PURE__ */ jsx(IoMoon, {})
      },
      t
    );
  }) }) : /* @__PURE__ */ jsx("div", {});
}

const $$Astro$3 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-4 inset-x-0 flex flex-row justify-center h-20 px-8 z-50"><div class="transition ease-in-out duration-300 flex flex-col justify-center w-full max-w-6xl border border-solid border-primary bg-background dark:bg-dark-100 dark:border-background"><div class="flex flex-row w-full max-w-6xl justify-between items-center"><div class="hidden md:block self-center"><ul class="flex flex-row items-center list-none"><li class="transition ease-in-out duration-300 flex my-1 mx-4 uppercase text-base tracking-wider font-medium text-primary font-button dark:text-background"><a href="#">Home</a></li><li class="transition ease-in-out duration-300 flex my-1 mx-4 uppercase text-base tracking-wider font-medium text-primary font-button dark:text-background"><a href="#">Cases</a></li><li class="transition ease-in-out duration-300 flex my-1 mx-4 uppercase text-base tracking-wider font-medium text-primary font-button dark:text-background"><a href="#">About</a></li><li class="transition ease-in-out duration-300 flex my-1 mx-4 uppercase text-base tracking-wider font-medium text-primary font-button dark:text-background"><a href="#">Contact</a></li><li class="transition ease-in-out duration-300 lex my-1 mx-4 uppercase text-base tracking-wider font-medium text-primary font-button dark:text-background">${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/baysamua/Documents/website/astro/musabaysan/src/components/ThemeToggleButton", "client:component-export": "default" })}</li><li class="transition ease-in-out duration-300 flex my-1 mx-4 uppercase text-base tracking-wider font-medium text-primary font-button dark:text-background">${renderComponent($$result, "Button", $$Button, { "link": "#", "title": "Download resume" })}</li></ul></div><div class="relative w-full items-center justify-between flex flex-row gap-2 mr-5 md:hidden"><div class="mx-5">${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/baysamua/Documents/website/astro/musabaysan/src/components/ThemeToggleButton", "client:component-export": "default" })}</div>${renderComponent($$result, "Mobilenav", Mobilenav, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/baysamua/Documents/website/astro/musabaysan/src/components/Mobilenav", "client:component-export": "default" })}</div></div></div></nav>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/src/components/navigation.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full flex items-center justify-center max-h-max px-8 py-0 bg-background dark:bg-[#000000]"><div class="w-full max-w-6xl flex items-center justify-center align-middle"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg w-full max-w-6xl flex-col sm:flex-row z-30 -mt-16 bg-background drop-shadow dark:drop-shadow-lg dark:bg-dark-100 justify-center align-middle items-center mb-8"><div class="pl-16 pt-16 pb-16 flex flex-col my-8 md:my-8"><h2 class="font-button text-xl uppercase font-bold leading-10 text-secondary tracking-wide mb-8">Let's get started ☕️</h2><p class="text-l text-primary dark:text-background font-bold font-button">Musa Baysan</p><p class="text-m text-primary dark:text-background font-medium font-body mb-4">UX designer</p><p class="text-m text-primary dark:text-background font-medium font-body">+31 6 52 72 69 67</p><p class="text-m text-primary dark:text-background font-medium font-body">hello@musabaysan.nl</p><p class="text-m text-primary dark:text-background font-medium font-body">LinkedIN</p></div><div class="rounded-lg sm:pl-2 sm:pl-o flex flex-col justify-center align-middle items-center self-stretch	bg-cover bg-center	 bg-no-repeat bg-musa-casual"><!-- 
            <img
                src={Musa}
                alt="musa portrait"
                class="w-full pointer-events-none opacity-0 hidden dark:block dark:opacity-100"
            />
            <img
                src={MusaDark}
                alt="musa portrait"
                class="w-full pointer-events-none opacity-100 block dark:hidden dark:opacity-0"
            />
        --></div></div></div></footer>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/src/components/footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Buttondisabled = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Buttondisabled;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button class="flex z-10 justify-center items-center pointer-events-none space-x-2 p-2 border-solid border-3 text-background bg-dark-300 dark:bg-orange-reverse border-dark-300 dark:border-orange-reverse rounded-md h-fit transition-width duration-350 ease-in-out group"><div class="font-button uppercase tracking-widest text-lg whitespace-nowrap">${title}</div>${renderComponent($$result, "Icon", $$Icon, { "name": "arrow", "class": "transition-width duration-500 ease-in-out w-0 overflow-hidden group-hover:w-4" })}</button>`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/src/components/buttondisabled.astro", void 0);

const $$Astro = createAstro();
const $$Happy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Happy;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Freelance UX designer | Musa Baysan" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navigation", $$Navigation, {})}${maybeRenderHead()}<main class="relative flex flex-col md:flex-row justify-center px-8 py-0 md:py-8 w-full top-24 mb-8"><div class="grid grid-cols-1 md:grid-cols-1 flex-col-reverse px-5 md:flex-row max-w-6xl w-full"><div class="h-[600px]"></div></div></main><div class="relative bg-background-100 dark:bg-dark-200 mt-32 flex flex-col justify-center pb-32 items-center self-center px-8 py-8 w-full"><div class="flex -mt-24 bg-background-100 dark:bg-dark-200 flex-col max-w-6xl w-full"><div class="w-full drop-shadow dark:drop-shadow-lg bg-background-100 dark:bg-dark-200"><p class="w-full font-smallt text-xxs text-secondary text-center m-2">
formerly worked with
</p><div class="flex flex-row"><div class="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full"><!-- client 1 --><div class="w-full h-16 flex justify-center"></div><!-- client 2 --><div class="w-full h-16 flex justify-center"></div><!-- client 3 --><div class="w-full h-16 flex justify-center"></div><!-- client 4 --><div class="w-full h-16 flex justify-center"></div></div></div></div><div class="flex mt-16 flex-row w-full justify-center"><h2 class="font-button text-xl uppercase text-primary dark:text-background">
Highlighted cases
</h2><h2 class="font-button text-xl uppercase text-secondary">.</h2></div><div class="mx-auto px-4 md:px-0"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!-- case 1 --><div class="p-4 flex flex-col items-center align-middle flex-wrap bg-background dark:bg-dark-100 rounded-lg"><div class="font-button text-l mb-2 text-center font-medium text-primary dark:text-background"><p>Strengthen guest loyalty with a Happy Italy app.</p></div>${renderComponent($$result2, "Buttondisabled", $$Buttondisabled, { "title": "Coming soon" })}</div><!-- case 2 --><div class="p-4 flex flex-col items-center align-middle flex-wrap bg-background dark:bg-dark-100 rounded-lg"><div class="font-button text-l mb-2 text-center font-medium text-primary dark:text-background"><p>Harmonising 5 employee apps into 1 app</p></div>${renderComponent($$result2, "Buttondisabled", $$Buttondisabled, { "title": "Coming soon" })}</div></div><div class="w-full flex justify-center mt-8">${renderComponent($$result2, "Button", $$Button, { "link": "#", "title": "All cases" })}</div></div></div></div>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/Users/baysamua/Documents/website/astro/musabaysan/src/pages/cases/happy.astro", void 0);

const $$file = "/Users/baysamua/Documents/website/astro/musabaysan/src/pages/cases/happy.astro";
const $$url = "/cases/happy";

const happy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Happy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navigation as $, ThemeToggle as T, $$Buttondisabled as a, $$Button as b, $$Footer as c, $$Layout as d, $$Icon as e, happy as h };
