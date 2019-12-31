import React, { FC } from 'react';
import styled from 'styled-components';
import { types as elementTypes, Icon } from '..';
import { COLORS, TYPOGRAPHY } from '../../../tokens';

import * as types from './types';

const IconWrapBase = styled.div`
  padding-right: 8px;
  display: flex;
`;

const IconWrap = ({ type }: { type: elementTypes.Icon.shape }): JSX.Element => (
  <IconWrapBase>
    <Icon type={type} size="small" />
  </IconWrapBase>
);

const calcColor = ({ color, size }: types.CalcColorProps): string => {
  if (color === 'blue') {
    switch (size) {
      case 'small':
        return COLORS.blue.medium;
      case 'standard':
        return COLORS.blue.medium;
      case 'large':
        return COLORS.blue.dark;
      default:
        throw Error('Invalid title size');
    }
  }

  switch (size) {
    case 'small':
      return COLORS.grey.medium;
    case 'standard':
      return COLORS.grey.medium;
    case 'large':
      return COLORS.grey.dark;
    default:
      throw Error('Invalid title size');
  }
};

const Base = styled.div`
  color: ${({ color }): string => color || COLORS.grey.dark};
  display: flex;
  align-items: center;
`;

const MAP_TAGS = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};
const TextWrapper = (props: types.PassedProps): JSX.Element => {
  const { level, children, size, lineHeight } = props;
  const component = MAP_TAGS[level] as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  const Wrapper = styled[component]`
    margin: 0;
    font-family: ${TYPOGRAPHY.fonts.roboto};
    font-weight: ${TYPOGRAPHY.weights.black};
    font-size: ${TYPOGRAPHY.sizes[size]};
    letter-spacing: 0.3px;
    line-height: ${TYPOGRAPHY.lineHeights[lineHeight]};
  `;

  return <Wrapper>{children}</Wrapper>;
};

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const { level = 6, color = 'grey', size = 'standard', icon, children } = props;

  const passedProps: types.PassedProps = {
    level,
    size,
    lineHeight: size === 'small' ? 'small' : 'standard',
    children,
  };

  return (
    <Base color={calcColor({ color, size })}>
      {!!icon && <IconWrap type={icon} />}
      <TextWrapper {...passedProps} />
    </Base>
  );
};

export default Component;
