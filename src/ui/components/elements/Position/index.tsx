import React, { FC } from 'react';
import styled from 'styled-components';
import * as types from './types';
import { SPACING } from '../../../tokens';

const createGutterValues = (props: types.Gutters): types.ProcessedGutters => {
  const {
    all = null,
    horizontal = null,
    vertical = null,
    top = null,
    left = null,
    right = null,
    bottom = null,
  } = props;

  if (all) {
    return {
      top: all,
      right: all,
      bottom: all,
      left: all,
    };
  }

  if (horizontal) {
    return {
      top,
      right: horizontal,
      bottom,
      left: horizontal,
    };
  }

  if (vertical) {
    return {
      top: vertical,
      right,
      bottom: vertical,
      left,
    };
  }

  return {
    top,
    right,
    bottom,
    left,
  };
};

const createGutterStyles = (props: types.CreateStylesProps): string => {
  const { isNegative, isMargins, bottom, left, right, top } = props;
  const isMargin = isMargins || isNegative;
  const property = isMargin ? 'margin' : 'padding';

  const array = [
    !!top && `${property}-top: ${isNegative ? '-' : ''}${SPACING[top]}`,
    !!right && `${property}-right: ${isNegative ? '-' : ''}${SPACING[right]}`,
    !!bottom && `${property}-bottom: ${isNegative ? '-' : ''}${SPACING[bottom]}`,
    !!left && `${property}-left: ${isNegative ? '-' : ''}${SPACING[left]}`,
  ];

  return array.filter((value): boolean => !!value).join(';');
};

const calcMeasurement = (width: 'full' | 'auto' | number): string => {
  if (width === 'full') {
    return '100%';
  }

  if (width) {
    return `${width}px`;
  }

  return 'auto';
};

const Base = styled.div<types.PassedProps>`
  display: inline-flex;
  width: ${({ width }): string => calcMeasurement(width)};
  height: ${({ height }): string => calcMeasurement(height)};
  justify-content: ${({ center }): string => (center ? 'center' : 'flex-start')};
  align-items: ${({ center }): string => (center ? 'center' : 'flex-start')};
  ${({ isNegative, isMargins, bottom, left, right, top }): string =>
    createGutterStyles({ isNegative, isMargins, bottom, left, right, top })};
`;

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const {
    isMargins = false,
    isNegative = false,
    children = null,
    width = 'auto',
    height = 'auto',
    center = false,
    all = null,
    horizontal = null,
    vertical = null,
    top = null,
    left = null,
    right = null,
    bottom = null,
  } = props;

  const positions = createGutterValues({ all, horizontal, vertical, top, left, right, bottom });

  const passedProps: types.PassedProps = {
    ...positions,
    isMargins,
    isNegative,
    width,
    height,
    center,
    children,
  };

  return <Base {...passedProps} />;
};

export default Component;
