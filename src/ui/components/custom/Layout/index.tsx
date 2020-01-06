import React, { FC } from 'react';
import styled from 'styled-components';
import { Base } from '../../elements';
import { Header, Footer } from '..';
import { SPACING } from '../../../tokens';
import * as types from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div<types.PassedProps>`
  flex-grow: 1;
  display: ${({ center }): string => (center ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  padding: ${SPACING.small} ${SPACING.standard} 150px ${SPACING.standard};
  @media screen and (min-width: 600px) {
    padding: ${SPACING.standard} ${SPACING.standard} 150px ${SPACING.standard};
  }
  @media screen and (min-width: 1000px) {
    padding: ${SPACING.large} ${SPACING.large} 150px ${SPACING.large};
  }
`;

const calcHeader = (value: JSX.Element | boolean): JSX.Element | null => {
  if (value === true) {
    return <Header />;
  }

  if (value === false) {
    return null;
  }

  return value;
};

const calcFooter = (value: JSX.Element | boolean): JSX.Element | null => {
  if (value === true) {
    return <Footer />;
  }

  if (value === false) {
    return null;
  }

  return value;
};

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const { children = null, center = false, footer = true, header = true } = props;

  const passedProps: types.PassedProps = {
    children,
    center,
  };

  return (
    <Base>
      <Wrapper>
        {calcHeader(header)}
        <Content {...passedProps} />
        {calcFooter(footer)}
      </Wrapper>
    </Base>
  );
};

export default Component;
