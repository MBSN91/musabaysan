/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_871ebafc.mjs';
import 'clsx';
import { $ as $$Navigation, a as $$Icon, b as $$Buttondisabled, c as $$Button, d as $$Footer, e as $$Layout } from './happy_1a264570.mjs';
import { $ as $$Image } from './generic_5fef5990.mjs';
import 'html-escaper';
import 'svgo';
import 'react';
import '@headlessui/react';
import 'react/jsx-runtime';
import 'react-icons/io5/index.js';
import '@astrojs/internal-helpers/path';
import 'mime/lite.js';
import '../astro-assets-services_3df8dd0f.mjs';

const Musa = {"src":"/_astro/musa.93cbef21.png","width":900,"height":849,"format":"png"};

const MusaDark = {"src":"/_astro/musa-dark.c7ddd7f3.png","width":900,"height":849,"format":"png"};

const Case1 = {"src":"/_astro/case-happy.0b12b73d.png","width":1200,"height":900,"format":"png"};

const Case2 = {"src":"/_astro/adidas-sam.630f0041.png","width":1200,"height":900,"format":"png"};

const $$Astro = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Freelance UX designer | Musa Baysan" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navigation", $$Navigation, {})}${maybeRenderHead()}<main class="relative min-h-[80vh] md:min-h-[70vh] flex flex-col md:flex-row justify-center px-8 py-0 md:py-8 w-full top-24 mb-8"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 flex-col-reverse px-5 md:flex-row max-w-6xl w-full"><div class="relative flex flex-col md:flex-row self-center flex-wrap w-full"><h1 class="font-button text-xl font-bold leading-10 text-secondary tracking-wide">
Product designer
</h1><p class="py-4 font-body font-medium text-primary dark:text-background text-m">
Leveraging 6+ years of experience building User-friendly interfaces
					with research-backed designs. Let's team up for success!
</p></div><div class="relative flex flex-col md:flex-row h-28 md:h-full flex-wrap w-full justify-center md:justify-center items-center">${renderComponent($$result2, "Icon", $$Icon, { "name": "mouse", "class": "mouse hidden md:block pointer-events-none h-12 bottom-1/4 left-8 z-10 relative md:absolute md:animate-floating2" })}${renderComponent($$result2, "Image", $$Image, { "src": Musa, "alt": "musa portrait", "class": "w-28 pointer-events-none md:w-48 absolute md:animate-floating opacity-0 dark:opacity-100" })}${renderComponent($$result2, "Image", $$Image, { "src": MusaDark, "alt": "musa portrait", "class": "w-28 pointer-events-none md:w-48 absolute md:animate-floating opacity-100 dark:opacity-0" })}</div></div></main><div class="relative bg-background-100 dark:bg-dark-200 mt-32 flex flex-col justify-center pb-32 items-center self-center px-8 py-8 w-full"><div class="flex -mt-24 bg-background-100 dark:bg-dark-200 flex-col max-w-6xl w-full"><div class="flex mt-16 flex-row w-full justify-center"><h2 class="font-button text-xl uppercase text-primary dark:text-background">
Highlighted cases
</h2><h2 class="font-button text-xl uppercase text-secondary">.</h2></div><div class="mx-auto px-4 md:px-0"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!-- case 1 --><div class="p-4 flex flex-col items-center align-middle flex-wrap bg-background dark:bg-dark-100 rounded-lg">${renderComponent($$result2, "Image", $$Image, { "src": Case1, "alt": "caseimg" })}<div class="font-button text-l mb-2 text-center font-medium text-primary dark:text-background"><p>Strengthen guest loyalty with a Happy Italy app.</p></div>${renderComponent($$result2, "Buttondisabled", $$Buttondisabled, { "title": "Coming soon" })}</div><!-- case 2 --><div class="p-4 flex flex-col items-center align-middle flex-wrap bg-background dark:bg-dark-100 rounded-lg">${renderComponent($$result2, "Image", $$Image, { "src": Case2, "alt": "caseimg" })}<div class="font-button text-l mb-2 text-center font-medium text-primary dark:text-background"><p>Harmonising 5 employee apps into 1 app</p></div>${renderComponent($$result2, "Buttondisabled", $$Buttondisabled, { "title": "Coming soon" })}</div></div><div class="w-full flex justify-center mt-8">${renderComponent($$result2, "Button", $$Button, { "link": "#", "title": "All cases" })}</div></div></div></div>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "/Users/baysamua/Downloads/website/musabaysan/src/pages/home.astro", void 0);

const $$file = "/Users/baysamua/Downloads/website/musabaysan/src/pages/home.astro";
const $$url = "/home";

export { $$Home as default, $$file as file, $$url as url };
