import { types as tokenTypes } from '../../../tokens';

export interface ProcessedGutters {
  /**
   * Sets the amount of spacing that should be applied to the top of the component. Note if a
   * shorthand value is passed it might override the value supplied here.
   *
   * @default 'none'
   */
  top: tokenTypes.spacing;

  /**
   * Sets the amount of spacing that should be applied to the right of the component. Note if a
   * shorthand value is passed it might override the value supplied here.
   *
   * @default 'none'
   */
  right: tokenTypes.spacing;

  /**
   * Sets the amount of spacing that should be applied to the bottom of the component. Note if a
   * shorthand value is passed it might override the value supplied here.
   *
   * @default 'none'
   */
  bottom: tokenTypes.spacing;

  /**
   * Sets the amount of spacing that should be applied to the left of the component. Note if a
   * shorthand value is passed it might override the value supplied here.
   *
   * @default 'none'
   */
  left: tokenTypes.spacing;
}

export interface Gutters extends ProcessedGutters {
  /**
   * A shorthand value that will apply a specific amount of spacing to all sides of the component.
   * This value will always override any spacing applied individual to `top`, `right`, `bottom` or
   * `left`.
   */
  all: tokenTypes.spacing | null;

  /**
   * A shorthand value that will apply a specific amount of spacing to the `left` and `right` of the
   * component. This value will always override any spacing applied individual to right` or `left`.
   */
  horizontal: tokenTypes.spacing | null;

  /**
   * A shorthand value that will apply a specific amount of spacing to the `left` and `right` of the
   * component. This value will always override any spacing applied individual to `top` or `bottom`.
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
   * Uses CSS margins for spacing instead of CSS padding. Padding is used by default to prevent
   * [margin
   * collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
   * from occuring, however there are instances where you want margin collapse to occur (for example
   * when spacing paragraphs).
   *
   * @default false
   */
  isMargins?: boolean;

  /**
   *  Instead of pushing contents inside component further into the component (away from the
   *  outside), if set true then negative margins will be applied, thereby actually taking content
   *  out of the confines of the component (makes larger than component). This is helpful if you are
   *  creating a Grid container that should compensate for the padding arround items inside it.
   *
   *  @default false
   */
  isNegative?: boolean;

  /**
   *  If set to true then contents inside the component will always be centered vertically and
   *  horizontally.
   *
   *  @default false
   */
  center?: boolean;

  /**
   *  Forces the width of the component to a certain size (passed as pixels). If you want the
   *  component to stretch and fill 100% of the available space you can pass `'fill'`.
   *  Alternatively, if you pass `auto`, the component's CSS display property will be set to
   *  `inline-flex` - meaning that it will simply assume the width of the contents inside it.
   *
   *  @default 'auto'
   */
  width?: 'full' | 'auto' | number;

  /**
   *  Forces the height of the component to a certain size (passed as pixels). If you want the
   *  component to stretch and fill 100% of the available space you can pass `'full'`.
   *  Alternatively, if you pass `auto`, the component's CSS display property will be set to
   *  `inline-flex` - meaning that it will simply assume the width of the contents inside it.
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
