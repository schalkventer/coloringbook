import React, { FC } from 'react';
import * as types from '../types';

export const GetTestData: FC<types.GetTestDataProps> = (
  props: types.GetTestDataProps,
): JSX.Element => <div>{JSON.stringify(props)}</div>;
