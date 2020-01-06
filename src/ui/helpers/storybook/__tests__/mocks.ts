export const jestFile = {
  testResults: [
    {
      assertionResults: [
        {
          // eslint-disable-next-line sonarjs/no-duplicate-string
          ancestorTitles: ['UI Components', 'Experimental', 'Component 1', 'snapshots'],
          status: 'failed',
          title: 'State 1',
        },
      ],
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['UI Components', 'Element', 'Component 1', 'snapshots'],
          status: 'passed',
          title: 'State 1',
        },
        {
          ancestorTitles: ['UI Components', 'Element', 'Component 1', 'snapshots'],
          status: 'passed',
          title: 'State 2',
        },
        {
          ancestorTitles: ['UI Components', 'Element', 'Component 1', 'helpers'],
          status: 'passed',
          title: 'State 1',
        },
      ],
    },
    {
      assertionResults: [
        {
          ancestorTitles: ['UI Components', 'Global', 'Helpers 1', 'helpers'],
          status: 'passed',
          title: 'State 1',
        },
      ],
    },
  ],
};
