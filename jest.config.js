// Documentation for the Jest configuration (used by this file) at https://jestjs.io/docs/en/configuration.html and https://www.gatsbyjs.org/docs/unit-testing/

/**
 * Configures the location of a NodeJS scripts that should be run before testing of `.ts`/`.tsx` files);
 */
const transform = {
  '^.+\\.tsx?$': 'ts-jest',
};

/**
 * Regular expression that instructs Jest to consider all files in all files that end in one of the
 * following as unit tests:
 * - `.test.ts`
 * - `.test.tsx`
 */
const testRegex = 'src/.*\\.test\\.(tsx?)';

/**
 * Folders to ignore when running Jest
 */
const testPathIgnorePatterns = ['node_modules', '.cache', '.history'];

/**
 * Configuration file to pass to Jest
 */
const config = {
  transform,
  testRegex,
  testPathIgnorePatterns,
};

module.exports = config;
