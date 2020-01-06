import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Default, Actions, Colors, Disabled, Icon, Loading } from './stories';

describe('UI Components', (): void => {
  describe('Elements', (): void => {
    describe('Button', (): void => {
      describe('snapshots', (): void => {
        test('Default', (): void => {
          expect(renderer.create(<Default />).toJSON()).toMatchSnapshot();
        });

        test('Actions', (): void => {
          expect(renderer.create(<Actions />).toJSON()).toMatchSnapshot();
        });

        test('Colors', (): void => {
          expect(renderer.create(<Colors />).toJSON()).toMatchSnapshot();
        });

        test('Disabled', (): void => {
          expect(renderer.create(<Disabled />).toJSON()).toMatchSnapshot();
        });

        test('Icon', (): void => {
          expect(renderer.create(<Icon />).toJSON()).toMatchSnapshot();
        });

        test('Loading', (): void => {
          expect(renderer.create(<Loading />).toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});
