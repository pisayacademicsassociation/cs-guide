/* eslint-disable no-duplicate-imports */
import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';
import MarkdownItKatex from '@vscode/markdown-it-katex';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
	lang: 'en-US',
	title: 'CS Guide',
	description: 'I was bored.',
	base: '/cs-guide/',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/cs-guide/favicon.png' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: '/cs-guide/meta-image.png' }],
		['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.20/dist/katex.min.css' }]
	],
	theme: path.join(__dirname, 'theme', 'index.ts'),
	themeConfig: {
		contributors: false,
		sidebar,
		docsDir: 'guide',
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		navbar: [
			{
				text: 'Java Guide (CS4)',
				link: '/cs4/',
			},
			{
				text: 'Python Guide (CS5)',
				link: '/cs5/',
			}
		],
		themePlugins: {
			mediumZoom: false
		}
	},
	plugins: [],
	extendsMarkdown: md => {
		md.use(MarkdownItKatex);
	}
});

export default config;
