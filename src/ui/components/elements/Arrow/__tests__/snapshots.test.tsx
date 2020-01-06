import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Default, Change, Directions, Minimal } from './stories';

// ⚙️ Elements
// 🔨 Custom
// 📺 Views

describe('UI Components', (): void => {
  describe('Experimental', (): void => {
    describe('Arrow', (): void => {
      describe('snapshots', (): void => {
        test('Default', (): void => {
          expect(renderer.create(<Default />).toJSON()).toMatchSnapshot();
        });

        test('Change', (): void => {
          expect(renderer.create(<Change />).toJSON()).toMatchSnapshot();
        });

        test('Directions', (): void => {
          expect(renderer.create(<Directions />).toJSON()).toMatchSnapshot();
        });

        test('Minimal', (): void => {
          expect(renderer.create(<Minimal />).toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});
