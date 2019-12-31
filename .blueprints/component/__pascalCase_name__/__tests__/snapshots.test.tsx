import React from 'react';
import renderer from 'react-test-renderer';
import { Default } from './stories';

test('Demo', (): void => expect(renderer.create(<Default />).toJSON()).toMatchSnapshot());
