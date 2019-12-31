import React, { Fragment } from 'react';
import {} from '@storybook/addon-knobs';
import Title from '..';

export const Demo = (): JSX.Element => <Title level={6}>Hello World!</Title>;

export const Default = (): JSX.Element => <Title level={6}>Hello World!</Title>;

export const Sizes = (): JSX.Element => (
  <Fragment>
    <Title level={6} color="grey" size="small">
      Hello World!
    </Title>
    <Title level={6} color="grey" size="standard">
      Hello World!
    </Title>
    <Title level={6} color="grey" size="large">
      Hello World!
    </Title>
    <Title level={6} color="blue" size="small">
      Hello World!
    </Title>
    <Title level={6} color="blue" size="standard">
      Hello World!
    </Title>
    <Title level={6} color="blue" size="large">
      Hello World!
    </Title>
  </Fragment>
);

export const Icon = (): JSX.Element => (
  <Fragment>
    <Title level={1} icon="download">
      Hello World!
    </Title>
    <Title level={1} icon="download" color="blue">
      Hello World!
    </Title>
  </Fragment>
);

export const Levels = (): JSX.Element => (
  <Fragment>
    <Title level={1}>Hello World!</Title>
    <Title level={2}>Hello World!</Title>
    <Title level={3}>Hello World!</Title>
    <Title level={4}>Hello World!</Title>
    <Title level={5}>Hello World!</Title>
    <Title level={6}>Hello World!</Title>
  </Fragment>
);
