const { textSpanContainsPosition } = require("typescript");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 0,
    indent: 'off',
    'max-len': ["error", { "code": 300 }],
    'lines-between-class-members' : 'off',
    'padded-blocks' : 'off',
  },
};
