import React, { Fragment } from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { types as elementTypes } from '../..';
import Button from '..';

export const Demo = (): JSX.Element => {
  const color = select('color', ['grey', 'blue'], 'grey');
  const textValue = text('text', 'Hello World!');
  const icon = select('icon', ['NONE', 'download'], 'NONE');
  const flipIcon = boolean('flipIcon', false);
  const disabled = text('disabled', '');
  const loading = select('loading', ['false', 'true', '0', '500', '6000'], 'false');

  const ICON_MAP: { [key: string]: elementTypes.Icon.shape | undefined } = {
    NONE: undefined,
    download: 'download',
  };

  const LOADING_MAP = {
    false: false,
    true: true,
    '0': 0,
    '500': 500,
    '6000': 6000,
  };

  return (
    <Button
      onClick={action('onClick')}
      color={color}
      icon={ICON_MAP[icon]}
      flipIcon={flipIcon}
      disabled={disabled}
      loading={LOADING_MAP[loading]}
      text={textValue}
    />
  );
};

export const Default = (): JSX.Element => (
  <Button onClick={action('onClick')} text="Hello World!">
    Hello World!
  </Button>
);

export const Colors = (): JSX.Element => (
  <Fragment>
    <Button onClick={action('onClick')} color="grey" text="Hello World!" />
    <Button onClick={action('onClick')} color="blue" text="Hello World!" />
  </Fragment>
);

export const Disabled = (): JSX.Element => (
  <Button
    onClick={action('onClick')}
    disabled="The reason why this is disabled"
    text="Hello World!"
  />
);

export const Icon = (): JSX.Element => (
  <div style={{ display: 'flex' }}>
    <Button onClick={action('onClick')} icon="download" />
    <Button onClick={action('onClick')} icon="download" text="Hello World!" />
    <Button onClick={action('onClick')} icon="download" flipIcon text="Hello World!" />
  </div>
);

export const Loading = (): JSX.Element => (
  <Fragment>
    <Button onClick={action('onClick')} loading text="Hello World!" />
    <Button onClick={action('onClick')} loading={1000} text="Hello World!" />
    <Button onClick={action('onClick')} loading={0} text="Hello World!" />
  </Fragment>
);

export const Actions = (): JSX.Element => (
  <Fragment>
    <Button onClick={action('onClick')} text="Hello World!" />
    <Button onClick="/example" text="Hello World!" />
    <Button onClick="https://www.google.com" text="Hello World!" />
  </Fragment>
);
