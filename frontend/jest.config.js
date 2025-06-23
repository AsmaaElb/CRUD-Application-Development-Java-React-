module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', 
    '^.+\\.mjs$': 'babel-jest'      
  },
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)' 
  ],
  testEnvironment: 'jsdom'
}
