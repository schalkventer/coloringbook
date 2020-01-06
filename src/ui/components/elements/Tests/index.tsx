import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../../../tokens';
import * as types from './types';

const CustomText = `
font-size: 14px;
font-family: ${TYPOGRAPHY.fonts.storybook};
`;

const Message = styled.div`
  ${CustomText}
`;

const Item = styled.li`
  ${CustomText}
`;

const MAP_ICONS = {
  loading: '...',
  passed: '☑️',
  failed: '🆘',
};

export const Component: FC<types.Props> = (props: types.Props): JSX.Element => {
  const { getData, onDataLoad } = props;
  const [results, setResults] = useState<types.Item[]>([{ title: '', status: 'loading' }]);

  useEffect((): void => {
    if (getData) {
      getData()
        .then(setResults)
        .then(onDataLoad);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [getData, onDataLoad]);

  if (results.length < 1) {
    return <Message>No tests configured yet.</Message>;
  }

  return (
    <ul>
      {results.map(
        ({ title, status }): JSX.Element => (
          <Item key={title}>
            {MAP_ICONS[status]} {status !== 'loading' && '—'} {title}
          </Item>
        ),
      )}
    </ul>
  );
};

export default Component;
