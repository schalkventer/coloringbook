import React, { Fragment, FC } from 'react';
import { CssBaseline } from '@material-ui/core';
import Helmet from 'react-helmet';
import * as types from './types';

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const { children } = props;

  return (
    <Fragment>
      <Helmet>
        <title>Storybook on Steroids</title>
      </Helmet>
      <CssBaseline />
      {children}
    </Fragment>
  );
};

export default Component;
