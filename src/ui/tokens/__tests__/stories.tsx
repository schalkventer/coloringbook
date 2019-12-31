import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { COLORS, EDGES, SPACING, ANIMATIONS, TYPOGRAPHY, types as tokenTypes } from '..';

const Title = styled.div`
  font-family: monospace;
  line-height: 1;
  margin: 0 2px;
  padding: 3px 5px;
  white-space: nowrap;
  border-radius: 3px;
  font-size: 13px;
  border: 1px solid #eeeeee;
  color: rgba(51, 51, 51, 0.9);
  background-color: #f8f8f8;
  margin-bottom: 0.5rem;
`;

interface BlockProps {
  spacing: tokenTypes.spacing;
  color: tokenTypes.colorSwatch;
  edges: tokenTypes.edge;
}

const Block = styled.div<BlockProps>`
  width: ${({ spacing }): string => spacing || '100%'};
  height: 100px;
  background: ${({ color }): string => color || 'white'};
  border-radius: ${({ edges }): string => edges || '0'};
  border: 1px solid ${({ edges, spacing }): string => (edges || spacing ? 'black' : 'transparent')};
`;

interface TextProps {
  fontSize: tokenTypes.fontSize;
  font: tokenTypes.font;
  fontWeight: tokenTypes.fontWeight;
  lineHeight: tokenTypes.lineHeight;
}

const Text = styled.p<TextProps>`
  width: 100%;
  height: 100px;
  margin: 0;
  color: ${COLORS.grey.dark};
  font-size: ${({ fontSize }): string => fontSize || '16px'};
  font-family: ${({ font }): string => font || TYPOGRAPHY.fonts.roboto};
  font-weight: ${({ fontWeight }): string => fontWeight || TYPOGRAPHY.weights.standard};
  line-height: ${({ lineHeight }): string => lineHeight || TYPOGRAPHY.lineHeights.standard};
  letter-spacing: 0.3px;
`;

const Base = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Animation = styled.div`
  border: 1px solid black;
  cursor: pointer;
  width: 100px;
  height: 100px;
`;

interface AnimationWrapperProps {
  type: tokenTypes.animations;
  action: any;
  onClick: any;
}

const AnimationWrapper = ({ type, active, onClick }): JSX.Element => {
  const popAnimation = useSpring(active ? ANIMATIONS.pop[1] : ANIMATIONS.pop[0]);
  const fadeAnimation = useSpring(active ? ANIMATIONS.fade[1] : ANIMATIONS.fade[0]);

  const animations = {
    pop: popAnimation,
    fade: fadeAnimation,
  };

  return (
    <animated.div style={animations[type]}>
      <Animation onClick={onClick} />
    </animated.div>
  );
};

interface SampleProps {
  title: string;
  spacing: tokenTypes.spacing;
  color: tokenTypes.colorSwatch;
  edges: tokenTypes.edge;
  fontSize: tokenTypes.fontSize;
  font: tokenTypes.font;
  fontWeight: tokenTypes.fontWeight;
  lineHeight: tokenTypes.lineHeight;
}

const Sample = (props: SampleProps): JSX.Element => {
  const { title, ...values } = props;
  const [toggle, setToggle] = useState(true);

  if (values.color || values.edges || values.spacing) {
    return (
      <Base>
        <Title>{title}</Title>
        <Block {...values} />
      </Base>
    );
  }

  if (values.font || values.fontSize || values.fontWeight || values.lineHeight) {
    return (
      <Base>
        <Title>{title}</Title>
        <Text {...values}>The quick brown fox jumps over the lazy dog.</Text>
      </Base>
    );
  }

  return (
    <Base>
      <Title>{title}</Title>
      <AnimationWrapper
        type={values.animation}
        active={toggle}
        onClick={(): void => setToggle(!toggle)}
      />
    </Base>
  );
};

export const Colors = (): JSX.Element => (
  <Grid>
    <Sample title="COLORS.grey.dark" color={COLORS.grey.dark} />
    <Sample title="COLORS.grey.medium" color={COLORS.grey.medium} />
    <Sample title="COLORS.grey.light" color={COLORS.grey.light} />
    <Sample title="COLORS.grey.background" color={COLORS.grey.background} />
    <Sample title="COLORS.blue.dark" color={COLORS.blue.dark} />
    <Sample title="COLORS.blue.medium" color={COLORS.blue.medium} />
    <Sample title="COLORS.blue.light" color={COLORS.blue.light} />
    <Sample title="COLORS.blue.background" color={COLORS.blue.background} />
  </Grid>
);

export const Spacing = (): JSX.Element => (
  <Grid>
    <Sample title="SPACING.tiny" spacing={SPACING.tiny} />
    <Sample title="SPACING.small" spacing={SPACING.small} />
    <Sample title="SPACING.standard" spacing={SPACING.standard} />
    <Sample title="SPACING.large" spacing={SPACING.large} />
    <Sample title="SPACING.huge" spacing={SPACING.huge} />
  </Grid>
);

export const Edges = (): JSX.Element => (
  <Grid>
    <Sample title="EDGES.subtle" edges={EDGES.subtle} />
    <Sample title="EDGES.visible" edges={EDGES.visible} />
    <Sample title="EDGES.circle" edges={EDGES.circle} />
  </Grid>
);

export const Animations = (): JSX.Element => (
  <Grid>
    <Sample title="ANIMATIONS.pop" animation="pop" />
    <Sample title="ANIMATIONS.fade" animation="fade" />
  </Grid>
);

export const Fonts = (): JSX.Element => (
  <Grid>
    <Sample title="TYPOGRAPHY.fonts.roboto" font={TYPOGRAPHY.fonts.roboto} />
    <Sample title="TYPOGRAPHY.fonts.verdana" font={TYPOGRAPHY.fonts.verdana} />
  </Grid>
);

export const FontSizes = (): JSX.Element => (
  <Grid>
    <Sample title="TYPOGRAPHY.sizes.tiny" fontSize={TYPOGRAPHY.sizes.tiny} />
    <Sample title="TYPOGRAPHY.sizes.small" fontSize={TYPOGRAPHY.sizes.small} />
    <Sample title="TYPOGRAPHY.sizes.standard" fontSize={TYPOGRAPHY.sizes.standard} />
    <Sample title="TYPOGRAPHY.sizes.large" fontSize={TYPOGRAPHY.sizes.large} />
    <Sample title="TYPOGRAPHY.sizes.huge" fontSize={TYPOGRAPHY.sizes.huge} />
  </Grid>
);

export const FontWeights = (): JSX.Element => (
  <Grid>
    <Sample title="TYPOGRAPHY.weights.standard" fontWeight={TYPOGRAPHY.weights.standard} />
    <Sample title="TYPOGRAPHY.weights.semibold" fontWeight={TYPOGRAPHY.weights.semibold} />
    <Sample title="TYPOGRAPHY.weights.black" fontWeight={TYPOGRAPHY.weights.black} />
  </Grid>
);

export const LineHeights = (): JSX.Element => (
  <Grid>
    <Sample title="TYPOGRAPHY.lineHeights.small" lineHeight={TYPOGRAPHY.lineHeights.small} />
    <Sample title="TYPOGRAPHY.lineHeights.standard" lineHeight={TYPOGRAPHY.lineHeights.standard} />
    <Sample title="TYPOGRAPHY.lineHeights.large" lineHeight={TYPOGRAPHY.lineHeights.large} />
  </Grid>
);
