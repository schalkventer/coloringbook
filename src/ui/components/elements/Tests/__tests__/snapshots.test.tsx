import React from 'react';
import { create } from 'react-test-renderer';
import { Default } from './stories';
import 'jest-styled-components';

// ⚙️ Elements
// 🔨 Custom
// 📺 Views

describe('UI Components', (): void => {
  describe('Elements', (): void => {
    describe('Tests', (): void => {
      describe('snapshots', (): void => {
        test('Default', (): void => {
          expect(create(<Default />).toJSON()).toMatchSnapshot();
        });
      });
    });
  });
});
