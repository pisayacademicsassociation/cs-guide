export default {
	'/': [
		{
			text: 'Home',
			children: [
				'/',
				'/whats-new'
			]
		}
	],
	'/cs4': [
		{
			text: 'Home',
			children: [
				'/',
				'/whats-new'
			]
		},
		{
			text: 'Quarter 1',
			children: [
				'/cs4/1/variables',
				'/cs4/1/datatypes',
				'/cs4/1/input-output',
				'/cs4/1/control-structures',
				'/cs4/1/arrays'
			]
		},
		{
			text: 'Quarter 2',
			children: [
				'/cs4/2/classes-objects-packages',
				'/cs4/2/classes-extension',
				'/cs4/2/packages-extension',
				'/cs4/2/oop',
				'/cs4/2/gui'
			]
		},
		{
			text: `Quarter 3`,
			children: [
				'/cs4/3/gui-events',
				'/cs4/3/dialogs-and-messages',
				'/cs4/3/string-and-string-buffer'
			]
		},
		{
			text: `Additional Information`,
			children: [
				'/additional-information/notation'
			]
		}
	],
	'/cs5': [
		{
			text: 'Home',
			children: [
				'/',
				'/whats-new'
			]
		},
		{
			text: `Quarter 2`,
			children: [
				'/cs5/2/sorting-algorithms'
			]
		}
	]
};
