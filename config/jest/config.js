module.exports = () => {
  const SRC = {
  	novux: 'src',
  	saga: 'src-saga',
  }[(process.env.REACT_APP_NOVUX && 'novux') || (process.env.REACT_APP_SAGA && 'saga')];

  const testMatch = [
    // `<rootDir>/${SRC}/**/*.{js,jsx,mjs}`,
    // `<rootDir>/${SRC}/**/__tests__/**/*.{js,jsx,mjs}`,
    `<rootDir>/${SRC}/**/*.test.{js,jsx,mjs}`
  ];

  return {
    collectCoverageFrom: [`${SRC}/**/*.{js,jsx}`],
    testMatch,
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
      '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
      '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
    setupFiles: ['<rootDir>/config/polyfills.js'],
    moduleNameMapper: {
      '^react-native$': 'react-native-web'
    },
    moduleFileExtensions: [
      'web.js',
      'mjs',
      'js',
      'json',
      'web.jsx',
      'jsx',
      'node'
    ]
  };
};
