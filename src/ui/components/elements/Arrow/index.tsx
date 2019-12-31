import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowForward, ArrowForwardIos } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';
import * as types from './types';

const MAP_ROTATE = {
  right: 0,
  left: 180,
  up: 270,
  down: 90,
};

const Wrapper = styled(animated.div)`
  display: inline-flex;
`;

const BUTTON_BASE_STYLE = `
	opacity: 0.2;
	width: 13px;
	height: 13px;
`;

const Standard = styled(ArrowForward)`
  ${BUTTON_BASE_STYLE}
`;

const Minimal = styled(ArrowForwardIos)`
  ${BUTTON_BASE_STYLE}
`;

const calcNewPosition = ({ direction, reverse }: types.PassedProps): number =>
  MAP_ROTATE[direction] * (reverse ? -1 : 1);

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const { direction = 'right', reverse = false, minimal = false } = props;

  const passedProps: types.PassedProps = {
    direction,
    reverse,
    minimal,
  };

  const animatedStyle = useSpring({ transform: `rotate(${calcNewPosition(passedProps)}deg)` });

  return <Wrapper style={animatedStyle}>{!minimal ? <Standard /> : <Minimal />}</Wrapper>;
};

export default Component;
