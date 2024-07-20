module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'babel-jest',
    '\\.(css|less|scss|sass)$': '<rootDir>/jest/cssTransform.js',
  },
};
