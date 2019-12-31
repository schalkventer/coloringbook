import React, { Fragment, useState } from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import * as types from '../types';
import Arrow from '..';

export const Demo = (): JSX.Element => (
  <Arrow
    minimal={boolean('Minimal', false)}
    reverse={boolean('Reverse', false)}
    direction={select('Direction', ['right', 'down', 'left', 'up'], 'right')}
  />
);

export const Default = (): JSX.Element => <Arrow />;

export const Minimal = (): JSX.Element => <Arrow minimal />;

export const Directions = (): JSX.Element => (
  <Fragment>
    <Arrow direction="right" />
    <Arrow direction="down" />
    <Arrow direction="left" />
    <Arrow direction="up" />
  </Fragment>
);

const KEYS: types.direction[] = ['right', 'down', 'left', 'up'];

export const Change = (): JSX.Element => {
  const [direction, setDirection] = useState<number>(0);
  const onClick = (): void => setDirection(direction >= 3 ? 0 : direction + 1);

  return (
    <Fragment>
      <div>
        <button onClick={onClick} type="button">
          Change
        </button>
      </div>
      <Arrow direction={KEYS[direction]} />
      <Arrow direction={KEYS[direction]} reverse />
    </Fragment>
  );
};
