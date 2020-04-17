// 0 = off, 1 = warn, 2 = error
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  rules: {
    'import/no-unresolved': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'import/no-extraneous-dependencies': [1],
    'no-unused-expressions': [0],
    'no-console': [0],
    'no-lonely-if': [0],
  },
};
