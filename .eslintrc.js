module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
