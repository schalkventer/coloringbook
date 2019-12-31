import React, { FC } from 'react';
import styled from 'styled-components';
import Markdown, { ReactMarkdownProps } from 'react-markdown';

import { Typography as MuiTypography } from '@material-ui/core';

import * as types from './types';
import { Title } from '..';
import { COLORS, EDGES, TYPOGRAPHY, types as tokenTypes } from '../../../tokens';

const calcColor = ({ theme, type }: types.CalcColorProps): string => {
  if (theme === 'blue') {
    switch (type) {
      case 'fineprint':
        return COLORS.blue.dark;
      case 'blurb':
        return COLORS.blue.medium;
      case 'document':
        return COLORS.blue.dark;
      default:
        throw Error('Invalid text type');
    }
  }

  switch (type) {
    case 'fineprint':
      return COLORS.grey.dark;
    case 'blurb':
      return COLORS.grey.medium;
    case 'document':
      return COLORS.grey.dark;
    default:
      throw Error('Invalid text type');
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type calcHeadingReturn = (props: any) => JSX.Element;

const calcHeading = (theme: tokenTypes.colorSwatch): calcHeadingReturn => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any): JSX.Element => {
    const { level, children } = props;

    switch (level.toString()) {
      case '1':
        return (
          <Title size="large" color={theme}>
            {children[0].props.children}
          </Title>
        );

      case '2':
        return <Title color={theme}>{children[0].props.children}</Title>;

      default:
        return (
          <Title size="small" color={theme}>
            {children[0].props.children}
          </Title>
        );
    }
  };
};

const MAP_TO_SIZE = {
  fineprint: TYPOGRAPHY.sizes.tiny,
  blurb: TYPOGRAPHY.sizes.small,
  document: TYPOGRAPHY.sizes.standard,
};

const MAP_TO_LINE_HEIGHT = {
  fineprint: TYPOGRAPHY.lineHeights.small,
  blurb: TYPOGRAPHY.lineHeights.small,
  document: TYPOGRAPHY.lineHeights.standard,
};

// eslint-disable-next-line
const CustomBase = ({ underlines, hasLinebreak, ...otherProps }: types.BaseProps): JSX.Element => (
  <MuiTypography {...otherProps} component="div" />
);

type ExcludedProps = Omit<types.BaseProps, 'underlines' | 'hasLinebreak'>;

const Base = styled(CustomBase)<ExcludedProps>`
  && {
    word-break: break-word;
    margin: 0;
    text-align: inherit;
    font-family: ${({ type }): string =>
      type === 'fineprint' ? TYPOGRAPHY.fonts.verdana : TYPOGRAPHY.fonts.roboto};
    color: ${({ theme, type }): string => calcColor({ theme, type })};
    font-size: ${({ type }): string => MAP_TO_SIZE[type]};
    line-height: ${({ type }): string => MAP_TO_LINE_HEIGHT[type]};
    letter-spacing: 0.3px;

    & p {
      ${({ hasLinebreak }): string => (hasLinebreak ? '' : `margin: 0`)};
    }

    & a {
      text-decoration: ${({ underlines }): string => (underlines ? 'underline' : 'none')};
      color: ${({ theme, type }): string => calcColor({ theme, type })};

      &:hover {
        margin: -2px;
        padding: 2px;
        border-radius: ${EDGES.subtle};
        background: ${({ theme, type }): string => `${calcColor({ theme, type })}20`};
      }
    }
  }
`;

const calcTarget = (url: string): string => {
  const regex = new RegExp('(http|www)', 'i');
  const absoluteLink = regex.test(url);

  if (!absoluteLink) {
    return '_self';
  }

  return '_blank';
};

const calcIfHasLinebreak = (value: string): boolean => /\r|\n/m.test(value);

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const { children, color = 'grey', type = 'blurb', characters, underlines = true } = props;

  const source =
    characters && children.length > characters ? `${children.substr(0, characters)}...` : children;

  const hasLinebreak = calcIfHasLinebreak(children);

  const baseProps = {
    theme: color,
    type,
    underlines: underlines === true,
    component: 'div',
    hasLinebreak,
  };

  const markdownProps: ReactMarkdownProps = {
    source,
    linkTarget: calcTarget,
    renderers: {
      heading: calcHeading(color),
    },
  };

  return (
    <Base {...baseProps}>
      <Markdown {...markdownProps} />
    </Base>
  );
};

export default Component;
