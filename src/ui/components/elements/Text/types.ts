import { types as tokenTypes } from '../../../tokens';

export type type = 'blurb' | 'document' | 'fineprint';

export interface Props {
  children: string;
  color?: tokenTypes.colorSwatch;
  type?: type;
  characters?: number;
  underlines?: boolean;
}

export interface BaseProps {
  type: type;
  theme: tokenTypes.colorSwatch;
  hasLinebreak: boolean;
  underlines: boolean;
}

export interface CalcColorProps {
  theme: tokenTypes.colorSwatch;
  type: type;
}
