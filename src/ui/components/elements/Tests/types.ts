export type status = 'passed' | 'failed' | 'loading';
export interface Item {
  title: string;
  status: status;
}
export type getData = () => Promise<Item[]>;

export interface Props {
  /**
   * ...
   */
  getData: (() => Promise<{ title: string; status: 'passed' | 'failed' | 'loading' }[]>) | null;

  /**
   * ...
   */
  onDataLoad?: () => void;
}
