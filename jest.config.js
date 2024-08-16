module.exports = {
    testEnvironment: 'node',
    // Remove or add the line depending on your needs
    // setupFilesAfterEnv: ['./jest.setup.js'], 
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    coverageReporters: ['text', 'lcov'],
  };