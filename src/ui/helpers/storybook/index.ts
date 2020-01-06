import axios from 'axios';
import { pick } from 'lodash';
import * as types from './types';
import { types as elementTypes } from '../../components/elements';

const TESTS_FILE = '/jest-results.json';

const flattenResponse = (
  result = [] as types.Result[],
  { assertionResults }: { assertionResults: types.Result[] },
): types.Result[] => [...result, ...assertionResults];

interface PropsFromReduce {
  ancestorTitles: string[];
}

const createCalcCondition = (
  props: types.GetTestDataProps,
): ((innerProps: PropsFromReduce) => boolean) => {
  return ({ ancestorTitles }: PropsFromReduce): boolean => {
    const { category, name, helpers } = props;

    if (helpers) {
      return (
        ancestorTitles.includes(name) &&
        ancestorTitles.includes(category) &&
        ancestorTitles.includes('helpers')
      );
    }

    return ancestorTitles.includes(name) && ancestorTitles.includes(category);
  };
};

export const getUnitTestData = (props: types.GetTestDataProps): elementTypes.Tests.getData => {
  return async (): Promise<elementTypes.Tests.Item[]> => {
    const response = await axios.get<types.Data>(TESTS_FILE);

    const flattened = response.data.testResults.reduce(flattenResponse, [] as types.Result[]);
    const calcCondition = createCalcCondition(props);
    const filtered = flattened.filter(calcCondition) as types.Result[];

    return filtered.map(
      (object: types.Result): elementTypes.Tests.Item => pick(object, ['title', 'status']),
    );
  };
};

export default { flattenResponse };
