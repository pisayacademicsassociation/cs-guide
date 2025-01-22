import { SidebarOptions } from "@vuepress/theme-default";

export const sidebar: SidebarOptions = {
	"/": [
		{
			text: "Home",
			children: [
				"/"
			]
		},
		{
			text: `Additional Information`,
			children: [
				"/notation"
			]
		}
	],
	"/cs4/": [
		{
			text: "Home",
			children: [
				"/"
			]
		},
		{
			text: "Quarter 1",
			children: [
				"/cs4/1/variables",
				"/cs4/1/datatypes",
				"/cs4/1/input-output",
				"/cs4/1/control-structures",
				"/cs4/1/arrays"
			]
		},
		{
			text: "Quarter 2",
			children: [
				"/cs4/2/classes-objects-packages",
				"/cs4/2/classes-extension",
				"/cs4/2/packages-extension",
				"/cs4/2/oop",
				"/cs4/2/gui"
			]
		},
		{
			text: `Quarter 3`,
			children: [
				"/cs4/3/gui-events",
				"/cs4/3/dialogs-and-messages",
				"/cs4/3/string-and-string-buffer"
			]
		},
		{
			text: `Additional Information`,
			children: [
				"/notation"
			]
		}
	],
	"/cs5/": [
		{
			text: "Home",
			children: [
				"/"
			]
		},
		{
			text: `Quarter 2`,
			children: [
				"/cs5/2/recursion",
				"/cs5/2/sorting-algorithms"
			]
		},
		{
			text: `Quarter 3`,
			children: [
				"/cs5/3/dynamic-programming",
				"/cs5/3/growth-of-functions",
				"/cs5/3/measuring-function-growth"
			]
		},
		{
			text: `Additional Information`,
			children: [
				"/notation"
			]
		}
	]
};