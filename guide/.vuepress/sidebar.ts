import { SidebarConfigObject } from "@vuepress/theme-default"

export default {
	'/': [
		{
			text: 'Home',
			link: '/',
			children: [
				'/',
				'/whats-new'
			]
		}
	],
	'/cs4/': [
		{
			text: 'Home',
			link: '/',
			children: [
				'/',
				'/whats-new'
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
				'/variables',
				'/datatypes',
				'/input-output',
				'/control-structures',
				'/arrays'
			]
		},
		{
			text: 'Quarter 2',
			link: '/cs4/2',
			children: [
				'/classes-objects-packages',
				'/classes-extension',
				'/packages-extension',
				'/oop',
				'/gui'
			]
		},
		{
			text: `Quarter 3`,
			link: '/cs4/3',
			children: [
				'/gui-events',
				'/dialogs-and-messages',
				'/string-and-string-buffer'
			]
		},
		{
			text: `Additional Information`,
			children: [
				'/additional-information/notation'
			]
		}
	],
	'/cs5/': [
		{
			text: 'Home',
			link: '/',
			children: [
				'/',
				'/whats-new'
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
				'/sorting-algorithms'
			]
		}
	]
} as SidebarConfigObject;