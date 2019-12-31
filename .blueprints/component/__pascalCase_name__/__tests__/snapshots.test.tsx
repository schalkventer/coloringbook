import React from 'react';
import renderer from 'react-test-renderer';
import { Default } from './stories';


// ⚙️ Elements
// 🔨 Custom
// 📺 Views


describe('UI Components', (): void => {
  describe('Experimental', (): void => {
    describe('{{pascalCase name}}', (): void => {
      describe('snapshots', (): void => {
        test('Default', (): void => {
          expect(renderer.create(<Default />).toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});
