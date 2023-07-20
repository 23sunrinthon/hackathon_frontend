module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-multi-spaces': 'off',
    'key-spacing': 'off',
    semi: 'off', // 세미콜론 자동 추가 비활성화
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
