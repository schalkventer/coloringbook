import React from 'react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';
import { Base } from '../src/ui/components/elements';
 
const addDefaultStyles = (Story) => <Base><Story /></Base>

addDecorator(addDefaultStyles);
addDecorator(withKnobs);

const ORDER = [
	'docs-intro',
  'docs-getting-started',
	'docs-conventions',
	'utilities-overview',
	'utilities-helpers',
	'utilities-constants',
	'elements',
	'custom',
	'views',
  'experimental',
]

const theme = create({
	base: 'light',
  brandTitle: '📙 Coloringbook 0.0.2',
});

addParameters({ 
	options: { 
		theme,
		name: 'Coloringbook',
		showRoots: true,
		storySort: (a, b) => {
			const aIndex = ORDER.findIndex(value => a[0].includes(value));
			const bIndex = ORDER.findIndex(value => b[0].includes(value));
			
			if (aIndex < bIndex) {
				return -1;
			}
			
			if (aIndex > bIndex) {
				return 1;
			}
			
			return 0;
    }
	} 
});
