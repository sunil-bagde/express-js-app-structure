module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13, // 2022
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' /*  "eslint-config-prettier"  */,
  ],
  plugins: ['prettier'] /*'eslint-plugin-prettier' */,
  env: { node: true },
  rules: {
    'prettier/prettier': 'error',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
};
