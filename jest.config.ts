module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', 
      '\\.(css|less|scss|sass)$': '<rootDir>/jest.mock.js', 
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!aos/.*)'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
          ],
  };