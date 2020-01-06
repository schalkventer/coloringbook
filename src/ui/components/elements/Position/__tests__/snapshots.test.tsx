import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Default, Negative, Shorthands, Sides, Sizes, Spacing } from './stories';

describe('UI Components', (): void => {
  describe('Elements', (): void => {
    describe('Position', (): void => {
      describe('snapshots', (): void => {
        test('Default', (): void => {
          expect(renderer.create(<Default />).toJSON()).toMatchSnapshot();
        });

        test('Change', (): void => {
          expect(renderer.create(<Negative />).toJSON()).toMatchSnapshot();
        });

        test('Demo', (): void => {
          expect(renderer.create(<Shorthands />).toJSON()).toMatchSnapshot();
        });

        test('Directions', (): void => {
          expect(renderer.create(<Sides />).toJSON()).toMatchSnapshot();
        });

        test('Minimal', (): void => {
          expect(renderer.create(<Sizes />).toJSON()).toMatchSnapshot();
        });

        test('Spacing', (): void => {
          expect(renderer.create(<Spacing />).toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});
