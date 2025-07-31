/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_871ebafc.mjs';
import 'clsx';
import { $ as $$Navigation, T as ThemeToggle, a as $$Icon, c as $$Button, e as $$Layout } from './happy_1a264570.mjs';
import 'html-escaper';
import 'svgo';
import 'react';
import '@headlessui/react';
import 'react/jsx-runtime';
import 'react-icons/io5/index.js';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Freelance UX designer | Musa Baysan" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="opacity-0">${renderComponent($$result2, "Navigation", $$Navigation, {})}</div><main class="relative flex flex-col z-10 justify-center items-center text-center h-screen px-8"><div class="fixed top-8">${renderComponent($$result2, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/baysamua/Downloads/website/musabaysan/src/components/ThemeToggleButton", "client:component-export": "default" })}</div><div class="relative flex flex-col items-center text-center p-8 w-full max-w-6xl space-y-4 outline outline-1 outline-secondary outline-offset-0.5"><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -left-2 -top-2"></div><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -right-2 top-36"></div><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -top-6"></div><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -right-2 -top-6"></div><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -left-2 -bottom-2"></div><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -left-2 top-36"></div><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -bottom-2"></div><div class="absolute w-4 h-4 outline outline-1 bg-background dark:bg-dark-100 outline-secondary -right-2 -bottom-2"></div><div>${renderComponent($$result2, "Icon", $$Icon, { "name": "logo", "class": "relative w-64 text-primary dark:text-background" })}<h1 class="font-button text-l font-bold leading-10 text-secondary tracking-wide">
UX designer
</h1></div><div><p class="font-body text-lg dark:text-background">
The portfolio is being rebuilt from scratch with captivating case studies, beautiful features, and a high-performing website.
<br><b>Q4 2025</b></p></div>${renderComponent($$result2, "Button", $$Button, { "title": "visit previous portfolio", "link": "https://mbsn.webflow.io/" })}</div></main>` })}`;
}, "/Users/baysamua/Downloads/website/musabaysan/src/pages/index.astro", void 0);

const $$file = "/Users/baysamua/Downloads/website/musabaysan/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
