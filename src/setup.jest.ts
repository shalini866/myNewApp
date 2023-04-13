import 'jest-preset-angular/setup-jest';

// import type { Config } from 'jest';
// import snapshotSerializers from 'jest-preset-angular/presets';

// const jestConfig: Config = {
//   moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
//   resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
//   snapshotSerializers,
//   testEnvironment: 'jsdom',
//   transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
//   transform: {
//     '^.+\\.(ts|js|mjs|html|svg)$': [
//       'jest-preset-angular',
//       {
//         tsconfig: '<rootDir>/tsconfig.spec.json',
//         stringifyContentPathRegex: '\\.(html|svg)$',
//       },
//     ],
//   },
// };

// export default jestConfig;
import type { Config } from 'jest';

const jestConfig: Config = {
  //...
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
  },
};

export default jestConfig;