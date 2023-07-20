module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
  },
};
