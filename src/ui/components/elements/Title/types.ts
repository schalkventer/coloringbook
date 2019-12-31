import { types as tokenTypes } from '../../../tokens';
import { types as elementTypes } from '..';

export type level = 1 | 2 | 3 | 4 | 5 | 6;

export type size = 'small' | 'standard' | 'large';

export interface Props {
  children: string;
  level?: level;
  color?: tokenTypes.colorSwatch;
  size?: size;
  icon?: elementTypes.Icon.shape;
}
export interface PassedProps {
  level: level;
  children: string;
  size: size;
  lineHeight: tokenTypes.lineHeight;
}

export interface CalcColorProps {
  color: tokenTypes.colorSwatch;
  size: size;
}
