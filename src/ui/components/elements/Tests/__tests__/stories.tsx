import React from 'react';
import {} from '@storybook/addon-knobs';
import * as types from '../types';
import Tests from '..';

const getDataMock = (): Promise<types.Item[]> =>
  Promise.resolve([
    {
      title: 'Example 1',
      status: 'passed' as types.status,
    },
    {
      title: 'Example 2',
      status: 'failed' as types.status,
    },
  ]);

export const Demo = (): JSX.Element => <Tests getData={getDataMock} />;

export const Default = (): JSX.Element => <Tests getData={getDataMock} />;

export const Loading = (): JSX.Element => <Tests getData={null} />;
