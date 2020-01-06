import { types as elementTypes } from '../../components/elements';

export type category = 'Elements' | 'Custom' | 'Views' | 'Experimental' | 'Global';

export interface Result {
  ancestorTitles: string[];
  title: string;
  status: elementTypes.Tests.status;
}

export interface Data {
  testResults: {
    assertionResults: Result[];
  }[];
}
export interface GetTestDataProps {
  /**
   * The type of category that the component is documented as. Specifying the category prevents two
   * different components with the same name conflicting. Should matach against value supplied in
   * `snapshot.test.tsx` or `helpers.test.tsx`. Global should be used for helpers that are not tied
   * to a specific component.
   */
  category: 'Elements' | 'Custom' | 'Views' | 'Experimental' | 'Global';

  /**
   * The name of the component that you want to retrieve tests for. Should matach against value
   * supplied in `snapshot.test.tsx` or `helpers.test.tsx`.
   */
  name: string;

  /**
   *  Whether it should retrieve component snapshot tests or helper unit tests. Should matach
   *  against either `'UI Component'` or `'Helpers'` as supplied in `snapshot.test.tsx` or
   *  `helpers.test.tsx`.
   */
  helpers: boolean;
}
