export type direction = 'right' | 'down' | 'left' | 'up';

export interface Props {
  /**
   * Determines the direction that the arrow if facing.
   *
   * @default 'right'
   */
  direction?: direction;
  /**
   * Determines the direction that the arrow will animate into when the direction changes. Default
   * is set to `false`, which means that animation will happen clockwise. However, if set to `true`
   * then animation will happen counter-clockwise.
   *
   *  @default false
   */
  reverse?: boolean;
  /**
   * Whether to use a more subtle shape of the arrow (without a stem). The minimal version should be
   * used when click will toggle new/additional information being surfaced (for example: navigating
   * to new/previous page, opening/closing an accordian).
   *
   * @default false
   */
  minimal?: boolean;
}

export interface PassedProps {
  direction: direction;
  reverse: boolean;
  minimal: boolean;
}
