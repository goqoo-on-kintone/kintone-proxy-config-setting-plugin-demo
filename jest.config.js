module.exports = {
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
  verbose: true,
  preset: 'ts-jest',
}
