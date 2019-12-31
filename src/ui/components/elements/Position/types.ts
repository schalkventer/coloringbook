import { types as tokenTypes } from '../../../tokens';

export interface ProcessedGutters {
  /**
   * ...
   */
  top: tokenTypes.spacing | null;

  /**
   * ...
   */
  left: tokenTypes.spacing | null;

  /**
   * ...
   */
  right: tokenTypes.spacing | null;

  /**
   * ...
   */
  bottom: tokenTypes.spacing | null;
}

export interface Gutters extends ProcessedGutters {
  /**
   * ...
   */
  all: tokenTypes.spacing | null;

  /**
   * ...
   */
  horizontal: tokenTypes.spacing | null;

  /**
   * ...
   */
  vertical: tokenTypes.spacing | null;
}

export interface CreateStylesProps extends ProcessedGutters {
  isNegative: boolean;
  isMargins: boolean;
}

export interface Props extends Partial<Gutters> {
  /**
   * ...
   */
  children: JSX.Element | JSX.Element[] | null;

  /**
   * ...
   *
   *  @default false
   */
  isMargins?: boolean;

  /**
   * ...
   *
   *  @default false
   */
  isNegative?: boolean;

  /**
   * ...
   *
   *  @default false
   */
  center?: boolean;

  /**
   * ...
   *
   *  @default 'auto'
   */
  width?: 'full' | 'auto' | number;

  /**
   * ...
   *
   *  @default 'auto'
   */
  height?: 'full' | 'auto' | number;
}

export interface PassedProps extends ProcessedGutters {
  isMargins: boolean;
  isNegative: boolean;
  center: boolean;
  width: 'full' | 'auto' | number;
  height: 'full' | 'auto' | number;
  children: JSX.Element | JSX.Element[] | null | string;
}
