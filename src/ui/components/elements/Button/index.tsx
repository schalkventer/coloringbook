import React, { MouseEvent, FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import {
  Button as MuiButton,
  Tooltip as MuiTooltip,
  CircularProgress as MuiLoader,
} from '@material-ui/core';

import * as types from './types';
import { COLORS, SPACING, EDGES, types as tokenTypes } from '../../../tokens';
import { Icon } from '..';

const Button = styled(MuiButton)<types.PassedProps>`
  && {
    position: relative;
    background: ${({ swatch }): string =>
      swatch === 'blue' ? COLORS.blue.dark : COLORS.grey.background};
    color: ${({ swatch }): string => (swatch === 'blue' ? 'white' : COLORS.grey.dark)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${SPACING.small} ${SPACING.standard};
    opacity: ${({ disabled }): number => (disabled ? 0.75 : 1)};

    &:hover {
      background: ${({ swatch }): string =>
        swatch === 'blue' ? darken(0.05, COLORS.blue.dark) : darken(0.05, COLORS.grey.background)};
    }
  }
`;

const Text = styled.span`
  padding-left: ${SPACING.small};
  padding-right: ${SPACING.small};
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const Fill = styled.div<{ swatch: tokenTypes.colorSwatch }>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ swatch }): string =>
    swatch === 'blue' ? COLORS.blue.dark : COLORS.grey.background};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${EDGES.visible};
`;

const Loader = styled(MuiLoader)<{ swatch: tokenTypes.colorSwatch }>`
  && {
    color: ${({ swatch }): string => (swatch === 'blue' ? 'white' : COLORS.grey.dark)};
  }
`;

const Loading = ({ swatch }: { swatch: tokenTypes.colorSwatch }): JSX.Element => (
  <Fill swatch={swatch}>
    <Loader swatch={swatch} size={18} />
  </Fill>
);

type loadingState = [boolean, false | number];

const calcLoadingState = (loading: number | boolean): loadingState => {
  if (typeof loading === 'number') {
    return [false, loading as number];
  }

  return [loading, false];
};

const calcTarget = (url: string): '_self' | '_blank' => {
  const regex = new RegExp('(http|www)', 'i');
  const absoluteLink = regex.test(url);

  if (!absoluteLink) {
    return '_self';
  }

  return '_blank';
};

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const {
    text,
    onClick,
    disabled = '',
    color = 'grey',
    icon,
    flipIcon = false,
    loading = false,
  } = props;

  const [loadingState, setLoadingState] = useState<loadingState>(calcLoadingState(loading));
  useEffect((): void => setLoadingState(calcLoadingState(loading)), [loading]);

  const handleClick = (event: MouseEvent): void => {
    const duration = loadingState[1];

    if (duration || duration === 0) {
      setLoadingState([true, duration]);

      if (duration !== 0) {
        setTimeout((): void => setLoadingState([false, duration]), duration);
      }
    }

    if (onClick && typeof onClick !== 'string') {
      // @ts-ignore
      onClick(event);
    }
  };

  const passedProps: types.PassedProps = {
    swatch: color,
    target: typeof onClick === 'string' ? calcTarget(onClick) : undefined,
    href: typeof onClick === 'string' ? (onClick as string) : undefined,
    variant: 'contained',
    disabled: !!disabled || loadingState[0],
    onClick: handleClick,
  };

  if (icon && !text) {
    return (
      <MuiTooltip title={disabled}>
        <Wrapper>
          <Button {...passedProps}>
            {!!icon && <Icon type={icon} shade="dark" />}
            {loadingState[0] && <Loading swatch={color} />}
          </Button>
        </Wrapper>
      </MuiTooltip>
    );
  }

  if (icon) {
    return (
      <MuiTooltip title={disabled}>
        <Wrapper>
          <Button {...passedProps}>
            {!!icon && !flipIcon && <Icon type={icon} size="small" shade="dark" />}
            <Text>{text}</Text>
            {!!icon && !!flipIcon && <Icon type={icon} size="small" shade="dark" />}
            {loadingState[0] && <Loading swatch={color} />}
          </Button>
        </Wrapper>
      </MuiTooltip>
    );
  }

  return (
    <MuiTooltip title={disabled}>
      <Wrapper>
        <Button {...passedProps}>
          <span>{text}</span>
          {loadingState[0] && <Loading swatch={color} />}
        </Button>
      </Wrapper>
    </MuiTooltip>
  );
};

export default Component;
