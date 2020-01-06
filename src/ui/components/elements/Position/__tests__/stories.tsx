import React, { Fragment } from 'react';
import styled from 'styled-components';
import {} from '@storybook/addon-knobs';
import Position from '..';

const Wrapper = styled.div`
  border: 1px dashed blue;
  display: inline-block;
`;

const Inner = styled.div`
  background: yellow;
  width: 100%;
  mix-blend-mode: multiply;
`;

export const Demo = (): JSX.Element => (
  <Wrapper>
    <Position>
      <Inner>Hello World!</Inner>
    </Position>
  </Wrapper>
);

export const Default = (): JSX.Element => (
  <Wrapper>
    <Position>
      <Inner>Hello World!</Inner>
    </Position>
  </Wrapper>
);

export const Spacing = (): JSX.Element => (
  <Fragment>
    <Wrapper>
      <Position top="tiny">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position top="small">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position top="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position top="large">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position top="huge">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>
  </Fragment>
);

export const Sides = (): JSX.Element => (
  <Fragment>
    <Wrapper>
      <Position top="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position right="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position bottom="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position left="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>
  </Fragment>
);

export const Shorthands = (): JSX.Element => (
  <Fragment>
    <Wrapper>
      <Position all="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position vertical="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>

    <Wrapper>
      <Position horizontal="standard">
        <Inner>Hello World!</Inner>
      </Position>
    </Wrapper>
  </Fragment>
);

export const Sizes = (): JSX.Element => (
  <Fragment>
    <div>
      <Position width="full">
        <Inner>Hello World!</Inner>
      </Position>
    </div>

    <div>
      <Position width="auto">
        <Inner>Hello World!</Inner>
      </Position>
    </div>

    <div>
      <Position width={100}>
        <Inner>Hello World!</Inner>
      </Position>
    </div>
  </Fragment>
);

export const Centered = (): JSX.Element => (
  <Wrapper>
    <Position width={300} height={300} center>
      <span style={{ background: 'yellow', display: 'inline-block' }}>Hello World!</span>
    </Position>
  </Wrapper>
);

export const Negative = (): JSX.Element => (
  <Wrapper>
    <Position all="standard" isNegative>
      <Inner>Hello World!</Inner>
    </Position>
  </Wrapper>
);
