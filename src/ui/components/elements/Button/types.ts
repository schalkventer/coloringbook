import { MouseEvent } from 'react';
import { types as tokenTypes } from '../../../tokens';
import { types as elementTypes } from '..';

export interface Props {
  /**
   * An action that should be performed when the button is clicked. This prop is required since
   * buttons need to correspond to UI actions. If a function is passed then it will be considered as
   * a callback (meaning that the function will execute when the button is clicked). If a string is
   * passed then the button will regard the value as an URL and the page will navigate to the URL
   * when the button is clicked. Note that all relative URLS (i.e. `/from-domain` or
   * `../from-current-page`) will open in the same window, however external links (i.e.
   * `https://google.com` or `www.facebook/com`) will open in a new tab.
   */
  onClick: string | ((event: Event) => void);

  /**
   * The text that should be displayed in the button. It is recommended that this be a verb (i.e.
   * 'download', 'submit' or 'login'). In addition it is recommended that the text used in the
   * button be as concise/short as possible, since a user should be able to understand buttons at a
   * glance.
   */
  text?: string;

  /**
   * Determines the color that the button should be rendered in. The majority of buttons in this
   * project should be `'grey'`, however `'blue'` buttons can be used to draw attention to a
   * specific action. This is helpful to highlight a call to action or the next assumed action that
   * the user will take. Take care to not have more than one `'blue'` button on the screen at once,
   * since this can create a lot of visual noise.
   *
   * @default 'grey'
   */
  color?: tokenTypes.colorSwatch;

  /**
   * Accepts the name of a predefined icon used in this product. If an invalid icon name is supplied
   * the component will throw an error.
   */
  icon?: elementTypes.Icon.shape;

  /**
   * If set to true and an value is passed to the `icon` prop, then the icon will be displayed after
   * the text inside of the button (instead of the default left position). This is useful when you
   * have, for example, pagination with both a "Previous" and "Next" button, and you want the
   * right-facing arrow icon to be on the right side of the "Next" button.
   *
   * @default false
   */
  flipIcon?: boolean;

  /**
   * If a string value is defined the button will be set as disabled, and will not be clickable (and be
   * greyed out in UI). A string needs to be passed to this value as the reason for why it is
   * disable (it will be shown as a tooltip if Button is hovered over). I.e. 'Invalid value entered'
   * on a submit button or 'Premium profile required' for actions that are associated with premium
   * profiles. If an empty string (i.e. `''`) is passed, then the button will be considered as active.
   *
   * @default ''
   */
  disabled?: string;

  /**
   * If set to true then a loading spinner will be overlayed over the button (also setting the
   * button to disabled). Used to indicate that the button is currently processing an action or that
   * the dependancies of the button are still being bootstrapped. If a boolean is passed then the
   * loading state will be hardcoded to that value. However, if a number is passed the button will
   * display a loading spinner for that amount of milliseconds after it has been pressed. If `0` is
   * passed then the loader will spin infinitely without end after clicked. This is useful if you
   * have a button that navigates to a new page and provide the user with feedback that the new page
   * is currently loading.
   *
   * @default false
   */
  loading?: boolean | number;
}

export interface PassedProps {
  swatch: tokenTypes.colorSwatch;
  target: '_self' | '_blank' | undefined;
  href: string | undefined;
  variant: 'contained';
  disabled: boolean;
  onClick: (event: MouseEvent) => void;
}
