import React, { FC } from 'react';
import { CloudDownload } from '@material-ui/icons';
import * as types from './types';

export const MAP_MUI_ICONS = {
  download: CloudDownload,
};

const MAP_SIZES = {
  small: 13,
  standard: 24,
  large: 50,
};

const MAP_SHADE = {
  light: 0.2,
  standard: 0.5,
  dark: 1,
};

export const Icon: FC<types.Props> = (props: types.Props): JSX.Element => {
  const { type, size = 'standard', shade = 'standard' } = props;

  const Component = MAP_MUI_ICONS[type];

  if (!Component) {
    throw new Error(`"${type}" is not a valid icon type`);
  }

  const style = {
    width: `${MAP_SIZES[size]}px`,
    height: `${MAP_SIZES[size]}px`,
    opacity: MAP_SHADE[shade],
  };

  return <Component style={style} />;
};

export default Icon;
