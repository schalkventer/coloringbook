import React, { Fragment } from 'react';
import {} from '@storybook/addon-knobs';
import Icon from '..';

export const Demo = (): JSX.Element => <Icon type="download" />;

export const Default = (): JSX.Element => <Icon type="download" />;

export const Sizes = (): JSX.Element => (
  <Fragment>
    <Icon type="download" size="small" />
    <Icon type="download" size="standard" />
    <Icon type="download" size="large" />
  </Fragment>
);

export const Shades = (): JSX.Element => (
  <Fragment>
    <Icon type="download" shade="light" />
    <Icon type="download" shade="standard" />
    <Icon type="download" shade="dark" />
  </Fragment>
);
