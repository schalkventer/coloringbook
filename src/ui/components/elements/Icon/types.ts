export type shape = 'download';

export type scale = 'small' | 'standard' | 'large';

export type shade = 'light' | 'standard' | 'dark';

export interface Props {
  /**
   * Accepts the name of predefined icon. If an invalid icon name is supplied the component will
   * throw an error.
   */
  type: shape;

  /**
   * The size that the icon should be rendered at.
   */
  size?: scale;
  shade?: shade;
}
