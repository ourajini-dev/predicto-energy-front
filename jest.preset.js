const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!lodash-es/*)'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['json-summary', 'html', 'lcovonly'],
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['.facade.ts', '/node_modules/'],
  maxWorkers: Math.ceil(require('os').cpus().length / 2),
};
