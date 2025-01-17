import { SidebarConfigObject } from "@vuepress/theme-default"

export default {
	'/': [
		{
			text: 'Home',
			link: '/',
			children: [
				'/',
				'/whats-new.html'
			]
		}
	],
	'/cs4/': [
		{
			text: 'Home',
			link: '/',
			children: [
				'/',
				'/whats-new.html'
			]
		},
		{
			text: 'Introduction',
			link: '/cs4',
			children: [
				'/'
			]
		},
		{
			text: 'Quarter 1',
			link: '/cs4/1',
			children: [
				'/variables.html',
				'/datatypes.html',
				'/input-output.html',
				'/control-structures.html',
				'/arrays.html'
			]
		},
		{
			text: 'Quarter 2',
			link: '/cs4/2',
			children: [
				'/classes-objects-packages.html',
				'/classes-extension.html',
				'/packages-extension.html',
				'/oop.html',
				'/gui.html'
			]
		},
		{
			text: `Quarter 3`,
			link: '/cs4/3',
			children: [
				'/gui-events.html',
				'/dialogs-and-messages.html',
				'/string-and-string-buffer.html'
			]
		},
		{
			text: `Additional Information`,
			children: [
				'/additional-information/notation.html'
			]
		}
	],
	'/cs5/': [
		{
			text: 'Home',
			link: '/',
			children: [
				'/',
				'/whats-new.html'
			]
		},
		{
			text: 'Introduction',
			link: '/cs5/',
			children: [
				'/'
			]
		},
		{
			text: `Quarter 2`,
			link: '/cs5/2/',
			children: [
				'/sorting-algorithms.html'
			]
		}
	]
} as SidebarConfigObject;