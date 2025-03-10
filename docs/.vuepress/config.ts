import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
import { tocPlugin } from "@vuepress/plugin-toc";
import { viteBundler } from "@vuepress/bundler-vite";

import { sidebar } from "./sidebar";

export default defineUserConfig({
	lang: "en-US",
	title: "CS Guide",
	base: "/cs-guide/",

	head: [
		["link", { rel: "stylesheet", href: "/cs-guide/style.css" }]
	],

	theme: defaultTheme({
		contributors: false,
		editLink: false,
		lastUpdated: true,

		navbar: [
			{
				text: "Java Guide (CS4)",
				link: "/cs4/1/variables"
			},
			{
				text: "Python Guide (CS5)",
				link: "/cs5/2/recursion"
			}
		],
		sidebar,
		sidebarDepth: 0,

		themePlugins: {
			mediumZoom: false,
			copyCode: true,
			backToTop: true
		}
	}),

	bundler: viteBundler({}),

	plugins: [
		markdownMathPlugin({
			type: "katex"
		}),
		prismjsPlugin({
			themes: {
				light: "one-light",
				dark: "vsc-dark-plus"
			},
			whitespace: true,
			notationFocus: true
		}),
		tocPlugin({})
	]
});
