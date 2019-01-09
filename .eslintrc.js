module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:jest/recommended',
    'prettier',
    'prettier/standard',
  ],
  rules: {
    'no-return-await': 0,
    'no-var': 2,
    'prefer-const': 2,
    'no-debugger': 2,
    'no-console': [2, { allow: ['info', 'error'] }],
  },
}
