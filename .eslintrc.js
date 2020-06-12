module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    browser: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'no-template-curly-in-string': 'off'
  }
}
