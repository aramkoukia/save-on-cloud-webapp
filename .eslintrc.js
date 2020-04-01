module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: [
    'airbnb',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
  },
};
