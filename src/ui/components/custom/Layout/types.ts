export interface Props {
  center?: boolean;
  children: JSX.Element | null | false | (JSX.Element | null | false)[];
  header?: JSX.Element | boolean;
  footer?: JSX.Element | boolean;
}

export interface PassedProps {
  center?: boolean;
  children: JSX.Element | null | false | (JSX.Element | null | false)[];
}
