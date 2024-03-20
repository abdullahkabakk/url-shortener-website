import type { Config } from '@jest/types';

// Jest configuration options
const config: Config.InitialOptions = {
  // Clear mock calls between every test
  clearMocks: true,

  // Enable collecting code coverage information
  collectCoverage: true,

  // Directory where coverage information will be stored
  coverageDirectory: 'coverage',

  // Root directory for the project
  rootDir: './src',

  // Specify the preset used for the TypeScript compiler
  preset: 'ts-jest',

  // Specify the test environment
  testEnvironment: 'node',

  // List of file extensions Jest should look for
  moduleFileExtensions: ['ts', 'js', 'json'],

  // Regular expression pattern Jest uses to find test files
  // This matches any file containing .spec.ts regardless of its location
  testRegex: '(/|\\\\).*\\.spec\\.ts$',

  // Display verbose output during test execution
  verbose: true,
};

// Export Jest configuration
export default config;
